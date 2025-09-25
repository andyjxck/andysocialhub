// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

const policyText = {
  "game-void": {
    privacy: `
Game Void Privacy Policy
Last updated: ${new Date().toLocaleDateString()}

Game Void is an arcade hub of classic games and puzzles.  
We do not ask for personal details such as your name or email.

• Data We Collect  
  – Anonymous device identifiers (like Apple’s IDFA) for ads and analytics.  
  – Basic gameplay and usage data (screens visited, taps, session length) to improve game balance and performance.

• How We Use It  
  – To deliver ads through Google AdMob and measure their performance.  
  – To understand crashes and fix bugs.

• Your Choices  
  – You can reset or limit the advertising identifier in your device settings.  
  – You can opt out of personalized ads where your platform supports it.

We never sell personal information and only share data with trusted service providers needed to operate the game.
`,
    terms: `
Game Void Terms of Service
Last updated: ${new Date().toLocaleDateString()}

By playing Game Void you agree to these simple terms:

• You may use the game for personal entertainment only.  
• Do not attempt to cheat, exploit bugs, or interfere with servers or ads.  
• Virtual items or scores have no real-world value and may change at any time.  
• The game is provided “as is,” without warranties. We are not responsible for lost progress or service interruptions.  
• We may update the game or these terms from time to time; continued play means you accept the updates.
`,
  },

  "social-void": {
    privacy: `
Social Void Privacy Policy
Last updated: ${new Date().toLocaleDateString()}

Social Void is a merge-based game focused on collecting and progressing.  
We keep data collection minimal.

• Data We Collect  
  – Anonymous device identifiers (IDFA/AAID) for ads and analytics.  
  – Gameplay statistics (levels, merges, achievements) so your progress can be saved.  

• How We Use It  
  – To show ads with Google AdMob and measure ad performance.  
  – To improve stability and balance gameplay.

• Your Choices  
  – Manage ad-tracking preferences in your device settings.  
  – Disable personalized ads where supported.

We never sell personal data and store only what’s necessary to operate and improve the game.
`,
    terms: `
Social Void Terms of Service
Last updated: ${new Date().toLocaleDateString()}

By using Social Void you agree to these terms:

• Play for personal enjoyment; don’t cheat, hack, or abuse the service.  
• Any virtual items or progress have no cash value and may be changed or removed.  
• The app is provided “as is,” without warranties. We are not liable for lost progress or downtime.  
• We may update these terms or the game itself at any time; continuing to play means you accept those updates.
`,
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
          .policies-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </Layout>
  );
}

function PolicyTile({ title, isOpen, onToggle, privacy, terms }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="tile">
      <button
        className="tile-head"
        onClick={() => {
          onToggle();
          if (isOpen) setFlipped(false);
        }}
        aria-expanded={isOpen}
      >
        <span className="tile-title">{title}</span>
        <span className="chev">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="tile-body">
          <div
            className={`flip ${flipped ? "isBack" : ""}`}
            onClick={() => setFlipped((v) => !v)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)
            }
          >
            <div className="flip-face">
              <h3>Privacy Policy</h3>
              <div className="small">{privacy}</div>
              <div className="hint small">Click to view Terms →</div>
            </div>
            <div className="flip-face back">
              <h3>Terms of Service</h3>
              <div className="small">{terms}</div>
              <div className="hint small">← Click to view Privacy</div>
            </div>
          </div>
        </div>
      )}

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
          justify-content: space-between;
          cursor: pointer;
          font-weight: 800;
          letter-spacing: 0.2px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .tile-head:hover { background: rgba(124,58,237,0.15); }
        .tile-body { padding: 16px; }
        .flip {
          position: relative;
          min-height: 260px;
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
          padding: 16px;
          backface-visibility: hidden;
          overflow: auto;
        }
        .flip-face.back { transform: rotateY(180deg); }
        .hint { margin-top: 10px; opacity: 0.7; text-align: right; }
      `}</style>
    </section>
  );
}
