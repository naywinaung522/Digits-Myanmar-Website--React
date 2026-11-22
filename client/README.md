# Digits Myanmar React client

Each website page is implemented directly as JSX in its own component:

- `src/components/Home.jsx`
- `src/components/About.jsx`
- `src/components/News.jsx`
- `src/components/Blog.jsx`
- `src/components/Support.jsx`
- `src/components/Contact.jsx`

`src/App.jsx` imports and selects these page components based on the URL path. There is no `LegacyPage`, no `pageData.js`, and no HTML-string rendering.

Run locally:

```bash
npm install
npm run dev
```

Configure `VITE_API_BASE_URL` in `.env` to point at the backend API. During local development, use `http://localhost:10000`.
