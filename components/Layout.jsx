import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <div className="wrap">
      <header className="topbar">
        <div className="brand">The Andysocial Zone</div>

        <nav className="nav" aria-label="Main">
          <Link href="/" className={`navlink ${pathname === "/" ? "active" : ""}`}>
            <span className="icon">🪷</span>
            <span className="label">Zen Void</span>
          </Link>

          <Link href="/policies" className={`navlink ${pathname === "/policies" ? "active" : ""}`}>
            <span className="icon">📜</span>
            <span className="label">Policies</span>
          </Link>

          <Link href="/contact" className={`navlink ${pathname === "/contact" ? "active" : ""}`}>
            <span className="icon">💬</span>
            <span className="label">Contact</span>
          </Link>

          <Link href="/blog" className={`navlink ${pathname === "/blog" ? "active" : ""}`}>
            <span className="icon">📝</span>
            <span className="label">Blog</span>
          </Link>
        </nav>
      </header>

      <div className="topbar-spacer" aria-hidden />

      <main>{children}</main>

      <footer className="footer">© {new Date().getFullYear()} an andysocial game</footer>

      <style jsx>{`
        /* ======================
           DESKTOP LAYOUT
        ====================== */
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
          background: rgba(10, 10, 22, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(7, 7, 12, 0.18);
        }

        .topbar-spacer {
          height: 68px;
        }

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
          min-width: 0;
        }

        .navlink {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          text-decoration: none;
          transition: all 150ms ease;
          min-width: 64px;
        }

        .navlink:hover {
          background: rgba(124, 58, 237, 0.22);
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.18);
        }

        .navlink:active {
          transform: translateY(1px);
        }

        .navlink.active {
          background: rgba(124, 58, 237, 0.32);
          border-color: rgba(255, 255, 255, 0.34);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            0 6px 20px rgba(124, 58, 237, 0.22);
        }

        .icon {
          font-size: 18px;
          line-height: 1;
        }

        .label {
          font-size: 13px;
          margin-top: 3px;
          opacity: 0.85;
        }

        .footer {
          margin-top: 28px;
          opacity: 0.7;
          font-size: 13px;
          text-align: center;
        }

        /* ======================
           MOBILE LAYOUT
        ====================== */
        @media (max-width: 720px) {
          .topbar {
            top: 6px;
            padding: 8px 10px;
            border-radius: 12px;
            gap: 8px;
          }

          .topbar-spacer {
            height: 60px;
          }

          .brand {
            display: none;
          }

          .nav {
            flex: 1;
            justify-content: space-around;
          }

          .navlink {
            flex: 1;
            padding: 6px;
            min-width: 0;
            border-radius: 10px;
          }

          .icon {
            font-size: 20px;
          }

          .label {
            font-size: 10px;
            margin-top: 2px;
          }
        }
      `}</style>
    </div>
  );
}
