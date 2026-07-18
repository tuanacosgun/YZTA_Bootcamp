import { Link } from "react-router-dom";
import StatusTag from "../StatusTag/StatusTag";
import "./FeatureCard.css";

// Mevcut kullanımınla (icon, title, description) tam uyumlu.
// Ek olarak opsiyonel `status` (StatusTag durumu) ve `to` (route linki) alır.
function FeatureCard({ icon, title, description, status, to }) {
  const content = (
    <>
      <span className="feature-card__icon">{icon}</span>
      <div className="feature-card__title">{title}</div>
      <p className="feature-card__desc">{description}</p>
      {status && <StatusTag state={status} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="feature-card card">
        {content}
      </Link>
    );
  }

  return <div className="feature-card card">{content}</div>;
}

export default FeatureCard;
