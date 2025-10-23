// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

// -------------------- POLICY CONTENT --------------------
const content = {
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

  "zen-void": {
    subtitle: "Mood, journaling, and reflection app",
    privacy: (
      <>
        <p><strong>Last Updated: 23 October 2025</strong></p>
        <p>
          Zen Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only what’s necessary
          to provide a calm, personalized journaling and mood experience, and to support core functionality and ads.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) for displaying and measuring ads via Google AdMob.</li>
          <li><strong>App Usage Data</strong> such as mood entries, reflections, feature interactions, and general analytics.</li>
          <li><strong>Crash and Performance Data</strong> used to diagnose problems and improve stability.</li>
          <li><strong>Optional User Content</strong> like notes, moods, and journal entries you create, stored securely in Supabase.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Serve and measure ads through Google AdMob.</li>
          <li>Analyze app usage and improve user experience.</li>
          <li>Store and sync personal reflections and journal entries.</li>
          <li>Maintain stability and optimize performance.</li>
        </ul>

        <h4>Sharing & Retention</h4>
        <p>
          Shared only with trusted providers like Supabase (for secure storage) and Google AdMob (for ads and analytics).
          Data is never sold or shared for tracking outside Zen Void. Journal data is retained only while your account exists
          or until you request deletion.
        </p>

        <h4>Your Choices</h4>
        <ul>
          <li>Manage ad preferences or reset your advertising ID in device settings.</li>
          <li>Request data deletion or export: <a href="mailto:andyblewett9@gmail.com">andyblewett9@gmail.com</a>.</li>
        </ul>

        <h4>Children</h4>
        <p>Zen Void is intended for users 13+ and not for children under 13.</p>

        <h4>International Users & Changes</h4>
        <p>Data is processed in the United Kingdom. We may update this policy; continued use means acceptance.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 23 October 2025</strong></p>
        <p>
          These Terms of Service are a legal agreement between you and <strong>Andrew Blewett</strong> for your use of Zen Void.
          By installing or using Zen Void, you agree to these Terms and the Privacy Policy.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13 years or older. Under-18s require parental or guardian consent.</p>

        <h4>License & Ownership</h4>
        <p>
          You’re granted a personal, non-transferable license to use Zen Void for journaling and reflection.
          All rights in the app and content remain with Andrew Blewett.
        </p>

        <h4>User Content</h4>
        <p>
          Your journal entries and mood logs are private and only accessible to you. Do not submit personal information in
          any optional shared features (if introduced). We reserve the right to remove inappropriate public content.
        </p>

        <h4>Monetization</h4>
        <p>Zen Void is free with ads. There are no in-app purchases or paid content at this time.</p>

        <h4>Prohibited Activities</h4>
        <ul>
          <li>No attempts to hack, modify, or reverse engineer the app.</li>
          <li>No interference with servers, analytics, or ads.</li>
          <li>No misuse of journaling tools or community features (if added).</li>
        </ul>

        <h4>Disclaimers & Limitation of Liability</h4>
        <p>
          Zen Void is provided “as is.” While we take care to protect your data, no system is perfectly secure.
          We are not liable for any indirect or consequential damages, including loss of data.
        </p>

        <h4>Termination</h4>
        <p>
          You may stop using Zen Void at any time. We may suspend or terminate accounts for policy violations or misuse.
        </p>

        <h4>Governing Law</h4>
        <p>
          These Terms are governed by the laws of England & Wales, with exclusive jurisdiction in its courts.
        </p>
      </>
    ),
  },
};

const apps = [
  { id: "game-void", title: "Game Void" },
  { id: "social-void", title: "Social Void" },
  { id: "zen-void", title: "Zen Void" },
];

// -------------------- LINKS --------------------
const LINKS = {
  GAME_VOID_IOS: "https://apps.apple.com/gb/app/game-void/id6751643961",
  SOCIAL_VOID_IOS: "https://apps.apple.com/gb/app/social-void/id6751636874",
  ZEN_VOID_IOS: "https://apps.apple.com/gb/app/zen-void/id0000000000", // placeholder
  TTT_SITE: "https://taptaptwo.co.uk",
  TTT_LOGO: "https://ucarecdn.com/7bdd361d-c411-41ce-b066-c1d20f88e3a7/-/format/auto/",
};

// -------------------- COMPONENT --------------------
export default function Policies() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout>
      {/* DOWNLOAD CTA SECTION */}
      <section className="downloads" aria-labelledby="downloads-title">
        <h2 id="downloads-title" className="dl-title">Download the Apps</h2>

        <div className="dl-grid">
          {/* Game Void */}
          <article className="dl-card">
            <h3 className="dl-name">Game Void</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.GAME_VOID_IOS} target="_blank" rel="noopener noreferrer"> iOS — Get on App Store</a>
              <button className="store-btn disabled" type="button" disabled>Android — Coming Soon</button>
            </div>
          </article>

          {/* Social Void */}
          <article className="dl-card">
            <h3 className="dl-name">Social Void</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.SOCIAL_VOID_IOS} target="_blank" rel="noopener noreferrer"> iOS — Get on App Store</a>
              <button className="store-btn disabled" type="button" disabled>Android — Coming Soon</button>
            </div>
          </article>

          {/* Zen Void */}
          <article className="dl-card">
            <h3 className="dl-name">Zen Void</h3>
            <div className="store-buttons">
              <a className="store-btn" href={LINKS.ZEN_VOID_IOS} target="_blank" rel="noopener noreferrer"> iOS — Get on App Store</a>
              <button className="store-btn disabled" type="button" disabled>Android — Coming Soon</button>
            </div>
          </article>

          {/* Tap Tap Two */}
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

      {/* POLICY CARDS */}
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

      {/* ACCOUNT DELETION SECTION REMAINS UNCHANGED */}
    </Layout>
  );
}

function PolicyTile({ appId, title, subtitle, isOpen, onToggle, privacy, terms }) {
  const [flipped, setFlipped] = useState(false);
  // component unchanged
}
