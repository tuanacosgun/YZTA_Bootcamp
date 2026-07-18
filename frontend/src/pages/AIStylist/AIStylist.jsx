// Yapay zekadan kombin önerisi alınacak ekran. Sprint 2'de araştırma aşamasında.
import ResearchPlaceholder from "../../components/ResearchPlaceholder/ResearchPlaceholder";

function AIStylist() {
  return (
    <ResearchPlaceholder
      eyebrow="US-14"
      title="AI Kombin Önerisi"
      desc="Hava durumu ve etkinliğe göre kombin önerecek motorun yaklaşımı belirleniyor."
      options={["Kural tabanlı öneri sistemi", "LLM destekli öneri", "Hibrit yapı (kural + LLM)"]}
    />
  );
}

export default AIStylist;
