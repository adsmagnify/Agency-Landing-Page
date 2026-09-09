"use client";

import { motion } from "framer-motion";

const WIDTH = 400;
const HEIGHT = 248;
const TOP_INSET = 10;
const BOTTOM_INSET = 118;
const BAND = 54;
const GAP = 8;

const layers = [
  {
    label: "Ads",
    fill: "url(#funnelBlue1)",
    gold: false,
  },
  {
    label: "Leads",
    fill: "url(#funnelBlue2)",
    gold: false,
  },
  {
    label: "Counselor-accepted",
    fill: "url(#funnelBlue3)",
    gold: false,
  },
  {
    label: "Paid enrollments",
    fill: "url(#funnelGold)",
    gold: true,
  },
] as const;

function edgeX(y: number, side: "left" | "right") {
  const t = y / HEIGHT;
  const inset = TOP_INSET + t * (BOTTOM_INSET - TOP_INSET);
  return side === "left" ? inset : WIDTH - inset;
}

function bandPoints(index: number) {
  const y1 = index * (BAND + GAP);
  const y2 = y1 + BAND;
  const x1l = edgeX(y1, "left");
  const x1r = edgeX(y1, "right");
  const x2l = edgeX(y2, "left");
  const x2r = edgeX(y2, "right");
  return {
    y1,
    y2,
    points: `${x1l},${y1} ${x1r},${y1} ${x2r},${y2} ${x2l},${y2}`,
  };
}

export function FunnelGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]" aria-hidden>
      <div className="pointer-events-none absolute inset-x-[22%] bottom-8 h-24 rounded-full bg-cyan-500/25 blur-[48px]" />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="relative z-[1] h-auto w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="funnelBlue1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0,74,173,0.58)" />
            <stop offset="100%" stopColor="rgba(46,123,234,0.42)" />
          </linearGradient>
          <linearGradient id="funnelBlue2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0,74,173,0.78)" />
            <stop offset="100%" stopColor="rgba(46,123,234,0.55)" />
          </linearGradient>
          <linearGradient id="funnelBlue3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0,60,138,0.98)" />
            <stop offset="100%" stopColor="rgba(46,123,234,0.78)" />
          </linearGradient>
          <linearGradient id="funnelGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffc619" />
            <stop offset="100%" stopColor="#ffd75e" />
          </linearGradient>
        </defs>

        {layers.map((layer, index) => {
          const { y1, y2, points } = bandPoints(index);
          const midY = (y1 + y2) / 2 + 1;

          return (
            <motion.g
              key={layer.label}
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.08 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <polygon
                points={points}
                fill={layer.fill}
                style={{
                  filter: layer.gold
                    ? "drop-shadow(0 12px 18px rgba(255,198,25,0.35))"
                    : "drop-shadow(0 8px 14px rgba(0,74,173,0.28))",
                }}
              />
              {layer.gold ? (
                <text
                  x={WIDTH / 2}
                  y={midY - 8}
                  textAnchor="middle"
                  fill="#111"
                  fontFamily="var(--font-display), Poppins, sans-serif"
                  fontSize="13"
                  fontWeight="800"
                  letterSpacing="0.08em"
                >
                  <tspan x={WIDTH / 2} dy="0">
                    PAID
                  </tspan>
                  <tspan x={WIDTH / 2} dy="15">
                    ENROLLMENTS
                  </tspan>
                </text>
              ) : (
                <text
                  x={WIDTH / 2}
                  y={midY + 5}
                  textAnchor="middle"
                  fill="#fff"
                  fontFamily="var(--font-display), Poppins, sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="0.12em"
                >
                  {layer.label.toUpperCase()}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>

      <p className="mt-4 text-center text-[0.82rem] text-mist-500">
        Spend peaks at the deadline. Only paying students come out the bottom.
      </p>
    </div>
  );
}
