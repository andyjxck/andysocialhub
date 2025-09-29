// pages/feedback.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

const TOPICS = [
  "Gameplay",
  "Performance",
  "Crash",
  "Bug",
  "Visual Bug",
  "UI/UX",
  "Audio",
  "Network",
  "Other",
];

/**
 * CustomSelect: a bulletproof dropdown that doesn't rely on <select>.
 * - Click to open/close
 * - Arrow keys / Enter / Escape support
 * - High z-index and no blur so it can't be blocked
 * - Fully controlled value via props
 */
function CustomSelect({ label, value, onChange, options, disabled }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, options.findIndex((o) => o === value))
  );
  const btnRef = useRef(null);
  const listRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    // return focus to button
    requestAnimationFrame(() => btnRef.current?.focus?.());
  }, []);

  const handleKeyDown = (e) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
        setActiveIndex(Math.max(0, options.findIndex((o) => o === value)));
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const choice = options[activeIndex];
      if (choice) onChange(choice);
      close();
    }
  };

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (
        !btnRef.current?.contains(e.target) &&
        !listRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc, true);
    document.addEventListener("touchstart", onDoc, true);
    return () => {
      document.removeEventListener("mousedown", onDoc, true);
      document.removeEventListener("touchstart", onDoc, true);
    };
  }, [open]);

  return (
    <div style={{ position: "relative" }}>
      {label ? (
        <label className="small" style={{ display: "block", marginBottom: 6 }}>
          {label}
        </label>
      ) : null}
      <button
        ref={btnRef}
        type="button"
        className="input"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          cursor: disabled ? "not-allowed" : "pointer",
          position: "relative",
          zIndex: 20, // above surroundings
        }}
      >
        <span>{value}</span>
        <span aria-hidden style={{ opacity: 0.8 }}>▾</span>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="card"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: 6,
            zIndex: 9999, // sit on top of any blur/sticky bars
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            maxHeight: 280,
            overflowY: "auto",
            padding: 6,
          }}
          onKeyDown={handleKeyDown}
        >
          {options.map((opt, i) => {
            const isActive = i === activeIndex;
            const isSelected = opt === value;
            return (
              <div
                key={opt}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  onChange(opt);
                  close();
                }}
                className="post-link"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  background: isActive ? "rgba(124,58,237,0.22)" : "rgba(10, 10, 22, 0.24)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <span>{opt}</span>
                {isSelected ? <span className="small" style={{ opacity: 0.85 }}>✓</span> : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Feedback() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // gate + admin
  const [showAdmin, setShowAdmin] = useState(false);
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);

  // form fields
  const [userId, setUserId] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [feedback, setFeedback] = useState("");
  const [platform, setPlatform] = useState("Android");
  const [saving, setSaving] = useState(false);

  // selection
  const [activeId, setActiveId] = useState(null);

  async function loadRows() {
    setLoading(true);
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) {
      setRows(data || []);
      if (!activeId && (data?.length ?? 0) > 0) {
        setActiveId(data[0].id);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadRows();
  }, []);

  const activeItem = useMemo(
    () => rows.find((r) => r.id === activeId) || null,
    [rows, activeId]
  );

  function tryAuth(e) {
    e.preventDefault();
    if (pass.trim() && pass === process.env.NEXT_PUBLIC_FEEDBACK_PASSWORD) {
      setAuthed(true);
    } else {
      alert("Wrong password.");
    }
  }

  async function submitRow(e) {
    e.preventDefault();
    if (!userId.trim() || !feedback.trim() || !topic.trim() || !platform.trim()) {
      alert("Please complete all fields.");
      return;
    }
    setSaving(true);
    const { data, error } = await supabase
      .from("feedback")
      .insert({
        user_id: userId.trim(),
        topic: topic.trim(),
        feedback: feedback.trim(),
        platform: platform.trim(),
      })
      .select()
      .single();
    setSaving(false);
    if (error) {
      alert(error.message || "Failed to submit");
      return;
    }
    setUserId("");
    setTopic(TOPICS[0]);
    setFeedback("");
    setPlatform("Android");
    await loadRows();
    if (data?.id) setActiveId(data.id);
    alert("Thanks! Your report was submitted.");
  }

  async function deleteRow(id) {
    if (!confirm("Delete this entry?")) return;
    await supabase.from("feedback").delete().eq("id", id);
    await loadRows();
    if (id === activeId && rows.length > 0) {
      const next = rows.find((r) => r.id !== id);
      setActiveId(next ? next.id : null);
    }
  }

  return (
    <Layout>
      {/* Admin toggle */}
      <div className="admin-bar">
        <button
          className="btn ghost"
          onClick={() => setShowAdmin((v) => !v)}
          aria-expanded={showAdmin}
        >
          {showAdmin ? "Hide Admin" : "Admin"}
        </button>
      </div>

      {/* Gate + form (no blur issues on this card) */}
      {showAdmin && (
        <div
          className="card admin-panel"
          style={{
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            position: "relative",
            zIndex: 100, // keep the form above sticky bars
          }}
        >
          {!authed ? (
            <form onSubmit={tryAuth} className="admin-row" style={{ gap: 8 }}>
              <span className="badge">Report a Bug</span>
              <input
                type="password"
                placeholder="Enter feedback password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="input"
                style={{ minWidth: 240 }}
              />
              <button className="btn" type="submit">Unlock</button>
            </form>
          ) : (
            <form onSubmit={submitRow} className="admin-panel" style={{ display: "grid", gap: 12 }}>
              <div className="badge">New Bug Report</div>

              <label className="small" htmlFor="userId">User ID</label>
              <input
                id="userId"
                type="text"
                placeholder="e.g. 12345"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input"
              />

              {/* Custom dropdown instead of <select> */}
              <CustomSelect
                label="Feedback Topic"
                value={topic}
                onChange={setTopic}
                options={TOPICS}
              />

              <label className="small">Platform</label>
              <div style={{ display: "flex", gap: 12 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <input
                    type="radio"
                    name="platform"
                    value="Android"
                    checked={platform === "Android"}
                    onChange={(e) => setPlatform(e.target.value)}
                  />
                  Android
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <input
                    type="radio"
                    name="platform"
                    value="iOS"
                    checked={platform === "iOS"}
                    onChange={(e) => setPlatform(e.target.value)}
                  />
                  iOS
                </label>
              </div>

              <label className="small" htmlFor="feedback">Feedback</label>
              <textarea
                id="feedback"
                placeholder="Describe the issue, steps to reproduce, expected vs. actual behavior…"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="textarea"
                rows={8}
              />

              <div className="admin-actions" style={{ display: "flex", gap: 8 }}>
                <button className="btn" type="submit" disabled={saving}>
                  {saving ? "Submitting…" : "Submit"}
                </button>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => {
                    setUserId("");
                    setTopic(TOPICS[0]);
                    setFeedback("");
                    setPlatform("Android");
                  }}
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* List + details */}
      <div className="page" style={{ marginTop: 12 }}>
        <aside className="sidebar">
          <div className="card">
            <div className="small" style={{ marginBottom: 8, opacity: 0.8 }}>Reports</div>
            {loading ? (
              <div className="small">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="small">No reports yet.</div>
            ) : (
              <div className="post-list">
                {rows.map((r) => {
                  const isActive = r.id === activeId;
                  return (
                    <div
                      key={r.id}
                      className={`post-link ${isActive ? "active" : ""}`}
                      onClick={() => setActiveId(r.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveId(r.id)}
                    >
                      <div className="title">
                        {r.topic || "Bug"} · {r.platform || "—"}
                      </div>
                      <div className="date">
                        {r.user_id ? `User ${r.user_id}` : "(no user id)"} ·{" "}
                        {r.created_at ? new Date(r.created_at).toLocaleDateString() : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        <main className="content">
          <div className="card">
            {loading ? (
              <div className="small">Loading…</div>
            ) : !activeItem ? (
              <div className="small">Select a report from the left.</div>
            ) : (
              <>
                <div className="post-header">
                  <h1 className="post-title">
                    {(activeItem.topic || "Bug") + " · " + (activeItem.platform || "—")}
                  </h1>
                  {authed && (
                    <button className="btn ghost" onClick={() => deleteRow(activeItem.id)}>
                      Delete
                    </button>
                  )}
                </div>
                <div className="post-date">
                  {activeItem.created_at ? new Date(activeItem.created_at).toLocaleString() : ""}
                  {" · "}
                  {activeItem.user_id ? `User ${activeItem.user_id}` : "(no user id)"}
                </div>
                <div className="post-body">
                  {activeItem.feedback}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}
