# Deploying ORCA to the internet

This gets ORCA onto a real public URL, working on any device (Mac, Windows,
Linux, Android, iPhone — anything with a browser) and discoverable in Google
Search. No app-store submission is needed for any of that; the web app
works everywhere a browser exists the moment it has a public URL.

Two pieces get deployed separately:
- **Frontend** (`index.html`, `app.js`, `style.css`, `geodata.js`, icons) → **GitHub Pages**, free forever.
- **Backend** (`backend/`, the optional accuracy/AI-panel upgrade) → **Render**, free tier (sleeps after ~15 min idle; wakes in ~30-50s on the next request).

If you never deploy the backend, ORCA still works fully — it just uses its
built-in fallback data instead of the backend's satellite/AI extras (see the
comment at the top of `backend/main.py`).

## 1. Push the code to GitHub

Open a terminal (PowerShell) in this folder and run:

```powershell
cd "C:\Users\harsh\Downloads\ORCA_Marine_Intelligence_Complete_1\ORCA_Marine_Intelligence"
git init
git add .
git commit -m "Deploy ORCA Marine Intelligence"
git branch -M main
git remote add origin https://github.com/harshavardhansai9154/orca-marine-intelligence.git
git push -u origin main
```

Replace `harshavardhansai9154` with your GitHub username. Before the last command,
create the empty repo on GitHub first: go to github.com → **New repository**
→ name it `orca-marine-intelligence` → **Public** → don't add a README
(you already have one) → **Create repository**. Git will ask you to sign in
the first time you push.

## 2. Turn on GitHub Pages (the frontend)

On GitHub, open your new repo → **Settings** → **Pages** (left sidebar) →
under "Build and deployment", set **Source: Deploy from a branch**, branch
**main**, folder **/ (root)** → **Save**. After a minute your site is live at:

```
https://harshavardhansai9154.github.io/orca-marine-intelligence/
```

That's it — the frontend is now on the internet and works from any device.

## 3. Deploy the backend (optional, adds satellite data + AI panel)

1. Go to render.com → sign up (free, can use your GitHub login) → **New +** → **Blueprint**.
2. Connect the same GitHub repo. Render will read `render.yaml` from this
   folder automatically and set up the backend as a free web service named
   `orca-backend`.
3. Once created, open the service → **Environment** tab → add:
   - `GROQ_API_KEY` — your key from https://console.groq.com/keys (free, no card). Skip this if you don't want the AI panel — everything else still works.
   - `ALLOWED_ORIGINS` — `https://harshavardhansai9154.github.io` (no trailing slash) — locks the backend so only your site can call it.
4. Render gives you a URL like `https://orca-backend.onrender.com`. Copy it.

## 4. Point the frontend at the deployed backend

Open `app.js`, find this line near the top of the STATE section:

```js
const PRODUCTION_BACKEND_URL = ''; // e.g. 'https://orca-backend.onrender.com'
```

Paste your Render URL between the quotes, save, then repeat the git steps
from Section 1 (`git add . && git commit -m "point at deployed backend" && git push`)
to update the live site.

## 5. Domain placeholders — already done

`index.html`, `robots.txt`, and `sitemap.xml` are already filled in with
`https://harshavardhansai9154.github.io/orca-marine-intelligence/`, matching
the repo name used in Section 1. If you ever rename the repo or use a custom
domain instead, update those three files to match and push again.

## 6. Get it into Google Search

1. Go to https://search.google.com/search-console → **Add property** → paste your GitHub Pages URL.
2. Verify ownership the easy way: choose the **HTML tag** method, copy the `<meta name="google-site-verification" ...>` tag it gives you, paste it into `index.html`'s `<head>`, commit + push, then click **Verify** in Search Console.
3. In Search Console, go to **Sitemaps** (left sidebar) and submit `sitemap.xml`.
4. Google typically indexes a new small site within a few days to a couple of weeks — there's no way to force it faster, but submitting the sitemap is what gets it noticed at all.

## 7. Optional: install it like an app

Once live over https, opening the site on an Android phone or desktop Chrome
will offer "Install app" / "Add to Home Screen" (the `manifest.json` +
`sw.js` already added make this work) — fishermen get an app icon and a
faster, more reliable load without ever touching the Play Store.

## Notes

- The `backend/.env` file (your real Groq key) is in `.gitignore` — it will
  never be pushed to GitHub. Only the placeholder `.env.example` is public.
- If Render's free tier's cold-start delay (~30-50s after idling) is a
  problem once real fishermen depend on this, upgrade that one service to
  the $7/mo "Starter" plan in the Render dashboard — no code changes needed.
- Re-running the `git add . && git commit -m "..." && git push` sequence is
  how every future update to the live site gets published — GitHub Pages
  and Render both redeploy automatically within a minute or two of a push.
