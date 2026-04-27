# 🚀 Deploy Harika's Portfolio for FREE

Total cost: **$0/month** · Total time: **~20 minutes** · One-time setup only.

You will deploy:
- **Frontend (React)** → Vercel (free, unlimited bandwidth)
- **Backend (FastAPI)** → Render.com (free tier, 750 hrs/mo)
- **Database** → MongoDB Atlas (free 512 MB tier)

---

## 📦 Step 0 — Get the Code onto GitHub (5 min)

1. Go to https://github.com/new and create a new **public** repo, e.g. `harika-portfolio`.
2. In Emergent, click the **Save to GitHub** button (or Export → ZIP) and push your code to that repo.
3. Verify at `https://github.com/<your-username>/harika-portfolio` that you can see `backend/` and `frontend/` folders.

---

## 🗄️ Step 1 — Free MongoDB on Atlas (5 min)

1. Go to https://www.mongodb.com/cloud/atlas/register and sign up (free, no credit card).
2. Click **Build a Database** → pick the **Free M0 cluster** → choose any region near India → **Create**.
3. Create a database user:
   - Username: `harika`
   - Password: click **Autogenerate Secure Password** → **copy it somewhere safe**
4. Network Access → **Add IP Address** → click **ALLOW ACCESS FROM ANYWHERE** (`0.0.0.0/0`) → Confirm.
5. Back on the Cluster page → **Connect** → **Drivers** → copy the connection string. It looks like:
   ```
   mongodb+srv://harika:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` in the string with the actual password you saved.
   → **Keep this full URI handy. You'll paste it into Render in the next step.**

---

## ⚙️ Step 2 — Deploy Backend on Render (5 min)

1. Go to https://render.com and sign up with your GitHub account.
2. Click **New +** → **Web Service** → **Connect** your GitHub repo `harika-portfolio`.
3. Fill in these fields:
   | Field | Value |
   |---|---|
   | **Name** | `harika-portfolio-api` |
   | **Region** | Singapore (closest to India) |
   | **Branch** | `main` |
   | **Root Directory** | `backend` |
   | **Runtime** | `Python 3` |
   | **Build Command** | `pip install -r requirements.txt` |
   | **Start Command** | `uvicorn server:app --host 0.0.0.0 --port $PORT` |
   | **Instance Type** | **Free** |
4. Scroll to **Environment Variables** → add these 3:
   | Key | Value |
   |---|---|
   | `MONGO_URL` | *(paste the Atlas URI from Step 1)* |
   | `DB_NAME` | `harika_portfolio` |
   | `CORS_ORIGINS` | `*` *(we'll lock this down in Step 4)* |
5. Click **Create Web Service** and wait ~3 minutes for the first build to finish.
6. When it's live, Render gives you a URL like:
   ```
   https://harika-portfolio-api.onrender.com
   ```
7. Test it by visiting `https://harika-portfolio-api.onrender.com/api/` in your browser. You should see:
   ```json
   {"message":"Harika Katta portfolio API is running."}
   ```
   ✅ Backend live!

> ⚠️ **Render free tier sleeps after 15 minutes of inactivity.** First visit after a sleep takes ~30 seconds to wake up. This is normal on free tier.

---

## 🌐 Step 3 — Deploy Frontend on Vercel (5 min)

1. Go to https://vercel.com and sign up with your GitHub account.
2. Click **Add New → Project** → **Import** your `harika-portfolio` repo.
3. Configure:
   | Field | Value |
   |---|---|
   | **Framework Preset** | `Create React App` |
   | **Root Directory** | `frontend` |
   | **Build Command** | `yarn build` *(default is fine)* |
   | **Output Directory** | `build` *(default)* |
4. Expand **Environment Variables** and add:
   | Key | Value |
   |---|---|
   | `REACT_APP_BACKEND_URL` | `https://harika-portfolio-api.onrender.com` *(your Render URL from Step 2)* |
5. Click **Deploy** and wait ~2 minutes.
6. Vercel will give you a URL like:
   ```
   https://harika-portfolio.vercel.app
   ```
   ✅ Your portfolio is live!

---

## 🔒 Step 4 — Lock Down CORS (1 min, recommended)

For security, restrict the backend to accept requests only from your Vercel domain.

1. Go back to **Render → harika-portfolio-api → Environment**
2. Edit `CORS_ORIGINS` from `*` to your Vercel URL, e.g.:
   ```
   https://harika-portfolio.vercel.app
   ```
3. Save → Render redeploys automatically (~1 min).

---

## 🎨 Step 5 — Custom Domain (optional)

If you own a domain like `harikakatta.in`:
- **Vercel** → Project → Settings → Domains → add `harikakatta.in` → follow DNS steps
- **Render** → Service → Settings → Custom Domains → add `api.harikakatta.in`
- Update `CORS_ORIGINS` on Render and `REACT_APP_BACKEND_URL` on Vercel to match.

---

## 📬 Step 6 — Read Recruiter Messages

Whenever you want to see who messaged you via the contact form, open:
```
https://harika-portfolio-api.onrender.com/api/contact
```
You'll get a JSON list of every message with name, email, subject, message, and timestamp.

*(Later, we can build a small password-protected admin page if you like.)*

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub public repo
- [ ] MongoDB Atlas cluster created, connection URI saved
- [ ] Render backend live — `/api/` returns JSON ✅
- [ ] Vercel frontend live — portfolio renders ✅
- [ ] Contact form sends a message successfully (test it yourself!)
- [ ] CORS locked to Vercel domain only
- [ ] LinkedIn "Featured" updated with your new portfolio URL 🎉

---

## 🆘 Troubleshooting

**Render build fails** → check logs; usually a missing package in `backend/requirements.txt` or wrong root directory (must be `backend`).

**Vercel build fails** → make sure **Root Directory = `frontend`** and env var `REACT_APP_BACKEND_URL` is set.

**Contact form fails with CORS error** → go to Render env, make sure `CORS_ORIGINS` exactly matches your Vercel URL (no trailing slash, include `https://`).

**"Cannot connect to MongoDB"** → verify the Atlas connection string and that Network Access allows `0.0.0.0/0`.

**Free tier sleeping** → Render's free tier sleeps after 15 min. Upgrade to Starter ($7/mo) if you want it always-on. For a portfolio, sleep is fine — first visitor triggers wake-up.

---

Enjoy your free, production-ready portfolio! 🎉
If anything gets stuck, come back to the Emergent workspace and paste me the error — I'll help debug.
