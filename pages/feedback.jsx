// pages/feedback.jsx
import { useEffect, useState, useMemo } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Feedback() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // admin state
  const [showAdmin, setShowAdmin] = useState(false);
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);

  // compose form
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  // selected feedback
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
    if (
      pass.trim() &&
      pass === process.env.NEXT_PUBLIC_FEEDBACK_PASSWORD
    ) {
      setAuthed(true);
    } else {
      alert("Wrong password.");
    }
  }

  async function submitRow(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("feedback")
      .insert({
        title: title.trim(),
        body: body.trim(),
      })
      .select()
      .single();
    setSaving(false);
    if (error) {
      alert(error.message || "Failed to publish");
      return;
    }
    setTitle("");
    setBody("");
    await loadRows();
    if (data?.id) setActiveId(data.id);
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

      {/* Admin panel */}
      {showAdmin && (
        <div className="card admin-panel">
          {!authed ? (
            <form onSubmit={tryAuth} className="admin-row">
              <span className="badge">Submit Feedback</span>
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="input"
                style={{ minWidth: 220 }}
              />
              <button className="btn" type="submit">Unlock</button>
            </form>
          ) : (
            <form onSubmit={submitRow} className="admin-panel">
              <div className="badge">New Feedback</div>
              <input
                type="text"
                placeholder="Title (optional but useful)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input"
              />
              <textarea
                placeholder="Write your feedback…"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="textarea"
                rows={8}
              />
              <div className="admin-actions">
                <button className="btn" type="submit" disabled={saving}>
                  {saving ? "Publishing…" : "Publish"}
                </button>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => { setTitle(""); setBody(""); }}
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Layout: sidebar + content */}
      <div className="page" style={{ marginTop: 12 }}>
        {/* Sidebar list */}
        <aside className="sidebar">
          <div className="card">
            <div className="small" style={{ marginBottom: 8, opacity: 0.8 }}>
              Feedback
            </div>
            {loading ? (
              <div className="small">Loading…</div>
            ) : rows.length === 0 ? (
              <div className="small">No feedback yet.</div>
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
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") && setActiveId(r.id)
                      }
                    >
                      <div className="title">{r.title || "(untitled)"}</div>
                      <div className="date">
                        {r.created_at
                          ? new Date(r.created_at).toLocaleDateString()
                          : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        {/* Single item content */}
        <main className="content">
          <div className="card">
            {loading ? (
              <div className="small">Loading…</div>
            ) : !activeItem ? (
              <div className="small">Select a feedback item from the left.</div>
            ) : (
              <>
                <div className="post-header">
                  <h1 className="post-title">{activeItem.title || "Feedback"}</h1>
                  {authed && (
                    <button
                      className="btn ghost"
                      onClick={() => deleteRow(activeItem.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                <div className="post-date">
                  {activeItem.created_at
                    ? new Date(activeItem.created_at).toLocaleString()
                    : ""}
                </div>
                <div className="post-body" style={{ whiteSpace: "pre-wrap" }}>
                  {activeItem.body}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}
