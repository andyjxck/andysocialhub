// pages/index.jsx
import { useEffect, useState, useMemo } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // admin state
  const [showAdmin, setShowAdmin] = useState(false);
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);

  // compose form
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  // selected post
  const [activeId, setActiveId] = useState(null);

  async function loadPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) {
      setPosts(data || []);
      // default to first post if none selected
      if (!activeId && (data?.length ?? 0) > 0) {
        setActiveId(data[0].id);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const activePost = useMemo(
    () => posts.find((p) => p.id === activeId) || null,
    [posts, activeId]
  );

  function tryAuth(e) {
    e.preventDefault();
    if (pass.trim() && pass === process.env.NEXT_PUBLIC_BLOG_PASSWORD) {
      setAuthed(true);
    } else {
      alert("Wrong password.");
    }
  }

  async function submitPost(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    const { data, error } = await supabase.from("posts").insert({
      title: title.trim(),
      body: body.trim(),
    }).select().single();
    setSaving(false);
    if (error) {
      alert(error.message || "Failed to publish");
      return;
    }
    setTitle("");
    setBody("");
    await loadPosts();
    if (data?.id) setActiveId(data.id);
  }

  async function deletePost(id) {
    if (!confirm("Delete this post?")) return;
    await supabase.from("posts").delete().eq("id", id);
    await loadPosts();
    // keep selection sensible
    if (id === activeId && posts.length > 0) {
      const next = posts.find((p) => p.id !== id);
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
              <span className="badge">Editor</span>
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
            <form onSubmit={submitPost} className="admin-panel">
              <div className="badge">New Post</div>
              <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input"
              />
              <textarea
                placeholder="Write your update…"
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

      {/* Blog layout: sidebar + content */}
      <div className="page" style={{ marginTop: 12 }}>
        {/* Sidebar list (chapters) */}
        <aside className="sidebar">
          <div className="card">
            <div className="small" style={{ marginBottom: 8, opacity: 0.8 }}>Posts</div>
            {loading ? (
              <div className="small">Loading…</div>
            ) : posts.length === 0 ? (
              <div className="small">No posts yet.</div>
            ) : (
              <div className="post-list">
                {posts.map((p) => {
                  const isActive = p.id === activeId;
                  return (
                    <div
                      key={p.id}
                      className={`post-link ${isActive ? "active" : ""}`}
                      onClick={() => setActiveId(p.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveId(p.id)}
                    >
                      <div className="title">{p.title}</div>
                      <div className="date">
                        {new Date(p.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        {/* Single post content */}
        <main className="content">
          <div className="card">
            {loading ? (
              <div className="small">Loading…</div>
            ) : !activePost ? (
              <div className="small">Select a post from the left.</div>
            ) : (
              <>
                <div className="post-header">
                  <h1 className="post-title">{activePost.title}</h1>
                  {authed && (
                    <button className="btn ghost" onClick={() => deletePost(activePost.id)}>
                      Delete
                    </button>
                  )}
                </div>
                <div className="post-date">
                  {new Date(activePost.created_at).toLocaleString()}
                </div>
                <div className="post-body">{activePost.body}</div>
              </>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}
