import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

// Profile, Wardrobe, TryOn, AIStylist sayfalarını saran ortak sidebar.
const NAV = [
  { to: "/profile", label: "Profil", icon: "👤" },
  { to: "/wardrobe", label: "Gardırop", icon: "👕" },
  { to: "/try-on", label: "Ürün Analizi", icon: "🪞" },
  { to: "/ai-stylist", label: "AI Kombin", icon: "✨" },
];

function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-layout__sidebar">
        <button
          className="dashboard-layout__logo font-display"
          onClick={() => navigate("/dashboard")}
        >
          Mirror<span style={{ color: "var(--brass)" }}>AI</span>
        </button>

        <nav className="dashboard-layout__nav">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `nav-item${isActive ? " nav-item--active" : ""}`}
            >
              <span>{n.icon}</span> {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="dashboard-layout__footer">
          <button className="nav-item dashboard-layout__home" onClick={() => navigate("/")}>
            <span>🏠</span> Ana Sayfaya Dön
          </button>
          <div className="dashboard-layout__sprint">
            <div className="font-mono dashboard-layout__sprint-label">SPRINT DURUMU</div>
            <div>Sprint 2 · 50 puan</div>
          </div>
        </div>
      </aside>

      <main className="dashboard-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
