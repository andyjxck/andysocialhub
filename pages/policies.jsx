// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

// Structured content (JSX, not giant strings)
const content = {
  "game-void": {
    subtitle: "Arcade hub of classic & puzzle games",
    privacy: (
      <>
        <p>
          Game Void is an arcade hub of classic and puzzle-style games. We keep data
          collection minimal and focused on operating the game and supporting ads.
        </p>
        <h4>Data We Collect</h4>
        <ul>
          <li>
            <strong>Advertising ID</strong> (e.g., IDFA on iOS where allowed) for ad delivery and
            measurement via Google AdMob.
          </li>
          <li>
            <strong>Basic usage</strong> (screens viewed, taps, session length) to improve stability and
            gameplay balance.
          </li>
        </ul>
        <h4>How We Use It</h4>
        <ul>
          <li>Serve and measure ads (frequency capping, performance, fraud prevention).</li>
          <li>Fix crashes and improve performance.</li>
        </ul>
        <h4>Your Choices</h4>
        <ul>
          <li>Manage tracking and ad preferences in your device settings.</li>
          <li>Opt out of personalized ads where supported by the platform.</li>
        </ul>
        <p>
          We don’t request your name or email inside the game and we don’t sell personal data.
          Some processing is done by trusted providers to operate the app.
        </p>
      </>
    ),
    terms: (
      <>
        <p>
          By playing Game Void, you agree to these straightforward terms.
        </p>
        <ul>
          <li>Use the game for personal entertainment; don’t cheat or exploit bugs.</li>
          <li>Don’t interfere with servers, ads, or third-party SDKs.</li>
          <li>
            <strong>Virtual items/scores</strong> have no real-world value and may be changed or removed.
          </li>
          <li>
            The app is provided <em>“as is”</em>; we aren’t liable for lost progress or downtime.
          </li>
          <li>We may update features or these terms; continued use means you accept updates.</li>
        </ul>
      </>
    ),
  },
  "social-void": {
    subtitle: "Merge-based progression game",
    privacy: (
      <>
        <p>
          Social Void is a merge game focused on collecting, upgrading, and progressing. We
          collect only what’s needed to run the game and support ads.
        </p>
        <h4>Data We Collect</h4>
        <ul>
          <li>
            <strong>Advertising ID</strong> (IDFA/AAID) for ads and measurement (Google AdMob).
          </li>
          <li>
            <strong>Gameplay stats</strong> (levels, merges, achievements) so progress can be saved or
            balanced.
          </li>
        </ul>
        <h4>How We Use It</h4>
        <ul>
          <li>Deliver ads and understand performance.</li>
          <li>Keep the game stable and tune progression/rewards.</li>
        </ul>
        <h4>Your Choices</h4>
        <ul>
          <li>Control tracking/ads in device settings; opt out of personalized ads where supported.</li>
        </ul>
        <p>
          We don’t sell personal data and only use trusted services to operate and improve the app.
        </p>
      </>
    ),
    terms: (
      <>
        <p>By using Social Void, you agree to:</p>
        <ul>
          <li>Play fairly — no cheating, hacking, or abuse.</li>
          <li>
            Understand that <strong>virtual items/progress</strong> have no cash value and may change.
          </li>
          <li>
            Accept the app is provided <em>“as is”</em>; we’re not liable for lost progress or interruptions.
          </li>
          <li>We may update features or these terms; continued play means you accept updates.</li>
        </ul>
      </>
    ),
  },
};

const apps = [
  { id: "game-void", title: "Game Void" },
  { id: "social-void", title: "Social Void" },
];

