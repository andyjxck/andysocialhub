// pages/feedback.jsx
import { useEffect, useMemo, useState } from "react";
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
    // reset form
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

      {/* Gate + form */}
      {showAdmin && (
        <div className="card admin-panel">
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

              <label className="small">User ID</label>
              <input
                type="text"
                placeholder="e.g. 12345"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input"
              />

              <label className="small">Feedback Topic</label>
              <select
                className="input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                {TOPICS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

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

              <label className="small">Feedback</label>
              <textarea
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
                <div className="post-body" style={{ whiteSpace: "pre-wrap" }}>
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
