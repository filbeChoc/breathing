export interface BreathingTechnique {
  id: string;
  name: string;
  japaneseChars: string;
  description: string;
  personality: string;
  characteristics: string[];
  baseType: string;
  effectType: "mist" | "thunder" | "flame" | "water" | "wind" | "rock";
}

export const breathingTechniques: Record<string, BreathingTechnique> = {
  rock: {
    id: "rock",
    name: "岩之呼吸",
    japaneseChars: "岩",
    description: "坚如磐石，防守如盾牌。岩之呼吸使用者拥有最强的防守能力和稳定性。",
    personality: "遇到任何事情都能做到毫不动摇，抱着坚定的信念看待时间万物。",
    characteristics: [
      "坚韧不拔",
      "防守至上",
      "沉着冷静",
      "持久耐战",
      "坚定不移",
    ],
    baseType: "rock",
    effectType: "rock",
  },
  water: {
    id: "water",
    name: "水之呼吸",
    japaneseChars: "水",
    description: "柔水克刚，如水般流动。水之呼吸使用者拥有高超的技巧和适应力。",
    personality: "拥有宛如平静的水面一般沉稳的心态，以及能够顺势而为的灵活思想。",
    characteristics: [
      "柔能克刚",
      "灵活应变",
      "温和内敛",
      "流动自在",
      "见机行动",
    ],
    baseType: "water",
    effectType: "water",
  },
  wind: {
    id: "wind",
    name: "風之呼吸",
    japaneseChars: "風",
    description: "疾如风，动如闪电。風之呼吸使用者拥有超高的速度和敏捷度。",
    personality: "性格激烈宛如暴风，为了自己的目的将周围卷入其中一起前进。",
    characteristics: [
      "快如闪电",
      "敏捷无比",
      "自由自在",
      "难以捉摸",
      "闪避高手",
    ],
    baseType: "wind",
    effectType: "wind",
  },
  flame: {
    id: "flame",
    name: "炎之呼吸",
    japaneseChars: "炎",
    description: "炽热如火，燃烧生命。炎之呼吸使用者拥有炽热的气质和强大的攻击力。",
    personality: "胸中燃烧着炽烈的感情，一心想着目标迈进并且从不在意细节。",
    characteristics: [
      "热血沸腾",
      "攻击强悍",
      "充满热情",
      "奋力直前",
      "不畏困难",
    ],
    baseType: "flame",
    effectType: "flame",
  },
  thunder: {
    id: "thunder",
    name: "雷之呼吸",
    japaneseChars: "雷",
    description:
      "迅雷不及掩耳，摧毁一切。雷之呼吸使用者拥有迅雷般的速度和破坏力。",
    personality: "激情十足，与恋爱相关的情感充沛，心中充满炽烈的渴望。",
    characteristics: [
      "雷霆万钧",
      "摧枯拉朽",
      "速度无敌",
      "力量最强",
      "一往无前",
    ],
    baseType: "thunder",
    effectType: "thunder",
  },
  flower: {
    id: "flower",
    name: "花之呼吸",
    japaneseChars: "花",
    description:
      "娇艳绽放，柔中带刚。花之呼吸融合了水的优雅和炎的热情，使用者既温柔又坚强。",
    personality:
      "拥有强烈的情感与坚定的信念，为了保护重要的人愿意燃烧一切。既有水的温柔体贴，又有炎的炽烈热情，是充满魅力和吸引力的人。",
    characteristics: [
      "温柔坚强",
      "热情似火",
      "优雅而刚烈",
      "充满魅力",
      "保护欲强",
    ],
    baseType: "water",
    effectType: "flame",
  },
  serpent: {
    id: "serpent",
    name: "蛇之呼吸",
    japaneseChars: "蛇",
    description:
      "蜿蜒而进，稳健可靠。蛇之呼吸融合了水的流畅和岩的坚定，精确而不失力量。",
    personality:
      "拥有水的沉稳与岩的执着，冷静理性但不失温度。注重细节，做事计划周密，既灵活应变又坚定执行。",
    characteristics: [
      "精确细致",
      "稳健可靠",
      "冷静理性",
      "执着坚定",
      "深思熟虑",
    ],
    baseType: "water",
    effectType: "water",
  },
  insect: {
    id: "insect",
    name: "虫之呼吸",
    japaneseChars: "虫",
    description:
      "精妙绝伦，轻灵飘逸。虫之呼吸融合了水的技巧和風的速度，是最为精密的呼吸法。",
    personality:
      "拥有水的柔和与風的敏捷，聪慧机灵，观察力敏锐。看似温和实则坚韧，用智慧和技巧突破困局。",
    characteristics: [
      "聪慧机灵",
      "观察敏锐",
      "轻灵精妙",
      "技巧非凡",
      "温和坚韧",
    ],
    baseType: "water",
    effectType: "wind",
  },
  love: {
    id: "love",
    name: "恋之呼吸",
    japaneseChars: "恋",
    description:
      "炽热似恋，燃烧灵魂。恋之呼吸是炎之呼吸的最高升华，代表着最纯粹的热情与爱。",
    personality:
      "心中充满对爱的渴望与执着，热血沸腾而充满力量。为了保护和拯救重要之人，可以燃烧一切，是最具感染力和凝聚力的人。",
    characteristics: [
      "炽热坚定",
      "力量无穷",
      "充满爱心",
      "感染他人",
      "舍身奉献",
    ],
    baseType: "flame",
    effectType: "flame",
  },
  mist: {
    id: "mist",
    name: "霞之呼吸",
    japaneseChars: "霞",
    description:
      "朦胧而美丽，难以捉摸。霞之呼吸融合了風的速度和神秘性，使用者如梦幻般难以琢磨。",
    personality:
      "性格如霞雾般朦胧神秘，看似柔弱实则坚韧。拥有風的独立与冷漠，但心中有温度，行动中有坚定。",
    characteristics: [
      "朦胧神秘",
      "柔弱坚韧",
      "独立冷傲",
      "速度无敌",
      "若即若离",
    ],
    baseType: "wind",
    effectType: "wind",
  },
  beast: {
    id: "beast",
    name: "兽之呼吸",
    japaneseChars: "兽",
    description:
      "凶悍而原始，本能驱使。兽之呼吸融合了風的凶悍和兽性的直觉，极富破坏力与原始力量。",
    personality:
      "性格狂放不羁，凭本能和直觉行动。富有野性与冒险精神，虽然看似莽撞但拥有惊人的战斗天赋与直觉。",
    characteristics: [
      "狂放不羁",
      "本能直觉",
      "野性凶悍",
      "冒险精神",
      "战斗天才",
    ],
    baseType: "wind",
    effectType: "wind",
  },
  sound: {
    id: "sound",
    name: "音之呼吸",
    japaneseChars: "音",
    description:
      "节奏鲜明，音律和谐。音之呼吸是雷之呼吸的精妙分支，以节奏与音律为核心。",
    personality:
      "性格节奏鲜明，做事有条不紊。拥有雷的力量与速度，但多了一份理性与韵律感，是最具和谐力与吸引力的人。",
    characteristics: [
      "节奏鲜明",
      "有条不紊",
      "韵律和谐",
      "理性决断",
      "魅力无穷",
    ],
    baseType: "thunder",
    effectType: "thunder",
  },
};

