export default function RouteMap() {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#08080f]">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        aria-label="Маршрут доставки авто"
      >
        <defs>
          <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e50914" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e50914" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="blur1">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#e50914" opacity="0.8" />
          </marker>
        </defs>

        {/* Background grid dots */}
        {Array.from({ length: 20 }).map((_, i) =>
          Array.from({ length: 13 }).map((__, j) => (
            <circle
              key={`dot-${i}-${j}`}
              cx={20 + i * 40}
              cy={20 + j * 38}
              r="1"
              fill="white"
              opacity="0.04"
            />
          ))
        )}

        {/* Continents simplified */}
        {/* North America (USA) */}
        <path
          d="M60,140 Q80,110 130,100 Q170,95 195,120 Q215,140 210,180 Q205,210 185,230 Q160,250 130,245 Q95,238 70,210 Q50,185 60,140Z"
          fill="#1a1a2e"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* Europe */}
        <path
          d="M460,80 Q490,70 530,75 Q565,80 575,105 Q582,125 568,145 Q550,165 525,170 Q495,175 470,160 Q448,145 448,120 Q448,95 460,80Z"
          fill="#1a1a2e"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* Ukraine (small highlight) */}
        <path
          d="M595,115 Q620,108 640,115 Q658,122 658,140 Q657,158 638,163 Q618,168 600,158 Q583,148 585,132 Q587,118 595,115Z"
          fill="#1e1e35"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />

        {/* Atlantic Ocean area (subtle glow) */}
        <ellipse cx="330" cy="280" rx="120" ry="70" fill="url(#glowBlue)" />

        {/* PORT (Atlantic port) */}
        <ellipse cx="330" cy="310" rx="60" ry="30" fill="url(#glowRed)" />

        {/* === ROUTE LINES === */}
        {/* USA → PORT */}
        <path
          d="M165,215 Q220,280 290,305"
          fill="none"
          stroke="#e50914"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity="0.6"
        />
        {/* PORT → EUROPE */}
        <path
          d="M365,305 Q420,260 490,145"
          fill="none"
          stroke="#e50914"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity="0.6"
        />
        {/* EUROPE → UA */}
        <path
          d="M550,130 Q575,128 612,132"
          fill="none"
          stroke="#e50914"
          strokeWidth="2"
          opacity="0.85"
          markerEnd="url(#arrowRed)"
        />

        {/* Animated pulse on route */}
        <circle r="5" fill="#e50914" opacity="0.9">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M165,215 Q220,280 290,305 Q365,305 420,260 Q460,220 490,145 Q520,138 550,130 Q575,128 612,132"
          />
        </circle>

        {/* === NODE DOTS === */}
        {/* USA node */}
        <circle cx="155" cy="205" r="28" fill="url(#glowRed)" />
        <circle cx="155" cy="205" r="7" fill="#e50914" />
        <circle cx="155" cy="205" r="12" fill="none" stroke="#e50914" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="12;20;12" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* PORT node */}
        <circle cx="328" cy="305" r="22" fill="url(#glowRed)" />
        <circle cx="328" cy="305" r="5" fill="#ffffff" opacity="0.85" />
        <circle cx="328" cy="305" r="10" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* EUROPE node */}
        <circle cx="510" cy="130" r="24" fill="url(#glowRed)" />
        <circle cx="510" cy="130" r="6" fill="#e50914" />
        <circle cx="510" cy="130" r="11" fill="none" stroke="#e50914" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="11;18;11" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* UA node */}
        <circle cx="620" cy="134" r="26" fill="url(#glowRed)" />
        <circle cx="620" cy="134" r="8" fill="#e50914" />
        <circle cx="620" cy="134" r="14" fill="none" stroke="#e50914" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* === LABELS === */}
        <text x="155" y="188" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" letterSpacing="1.5" opacity="0.9">USA</text>

        <text x="328" y="330" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="1" opacity="0.75">PORT</text>

        <text x="510" y="113" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" letterSpacing="1.5" opacity="0.9">EUROPE</text>

        <text x="620" y="116" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" letterSpacing="2" opacity="1">UA</text>

        {/* Corner label */}
        <text x="40" y="46" fill="white" fontSize="15" fontWeight="900" opacity="0.9">Контроль логістики</text>
        <text x="40" y="64" fill="rgba(255,255,255,0.45)" fontSize="11" fontWeight="500">від покупки до прибуття в Україну</text>
      </svg>
    </div>
  );
}
