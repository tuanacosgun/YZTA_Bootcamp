// Kullanıcının gardırobuna kıyafet ekleyip kategori bazlı görebildiği ekran.
import { useState } from "react";
import StatusTag from "../../components/StatusTag/StatusTag";
import "./Wardrobe.css";

const CATEGORIES = ["Üst Giyim", "Alt Giyim", "Dış Giyim", "Ayakkabı", "Aksesuar"];

function Wardrobe() {
  const [items, setItems] = useState([
    { id: 1, ad: "Bej Trençkot", kategori: "Dış Giyim", renk: "Bej", kaynak: "" },
  ]);
  const [draft, setDraft] = useState({ ad: "", kategori: CATEGORIES[0], renk: "", kaynak: "" });
  const [open, setOpen] = useState(false);

  const addItem = () => {
    if (!draft.ad.trim()) return;
    setItems((prev) => [...prev, { ...draft, id: Date.now() }]);
    setDraft({ ad: "", kategori: CATEGORIES[0], renk: "", kaynak: "" });
    setOpen(false);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <div className="wardrobe-page">
      <div className="font-mono wardrobe-page__eyebrow">US-11 · US-12</div>
      <div className="wardrobe-page__heading">
        <h2 className="font-display">Dijital Gardırop</h2>
        <StatusTag state="devam" />
      </div>
      <p className="wardrobe-page__desc">
        Kıyafet adı, kategori, renk ve kaynak alanlarından oluşan temel veri yapısı.
      </p>

      <div className="wardrobe-page__toolbar">
        <button className="btn-ghost" type="button" onClick={() => setOpen((v) => !v)}>
          {open ? "Vazgeç" : "+ Kıyafet Ekle"}
        </button>
      </div>

      {open && (
        <div className="card wardrobe-page__form">
          <div className="wardrobe-page__row">
            <div>
              <label className="field-label">Kıyafet Adı</label>
              <input
                className="field-input"
                placeholder="Örn. Beyaz Gömlek"
                value={draft.ad}
                onChange={(e) => setDraft({ ...draft, ad: e.target.value })}
              />
            </div>
            <div>
              <label className="field-label">Kategori</label>
              <select
                className="field-input"
                value={draft.kategori}
                onChange={(e) => setDraft({ ...draft, kategori: e.target.value })}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="wardrobe-page__row">
            <div>
              <label className="field-label">Renk</label>
              <input
                className="field-input"
                placeholder="Örn. Lacivert"
                value={draft.renk}
                onChange={(e) => setDraft({ ...draft, renk: e.target.value })}
              />
            </div>
            <div>
              <label className="field-label">Kaynak Linki (opsiyonel)</label>
              <input
                className="field-input"
                placeholder="https://…"
                value={draft.kaynak}
                onChange={(e) => setDraft({ ...draft, kaynak: e.target.value })}
              />
            </div>
          </div>
          <button className="btn-primary" type="button" onClick={addItem}>
            Gardıroba Ekle
          </button>
        </div>
      )}

      <div className="wardrobe-page__grid">
        {items.map((it) => (
          <div key={it.id} className="card wardrobe-page__item">
            <button
              className="wardrobe-page__remove"
              type="button"
              onClick={() => removeItem(it.id)}
              aria-label="Kaldır"
            >
              ×
            </button>
            <div className="font-mono wardrobe-page__category">{it.kategori.toUpperCase()}</div>
            <div className="wardrobe-page__name">{it.ad}</div>
            <div className="wardrobe-page__color">{it.renk || "Renk belirtilmedi"}</div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="font-mono wardrobe-page__empty">Gardırobun henüz boş.</div>
        )}
      </div>
    </div>
  );
}

export default Wardrobe;
