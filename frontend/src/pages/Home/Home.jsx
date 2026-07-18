// Kullanıcının uygulamayı ilk açtığında göreceği Landing Page.
import { Link } from "react-router-dom";
import FittingMirror from "../../components/FittingMirror/FittingMirror";
import StatusTag from "../../components/StatusTag/StatusTag";
import "./Home.css";

const FEATURES = [
  { title: "3D Dijital Avatar", desc: "Kullanıcı ölçülerine göre gerçekçi avatar oluşturma.", status: "arastirma" },
  { title: "AI Virtual Try-On", desc: "E-ticaret linkindeki kıyafeti avatar üzerinde gösterme.", status: "arastirma" },
  { title: "Dijital Gardırop", desc: "Kıyafetleri kategoriye göre kaydetme ve listeleme.", status: "devam" },
  { title: "AI Kombin Motoru", desc: "Hava durumu ve etkinliğe göre kombin önerisi.", status: "arastirma" },
];

const AUDIENCE = [
  "Online alışveriş yapan kullanıcılar",
  "Moda ile ilgilenen ve stil danışmanlığı isteyenler",
  "Influencer'lar ve içerik üreticileri",
  "Yoğun çalışan profesyoneller ve öğrenciler",
];

function Home() {
  return (
    <div className="home-page">
      <nav className="home-page__nav">
        <div className="font-display home-page__logo">
          Mirror<span style={{ color: "var(--brass)" }}>AI</span>
        </div>
        <Link to="/dashboard" className="btn-ghost">
          Panele Git →
        </Link>
      </nav>

      <div className="home-page__hero">
        <div>
          <span className="tag" style={{ color: "var(--brass)" }}>
            SPRINT 2 · MVP GELİŞTİRME AŞAMASI
          </span>
          <h1 className="font-display home-page__title">
            Aynan artık senin
            <br />
            <span className="home-page__title-accent">stil zekân</span>.
          </h1>
          <p className="home-page__lead">
            MirrorAI, internette gördüğün kıyafetleri kendi dijital vücudunda dener, gardırobunu
            hafızasında tutar ve hava durumuna göre sana günlük kombin önerir.
          </p>
          <Link to="/dashboard" className="btn-primary">
            Dashboard'u İncele →
          </Link>
        </div>
        <div>
          <FittingMirror />
          <div className="font-mono home-page__caption">KABİN AYNASI · AVATAR YER TUTUCU</div>
        </div>
      </div>

      <div className="stitch home-page__features">
        <div className="font-mono home-page__eyebrow">ÜRÜN ÖZELLİKLERİ</div>
        <h2 className="font-display home-page__section-title">Sprint 2 kapsamındaki durum</h2>
        <div className="home-page__grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="card home-page__feature-card">
              <div className="home-page__feature-title">{f.title}</div>
              <p className="home-page__feature-desc">{f.desc}</p>
              <StatusTag state={f.status} />
            </div>
          ))}
        </div>
      </div>

      <div className="stitch home-page__audience">
        <div className="font-mono home-page__eyebrow">HEDEF KİTLE</div>
        <h2 className="font-display home-page__section-title">Kimler için tasarlandı</h2>
        <ul className="home-page__audience-list">
          {AUDIENCE.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
