// Yapay zekadan kombin önerisi alınacak ekran. Sprint 2'de araştırma aşamasında.
import { useState } from "react";
import { useLocation } from "react-router-dom";

function AIStylist() {
  const location = useLocation();

  const clothing = location.state?.clothing;

  const [occasion, setOccasion] = useState("Günlük");
  const [style, setStyle] = useState("Casual");

  const [selectedImage, setSelectedImage] = useState(null);

  const [result, setResult] = useState(null);

  const handleGenerate = () => {
  setResult({
    top: "Beyaz Oversize Tişört",
    bottom: "Mavi Mom Jean",
    shoes: "Beyaz Sneaker",
    accessory: "Kahverengi Çanta",
    reason: `${occasion} için ${style.toLowerCase()} tarzında örnek kombin oluşturuldu.`,
  });
};

  return (
    <>
      {clothing && (
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            marginBottom: "24px",
            padding: "24px",
            background: "var(--muslin)",
            border: "1px solid var(--line-strong)",
            borderRadius: "12px",
          }}
        >
          <img
            src={clothing.image}
            alt={clothing.ad}
            style={{
              width: "180px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0,
            }}
          />

          <div>
            <h2 className="font-display">{clothing.ad}</h2>

            <p>
              <strong>Kategori:</strong> {clothing.kategori}
            </p>

            <p>
              <strong>Renk:</strong> {clothing.renk}
            </p>

            <p
              style={{
                marginTop: "16px",
                color: "var(--ink-soft)",
                lineHeight: "1.7",
              }}
            >
              Bu ürün kombin oluşturulurken ana parça olarak kullanılacaktır.
              Yapay zekâ gardırobundaki diğer ürünlerle uyumlu öneriler sunacaktır.
            </p>
          </div>
        </div>
      )}

      <div
        style={{
          background: "var(--muslin)",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid var(--line-strong)",
        }}
      >
        <h2 className="font-display">AI Kombin Oluştur</h2>

        <p>
          Seçtiğin ürüne göre sana en uygun kombini oluşturalım.
        </p>

  <div style={{ marginTop: "20px" }}>
        <label className="field-label">Etkinlik</label>

        <select
          className="field-input"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Günlük</option>
          <option>Üniversite</option>
          <option>İş</option>
          <option>Özel Davet</option>
        </select>
      </div>

      <div style={{ marginTop: "16px" }}>
        <label className="field-label">Stil</label>

        <select
          className="field-input"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Casual</option>
          <option>Sportif</option>
          <option>Klasik</option>
          <option>Smart Casual</option>
        </select>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label className="field-label">
          Alternatif Ürün Fotoğrafı
        </label>

        <input
          type="file"
          accept="image/*"
          className="field-input"
          onChange={(e) =>
            setSelectedImage(e.target.files[0])
          }
        />
      </div>

      {selectedImage && (
        <p style={{ marginTop: "10px" }}>
          📷 Seçilen dosya: {selectedImage.name}
        </p>
      )}

      <button
        className="btn-primary"
        style={{ marginTop: "24px", width: "100%" }}
        onClick={handleGenerate}
      >
        ✨ Kombin Oluştur
      </button>

      {result && (
        <div
          style={{
            marginTop: "24px",
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            border: "1px solid var(--line-strong)",
          }}
        >
          <h3>✨ Önerilen Kombin</h3>

          <p><strong>Üst:</strong> {result.top}</p>

          <p><strong>Alt:</strong> {result.bottom}</p>

          <p><strong>Ayakkabı:</strong> {result.shoes}</p>

          <p><strong>Aksesuar:</strong> {result.accessory}</p>

          <hr />

          <p>{result.reason}</p>
        </div>
      )}

    </div>

    </>
  );
}

export default AIStylist;
