import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Wardrobe from "../pages/Wardrobe/Wardrobe";
import AIStylist from "../pages/AIStylist/AIStylist";
import TryOn from "../pages/TryOn/TryOn";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Sidebar'lı paneli paylaşan sayfalar */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/ai-stylist" element={<AIStylist />} />
        <Route path="/try-on" element={<TryOn />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
