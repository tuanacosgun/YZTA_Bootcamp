// Kullanıcının kişisel ve vücut ölçülerini gireceği profil ekranı.
// Ayrı bir Avatar sayfası olmadığı için US-10 (avatar araştırması) da burada yer alıyor.
import { useState } from "react";
import StatusTag from "../../components/StatusTag/StatusTag";
import FittingMirror from "../../components/FittingMirror/FittingMirror";
import "./Profile.css";

const BEDENLER = ["XS", "S", "M", "L", "XL", "XXL"];
const AVATAR_OPTIONS = ["Tam 3D avatar üretimi", "Ölçü tabanlı basit temsil", "Şablon / placeholder avatar"];

function Profile() {
  const [form, setForm] = useState({ ad: "", boy: "", kilo: "", beden: "", olcu: "" });
  const [saved, setSaved] = useState(false);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(false);
  };

  return (
    <div className="profile-page">
      {/* US-9 — Profil formu */}
      <section className="profile-page__section">
        <div className="font-mono profile-page__eyebrow">US-9</div>
        <div className="profile-page__heading">
          <h2 className="font-display">Profil Bilgileri</h2>
          <StatusTag state="devam" />
        </div>
        <p className="profile-page__desc">
          Boy, kilo, beden ve vücut ölçüsü bilgilerin avatar oluşturma sürecinde kullanılacak.
        </p>

        <div className="card profile-page__card">
          <div>
            <label className="field-label">Ad Soyad</label>
            <input
              className="field-input"
              placeholder="Örn. Tuana Y."
              value={form.ad}
              onChange={(e) => update("ad", e.target.value)}
            />
          </div>
          <div className="profile-page__row">
            <div>
              <label className="field-label">Boy (cm)</label>
              <input
                className="field-input"
                placeholder="170"
                inputMode="numeric"
                value={form.boy}
                onChange={(e) => update("boy", e.target.value)}
              />
            </div>
            <div>
              <label className="field-label">Kilo (kg)</label>
              <input
                className="field-input"
                placeholder="62"
                inputMode="numeric"
                value={form.kilo}
                onChange={(e) => update("kilo", e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="field-label">Beden</label>
            <div className="profile-page__sizes">
              {BEDENLER.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => update("beden", b)}
                  className={`font-mono profile-page__size-btn${
                    form.beden === b ? " profile-page__size-btn--active" : ""
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="field-label">Vücut Ölçüsü Notu (opsiyonel)</label>
            <input
              className="field-input"
              placeholder="Örn. omuz geniş, bel ince"
              value={form.olcu}
              onChange={(e) => update("olcu", e.target.value)}
            />
          </div>
          <div className="profile-page__save-row">
            <button className="btn-primary" type="button" onClick={() => setSaved(true)}>
              Kaydet
            </button>
            {saved && (
              <span className="font-mono profile-page__saved-note">
                Kaydedildi — avatar araştırması tamamlandığında kullanılacak.
              </span>
            )}
          </div>
        </div>
      </section>

      {/* US-10 — Avatar araştırması */}
      <section className="profile-page__section">
        <div className="font-mono profile-page__eyebrow">US-10</div>
        <div className="profile-page__heading">
          <h2 className="font-display">3D Dijital Avatar</h2>
          <StatusTag state="arastirma" />
        </div>
        <p className="profile-page__desc">
          Vücut ölçülerine dayalı avatar oluşturma yöntemi henüz araştırma aşamasında.
        </p>
        <div className="card profile-page__card">
          <div className="profile-page__mirror">
            <FittingMirror height={200} />
          </div>
          <div className="profile-page__options">
            {AVATAR_OPTIONS.map((o) => (
              <div key={o} className="profile-page__option">
                {o}
                <span className="font-mono profile-page__option-status">DEĞERLENDİRİLİYOR</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
