export interface PromptTemplateParams {
  subject: string;
  gradeLevel: string;
  topic: string;
  videoStyle: 'animation' | 'documentary' | 'avatar' | 'news' | 'realistic';
  toolTarget?: string;
  duration?: string;
}

export interface ActivityProgress {
  stepIndex: number;
  completedSteps: number[];
  checklistItems: Record<string, boolean>;
}

export interface ToolFilterCriteria {
  freeTierOnly?: boolean;
  requiresAvatar?: boolean;
  requiresSubtitles?: boolean;
  noLoginRequired?: boolean;
  difficulty?: 'easy' | 'medium' | 'advanced' | 'all';
}

/**
 * Builds a tailored educational video generation prompt based on teacher input
 */
export function generateEducationalPrompt(params: PromptTemplateParams): string {
  const { subject, gradeLevel, topic, videoStyle, toolTarget, duration = '1 a 2 minutos' } = params;

  let styleDesc = '';
  switch (videoStyle) {
    case 'animation':
      styleDesc = 'estilo animação didática 2D/3D clara, com elementos visuais expressivos e legendas sincronizadas';
      break;
    case 'documentary':
      styleDesc = 'estilo documentário realista com tom calmo e informativo, movimentos de câmara lentos e ambiente sonoro imersivo';
      break;
    case 'avatar':
      styleDesc = 'com avatar virtual educativo que fala diretamente com os alunos de forma empática e dinâmica, tom claro e motivador';
      break;
    case 'news':
      styleDesc = 'formato de telejornal educativo / noticiário de ciência, com repórter de bancada ou no terreno e infográficos explicativos';
      break;
    case 'realistic':
      styleDesc = 'estilo cinematográfico realista com alta definição e enquadramentos rigorosos';
      break;
  }

  const prompt = [
    `Cria um vídeo educativo com duração de ${duration}, destinado a alunos de ${gradeLevel} na disciplina de ${subject}.`,
    `Tema central: "${topic}".`,
    `Estilo visual: ${styleDesc}.`,
    `Requisitos pedagógicos: linguagem adaptada ao nível etário, explicação clara dos conceitos essenciais passo a passo, sem sobrecarga cognitiva e com exemplos práticos do quotidiano.`,
  ];

  if (toolTarget === 'perchance' || toolTarget === 'sora') {
    prompt.push(`(Nota técnica: Caso a ferramenta exija prompts em inglês, traduzir a instrução mantendo a fidelidade científica e o foco didático).`);
  }

  return prompt.join(' ');
}

/**
 * Computes pedagogical rubric score based on weighted criteria
 */
export function calculateRubricScore(scores: {
  scientificAccuracy: number; // 0-5
  clarityAndPacing: number;    // 0-5
  creativityAndStyle: number;  // 0-5
  debateParticipation: number;// 0-5
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
 * Fast search matcher for educational resources
 */
export function matchesSearch(query: string, fields: (string | undefined)[]): boolean {
  if (!query || !query.trim()) return true;
  const terms = query.toLowerCase().trim().split(/\s+/);
  const combined = fields.filter(Boolean).join(' ').toLowerCase();
  return terms.every(term => combined.includes(term));
}
