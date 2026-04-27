# API Contracts — Harika Katta Portfolio

## Goal
Make the contact form server-backed so recruiter messages are persisted in MongoDB.
Portfolio content (profile, skills, projects, experience, education, certifications) stays
in `frontend/src/mock.js` because it is static / changes rarely. Only the dynamic surface
(contact submissions) needs a backend.

---

## Endpoints (all under `/api`)

### 1. `POST /api/contact`
Save a recruiter / visitor message.

Request body:
```json
{
  "name": "Jane Recruiter",
  "email": "jane@company.com",
  "subject": "Cloud Engineer role at Acme",   // optional
  "message": "Hi Harika, ..."
}
```

Validation:
- `name`: non-empty, ≤ 120 chars
- `email`: valid email
- `subject`: optional, ≤ 200 chars
- `message`: non-empty, ≤ 5000 chars

Response (201):
```json
{
  "id": "uuid",
  "name": "Jane Recruiter",
  "email": "jane@company.com",
  "subject": "...",
  "message": "...",
  "created_at": "2025-..."
}
```

### 2. `GET /api/contact`
List all messages (admin / owner). Newest first.

Response (200):
```json
{
  "count": 3,
  "items": [ { ContactMessage }, ... ]
}
```

### 3. `GET /api/contact/stats`
Quick counters for an optional dashboard.
```json
{ "total": 3, "last_24h": 1 }
```

---

## MongoDB Collection

**`contact_messages`**
| field       | type     | notes                              |
|-------------|----------|------------------------------------|
| id          | string   | uuid4 (primary, used in API)       |
| name        | string   |                                    |
| email       | string   |                                    |
| subject     | string?  | optional                           |
| message     | string   |                                    |
| created_at  | datetime | UTC ISO                            |
| ip_hash     | string?  | optional, for light abuse trace    |

We use `id` (uuid string) instead of Mongo's `_id` ObjectId so JSON serialisation
is trivial.

---

## Frontend Integration

File: `/app/frontend/src/components/Contact.jsx`

Currently mocked: form `onSubmit` writes to `localStorage`.
After integration:
- Replace localStorage write with `axios.post(`${API}/contact`, payload)`
- On success → `toast.success(...)` + reset form
- On 4xx/5xx → `toast.error(server message)`
- API base URL: `import.meta.env.REACT_APP_BACKEND_URL` → `${BACKEND_URL}/api`

Mock data that **stays** (frontend-only, no backend needed):
- `profile`, `stats`, `skills`, `projects`, `experience`, `education`,
  `certifications`, `achievements`, `navLinks` — all in `mock.js`.

---

## Environment
- Backend: existing `MONGO_URL`, `DB_NAME` from `/app/backend/.env`
- Frontend: existing `REACT_APP_BACKEND_URL` from `/app/frontend/.env`
- No new env vars required for MVP.

## Out of Scope (for now)
- Email notification on new message (can add SendGrid / Emergent later)
- Admin auth on `GET /api/contact` (single-user portfolio, low risk)
- Rate limiting (relying on form UX + ingress for now)