export interface BreathingWeights {
  rock: number;
  water: number;
  wind: number;
  flame: number;
  thunder: number;
}

export const DERIVED_BREATH_THRESHOLD = 7;

export function getDerivedBreathing(weights: BreathingWeights): BreathingTechnique {
  // Check main breaths first (threshold >= 7)
  if (weights.rock >= DERIVED_BREATH_THRESHOLD) {
    return breathingTechniques.rock;
  }
  if (weights.water >= DERIVED_BREATH_THRESHOLD) {
    return breathingTechniques.water;
  }
  if (weights.wind >= DERIVED_BREATH_THRESHOLD) {
    return breathingTechniques.wind;
  }
  if (weights.flame >= DERIVED_BREATH_THRESHOLD) {
    return breathingTechniques.flame;
  }
  if (weights.thunder >= DERIVED_BREATH_THRESHOLD) {
    return breathingTechniques.thunder;
  }

  // If no main breath >= 7, determine derived breathing
  // Find the highest weight
  const entries = Object.entries(weights).map(([key, value]) => ({ key, value }));
  entries.sort((a, b) => b.value - a.value);

  const dominant = entries[0];
  const secondary = entries[1];

  // Water derived breaths
  if (dominant.key === "water") {
    if (secondary.key === "flame") {
      return breathingTechniques.flower; // 花之呼吸 = 水 + 炎
    }
    if (secondary.key === "rock") {
      return breathingTechniques.serpent; // 蛇之呼吸 = 水 + 岩
    }
    if (secondary.key === "wind") {
      return breathingTechniques.insect; // 虫之呼吸 = 水 + 风
    }
    return breathingTechniques.water; // Default to water
  }

  // Flame derived breaths
  if (dominant.key === "flame") {
    return breathingTechniques.love; // 恋之呼吸 = 炎 主导
  }

  // Wind derived breaths
  if (dominant.key === "wind") {
    if (secondary.key === "water") {
      return breathingTechniques.mist; // 霞之呼吸 = 风 + 水
    }
    return breathingTechniques.beast; // 兽之呼吸 = 风 主导
  }

  // Thunder derived breaths
  if (dominant.key === "thunder") {
    return breathingTechniques.sound; // 音之呼吸 = 雷 主导
  }

  // Rock doesn't have derived breaths, use as is
  return breathingTechniques.rock;
}

export function getBreathingTechnique(
  weights: Record<string, number>
): BreathingTechnique {
  const typedWeights: BreathingWeights = {
    rock: weights.rock || 0,
    water: weights.water || 0,
    wind: weights.wind || 0,
    flame: weights.flame || 0,
    thunder: weights.thunder || 0,
  };

  return getDerivedBreathing(typedWeights);
}
