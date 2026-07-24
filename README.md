# Anupam Indradeep Singh — Portfolio

Personal portfolio site built with React, Vite, Tailwind CSS v4, and Framer Motion. Features an interactive terminal hero (`whoanupam` command), fully data-driven content, and a working contact form.

## Tech Stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Framer Motion** — scroll reveals and page transitions
- **React Router v7** — multi-page routing
- **Web3Forms-powered contact form** — no backend, delivers straight to your inbox (falls back to `mailto:` until configured)

## Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf         # downloadable resume
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Layout, ScrollToTop
│   │   ├── ui/             # Button, Card, Badge, SectionHeading, PageHeader
│   │   └── terminal/       # Terminal.jsx — the interactive hero
│   ├── sections/           # Hero, Stats, SkillsPreview, FeaturedProjects
│   ├── pages/               # Home, About, Experience, Projects, Achievements, Contact, NotFound
│   ├── data/                 # ALL editable content lives here — see below
│   ├── hooks/                 # useTypingEffect
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## Editing content

All real content is isolated in `src/data/` so you never have to touch component code to update information:

| File | Controls |
|---|---|
| `data/profile.js` | Name, tagline, contact info, social links, resume path, hero stats |
| `data/skills.js` | Skills grid categories |
| `data/experience.js` | Experience timeline (Clientell AI, 180DC, SARC) |
| `data/projects.js` | Project cards (Syncly, Jioresume) |
| `data/achievements.js` | Achievements list + education history |
| `data/codingProfiles.js` | LeetCode/Codeforces/GFG/GitHub stat cards |

To add a new project, experience entry, or skill — just add an object to the relevant array. No JSX changes needed.

## Contact form setup (Web3Forms)

The contact form (`src/pages/Contact.jsx`) submits directly to [Web3Forms](https://web3forms.com) — a free, backend-free form-delivery API. Until it's configured, submissions fall back to opening the visitor's email client via `mailto:`.

**To enable real email delivery:**
1. Go to https://web3forms.com and sign up **using the inbox you want messages delivered to** (`luckyanu1332005@gmail.com`)
2. Copy the access key it gives you
3. Locally: copy `.env.example` to `.env` and paste the key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
4. On Vercel: go to **Project Settings → Environment Variables** and add the same variable + value, then redeploy

**Note on the access key:** this is a public site key by design (comparable to a reCAPTCHA site key) — Web3Forms is built to be called directly from the browser. It is not a secret credential, but it's still kept out of source control via `.env` so it stays configurable per environment.

Once set up, the form validates input client-side, sends the message via Web3Forms, shows a success/error message, and resets on success.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/`.

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to vercel.com/new, import the repo
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build` · Output directory: `dist`
5. Deploy

## What NOT to upload / commit

- `node_modules/` (already in `.gitignore`)
- `dist/` (build output, already in `.gitignore`)
- Any `.env` file with secrets, if you add one later
