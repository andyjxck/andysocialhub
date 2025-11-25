// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

// -------------------- POLICY CONTENT --------------------
const content = {
  "zen-void": {
    subtitle: "Mood, journaling, and reflection app",
    privacy: (
  <>
    <p><strong>Last Updated: 26 November 2025</strong></p>

    <p>
      Zen Void is owned and operated by <strong>Andrew Blewett</strong>.  
      This app helps you track mood, energy, and personal reflection, and includes an optional AI-powered companion (“Zeno”) to provide gentle, personalized conversation.
    </p>

    <h4>Information We Collect</h4>
    <ul>
      <li>
        <strong>Mood & Wellbeing Inputs</strong>  
        (mood rating, energy, sleep hours, stress, social energy, productivity, activity, creativity).  
        These are stored securely in Supabase and linked to your account.
      </li>

      <li>
        <strong>AI Conversation Data</strong>  
        Messages you send to the Zeno companion are processed securely through OpenAI solely for generating responses.  
        <em>Zeno never sees encrypted content such as Notes or Gratitude.</em>
      </li>

      <li>
        <strong>Account Information</strong>  
        (username, optional profile emoji).
      </li>

      <li>
        <strong>Analytics</strong>  
        Basic usage events to improve features and understand app performance.
      </li>

      <li>
        <strong>Diagnostics</strong>  
        Crash logs and performance data used to fix bugs and improve stability.
      </li>
    </ul>

    <h4>How Your Data Is Used</h4>
    <ul>
      <li>To store and sync your mood entries across devices.</li>
      <li>To generate optional personalized responses from Zeno.</li>
      <li>To improve and refine features based on usage analytics.</li>
      <li>To maintain stability, security, and app functionality.</li>
    </ul>

    <h4>Sharing</h4>
    <p>
      Your data is <strong>never sold</strong>.  
      It is shared only with trusted service providers:
    </p>
    <ul>
      <li><strong>Supabase</strong> — secure storage and account services.</li>
      <li><strong>OpenAI</strong> — to generate optional AI responses; messages are not used to train models.</li>
    </ul>

    <h4>Encryption & Sensitive Data</h4>
    <p>
      Personal journal text (Notes, Gratitude) is <strong>end-to-end encrypted</strong> on your device and is never visible to Zeno or used in personalization.
    </p>

    <h4>Your Choices</h4>
    <ul>
      <li>Delete all journal and account data at any time by emailing <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</li>
      <li>Disable or ignore the AI companion — Zeno is fully optional.</li>
    </ul>

    <h4>Children</h4>
    <p>Zen Void is intended for users aged 13+.</p>

    <h4>International Use</h4>
    <p>Your data is processed in the UK and where our providers operate.</p>

    <h4>Changes</h4>
    <p>
      We may update this policy. Continued use after updates means acceptance of the revised terms.
    </p>
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

  "tap-tap-three": {
    subtitle: "Idle tapping, stocks, businesses, and social features",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Tap Tap Three is owned and operated by <strong>Andrew Blewett</strong>. We only collect
          what is required to run the game, support online features, and keep your progress safe.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Account Data</strong> (username, PIN, profile emoji).</li>
          <li><strong>Gameplay Data</strong> (balance, upgrades, stocks, businesses, stats).</li>
          <li><strong>Social Data</strong> (friends, chat messages, read receipts).</li>
          <li><strong>Device ID</strong> for login verification.</li>
          <li><strong>Crash Logs & Diagnostics</strong> to fix bugs and improve stability.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Sync gameplay and save your progress.</li>
          <li>Support account login and device recovery.</li>
          <li>Provide social features (friends, messaging, profiles).</li>
          <li>Fix bugs and improve reliability.</li>
          <li>Detect cheating or abuse.</li>
        </ul>

        <h4>Data Sharing</h4>
        <p>
          We only share necessary data with Supabase, our backend provider.  
          No data is sold, and Tap Tap Three does <strong>not contain advertising</strong>.
        </p>

        <h4>Your Choices</h4>
        <ul>
          <li>Delete your account in-app using the built-in deletion feature.</li>
          <li>Email requests to: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a></li>
        </ul>

        <h4>Children</h4>
        <p>Tap Tap Three is intended for players aged 13+.</p>

        <h4>International Users</h4>
        <p>Data is processed in the UK and where our providers operate.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms apply to Tap Tap Three (“the App”). By installing or using the App, you agree to
          these Terms and the Privacy Policy.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+ to use Tap Tap Three. Under-18s require guardian consent.</p>

        <h4>License</h4>
        <p>
          You receive a personal, non-transferable license to use the App.  
          All rights belong to <strong>Andrew Blewett</strong>.
        </p>

        <h4>User Conduct</h4>
        <ul>
          <li>No cheating, hacking, or exploiting bugs.</li>
          <li>No abusive usernames, messages, or behaviour.</li>
          <li>We may remove accounts violating rules.</li>
        </ul>

        <h4>Virtual Items</h4>
        <p>
          In-game currency, upgrades, and stats have no cash value and may be changed at any time.
        </p>

        <h4>Social Features</h4>
        <p>
          Chat and friend interactions must remain safe.  
          We may moderate or remove content to protect players.
        </p>

        <h4>Termination</h4>
        <p>We may suspend or terminate accounts that breach these Terms.</p>

        <h4>Liability</h4>
        <p>
          The App is provided “as is.”  
          No liability for indirect or consequential damages.
        </p>

        <h4>Governing Law</h4>
        <p>These Terms are governed by England & Wales law.</p>
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

// -------------------- APPS FOR GRID --------------------
const appsTop = [
  { id: "zen-void", title: "Zen Void" },
  { id: "tap-tap-three", title: "Tap Tap Three" },
];

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

// -------------------- COMPONENT --------------------
export default function Policies() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout>
      {/* DOWNLOAD CTA SECTION */}
    {/* DOWNLOAD CTA SECTION */}
<section className="downloads" aria-labelledby="downloads-title">
  <h2 id="downloads-title" className="dl-title">Download the Games</h2>

  <div className="dl-grid">
    {/* Tap Tap Three */}
    <article className="dl-card">
      <h3 className="dl-name">Tap Tap Three</h3>
      <div className="store-buttons">
        <button className="store-btn disabled" type="button" disabled>
           iOS — Coming Soon
        </button>
        <button className="store-btn disabled" type="button" disabled>
          Android — Coming Soon
        </button>
      </div>
    </article>

    {/* Game Void */}
    <article className="dl-card">
      <h3 className="dl-name">Game Void</h3>
      <div className="store-buttons">
        <a
          className="store-btn"
          href={LINKS.GAME_VOID_IOS}
          target="_blank"
          rel="noopener noreferrer"
        >
           iOS — Get on App Store
        </a>
        <button className="store-btn disabled" type="button" disabled>
          Android — Coming Soon
        </button>
      </div>
    </article>

    {/* Social Void */}
    <article className="dl-card">
      <h3 className="dl-name">Social Void</h3>
      <div className="store-buttons">
        <a
          className="store-btn"
          href={LINKS.SOCIAL_VOID_IOS}
          target="_blank"
          rel="noopener noreferrer"
        >
           iOS — Get on App Store
        </a>
        <button className="store-btn disabled" type="button" disabled>
          Android — Coming Soon
        </button>
      </div>
    </article>

    {/* Tap Tap Two */}
    <article className="dl-card">
      <h3 className="dl-name">Tap Tap Two</h3>
      <div className="store-buttons">
        <a
          className="store-btn"
          href={LINKS.TTT_SITE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LINKS.TTT_LOGO}
            alt="Tap Tap Two logo"
            style={{
              height: 28,
              width: "auto",
              marginRight: 8,
              borderRadius: 6,
            }}
          />
          Visit TapTapTwo.co.uk
        </a>
      </div>
    </article>
  </div>
</section>

      {/* 2×2 GRID ALWAYS */}
      <div className="policies-container">
        
        {/* TOP ROW */}
        <div className="policies-grid">
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

        {/* BOTTOM ROW */}
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

      </div>

      {/* ACCOUNT DELETION */}
      <section className="delete-section" aria-labelledby="delete-title">
        <h2 id="delete-title">Delete Your Account</h2>
        <p>
          To delete your account and related data, email{" "}
          <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a> or use the methods on the{" "}
          <a href="/contact">Contact</a> page.
        </p>
        <h4>What to Include</h4>
        <ul>
          <li>Your <strong>User ID</strong> (shown in-app).</li>
        </ul>
        <h4>Verification</h4>
        <p>We may ask quick questions or temporarily adjust an in-game stat to confirm ownership.</p>
        <h4>After Deletion</h4>
        <ul>
          <li>Your account/data will be removed permanently.</li>
          <li>Deletion cannot be undone; returning players start fresh.</li>
        </ul>
      </section>

      {/* STYLES */}
      <style jsx>{`
        /* Downloads */
        .downloads { margin-bottom: 32px; }
        .dl-title { font-size: 24px; font-weight: 800; margin-bottom: 20px; text-align: center; }
        .dl-grid { display: grid; gap: 18px; grid-template-columns: 1fr; }
        @media (min-width: 700px) { .dl-grid { grid-template-columns: repeat(3, 1fr); } }
        .dl-card {
          padding: 16px;
          border-radius: 16px;
          background: rgba(10,10,22,0.30);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          text-align: center;
        }
        .dl-name { margin: 0 0 8px 0; font-size: 18px; font-weight: 800; }
        .store-buttons { display: grid; gap: 8px; }
        .store-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.22);
          background: rgba(124,58,237,0.9); color: #fff; text-decoration: none; font-weight: 600;
          transition: background 0.15s ease;
        }
        .store-btn:hover:not(.disabled) { background: rgba(124,58,237,1); }
        .store-btn.disabled { background: rgba(255,255,255,0.12); cursor: not-allowed; }

        /* Policies Grid */
        .policies-container { margin-top: 20px; display: grid; gap: 20px; }
        .policies-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 900px) { 
          .policies-grid { grid-template-columns: 1fr 1fr; } 
        }

        /* Delete Section */
        .delete-section {
          margin-top: 28px; padding: 18px 16px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.18); background: rgba(10,10,22,0.28);
          backdrop-filter: blur(10px); box-shadow: 0 10px 30px rgba(7,7,12,0.15);
        }
        .delete-section h2 { margin: 0 0 10px 0; font-size: 20px; font-weight: 800; }
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

      {/* Styles */}
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

        .tile-body {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-4px);
          transition: max-height 260ms ease, opacity 180ms ease, transform 180ms ease;
        }
        .tile-body.open {
          max-height: 3000px;
          opacity: 1;
          transform: translateY(0);
        }

        .flip-wrap { padding: 14px; perspective: 1200px; }

        .flip {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 200ms ease;
          cursor: pointer;
        }
        .flip.isBack { transform: none; }

        .flip-face {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 18px 16px;
          backface-visibility: hidden;
          display: block;
          gap: 12px;
        }

        .flip-face.back { display: none; }
        .flip.isBack .flip-face.back { display: block; }
        .flip.isBack .flip-face:not(.back) { display: none; }

        .face-title { margin: 0; font-size: 18px; font-weight: 800; }

        .prose :global(p) { margin: 0; }
        .prose :global(p + p) { margin-top: 8px; }
        .prose :global(h4) { margin: 4px 0 4px; font-size: 14px; opacity: 0.95; }
        .prose :global(ul) { margin: 0; padding-left: 18px; display: grid; gap: 6px; }
        .prose :global(li) { line-height: 1.55; }
        .prose { font-size: 13.5px; opacity: 0.95; line-height: 1.65; }

        .hint { opacity: 0.7; text-align: right; }
      `}</style>
    </section>
  );
}
