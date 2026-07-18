// Sayfanın imza illüstrasyonu: üç parçalı kabin aynası + avatar silüeti.

function FittingMirror({ height = 420 }) {
  return (
    <svg viewBox="0 0 340 420" width="100%" height={height} style={{ overflow: "visible" }}>
      <g transform="rotate(-7 70 380)">
        <rect x="18" y="70" width="104" height="300" rx="6" fill="#F4F0E5" stroke="#93732F" strokeWidth="2" />
      </g>
      <g transform="rotate(7 270 380)">
        <rect x="218" y="70" width="104" height="300" rx="6" fill="#F4F0E5" stroke="#93732F" strokeWidth="2" />
      </g>
      <rect x="98" y="30" width="144" height="360" rx="8" fill="#F4F0E5" stroke="#221E19" strokeWidth="2.2" />
      <rect x="112" y="44" width="116" height="332" rx="4" fill="none" stroke="#93732F" strokeWidth="1" strokeDasharray="3 5" />
      {/* avatar silüeti */}
      <circle cx="170" cy="150" r="34" fill="none" stroke="#221E19" strokeWidth="1.6" />
      <path d="M 122 320 Q 170 260 218 320 L 226 366 Q 170 388 114 366 Z" fill="none" stroke="#221E19" strokeWidth="1.6" />
      <line x1="170" y1="184" x2="170" y2="260" stroke="#221E19" strokeWidth="1.6" />
      {/* cam parıltısı */}
      <line x1="150" y1="55" x2="128" y2="120" stroke="#93732F" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export default FittingMirror;
