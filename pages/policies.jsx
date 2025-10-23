// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

// -------------------- POLICY CONTENT --------------------
const content = {
  "zen-void": {
    subtitle: "Mood, journaling, and reflection app",
    privacy: (
      <>
        <p><strong>Last Updated: 23 October 2025</strong></p>
        <p>
          Zen Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only what’s
          necessary to provide a calm, personalized journaling and mood experience, and to support
          core functionality and ads.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) for displaying and measuring ads via Google AdMob.</li>
          <li><strong>App Usage Data</strong> such as mood entries, reflections, feature interactions, and analytics.</li>
          <li><strong>Crash & Performance Data</strong> to help fix bugs and improve reliability.</li>
          <li><strong>Optional Journal Entries</strong> and moods stored securely in Supabase and linked only to your account.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Serve and measure ads through Google AdMob.</li>
          <li>Analyze usage to improve your journaling experience.</li>
          <li>Store and sync your reflections safely in the cloud.</li>
          <li>Maintain stability and optimize performance.</li>
        </ul>

        <h4>Sharing & Retention</h4>
        <p>
          Shared only with Supabase (for storage) and Google AdMob (for ads). Data is never sold or used
          for unrelated tracking. Journal data is deleted on account deletion or upon your request.
        </p>

        <h4>Your Choices</h4>
        <ul>
          <li>Manage ad preferences or reset your advertising ID in device settings.</li>
          <li>Request data deletion or export: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</li>
        </ul>

        <h4>Children</h4>
        <p>Zen Void is intended for users 13+ and not for children under 13.</p>

        <h4>International Users & Changes</h4>
        <p>Data is processed in the UK. We may update this policy; continued use means acceptance.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 23 October 2025</strong></p>
        <p>
          These Terms of Service are a legal agreement between you and <strong>Andrew Blewett</strong> for using Zen Void.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+; under-18s require guardian consent.</p>

        <h4>License & Ownership</h4>
        <p>You get a personal, non-transferable license to use Zen Void. All rights remain with Andrew Blewett.</p>

        <h4>User Content</h4>
        <p>Your journal data is private to you. If community sharing is added later, don’t share personal info.</p>

        <h4>Prohibited Activities</h4>
        <ul>
          <li>No hacking, reverse engineering, or misuse of analytics or ads.</li>
        </ul>

        <h4>Disclaimer</h4>
        <p>Zen Void is provided “as is.” We’re not liable for indirect or consequential damages.</p>

        <h4>Governing Law</h4>
        <p>England & Wales law applies; exclusive jurisdiction in its courts.</p>
      </>
    ),
  },

  "game-void": {
    subtitle: "Arcade hub of classic & puzzle games",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Game Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only the
          information needed to operate the app, improve gameplay, and support advertising.
        </p>
        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) when allowed by your device settings.</li>
          <li><strong>Usage Data</strong> such as screens viewed, taps, session length, and crash reports.</li>
          <li><strong>User-Generated Content</strong> you share (e.g., usernames, chat messages). Don’t post personal info.</li>
        </ul>
        <h4>How We Use Data</h4>
        <ul>
          <li>Deliver, measure, and improve ads (via Google AdMob).</li>
          <li>Monitor stability, fix crashes, and balance gameplay.</li>
          <li>Moderate chat to keep the community safe.</li>
        </ul>
        <h4>Data Sharing</h4>
        <p>
          We share limited data only with trusted providers such as Google AdMob. These providers are bound by their
          own privacy and security obligations and may not use your data for unrelated purposes.
        </p>
        <h4>Retention & Security</h4>
        <p>
          Data is retained only as long as necessary for the purposes above, then aggregated or deleted. We use
          industry-standard safeguards, but no system is perfectly secure.
        </p>
        <h4>Your Choices</h4>
        <ul>
          <li>Control ad tracking in your device settings (iOS/Android).</li>
          <li>Request deletion of user content or account data: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</li>
        </ul>
        <h4>Children</h4>
        <p>Game Void is for users 13+ and is not directed to children under 13.</p>
        <h4>International Users</h4>
        <p>Data is processed in the United Kingdom and where our providers operate.</p>
        <h4>Changes</h4>
        <p>We may update this policy; material changes will be highlighted in-app or on our site.</p>
        <h4>Contact</h4>
        <p>Questions or requests: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms of Service form a legal agreement between you and <strong>Andrew Blewett</strong>.
          By installing or using Game Void, you agree to these Terms and the Privacy Policy.
        </p>
        <h4>Eligibility</h4>
        <p>You must be at least 13 years old. Under-18s need parental/guardian consent.</p>
        <h4>License & Ownership</h4>
        <p>
          We grant a personal, non-exclusive, non-transferable license to use the app for entertainment. All rights
          in the app and content remain with Andrew Blewett.
        </p>
        <h4>User Content & Conduct</h4>
        <ul>
          <li>Don’t post unlawful, abusive, defamatory, or offensive content (usernames, chat, etc.).</li>
          <li>We may remove content or suspend accounts at our discretion to protect the community.</li>
        </ul>
        <h4>Monetization</h4>
        <p>No in-app purchases. Virtual items/scores have no real-world value and may change or be removed.</p>
        <h4>Prohibited Activities</h4>
        <ul>
          <li>No cheating, hacking, or exploiting bugs.</li>
          <li>No disrupting servers or interfering with ads/SDKs.</li>
          <li>No reverse engineering or unauthorized distribution.</li>
        </ul>
        <h4>Disclaimers & Limitation of Liability</h4>
        <p>
          The app is provided “as is” and “as available.” To the fullest extent permitted by law, Andrew Blewett
          is not liable for indirect, incidental, or consequential damages (including lost data or profits).
        </p>
        <h4>Termination</h4>
        <p>We may suspend or terminate access at any time, including for rule violations.</p>
        <h4>Governing Law</h4>
        <p>These Terms are governed by the laws of England & Wales, with exclusive jurisdiction in its courts.</p>
      </>
    ),
  },

  "social-void": {
    subtitle: "Merge-based progression game",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Social Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only what’s necessary
          to run the game and support advertising.
        </p>
        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) for ads and measurement.</li>
          <li><strong>Gameplay Data</strong> like levels, merges, achievements, crash logs, and usage stats.</li>
          <li><strong>User-Generated Content</strong> (usernames, chat). Don’t share personal info in chat.</li>
        </ul>
        <h4>How We Use Data</h4>
        <ul>
          <li>Serve/measure ads and analyze performance.</li>
          <li>Maintain stability and tune progression/rewards.</li>
          <li>Moderate chat to keep the community safe.</li>
        </ul>
        <h4>Sharing & Retention</h4>
        <p>Shared only with trusted providers (e.g., Google AdMob). Retained only as long as needed.</p>
        <h4>Your Choices</h4>
        <ul>
          <li>Manage ad preferences/reset your advertising ID in device settings.</li>
          <li>Request data deletion: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</li>
        </ul>
        <h4>Children</h4>
        <p>Social Void is intended for players 13+ and not for children under 13.</p>
        <h4>International Users & Changes</h4>
        <p>Data is processed in the UK. We may update this policy; continued use means acceptance.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms of Service are a legal agreement between you and <strong>Andrew Blewett</strong> for your
          use of Social Void.
        </p>
        <h4>Eligibility</h4>
        <p>You must be 13+; under-18s need parental/guardian consent.</p>
        <h4>License & Ownership</h4>
        <p>Personal, non-exclusive, non-transferable license for entertainment only. All rights reserved.</p>
        <h4>User Content & Conduct</h4>
        <ul>
          <li>No illegal, abusive, defamatory, or offensive usernames or chat.</li>
          <li>We may remove content or suspend accounts at our discretion.</li>
        </ul>
        <h4>Monetization</h4>
        <p>No in-app purchases. Virtual items/progress have no cash value and may change or be removed.</p>
        <h4>Prohibited Activities</h4>
        <ul>
          <li>No cheating, hacking, exploiting bugs, or disrupting servers.</li>
          <li>No interference with ads/SDKs; no reverse engineering.</li>
        </ul>
        <h4>Disclaimer & Limitation of Liability</h4>
        <p>Provided “as is.” To the fullest extent permitted by law, no liability for indirect or consequential losses.</p>
        <h4>Termination & Governing Law</h4>
        <p>We may suspend or terminate access at any time. Governed by England & Wales law; exclusive courts of England & Wales.</p>
      </>
    ),
  },
};

