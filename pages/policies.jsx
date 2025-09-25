// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

const policyText = {
  "game-void": {
    privacy: `
We collect minimal analytics and advertising signals to operate the app
and show ads. We do not sell personal data. For ad delivery and measurement,
our partners may process device identifiers. You can opt for non-personalized
ads in the app settings.`,
    terms: `
By using Game Void you agree not to abuse services, attempt to reverse
engineer, or exploit bugs. Content is provided "as is" without warranties.
We may update these terms; continued use means acceptance.`,
  },
  "social-void": {
    privacy: `
We collect gameplay stats to sync progress and may use advertising identifiers
for ad measurement. You can disable personalized ads where supported. Data
is stored securely with trusted providers.`,
    terms: `
Use Social Void responsibly; don't attempt cheating or unauthorized access.
Service is provided "as is" with no warranties. We may update terms from time to time.`,
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
        {apps.map((app) => {
          const isOpen = openId === app.id;
          return (
            <PolicyTile
              key={app.id}
              appId={app.id}
              title={app.title}
              isOpen={isOpen}
              onToggle={() => setOpenId(isOpen ? null : app.id)}
              privacy={policyText[app.id].privacy}
              terms={policyText[app.id].terms}
            />
          );
        })}
      </div>

      <style jsx>{`
        .policies-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .policies-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}

function PolicyTile({ appId, title, isOpen, onToggle, privacy, terms }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="tile">
      {/* Clickable header (glassy, minimal) */}
      <div
        className={`tile-head ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
        aria-expanded={isOpen}
        aria-controls={`${appId}-panel`}
      >
        <div className="tile-title">{title}</div>
        <div className="chev" aria-hidden>
          {isOpen ? "▲" : "▼"}
        </div>
      </div>

      {/* Expandable body */}
      <div
        id={`${appId}-panel`}
        className={`tile-body ${isOpen ? "open" : ""}`}
      >
        {isOpen && (
          <div className="flip-wrap">
            {/* Click the card itself to flip */}
            <div
              className={`flip ${flipped ? "isBack" : ""}`}
              onClick={() => setFlipped((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)
              }
              aria-label={
                flipped ? "Show Privacy Policy" : "Show Terms and Conditions"
              }
            >
              {/* FRONT: Privacy */}
              <div className="flip-face">
                <h3 className="face-title">Privacy Policy</h3>
                <div className="face-body small">{privacy}</div>
                <div className="hint small">Click to flip to Terms →</div>
              </div>

              {/* BACK: Terms */}
              <div className="flip-face back">
                <h3 className="face-title">Terms</h3>
                <div className="face-body small">{terms}</div>
                <div className="hint small">← Click to flip back to Privacy</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .tile {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(10, 10, 22, 0.28);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(7, 7, 12, 0.15);
        }

        .tile-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          cursor: pointer;
          transition: background 140ms ease, border-color 140ms ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
        }
        .tile-head:hover {
          background: rgba(124, 58, 237, 0.15);
        }
        .tile-title {
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .chev {
          opacity: 0.85;
          font-size: 13px;
        }

        .tile-body {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-4px);
          transition: max-height 240ms ease, opacity 180ms ease, transform 180ms ease;
        }
        .tile-body.open {
          max-height: 1200px; /* enough room */
          opacity: 1;
          transform: translateY(0);
        }

        /* Flip card area */
        .flip-wrap {
          padding: 14px;
          perspective: 1200px;
        }
        .flip {
          position: relative;
          width: 100%;
          min-height: 260px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
          cursor: pointer;
        }
        .flip.isBack {
          transform: rotateY(180deg);
        }
        .flip-face {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 16px;
          backface-visibility: hidden;
          overflow: auto;
          display: grid;
          gap: 10px;
        }
        .flip-face.back {
          transform: rotateY(180deg);
        }
        .face-title {
          margin: 0;
          font-size: 18px;
          font-weight: 800;
        }
        .face-body {
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .hint {
          opacity: 0.7;
          text-align: right;
        }

        @media (max-width: 900px) {
          .flip-wrap {
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
