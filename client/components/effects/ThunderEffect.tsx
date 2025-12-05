import { useEffect, useState } from "react";

export default function ThunderEffect() {
  const [flashes, setFlashes] = useState<number[]>([]);

  useEffect(() => {
    const flashTimes = [100, 300, 350, 700, 1000, 1200, 1250];
    const timeouts: NodeJS.Timeout[] = [];

    flashTimes.forEach((time) => {
      const timeout = setTimeout(() => {
        setFlashes((prev) => [...prev, Date.now()]);
      }, time);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <>
      {/* Thunder flashes */}
      {flashes.map((flash, index) => (
        <div
          key={flash}
          className="fixed inset-0 pointer-events-none animate-thunder-flash z-50"
        />
      ))}

      {/* Lightning bolts */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* First bolt */}
        <polyline
          points="30,0 35,30 25,35 40,70 20,75 50,100"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="0.5"
          fill="none"
          className="animate-bolt-1"
        />

        {/* Second bolt */}
        <polyline
          points="70,0 65,25 75,32 60,65 80,72 50,100"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.4"
          fill="none"
          className="animate-bolt-2"
        />

        {/* Glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <polyline
          points="30,0 35,30 25,35 40,70 20,75 50,100"
          stroke="rgba(255,255,100,0.5)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          className="animate-bolt-1"
        />
      </svg>

      <style>{`
        @keyframes thunder-flash {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 255, 255, 0.4); }
        }

        @keyframes bolt-1 {
          0% { opacity: 0; }
          10% { opacity: 1; }
          15% { opacity: 0; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes bolt-2 {
          0% { opacity: 0; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          30% { opacity: 1; }
          35% { opacity: 0; }
          100% { opacity: 0; }
        }

        .animate-thunder-flash {
          animation: thunder-flash 200ms ease-out;
        }

        .animate-bolt-1 {
          animation: bolt-1 1.5s ease-out forwards;
        }

        .animate-bolt-2 {
          animation: bolt-2 1.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
