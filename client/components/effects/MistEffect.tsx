import { useEffect, useState } from "react";

interface MistEffectProps {
  effectType: "mist" | "rock" | "water" | "flame" | "wind";
}

export default function MistEffect({ effectType }: MistEffectProps) {
  const [particles, setParticles] = useState<
    { id: number; x: number; delay: number }[]
  >([]);

  useEffect(() => {
    const particleCount = effectType === "mist" ? 15 : 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, [effectType]);

  const renderEffect = () => {
    switch (effectType) {
      case "mist":
        return (
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Rising mist particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute bottom-0 w-24 h-24 opacity-0 animate-mist-rise"
                style={{
                  left: `${particle.x}%`,
                  animationDelay: `${particle.delay}s`,
                  backgroundImage: `radial-gradient(circle, rgba(200,200,255,0.4) 0%, transparent 70%)`,
                  borderRadius: "50%",
                }}
              />
            ))}

            {/* Weapon silhouette rising */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 opacity-0 animate-weapon-rise pointer-events-none">
              <svg viewBox="0 0 100 200" className="w-full h-full text-white">
                {/* Katana-like weapon */}
                <defs>
                  <linearGradient id="weaponGrad" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                  </linearGradient>
                </defs>

                {/* Blade */}
                <path
                  d="M 50 20 L 55 180 L 50 195 L 45 180 Z"
                  fill="url(#weaponGrad)"
                  opacity="0.8"
                />

                {/* Guard */}
                <ellipse cx="50" cy="55" rx="15" ry="8" fill="rgba(200,100,50,0.6)" />

                {/* Handle */}
                <rect
                  x="48"
                  y="60"
                  width="4"
                  height="25"
                  fill="rgba(150,100,50,0.6)"
                />
              </svg>
            </div>
          </div>
        );

      case "water":
        return (
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Water waves */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute bottom-0 w-32 h-32 opacity-0 animate-water-wave"
                style={{
                  left: `${particle.x}%`,
                  animationDelay: `${particle.delay}s`,
                  backgroundImage: `radial-gradient(ellipse at center, rgba(100,200,255,0.3) 0%, transparent 70%)`,
                  borderRadius: "50%",
                }}
              />
            ))}
          </div>
        );

      case "flame":
        return (
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Flame particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute bottom-0 w-20 h-40 opacity-0 animate-flame-rise"
                style={{
                  left: `${particle.x}%`,
                  animationDelay: `${particle.delay}s`,
                  backgroundImage: `radial-gradient(ellipse at center bottom, rgba(255,150,0,0.4) 0%, transparent 70%)`,
                  borderRadius: "50% 50% 30% 30%",
                }}
              />
            ))}
          </div>
        );

      case "wind":
        return (
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Wind swirls */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute inset-0 opacity-0 animate-wind-swirl"
                style={{
                  animationDelay: `${particle.delay}s`,
                }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 20 100 Q 50 50, 100 80 T 180 120"
                    stroke="rgba(150,200,255,0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 30 120 Q 70 80, 120 110 T 190 140"
                    stroke="rgba(150,200,255,0.25)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            ))}
          </div>
        );

      case "rock":
        return (
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Rock/earth particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute bottom-0 w-16 h-16 opacity-0 animate-rock-rise"
                style={{
                  left: `${particle.x}%`,
                  animationDelay: `${particle.delay}s`,
                  backgroundImage: `radial-gradient(circle, rgba(180,150,100,0.4) 0%, transparent 70%)`,
                  borderRadius: "20%",
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {renderEffect()}
      <style>{`
        @keyframes mist-rise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            bottom: 200px;
            opacity: 0;
          }
        }

        @keyframes weapon-rise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            bottom: 150px;
            opacity: 0;
          }
        }

        @keyframes water-wave {
          0% {
            bottom: 0;
            opacity: 0;
            transform: scale(0.5);
          }
          20% {
            opacity: 0.4;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            bottom: 300px;
            opacity: 0;
            transform: scale(1.5);
          }
        }

        @keyframes flame-rise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            bottom: 250px;
            opacity: 0;
          }
        }

        @keyframes wind-swirl {
          0% {
            opacity: 0;
            transform: rotate(0deg);
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: rotate(180deg);
          }
        }

        @keyframes rock-rise {
          0% {
            bottom: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.4;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            bottom: 180px;
            opacity: 0;
          }
        }

        .animate-mist-rise {
          animation: mist-rise 3s ease-out forwards;
        }

        .animate-weapon-rise {
          animation: weapon-rise 3s ease-out forwards;
        }

        .animate-water-wave {
          animation: water-wave 3.5s ease-out forwards;
        }

        .animate-flame-rise {
          animation: flame-rise 3s ease-out forwards;
        }

        .animate-wind-swirl {
          animation: wind-swirl 3s ease-out forwards;
        }

        .animate-rock-rise {
          animation: rock-rise 3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
