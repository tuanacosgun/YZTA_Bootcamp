import { useState } from "react";
import StatusTag from "../StatusTag/StatusTag";
import "./ResearchPlaceholder.css";

// AIStylist ve TryOn sayfaları için ortak "araştırma aşamasında" görünümü.
function ResearchPlaceholder({ eyebrow, title, desc, options, inputPlaceholder }) {
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="research-placeholder">
      <div className="font-mono research-placeholder__eyebrow">{eyebrow}</div>
      <div className="research-placeholder__heading">
        <h2 className="font-display">{title}</h2>
        <StatusTag state="arastirma" />
      </div>
      <p className="research-placeholder__desc">{desc}</p>

      <div className="card research-placeholder__card">
        {inputPlaceholder && (
          <div className="research-placeholder__demo">
            <label className="field-label">Dene (demo, henüz aktif değil)</label>
            <div className="research-placeholder__demo-row">
              <input
                className="field-input"
                placeholder={inputPlaceholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="btn-ghost" onClick={() => setSent(true)}>
                Gönder
              </button>
            </div>
            {sent && (
              <p className="font-mono research-placeholder__note">
                Bu özellik Sprint 2'de araştırma aşamasında — yakında etkinleşecek.
              </p>
            )}
          </div>
        )}

        <div className="research-placeholder__options">
          {options.map((o) => (
            <div key={o} className="research-placeholder__option">
              {o}
              <span className="font-mono research-placeholder__option-status">DEĞERLENDİRİLİYOR</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchPlaceholder;
