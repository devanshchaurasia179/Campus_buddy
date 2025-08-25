import React, { useMemo } from "react";

/**
 * FloatingParticles
 * Full-screen background with persistent moving + twinkle effect (always visible)
 */
export default function FloatingParticles({
  children,
  count = 40, // fewer particles
  minSize = 2, // smaller min size
  maxSize = 5, // smaller max size
  className = "",
}) {
  const particles = useMemo(() => {
    const rand = (a, b) => a + Math.random() * (b - a);
    const arr = [];
    for (let i = 0; i < count; i++) {
      const size = rand(minSize, maxSize);
      const left = rand(0, 100); // viewport width
      const top = rand(0, 100); // viewport height
      const delay = rand(0, 10); // seconds
      const duration = rand(6, 12); // seconds
      const opacity = rand(0.4, 1);
      const blur = rand(0, 2);
      const isCircle = Math.random() > 0.5;

      arr.push({ size, left, top, delay, duration, opacity, blur, isCircle });
    }
    return arr;
  }, [count, minSize, maxSize]);

  return (
    <div className={`relative w-full h-[700px] bg-primary overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${p.left}vw`,
              top: `${p.top}vh`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              animation: `floatTwinkle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          >
            {p.isCircle ? (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                }}
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                width={p.size}
                height={p.size}
                aria-hidden
                style={{ display: "block" }}
              >
                <polygon
                  points="12,2 14.5,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9.5,9"
                  fill="#ffffff"
                />
              </svg>
            )}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {children}
      </div>

      <style>{`
        @keyframes floatTwinkle {
          0% { opacity: 0.4; transform: translateY(0px) scale(0.8); }
          50% { opacity: 1; transform: translateY(-10px) scale(1.1); }
          100% { opacity: 0.6; transform: translateY(0px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
