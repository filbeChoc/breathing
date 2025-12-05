import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { calculateWeights } from "@/lib/quizCalculator";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const navigate = useNavigate();

  const question = questions[currentQuestion];
  const isAnswered = currentQuestion in answers;

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: answerIndex,
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!isAnswered) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, calculate result
      const weights = calculateWeights(answers, questions);
      navigate("/result", { state: { weights, answers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 py-8 px-4">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-2">
            呼吸法測試
          </h1>
          <p className="text-amber-900 text-sm md:text-base font-jp">
            發現你的鬼殺隊呼吸法
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-jp text-amber-900">
              第 {currentQuestion + 1} / {questions.length} 題
            </span>
            <span className="text-sm font-jp text-amber-900">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2 border-2 border-amber-800 overflow-hidden">
            <div
              className="bg-gradient-to-r from-red-700 to-amber-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-4 border-amber-800 rounded-lg shadow-xl mb-8 p-8 relative">
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-800" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-800" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-800" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-800" />

          <h2 className="text-xl md:text-2xl font-jp font-bold text-red-900 mb-6">
            {question.question}
          </h2>

          {/* Answer options */}
          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded transition-all duration-200 font-jp ${
                  answers[currentQuestion] === index
                    ? "border-red-700 bg-red-50 shadow-md"
                    : "border-amber-300 bg-amber-50 hover:bg-amber-100 hover:border-amber-500"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                      answers[currentQuestion] === index
                        ? "border-red-700 bg-red-700"
                        : "border-amber-600"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-base md:text-lg">{answer.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-2 border-amber-800 text-amber-900 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed font-jp"
          >
            上一題
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-800 hover:to-amber-700 text-white border-2 border-red-800 disabled:opacity-50 disabled:cursor-not-allowed font-jp"
          >
            {currentQuestion === questions.length - 1 ? "查看結果" : "下一題"}
          </Button>
        </div>

        {/* Question indicator dots */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index in answers
                  ? index === currentQuestion
                    ? "bg-red-700 w-3"
                    : "bg-amber-700"
                  : "bg-amber-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800" />
    </div>
  );
}
