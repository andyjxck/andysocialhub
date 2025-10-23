// components/Layout.jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <div className="wrap">
      {/* Floating/glassy top bar INSIDE the .wrap container */}
      <header className="topbar">
        <div className="brand">The Andysocial Zone</div>
        <nav className="nav" aria-label="Main">
          <Link href="/" className={`navlink ${pathname === "/" ? "active" : ""}`}>
            Blog
          </Link>
          <Link href="/policies" className={`navlink ${pathname === "/policies" ? "active" : ""}`}>
            Policies
          </Link>
          <Link href="/contact" className={`navlink ${pathname === "/contact" ? "active" : ""}`}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Spacer so content doesn't slide under the sticky bar */}
      <div className="topbar-spacer" aria-hidden />

      <main>{children}</main>

      <footer className="footer">© {new Date().getFullYear()} an andysocial game</footer>

      <style jsx>{`
        /* Keep it inside .wrap so width stays aligned with the site */
        .topbar {
          position: sticky;
          top: 12px;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 14px;
          border-radius: 14px;

          /* darker glass look to match the new background */
          background: rgba(10, 10, 22, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(7, 7, 12, 0.18);
        }

        .topbar-spacer { height: 68px; }

        .brand {
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          min-width: 0; /* prevents overflow on narrow screens */
        }

        /* pill-style links that won’t stretch the header */
        .navlink {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          text-decoration: none;
          opacity: 0.95;
          transition: background 150ms ease, border-color 150ms ease,
            box-shadow 150ms ease, transform 100ms ease, opacity 120ms ease;
          white-space: nowrap;
        }
        .navlink:hover {
          background: rgba(124, 58, 237, 0.22);
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.18);
          opacity: 1;
        }
        .navlink:active { transform: translateY(1px); }
        .navlink.active {
          background: rgba(124, 58, 237, 0.32);
          border-color: rgba(255, 255, 255, 0.34);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            0 6px 20px rgba(124, 58, 237, 0.22);
          opacity: 1;
        }

        main { /* content uses your global .wrap spacing */ }

        .footer {
          margin-top: 28px;
          opacity: 0.7;
          font-size: 13px;
        }

        @media (max-width: 720px) {
          .brand { font-size: 16px; }
          .navlink { padding: 7px 10px; }
          .topbar-spacer { height: 62px; }
        }
      `}</style>
    </div>
  );
}
