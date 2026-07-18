// Avatar, Gardırop ve AI özelliklerine erişilen ana panel.
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="font-mono dashboard-page__eyebrow">SPRINT 2 · KULLANICI PANELİ</div>
      <h1 className="font-display dashboard-page__title">MirrorAI Dashboard</h1>
      <p className="dashboard-page__desc">
        Avatar, gardırop ve AI destekli önerilerine tek panelden ulaş.
      </p>

      <div className="dashboard-page__grid">
        <FeatureCard
          icon="👤"
          title="Avatar"
          description="Vücut ölçülerine göre dijital avatarını oluştur."
          status="arastirma"
          to="/profile"
        />
        <FeatureCard
          icon="👕"
          title="Wardrobe"
          description="Dijital gardırobunu görüntüle ve düzenle."
          status="devam"
          to="/wardrobe"
        />
        <FeatureCard
          icon="✨"
          title="AI Stylist"
          description="Kişiselleştirilmiş kombin önerileri al."
          status="arastirma"
          to="/ai-stylist"
        />
        <FeatureCard
          icon="🪞"
          title="Virtual Try-On"
          description="Satın almadan önce kıyafetleri sanal olarak dene."
          status="arastirma"
          to="/try-on"
        />
      </div>
    </div>
  );
}

export default Dashboard;
