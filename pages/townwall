// pages/townwall.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

export default function TownWall() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <Layout>
      {/* HERO */}
   <section className="hero">
  <img
    src="https://ucarecdn.com/d8da2fdb-f7f4-4dcd-94fe-531c7a08fd51/-/format/auto/"
    alt="Town Wall logo"
    className="townwall-logo"
  />
  <h1 className="title">Town Wall</h1>
  <p className="subtitle">
    A community platform built around real towns, zones, and shared spaces.
  </p>
</section>


      {/* ABOUT */}
      <section className="card">
        <h2>What Town Wall Is</h2>
        <p>
          Town Wall is a community-driven platform designed to connect people
          through their local area, while still allowing global discovery,
          discussion, and shared spaces.
        </p>
        <p>
          It supports local towns and neighbourhood zones, global feeds,
          popularity-based sorting, follower systems, and open discussion —
          all moderated to keep communities usable and safe.
        </p>
      </section>

      {/* FEATURES */}
      <section className="card">
        <h2>How Town Wall Works</h2>
        <ul>
          <li>Towns and neighbourhood zones</li>
          <li>Manual switching between towns and zones</li>
          <li>Local feeds and a global feed</li>
          <li>Sorting by newest or most popular</li>
          <li>Follower counts and engagement</li>
          <li>Global chat</li>
          <li>Automated and human moderation</li>
        </ul>
      </section>

      {/* LEGAL BUTTONS */}
      <section className="legal">
        <button onClick={() => setOpenModal("guidelines")}>
          Community Guidelines
        </button>
        <button onClick={() => setOpenModal("privacy")}>
          Privacy Policy
        </button>
      </section>

      {/* MODALS */}
      {openModal && (
        <div className="modal-backdrop" onClick={() => setOpenModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* COMMUNITY GUIDELINES */}
            {openModal === "guidelines" && (
              <>
                <h3>Community Guidelines</h3>

                <h4>The Rules of the Wall</h4>
                <p>
                  Town Wall is built on the idea that local communities are
                  stronger when people talk to each other. It exists to
                  celebrate local talent, support neighbourhood businesses,
                  and keep people informed.
                </p>

                <h4>Be Neighbourly & Kind</h4>
                <p>
                  Treat others with the same respect you would give someone in
                  person. There is zero tolerance for bullying, harassment,
                  hate speech, or discrimination.
                </p>

                <h4>Quality Over Quantity</h4>
                <p>
                  Posts should add value. Context, useful information, and
                  genuine discussion are encouraged. Low-effort or purely
                  inflammatory posts may be removed.
                </p>

                <h4>Keep It Relevant</h4>
                <p>
                  Town Wall works best when content is relevant to towns,
                  zones, or the wider community. Global topics are allowed,
                  but relevance still matters.
                </p>

                <h4>Respect Privacy</h4>
                <p>
                  Do not post private contact details, addresses, or sensitive
                  personal information without explicit permission.
                </p>

                <h4>Promotions & Hustles</h4>
                <p>
                  Local businesses and talent are welcome. Spammy, repetitive,
                  or automated advertising will be removed.
                </p>

                <h4>No Misinformation</h4>
                <p>
                  Deliberately misleading or false information damages trust.
                  Content flagged as significantly inaccurate may be removed.
                </p>

                <h4>Moderation</h4>
                <p>
                  Automated systems and moderators work together to keep the
                  Wall usable. Content may be approved, held, or removed.
                  Decisions can be appealed.
                </p>

                <p className="footer">
                  Together, let’s keep Town Wall useful, safe, and human.
                </p>
              </>
            )}

            {/* PRIVACY POLICY */}
            {openModal === "privacy" && (
              <>
                <h3>Privacy Policy</h3>

                <h4>1. Overview</h4>
                <p>
                  This policy explains how Town Wall handles information. By
                  using the service, you agree to the terms below. The platform
                  prioritises pseudonymity and data minimisation.
                </p>

                <h4>2. Data We Do NOT Collect</h4>
                <ul>
                  <li>Legal names</li>
                  <li>Email addresses</li>
                  <li>Phone numbers</li>
                  <li>Physical addresses</li>
                  <li>Government IDs</li>
                  <li>Precise GPS location data</li>
                </ul>

                <h4>3. Required Data</h4>
                <p>
                  The only required data is a username and a securely hashed
                  password. This is used solely for authentication.
                </p>

                <h4>4. Public Content</h4>
                <p>
                  Posts, comments, images, and profile metadata are public by
                  design. Anonymous posting removes public attribution but
                  does not change how data is stored.
                </p>

                <h4>5. Third-Party Services</h4>
                <p>
                  Infrastructure and payments are handled by trusted providers
                  such as Supabase, Stripe, and RevenueCat. Payment details are
                  never stored directly by Town Wall.
                </p>

                <h4>6. Security & Recovery</h4>
                <p>
                  Passwords are cryptographically hashed. Forgotten credentials
                  cannot be recovered without recovery codes. Loss of access
                  may be permanent.
                </p>

                <h4>7. Service Provided As-Is</h4>
                <p>
                  The service is provided “as is” without guarantees of
                  availability or reliability.
                </p>

                <h4>8. Limitation of Liability</h4>
                <p>
                  To the fullest extent permitted by law, the operator is not
                  liable for indirect, incidental, or consequential damages.
                </p>

                <h4>9. Changes</h4>
                <p>
                  This policy may be updated. Continued use means acceptance of
                  the revised terms.
                </p>

                <p className="footer">
                  Last updated: December 27, 2025
                </p>
              </>
            )}

            <button className="close" onClick={() => setOpenModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .hero {
          text-align: center;
          margin-bottom: 28px;
        }

        .title {
          font-size: 34px;
          font-weight: 900;
        }

        .subtitle {
          opacity: 0.85;
          margin-top: 6px;
        }

        .card {
          margin-bottom: 20px;
          padding: 18px 16px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,10,22,0.28);
          backdrop-filter: blur(10px);
        }

        .card ul {
          padding-left: 18px;
          display: grid;
          gap: 6px;
        }

        .legal {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 24px;
        }

        .legal button {
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(124,58,237,0.9);
          color: white;
          font-weight: 600;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          max-height: 80vh;
          overflow-y: auto;
          width: 90%;
          max-width: 640px;
          background: rgba(10,10,22,0.95);
          border-radius: 16px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.18);
        }

        .modal h3 {
          margin-top: 0;
          font-weight: 800;
        }

        .modal h4 {
          margin-top: 18px;
        }

        .modal ul {
          padding-left: 18px;
        }

        .footer {
          margin-top: 20px;
          font-style: italic;
          opacity: 0.8;
        }

        .close {
          margin-top: 20px;
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: none;
          background: rgba(124,58,237,0.9);
          color: white;
          font-weight: 700;
        }
      `}</style>
    </Layout>
  );
}
