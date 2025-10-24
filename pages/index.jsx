// /pages/zenvoid.jsx
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

/**
 * /pages/zenvoid.jsx
 * Cinematic Zen Void intro + persistent page.
 *
 * Paste this file exactly at /pages/zenvoid.jsx (replace existing).
 * All styles are inline (style jsx) so nothing else needs updating.
 */

export default function ZenVoidPage() {
  // ===== CONFIG (tweak these if you want) =====
  const INHALE_MS = 3000;
  const HOLD_MS = 2000;
  const EXHALE_MS = 3000;
  const CYCLES_BEFORE_WELCOME = 1;
  const WELCOME_SHOW_MS = 1000; // time between "Welcome to" and the big title reveal
  const CURTAIN_HIDE_MS = 1500; // how long before overlay removed after curtain open
  const USE_TTS = false;

  // ===== STATE & REFS =====
  const [phase, setPhase] = useState("ready"); // ready | inhale | hold | exhale | welcome | done
  const [cycleCount, setCycleCount] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showWelcomeTo, setShowWelcomeTo] = useState(false);
  const [revealTitle, setRevealTitle] = useState(false);
  const timers = useRef([]);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;
    runSequence();
    return () => {
      cancelled.current = true;
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
      if (typeof window !== "undefined" && window.speechSynthesis) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delay = (ms) =>
    new Promise((res) => {
      const id = setTimeout(() => {
        res();
        timers.current = timers.current.filter((i) => i !== id);
      }, ms);
      timers.current.push(id);
    });

  const speak = (txt) => {
    if (!USE_TTS) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "en-GB";
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  };

  // breathing / welcome sequence
async function runSequence() {
  for (let i = 0; i < CYCLES_BEFORE_WELCOME; i++) {
    if (cancelled.current) return;
    setPhase("inhale");
    speak("Breathe in");
    await delay(INHALE_MS);
    if (cancelled.current) return;

    setPhase("hold");
    await delay(HOLD_MS);
    if (cancelled.current) return;

    setPhase("exhale");
    speak("Breathe out");
    await delay(EXHALE_MS);
    if (cancelled.current) return;

    setCycleCount((c) => c + 1);
  }

  if (cancelled.current) return;

  // start welcome sequence
  setPhase("welcome");
  setShowWelcomeTo(true);
  speak("Welcome to the Andysocial Zone");

    // 🌙 Fade out orb before opening curtains
  const orbEl = document.querySelector(".orb");
  if (orbEl) {
    orbEl.style.transition = "opacity 1s ease";
    orbEl.style.opacity = "0";
  }
  
  await delay(WELCOME_SHOW_MS);
  if (cancelled.current) return;

  setRevealTitle(true);

  // small pause so user sees full welcome
  await delay(1500);
  if (cancelled.current) return;



  // open curtains
  setPhase("done");
  setCurtainOpen(true);

  // wait animation
  await delay(CURTAIN_HIDE_MS);
  if (cancelled.current) return;

  // hide intro fully
  setIntroVisible(false);
}


  // skip intro immediately
  const handleSkip = () => {
    cancelled.current = true;
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
    try {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
    // reveal instantly with curtain
    setShowWelcomeTo(false);
    setRevealTitle(false);
    setCurtainOpen(true);
    setTimeout(() => setIntroVisible(false), CURTAIN_HIDE_MS);
  };

  // compute orb style values from phase (keeps transitions smooth)
  const orbScale = (() => {
    switch (phase) {
      case "inhale":
        return 1.34;
      case "hold":
        return 1.38;
      case "exhale":
        return 0.88;
      default:
        return 1;
    }
  })();

  const orbGlow = (() => {
    switch (phase) {
      case "inhale":
        return 0.95;
      case "hold":
        return 0.92;
      case "exhale":
        return 0.55;
      default:
        return 0.8;
    }
  })();

  const orbGradient = (() => {
    if (phase === "inhale") return "linear-gradient(180deg,#d6bcff 0%, #a78bfa 60%)";
    if (phase === "hold") return "linear-gradient(180deg,#c7d2fe 0%, #93c5fd 60%)";
    if (phase === "exhale") return "linear-gradient(180deg,#86efac 0%, #34d399 60%)";
    if (phase === "welcome") return "linear-gradient(180deg,#ffd27f 0%, #ffb86b 60%)";
    return "linear-gradient(180deg,#c4b5fd 0%, #a78bfa 60%)";
  })();

  // helper to split title into animated chars
  const title = "THE ANDYSOCIAL ZONE";
  const titleChars = title.split("");

  return (
    <Layout>
      <div className="zen-root">
        <div className="zen-container">
          <header className="zen-header">
            <div className="zen-logo">
  <img
    src="https://i.ibb.co/Vcj3wwGM/Chat-GPT-Image-Oct-23-2025-03-43-00-PM.png"
    alt="Zen Void Logo"
    className="zen-logo-img"
  />
</div>

            <div>
              <h1 className="zen-title">Zen Void</h1>
              <div className="zen-sub">A short place to breathe, reset and reflect</div>
            </div>
            <div className="zen-actions">
            </div>
          </header>

          {/* Content card - centered and fixed width so layout is balanced */}
          <div className="zen-content">
            <div className="zen-card">
              <p className="lead">
                Zen Void is a lightweight journalling and breathing space created to help you slow down,
                collect your thoughts and come back to your day clearer.
              </p>

              <h2>What is Zen Void?</h2>
              <p>
                Zen Void is a journalling app with a small set of features that help you form a calm,
                reflective habit: a breathing room to calm you, an interactive journal and calendar, personalised
                insights and a playful "moon" you can name to anchor your writing.
              </p>

              <h3>Core features</h3>
              <ul>
                <li><strong>Breathing room:</strong> A simple, calming guided breathing experience for short resets.</li>
                <li><strong>Journalling:</strong> Quick entries, rich reflections and the ability to name your moon to form attachment to your practice.</li>
                <li><strong>Calendar:</strong> Interactive timeline of entries so you can revisit and spot patterns.</li>
                <li><strong>Insights:</strong> Personalised reflections and trends that make sense, not noise.</li>
              </ul>

              <h3>How to use</h3>
              <ol>
                <li>Open Zen Void when you need a moment.</li>
                <li>Let the breathing room guide you (follow the orb and text cues).</li>
                <li>Write a quick note or reflection in your journal — name your moon to make it feel yours.</li>
              </ol>

              <p className="muted">Tip: short daily check-ins beat long infrequent journalling for forming a habit.</p>
            </div>
          </div>
        </div>

        {/* Intro overlay (orb + welcome + curtains) */}
        {introVisible && (
          <div className={`intro-overlay ${curtainOpen ? "curtain-open" : ""}`} role="dialog" aria-label="Zen Void intro">
            <div className="intro-center" aria-hidden={false}>
              {/* Orb with layered glows and subtle animated rings */}
              <div
                className="orb-outer"
                style={{
                  transform: `scale(${orbScale})`,
                  boxShadow: `0 30px 80px rgba(2,6,23,${0.5 * orbGlow}) , 0 0 120px rgba(167,139,250,${0.08 * orbGlow})`,
                  transition: "transform 900ms cubic-bezier(.2,.9,.2,1), box-shadow 700ms ease",
                }}
              >
                <div
                  className="orb"
                  style={{
                    background: orbGradient,
                    opacity: orbGlow,
                    transition: "background 600ms ease, opacity 600ms ease",
                  }}
                >
                  <div className="orb-core" />
                  <div className="orb-ring ring-1" />
                  <div className="orb-ring ring-2" />
                </div>
              </div>

              {/* Phase / welcome text */}
              <div className="intro-text">
                {phase !== "welcome" && phase !== "done" && (
                  <>
                    <div className="phase-main">{phase === "inhale" ? "Breathe In" : phase === "hold" ? "Hold" : "Breathe Out"}</div>
                    <div className="phase-sub">Slow down.</div>
                  </>
                )}

                {phase === "welcome" && (
                  <div className="welcome-wrap">
                    {showWelcomeTo && <div className="welcome-small">Welcome to</div>}
                    <div className={`welcome-title ${revealTitle ? "reveal" : ""}`}>
                      {titleChars.map((ch, i) => (
                        <span key={i} className="char" style={{ transitionDelay: `${i * 35}ms` }}>{ch}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="intro-controls">
                <button className="btn ghost skip" onClick={handleSkip} aria-label="Skip intro">Skip Intro</button>
              </div>
            </div>

            {/* curtains */}
            <div className={`curtain left ${curtainOpen ? "open" : ""}`} />
            <div className={`curtain right ${curtainOpen ? "open" : ""}`} />
          </div>
        )}
      </div>

      <style jsx>{`
        /* Page shell & container (keeps the site chrome identical) */
        .zen-root {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 36px 24px;
          position: relative;
          overflow-x: hidden;
        }

        .zen-container {
          width: 100%;
          max-width: 1100px;
        }

        .zen-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }
      /* logo container + image sizing */
.zen-logo {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,#22294a,#1b253b);
  color: #ffd27f;
  font-weight: 800;
  font-size: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
  overflow: hidden; /* ensure img doesn't escape the rounded box */
}

/* direct image rules — makes the uploaded logo fit and stay crisp */
.zen-logo-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 8px; /* optional — keeps subtle rounding */
}

        .zen-title { margin: 0; font-size: 20px; font-weight: 700; }
        .zen-sub { color: #9aa7bf; font-size: 13px; }
        .zen-actions { margin-left: auto; }

        .zen-content { display: flex; justify-content: center; }
        .zen-card {
          width: 100%;
          max-width: 820px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 14px;
          padding: 26px;
          box-shadow: 0 8px 30px rgba(2,6,23,0.7);
        }

        .lead { color: #d6dff2; font-size: 16px; margin-top: 0; }

        h2 { margin-top: 18px; font-size: 20px; }
        h3 { margin-top: 14px; }
        ul { margin-left: 18px; }
        ol { margin-left: 18px; }

        .muted { color: #9aa7bf; font-size: 14px; margin-top: 12px; }

        /* Intro overlay */
        .intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 120;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(800px 400px at 50% 28%, rgba(255,255,255,0.02), transparent), linear-gradient(180deg, rgba(2,6,23,0.45), rgba(2,6,23,0.6));
          transition: background 600ms ease;
        }
        .intro-overlay.curtain-open {
          background: transparent;
        }

        .intro-center {
          z-index: 140;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 18px;
          padding: 28px;
          border-radius: 12px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        /* Orb visuals */
        .orb-outer {
          border-radius: 999px;
          display: grid;
          place-items: center;
          width: 260px;
          height: 260px;
        }
        .orb {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .orb-core {
          width: 132px;
          height: 132px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          box-shadow: inset 0 -8px 24px rgba(255,255,255,0.03);
          z-index: 6;
        }

        /* animated rings */
        .orb-ring {
          position: absolute;
          border-radius: 999px;
          z-index: 3;
          pointer-events: none;
          opacity: 0.16;
        }
        .orb-ring.ring-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(167,139,250,0.06), transparent 35%);
          animation: ring-rotate 12s linear infinite;
        }
        .orb-ring.ring-2 {
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(74,222,128,0.03), transparent 30%);
          animation: ring-rotate-rev 18s linear infinite;
        }
        @keyframes ring-rotate { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes ring-rotate-rev { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }

        .intro-text { text-align: center; color: #f8fafc; }
        .phase-main { font-size: 22px; font-weight: 700; letter-spacing: .6px; }
        .phase-sub { margin-top: 6px; color: #9aa7bf; font-size: 13px; }

        /* welcome */
        .welcome-wrap { display:flex; flex-direction:column; align-items:center; gap:10px; }
        .welcome-small { font-size: 18px; color: #ffe9c8; opacity: .95; font-weight:600; transform: translateY(0); transition: transform 420ms ease, opacity 420ms ease; }
        .welcome-title {
          display:flex;
          gap: 4px;
          overflow: hidden;
          white-space: nowrap;
          transform: translateY(6px);
          opacity: 0;
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.45));
          transition: opacity 480ms ease, transform 480ms cubic-bezier(.2,.9,.2,1);
          font-weight: 900;
          font-size: 28px;
          letter-spacing: 2px;
        }
        .welcome-title.reveal { transform: translateY(0); opacity: 1; }

        /* per-character reveal (stagger) */
        .char {
          display:inline-block;
          transform: translateY(18px) rotateX(12deg);
          opacity: 0;
          color: #fff;
        }
        .welcome-title.reveal .char {
          transform: translateY(0) rotateX(0);
          opacity: 1;
        }
        .welcome-title.reveal .char:nth-child(odd) { color: #C7B8EA; }
        .welcome-title.reveal .char:nth-child(even) { color: #A7C7E7; }

        /* skip button */
        .intro-controls { margin-top: 6px; display:flex; gap:10px; }
        .btn { background: #ffd27f; color: #111827; padding: 8px 12px; border-radius: 10px; font-weight: 600; border: none; cursor: pointer; }
        .btn.ghost { background: transparent; color: #f8fafc; border: 1px solid rgba(255,255,255,0.06); }
        .btn.ghost.skip { padding: 8px 14px; border-radius: 999px; }

        /* curtains */
        .curtain {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 50%;
          z-index: 130;
          background: linear-gradient(180deg, rgba(8,12,32,0.98), rgba(8,10,24,0.98));
          transition: transform 900ms cubic-bezier(.2,.9,.2,1);
        }
        .curtain.left { left: 0; transform: translateX(0%); border-right: 1px solid rgba(255,255,255,0.02); }
        .curtain.right { right: 0; transform: translateX(0%); border-left: 1px solid rgba(255,255,255,0.02); }
        .curtain.open.left { transform: translateX(-110%); }
        .curtain.open.right { transform: translateX(110%); }

        /* responsive */
        @media (max-width: 880px) {
          .zen-container { padding: 0 8px; }
          .zen-card { padding: 18px; max-width: 100%; }
          .orb-outer { width: 210px; height: 210px; }
          .orb { width: 180px; height: 180px; }
          .orb-core { width: 110px; height: 110px; }
          .welcome-title { font-size: 20px; }
        }
      `}</style>
    </Layout>
  );
}
