// pages/contact.jsx
import { useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  // form state
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "ok"|"err", msg: string }

  async function submit(e) {
    e.preventDefault();
    setStatus(null);

    // basic client validation
    if (!message.trim()) {
      setStatus({ type: "err", msg: "Please write a message." });
      return;
    }
    // email optional; if provided, do a quick pattern check
    if (replyTo && !/^\S+@\S+\.\S+$/.test(replyTo)) {
      setStatus({ type: "err", msg: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim() || null,
      reply_to: replyTo.trim() || null,
      message: message.trim(),
    });
    setSubmitting(false);

    if (error) {
      setStatus({ type: "err", msg: error.message || "Failed to send. Try again." });
      return;
    }
    setName("");
    setReplyTo("");
    setMessage("");
    setStatus({ type: "ok", msg: "Thanks! Your message has been sent." });
  }

  return (
    <Layout>
      <div className="card" style={{ marginTop: 8 }}>
        {/* Buttons row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
          }}
        >

          <a
            className="contact-btn"
            href="https://www.instagram.com/anandysocialgame/"
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
            <div className="contact-text">
              <div className="contact-title">Instagram</div>
              <div className="contact-sub small">@anandysocialgame</div>
            </div>
          </a>

          <a
            className="contact-btn"
            href="https://discord.gg/PmWMEH8RWJ"
            target="_blank"
            rel="noreferrer"
          >
            <IconDiscord />
            <div className="contact-text">
              <div className="contact-title">Discord</div>
              <div className="contact-sub small">Join the server</div>
            </div>
          </a>
        </div>
      </div>

      {/* Email form (Supabase) */}
      <div className="card" id="contact-form" style={{ marginTop: 12 }}>
        <form onSubmit={submit} className="contact-form">
          <div className="badge">Contact Form</div>

          <div className="form-row">
            <div className="form-col">
              <label className="small" htmlFor="name">Name (optional)</label>
              <input
                id="name"
                className="input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div className="form-col">
              <label className="small" htmlFor="email">Reply email (optional)</label>
              <input
                id="email"
                className="input"
                placeholder="you@example.com"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label className="small" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="textarea"
              rows={6}
              placeholder="Write your message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="admin-actions" style={{ marginTop: 8 }}>
            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send"}
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setName("");
                setReplyTo("");
                setMessage("");
                setStatus(null);
              }}
            >
              Clear
            </button>
          </div>

          {status && (
            <div
              className="small"
              style={{
                marginTop: 8,
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.22)",
                background:
                  status.type === "ok"
                    ? "rgba(34,197,94,0.25)"
                    : "rgba(239,68,68,0.25)",
              }}
            >
              {status.msg}
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .contact-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(10, 10, 22, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: background 140ms ease, border-color 140ms ease, transform 100ms ease;
          color: inherit;
          text-decoration: none;
        }
        .contact-btn:hover {
          background: rgba(124, 58, 237, 0.18);
          border-color: rgba(255, 255, 255, 0.28);
        }
        .contact-btn:active { transform: translateY(1px); }

        .contact-text { display: grid; gap: 2px; }
        .contact-title { font-weight: 800; letter-spacing: 0.2px; }
        .contact-sub { opacity: 0.9; }

        .contact-form { display: grid; gap: 12px; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .form-col { display: grid; gap: 6px; }

        @media (max-width: 720px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-btns { grid-template-columns: 1fr; }
        }
      `}</style>
    </Layout>
  );
}

/* ── Minimal inline SVG icons (no extra deps) ─────────────────────── */
function IconInstagram(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconDiscord(props) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 71 55"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M60.104 4.552A58.13 58.13 0 0 0 46.852.8a40.67 40.67 0 0 0-1.9 3.99 53.02 53.02 0 0 0-15.9 0 40.76 40.76 0 0 0-1.9-3.99 58.14 58.14 0 0 0-13.25 3.75C4.478 17.275 1.33 29.584 2.516 41.69a58.63 58.63 0 0 0 17.896 9.014 42.48 42.48 0 0 0 3.84-6.205 37.48 37.48 0 0 1-5.982-2.85c.5-.37.99-.75 1.46-1.14 11.49 5.373 23.9 5.373 35.33 0 .48.39.96.77 1.46 1.14a37.52 37.52 0 0 1-5.99 2.86 42.42 42.42 0 0 0 3.84 6.2 58.63 58.63 0 0 0 17.9-9.014c1.27-12.747-2.07-25.057-9.666-37.14ZM23.725 36.675c-3.49 0-6.333-3.245-6.333-7.238 0-3.994 2.82-7.24 6.333-7.24 3.515 0 6.35 3.246 6.333 7.24 0 3.993-2.82 7.238-6.333 7.238Zm23.55 0c-3.49 0-6.333-3.245-6.333-7.238 0-3.994 2.82-7.24 6.333-7.24 3.515 0 6.35 3.246 6.333 7.24 0 3.993-2.818 7.238-6.333 7.238Z" />
    </svg>
  );
}
