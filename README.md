# Digits Myanmar — Full-stack React project

## Project structure

- `client/` — React + Vite frontend (deploy to Vercel)
- `client/src/components/` — six independent page components, each containing its own JSX
- `client/src/App.jsx` — imports and selects the page components
- `server/` — Express API (deploy to Render)
- `server/db/schema.sql` — Neon PostgreSQL schema

There is no LegacyPage component, no pageData HTML-string source, and no `dangerouslySetInnerHTML` page renderer. The original website content is converted into JSX inside each page component.

## Run locally

1. Configure `server/.env` from `server/.env.example`.
2. Run `cd server && npm install && npm run dev`.
3. In another terminal, configure `client/.env` from `client/.env.example`.
4. Run `cd client && npm install && npm run dev`.
5. Open `http://localhost:5173`.

For contact and newsletter submissions, configure a Neon database and execute `server/db/schema.sql` first.

## Deploy

- Render: root directory `server`, build command `npm install`, start command `npm start`.
- Vercel: root directory `client`, framework Vite, build command `npm run build`, output directory `dist`.
- Neon: run `server/db/schema.sql` and set `DATABASE_URL` in Render.

Set `VITE_API_BASE_URL` in Vercel to the deployed Render API URL.