export default function Policies() {
  const [openId, setOpenId] = useState(null);
  return (
    <Layout>
      <div className="policies-grid">
        {apps.map(({ id, title }) => {
          const isOpen = openId === id;
          return (
            <PolicyTile
              key={id}
              appId={id}
              title={title}
              subtitle={content[id].subtitle}
              isOpen={isOpen}
              onToggle={() => setOpenId(isOpen ? null : id)}
              privacy={content[id].privacy}
              terms={content[id].terms}
            />
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Account Deletion Section (below both tiles)
      ───────────────────────────────────────────────────────────── */}
      <section className="delete-section" aria-labelledby="delete-title">
        <h2 id="delete-title">Delete Your Account</h2>
        <p>
          If you want your account and related in-game data removed, contact me using one of the
          methods listed on the <a href="/contact">Contact</a> page (email, Discord, or Instagram).
        </p>

        <h4>What to include</h4>
        <ul>
          <li>Your <strong>User ID</strong> (shown in-app).</li>
        </ul>

        <h4>Quick verification</h4>
        <p>
          To confirm ownership, I’ll ask a couple of short questions. As part of this check, I’ll
          temporarily change one of your in-game stats and ask you to confirm the number you see.
        </p>

        <h4>What happens next</h4>
        <ul>
          <li>Once verified, I’ll delete your account and remove related entries from our database.</li>
          <li>
            Deletion is permanent and cannot be undone. If you return later, you’ll start fresh with a
            new account.
          </li>
        </ul>

        <p className="small-hint">
          Tip: If you can’t access your User ID, let me know which game you last played and any details
          that help me find your account faster.
        </p>
      </section>

      <style jsx>{`
        .policies-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .policies-grid { grid-template-columns: 1fr 1fr; }
        }

        /* Account Deletion styles */
        .delete-section {
          margin-top: 28px;
          padding: 18px 16px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,10,22,0.28);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(7,7,12,0.15);
        }
        .delete-section h2 {
          margin: 0 0 10px 0;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .delete-section h4 {
          margin: 14px 0 8px;
          font-size: 14px;
          opacity: 0.95;
        }
        .delete-section p {
          margin: 0;
          line-height: 1.65;
          opacity: 0.95;
        }
        .delete-section p + p { margin-top: 8px; }
        .delete-section ul {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 6px;
        }
        .small-hint {
          margin-top: 10px;
          opacity: 0.75;
          font-size: 13px;
        }
      `}</style>
    </Layout>
  );
}

function PolicyTile({ appId, title, subtitle, isOpen, onToggle, privacy, terms }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="tile">
      {/* Header */}
      <button
        className="tile-head"
        onClick={() => {
          onToggle();
          if (isOpen) setFlipped(false);
        }}
        aria-expanded={isOpen}
        aria-controls={`${appId}-panel`}
      >
        <div className="head-left">
          <div className="dot" aria-hidden />
          <div>
            <div className="tile-title">{title}</div>
            <div className="tile-sub small">{subtitle}</div>
          </div>
        </div>
        <span className="chev">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Body */}
      <div id={`${appId}-panel`} className={`tile-body ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="flip-wrap">
            <div
              className={`flip ${flipped ? "isBack" : ""}`}
              onClick={() => setFlipped((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)}
              aria-label={flipped ? "Show Privacy Policy" : "Show Terms of Service"}
            >
              {/* FRONT: Privacy */}
              <div className="flip-face">
                <h3 className="face-title">Privacy Policy</h3>
                <div className="prose">{privacy}</div>
                <div className="hint small">Click card to view Terms →</div>
              </div>

              {/* BACK: Terms */}
              <div className="flip-face back">
                <h3 className="face-title">Terms of Service</h3>
                <div className="prose">{terms}</div>
                <div className="hint small">← Click card to view Privacy</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles (scoped) */}
      <style jsx>{`
        .tile {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,10,22,0.28);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(7,7,12,0.15);
        }

        .tile-head {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: none;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          font-weight: 700;
          letter-spacing: 0.2px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          color: inherit;
          text-align: left;
        }
        .tile-head:hover { background: rgba(124,58,237,0.15); }

        .head-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #7c3aed, #4c1d95);
          box-shadow: 0 0 10px rgba(124,58,237,0.6);
          flex-shrink: 0;
        }
        .tile-title { font-weight: 800; }
        .tile-sub { opacity: 0.85; }

        .chev { opacity: 0.9; font-size: 13px; }

        .tile-body {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-4px);
          transition: max-height 260ms ease, opacity 180ms ease, transform 180ms ease;
        }
        .tile-body.open {
          max-height: 1200px;
          opacity: 1;
          transform: translateY(0);
        }

        /* Flip card */
        .flip-wrap { padding: 14px; perspective: 1200px; }
        .flip {
          position: relative;
          width: 100%;
          min-height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
          cursor: pointer;
        }
        .flip.isBack { transform: rotateY(180deg); }

        .flip-face {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 18px 16px;
          backface-visibility: hidden;
          overflow: auto;
          display: grid;
          gap: 12px;
        }
        .flip-face.back { transform: rotateY(180deg); }
        .face-title { margin: 0; font-size: 18px; font-weight: 800; }

        /* Nice readable typography inside cards */
        .prose :global(p) { margin: 0; }
        .prose :global(p + p) { margin-top: 8px; }
        .prose :global(h4) { margin: 4px 0 4px; font-size: 14px; opacity: 0.95; }
        .prose :global(ul) { margin: 0; padding-left: 18px; display: grid; gap: 6px; }
        .prose :global(li) { line-height: 1.55; }
        .prose { font-size: 13.5px; opacity: 0.95; line-height: 1.65; }

        .hint { opacity: 0.7; text-align: right; }
        @media (max-width: 900px) {
          .flip-wrap { padding: 12px; }
          .flip { min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
