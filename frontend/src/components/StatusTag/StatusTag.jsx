// Kıyafet etiketi görünümünde durum rozeti. index.css içindeki .tag class'ını kullanır.

const STATUS_MAP = {
  devam: { label: "DEVAM EDİYOR", color: "var(--brass)" },
  arastirma: { label: "ARAŞTIRMA AŞAMASINDA", color: "var(--sage)" },
  planlandi: { label: "PLANLANDI", color: "var(--ink-soft)" },
};

function StatusTag({ state = "planlandi" }) {
  const s = STATUS_MAP[state] || STATUS_MAP.planlandi;
  return (
    <span className="tag" style={{ color: s.color }}>
      {s.label}
    </span>
  );
}

export default StatusTag;
