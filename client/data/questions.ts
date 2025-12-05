export interface Answer {
  text: string;
  weights: {
    rock: number;
    water: number;
    wind: number;
    flame: number;
    thunder: number;
  };
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "能驱动你的感情是什么？",
    answers: [
      {
        text: "责任/使命感",
        weights: { rock: 2, water: 2, wind: 1, flame: 0, thunder: 0 },
      },
      {
        text: "冲动",
        weights: { rock: 0, water: 0, wind: 1, flame: 2, thunder: 2 },
      },
    ],
  },
  {
    id: 2,
    question: "接下来，你要组建一支军队。你首先会选择？",
    answers: [
      {
        text: "军师",
        weights: { rock: 1, water: 2, wind: 1, flame: 0, thunder: 0 },
      },
      {
        text: "战士",
        weights: { rock: 0, water: 1, wind: 2, flame: 1, thunder: 0 },
      },
    ],
  },
  {
    id: 3,
    question: "你交到了新朋友，他是什么类型的人？",
    answers: [
      {
        text: "聪明",
        weights: { rock: 0, water: 1, wind: 2, flame: 1, thunder: 0 },
      },
      {
        text: "温和",
        weights: { rock: 0, water: 0, wind: 1, flame: 2, thunder: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "在训练中你掌握了一个新招式，为了发挥极限你会选择？",
    answers: [
      {
        text: "研究",
        weights: { rock: 1, water: 1, wind: 0, flame: 0, thunder: 0 },
      },
      {
        text: "实践",
        weights: { rock: 0, water: 1, wind: 1, flame: 0, thunder: 0 },
      },
    ],
  },
  {
    id: 5,
    question: "为了提高自己的能力，你会选择？",
    answers: [
      {
        text: "冥想",
        weights: { rock: 0, water: 1, wind: 1, flame: 0, thunder: 0 },
      },
      {
        text: "模拟战斗",
        weights: { rock: 0, water: 0, wind: 1, flame: 1, thunder: 0 },
      },
    ],
  },
  {
    id: 6,
    question: "你得到一些空闲时间，你会怎么用？",
    answers: [
      {
        text: "用餐",
        weights: { rock: 0, water: 0, wind: 1, flame: 1, thunder: 0 },
      },
      {
        text: "与朋友谈心",
        weights: { rock: 0, water: 0, wind: 0, flame: 1, thunder: 1 },
      },
    ],
  },
  {
    id: 7,
    question: "敌军在城池按兵不动，你会如何进攻？",
    answers: [
      {
        text: "等待敌方军粮拜尽",
        weights: { rock: 2, water: 0, wind: 0, flame: 0, thunder: 0 },
      },
      {
        text: "看准时机发动攻击",
        weights: { rock: 0, water: 2, wind: 0, flame: 0, thunder: 0 },
      },
    ],
  },
  {
    id: 8,
    question: "在激烈的战斗中你的武器断了，你会怎么做？",
    answers: [
      {
        text: "利用地形作战",
        weights: { rock: 0, water: 2, wind: 0, flame: 0, thunder: 0 },
      },
      {
        text: "夺取敌人的武器",
        weights: { rock: 0, water: 0, wind: 2, flame: 0, thunder: 0 },
      },
    ],
  },
  {
    id: 9,
    question: "深受你信赖的部下谋反了，你会如何评价他？",
    answers: [
      {
        text: "毋庸置疑的恶徒",
        weights: { rock: 0, water: 0, wind: 2, flame: 0, thunder: 0 },
      },
      {
        text: "承认他的勇气，并处罚他",
        weights: { rock: 0, water: 0, wind: 0, flame: 2, thunder: 0 },
      },
    ],
  },
  {
    id: 10,
    question:
      "你目前身处绝境之中，并且面临这一个艰难的决定：如果你只能在盟友和伴侣之间选择一人救助，你会怎么选择?",
    answers: [
      {
        text: "盟友",
        weights: { rock: 0, water: 0, wind: 0, flame: 2, thunder: 0 },
      },
      {
        text: "伴侣",
        weights: { rock: 0, water: 0, wind: 0, flame: 0, thunder: 2 },
      },
    ],
  },
];
