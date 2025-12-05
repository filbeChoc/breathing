export interface QuizAnswers {
  [questionId: number]: number; // questionId -> answerIndex
}

export interface WeightTotals {
  rock: number;
  water: number;
  wind: number;
  flame: number;
  thunder: number;
}

export function initializeWeights(): WeightTotals {
  return {
    rock: 0,
    water: 0,
    wind: 0,
    flame: 0,
    thunder: 0,
  };
}

export function calculateWeights(
  answers: QuizAnswers,
  questions: any[]
): WeightTotals {
  const totals = initializeWeights();

  Object.entries(answers).forEach(([questionIdStr, answerIndex]) => {
    const questionId = parseInt(questionIdStr);
    const question = questions.find((q) => q.id === questionId);

    if (question && question.answers[answerIndex]) {
      const weights = question.answers[answerIndex].weights;
      totals.rock += weights.rock || 0;
      totals.water += weights.water || 0;
      totals.wind += weights.wind || 0;
      totals.flame += weights.flame || 0;
      totals.thunder += weights.thunder || 0;
    }
  });

  return totals;
}
