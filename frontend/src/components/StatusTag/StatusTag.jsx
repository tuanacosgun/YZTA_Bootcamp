// MirrorAI özellik durum etiketi.

const STATUS_MAP = {
  devam: {
    label: "HAZIR",
    color: "var(--sage)",
  },

  arastirma: {
    label: "AI DESTEKLİ",
    color: "var(--brass)",
  },

  planlandi: {
    label: "YAKINDA",
    color: "var(--ink-soft)",
  },
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