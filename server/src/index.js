import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { pool } from "./db.js";

const app = express();
const port = Number(process.env.PORT || 10000);
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    // Allow server-to-server tools and local curl requests with no Origin header.
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS"));
  },
}));
app.use(express.json({ limit: "20kb" }));

const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." },
});

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(5).max(5000),
});
const newsletterSchema = z.object({ email: z.string().trim().email().max(254) });

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "digits-myanmar-api" }));

app.post("/api/contact", submissionLimiter, async (req, res, next) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Please check the required fields and try again." });
  try {
    const { name, email, phone, subject, message } = parsed.data;
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at`,
      [name, email.toLowerCase(), phone, subject, message]
    );
    return res.status(201).json({ message: "Thank you! Your message has been received.", id: result.rows[0].id });
  } catch (error) { return next(error); }
});

app.post("/api/newsletter", submissionLimiter, async (req, res, next) => {
  const parsed = newsletterSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Please enter a valid email address." });
  try {
    const email = parsed.data.email.toLowerCase();
    const result = await pool.query(
      `INSERT INTO newsletter_subscribers (email)
       VALUES ($1)
       ON CONFLICT (email) DO UPDATE SET updated_at = NOW(), is_active = TRUE
       RETURNING id`,
      [email]
    );
    return res.status(201).json({ message: "Thanks for subscribing to Digits Myanmar!", id: result.rows[0].id });
  } catch (error) { return next(error); }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  if (error.message === "Origin is not allowed by CORS") return res.status(403).json({ error: "Origin not allowed." });
  return res.status(500).json({ error: "An unexpected server error occurred." });
});

app.listen(port, () => console.log(`Digits Myanmar API listening on port ${port}`));
