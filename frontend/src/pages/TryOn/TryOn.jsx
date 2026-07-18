// Kıyafetlerin satın almadan önce sanal olarak denendiği ekran. Sprint 2'de araştırma aşamasında.
import ResearchPlaceholder from "../../components/ResearchPlaceholder/ResearchPlaceholder";

function TryOn() {
  return (
    <ResearchPlaceholder
      eyebrow="US-13"
      title="Ürün Linki / Görsel Analizi · Virtual Try-On"
      desc="Kullanıcının internetten ürün ekleyebilmesi ve kıyafeti avatar üzerinde deneyebilmesi için uygulanabilir yöntemler araştırılıyor."
      inputPlaceholder="Ürün linkini yapıştır…"
      options={["Görsel tabanlı analiz (Computer Vision)", "Link meta verisi çıkarımı", "Hibrit (görsel + meta veri)"]}
    />
  );
}

export default TryOn;
