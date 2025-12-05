import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getBreathingTechnique,
  BreathingTechnique,
} from "@/data/breathingTechniques";
import { Button } from "@/components/ui/button";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [technique, setTechnique] = useState<BreathingTechnique | null>(null);

  const weights = location.state?.weights;

  useEffect(() => {
    if (!weights) {
      navigate("/");
      return;
    }

    const result = getBreathingTechnique(weights);
    setTechnique(result);
  }, [weights, navigate]);

  if (!technique) {
    return null;
  }

  const handleRetake = () => {
    navigate("/");
  };

  const getTotalWeight = () => {
    return (weights.rock || 0) + (weights.water || 0) + (weights.wind || 0) + (weights.flame || 0) + (weights.thunder || 0);
  };

  const getWeightPercentage = (type: string) => {
    const total = getTotalWeight();
    if (total === 0) return 0;
    return Math.round(((weights[type] || 0) / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 py-8 px-4">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Result title animation */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-2 text-red-900">
            {technique.name}
          </h1>
          <p className="text-2xl md:text-3xl font-jp mb-4 text-amber-800">
            {technique.japaneseChars}
          </p>
          <div className="h-1 w-24 bg-red-800 mx-auto mb-6 rounded-full" />
        </div>

        {/* Main result card */}
        <div className="bg-white border-4 border-amber-800 rounded-lg shadow-2xl p-8 md:p-12 mb-8">
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-800" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-800" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-800" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-800" />

          {/* Description */}
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-red-900">
              你的呼吸法
            </h2>
            <p className="text-lg md:text-xl font-jp mb-6 leading-relaxed text-gray-700">
              {technique.description}
            </p>
          </div>

          {/* Personality section */}
          <div className="mb-8 bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-red-900">
              你的性格
            </h3>
            <p className="text-base md:text-lg font-jp leading-relaxed text-gray-800">
              {technique.personality}
            </p>
          </div>


          {/* Weight breakdown */}
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
            <h3 className="font-display text-lg md:text-xl font-bold mb-4 text-red-900">
              五種呼吸法傾向
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "rock", name: "岩之呼吸" },
                { key: "water", name: "水之呼吸" },
                { key: "wind", name: "風之呼吸" },
                { key: "flame", name: "炎之呼吸" },
                { key: "thunder", name: "雷之呼吸" },
              ].map(({ key, name }) => (
                <div key={key} className="bg-white rounded-lg p-4 border-2 border-amber-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-jp font-semibold text-amber-900">
                      {name}
                    </span>
                    <span className="text-lg font-bold text-red-800">
                      {getWeightPercentage(key)}%
                    </span>
                  </div>
                  <div className="w-full bg-amber-200 rounded-full h-2 overflow-hidden border border-amber-400">
                    <div
                      className="bg-gradient-to-r from-red-700 to-amber-600 h-full transition-all duration-1000"
                      style={{
                        width: `${getWeightPercentage(key)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retake button */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={handleRetake}
            className="bg-amber-700 hover:bg-amber-800 text-white border-2 border-amber-800 font-jp font-semibold"
          >
            重新測試
          </Button>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800" />
    </div>
  );
}
