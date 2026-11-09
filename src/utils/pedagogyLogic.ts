export interface PromptTemplateParams {
  subject: string;
  gradeLevel: string;
  topic: string;
  videoStyle: 'animation' | 'documentary' | 'avatar' | 'news' | 'realistic';
  toolTarget?: string; // e.g. 'kling' | 'luma' | 'minimax' | 'pika' | 'invideo' | 'capcut' | 'clipchamp' | 'canva' | 'heygen' | 'vidnoz' | 'perchance'
  duration?: string; // Duração do produto final
  clipDuration?: string; // Duração do clipe gerado
  visualRestrictions?: string; // Elementos a evitar no vídeo
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
 * Builds a tailored educational video generation prompt based on teacher input,
 * differentiated according to the specific category of tool (clips, full video, editor, avatar).
 */
export function generateEducationalPrompt(params: PromptTemplateParams): string {
  const {
    subject,
    gradeLevel,
    topic,
    videoStyle,
    toolTarget = 'capcut',
    duration = '2 minutos',
    clipDuration = '5 a 10 segundos',
    visualRestrictions
  } = params;

  let styleDesc = '';
  switch (videoStyle) {
    case 'animation':
      styleDesc = 'animação didática 2D/3D clara, com elementos visuais expressivos e modelação precisa';
      break;
    case 'documentary':
      styleDesc = 'documentário realista com tom informativo, movimentos de câmara suaves e ambiente imersivo';
      break;
    case 'avatar':
      styleDesc = 'apresentador virtual em registo conversacional, empático, claro e pedagogicamente focado';
      break;
    case 'news':
      styleDesc = 'telejornal educativo / noticiário de ciência, com repórter e grafismos infográficos explicativos';
      break;
    case 'realistic':
      styleDesc = 'cinematográfico com iluminação naturalista, enquadramentos rigorosos e fidelidade visual';
      break;
  }

  const normalizedTool = toolTarget.toLowerCase();
  const isClipGenerator = ['kling', 'luma', 'minimax', 'hailuo', 'pika'].some(t => normalizedTool.includes(t));
  const isFullVideo = normalizedTool.includes('invideo');
  const isEditor = ['capcut', 'clipchamp', 'canva'].some(t => normalizedTool.includes(t));
  const isAvatar = ['heygen', 'vidnoz'].some(t => normalizedTool.includes(t));

  const sections: string[] = [];

  if (isClipGenerator) {
    // 1. Ferramentas de geração de clipes curtos (cena por cena)
    sections.push(`[Instrução para geração de clipe visual - Duração do clipe: ${clipDuration}]`);
    sections.push(`Sujeito principal: Representação visual do conceito "${topic}" no âmbito de ${subject} para alunos de ${gradeLevel}.`);
    sections.push(`Ação visível: Demonstração clara e fluida do fenómeno em movimento contínuo, evidenciando as relações de causa e efeito.`);
    sections.push(`Ambiente: Contexto didático rigoroso com iluminação adequada e atmosfera focada no fenómeno central.`);
    sections.push(`Enquadramento e movimento de câmara: Plano médio aproximando para pormenor em travelling lento e estável.`);
    sections.push(`Estilo visual: ${styleDesc}.`);
    sections.push(`Continuidade visual: Cores sóbrias e textura consistente, propícia a ser integrada posteriormente numa sequência de montagem.`);
    if (visualRestrictions && visualRestrictions.trim()) {
      sections.push(`Restrições visuais: ${visualRestrictions.trim()}`);
    }
    sections.push(`Nota de produção: Este clipe constitui um elemento visual de apoio. O produto pedagógico final (com duração prevista de ${duration}) deverá ser montado num editor de vídeo, onde serão acrescentados guião, narração oral, legendas revistas e questões de consolidação.`);
  } else if (isFullVideo) {
    // 2. Ferramenta de criação de vídeo completo (InVideo AI)
    sections.push(`[Instrução para estruturação de vídeo educativo - Duração final: ${duration}]`);
    sections.push(`Tema curricular: "${topic}" | Disciplina: ${subject} | Nível: ${gradeLevel}.`);
    sections.push(`Estrutura do guião: 1) Introdução cativante que coloca uma questão essencial; 2) Desenvolvimento em 2 a 3 blocos conceituais progressivos; 3) Conclusão com síntese das ideias-chave.`);
    sections.push(`Sequência de cenas e elementos visuais: Alternância entre esquemas conceituais e planos dinâmicos em ${styleDesc}.`);
    sections.push(`Narração: Locução em Português de Portugal, tom caloroso e pausado, vocabulário rigoroso conforme as Aprendizagens Essenciais.`);
    sections.push(`Legendas: Legendas completas sincronizadas com pontuação e ortografia revistas.`);
    if (visualRestrictions && visualRestrictions.trim()) {
      sections.push(`Restrições visuais: ${visualRestrictions.trim()}`);
    }
  } else if (isEditor) {
    // 3. Ferramentas de edição e composição (CapCut, Clipchamp, Canva)
    sections.push(`[Estrutura de guião, storyboard e montagem didática - Duração prevista: ${duration}]`);
    sections.push(`Projeto curricular: "${topic}" (${subject} · ${gradeLevel}).`);
    sections.push(`Guião e blocos de conteúdo: Bloco 1 (0:00-0:30) - Enquadramento e motivação; Bloco 2 (0:30-1:30) - Explicação do conceito central; Bloco 3 (1:30-${duration}) - Síntese e desafio de aplicação.`);
    sections.push(`Storyboard visual: Imagens, gráficos e excertos de vídeo com estilo ${styleDesc}.`);
    sections.push(`Texto da narração: Guião oral curto com frases simples e linguagem conversacional clara (Princípio da Personalização de Mayer).`);
    sections.push(`Texto das legendas: Transcrição revista de acessibilidade, destacando palavras-chave técnicas sem sobrecarga.`);
    sections.push(`Instruções de montagem: Cortes diretos em pontos de respiração, volume de voz calibrado sobre música de fundo suave e cortes de pausas desnecessárias.`);
    if (visualRestrictions && visualRestrictions.trim()) {
      sections.push(`Restrições visuais: ${visualRestrictions.trim()}`);
    }
  } else if (isAvatar) {
    // 4. Ferramentas de apresentadores virtuais (HeyGen, Vidnoz)
    sections.push(`[Guião e indicações de apresentação para apresentador virtual / avatar pedagógico - Duração prevista: ${duration}]`);
    sections.push(`Contexto educativo: Apresentação inicial do tema "${topic}" na disciplina de ${subject} (${gradeLevel}).`);
    sections.push(`Texto de apresentação e guião de fala: "Olá! Hoje vamos explorar ${topic}. Reparem com atenção no seguinte pormenor..."`);
    sections.push(`Divisão em cenas: 1) Apresentação e pergunta motivadora com o avatar; 2) Mudança para visualização do fenómeno ou esquema; 3) Regresso ao avatar para sintetizar a conclusão.`);
    sections.push(`Indicações de narração e apresentação: Tom empático, ritmo pausado, postura natural e sincronização labial expressiva em Português de Portugal.`);
    if (visualRestrictions && visualRestrictions.trim()) {
      sections.push(`Restrições visuais: ${visualRestrictions.trim()}`);
    }
    sections.push(`Aviso ético e institucional: Não utilizar rostos ou vozes reais de alunos ou professores sem autorização e validação prévias da escola.`);
  } else {
    // Fallback genérico rigoroso
    sections.push(`Cria um recurso audiovisual educativo para a disciplina de ${subject} destinado a alunos de ${gradeLevel}.`);
    sections.push(`Tema: "${topic}".`);
    sections.push(`Estilo visual: ${styleDesc}.`);
    sections.push(`Duração do produto final: ${duration}.`);
    sections.push(`Requisitos pedagógicos: linguagem adaptada ao nível etário, sem sobrecarga cognitiva e com exemplos práticos do quotidiano.`);
    if (visualRestrictions && visualRestrictions.trim()) {
      sections.push(`Restrições visuais: ${visualRestrictions.trim()}`);
    }
  }

  return sections.join('\n\n');
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
