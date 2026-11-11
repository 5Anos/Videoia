/**
 * Dados Estruturados da Plataforma Pedagógica
 * IA na Educação: Guia Prático de Ferramentas de Vídeo
 * Autora e Formadora: Carla Oliveira (2026)
 * Curadoria Pedagógica em Português Europeu Autêntico.
 */

export interface EducationalAdvantage {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  capabilities: string[];
  usefulTools: { name: string; description: string }[];
  teacherBenefits: string[];
  pedagogicalNote: string;
}

export interface EducationalPrompt {
  id: number;
  title: string;
  discipline: string;
  gradeLevel: string;
  creationType: string;
  recommendedTool: string;
  pedagogicalObjective: string;
  promptText: string;
  validationNote?: string;
}

export type CapabilityTag = 
  | 'text-to-video'
  | 'image-to-video'
  | 'video-editing'
  | 'avatars'
  | 'subtitles'
  | 'screen-recording'
  | 'text-to-speech'
  | 'presentation-video'
  | 'video-to-video'
  | 'community-generator';

export type FreeAccessType =
  | 'recurring-free-credits'
  | 'limited-free-plan'
  | 'one-time-free-trial'
  | 'free-editor'
  | 'education-eligibility'
  | 'paid-or-unconfirmed'
  | 'community-experimental';

export interface NonAiToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  externalUrl: string;
  pedagogicalUseCases: string[];
}

export interface ToolCatalogItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  inputTypes: string[];
  freeTierDetails: string;
  limitations: string[];
  pedagogicalUseCases: string[];
  externalUrl: string;
  demoEmbedUrl?: string;
  requiresEnglishPrompt?: boolean;
  creditSystem?: string;
  screenshots: { name: string; url: string; caption?: string }[];
  capabilityTags: (CapabilityTag | string)[];
  accessType?: FreeAccessType | string;
  officialSources?: {
    label: string;
    url: string;
  }[];
  lastVerified: string; // '2026-11-09'
  factCheckStatus: {
    freeStatus: '100% Gratuito (Sem Conta)' | 'Gratuito para Escolas' | 'Freemium Útil' | 'Freemium Muito Limitado' | 'Pago / Trial Rápido' | 'Acesso reservado a adultos (18+)' | string;
    minimumAge: string;
    rgpdRiskLevel: 'Baixo (Sem dados de alunos)' | 'Médio (Conta necessária)' | 'Alto (Biometria / Voz / Rosto)' | 'Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.' | string;
    teacherVerdict: string;
    whatIsFact: string;
    whatIsMisleading: string;
  };
}

export interface EvaluationRubricCriterion {
  id: string;
  criterion: string;
  weight: number; // Percentagem, soma = 100
  evidence: string;
}

export interface ClassroomActivityCopyItem {
  id: string;
  label: string;
  title: string;
  content: string;
  note?: string;
}

export interface ClassroomActivityStage {
  title: string;
  description?: string;
  steps?: string[];
  copyItem?: ClassroomActivityCopyItem;
  tip?: string;
}

export interface ClassroomActivity {
  id: string;
  number: number;
  title: string;
  discipline: string;
  year: string;
  duration: string;
  tool: string;
  usageMode: string;
  freeAccess: string;
  challenge: string;
  howToSteps?: string[];
  stages?: ClassroomActivityStage[];
  copyItems?: ClassroomActivityCopyItem[];
  recommendedSettings?: string[];
  expectedResult: string;
  validationNotes: string[];
  toolImportantNote?: string;
}

export interface BibliographyEntry {
  citation: string;
  author: string;
  year: number;
  title: string;
  source: string;
  category: 'Teoria Cognitiva & Multimédia' | 'Políticas & Ética de IA' | 'Taxonomia de Aprendizagem' | 'Documentação Técnica Oficial';
  relevanceToEducation: string;
  criticalAnalysis: string;
}

// 1. VISÃO GERAL E OBJETIVOS DA FORMAÇÃO
export const MODULE_OVERVIEW = {
  moduleNumber: 3,
  title: "Ferramentas de IA na Educação",
  focus: "O Vídeo Como Instrumento de Aprendizagem Significativa",
  trainer: "Carla Oliveira",
  year: 2026,
  objectives: [
    "Descobrir ferramentas de vídeo com IA que realmente poupam tempo ao professor e funcionam no contexto escolar português.",
    "Compreender como a síntese de vídeo pode apoiar alunos com diferentes ritmos e necessidades específicas (DUA).",
    "Criar recursos educativos próprios — desde pequenos vídeos explicativos a atividades práticas onde os alunos são os criadores."
  ],
  videoAICategories: [
    {
      type: "Geração de Vídeo a Partir de Texto ou Imagem",
      subtitle: "Criar o que não conseguimos filmar com uma câmara",
      description: "Modelos capazes de produzir clipes visuais dinâmicos a partir de uma ideia escrita ou de uma foto estática. Servem para ilustrar o invisível: o interior de uma célula, uma época histórica passada ou uma reação química microscópica.",
      highlights: [
        "Reconstituir acontecimentos históricos sem atores nem guarda-roupa",
        "Visualizar conceitos científicos abstratos em movimento tridimensional",
        "Despertar a curiosidade no início de uma aula com uma introdução impactante de 30 segundos",
        "Dar aos alunos o papel de realizadores e investigadores, colocando o foco na criatividade e no rigor"
      ],
      caution: "A IA inventa pormenores com frequência. O olhar crítico do professor e dos alunos é indispensável para detetar erros de conteúdo."
    },
    {
      type: "Edição Assistida e Acessibilidade",
      subtitle: "Cortar tarefas demoradas e tornar as aulas acessíveis a todos",
      description: "Ferramentas que podem apoiar algumas tarefas de edição, legendagem, transcrição e adaptação de materiais. As funcionalidades disponíveis e a qualidade dos resultados variam entre ferramentas, versões e planos.",
      highlights: [
        "Criar legendas automáticas, quando a ferramenta disponibiliza essa funcionalidade, e rever o resultado.",
        "Preparar versões traduzidas ou transcritas, com revisão linguística e técnica.",
        "Organizar e cortar excertos de vídeo, de acordo com as funcionalidades do editor.",
        "Produzir materiais com texto, áudio e imagem, considerando os objetivos da aula e as necessidades de acessibilidade."
      ],
      caution: "Verifique sempre a pontuação das legendas automáticas e os termos técnicos da sua disciplina."
    }
  ]
};

// 2. 5 VANTAGENS NA ÓTICA DO PROFESSOR (Linguagem Humana e Pedagógica)
export const TEACHER_ADVANTAGES: EducationalAdvantage[] = [
  {
    id: 1,
    title: "1. Criar videoaulas",
    shortTitle: "Videoaulas",
    description: "Permite preparar vídeos explicativos a partir de um texto, guião ou apresentação, recorrendo a imagens, narração e, em algumas ferramentas, apresentadores virtuais.",
    capabilities: [
      "Transformar um texto ou guião num rascunho de vídeo.",
      "Criar explicações narradas com voz sintética ou gravação do próprio professor.",
      "Preparar vídeos curtos para introduzir, explicar ou rever conteúdos."
    ],
    usefulTools: [
      { name: "Synthesia", description: "Criar vídeos com apresentadores virtuais a partir de guiões." },
      { name: "HeyGen", description: "Criar vídeos com avatares e narração gerada por IA." },
      { name: "Pictory", description: "Apoiar a transformação de textos ou conteúdos longos em vídeos." }
    ],
    teacherBenefits: [
      "Reduzir parte do tempo necessário à gravação e montagem.",
      "Disponibilizar explicações para consulta e revisão ao ritmo dos alunos.",
      "Reutilizar e atualizar recursos sempre que necessário."
    ],
    pedagogicalNote: "O vídeo deve responder a um objetivo de aprendizagem claro. O professor deve rever o guião, as imagens, a narração e a duração antes de o partilhar."
  },
  {
    id: 2,
    title: "2. Legendar, traduzir e dobrar vídeos",
    shortTitle: "Legendas e tradução",
    description: "Permite criar legendas e transcrições, traduzir o texto e, em algumas ferramentas, gerar uma locução noutra língua para um vídeo existente.",
    capabilities: [
      "Gerar legendas automáticas e transcrições de fala.",
      "Corrigir palavras mal reconhecidas, pontuação e termos específicos da disciplina.",
      "Traduzir legendas e, quando disponível, gerar dobragem ou sincronização da voz."
    ],
    usefulTools: [
      { name: "Descript", description: "Apoiar a edição de áudio e vídeo através da transcrição." },
      { name: "Kapwing AI", description: "Apoiar a criação de legendas, tradução e edição de vídeo." },
      { name: "HeyGen Video Translate", description: "Criar versões traduzidas com dobragem por IA, quando disponível." }
    ],
    teacherBenefits: [
      "Disponibilizar uma versão escrita do conteúdo falado.",
      "Preparar versões linguísticas de um recurso.",
      "Facilitar a consulta e a compreensão dos vídeos por alunos com diferentes necessidades linguísticas ou de acesso."
    ],
    pedagogicalNote: "Legendas, transcrições e traduções automáticas podem conter erros. Rever a sincronização, a pontuação, os termos técnicos e o sentido da mensagem. As legendas podem apoiar a acessibilidade, mas não garantem, por si só, uma abordagem DUA."
  },
  {
    id: 3,
    title: "3. Transformar vídeos longos em resumos e excertos curtos",
    shortTitle: "Resumos e excertos",
    description: "A IA pode ajudar a identificar ideias principais e a selecionar momentos de uma gravação extensa, permitindo preparar resumos e excertos mais curtos para consulta ou revisão.",
    capabilities: [
      "Gerar um resumo inicial com base no vídeo ou na transcrição.",
      "Identificar momentos relevantes e criar excertos curtos por tema.",
      "Sugerir títulos e destaques para organizar os excertos."
    ],
    usefulTools: [
      { name: "Opus Clip", description: "Identificar momentos de um vídeo e preparar clipes curtos." },
      { name: "Pictory", description: "Apoiar a criação de vídeos-resumo a partir de conteúdos fornecidos." },
      { name: "Descript", description: "Editar vídeo através da transcrição e selecionar excertos." }
    ],
    teacherBenefits: [
      "Facilitar a localização de explicações numa gravação extensa.",
      "Preparar materiais breves para retomar conceitos e apoiar a revisão.",
      "Partilhar excertos em plataformas de aprendizagem, como Teams, Moodle ou Classroom."
    ],
    pedagogicalNote: "Confirmar se o resumo mantém as ideias essenciais e se cada excerto conserva o contexto. Um vídeo mais curto não é necessariamente mais claro ou mais adequado à aprendizagem."
  },
  {
    id: 4,
    title: "4. Criar avatares digitais do professor",
    shortTitle: "Avatares digitais",
    description: "Permite preparar uma representação digital do professor para apresentar conteúdos a partir de um guião. Depois de criado o avatar, algumas ferramentas permitem produzir novas versões sem voltar a gravar toda a apresentação.",
    capabilities: [
      "Criar um avatar a partir da própria imagem e, quando disponível, da voz do professor.",
      "Gerar vídeos de apresentação a partir de textos ou guiões.",
      "Atualizar uma explicação alterando o guião, sem repetir toda a gravação."
    ],
    usefulTools: [
      { name: "Synthesia Personal Avatar", description: "Criar um avatar pessoal para produzir vídeos de apresentação." },
      { name: "HeyGen Personal Avatar", description: "Criar um avatar pessoal e gerar vídeos a partir de guiões." }
    ],
    teacherBenefits: [
      "Preparar explicações e mensagens breves.",
      "Atualizar recursos sem regravar cada versão.",
      "Manter uma apresentação visual consistente entre vários materiais."
    ],
    pedagogicalNote: "Utilizar apenas a própria imagem e voz, ou as de outra pessoa com autorização explícita. Informar os destinatários quando o avatar sintético possa ser confundido com uma gravação real. Rever sempre a expressão, a pronúncia e o conteúdo."
  },
  {
    id: 5,
    title: "5. Editar vídeos com apoio de IA",
    shortTitle: "Edição de vídeo",
    description: "Permite utilizar funcionalidades de IA para simplificar algumas tarefas de edição e melhorar a qualidade técnica de um vídeo. Dependendo da ferramenta, é possível trabalhar com cortes, áudio, imagem ou transcrição.",
    capabilities: [
      "Eliminar pausas excessivas, erros de gravação e segmentos desnecessários, preservando o sentido.",
      "Reduzir ruído de fundo e ajustar o áudio ou a iluminação, quando a ferramenta disponibiliza essas opções.",
      "Editar partes do vídeo através da transcrição ou de comandos, nas ferramentas que oferecem essas funcionalidades."
    ],
    usefulTools: [
      { name: "Descript", description: "Permitir edição de áudio e vídeo com apoio da transcrição." },
      { name: "Runway ML", description: "Disponibilizar ferramentas de IA para edição e transformação de vídeo." },
      { name: "Kapwing AI", description: "Apoiar cortes, legendagem e edição simplificada." },
      { name: "CapCut", description: "Reunir ferramentas de edição de vídeo e funcionalidades automáticas." }
    ],
    teacherBenefits: [
      "Tornar algumas tarefas de edição mais simples.",
      "Melhorar a clareza do som e da imagem antes da partilha.",
      "Libertar tempo para rever o conteúdo e a finalidade pedagógica do vídeo."
    ],
    pedagogicalNote: "Rever o vídeo completo depois da edição. Confirmar que nenhum corte retirou informação essencial ou alterou o significado. Verificar a resolução, o formato de exportação e a eventual marca de água."
  }
];

