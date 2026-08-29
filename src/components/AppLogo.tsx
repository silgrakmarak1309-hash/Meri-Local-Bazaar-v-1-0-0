import React from 'react';

interface AppLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = '', size = 44, showText = false }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-sm transition-transform group-hover:scale-105"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9100" />
            <stop offset="45%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#00E676" />
          </linearGradient>
          <linearGradient id="bagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0C2340" />
            <stop offset="100%" stopColor="#061324" />
          </linearGradient>
          <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6D00" />
            <stop offset="100%" stopColor="#DD2C00" />
          </linearGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Card Squircle Background */}
        <rect width="512" height="512" rx="128" fill="url(#bgGrad)" />
        <rect width="512" height="512" rx="128" stroke="#E2E8F0" strokeWidth="6" />

        {/* Outer Vibrant Rainbow Arc */}
        <path
          d="M 140 240 A 150 150 0 0 1 372 240"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Shopping Bag Group */}
        <g filter="url(#shadowFilter)">
          {/* Bag Handle */}
          <path
            d="M 230 190 C 230 150 282 150 282 190"
            fill="none"
            stroke="#0C2340"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Handle rivets */}
          <circle cx="230" cy="190" r="7" fill="#CBD5E1" stroke="#0C2340" strokeWidth="4" />
          <circle cx="282" cy="190" r="7" fill="#CBD5E1" stroke="#0C2340" strokeWidth="4" />

          {/* Bag Body */}
          <path
            d="M 195 190 L 317 190 L 338 335 C 338 348 326 358 312 358 L 200 358 C 186 358 174 348 174 335 Z"
            fill="url(#bagGrad)"
          />

          {/* Striped Canopy / Awning (Red & White) */}
          {/* Stripe 1 (Red) */}
          <path d="M 188 215 C 188 230 206 230 206 215 L 201 190 L 195 190 Z" fill="#E53935" />
          {/* Stripe 2 (White) */}
          <path d="M 206 215 C 206 230 224 230 224 215 L 221 190 L 201 190 Z" fill="#FFFFFF" />
          {/* Stripe 3 (Red) */}
          <path d="M 224 215 C 224 230 242 230 242 215 L 241 190 L 221 190 Z" fill="#E53935" />
          {/* Stripe 4 (White) */}
          <path d="M 242 215 C 242 230 260 230 260 215 L 260 190 L 241 190 Z" fill="#FFFFFF" />
          {/* Stripe 5 (Red) */}
          <path d="M 260 215 C 260 230 278 230 278 215 L 278 190 L 260 190 Z" fill="#E53935" />
          {/* Stripe 6 (White) */}
          <path d="M 278 215 C 278 230 296 230 296 215 L 293 190 L 278 190 Z" fill="#FFFFFF" />
          {/* Stripe 7 (Red) */}
          <path d="M 296 215 C 296 230 314 230 314 215 L 308 190 L 293 190 Z" fill="#E53935" />

          {/* White Shopping Cart Icon on Bag */}
          <path
            d="M 215 258 H 223 L 235 304 H 285 L 297 268 H 230"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="244" cy="324" r="6" fill="#FFFFFF" />
          <circle cx="276" cy="324" r="6" fill="#FFFFFF" />
        </g>

        {/* Location Pin with shadow */}
        <g filter="url(#shadowFilter)">
          <path
            d="M 162 230 C 130 230 130 275 162 335 C 194 275 194 230 162 230 Z"
            fill="url(#pinGrad)"
          />
          {/* Inner white circle */}
          <circle cx="162" cy="262" r="14" fill="#FFFFFF" />
        </g>

        {/* Green Ground Arc Accent */}
        <path
          d="M 140 365 C 210 350 302 350 372 365"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Meri Local Bazaar Typography Text */}
        <text
          x="256"
          y="410"
          textAnchor="middle"
          fill="#0C2340"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="46"
          letterSpacing="-0.5"
        >
          Meri
        </text>

        {/* Leaf on Meri 'i' dot */}
        <path
          d="M 296 382 C 296 376 304 374 306 379 C 308 385 299 387 296 382 Z"
          fill="#4CAF50"
        />

        {/* "Local" (Orange) + "Bazaar" (Green) Text */}
        <text
          x="256"
          y="456"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="-0.5"
        >
          <tspan fill="#FF5722">Local </tspan>
          <tspan fill="#2E7D32">Bazaar</tspan>
        </text>

        {/* Bottom Swoosh Line with Dot */}
        <path
          d="M 175 475 Q 256 462 310 476"
          fill="none"
          stroke="#0C2340"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="316" cy="477" r="4" fill="#0C2340" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-black text-slate-900 leading-tight">
            <span>Meri</span>
            <span className="text-orange-600">Local</span>
            <span className="text-green-600">Bazaar</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">
            Apne Area Ka Digital Marketplace
          </span>
        </div>
      )}
    </div>
  );
};
