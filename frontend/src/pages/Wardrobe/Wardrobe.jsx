// Kullanıcının gardırobuna kıyafet ekleyip kategori bazlı görebildiği ekran.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusTag from "../../components/StatusTag/StatusTag";
import "./Wardrobe.css";

import bejTrenchcoat from "../../assets/clothing/bej-trenckot.webp";
import beyazTisort from "../../assets/clothing/beyaz-oversize-tisort.webp";
import siyahJean from "../../assets/clothing/siyah-jean.webp";
import maviMomJean from "../../assets/clothing/mavi-mom-jean.webp";
import griHoodie from "../../assets/clothing/gri-hoodie.jpg";
import beyazSneaker from "../../assets/clothing/beyaz-sneaker.jpg";
import siyahBot from "../../assets/clothing/siyah-bot.jpg";
import kahverengiCanta from "../../assets/clothing/kahverengi-canta.jpg";
import siyahDeriCeket from "../../assets/clothing/siyah-deri-ceket.jpg";
import maviKazak from "../../assets/clothing/mavi-kazak.jpg";

const CATEGORIES = ["Üst Giyim", "Alt Giyim", "Dış Giyim", "Ayakkabı", "Aksesuar"];

function Wardrobe() {

  const navigate = useNavigate();

  const [items, setItems] = useState([
  {
    id: 1,
    ad: "Bej Trençkot",
    kategori: "Dış Giyim",
    renk: "Bej",
    kaynak: "",
    image: bejTrenchcoat,
  },
  {
    id: 2,
    ad: "Beyaz Oversize Tişört",
    kategori: "Üst Giyim",
    renk: "Beyaz",
    kaynak: "",
    image: beyazTisort,
  },
  {
    id: 3,
    ad: "Siyah Jean",
    kategori: "Alt Giyim",
    renk: "Siyah",
    kaynak: "",
    image: siyahJean,
  },
  {
    id: 4,
    ad: "Mavi Mom Jean",
    kategori: "Alt Giyim",
    renk: "Mavi",
    kaynak: "",
    image: maviMomJean,
  },
  {
    id: 5,
    ad: "Gri Hoodie",
    kategori: "Üst Giyim",
    renk: "Gri",
    kaynak: "",
    image: griHoodie,
  },
  {
    id: 6,
    ad: "Beyaz Sneaker",
    kategori: "Ayakkabı",
    renk: "Beyaz",
    kaynak: "",
    image: beyazSneaker,
  },
  {
    id: 7,
    ad: "Siyah Bot",
    kategori: "Ayakkabı",
    renk: "Siyah",
    kaynak: "",
    image: siyahBot,
  },
  {
    id: 8,
    ad: "Kahverengi Çanta",
    kategori: "Aksesuar",
    renk: "Kahverengi",
    kaynak: "",
    image: kahverengiCanta,
  },
  {
    id: 9,
    ad: "Siyah Deri Ceket",
    kategori: "Dış Giyim",
    renk: "Siyah",
    kaynak: "",
    image: siyahDeriCeket,
  },
  {
    id: 10,
    ad: "Mavi Kazak",
    kategori: "Üst Giyim",
    renk: "Mavi",
    kaynak: "",
    image: maviKazak,
  },
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

            <img
              src={it.image}
              alt={it.ad}
              className="wardrobe-page__image"
            />

            <div className="font-mono wardrobe-page__category">
              {it.kategori.toUpperCase()}</div>

            <div className="wardrobe-page__name">{it.ad}</div>

            <div className="wardrobe-page__color">
              {it.renk || "Renk belirtilmedi"}
              </div>

            <button
              className="btn-primary wardrobe-page__button"
              type="button"
              onClick={() =>
                navigate("/ai-stylist", {
                  state: {
                    clothing: it,
                  },
                })
              }
            >
              ✨ Kombin Oluştur
            </button>

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