// 3. BANCO DE PROMPTS PARA VÍDEOS COM IA (11 PROMPTS PRONTOS A UTILIZAR)
export const EDUCATIONAL_PROMPTS: EducationalPrompt[] = [
  {
    id: 1,
    title: "O percurso do sangue no coração",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "3.º Ciclo (9.º ano)",
    creationType: "Imagem para vídeo — animação científica esquemática.",
    recommendedTool: "PixVerse — alternativa: Kling AI. Utilizar uma imagem anatómica previamente validada.",
    pedagogicalObjective: "Visualizar o percurso do sangue na circulação pulmonar e sistémica, distinguindo os dois circuitos.",
    promptText: `Usa exclusivamente a imagem de referência fornecida pelo professor, que contém um esquema anatómico validado do coração e dos principais vasos sanguíneos.

Cria uma animação científica curta, mantendo rigorosamente a forma, a posição e o número das cavidades, válvulas e vasos representados.

Anima apenas um realce luminoso discreto que acompanhe os percursos já existentes no esquema: o sangue menos oxigenado segue do lado direito do coração para os pulmões; o sangue oxigenado regressa ao lado esquerdo e é enviado para o corpo através da aorta.

Utiliza azul e vermelho apenas como convenções gráficas para distinguir os dois tipos de sangue.

Mantém a anatomia estável. Não acrescentes vasos, válvulas, cavidades ou órgãos. Não introduzas texto, setas ou legendas.

A câmara deve permanecer estável, com movimento mínimo.`,
    validationNote: "A imagem de referência deve ser um esquema anatómico cientificamente validado. Confirmar os percursos do sangue e as estruturas cardíacas. As cores são convenções gráficas, não representam as cores reais do sangue."
  },
  {
    id: 2,
    title: "A chegada de Vasco da Gama à Índia (1498)",
    discipline: "História",
    gradeLevel: "2.º Ciclo (5.º ou 6.º ano)",
    creationType: "Imagem para vídeo — reconstituição histórica ilustrativa.",
    recommendedTool: "PixVerse — alternativa: Hailuo AI ou Kling AI.",
    pedagogicalObjective: "Representar visualmente a chegada da expedição de Vasco da Gama a Calecute em 1498, distinguindo uma reconstituição de um documento histórico.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor para criar uma animação ilustrativa da aproximação de embarcações portuguesas à costa de Calecute, na Índia, em 1498.

Preserva os navios, as pessoas, a composição e os elementos históricos presentes na imagem original.

Anima suavemente o movimento do mar, as velas ao vento e a luz sobre a paisagem.

Utiliza um movimento de câmara lento e discreto, mantendo a coerência visual da imagem.

Não acrescentes navios, pessoas, bandeiras, símbolos ou elementos históricos que não estejam presentes na referência. Não inventes acontecimentos, diálogos ou reações individuais.

Não incluas texto, datas ou legendas. Não imites a aparência de uma filmagem documental autêntica.

O resultado deve ser uma reconstituição visual ilustrativa, não um documento histórico.`,
    validationNote: "Confrontar a representação com fontes iconográficas e históricas. Identificar sempre o vídeo como reconstituição gerada por IA."
  },
  {
    id: 3,
    title: "O ciclo da água",
    discipline: "Ciências Naturais / Geografia",
    gradeLevel: "2.º Ciclo (5.º ano)",
    creationType: "Imagem para vídeo — animação científica de um esquema.",
    recommendedTool: "PixVerse — alternativa: Vidu ou Hailuo AI.",
    pedagogicalObjective: "Representar as principais etapas do ciclo da água, incluindo evaporação, condensação, precipitação, escoamento e infiltração.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor, que representa um esquema cientificamente validado do ciclo da água.

Cria uma animação educativa curta, mantendo a composição e os elementos fundamentais do esquema.

Anima suavemente a superfície da água, a formação das nuvens e a precipitação.

O vapor de água deve ser representado como invisível, não como fumo branco. As nuvens devem apresentar pequenas gotículas de água ou cristais de gelo.

Mostra o regresso da água à superfície através do escoamento e da infiltração no solo, respeitando os processos já representados na imagem.

Não acrescentes novos elementos, setas, textos, legendas ou valores.

Mantém a imagem estável e evita alterações à sequência científica do esquema.`,
    validationNote: "Confirmar que o vapor de água não é representado como fumo e que a sequência não sugere uma trajetória única obrigatória para todas as moléculas de água."
  },
  {
    id: 4,
    title: "A mitose celular",
    discipline: "Biologia e Geologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    creationType: "Imagem para vídeo — animação de esquema científico.",
    recommendedTool: "PixVerse — alternativa: Kling AI ou Vidu.",
    pedagogicalObjective: "Identificar visualmente as fases da mitose e compreender a separação das cromátides-irmãs.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor, que apresenta um esquema científico validado das quatro fases da mitose: prófase, metáfase, anáfase e telófase.

Cria uma animação curta que destaque progressivamente cada uma das quatro fases.

Realça cada painel através de uma iluminação suave ou de um ligeiro movimento de câmara.

Preserva integralmente as células, os cromossomas, o fuso mitótico e a composição original do esquema.

Não inventes cromossomas, não alteres o número de estruturas e não transformes uma fase noutra através de movimentos anatómicos imaginados.

Não representes a duplicação do ADN como parte da mitose. Não acrescentes legendas, nomes ou texto automático.

O resultado deve funcionar como uma animação de apoio à observação do esquema científico original.`,
    validationNote: "A imagem deve ser validada previamente e a sequência das fases deve ser confirmada através de uma fonte científica. A animação não deve ser apresentada como uma captura microscópica real."
  },
  {
    id: 5,
    title: "Como se formam os vulcões nas zonas de subducção?",
    discipline: "Ciências Naturais / Geologia",
    gradeLevel: "3.º Ciclo (7.º ano)",
    creationType: "Imagem para vídeo — animação de um corte geológico.",
    recommendedTool: "PixVerse — alternativa: Hailuo AI ou Kling AI.",
    pedagogicalObjective: "Visualizar a subducção de uma placa oceânica e a formação de magma na região do manto sobrejacente.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor, que representa um corte geológico validado de uma zona de subducção.

Preserva a posição e a geometria das placas tectónicas, da crosta, do manto e do vulcão.

Cria uma animação curta que destaque o mergulho da placa oceânica sob a placa continental e a ascensão do magma através da região já representada no esquema.

Mostra o movimento do magma apenas no percurso previamente indicado na imagem.

Não representes a placa subductada como se fundisse integralmente. Não acrescentes novas placas, vulcões ou estruturas geológicas.

Não inventes escalas, setas ou legendas. Não transformes o esquema científico numa representação fantasiosa.`,
    validationNote: "Confirmar que a animação não apresenta a fusão integral da placa oceânica. Validar a relação entre os fluidos libertados, a fusão parcial do manto e a ascensão do magma."
  },
  {
    id: 6,
    title: "Segurança no laboratório de Ciências",
    discipline: "Ciências Naturais / Físico-Química",
    gradeLevel: "3.º Ciclo (7.º ao 9.º ano)",
    creationType: "Texto para vídeo — apresentador virtual.",
    recommendedTool: "HeyGen — plano gratuito de experimentação; alternativa: Vidnoz AI. Utilização da conta pelo professor adulto.",
    pedagogicalObjective: "Apresentar três regras fundamentais de segurança laboratorial através de um apresentador virtual.",
    promptText: `Cria um vídeo educativo com um apresentador virtual adulto, de aparência profissional, num laboratório escolar organizado.

O apresentador deve utilizar bata e óculos de proteção, falar de forma clara e manter um ritmo moderado.

Utiliza exatamente o seguinte texto de narração, em Português de Portugal:

«Antes de iniciares uma atividade laboratorial, coloca os equipamentos de proteção indicados pelo professor e prende o cabelo comprido. Nunca proves reagentes nem cheires diretamente os recipientes. Se ocorrer um derrame ou uma situação inesperada, não toques no material nem tentes limpar. Afasta-te e informa imediatamente o professor, seguindo as regras de segurança do laboratório.»

Utiliza uma apresentação simples, com o apresentador em destaque e um laboratório como cenário.

Não acrescentes regras, produtos químicos, procedimentos ou instruções que não estejam no texto.

Não utilizes a imagem ou a voz de pessoas reais. Não apresentes a personagem como um professor verdadeiro.`,
    validationNote: "Adaptar as instruções ao regulamento do laboratório e às fichas de segurança dos produtos utilizados na escola. Confirmar a pronúncia antes da exportação."
  },
  {
    id: 7,
    title: "O Teorema de Pitágoras: a relação entre as áreas",
    discipline: "Matemática",
    gradeLevel: "3.º Ciclo (8.º ano)",
    creationType: "Imagem para vídeo — animação de diagrama geométrico validado.",
    recommendedTool: "GeoGebra para criar o esquema rigoroso e PixVerse para uma animação muito subtil. Alternativa gratuita de montagem: Clipchamp.",
    pedagogicalObjective: "Visualizar a relação entre as áreas dos quadrados construídos sobre os lados de um triângulo retângulo.",
    promptText: `Utiliza exclusivamente a imagem de referência fornecida pelo professor, previamente construída e validada no GeoGebra.

A imagem contém um triângulo retângulo com lados de comprimento 3, 4 e 5 e três quadrados construídos externamente sobre os respetivos lados.

Cria uma animação geométrica simples, aplicando apenas um movimento de câmara lento e uma aproximação visual aos três quadrados.

Preserva integralmente as medidas, os ângulos, a posição dos elementos e a forma dos quadrados.

Não deformes o triângulo nem alteres as dimensões dos quadrados.

Não geres números, fórmulas, símbolos matemáticos ou legendas.

O vídeo deve manter o diagrama original sem alterações geométricas.`,
    validationNote: "As medidas, os ângulos e as áreas devem ser construídos e verificados no GeoGebra. Se a IA deformar qualquer elemento, utilizar o diagrama original e montar a animação no Clipchamp. Inserir posteriormente a expressão 3² + 4² = 5² através de um editor."
  },
  {
    id: 8,
    title: "Inês de Castro: História, Lenda e Literatura",
    discipline: "Português / História",
    gradeLevel: "3.º Ciclo (9.º ano) e Ensino Secundário",
    creationType: "Imagem para vídeo — animação de ilustração literária.",
    recommendedTool: "PixVerse — alternativa: Kling AI.",
    pedagogicalObjective: "Criar uma representação visual inspirada no episódio de Inês de Castro, distinguindo a dimensão histórica da construção literária e lendária.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor para criar uma animação visual inspirada na figura literária de Inês de Castro e no episódio narrado no Canto III de Os Lusíadas.

Preserva o estilo artístico, a composição, a personagem e os elementos visuais da imagem original.

Anima suavemente o movimento da água, das folhas e do vestuário, utilizando um movimento de câmara discreto.

Não acrescentes acontecimentos, personagens ou elementos históricos específicos que não estejam presentes na imagem de referência.

Não apresentes a Quinta das Lágrimas como local historicamente comprovado do acontecimento.

Não representes as manchas avermelhadas das pedras como vestígios reais de sangue.

Não incluas diálogos, legendas ou texto.

O resultado deve ser uma representação artística e ilustrativa, não uma reconstituição documental.`,
    validationNote: "A Quinta das Lágrimas deve ser apresentada como espaço associado à tradição lendária de Pedro e Inês. Distinguir a informação histórica, a lenda e a representação literária de Camões."
  },
  {
    id: 9,
    title: "A fotossíntese: da luz à produção de matéria orgânica",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    creationType: "Imagem para vídeo — animação científica de um esquema celular.",
    recommendedTool: "PixVerse — alternativa: Vidu ou Kling AI.",
    pedagogicalObjective: "Visualizar a relação entre as reações dependentes da luz nos tilacoides e o ciclo de Calvin no estroma do cloroplasto.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor, que contém um esquema científico validado da fotossíntese e da estrutura de um cloroplasto.

Cria uma animação educativa curta, mantendo as estruturas e a composição da imagem original.

Realça primeiro as membranas dos tilacoides, onde ocorrem as reações dependentes da luz.

Depois, destaca o estroma, onde decorre o ciclo de Calvin.

Utiliza uma iluminação suave para distinguir visualmente as duas regiões.

Preserva a estrutura do cloroplasto e não inventes membranas, organelos ou moléculas.

Não representes o ciclo de Calvin como ocorrendo nos tilacoides. Não mostres a água a ser transformada diretamente em glicose.

Não acrescentes fórmulas, legendas, nomes ou texto automático.`,
    validationNote: "Utilizar apenas uma imagem científica previamente validada. Confirmar a distinção entre tilacoides e estroma e a localização dos processos. Para níveis de ensino mais elementares, substituir a explicação molecular por uma representação introdutória da fotossíntese."
  },
  {
    id: 10,
    title: "Multiplicação prática: três grupos de quatro",
    discipline: "Matemática",
    gradeLevel: "1.º Ciclo (3.º ano)",
    creationType: "Imagem para vídeo — animação de uma representação visual da multiplicação.",
    recommendedTool: "PixVerse, a partir de uma imagem previamente construída no Canva. Alternativa gratuita: Clipchamp.",
    pedagogicalObjective: "Representar a multiplicação como adição repetida através de três grupos com quatro elementos cada.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor, que apresenta exatamente três caixas iguais, cada uma com quatro maçãs vermelhas.

Cria uma animação curta, mantendo rigorosamente os três grupos e as doze maçãs da imagem original.

Aplica apenas um movimento de câmara suave e uma aproximação visual às caixas.

Não acrescentes, retires, dupliques ou deformes maçãs ou caixas.

Não alteres a disposição dos grupos.

Não geres números, símbolos ou expressões matemáticas.

O resultado deve preservar a imagem original e facilitar a observação dos três grupos de quatro elementos.`,
    validationNote: "A imagem deve ser construída e contada previamente no Canva. Confirmar a existência de três grupos com quatro elementos cada. Se a IA alterar a quantidade, utilizar a imagem original e fazer a animação no Clipchamp."
  },
  {
    id: 11,
    title: "A Revolução dos Cravos — 25 de Abril de 1974",
    discipline: "História / Cidadania",
    gradeLevel: "2.º e 3.º Ciclos e Ensino Secundário",
    creationType: "Imagem para vídeo — reconstituição histórica ilustrativa.",
    recommendedTool: "PixVerse — alternativa: Hailuo AI ou Kling AI.",
    pedagogicalObjective: "Representar visualmente o ambiente associado ao 25 de Abril de 1974, distinguindo a reconstituição gerada de uma imagem documental.",
    promptText: `Utiliza a imagem de referência fornecida pelo professor para criar uma animação ilustrativa inspirada no 25 de Abril de 1974, em Lisboa.

Preserva a composição, os edifícios, os militares, os civis e os símbolos históricos existentes na imagem.

Anima suavemente o movimento dos cravos vermelhos e dos elementos visuais já presentes. Aplica um movimento de câmara lento e discreto.

Não acrescentes figuras históricas, acontecimentos, uniformes, veículos militares ou símbolos que não estejam representados na imagem de referência.

Não inventes diálogos, comportamentos individuais ou acontecimentos específicos.

Não simules uma filmagem documental verdadeira. Não apresentes o resultado como fotografia ou filme de arquivo.

Não incluas datas, títulos, legendas ou texto automático.

O resultado deve ser uma reconstituição visual claramente identificada como gerada por Inteligência Artificial.`,
    validationNote: "Utilizar uma imagem própria ou devidamente licenciada. Confrontar a representação com fotografias, testemunhos e documentos históricos. Nunca apresentar a animação como registo documental autêntico."
  }
];

// 4. CATÁLOGO COMPLETO DAS 16 FERRAMENTAS DE VÍDEO COM IA PARA EDUCAÇÃO (2026)
export const TOOLS_CATALOG: ToolCatalogItem[] = [
  {
    id: "invideo",
    name: "InVideo AI",
    category: "Geração de Guião e Vídeo Didático",
    badge: "Guião e Rascunho",
    shortDesc: "Plataforma de criação de vídeos que permite preparar conteúdos audiovisuais a partir de instruções escritas e materiais fornecidos pelo utilizador.",
    fullDesc: "O InVideo AI é uma plataforma de criação de vídeos que permite preparar conteúdos audiovisuais a partir de instruções escritas e materiais fornecidos pelo utilizador. Pode apoiar a criação de um primeiro rascunho de vídeo, que deve ser revisto e editado pelo docente.",
    keyFeatures: [
      "Criação de rascunhos audiovisuais com IA",
      "Preparação de sequências visuais a partir de texto",
      "Edição posterior do vídeo",
      "Funcionalidades de narração e transcrição, conforme plano e disponibilidade"
    ],
    inputTypes: ["Instrução em Texto", "Resumo Curricular", "Artigos Web"],
    freeTierDetails: "O serviço disponibiliza um nível gratuito com utilização limitada por créditos. A geração por IA e determinadas transcrições consomem créditos; a edição manual no InVideo Editor tem condições próprias. Os limites dependem da região, do plano e do modelo utilizado. Consulte a documentação oficial antes de planear a atividade.",
    limitations: [
      "O resultado pode incluir imagens inadequadas ou incorretas.",
      "O resumo de um texto não garante fidelidade ao documento original.",
      "A geração por IA consome créditos.",
      "Não assumir Português de Portugal ou direitos comerciais sem confirmação."
    ],
    pedagogicalUseCases: [
      "Apoiar a criação de um primeiro rascunho de vídeo para introdução de conteúdos",
      "Produzir sínteses de apoio para disponibilização aos estudantes",
      "Trabalho de projeto em que os alunos redigem o guião e o professor apoia a montagem"
    ],
    externalUrl: "https://invideo.io/",
    screenshots: [],
    capabilityTags: ["text-to-video", "video-editing", "subtitles", "text-to-speech"],
    accessType: "limited-free-plan",
    officialSources: [
      { label: "Página Oficial", url: "https://invideo.io/" },
      { label: "Documentação de Planos", url: "https://docs.invideo.io/account/plans" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Plano gratuito limitado",
      minimumAge: "Consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Permite apoiar a criação de um rascunho audiovisual a partir de instruções escritas, exigindo validação científica e revisão de guião.",
      whatIsFact: "Cria uma proposta estruturada de vídeo com cortes e narração a partir de uma instrução em texto.",
      whatIsMisleading: "O guião gerado automaticamente necessita de revisão pedagógica e científica pelo professor."
    }
  },
  {
    id: "kling",
    name: "Kling AI",
    category: "Geração de Vídeo e Movimento Físico",
    badge: "Física e Fotorrealismo",
    shortDesc: "O Kling AI disponibiliza modelos de criação audiovisual com Inteligência Artificial, incluindo geração de vídeo a partir de texto e imagens.",
    fullDesc: "O Kling AI disponibiliza modelos de criação audiovisual com Inteligência Artificial, incluindo geração de vídeo a partir de texto e imagens. As funcionalidades dependem do modelo e da versão selecionada.",
    keyFeatures: [
      "Geração de clipes visuais a partir de instruções em texto",
      "Animação de fotografias e ilustrações estáticas",
      "Modelação de movimentos de fluidos, tecidos e luz natural",
      "Controlo de câmara conforme o modelo e versão selecionados"
    ],
    inputTypes: ["Instrução em Texto", "Fotografia Estática"],
    freeTierDetails: "A plataforma disponibiliza condições de acesso gratuitas com limites e créditos próprios. Não apresentar uma quantidade fixa de créditos ou de vídeos diários sem confirmação na conta e documentação atuais. As gerações gratuitas podem ter restrições e marcas de água.",
    limitations: [
      "A duração depende do modelo.",
      "As funcionalidades de áudio dependem da versão.",
      "A disponibilidade de idiomas de áudio não deve ser presumida.",
      "O resultado requer validação visual e factual.",
      "Os termos de utilização e a idade mínima devem ser respeitados."
    ],
    pedagogicalUseCases: [
      "Simular processos físicos ou químicos que não se conseguem filmar em aula",
      "Animação de quadros e gravuras históricas para projetos interdisciplinares",
      "Exercícios de observação crítica do movimento gerado por IA"
    ],
    externalUrl: "https://kling.ai/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "recurring-free-credits",
    officialSources: [
      { label: "Página Oficial", url: "https://kling.ai/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Créditos gratuitos periódicos sujeitos a limites",
      minimumAge: "Consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Adequado para geração de clipes visuais curtos ilustrativos para demonstrar fenómenos dinâmicos.",
      whatIsFact: "Produz simulações de movimento e iluminação natural com elevado detalhe visual.",
      whatIsMisleading: "As representações visuais podem incluir artefactos e necessitam de validação factual."
    }
  },
  {
    id: "luma",
    name: "Luma AI — Ray3.2",
    category: "Geração de Vídeo e Espaço 3D",
    badge: "Movimento Espacial",
    shortDesc: "A Luma AI disponibiliza ferramentas de criação audiovisual com modelos de Inteligência Artificial. O modelo de vídeo indicado em novembro de 2026 é o Ray3.2.",
    fullDesc: "A Luma AI disponibiliza ferramentas de criação audiovisual com modelos de Inteligência Artificial. O modelo de vídeo indicado pela documentação consultada em novembro de 2026 é o Ray3.2. As funcionalidades e os modos de criação dependem da versão e da conta.",
    keyFeatures: [
      "Geração de vídeo a partir de texto com o modelo Ray3.2",
      "Animação de fotografias estáticas com transições espaciais",
      "Controlo de perspetiva e movimento de câmara tridimensional"
    ],
    inputTypes: ["Texto", "Fotografia / Imagem 2D"],
    freeTierDetails: "Não apresentar uma quota gratuita recorrente de 30 gerações mensais. Consultar os planos e a disponibilidade atuais.",
    limitations: [
      "Os modelos podem mudar.",
      "Não presumir que todas as funcionalidades estão disponíveis gratuitamente.",
      "Não garantir precisão científica ou histórica.",
      "Não assumir que a duração dos vídeos é fixa."
    ],
    pedagogicalUseCases: [
      "Sobrevoo de relevos e formações geográficas para apoio às aulas de Geografia",
      "Animação de esculturas clássicas ou peças de arqueologia a partir de fotografias",
      "Criação de fundos visuais para apresentações temáticas"
    ],
    externalUrl: "https://app.lumalabs.ai/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "paid-or-unconfirmed",
    officialSources: [
      { label: "Informação Oficial de Modelos", url: "https://lumalabs.ai/llm-info" },
      { label: "Aplicação Luma", url: "https://app.lumalabs.ai/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Acesso gratuito variável ou pago",
      minimumAge: "Os termos indicam utilização a partir dos 18 anos ou, entre os 13 e os 17 anos, com consentimento do progenitor ou representante legal, nos termos definidos pelo fornecedor. Utilização por alunos apenas após validação das condições institucionais e legais.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Permite criar clipes com câmara em movimento e perspetiva 3D; verificar condições comerciais e termos etários antes de qualquer uso.",
      whatIsFact: "Excelente consistência espacial e movimentos de câmara fluídos.",
      whatIsMisleading: "Pode distorcer detalhes anatómicos complexos e os planos gratuitos variam sem aviso."
    }
  },
  {
    id: "minimax",
    name: "MiniMax — Hailuo AI",
    category: "Geração de Vídeo Cinematográfico",
    badge: "Expressividade e Detalhe",
    shortDesc: "A Hailuo AI disponibiliza ferramentas de geração de vídeo com Inteligência Artificial, incluindo criação a partir de instruções escritas e imagens.",
    fullDesc: "A Hailuo AI disponibiliza ferramentas de geração de vídeo com Inteligência Artificial, incluindo criação a partir de instruções escritas e imagens, de acordo com os modelos disponíveis.",
    keyFeatures: [
      "Geração de clipes visuais a partir de instruções escritas",
      "Transformação de imagens de referência em vídeo dinâmico",
      "Representação de texturas, iluminação e atmosferas expressivas"
    ],
    inputTypes: ["Texto Descritivo", "Fotografia de Referência"],
    freeTierDetails: "Os termos de utilização indicam uma idade mínima de 16 anos. Podem existir créditos promocionais de boas-vindas para determinados novos registos, com condições e validade próprias. Não apresentar créditos diários permanentes nem quantidades não confirmadas.",
    limitations: [
      "Modelos e condições variáveis.",
      "Marcas de água e exportação dependem do plano.",
      "Não garantir geração de vídeo com a duração de um documentário completo.",
      "Validar os resultados antes de utilização educativa."
    ],
    pedagogicalUseCases: [
      "Reconstituição ilustrativa de ambientes históricos descritos em textos",
      "Visualização de biomas e ecossistemas com atmosfera envolvente",
      "Exercícios de escrita criativa onde os alunos comparam descrições com a imagem gerada"
    ],
    externalUrl: "https://hailuoai.video/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "one-time-free-trial",
    officialSources: [
      { label: "Página Oficial", url: "https://hailuoai.video/" },
      { label: "Termos de Serviço", url: "https://hailuoai.video/doc/terms-of-service.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Créditos promocionais de utilização pontual, sujeitos a elegibilidade, validade e condições do fornecedor. Não equivale a um plano gratuito com créditos recorrentes.",
      minimumAge: "16+ anos (segundo os termos de serviço oficiais)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Útil para o professor gerar pequenas ilustrações visuais expressivas; respeitar a idade mínima e rever rigor.",
      whatIsFact: "Interpretação detalhada de descrições ricas em texto.",
      whatIsMisleading: "Pode acrescentar elementos cenográficos não solicitados no prompt original."
    }
  },
  {
    id: "pika",
    name: "Pika",
    category: "Animação Criativa e Efeitos Visuais",
    badge: "Animação e Efeitos",
    shortDesc: "O Pika disponibiliza ferramentas de criação e transformação audiovisual com Inteligência Artificial.",
    fullDesc: "O Pika disponibiliza ferramentas de criação e transformação audiovisual com Inteligência Artificial. As funcionalidades dependem do modelo e das opções disponíveis na conta.",
    keyFeatures: [
      "Geração de vídeo a partir de texto",
      "Animação de imagens estáticas e ilustrações",
      "Efeitos visuais de transformação de materiais"
    ],
    inputTypes: ["Texto", "Ilustrações", "Fotografias"],
    freeTierDetails: "O plano Free indicado na página oficial não inclui créditos mensais. A criação pode exigir packs de créditos pagos. Não classificar o Pika como ferramenta com créditos gratuitos recorrentes.",
    limitations: [
      "Não garantir uma quota mensal gratuita.",
      "Não garantir funcionalidades ou durações específicas sem confirmação.",
      "A licença comercial não deve ser presumida no plano gratuito."
    ],
    pedagogicalUseCases: [
      "Animar ilustrações para projetos visuais",
      "Criar efeitos pontuais para introdução de tópicos",
      "Exploração de técnicas visuais em contexto de formação docente"
    ],
    externalUrl: "https://pika.art/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "paid-or-unconfirmed",
    officialSources: [
      { label: "Página Oficial", url: "https://pika.art/" },
      { label: "Preços Oficiais", url: "https://creation.pika.art/pricing" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Plano gratuito sem créditos mensais garantidos",
      minimumAge: "18+ anos (segundo termos consultados)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta para criação e efeitos visuais; confirmar condições de acesso previamente.",
      whatIsFact: "Interface ágil para efeitos de transformação e animação de imagens.",
      whatIsMisleading: "Não disponibiliza quota mensal gratuita garantida no plano base."
    }
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Edição de Vídeo e Legendas Automáticas",
    badge: "Edição e Legendas",
    shortDesc: "O CapCut é um editor de vídeo que disponibiliza ferramentas de montagem, efeitos, áudio, legendagem e funcionalidades de Inteligência Artificial, conforme a versão e o plano.",
    fullDesc: "O CapCut é um editor de vídeo que disponibiliza ferramentas de montagem, efeitos, áudio, legendagem e funcionalidades de Inteligência Artificial, conforme a versão e o plano.",
    keyFeatures: [
      "Edição de vídeo em linha temporal e corte de faixas",
      "Legendagem automática (conforme versão e plano)",
      "Recorte de fundo e efeitos visuais",
      "Exportação para múltiplos formatos"
    ],
    inputTypes: ["Vídeos Gravados", "Áudios", "Fotografias", "Texto"],
    freeTierDetails: "O plano gratuito inclui ferramentas básicas de edição. O plano Pro apresenta funcionalidades adicionais de IA e créditos, de acordo com as condições comerciais e a região. Não assumir que a legendagem automática, a geração de vídeo ou todas as funcionalidades de IA são gratuitas. Não apresentar 300 créditos como oferta permanente.",
    limitations: [
      "A disponibilidade das funções varia por região, versão e plano.",
      "As legendas automáticas têm de ser revistas.",
      "As funcionalidades processadas por IA podem recorrer a serviços externos.",
      "Não afirmar que a instalação local significa que todos os ficheiros são processados localmente."
    ],
    pedagogicalUseCases: [
      "Legendar videoaulas e rever a transcrição para garantir acessibilidade",
      "Montagem de projetos em vídeo preparados pelos estudantes ou docentes",
      "Corte de hesitações e organização de sequências pedagógicas"
    ],
    externalUrl: "https://www.capcut.com/",
    screenshots: [],
    capabilityTags: ["video-editing", "subtitles", "text-to-video"],
    accessType: "free-editor",
    officialSources: [
      { label: "Página Oficial", url: "https://www.capcut.com/" },
      { label: "Preços Oficiais", url: "https://www.capcut.com/pricing/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Editor gratuito com funcionalidades Pro pagas",
      minimumAge: "Consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Editor funcional para montagem e legendas; rever termos de privacidade e exportação antes de partilhar.",
      whatIsFact: "Disponibiliza ferramentas de montagem áudio e vídeo em múltiplas plataformas.",
      whatIsMisleading: "Nem todas as funções de IA ou legendagem são gratuitas em todas as versões."
    }
  },
  {
    id: "canva",
    name: "Canva para Educação",
    category: "Apresentações Multimédia e Vídeo Colaborativo",
    badge: "Ecossistema Escolar",
    shortDesc: "O Canva para Educação é um programa gratuito para professores e instituições elegíveis do ensino primário, básico e secundário, nos termos definidos pelo fornecedor.",
    fullDesc: "O Canva para Educação é um programa gratuito para professores e instituições elegíveis do ensino primário, básico e secundário, nos termos definidos pelo fornecedor. Permite criar apresentações, materiais visuais e conteúdos audiovisuais, incluindo funcionalidades assistidas por IA quando disponibilizadas na conta.",
    keyFeatures: [
      "Criação e edição colaborativa de apresentações e vídeos",
      "Biblioteca de modelos, imagens de arquivo e elementos gráficos",
      "Gravação de apresentações narradas com câmara integrada",
      "Exportação em alta definição sem marca de água na conta educativa"
    ],
    inputTypes: ["Texto", "Apresentações", "Imagens", "Vídeos"],
    freeTierDetails: "A elegibilidade depende dos critérios do fornecedor e da respetiva validação. A gratuitidade do Canva para Educação não significa que todas as funcionalidades de IA ou todas as ferramentas de geração de vídeo estejam disponíveis sem limites.",
    limitations: [
      "Não afirmar '100% gratuito sem restrições'.",
      "Não garantir que todas as funcionalidades de IA estão incluídas.",
      "Não apresentar o Canva como ferramenta automaticamente segura para qualquer turma.",
      "A utilização com alunos deve respeitar os termos, a idade, as configurações institucionais e as orientações da escola."
    ],
    pedagogicalUseCases: [
      "Criação de apresentações multimédia colaborativas com vídeo e texto",
      "Gravação de explicações pelo professor para apoio ao estudo",
      "Trabalhos de grupo com modelos visuais orientados a temas curriculares"
    ],
    externalUrl: "https://www.canva.com/pt_pt/educacao/",
    screenshots: [],
    capabilityTags: ["video-editing", "presentation-video", "screen-recording"],
    accessType: "education-eligibility",
    officialSources: [
      { label: "Canva Educação", url: "https://www.canva.com/pt_pt/educacao/" },
      { label: "Critérios de Elegibilidade", url: "https://www.canva.com/pt_pt/educacao/elegibilidade/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Gratuito para professores e escolas elegíveis",
      minimumAge: "Consultar os termos e as condições aplicáveis à conta educativa e aos utilizadores. Não está estabelecida nesta ficha uma idade mínima universal.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Opção estruturada para trabalho colaborativo escolar quando cumpridos os critérios de elegibilidade.",
      whatIsFact: "Permite criar apresentações multimédia com animação e gravação integrada.",
      whatIsMisleading: "A gratuitidade educativa depende de validação documental institucional e não cobre todo o tipo de entidades."
    }
  },
  {
    id: "perchance",
    name: "Perchance — geradores comunitários",
    category: "Experimentação de conteúdos por docentes adultos",
    badge: "Apenas Adultos (18+)",
    shortDesc: "O Perchance disponibiliza diferentes geradores criados no seu ecossistema comunitário. As funcionalidades, condições de acesso e características de privacidade podem variar entre geradores.",
    fullDesc: "O Perchance disponibiliza diferentes geradores criados no seu ecossistema comunitário. As funcionalidades, condições de acesso e características de privacidade podem variar entre geradores. Os termos gerais consultados restringem a utilização a maiores de 18 anos. Pode ser apresentado apenas como exemplo de exploração individual por docentes adultos, não como ferramenta escolar validada.",
    keyFeatures: [
      "Exploração experimental de geradores da comunidade",
      "Geração pontual sem início de sessão obrigatório em alguns casos",
      "Uso exclusivamente preparatório por docentes adultos"
    ],
    inputTypes: ["Instrução em Texto"],
    freeTierDetails: "Os termos do serviço indicam idade mínima de 18 anos. A ausência de registo em determinados geradores não permite concluir que não exista recolha de informação técnica ou de utilização.",
    limitations: [
      "Não recomendado para utilização direta por alunos.",
      "Não é um produto institucional único de geração de vídeo.",
      "Não garantir estabilidade, moderação ou funcionalidades uniformes nos geradores da comunidade.",
      "Não afirmar que não recolhe dados.",
      "Não afirmar que é seguro, ilimitado ou conforme com o RGPD."
    ],
    pedagogicalUseCases: [
      "Exploração pessoal prévia pelo docente para criação de exemplos ilustrativos",
      "Discussão em formação de adultos sobre geradores abertos e moderação comunitária"
    ],
    externalUrl: "https://perchance.org/ai-text-to-video-generator",
    screenshots: [],
    capabilityTags: ["community-generator", "text-to-video"],
    accessType: "community-experimental",
    officialSources: [
      { label: "Gerador Comunitário de Vídeo", url: "https://perchance.org/ai-text-to-video-generator" },
      { label: "Termos de Serviço", url: "https://perchance.org/terms-of-service" },
      { label: "Política de Privacidade", url: "https://perchance.org/privacy-policy" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Acesso experimental comunitário (18+)",
      minimumAge: "18+ anos (Termos explícitos da plataforma: restrito a adultos)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Exclusivo para exploração individual por docentes adultos; não utilizar em ambiente escolar com alunos.",
      whatIsFact: "Plataforma comunitária de scripts e geradores com comportamento variável.",
      whatIsMisleading: "A ausência de registo prévio não significa ausência de recolha de dados nem conformidade legal para menores."
    }
  },
  {
    id: "clipchamp",
    name: "Microsoft Clipchamp",
    category: "Edição de Vídeo e Narração Assistida",
    badge: "Edição e Narração",
    shortDesc: "O Microsoft Clipchamp é um editor de vídeo que permite organizar sequências, gravar, editar áudio e vídeo e utilizar funcionalidades como legendagem e texto para voz, de acordo com a conta e as opções disponíveis.",
    fullDesc: "O Microsoft Clipchamp é um editor de vídeo que permite organizar sequências, gravar, editar áudio e vídeo e utilizar funcionalidades como legendagem e texto para voz, de acordo com a conta e as opções disponíveis.",
    keyFeatures: [
      "Edição de vídeo em linha temporal e gravação combinada de ecrã e câmara",
      "Funcionalidade de texto para voz (conforme versão e conta)",
      "Legendagem automática com edição manual",
      "Exportação até 1080p sem marca de água na versão pessoal gratuita"
    ],
    inputTypes: ["Gravações de Ecrã", "Ficheiros de Vídeo", "Áudios", "Texto para Voz"],
    freeTierDetails: "A versão pessoal gratuita permite exportar até 1080p sem marca de água. As funcionalidades disponíveis nas contas de trabalho ou educação dependem da licença Microsoft 365 e da configuração institucional.",
    limitations: [
      "A disponibilidade de vozes em Português de Portugal deve ser confirmada na interface e na conta concreta. A existência de uma funcionalidade de texto para voz não garante que todas as variantes linguísticas ou vozes estejam disponíveis.",
      "Recursos adicionais de stock podem exigir subscrição complementar."
    ],
    pedagogicalUseCases: [
      "Gravar tutoriais de ecrã e explicações pedagógicas com a câmara do docente",
      "Editar e montar sequências de vídeo com legendas acessíveis",
      "Criação de narrações de apoio a apresentações educativas"
    ],
    externalUrl: "https://clipchamp.com/",
    screenshots: [],
    capabilityTags: ["video-editing", "screen-recording", "subtitles", "text-to-speech"],
    accessType: "free-editor",
    officialSources: [
      { label: "Página Oficial", url: "https://clipchamp.com/" },
      { label: "Documentação de Texto para Voz", url: "https://support.microsoft.com/pt-pt/clipchamp/how-to-use-the-text-to-speech-feature" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Editor gratuito na versão pessoal (exportação 1080p)",
      minimumAge: "Consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta acessível para gravar ecrã e montar videoaulas; verificar disponibilidade de vozes na conta utilizada.",
      whatIsFact: "Permite exportar até 1080p sem marca de água na versão pessoal e oferece gravação de ecrã.",
      whatIsMisleading: "A disponibilidade de vozes em Português de Portugal depende da conta e do ambiente configurado."
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Apresentadores Virtuais e Avatares",
    badge: "Avatares Falantes",
    shortDesc: "O HeyGen permite criar vídeos com apresentadores virtuais e avatares, a partir de textos e materiais fornecidos pelo utilizador.",
    fullDesc: "O HeyGen permite criar vídeos com apresentadores virtuais e avatares, a partir de textos e materiais fornecidos pelo utilizador.",
    keyFeatures: [
      "Geração de vídeos com personagens virtuais falantes",
      "Sincronização labial a partir de guião em texto",
      "Modelos de apresentador para estúdio e demonstrações"
    ],
    inputTypes: ["Texto de Guião", "Áudio"],
    freeTierDetails: "O plano gratuito consultado apresenta três vídeos por mês, até um minuto cada, com marca de água. Os termos indicam utilização a partir dos 18 anos.",
    limitations: [
      "Não recomendar utilização direta por menores.",
      "Não garantir sincronização labial perfeita.",
      "Não utilizar imagens ou vozes de pessoas reais sem as autorizações e validações aplicáveis.",
      "As funcionalidades variam conforme o plano."
    ],
    pedagogicalUseCases: [
      "Simulação de introdução de um tema pelo professor através de um avatar fictício",
      "Demonstração de regras gerais ou avisos em ambiente de formação de professores"
    ],
    externalUrl: "https://www.heygen.com/",
    screenshots: [],
    capabilityTags: ["avatars", "text-to-speech"],
    accessType: "limited-free-plan",
    officialSources: [
      { label: "Página Oficial", url: "https://www.heygen.com/" },
      { label: "Preços Oficiais", url: "https://www.heygen.com/pricing" },
      { label: "Termos de Serviço", url: "https://www.heygen.com/terms" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Plano gratuito muito limitado (3 vídeos/mês de 1 min)",
      minimumAge: "18+ anos (segundo os termos oficiais do serviço)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Adequado para pequenas demonstrações preparadas pelo docente adulto; plano gratuito restrito.",
      whatIsFact: "Gera personagens virtuais animadas a partir de texto.",
      whatIsMisleading: "Não deve ser utilizado diretamente por alunos nem garante sincronização labial perfeita."
    }
  },
  {
    id: "vidnoz",
    name: "Vidnoz AI",
    category: "Avatares Virtuais e Apresentações",
    badge: "Avatares e Modelos",
    shortDesc: "O Vidnoz AI disponibiliza ferramentas de criação de vídeo com avatares e funcionalidades assistidas por Inteligência Artificial.",
    fullDesc: "O Vidnoz AI disponibiliza ferramentas de criação de vídeo com avatares e funcionalidades assistidas por Inteligência Artificial.",
    keyFeatures: [
      "Criação de vídeos com avatares e diapositivos didáticos",
      "Opções de diálogo com personagens virtuais (conforme o plano)",
      "Biblioteca de modelos temáticos"
    ],
    inputTypes: ["Texto", "Guião Didático", "Imagens"],
    freeTierDetails: "Os termos consultados indicam que a criação de uma conta exige pelo menos 18 anos. A página de preços apresenta opções gratuitas e pagas, mas não deve ser apresentada nesta ficha uma quota diária fixa que não esteja confirmada na documentação oficial.",
    limitations: [
      "Utilização individual pelo professor adulto.",
      "Não recomendar a criação de contas por alunos.",
      "Confirmar limites, resolução, marca de água e exportação na conta concreta.",
      "Não garantir funcionalidades não documentadas."
    ],
    pedagogicalUseCases: [
      "Criação de simulações com avatares didáticos para abertura de módulos",
      "Apresentações curtas em vídeo preparadas pelo docente"
    ],
    externalUrl: "https://pt.vidnoz.com/",
    screenshots: [],
    capabilityTags: ["avatars", "text-to-speech"],
    accessType: "limited-free-plan",
    officialSources: [
      { label: "Página Oficial", url: "https://pt.vidnoz.com/" },
      { label: "Termos de Serviço", url: "https://pt.vidnoz.com/termos.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Opções gratuitas com limites e opções pagas",
      minimumAge: "18+ anos para criação de conta (termos oficiais)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta para criação de avatares didáticos por docentes adultos; verificar limites de exportação.",
      whatIsFact: "Oferece criação de vídeos com personagens virtuais a partir de texto.",
      whatIsMisleading: "As contas e opções gratuitas têm restrições de resolução e marcas de água."
    }
  },
  {
    id: "google-flow",
    name: "Google Flow",
    category: "Geração de vídeo com IA",
    badge: "Google Labs",
    shortDesc: "O Google Flow é um espaço de criação audiovisual com Inteligência Artificial que permite gerar e trabalhar com clipes a partir de instruções escritas, imagens e outros elementos de referência.",
    fullDesc: "O Google Flow é um espaço de criação audiovisual com Inteligência Artificial que permite gerar e trabalhar com clipes a partir de instruções escritas, imagens e outros elementos de referência. As opções disponíveis dependem do modelo selecionado.",
    keyFeatures: [
      "Geração de vídeo a partir de texto",
      "Geração de vídeo a partir de imagens",
      "Utilização de imagens de referência, conforme o modelo",
      "Ferramentas de organização e continuidade de cenas, conforme a versão"
    ],
    inputTypes: ["Instrução em Texto", "Imagens de Referência"],
    freeTierDetails: "A documentação oficial consultada em 9 de novembro de 2026 indica 50 créditos gratuitos por dia, para utilizadores com ou sem subscrição. O número de créditos consumidos varia conforme o modelo e a geração. Em períodos de maior utilização, a geração de vídeo pode ficar temporariamente indisponível para utilizadores sem subscrição.",
    limitations: [
      "Os créditos são consumidos de forma diferente consoante o modelo.",
      "Não garantir um número fixo de vídeos por dia.",
      "A ferramenta não assegura rigor científico ou histórico.",
      "O professor deve validar os resultados.",
      "Não recomendar utilização autónoma por menores."
    ],
    pedagogicalUseCases: [
      "Geração de clipes visuais ilustrativos para conceitos científicos ou históricos pelo docente",
      "Exploração de continuidade visual a partir de imagens de referência"
    ],
    externalUrl: "https://labs.google/fx/pt-pt/tools/flow",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video", "video-to-video"],
    accessType: "recurring-free-credits",
    officialSources: [
      { label: "Página Oficial Google Flow", url: "https://labs.google/fx/pt-pt/tools/flow" },
      { label: "Documentação de Créditos", url: "https://support.google.com/flow/answer/16526234?hl=en" },
      { label: "Disponibilidade e Línguas", url: "https://support.google.com/flow/answer/16353544?hl=en" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "50 créditos diários gratuitos (sujeito a disponibilidade)",
      minimumAge: "18+ anos",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Espaço de experimentação generativa para professores adultos; útil para criar clipes curtos ilustrativos com imagens de apoio.",
      whatIsFact: "Disponibiliza modelos generativos da Google com créditos diários renováveis.",
      whatIsMisleading: "Em picos de utilização a geração sem subscrição pode estar temporariamente suspensa; requer validação factual."
    }
  },
  {
    id: "google-vids",
    name: "Google Vids",
    category: "Criação e edição de vídeo assistida por IA",
    badge: "Google Workspace",
    shortDesc: "O Google Vids é uma ferramenta de criação e edição de vídeos que integra funcionalidades de Inteligência Artificial. Permite organizar cenas e gerar pequenos clipes para projetos.",
    fullDesc: "O Google Vids é uma ferramenta de criação e edição de vídeos que integra funcionalidades de Inteligência Artificial. Permite organizar cenas, trabalhar com materiais audiovisuais e gerar pequenos clipes para integrar em projetos de vídeo.",
    keyFeatures: [
      "Criação e edição de vídeos",
      "Organização de cenas",
      "Integração de elementos visuais e audiovisuais",
      "Geração de pequenos clipes com modelos disponibilizados pela Google"
    ],
    inputTypes: ["Documentos", "Guiões", "Imagens", "Vídeos"],
    freeTierDetails: "Em 5 de novembro de 2026, a Google anunciou que utilizadores com uma conta Google ou subscrição Google Workspace podem gerar gratuitamente até três vídeos de 15 segundos por mês com o modelo Omni 1.2 Flash. A disponibilidade em contas escolares pode depender da licença e das configurações do administrador.",
    limitations: [
      "A quantidade mensal de vídeos é limitada.",
      "O clipe gerado não equivale a um vídeo educativo completo.",
      "O professor deve montar, rever e contextualizar o resultado.",
      "Não assumir que todas as funcionalidades estão disponíveis em qualquer conta escolar."
    ],
    pedagogicalUseCases: [
      "Preparação de apresentações e vídeos didáticos com estrutura por cenas",
      "Integração de rascunhos audiovisuais a partir de documentos de trabalho"
    ],
    externalUrl: "https://vids.new/",
    screenshots: [],
    capabilityTags: ["video-editing", "presentation-video", "text-to-video"],
    accessType: "limited-free-plan",
    officialSources: [
      { label: "Aplicação Google Vids", url: "https://vids.new/" },
      { label: "Anúncio Oficial", url: "https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Até 3 vídeos de 15s por mês com modelo Omni 1.2 Flash",
      minimumAge: "Consultar termos da conta Google/Workspace escolar aplicável.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta de criação de apresentações em vídeo integrada no ecossistema Google; verificar permissões da conta escolar.",
      whatIsFact: "Permite estruturar guiões por cenas e gerar pequenos clipes com IA no ecossistema Google Workspace.",
      whatIsMisleading: "A quota gratuita mensal de geração por IA é reduzida e não substitui a montagem e revisão pedagógica."
    }
  },
  {
    id: "pixverse",
    name: "PixVerse",
    category: "Geração de vídeo com IA",
    badge: "Créditos Diários",
    shortDesc: "O PixVerse é uma plataforma de criação de vídeos com IA, com funcionalidades de geração a partir de texto e imagem e diferentes opções de transformação audiovisual.",
    fullDesc: "O PixVerse é uma plataforma de criação de vídeos com IA, com funcionalidades de geração a partir de texto e imagem e diferentes opções de transformação audiovisual.",
    keyFeatures: [
      "Geração de vídeo a partir de instruções em texto",
      "Transformação de fotografias e ilustrações em vídeo dinâmico",
      "Opções de controlo de movimento e efeitos audiovisuais"
    ],
    inputTypes: ["Texto", "Imagens estáticas"],
    freeTierDetails: "A documentação oficial consultada indica 30 créditos diários gratuitos para utilizadores não membros e 60 créditos para membros. Os créditos são renovados às 00:00 UTC e os créditos não utilizados expiram no final do dia. O custo de cada vídeo depende do modelo, resolução e duração selecionados.",
    limitations: [
      "Os créditos não transitam para o dia seguinte.",
      "Não garantir o número de vídeos produzidos com os créditos.",
      "A duração e a resolução consomem quantidades diferentes.",
      "As saídas devem ser revistas pelo professor."
    ],
    pedagogicalUseCases: [
      "Criação de pequenos clipes ilustrativos para enriquecer explicações em sala",
      "Dar movimento a ilustrações didáticas preparadas pelo professor"
    ],
    externalUrl: "https://pixverse.ai/en",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video", "video-to-video"],
    accessType: "recurring-free-credits",
    officialSources: [
      { label: "Página Oficial PixVerse", url: "https://pixverse.ai/en" },
      { label: "FAQ Oficial", url: "https://docs.pixverse.ai/FAQ-PixVerse-App-1533e99bf35080888cb5effee85f8289" },
      { label: "Termos de Serviço", url: "https://pixverse.ai/en/terms-of-service" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "30 créditos diários gratuitos (renovados diariamente às 00:00 UTC)",
      minimumAge: "16+ anos (segundo os termos oficiais; supervisão parental prevista para menores de 16)",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Plataforma acessível para o professor adulto gerar clipes curtos diários; validar os conteúdos antes da aula.",
      whatIsFact: "Disponibiliza créditos gratuitos que renovam diariamente para criação de pequenos vídeos.",
      whatIsMisleading: "Os créditos diários não acumulam e o consumo varia com a resolução e o modelo selecionados."
    }
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly — Vídeo",
    category: "Geração e edição de vídeo com IA",
    badge: "Adobe Creative",
    shortDesc: "O Adobe Firefly disponibiliza ferramentas generativas de imagem e vídeo, incluindo criação de vídeo a partir de texto e imagem.",
    fullDesc: "O Adobe Firefly disponibiliza ferramentas generativas de imagem e vídeo, incluindo criação de vídeo a partir de texto e imagem. A disponibilidade de modelos e operações depende da conta e dos créditos generativos.",
    keyFeatures: [
      "Texto para vídeo",
      "Imagem para vídeo",
      "Ferramentas generativas de vídeo, de acordo com o modelo",
      "Integração com outras ferramentas Adobe, conforme a conta"
    ],
    inputTypes: ["Texto", "Fotografias e Imagens de Referência"],
    freeTierDetails: "Os utilizadores gratuitos têm acesso limitado a funcionalidades generativas, com limites diários que podem mudar. Não está indicada nesta ficha uma quota fixa específica para geração de vídeo. Os créditos consumidos dependem da funcionalidade e do modelo.",
    limitations: [
      "Não apresentar um número fixo de gerações de vídeo gratuitas.",
      "Algumas funcionalidades exigem plano ou créditos.",
      "Alguns modelos pertencem a fornecedores parceiros; não generalizar a todos as condições de utilização e direitos dos modelos próprios da Adobe.",
      "Confirmar as condições de carregamento de conteúdos e idade mínima aplicável.",
      "Não recomendar o carregamento de materiais pessoais de alunos."
    ],
    pedagogicalUseCases: [
      "Geração de clipes visuais temáticos com controlo estético pelo docente",
      "Criação de fundos e atmosferas visuais para projetos multimédia"
    ],
    externalUrl: "https://firefly.adobe.com/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video", "video-to-video"],
    accessType: "limited-free-plan",
    officialSources: [
      { label: "Adobe Firefly", url: "https://firefly.adobe.com/" },
      { label: "Gerador de Vídeo Firefly", url: "https://www.adobe.com/pt/products/firefly/features/ai-video-generator.html" },
      { label: "FAQ de Créditos Generativos", url: "https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Acesso gratuito limitado com créditos generativos",
      minimumAge: "Consultar os termos de utilização da Adobe Creative Cloud.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Opção para criação generativa com foco visual; verificar créditos e termos da conta institucional.",
      whatIsFact: "Permite gerar clipes a partir de texto e imagens no ambiente criativo da Adobe.",
      whatIsMisleading: "Nem todas as funções ou modelos de vídeo estão disponíveis sem limites nas contas gratuitas."
    }
  },
  {
    id: "runway",
    name: "Runway",
    category: "Geração e transformação de vídeo com IA",
    badge: "Geração e Efeitos",
    shortDesc: "O Runway é uma plataforma de criação audiovisual com Inteligência Artificial, com ferramentas de geração, transformação e edição de vídeo.",
    fullDesc: "O Runway é uma plataforma de criação audiovisual com Inteligência Artificial, com ferramentas de geração, transformação e edição de vídeo.",
    keyFeatures: [
      "Geração de vídeo a partir de texto e de imagem",
      "Ferramentas de transformação de estilo e composição de movimento",
      "Edição e efeitos visuais com modelos generativos"
    ],
    inputTypes: ["Texto", "Imagens", "Vídeos"],
    freeTierDetails: "O plano gratuito consultado disponibiliza 125 créditos uma única vez e 5 GB de armazenamento. Os créditos não são renovados mensalmente. Os vídeos produzidos no plano gratuito incluem marca de água. Os modelos disponíveis no plano podem mudar.",
    limitations: [
      "Trata-se de uma experiência gratuita pontual, não de uma quota gratuita recorrente.",
      "Não apresentar os 125 créditos como créditos mensais ou diários.",
      "Não assumir que os modelos atuais permanecerão disponíveis.",
      "Confirmar direitos de utilização e condições antes de publicar materiais."
    ],
    pedagogicalUseCases: [
      "Exploração pontual de técnicas generativas audiovisuais pelo docente",
      "Análise de transformação e movimento de vídeo em formação de professores"
    ],
    externalUrl: "https://runwayml.com/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video", "video-to-video"],
    accessType: "one-time-free-trial",
    officialSources: [
      { label: "Página Oficial Runway", url: "https://runwayml.com/" },
      { label: "Detalhes do Plano Gratuito", url: "https://help.runwayml.com/hc/en-us/articles/50404627334547-Free-plan-details" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "125 créditos pontuais de teste (não recorrentes)",
      minimumAge: "Consultar os termos oficiais de serviço do Runway.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Adequado para experimentação pontual pelo docente; não conta com créditos recorrentes gratuitos.",
      whatIsFact: "Disponibiliza 125 créditos uma única vez para experimentar a plataforma.",
      whatIsMisleading: "Os créditos não se renovam mensalmente e os vídeos no plano de teste incluem marca de água."
    }
  }
];

// ALTERNATIVAS GRATUITAS DE EDIÇÃO E GRAVAÇÃO — SEM GERAÇÃO DE IA (Secção Separada)
export const NON_AI_TOOLS: NonAiToolItem[] = [
  {
    id: "shotcut",
    name: "Shotcut",
    category: "Edição de vídeo — sem geração de IA",
    description: "Editor de vídeo gratuito e de código aberto, disponível para diferentes sistemas operativos. Permite organizar sequências de vídeo e áudio e produzir um ficheiro final sem depender de créditos de geração de IA.",
    externalUrl: "https://shotcut.org/",
    pedagogicalUseCases: [
      "Editar vídeos produzidos pelos alunos ou pelo professor",
      "Montar excertos e ajustar faixas de áudio",
      "Organizar sequências audiovisuais completas com rigor"
    ]
  },
  {
    id: "openshot",
    name: "OpenShot",
    category: "Edição de vídeo — sem geração de IA",
    description: "Editor de vídeo gratuito e de código aberto, com funcionalidades de montagem de vídeo, imagem, áudio, títulos e transições.",
    externalUrl: "https://www.openshot.org/pt/",
    pedagogicalUseCases: [
      "Montar pequenos documentários escolares",
      "Editar entrevistas e apresentações narradas",
      "Vídeos realizados em contexto de projeto de turma"
    ]
  },
  {
    id: "obs",
    name: "OBS Studio",
    category: "Gravação de ecrã, câmara e áudio — sem geração de IA",
    description: "Software gratuito e de código aberto para gravação de ecrã, câmara e áudio e transmissão em direto. Não é um editor de vídeo.",
    externalUrl: "https://obsproject.com/",
    pedagogicalUseCases: [
      "Gravar tutoriais e demonstrações de software educativo",
      "Explicar a resolução de exercícios ou problemas no ecrã",
      "Apresentações e explicações narradas pelo professor"
    ]
  }
];

// 5. ATIVIDADES NA AULA — CINCO PROPOSTAS PRÁTICAS
export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: "apresentador-virtual",
    number: 1,
    title: "Criar um Apresentador Virtual",
    discipline: "Ciências Naturais",
    year: "5.º ano",
    duration: "1 aula de 50 minutos.",
    tool: "Vidnoz AI",
    usageMode: "Texto para vídeo com avatar virtual.",
    freeAccess: "O Vidnoz disponibiliza créditos diários gratuitos. O plano gratuito permite vídeos até 3 minutos e exportação até 720p, com limitações próprias.",
    challenge: "Criar um apresentador virtual que explique os três estados físicos da água.",
    howToSteps: [
      "1. Os alunos preparam e verificam um pequeno texto sobre os estados físicos da água.",
      "2. O professor abre o Vidnoz AI, seleciona um avatar adulto da biblioteca e escolhe uma voz.",
      "3. Introduz o texto no campo de guião (Script/Enter Script) e gera o vídeo."
    ],
    copyItems: [
      {
        id: "vidnoz-script",
        label: "Copiar guião",
        title: "Texto para Introduzir no Vidnoz",
        content: "«Olá! Hoje vamos conhecer os três estados físicos da água. O gelo é água no estado sólido. A água que colocamos num copo está no estado líquido. A água também pode existir no estado gasoso, sob a forma de vapor de água, que é invisível. Quando o gelo derrete, ocorre a fusão. Quando a água líquida passa ao estado gasoso, ocorre a vaporização.»",
        note: "Utilizar exatamente este texto como guião de fala, não como instrução genérica de geração."
      }
    ],
    expectedResult: "Um pequeno vídeo com um apresentador virtual a explicar os estados físicos da água.",
    validationNotes: [
      "A conta Vidnoz exige 18 anos. O professor deve operar a ferramenta, utilizando um avatar adulto da biblioteca, sem criar representações de alunos.",
      "A explicação científica deve manter a distinção entre vapor de água, que é invisível, e as pequenas gotículas que constituem uma nuvem ou nevoeiro."
    ]
  },
  {
    id: "video-a-partir-de-ideia",
    number: 2,
    title: "Criar um Vídeo a Partir de uma Ideia",
    discipline: "Geografia / Cidadania",
    year: "5.º ao 9.º ano",
    duration: "1 aula de 50 minutos.",
    tool: "PixVerse",
    usageMode: "Texto para vídeo (Text to Video).",
    freeAccess: "60 créditos iniciais e 30 créditos diários para utilizadores não subscritores, no plano Basic. O custo da geração depende das opções selecionadas.",
    challenge: "Transformar uma descrição escrita numa cena audiovisual sobre uma cidade sustentável.",
    howToSteps: [
      "1. Os alunos identificam elementos que caracterizam uma cidade sustentável.",
      "2. Organizam as ideias numa descrição curta.",
      "3. O professor abre o PixVerse, seleciona Text to Video e introduz o prompt seguinte."
    ],
    copyItems: [
      {
        id: "pixverse-text-prompt",
        label: "Copiar prompt",
        title: "Prompt para PixVerse",
        content: `A single continuous wide shot of a small Portuguese town designed for sustainable mobility.

Show a clearly marked bicycle lane, pedestrians on wide pavements, street trees, a small public garden and solar panels on rooftops.

One cyclist moves slowly along the bicycle lane while leaves move gently in the breeze.

Natural morning light, realistic educational visual, steady camera with a slow forward movement.

Keep the scene calm and visually simple.

No readable signs, text, logos or close-up faces.`,
        note: "Utilizar o texto em inglês."
      }
    ],
    recommendedSettings: [
      "Duração: 5 segundos.",
      "Formato: horizontal, 16:9.",
      "Áudio: desligado.",
      "Resolução e qualidade: selecionar a opção de menor consumo de créditos disponível.",
      "Gerações: uma única tentativa inicial."
    ],
    expectedResult: "Um pequeno vídeo criado a partir de uma descrição escrita.",
    validationNotes: [
      "Os créditos diários renovam-se segundo as condições da plataforma. Confirmar o custo apresentado antes de carregar em Generate. Não gerar versões adicionais desnecessariamente."
    ]
  },
  {
    id: "dar-vida-a-ilustracao",
    number: 3,
    title: "Dar Vida a uma Ilustração",
    discipline: "Português / Educação Visual",
    year: "1.º e 2.º ciclos",
    duration: "1 aula de 50 minutos.",
    tool: "PixVerse",
    usageMode: "Imagem para vídeo (Image to Video).",
    freeAccess: "Utilizar os créditos diários do plano Basic.",
    challenge: "Criar uma personagem ilustrada e transformá-la numa pequena animação.",
    howToSteps: [
      "1. Os alunos criam uma personagem original através de um desenho ou ilustração.",
      "2. Selecionam a imagem que pretendem animar.",
      "3. O professor carrega a imagem no PixVerse, seleciona Image to Video e introduz apenas as instruções de movimento."
    ],
    copyItems: [
      {
        id: "pixverse-image-prompt",
        label: "Copiar prompt",
        title: "Prompt para PixVerse",
        content: `Use the uploaded drawing as the exact first frame and visual reference.

The illustrated character blinks once, slowly raises one hand and gives one gentle wave.

Keep the character's face, colours, proportions, linework, clothing and background unchanged.

Locked camera, subtle natural movement, one continuous short shot.

Do not add objects, characters, text or new details.`
      }
    ],
    recommendedSettings: [
      "Duração: 5 segundos.",
      "Formato: horizontal.",
      "Áudio: desligado.",
      "Qualidade: opção de menor consumo de créditos.",
      "Gerações: uma única tentativa inicial."
    ],
    expectedResult: "Uma personagem original transformada numa pequena animação.",
    validationNotes: [
      "Neste modo, a imagem carregada já define a personagem e a composição. O prompt deve concentrar-se apenas nos movimentos desejados. Utilizar desenhos originais ou imagens devidamente autorizadas."
    ]
  },
  {
    id: "video-educativo-legendas",
    number: 4,
    title: "Criar um Vídeo Educativo e Acrescentar Legendas",
    discipline: "Ciências Naturais",
    year: "5.º ou 6.º ano",
    duration: "2 aulas de 50 minutos.",
    tool: "Canva — Magic Video e Legendas editáveis",
    usageMode: "Criação assistida por IA a partir de imagens e clips + legendagem automática.",
    freeAccess: "O Canva Magic Video está incluído nos planos gratuitos. Permite utilizar entre 1 e 10 fotografias ou clips para criar um vídeo de até 60 segundos.",
    challenge: "Criar um pequeno vídeo educativo sobre a polinização e acrescentar narração e legendas automáticas.",
    stages: [
      {
        title: "Etapa 1 — Preparar os materiais",
        description: "Os alunos selecionam, com apoio do professor, quatro imagens ou clips:",
        steps: [
          "1. Uma flor com as estruturas reprodutoras identificadas num esquema científico validado.",
          "2. Uma abelha a visitar uma flor.",
          "3. Uma imagem que mostre grãos de pólen no corpo de um inseto.",
          "4. Uma abelha a visitar outra flor da mesma espécie."
        ],
        tip: "Utilizar imagens próprias ou com licença adequada."
      },
      {
        title: "Etapa 2 — Criar o vídeo com Magic Video",
        steps: [
          "1. Abrir o Canva.",
          "2. Aceder ao Magic Video.",
          "3. Carregar as quatro imagens ou clips, pela ordem pretendida.",
          "4. Introduzir as instruções seguintes, caso a ferramenta disponibilize um campo de descrição:"
        ],
        copyItem: {
          id: "canva-magic-instructions",
          label: "Copiar instruções",
          title: "Instruções para o Canva Magic Video",
          content: `Cria um vídeo educativo horizontal sobre a polinização, utilizando exclusivamente as imagens e os clips carregados e respeitando a sua ordem.

Apresenta primeiro a flor e o esquema das suas estruturas reprodutoras; depois, uma abelha a visitar uma flor; em seguida, uma imagem que mostre pólen no corpo de um inseto; e, por fim, outra flor da mesma espécie.

Usa transições simples, ritmo calmo e tempo suficiente para observar cada imagem.

Mantém os elementos científicos das imagens originais.

Não inventes etiquetas, nomes de estruturas, setas ou explicações científicas.

Evita efeitos visuais que dificultem a observação.`
        },
        tip: "Gerar o vídeo e verificar a sequência, os cortes e a visibilidade de cada imagem."
      },
      {
        title: "Etapa 3 — Acrescentar a narração",
        description: "Utilizar a funcionalidade de gravação de voz do Canva. Caminho possível: Áudio → Voiceovers → Record voiceover. O professor ou os alunos, conforme a organização da atividade, gravam a narração seguinte:",
        copyItem: {
          id: "canva-voiceover-text",
          label: "Copiar texto da narração",
          title: "Texto da Narração",
          content: "«A polinização é a transferência dos grãos de pólen das anteras para o estigma da mesma flor ou de outra flor da mesma espécie. O pólen pode ser transportado pelo vento ou por animais, como as abelhas. Quando uma abelha visita uma flor, alguns grãos de pólen podem ficar presos ao seu corpo e ser transportados para outra flor. A polinização não é o mesmo que a fecundação: é um processo anterior que pode permitir que esta ocorra.»"
        },
        tip: "Ajustar a duração das imagens à narração. Remover ou reduzir a música automática, caso dificulte a audição da voz."
      },
      {
        title: "Etapa 4 — Gerar legendas automáticas",
        steps: [
          "1. Abrir o projeto de vídeo com a narração concluída.",
          "2. Aceder a Texto → Texto dinâmico → Legendas (ou Aplicações → Captions, conforme a interface).",
          "3. Selecionar o áudio ou vídeo com a fala.",
          "4. Selecionar Português como língua de transcrição.",
          "5. Gerar as legendas automáticas.",
          "6. Rever o texto, corrigir eventuais erros e ajustar a sincronização.",
          "7. Escolher um estilo legível, com bom contraste e tamanho adequado."
        ],
        tip: "Dar especial atenção à grafia e à sincronização das palavras «polinização», «anteras», «estigma» e «fecundação». Utilizar as legendas editáveis integradas no vídeo, não apenas as legendas de acessibilidade que servem para visualização."
      },
      {
        title: "Etapa 5 — Exportar",
        description: "Exportar o vídeo final em MP4, verificando se a narração e as legendas estão corretamente sincronizadas."
      }
    ],
    expectedResult: "Um vídeo educativo com imagens organizadas por IA, narração e legendas automáticas revistas pelo professor.",
    validationNotes: [
      "A polinização corresponde à transferência de grãos de pólen das anteras para o estigma da mesma flor ou de outra flor da mesma espécie.",
      "A polinização pode ocorrer através de agentes como insetos e vento.",
      "Não confundir polinização com fecundação. A transferência do pólen antecede os processos que podem conduzir à fecundação e à formação de sementes.",
      "O esquema e as fotografias devem ser cientificamente corretos. As legendas automáticas devem ser revistas antes da utilização."
    ],
    toolImportantNote: "Esta atividade utiliza Canva Magic Video, e não Canva AI Video Clip. O Magic Video organiza imagens e clips fornecidos pelo utilizador. Não gera, a partir de texto, todas as imagens do vídeo. O AI Video Clip é uma funcionalidade diferente, sujeita a condições de acesso Ultra AI e quotas próprias. Não a apresentar como requisito desta atividade."
  },
  {
    id: "microconto-video-narrado",
    number: 5,
    title: "Transformar um Microconto num Vídeo Narrado",
    discipline: "Português",
    year: "2.º e 3.º ciclos",
    duration: "1 aula de 50 minutos.",
    tool: "Fliki",
    usageMode: "Texto para vídeo / Script to Video.",
    freeAccess: "Plano gratuito com 3 créditos por mês, exportação até 720p e marca de água. O consumo depende da operação e da duração. Confirmar o saldo antes de gerar.",
    challenge: "Transformar um microconto original num vídeo com cenas ilustradas e narração.",
    howToSteps: [
      "1. Os alunos leem o microconto e identificam as três partes da narrativa.",
      "2. Organizam o texto em três cenas.",
      "3. O professor abre o Fliki, escolhe Script to Video e introduz o texto seguinte."
    ],
    copyItems: [
      {
        id: "fliki-scene-1",
        label: "Copiar Cena 1",
        title: "Cena 1",
        content: "«No último dia de aulas, Inês encontrou um envelope dentro de um livro da biblioteca. O envelope não tinha remetente, mas tinha o seu nome escrito à mão.»"
      },
      {
        id: "fliki-scene-2",
        label: "Copiar Cena 2",
        title: "Cena 2",
        content: "«Dentro do envelope encontrou uma mensagem: “As histórias continuam vivas quando alguém as lê e partilha.” Inês olhou para as estantes e imaginou quantas aventuras estariam escondidas naqueles livros.»"
      },
      {
        id: "fliki-scene-3",
        label: "Copiar Cena 3",
        title: "Cena 3",
        content: "«No dia seguinte, escreveu uma continuação da história, leu-a aos colegas e convidou cada um a acrescentar uma frase. Assim nasceu uma nova história, escrita por toda a turma.»"
      },
      {
        id: "fliki-script-all",
        label: "Copiar guião completo",
        title: "Guião Completo (3 Cenas)",
        content: `Cena 1
«No último dia de aulas, Inês encontrou um envelope dentro de um livro da biblioteca. O envelope não tinha remetente, mas tinha o seu nome escrito à mão.»

Cena 2
«Dentro do envelope encontrou uma mensagem: “As histórias continuam vivas quando alguém as lê e partilha.” Inês olhou para as estantes e imaginou quantas aventuras estariam escondidas naqueles livros.»

Cena 3
«No dia seguinte, escreveu uma continuação da história, leu-a aos colegas e convidou cada um a acrescentar uma frase. Assim nasceu uma nova história, escrita por toda a turma.»`,
        note: "Introduzir o conteúdo seguinte, mantendo as três cenas separadas."
      }
    ],
    recommendedSettings: [
      "Selecionar Script to Video.",
      "Manter as três cenas separadas.",
      "Escolher uma voz em Português de Portugal, se disponível.",
      "Selecionar imagens ou clips adequados a cada cena.",
      "Evitar a expansão automática do texto.",
      "Não gerar novas versões sem verificar primeiro os créditos disponíveis."
    ],
    expectedResult: "Um pequeno vídeo narrativo com três cenas, imagens de apoio e voz sintética.",
    validationNotes: [
      "Confirmar que a narração corresponde ao texto original e que as imagens respeitam a sequência narrativa. Não atribuir a autoria do texto a uma pessoa real."
    ]
  }
];

// 6. REFERÊNCIAS BIBLIOGRÁFICAS ACADÉMICAS (Norma APA 7.ª Edição)
export const BIBLIOGRAPHY: BibliographyEntry[] = [
  {
    citation: "Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.",
    author: "Anderson & Krathwohl",
    year: 2001,
    title: "A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy",
    source: "Longman",
    category: "Taxonomia de Aprendizagem",
    relevanceToEducation: "A revisão científica que transformou os substantivos estáticos de 1956 em verbos de ação e colocou 'Criar' no vértice do processo de aprendizagem.",
    criticalAnalysis: "Crucial para a formação: o vídeo com IA só tem valor pedagógico real quando capacita os estudantes a criarem e articularem ideias próprias, em vez de consumirem passivamente clipes sintéticos."
  },
  {
    citation: "Bloom, B. S. (Ed.). (1956). Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain. David McKay Company.",
    author: "Bloom",
    year: 1956,
    title: "Taxonomy of Educational Objectives: Handbook I: Cognitive Domain",
    source: "David McKay Company",
    category: "Taxonomia de Aprendizagem",
    relevanceToEducation: "O marco histórico da categorização dos objetivos educacionais clássicos do pós-guerra.",
    criticalAnalysis: "É fundamental esclarecer os professores de que na versão original de 1956 a categoria de topo era a 'Avaliação', e não a 'Criação'. A pedagogia contemporânea apoia-se na revisão de 2001."
  },
  {
    citation: "Bruner, J. S. (1996). The culture of education. Harvard University Press.",
    author: "Bruner",
    year: 1996,
    title: "The Culture of Education",
    source: "Harvard University Press",
    category: "Taxonomia de Aprendizagem",
    relevanceToEducation: "Fundamenta a teoria da aprendizagem por descoberta e a importância das narrativas culturais e da mediação humana no processo educativo.",
    criticalAnalysis: "Lembra-nos de que a tecnologia é uma prótese cultural: as máquinas podem simular voz e imagem, mas o sentido e a intencionalidade pedagógica só existem na relação humana entre professor e aluno."
  },
  {
    citation: "Holmes, W., Bialik, M., & Fadel, C. (2019). Artificial intelligence in education: Promises and implications for teaching and learning. Center for Curriculum Redesign.",
    author: "Holmes, Bialik & Fadel",
    year: 2019,
    title: "Artificial Intelligence in Education: Promises and Implications for Teaching and Learning",
    source: "Center for Curriculum Redesign",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Obra de referência sobre o papel da inteligência artificial na escola, distinguindo ferramentas pedagógicas úteis de modismos passageiros.",
    criticalAnalysis: "Defende que a IA deve libertar o professor de tarefas burocráticas e repetitivas para que este se possa concentrar no acompanhamento afetivo e individualizado dos alunos."
  },
  {
    citation: "Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., Gasser, U., Groh, G., Günnemann, S., Hüllermeier, E., Krusche, S., Kutyniok, G., Michaeli, T., Nerdel, C., Pfeffer, J., Poquet, O., Sailer, M., Schmidt, A., Seidel, T., ... Kasneci, G. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274. https://doi.org/10.1016/j.lindif.2023.102274",
    author: "Kasneci et al.",
    year: 2023,
    title: "ChatGPT for Good? On Opportunities and Challenges of Large Language Models for Education",
    source: "Learning and Individual Differences",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Estudo abrangente sobre as oportunidades e riscos dos modelos generativos na autonomia, motivação e avaliação dos alunos.",
    criticalAnalysis: "Sublinha a urgência de ensinar literacia de IA aos jovens para evitar a dependência acrítica e a perda de capacidade de esforço no pensamento analítico profundo."
  },
  {
    citation: "Mayer, R. E. (2020). Multimedia learning (3.ª ed.). Cambridge University Press. https://doi.org/10.1017/9781316941355",
    author: "Mayer",
    year: 2020,
    title: "Multimedia Learning (3.ª ed.)",
    source: "Cambridge University Press",
    category: "Teoria Cognitiva & Multimédia",
    relevanceToEducation: "A terceira edição de 2020 apresenta 15 princípios de conceção de materiais de aprendizagem multimédia, fundamentados em investigação experimental sobre a aprendizagem com palavras e imagens.",
    criticalAnalysis: "A obra apresenta princípios fundamentados para orientar a conceção de materiais multimédia. A sua aplicação deve considerar o objetivo de aprendizagem, as características dos alunos, os conhecimentos prévios e as necessidades de acessibilidade. Os princípios não devem ser transformados em proibições absolutas de utilização de texto, legendas ou imagens."
  },
  {
    citation: "OECD. (2023). OECD Digital Education Outlook 2023: Towards an Effective Digital Education Ecosystem. OECD Publishing. https://doi.org/10.1787/c74f03de-en",
    author: "OCDE",
    year: 2023,
    title: "OECD Digital Education Outlook 2023: Towards an Effective Digital Education Ecosystem",
    source: "OECD Publishing",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Relatório que analisa os ecossistemas nacionais de educação digital, incluindo infraestruturas, plataformas, governação, utilização de dados e a forma como os países mobilizam as competências digitais dos docentes e a Inteligência Artificial.",
    criticalAnalysis: "Adverte para o perigo de aprofundamento das desigualdades educativas se as escolas dependerem de ferramentas pagas que as famílias mais desfavorecidas não podem suportar."
  },
  {
    citation: "OECD. (2026). OECD Digital Education Outlook 2026: Exploring Effective Uses of Generative AI in Education. OECD Publishing. https://doi.org/10.1787/062a7394-en",
    author: "OCDE",
    year: 2026,
    title: "OECD Digital Education Outlook 2026: Exploring Effective Uses of Generative AI in Education",
    source: "OECD Publishing",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "O relatório analisa oportunidades e riscos da utilização de Inteligência Artificial generativa na educação, com especial atenção à intencionalidade pedagógica, à autonomia dos alunos, à qualidade da aprendizagem e ao papel do professor.",
    criticalAnalysis: "A utilização de ferramentas de IA generativa pode melhorar o desempenho imediato numa tarefa sem produzir necessariamente ganhos de aprendizagem. Quando o aluno delega na ferramenta operações cognitivas essenciais, pode diminuir o envolvimento metacognitivo e a consolidação do conhecimento. A IA deve ser integrada com objetivos pedagógicos claros, preservando o esforço intelectual e a intervenção do aluno."
  },
  {
    citation: "Regulamento (UE) 2024/1689 do Parlamento Europeu e do Conselho, alterado pelo Regulamento (UE) 2026/1744, relativo a regras harmonizadas em matéria de inteligência artificial (Regulamento da Inteligência Artificial - EU AI Act).",
    author: "União Europeia",
    year: 2024,
    title: "Regulamento da Inteligência Artificial (Regulamento 2024/1689 e Regulamento de Simplificação 2026/1744)",
    source: "Jornal Oficial da União Europeia",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "O primeiro quadro legal vinculativo do mundo sobre inteligência artificial, atualizado em 2026 para simplificação da literacia em IA e disposições de conformidade.",
    criticalAnalysis: "Em 2026, o Regulamento (UE) 2024/1689 foi alterado pelo Regulamento (UE) 2026/1744, relativo à simplificação da aplicação das regras harmonizadas em matéria de Inteligência Artificial. Entre as alterações encontra-se a reformulação do artigo 4.º, relativo à literacia em IA: exige que fornecedores e responsáveis pela implantação adotem medidas para promover a literacia em IA das pessoas envolvidas na operação e utilização dos sistemas, considerando o contexto e as pessoas afetadas. O Regulamento 2026/1744 acrescenta ainda uma disposição transitória para determinados fornecedores de sistemas que geram conteúdos sintéticos que já estavam no mercado antes de 2 de agosto de 2026, estabelecendo 2 de dezembro de 2026 como prazo para tomarem as medidas necessárias à conformidade com o artigo 50.º, n.º 2. A aplicação destas disposições deve ser consultada no texto consolidado do Regulamento. Esta nota tem caráter informativo e não constitui aconselhamento jurídico."
  },
  {
    citation: "Sweller, J. (2011). Cognitive load theory. In J. P. Mestre & B. H. Ross (Eds.), The psychology of learning and motivation: Cognition in education (Vol. 55, pp. 37–76). Academic Press. https://doi.org/10.1016/B978-0-12-387691-1.00002-8",
    author: "Sweller",
    year: 2011,
    title: "Cognitive Load Theory",
    source: "Academic Press",
    category: "Teoria Cognitiva & Multimédia",
    relevanceToEducation: "Teoria nuclear da psicologia cognitiva que demonstra os limites da memória de trabalho humana perante estímulos concorrentes.",
    criticalAnalysis: "Fundamental para os professores perceberem que 'mais tecnologia e mais efeitos de vídeo' não significam mais aprendizagem; muitas vezes geram apenas ruído e dispersão mental."
  },
  {
    citation: "UNESCO. (2023). Guidance for generative AI in education and research. UNESCO Publishing. https://doi.org/10.54675/EWZM9535",
    author: "UNESCO",
    year: 2023,
    title: "Guidance for Generative AI in Education and Research",
    source: "UNESCO Publishing",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Linhas orientadoras mundiais da UNESCO para proteger a infância e os dados escolares perante a vaga de ferramentas generativas comerciais.",
    criticalAnalysis: "O documento discute a necessidade de estabelecer limites etários adequados para a utilização independente de plataformas de IA generativa. Apresenta os 13 anos como limiar mínimo recomendado no contexto da sua orientação e refere que alguns intervenientes defendem um limite de 16 anos. Esta é uma recomendação de política educativa do documento, não uma idade mínima legal universal em Portugal nem uma substituição dos termos de utilização definidos por cada fornecedor."
  }
];

// 7. O QUE NÓS, EDUCADORES E CIENTISTAS, NÃO SABEMOS EM 2026 (Transparência Epistémica)
export const WHAT_WE_DO_NOT_KNOW = [
  {
    id: "long-term-cognition",
    title: "1. Qual é o impacto a longo prazo de aprender com professores virtuais sintéticos?",
    description: "Os efeitos da utilização prolongada de avatares e personagens sintéticas podem depender da idade, da tarefa, da frequência de utilização e da mediação do docente. Esta plataforma não apresenta uma conclusão geral sobre os efeitos socioemocionais da exposição prolongada. Recomenda-se que os avatares sejam utilizados como recursos complementares e avaliados no contexto concreto.",
    pedagogicalImpact: "O avatar deve ser encarado como um recurso complementar e pontual (para uma introdução ou personagem fictícia), nunca como um substituto da presença viva, do olhar e da escuta ativa do professor em sala de aula."
  },
  {
    id: "pricing-volatility",
    title: "2. Durante quanto tempo as ferramentas gratuitas vão continuar acessíveis às escolas?",
    description: "Os planos, créditos, preços e limites de utilização podem mudar, e as condições variam entre fornecedores. Não se deve inferir que uma oferta gratuita implica recolha de dados para treino sem documentação específica do fornecedor.",
    pedagogicalImpact: "O professor nunca deve construir um plano anual ou uma disciplina inteira totalmente dependente de uma única aplicação comercial privada."
  },
  {
    id: "training-data-opacity",
    title: "3. Com que imagens e vídeos foram realmente treinados estes modelos neuronais?",
    description: "O nível de informação publicado sobre dados de treino, licenças e proveniência varia entre fornecedores e modelos. Não é adequado generalizar sobre todas as empresas. É necessário consultar a documentação do modelo e as condições aplicáveis à ferramenta utilizada.",
    pedagogicalImpact: "O professor tem a oportunidade de ensinar cidadania e ética digital, incentivando os estudantes a questionarem a proveniência dos materiais e a respeitarem a criação artística humana."
  },
  {
    id: "linguistic-nuances-pt",
    title: "4. Até que ponto podemos confiar no vocabulário em Português de Portugal (PT-PT)?",
    description: "A qualidade do Português de Portugal varia entre ferramentas, modelos, vozes e versões. A transcrição, a locução, a ortografia, o vocabulário, a terminologia técnica e a pronúncia devem ser revistos pelo docente.",
    pedagogicalImpact: "O professor é o filtro humano insubstituível: nenhum vídeo gerado por IA deve ser projetado em aula sem que o docente tenha verificado previamente cada frase e cada conceito curricular."
  }
];
