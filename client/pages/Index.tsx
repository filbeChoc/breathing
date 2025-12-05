import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Decorative top border */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800 z-50" />

      {/* Decorative animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-800" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-700" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
          </svg>
        </div>

        <div
          className="absolute bottom-32 right-10 w-40 h-40 opacity-5"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 100 20 L 150 80 L 100 100 L 150 140 L 100 180 L 50 140 L 100 100 L 50 80 Z"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
              className="text-red-800"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-12">
          <div className="text-center mb-12">
            {/* Main title with Japanese characters */}
            <h1 className="font-display text-6xl md:text-7xl font-bold text-red-900 mb-4 drop-shadow-lg">
              呼吸法
            </h1>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-800 mb-6">
              測試
            </h2>

            {/* Subtitle with decorative elements */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-red-800" />
              <p className="font-jp text-xl md:text-2xl text-red-900 font-semibold">
                發現你的鬼殺隊呼吸法
              </p>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-red-800" />
            </div>

          </div>

  
          {/* Call to action */}
          <div className="text-center mb-8">
            <Button
              onClick={() => navigate("/quiz")}
              className="bg-red-700 hover:bg-red-800 text-white border-3 border-red-800 font-jp font-bold text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              開始測試
            </Button>
          </div>

        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800 z-50" />
    </div>
  );
}
