export interface ActivityProgress {
  stepIndex: number;
  completedSteps: number[];
  checklistItems: Record<string, boolean>;
}

export interface ToolFilterCriteria {
  freeTierOnly?: boolean;
  requiresAvatar?: boolean;
  requiresSubtitles?: boolean;
  difficulty?: 'easy' | 'medium' | 'advanced' | 'all';
}

/**
 * Computes pedagogical rubric score based on dynamic weighted criteria per activity.
 * Formula: classificação final = (soma das pontuações de cada critério [0-5] × respetivo peso) / 100 × 4
 * Yields exactly a 0 to 20 scale.
 */
export function calculateWeightedRubricScore(
  scores: Record<string, number>,
  rubric: { id: string; weight: number }[]
): { total: number; percentage: number; scaleMax: number } {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const item of rubric) {
    const score = Math.max(0, Math.min(5, Number(scores[item.id] ?? 0)));
    weightedSum += score * item.weight;
    totalWeight += item.weight;
  }

  // Se os pesos somarem 100%, totalWeight é 100.
  const divisor = totalWeight > 0 ? totalWeight : 100;
  // Formula: (soma das pontuações × peso) / 100 × 4
  const finalScore = Number(((weightedSum / divisor) * 4).toFixed(1));
  const percentage = Math.round((finalScore / 20) * 100);

  return {
    total: finalScore,
    percentage,
    scaleMax: 20
  };
}

/**
 * Backward-compatible helper for 4 fixed criteria (kept for compatibility with legacy tests)
 */
export function calculateRubricScore(scores: {
  scientificAccuracy: number;
  clarityAndPacing: number;
  creativityAndStyle: number;
  debateParticipation: number;
}): { total: number; percentage: number; qualitativeGrade: string } {
  const sum = scores.scientificAccuracy + scores.clarityAndPacing + scores.creativityAndStyle + scores.debateParticipation;
  const max = 20;
  const percentage = Math.round((sum / max) * 100);

  let qualitativeGrade = 'Excelente';
  if (percentage < 50) {
    qualitativeGrade = 'Insuficiente';
  } else if (percentage < 70) {
    qualitativeGrade = 'Suficiente';
  } else if (percentage < 85) {
    qualitativeGrade = 'Bom';
  } else if (percentage < 95) {
    qualitativeGrade = 'Muito Bom';
  }

  return {
    total: sum,
    percentage,
    qualitativeGrade,
  };
}

/**
 * Fast search matcher for educational resources with accent normalization (pt-PT)
 */
export function matchesSearch(query: string, fields: (string | undefined)[]): boolean {
  if (!query || !query.trim()) return true;

  const normalizeText = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-PT');

  const terms = normalizeText(query).trim().split(/\s+/);
  const combined = normalizeText(fields.filter(Boolean).join(' '));

  return terms.every(term => combined.includes(term));
}