const appsTop = [{ id: "zen-void", title: "Zen Void" }];
const appsBottom = [
  { id: "game-void", title: "Game Void" },
  { id: "social-void", title: "Social Void" },
];

// -------------------- LINKS --------------------
const LINKS = {
  GAME_VOID_IOS: "https://apps.apple.com/gb/app/game-void/id6751643961",
  SOCIAL_VOID_IOS: "https://apps.apple.com/gb/app/social-void/id6751636874",
  TTT_SITE: "https://taptaptwo.co.uk",
  TTT_LOGO: "https://ucarecdn.com/7bdd361d-c411-41ce-b066-c1d20f88e3a7/-/format/auto/",
};

export default function Policies() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout>
      <section className="downloads" aria-labelledby="downloads-title">
        <h2 id="downloads-title" className="dl-title">Download the Games</h2>

        <div className="dl-grid">
          <article className="dl-card">
            <h3 className="dl-name">Game Void</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.GAME_VOID_IOS} target="_blank" rel="noopener noreferrer"> iOS — Get on App Store</a>
              <button className="store-btn disabled" type="button" disabled>Android — Coming Soon</button>
            </div>
          </article>

          <article className="dl-card">
            <h3 className="dl-name">Social Void</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.SOCIAL_VOID_IOS} target="_blank" rel="noopener noreferrer"> iOS — Get on App Store</a>
              <button className="store-btn disabled" type="button" disabled>Android — Coming Soon</button>
            </div>
          </article>

          <article className="dl-card">
            <h3 className="dl-name">Tap Tap Two</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.TTT_SITE} target="_blank" rel="noopener noreferrer">
                <img src={LINKS.TTT_LOGO} alt="Tap Tap Two logo" style={{ height: 28, width: "auto", marginRight: 8, borderRadius: 6 }} />
                Visit TapTapTwo.co.uk
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Zen Void full-width */}
      <div className="zen-wide">
        {appsTop.map(({ id, title }) => (
          <PolicyTile
            key={id}
            appId={id}
            title={title}
            subtitle={content[id].subtitle}
            isOpen={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
            privacy={content[id].privacy}
            terms={content[id].terms}
          />
        ))}
      </div>

      {/* Game Void + Social Void */}
      <div className="policies-grid">
        {appsBottom.map(({ id, title }) => (
          <PolicyTile
            key={id}
            appId={id}
            title={title}
            subtitle={content[id].subtitle}
            isOpen={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
            privacy={content[id].privacy}
            terms={content[id].terms}
          />
        ))}
      </div>
    </Layout>
  );
}

