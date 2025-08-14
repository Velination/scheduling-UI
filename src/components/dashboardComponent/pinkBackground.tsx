import React from "react";

// -----------------------------
// Background (Pink circles + white)
// -----------------------------
export default function PinkCircleBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-white" />

      {/* Top-right pink radial circle */}
      <svg
        className="absolute -top-40 -right-28 w-[780px] h-[780px] opacity-70"
        viewBox="0 0 800 800"
        aria-hidden
      >
        <defs>
          <radialGradient id="pinkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8dc4" />
            <stop offset="60%" stopColor="#ff7fb7" />
            <stop offset="100%" stopColor="#ff6ea9" />
          </radialGradient>

          {/* Deeper gradient for left circle */}
          <radialGradient id="pinkGlowDeep" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4f94" />   {/* Richer pink core */}
            <stop offset="60%" stopColor="#ff3f87" />  {/* Deeper mid tone */}
            <stop offset="100%" stopColor="#ff2b75" /> {/* Strong edge tone */}
          </radialGradient>
        </defs>
        <circle cx="400" cy="400" r="390" fill="url(#pinkGlow)" />
      </svg>

      {/* Bottom-left deeper pink radial circle */}
      <svg
        className="absolute -bottom-48 -left-36 w-[800px] h-[800px] opacity-90"
        viewBox="0 0 800 800"
        aria-hidden
      >
        <circle cx="400" cy="400" r="390" fill="url(#pinkGlowDeep)" />
      </svg>

      {/* Soft vignette mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
}
