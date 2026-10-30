# Affan Sheikh — Portfolio

Personal portfolio of **Muhammad Affan Sheikh**: full-stack and mobile developer, CI/CD, and performance marketer.

**Live:** https://affansheikh125-coder.github.io

**Stack:** React 18 (Vite) · Node.js · Express · Nodemailer · GitHub Actions CI/CD · GitHub Pages / Render

```
affan-portfolio/
├── client/                 React frontend (Vite)
│   └── src/
│       ├── data.js         ← your name, email, WhatsApp, LinkedIn (edit here)
│       └── components/     Hero, About, Services, Skills, Mobile, Pipeline, Automation, Marketing, Projects, Contact
├── server/                 Express API: POST /api/contact → emails you
├── .github/workflows/pages.yml  CI/CD: build → deploy to GitHub Pages
├── .github/workflows/ci.yml     CI/CD: build → test → deploy to Render (optional)
└── render.yaml             Render hosting config
```

---

## 1. Run it on your computer

You need [Node.js 20+](https://nodejs.org).

```bash
npm run install:all
cp server/.env.example server/.env     # then fill in your Gmail App Password (step 2)

# terminal 1
npm run dev:server        # API on http://localhost:5000
# terminal 2
npm run dev:client        # site on http://localhost:5173
```

## 2. Make the contact form email you (Gmail App Password)

1. Turn on **2-Step Verification**: https://myaccount.google.com/security
2. Create an **App Password**: https://myaccount.google.com/apppasswords (name it "Portfolio")
3. Copy the 16-character password into `server/.env` as `GMAIL_APP_PASSWORD`.

Every form submission arrives at **affansheikh125@gmail.com**. Press **Reply** and you answer the client directly.

> ⚠️ Never upload `.env` to GitHub. It's already in `.gitignore`.

## 3. Go live at https://affansheikh125-coder.github.io (free, opens in every browser)

1. On GitHub, create a **new public repository** named exactly **`affansheikh125-coder.github.io`**.
2. Upload the contents of this folder (or push with git):
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/affansheikh125-coder/affansheikh125-coder.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to turn green (about 1–2 minutes).

Your site is now live at **https://affansheikh125-coder.github.io** for anyone, on any browser or phone.
Every future `git push` rebuilds and redeploys it automatically (`.github/workflows/pages.yml`).

**Contact form on GitHub Pages:** there's no Node server there, so the form sends through FormSubmit
(free) to affansheikh125@gmail.com. The **first** time someone submits, FormSubmit emails you an
activation link. Click it once, and every message after that arrives in your inbox.
Send yourself a test message right after going live.

## 4. Optional: your own domain (e.g. affansheikh.com)

Buy a domain (around $10/year from Namecheap, Cloudflare or GoDaddy), then go to
**Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## 5. Optional: run the Node.js backend on Render

If you want the form to go through your own Express API instead of FormSubmit:

1. Sign up at https://render.com with GitHub → **New → Blueprint** → pick the repo (it reads `render.yaml`).
2. Fill in `GMAIL_USER` and `GMAIL_APP_PASSWORD` (step 2), then **Apply**.
3. For auto-deploys after tests pass, copy Render's **Deploy Hook** URL into a GitHub Actions secret named
   `RENDER_DEPLOY_HOOK` (used by `.github/workflows/ci.yml`).

If the form times out on Render, the host is blocking email ports. Sign up at https://resend.com with
affansheikh125@gmail.com and set `RESEND_API_KEY` instead.


---

## SEO checklist (already set up)
- Title, meta description, canonical URL, Open Graph + Twitter share image (`client/public/og-image.png`)
- Structured data (JSON-LD): Person, ProfessionalService, WebSite and FAQPage, in `client/index.html`
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, favicons and app icons in `client/public/`
- One `<h1>`, alt text on images, `<noscript>` fallback text for crawlers, FAQ section on the page

If you edit the FAQ, update both `client/src/faq.js` and the FAQPage block in `client/index.html`.

### After going live
1. **Google Search Console** (https://search.google.com/search-console): add a *URL prefix* property for
   `https://affansheikh125-coder.github.io/`, choose **HTML file** verification, put the downloaded
   `googleXXXX.html` file in `client/public/`, push, then click Verify.
2. In Search Console open **Sitemaps** and submit `sitemap.xml`.
3. Use **URL Inspection → Request indexing** for the home page.
4. **Bing Webmaster Tools** (https://www.bing.com/webmasters): sign in and **Import from Google Search Console**.
5. Test the share preview: paste your link into https://www.opengraph.xyz or a WhatsApp chat.
6. Add the site link to your LinkedIn, GitHub, Fiverr and Upwork profiles. Links from these profiles help Google find and trust the site.
