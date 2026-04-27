from fastapi import FastAPI, APIRouter, HTTPException, Request, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import hashlib
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timedelta, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ---------------------------------------------------------------------------
# Mongo
# ---------------------------------------------------------------------------
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------
app = FastAPI(title="Harika Katta Portfolio API", version="1.0.0")
api_router = APIRouter(prefix="/api")


# ---------------------------------------------------------------------------
# Existing scaffolding (kept for compatibility)
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "Harika Katta portfolio API is running."}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**r) for r in rows]


# ---------------------------------------------------------------------------
# Contact messages
# ---------------------------------------------------------------------------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)

    @field_validator("name", "message")
    @classmethod
    def _strip(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Field cannot be blank.")
        return v

    @field_validator("subject")
    @classmethod
    def _strip_optional(cls, v):
        if v is None:
            return v
        v = v.strip()
        return v or None


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    ip_hash: Optional[str] = None


class ContactListResponse(BaseModel):
    count: int
    items: List[ContactMessage]


class ContactStats(BaseModel):
    total: int
    last_24h: int


def _hash_ip(ip: Optional[str]) -> Optional[str]:
    if not ip:
        return None
    return hashlib.sha256(ip.encode("utf-8")).hexdigest()[:16]


@api_router.post(
    "/contact",
    response_model=ContactMessage,
    status_code=status.HTTP_201_CREATED,
)
async def create_contact(payload: ContactCreate, request: Request):
    client_ip = request.client.host if request.client else None
    msg = ContactMessage(
        **payload.dict(),
        ip_hash=_hash_ip(client_ip),
    )
    doc = msg.dict()
    # Mongo can serialise datetime; store as-is.
    await db.contact_messages.insert_one(doc)
    logger.info("New contact message from %s <%s>", msg.name, msg.email)
    return msg


@api_router.get("/contact", response_model=ContactListResponse)
async def list_contacts(limit: int = 100):
    limit = max(1, min(limit, 500))
    cursor = db.contact_messages.find().sort("created_at", -1).limit(limit)
    rows = await cursor.to_list(length=limit)
    items = [ContactMessage(**{k: v for k, v in r.items() if k != "_id"}) for r in rows]
    return ContactListResponse(count=len(items), items=items)


@api_router.get("/contact/stats", response_model=ContactStats)
async def contact_stats():
    total = await db.contact_messages.count_documents({})
    since = datetime.now(timezone.utc) - timedelta(hours=24)
    last_24h = await db.contact_messages.count_documents({"created_at": {"$gte": since}})
    return ContactStats(total=total, last_24h=last_24h)


# ---------------------------------------------------------------------------
# Wire up
# ---------------------------------------------------------------------------
app.include_router(api_router)

# Parse CORS origins from env (comma-separated list, "*" allows any)
_cors_raw = os.environ.get("CORS_ORIGINS", "*").strip()
if _cors_raw in {"", "*"}:
    _cors_origins = ["*"]
else:
    _cors_origins = [o.strip() for o in _cors_raw.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=_cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