function PolicyTile({ appId, title, subtitle, isOpen, onToggle, privacy, terms }) {
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

      <div id={`${appId}-panel`} className={`tile-body ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="flip-wrap">
            <div
              className={`flip ${flipped ? "isBack" : ""}`}
              onClick={() => setFlipped((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((v) => !v)}
            >
              <div className="flip-face">
                <h3 className="face-title">Privacy Policy</h3>
                <div className="prose">{privacy}</div>
                <div className="hint small">Click card to view Terms →</div>
              </div>

              <div className="flip-face back">
                <h3 className="face-title">Terms of Service</h3>
                <div className="prose">{terms}</div>
                <div className="hint small">← Click card to view Privacy</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .tile {
          border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,10,22,0.28);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(7,7,12,0.15);
        }

        .tile-head {
          width: 100%; background: rgba(255,255,255,0.04); border: none;
          padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
          cursor: pointer; font-weight: 700; letter-spacing: 0.2px; border-bottom: 1px solid rgba(255,255,255,0.12);
          color: inherit; text-align: left;
        }
        .tile-head:hover { background: rgba(124,58,237,0.15); }

        .head-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #7c3aed, #4c1d95); box-shadow: 0 0 10px rgba(124,58,237,0.6); flex-shrink: 0; }
        .tile-title { font-weight: 800; }
        .tile-sub { opacity: 0.85; }
        .chev { opacity: 0.9; font-size: 13px; }

        .tile-body { max-height: 0; opacity: 0; overflow: hidden; transform: translateY(-4px);
          transition: max-height 260ms ease, opacity 180ms ease, transform 180ms ease; }
        .tile-body.open { max-height: 1200px; opacity: 1; transform: translateY(0); }

        .flip-wrap { padding: 14px; perspective: 1200px; }
        .flip { position: relative; width: 100%; min-height: 300px; transform-style: preserve-3d; transition: transform 0.6s ease; cursor: pointer; }
        .flip.isBack { transform: rotateY(180deg); }

        .flip-face { position: absolute; inset: 0; border-radius: 12px; background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15); padding: 18px 16px; backface-visibility: hidden; overflow: auto; display: grid; gap: 12px; }
        .flip-face.back { transform: rotateY(180deg); }
        .face-title { margin: 0; font-size: 18px; font-weight: 800; }

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

