// /pages/zenvoid.jsx
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

/**
 * Zen Void page with breathing intro.
 * Drop this file at /pages/zenvoid.jsx
 *
 * Reuses your site's Layout (header/background) so the page chrome matches /pages/index.jsx
 */

export default function ZenVoidPage() {
  // ---------- CONFIG ----------
  const CYCLES_BEFORE_WELCOME = 1; // inhale/exhale cycles before welcome
  const INHALE_MS = 1800;
  const HOLD_MS = 700;
  const EXHALE_MS = 2200;
  const WELCOME_DISPLAY_MS = 1600;
  const USE_TTS = true; // set false to disable speech

  // ---------- STATE & REFS ----------
  const [phase, setPhase] = useState("ready"); // 'ready'|'inhale'|'hold'|'exhale'|'welcome'|'done'
  const [cycleCount, setCycleCount] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const timers = useRef([]);
  const cancelled = useRef(false);

  // ---------- LIFECYCLE ----------
  useEffect(() => {
    cancelled.current = false;
    startSequence();

    return () => {
      cancelled.current = true;
      clearTimers();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        try {
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- HELPERS ----------
  const clearTimers = () => {
    timers.current.forEach((id) => clearTimeout(id));
    timers.current = [];
  };

  const timer = (ms) =>
    new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      timers.current.push(id);
    });

  const speak = (text) => {
    if (!USE_TTS) return;
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.95;
      u.pitch = 1;
      window.speechSynthesis.speak(u);
    } catch (e) {
      // silent fail
    }
  };

  // The main intro breathing sequence
  async function startSequence() {
    let cycles = 0;
    while (!cancelled.current && cycles < CYCLES_BEFORE_WELCOME) {
      // INHALE
      setPhase("inhale");
      speak("Breathe in");
      await timer(INHALE_MS);
      if (cancelled.current) return;

      // HOLD
      setPhase("hold");
      await timer(HOLD_MS);
      if (cancelled.current) return;

      // EXHALE
      setPhase("exhale");
      speak("Breathe out");
      await timer(EXHALE_MS);
      if (cancelled.current) return;

      cycles += 1;
      setCycleCount((c) => c + 1);
    }

    if (cancelled.current) return;

    // Show welcome text briefly
    setPhase("welcome");
    speak("Welcome to the andysocial zone");
    await timer(WELCOME_DISPLAY_MS);
    if (cancelled.current) return;

    // Curtain open
    setPhase("done");
    await timer(120);
    if (cancelled.current) return;

    setCurtainOpen(true);
    // wait for curtain animation to finish (match CSS transition)
    await timer(900);
    if (cancelled.current) return;

    setIntroVisible(false);
  }

  // Skip intro immediately and reveal page
  const handleSkip = () => {
    cancelled.current = true;
    clearTimers();
    try {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
    setCurtainOpen(true);
    setTimeout(() => setIntroVisible(false), 700);
  };

  // Orb visual values derived from phase
  const orbScale = (() => {
    if (phase === "inhale") return 1.28;
    if (phase === "hold") return 1.3;
    if (phase === "exhale") return 0.85;
    return 1;
  })();
  const orbOpacity = (() => {
    if (phase === "inhale") return 0.96;
    if (phase === "hold") return 0.92;
    if (phase === "exhale") return 0.56;
    return 0.8;
  })();
  const orbGradient = (() => {
    if (phase === "exhale") return "linear-gradient(180deg,#86efac,#4ade80)";
    if (phase === "inhale") return "linear-gradient(180deg,#c4b5fd,#a78bfa)";
    if (phase === "hold") return "linear-gradient(180deg,#a5b4fc,#818cf8)";
    if (phase === "welcome") return "linear-gradient(180deg,#ffd27f,#ffb86b)";
    return "linear-gradient(180deg,#c4b5fd,#a78bfa)";
  })();

  // Phase text shown under orb
  const phaseText = (() => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "exhale":
        return "Breathe Out";
      case "welcome":
        return "Welcome to the andysocial zone";
      default:
        return "Find a comfortable position";
    }
  })();

  // ---------- RENDER ----------
  return (
    <Layout>
      {/* Page content - uses your site's layout / chrome */}
      <div className="page" style={{ marginTop: 12 }}>
        <main className="content" style={{ width: "100%" }}>
          <div className="card">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="logo" style={{ width: 56, height: 56, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#22294a,#1b253b)", color: "#ffd27f", fontWeight: 700 }}>
                    ZV
                  </div>
                  <div>
                    <h1 style={{ margin: 0 }}>Zen Void</h1>
                    <div style={{ color: "#9aa7bf", fontSize: 13 }}>A short place to breathe, reset and reflect</div>
                  </div>
                </div>
              </div>

              <div>
                <Link href="/">
                  <a className="btn ghost">Back Home</a>
                </Link>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <p style={{ color: "#d6dff2" }}>
                Zen Void is a lightweight breathing and mood-reset experience built to help you take quick,
                calming breaks during your day. Click "Skip Intro" anytime to jump straight to the content.
              </p>
            </div>

            {/* Main explanatory content (this is the 'normal' page content revealed after intro) */}
            <section style={{ marginTop: 16 }}>
              <h2>What is Zen Void?</h2>
              <p>
                Zen Void is a minimal breathing guide with soothing visuals designed for short sessions (1–5 minutes).
                Use it when you need a moment to step back, calm your breath, and refocus.
              </p>

              <h3>How it works</h3>
              <ol>
                <li>Follow the orb: inhale — hold — exhale.</li>
                <li>Let the session guide your breath and attention; no pressure to match exactly.</li>
                <li>Return to the page feeling a touch calmer and clearer.</li>
              </ol>

              <h3>Quick tips</h3>
              <ul>
                <li>Breathe through your nose when possible.</li>
                <li>Keep shoulders relaxed; let the exhale be slightly longer than the inhale.</li>
                <li>Use short sessions frequently rather than one long session.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      {/* Intro overlay (fixed) */}
      {introVisible && (
        <div className={`intro-overlay ${curtainOpen ? "curtain-open" : ""}`} role="dialog" aria-label="Zen Void intro" style={overlayStyle()}>
          <div className="intro-inner" style={introInnerStyle()}>
            <div className="orb-wrap" aria-hidden="true">
              <div
                className="orb"
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.6), 0 0 80px rgba(255,255,255,0.03) inset",
                  transition: "transform 900ms cubic-bezier(.2,.9,.2,1), opacity 900ms ease",
                  transform: `scale(${orbScale})`,
                  opacity: orbOpacity,
                  background: orbGradient,
                }}
              >
                <div style={{ width: 140, height: 140, borderRadius: 999, background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 -6px 18px rgba(255,255,255,0.03)" }} />
              </div>
            </div>

            <div className="phase-text" aria-live="polite" style={{ textAlign: "center", marginTop: 6 }}>
              <div style={{ fontSize: 20, fontWeight: 600 }}>{phaseText}</div>
              {phase !== "welcome" && phase !== "done" && (
                <div style={{ fontSize: 13, color: "#9aa7bf", marginTop: 6 }}>
                  Cycle {cycleCount} of {CYCLES_BEFORE_WELCOME}
                </div>
              )}
            </div>

            <div className="intro-controls" style={{ marginTop: 10 }}>
              <button className="skip-btn btn ghost" onClick={handleSkip} aria-label="Skip intro" style={{ padding: "8px 12px", borderRadius: 999 }}>
                Skip Intro
              </button>
            </div>
          </div>

          {/* Curtains */}
          <div className={`curtain left ${curtainOpen ? "open" : ""}`} aria-hidden="true" style={leftCurtainStyle(curtainOpen)} />
          <div className={`curtain right ${curtainOpen ? "open" : ""}`} aria-hidden="true" style={rightCurtainStyle(curtainOpen)} />
        </div>
      )}

      {/* Inline styles specific to this page (kept here so file is self-contained) */}
      <style jsx>{`
        /* minimal scoped CSS so the page matches your site's aesthetic */
        .card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius: 14px; padding: 18px; box-shadow: 0 8px 30px rgba(2,6,23,0.7); }
        .logo { font-weight: 700; color: #ffd27f; }
        .btn { background: #ffd27f; color: #111827; padding: 8px 12px; border-radius: 10px; font-weight: 600; text-decoration: none; border: none; }
        .btn.ghost { background: transparent; color: #f8fafc; border: 1px solid rgba(255,255,255,0.06); padding: 8px 12px; border-radius: 10px; }
      `}</style>
    </Layout>
  );
}

/* ---------- Helper inline-style factory functions ---------- */

function overlayStyle() {
  return {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 60,
    background: "linear-gradient(180deg, rgba(2,6,23,0.4), rgba(2,6,23,0.6)), radial-gradient(800px 400px at 50% 30%, rgba(255,200,120,0.03), transparent)",
    transition: "opacity .5s ease, visibility .5s ease",
  };
}

function introInnerStyle() {
  return {
    zIndex: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 28,
    borderRadius: 12,
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  };
}

function leftCurtainStyle(open) {
  return {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    width: "50%",
    background: "linear-gradient(180deg, rgba(8,12,32,0.95), rgba(8,10,24,0.98))",
    zIndex: 70,
    transform: open ? "translateX(-110%)" : "translateX(0%)",
    transition: "transform 800ms cubic-bezier(.2,.9,.2,1)",
    borderRight: "1px solid rgba(255,255,255,0.02)",
  };
}

function rightCurtainStyle(open) {
  return {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "50%",
    background: "linear-gradient(180deg, rgba(8,12,32,0.95), rgba(8,10,24,0.98))",
    zIndex: 70,
    transform: open ? "translateX(110%)" : "translateX(0%)",
    transition: "transform 800ms cubic-bezier(.2,.9,.2,1)",
    borderLeft: "1px solid rgba(255,255,255,0.02)",
  };
}

