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
  cognitivePrinciple: string;
  rgpdNote: string;
}

export interface EducationalPrompt {
  id: number;
  title: string;
  category: string;
  discipline: string;
  gradeLevel: string;
  recommendedTool: string;
  promptText: string;
  visualStyle: string;
  pedagogicalObjective: string;
  curriculumCompetence: string;
  ethicalConsideration?: string;
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

export interface ClassroomActivity {
  id: string;
  title: string;
  discipline: string;
  targetCycle: string;
  estimatedDuration: string;
  icon: string;
  learningObjectives: string[];
  teacherVerificationChecklist: string[];
  whoOperatesTool: {
    firstCycle: string;
    secondCycle: string;
    thirdAndSecondary: string;
  };
  teacherImplementationSteps: {
    step: number;
    title: string;
    description: string;
    aiUseMode: 'Sem IA' | 'IA de apoio' | 'IA integrada';
    subitems?: string[];
    recommendedTools?: string[];
    teacherTip?: string;
  }[];
  studentDeliverables: string[];
  evaluationRubric: EvaluationRubricCriterion[];
  evaluationCriteria: string[]; // Retrocompatibilidade textual
  processEvaluation: {
    selfAssessment: string;
    peerAssessment: string;
    processEvidence: string;
  };
  udlAndDifferentiation: {
    representation: string;
    actionAndExpression: string;
    engagement: string;
    noTechAlternative: string;
  };
  pedagogicalFramework: string;
  rgpdSafetyChecklist: string[];
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
    title: "1. Criar Videoaulas Explicativas Sem Precisar de Estúdio",
    shortTitle: "Videoaulas em Minutos",
    description: "As ferramentas de geração de vídeo podem apoiar a criação de rascunhos audiovisuais a partir de instruções escritas e materiais de referência. O professor deve rever o guião, as imagens, a narração e a informação antes de utilizar o vídeo.",
    capabilities: [
      "Algumas ferramentas permitem criar rascunhos audiovisuais a partir de instruções escritas ou guiões. A estrutura das cenas, a narração e a fidelidade ao texto dependem da ferramenta e devem ser revistas pelo professor.",
      "Algumas ferramentas disponibilizam síntese de voz. A língua, a variante do Português e a qualidade da locução dependem do serviço e do modelo utilizados e devem ser confirmadas antes da utilização. O professor pode optar por gravar a própria voz.",
      "Criar clipes curtos ou montar um vídeo final com a duração definida pelo professor. A duração e a sequência dependem da ferramenta e podem exigir edição posterior.",
      "Gravar explicações uma única vez e reutilizá-las com alunos que faltaram ou precisam de reforço."
    ],
    usefulTools: [
      { name: "InVideo AI", description: "Pode apoiar a criação de um rascunho audiovisual a partir de instruções escritas ou guiões." },
      { name: "CapCut", description: "Edição simples, legendas automáticas e recursos visuais." },
      { name: "Canva para Educação", description: "Perfeito para integrar vídeos e animações em apresentações já habituais na escola." }
    ],
    teacherBenefits: [
      "Pode reduzir algumas tarefas de preparação técnica e edição, libertando tempo para a planificação pedagógica.",
      "Permite criar uma videoteca de apoio que os alunos podem consultar ao seu próprio ritmo em casa (sala de aula invertida).",
      "Reduz a ansiedade de quem não se sente confortável a expor a sua própria imagem em vídeo."
    ],
    cognitivePrinciple: "Princípio da Modalidade de Mayer: a combinação de imagens relevantes com explicação oral pode apoiar a aprendizagem. A sua eficácia depende da organização da informação, da complexidade do conteúdo e dos conhecimentos prévios dos alunos.",
    rgpdNote: "Não introduza dados pessoais de alunos, nomes, classificações ou situações identificáveis em ferramentas externas que não estejam aprovadas para essa finalidade. Privilegie exemplos fictícios, anonimização e minimização dos dados."
  },
  {
    id: 2,
    title: "2. Legendar e Tornar os Materiais Acessíveis a Todos (DUA)",
    shortTitle: "Inclusão e Acessibilidade",
    description: "Numa turma típica de 25 ou 28 alunos, temos alunos que leem devagar, alunos com défice auditivo e, cada vez mais em Portugal, alunos recém-chegados de outros países que ainda não dominam a nossa língua. As funcionalidades de legendagem, transcrição e tradução podem apoiar o acesso à informação, mas não garantem, por si só, a inclusão de todos os alunos.",
    capabilities: [
      "Algumas ferramentas permitem gerar legendas automáticas. A sincronização, a pontuação e a identificação de termos científicos devem ser revistas pelo professor.",
      "Corrigir rapidamente no texto palavras técnicas ou vocabulário científico mal transcrito.",
      "Algumas ferramentas disponibilizam tradução ou dobragem automática para idiomas selecionados. A disponibilidade varia e o resultado deve ser revisto por alguém com conhecimento da língua e do conteúdo.",
      "Produzir materiais com suporte bimodal (áudio + texto simultâneo) que apoiam a literacia."
    ],
    usefulTools: [
      { name: "CapCut", description: "Editor de vídeo com funcionalidades de edição e recursos de IA. A disponibilidade e a qualidade das ferramentas de reconhecimento de fala e legendagem devem ser confirmadas na versão utilizada." },
      { name: "Microsoft Clipchamp", description: "A Microsoft disponibiliza um plano gratuito na versão pessoal do Clipchamp. As funcionalidades e as condições das contas escolares ou profissionais dependem da licença utilizada." }
    ],
    teacherBenefits: [
      "A legendagem e a disponibilização de alternativas textuais podem apoiar a acessibilidade, mas não significam, por si só, que a atividade cumpra os princípios do DUA.",
      "A tradução automática pode apoiar a compreensão inicial, mas deve ser revista e adaptada ao contexto linguístico e disciplinar.",
      "Apoio direto a alunos com dificuldades de concentração ou processamento auditivo."
    ],
    cognitivePrinciple: "Princípio da Redundância de Mayer: a apresentação simultânea de gráficos, narração e texto impresso idêntico pode, em determinadas condições, aumentar a carga de processamento. Este princípio não justifica retirar legendas necessárias à acessibilidade. É importante distinguir legendas de acessibilidade de texto redundante utilizado como elemento visual.",
    rgpdNote: "A gravação da voz do professor é um dado pessoal. Em ferramentas externas, utilize ferramentas institucionais da escola sempre que possível."
  },
  {
    id: 3,
    title: "3. Transformar Aulas ou Gravações Longas em Pílulas Curtas",
    shortTitle: "Pílulas e Resumos Curtos",
    description: "Uma gravação extensa pode dificultar a localização de uma explicação específica. A criação de excertos com objetivos claros pode facilitar a consulta e a revisão, desde que os segmentos mantenham o contexto necessário.",
    capabilities: [
      "Alguns editores permitem pesquisar uma transcrição e localizar excertos de vídeo. Esta funcionalidade depende da ferramenta, da versão e do plano.",
      "Os silêncios, pausas ou momentos de espera podem ser cortados manualmente ou através de funcionalidades assistidas, quando disponíveis. A edição deve preservar o contexto necessário à compreensão.",
      "A criação de clipes curtos e a atribuição automática de títulos dependem das funcionalidades de cada ferramenta. O professor deve rever a seleção dos excertos e acrescentar ou corrigir os títulos.",
      "Disponibilizar pequenos clipes didáticos antes de começar um novo capítulo para despertar o interesse."
    ],
    usefulTools: [
      { name: "CapCut", description: "Algumas versões e planos disponibilizam funcionalidades de edição assistida por transcrição. Quando essa opção não estiver disponível, a edição pode ser realizada através da linha temporal." },
      { name: "InVideo AI", description: "O InVideo AI pode apoiar a preparação de um rascunho audiovisual a partir de texto fornecido pelo utilizador. O resumo, a seleção das imagens e a duração final devem ser revistos pelo professor." }
    ],
    teacherBenefits: [
      "Materiais organizados por tema ou conceito, facilitando a consulta de partes específicas.",
      "Fácil consulta rápida no telemóvel antes de fichas de avaliação e momentos de síntese.",
      "Possibilidade de reutilizar e disponibilizar excertos revistos, adequados aos objetivos de cada atividade."
    ],
    cognitivePrinciple: "Princípio da Segmentação de Mayer: a informação pode ser organizada em partes significativas, permitindo ao aluno controlar o ritmo, pausar e rever. O benefício depende do conteúdo e da forma como os segmentos são estruturados.",
    rgpdNote: "Não carregue gravações com rostos, vozes, nomes ou outros dados identificáveis de alunos em ferramentas externas que não estejam aprovadas para essa finalidade. Sempre que possível, utilize gravações sem identificação de alunos, materiais anonimizados ou exemplos fictícios e confirme as condições de tratamento com a escola."
  },
  {
    id: 4,
    title: "4. Apresentadores Virtuais para Manter a Consistência e Proximidade",
    shortTitle: "Avatares Pedagógicos",
    description: "Um avatar virtual pode parecer artificial à primeira vista, mas quando bem utilizado é uma ferramenta complementar: serve para dar as boas-vindas a um módulo, colocar uma questão desafiadora ou simular uma dramatização com uma figura histórica.",
    capabilities: [
      "Criar uma personagem virtual que lê as instruções de um trabalho com clareza e ritmo pausado.",
      "Algumas ferramentas permitem construir apresentações ou diálogos com dois ou mais avatares, dependendo do modelo e das funcionalidades disponíveis.",
      "Quando a ferramenta permite guardar e reutilizar um avatar ou uma voz, o docente pode procurar manter alguma consistência entre materiais. Essa continuidade não é garantida em todos os planos ou modelos.",
      "Preparar comunicações breves e avisos pedagógicos sem necessidade de montagem de estúdio."
    ],
    usefulTools: [
      { name: "Vidnoz AI", description: "Algumas funcionalidades permitem criar apresentações com avatares e diálogos, de acordo com o modelo e as opções disponibilizadas pela ferramenta." },
      { name: "HeyGen", description: "Permite criar vídeos com apresentadores virtuais. A qualidade da sincronização labial e a disponibilidade de vozes e idiomas dependem do modelo, da conta e do plano." },
      { name: "Canva para Educação", description: "Personagens animadas e elementos ilustrativos prontos para apresentações escolares." }
    ],
    teacherBenefits: [
      "Permite atualizar um guião no ano seguinte sem ter de regravar o vídeo do início.",
      "Pode introduzir uma personagem ou voz diferente, quando essa opção serve o objetivo pedagógico; não se deve presumir um aumento automático da motivação.",
      "Pode permitir preparar previamente uma mensagem ou explicação narrada, que o professor revê e contextualiza."
    ],
    cognitivePrinciple: "Princípio da Personalização: as pessoas podem aprender melhor quando a narração utiliza uma linguagem conversacional, em vez de um registo excessivamente formal.\n\nPrincípio da Voz: a investigação clássica de Mayer encontrou vantagens na utilização de uma voz humana padrão em comparação com uma voz de máquina. Contudo, esta evidência não permite afirmar que todas as vozes sintéticas modernas prejudicam a aprendizagem. A qualidade da síntese, a inteligibilidade e o contexto de utilização devem ser considerados.\n\nPrincípio da Imagem: a presença da imagem do apresentador no ecrã não melhora necessariamente a aprendizagem. A inclusão de um avatar ou de uma personagem deve ter uma finalidade pedagógica e não ser apresentada como garantia de maior compreensão, atenção ou motivação.",
    rgpdNote: "Não criar nem divulgar imagens, vídeos ou gravações de voz sintéticas que representem alunos, professores, colegas ou outras pessoas identificáveis sem autorização, validação institucional e verificação das condições legais aplicáveis. Não clonar a voz ou a aparência de pessoas reais para criar conteúdos que possam ser confundidos com declarações ou registos autênticos."
  },
  {
    id: 5,
    title: "5. Edição Intuitiva sem Precisar de Tirar um Curso de Audiovisual",
    shortTitle: "Edição Descomplicada",
    description: "A maioria dos professores não tem tempo para aprender programas profissionais pesados como o Premiere ou o DaVinci. Alguns editores permitem realizar operações a partir de uma transcrição, mas essa funcionalidade depende do produto e do plano. Noutros casos, a edição continua a ser feita na linha temporal.",
    capabilities: [
      "Eliminar gafes e remover apenas hesitações prolongadas, repetições involuntárias e ruídos que prejudiquem a compreensão, preservando conectores discursivos e formulações relevantes para o raciocínio.",
      "Equilibrar o volume do microfone e atenuar ruídos da sala com funcionalidades integradas.",
      "Adicionar transições simples e destaques gráficos sem ter de recorrer a software complexo.",
      "As opções de exportação, resolução e marca de água dependem da ferramenta, da conta e do plano. Antes de preparar um recurso para partilha, o professor deve confirmar as condições de exportação."
    ],
    usefulTools: [
      { name: "CapCut", description: "Editor de vídeo com funcionalidades de corte, legendagem e recursos de composição." },
      { name: "Microsoft Clipchamp", description: "Editor de vídeo com plano pessoal gratuito e suporte institucional dependente da licença da escola." }
    ],
    teacherBenefits: [
      "Algumas tarefas de edição podem tornar-se mais simples, embora o tempo necessário dependa do recurso e da ferramenta.",
      "Acabamento limpo que transmite cuidado pedagógico e respeito pelo tempo do estudante.",
      "Redução da frustração técnica que por vezes afasta docentes das tecnologias digitais."
    ],
    cognitivePrinciple: "Princípio da Coerência de Mayer: consiste em excluir elementos, palavras, imagens ou sons que não contribuem para o objetivo da aprendizagem, reduzindo informação desnecessária. A remoção de ruídos de fundo, pausas excessivas ou elementos irrelevantes pode contribuir para este princípio quando melhora a compreensão.\n\nPrincípio da Sinalização de Mayer: consiste em acrescentar pistas visuais ou verbais que orientam a atenção para os elementos essenciais e ajudam a compreender a organização da informação, por exemplo através de setas, destaques de cor, títulos ou palavras-chave.\n\nOs dois princípios são distintos. A simples remoção de hesitações não corresponde, por si só, à aplicação da Sinalização.",
    rgpdNote: "A existência de uma aplicação instalada no computador não garante que todas as funcionalidades sejam processadas localmente. As funções de IA podem envolver serviços externos. Confirme as condições de processamento, armazenamento e utilização dos ficheiros na documentação aplicável."
  }
];

// 3. BANCO DE PROMPTS PEDAGÓGICOS (Linguagem Humana, Clara e Pronta para Sala de Aula)
export const EDUCATIONAL_PROMPTS: EducationalPrompt[] = [
  {
    id: 1,
    title: "1. Como Funciona o Coração: Circulação Sanguínea",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "3.º Ciclo (9.º ano)",
    category: "Animação 3D Didática de Processo Biológico",
    recommendedTool: "Kling AI / Luma AI — Ray3.2 / MiniMax — Hailuo AI",
    visualStyle: "Animação 3D médica translúcida, com contraste forte entre sangue oxigenado e desoxigenado",
    pedagogicalObjective: "Compreender o percurso do sangue na circulação pulmonar e sistémica e identificar, de forma esquemática, as fases de diástole e sístole cardíacas.",
    curriculumCompetence: "Identificar os constituintes do sistema cardiovascular e explicar as funções da circulação pulmonar e sistémica.",
    promptText: "Cria uma animação educativa esquemática do coração humano, em corte longitudinal, sem legendas ou texto gerado automaticamente. Mostra um ciclo cardíaco em momentos claramente separados.\n\nPrimeiro, durante a diástole ventricular, os ventrículos relaxam e enchem-se de sangue; as válvulas auriculoventriculares estão abertas.\n\nSegundo, a contração das aurículas completa o enchimento ventricular.\n\nTerceiro, durante a sístole ventricular, os ventrículos contraem-se, as válvulas auriculoventriculares fecham, as válvulas semilunares abrem e o sangue é ejetado para a artéria pulmonar e para a aorta.\n\nDistingue o lado direito, que envia sangue menos oxigenado para os pulmões, do lado esquerdo, que envia sangue oxigenado para o corpo.\n\nUtiliza azul e vermelho apenas como convenções gráficas. Estas cores não representam as cores reais do sangue.\n\nMantém as estruturas anatómicas estáveis e não inventes vasos, cavidades ou válvulas. Se a sequência não puder ser representada com rigor, apresenta planos separados, em vez de uma animação contínua enganadora.",
    ethicalConsideration: "A animação é uma representação esquemática, não uma imagem anatómica de referência. O professor deve validar o percurso do sangue, a abertura e o fecho das válvulas e as fases cardíacas através de um esquema científico adequado. As cores azul e vermelho são convenções gráficas."
  },
  {
    id: 2,
    title: "2. A Descoberta do Caminho Marítimo para a Índia (1498)",
    discipline: "História",
    gradeLevel: "2.º Ciclo (5.º ou 6.º ano)",
    category: "Reconstituição Histórica Cinematográfica",
    recommendedTool: "Luma AI — Ray3.2 / Kling AI",
    visualStyle: "Cinematográfico realista de época, iluminação de fim de tarde, nevoeiro suave sobre a água",
    pedagogicalObjective: "Compreender a chegada da expedição de Vasco da Gama a Calecute em 1498 e distinguir a reconstituição visual de um registo histórico.",
    curriculumCompetence: "Reconhecer a importância dos Descobrimentos portugueses e localizar as principais etapas da expansão marítima.",
    promptText: "Cria uma reconstituição visual ilustrativa, não documental, da aproximação de embarcações portuguesas à costa de Calecute, na Índia, em 1498.\n\nRepresenta navios à vela de finais do século XV, marinheiros e a costa de Malabar, com materiais, velas e elementos visuais coerentes com fontes iconográficas e históricas fornecidas pelo professor.\n\nNão indiques um número exato de navios nem atribuas nomes, bandeiras, símbolos, uniformes ou detalhes específicos sem uma imagem ou fonte documental de referência.\n\nNão inventes acontecimentos, diálogos ou reações individuais. Não imites a aparência de uma filmagem histórica autêntica.\n\nNão incluas texto, rótulos ou símbolos gerados automaticamente. Os elementos históricos e a rota serão identificados posteriormente pelo professor com fontes documentais.",
    ethicalConsideration: "A armada que partiu em 1497 deve ser distinguida da representação da chegada a Calecute. A composição da expedição, os nomes das embarcações e a rota devem ser confirmados em fontes históricas. A animação deve ser identificada como reconstituição visual ilustrativa, nunca como documento de arquivo."
  },
  {
    id: 3,
    title: "3. O Ciclo da Água: Da Evaporação à Precipitação",
    discipline: "Geografia / Ciências Naturais",
    gradeLevel: "2.º Ciclo (5.º ano)",
    category: "Paisagem Dinâmica e Meteorologia",
    recommendedTool: "Pika / Kling AI",
    visualStyle: "Documentário de natureza realista em plano aberto sobre paisagem costeira montanhosa",
    pedagogicalObjective: "Compreender os principais processos do ciclo da água: evaporação, condensação, precipitação, escoamento e infiltração.",
    curriculumCompetence: "Compreender o ciclo da água como processo dinâmico e reconhecer a água como recurso vital e finito.",
    promptText: "Cria uma animação educativa esquemática do ciclo da água numa paisagem costeira.\n\nMostra a água líquida à superfície do mar a evaporar. O vapor de água é invisível e não deve ser representado como fumo branco.\n\nMostra a subida do ar húmido, o seu arrefecimento e a condensação em pequenas gotículas de água ou cristais de gelo que contribuem para a formação das nuvens.\n\nRepresenta a precipitação e o regresso da água à superfície através do escoamento superficial e da infiltração no solo, voltando a alimentar rios e oceanos.\n\nInclui, quando adequado ao nível de ensino, a transpiração das plantas como outra entrada de vapor de água na atmosfera.\n\nMantém a sequência cíclica, sem sugerir que todos os processos ocorrem sempre numa única trajetória obrigatória.\n\nNão acrescentes textos, setas, valores ou rótulos automáticos.",
    ethicalConsideration: "O vapor de água não é visível. As nuvens são constituídas por gotículas de água e/ou cristais de gelo. O ciclo da água representa processos interligados, não uma sequência rígida única. O professor deve validar a sequência e a terminologia."
  },
  {
    id: 4,
    title: "4. A Mitose Celular: Divisão e Vida ao Microscópio",
    discipline: "Biologia e Geologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    category: "Microscopia Científica de Alta Resolução",
    recommendedTool: "Kling AI / Luma AI — Ray3.2",
    visualStyle: "Microscopia confocal de fluorescência com fundo negro e contraste vívido de proteínas",
    pedagogicalObjective: "Compreender as fases da mitose (prófase, metáfase, anáfase e telófase) observando a separação dos cromossomas pelo fuso acromático.",
    curriculumCompetence: "Explicar a importância da mitose na manutenção da estabilidade genética e na renovação dos tecidos biológicos.",
    promptText: "Cria uma animação científica esquemática de uma célula eucariótica animal a realizar a mitose, apresentando quatro fases clássicas numa sequência ordenada: prófase, metáfase, anáfase e telófase, seguida da citocinese.\n\nNa prófase, os cromossomas condensam-se e o fuso mitótico organiza-se.\n\nNa metáfase, os cromossomas alinham-se na região equatorial.\n\nNa anáfase, as cromátides-irmãs separam-se e deslocam-se para polos opostos.\n\nNa telófase, os núcleos reorganizam-se.\n\nDepois, o citoplasma divide-se por citocinese, originando duas células-filhas.\n\nNão representes a duplicação do ADN como um acontecimento da mitose: essa duplicação ocorre anteriormente, durante a interfase.\n\nNão afirmes que a animação é uma captura microscópica real. Não incluas texto ou etiquetas automáticas; estes elementos serão acrescentados posteriormente, depois de validação científica.",
    ethicalConsideration: "A animação é um modelo simplificado do processo celular. Não deve ser apresentada como imagem microscópica real nem como representação à escala. Validar a sequência das fases e a distinção entre mitose e citocinese através de uma fonte de Biologia."
  },
  {
    id: 5,
    title: "5. A Formação dos Vulcões e Placas Tectónicas",
    discipline: "Ciências Naturais / Físico-Química",
    gradeLevel: "3.º Ciclo (7.º ano)",
    category: "Geologia Dinâmica 3D",
    recommendedTool: "Luma AI — Ray3.2 / Kling AI / MiniMax — Hailuo AI",
    visualStyle: "Corte geológico 3D com magma incandescente e fumo volumétrico hiper-realista",
    pedagogicalObjective: "Compreender o movimento convergente das placas tectónicas, o processo de subducção e a formação de magma em zonas de subducção.",
    curriculumCompetence: "Relacionar a tectónica de placas com a ocorrência de sismos e erupções vulcânicas no planeta.",
    promptText: "Cria uma animação geológica esquemática em corte transversal de uma zona de subducção, mostrando uma placa oceânica a convergir e a mergulhar sob uma placa continental.\n\nÀ medida que a placa oceânica desce, liberta água e outros fluidos para o manto sobrejacente.\n\nEsses fluidos favorecem a fusão parcial do manto, formando magma que pode ascender através da crosta e alimentar um vulcão.\n\nNão representes a placa subductada como se fundisse integralmente. Não expliques a formação do magma apenas pelo aumento da pressão ou da temperatura da própria placa.\n\nMostra a subducção e a formação de magma em sequências distintas e simplificadas. Não acrescentes setas, legendas ou escalas automáticas, que serão incluídas posteriormente pelo professor.",
    ethicalConsideration: "A animação é uma representação simplificada de um processo geológico que decorre em escalas temporais muito longas. O professor deve validar a distinção entre placa subductada, cunha mantélica, fluidos libertados e fusão parcial do manto através de uma fonte científica."
  },
  {
    id: 6,
    title: "6. Apresentador Virtual: Instruções de Segurança Laboratorial",
    discipline: "Físico-Química / Ciências Naturais",
    gradeLevel: "3.º Ciclo (7.º a 9.º ano)",
    category: "Apresentador Virtual Pedagógico em Estúdio",
    recommendedTool: "HeyGen / Vidnoz AI",
    visualStyle: "Apresentador jovem e profissional com bata branca num laboratório escolar limpo e moderno",
    pedagogicalObjective: "Apresentar as regras indispensáveis de segurança no laboratório de ciências de forma próxima, empática e memorável.",
    curriculumCompetence: "Adotar regras de segurança individual e coletiva no trabalho experimental em ambiente laboratorial.",
    promptText: "Cria um vídeo de apresentação com uma personagem virtual fictícia e adulta a apresentar três regras gerais de segurança num laboratório escolar.\n\nA personagem utiliza bata e óculos de proteção adequados ao contexto, mantém o cabelo comprido preso e fala de forma clara, num ritmo moderado.\n\nUtiliza o seguinte texto de fala:\n\n«Antes de iniciar uma atividade laboratorial, coloca os equipamentos de proteção indicados pelo professor e prende o cabelo comprido. Nunca proves reagentes nem cheires diretamente os recipientes. Se ocorrer um derrame ou outra situação inesperada, não toques no material nem tentes limpar. Afasta-te e informa imediatamente o professor, seguindo as instruções de segurança do laboratório.»\n\nNão afirmes que a voz será necessariamente em Português de Portugal nem que a sincronização labial será perfeita. Se a ferramenta não disponibilizar uma voz adequada, o professor deve gravar ou substituir a narração.\n\nNão utilizar a imagem ou voz de qualquer pessoa real.",
    ethicalConsideration: "As regras apresentadas são orientações gerais. A versão final deve ser revista de acordo com as fichas de segurança dos produtos, o regulamento do laboratório e os procedimentos definidos pela escola. A personagem é fictícia e não substitui a explicação do professor nem as regras específicas de cada atividade."
  },
  {
    id: 7,
    title: "7. O Teorema de Pitágoras no Mundo Real",
    discipline: "Matemática",
    gradeLevel: "3.º Ciclo (8.º ano)",
    category: "Visualização Geométrica 3D Concreta",
    recommendedTool: "GeoGebra para construir e validar o diagrama; Canva para Educação ou Microsoft Clipchamp para montar a animação e a explicação.",
    visualStyle: "Animação geométrica plana, limpa e rigorosa, sobre fundo neutro. Triângulo retângulo de lados 3, 4 e 5, com os três quadrados construídos externamente sobre os respetivos lados. Sem água, recipientes, volumes, perspetivas deformadas ou elementos decorativos que alterem a geometria.",
    pedagogicalObjective: "Compreender geometricamente o Teorema de Pitágoras através da comparação das áreas dos quadrados construídos sobre os lados de um triângulo retângulo.",
    curriculumCompetence: "Deduzir e aplicar o Teorema de Pitágoras na resolução de problemas geométricos do espaço real.",
    promptText: "Utiliza como imagem de referência um diagrama de um triângulo retângulo com lados de comprimento 3, 4 e 5 e os quadrados construídos externamente sobre cada lado. O diagrama deve ser previamente criado e validado pelo professor numa ferramenta geométrica.\n\nCria uma animação simples que permita comparar as áreas dos três quadrados sem alterar a forma, os ângulos, as medidas ou a posição dos elementos.\n\nMantém os quadrados construídos sobre os catetos separados e mostra visualmente que as respetivas áreas, 9 e 16 unidades quadradas, totalizam a área do quadrado construído sobre a hipotenusa, 25 unidades quadradas.\n\nNão geres números, símbolos ou fórmulas no vídeo. Estes elementos serão inseridos no editor depois de verificados.\n\nNão uses água, volumes ou recipientes, porque esta demonstração se baseia na comparação de áreas.\n\nSe o modelo deformar a geometria, rejeita o resultado e utiliza o diagrama estático ou uma animação construída numa ferramenta geométrica.",
    ethicalConsideration: "As medidas, os ângulos, as áreas e a igualdade matemática devem ser construídos e verificados fora do modelo generativo. A IA pode ser utilizada apenas para movimento ilustrativo, nunca como garantia de rigor geométrico."
  },
  {
    id: 8,
    title: "8. Inês de Castro: História, Lenda e Representação em Os Lusíadas",
    discipline: "Português / Literatura",
    gradeLevel: "3.º Ciclo e Secundário (9.º ao 12.º ano)",
    category: "Evocação Poética e Histórica de Os Lusíadas",
    recommendedTool: "Luma AI — Ray3.2 / Kling AI",
    visualStyle: "Ilustração simbólica e não documental, inspirada no século XIV. Evitar representar como reconstituição factual um cenário cuja relação com o acontecimento é lendária.",
    pedagogicalObjective: "Analisar o episódio de Inês de Castro no Canto III de Os Lusíadas, distinguindo contexto histórico, construção literária e tradições lendárias associadas ao local.",
    curriculumCompetence: "Interpretar textos literários clássicos reconhecendo temas intemporais, símbolos e figuras de estilo.",
    promptText: "Cria uma ilustração animada, assumidamente ficcional e simbólica, inspirada na figura literária de Inês de Castro e no episódio narrado no Canto III de Os Lusíadas.\n\nRepresenta uma figura feminina medieval num jardim junto à água, sem identificar o cenário como o local historicamente comprovado do acontecimento.\n\nNão afirmes que o episódio ocorreu na Quinta das Lágrimas. A associação deste espaço à história de Pedro e Inês deve ser apresentada como tradição ou lenda, e não como facto histórico comprovado.\n\nNão representes as manchas avermelhadas das pedras como sangue real. Se forem mostradas, identifica-as como elemento de uma tradição lendária.\n\nNão inventes roupa, edifícios ou símbolos históricos específicos sem uma fonte de referência.\n\nNão incluas texto gerado automaticamente. O professor acrescentará posteriormente uma nota que distingue a história, a lenda e a representação literária de Camões.",
    ethicalConsideration: "Distinguem-se três dimensões: informação histórica documentada, tradição lendária e representação literária. Os Lusíadas é uma epopeia. A associação da Quinta das Lágrimas ao episódio de Inês de Castro deve ser apresentada como tradição, não como localização comprovada. As manchas avermelhadas das pedras da Fonte das Lágrimas são associadas a algas vermelhas e não constituem vestígios documentais de sangue."
  },
  {
    id: 9,
    title: "9. Fotossíntese: Como as Plantas Transformam Energia Luminosa em Energia Química",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "Aprofundamento de Biologia — selecionar apenas para os níveis em que a planificação curricular e as Aprendizagens Essenciais aplicáveis incluam estes processos e estruturas celulares. Não utilizar a versão detalhada indiscriminadamente no 6.º ano.",
    category: "Macro-Cinematografia Botânica com Corte Microscópico",
    recommendedTool: "Kling AI / Luma AI — Ray3.2",
    visualStyle: "Animação científica esquemática, com ampliação da folha para o cloroplasto e distinção visual entre tilacoides e estroma.",
    pedagogicalObjective: "Compreender a fotossíntese e distinguir as reações dependentes da luz, que ocorrem nas membranas dos tilacoides, do ciclo de Calvin, que decorre no estroma do cloroplasto.",
    curriculumCompetence: "Compreender o papel da fotossíntese na nutrição das plantas e, em níveis de aprofundamento, relacionar as reações dependentes da luz nos tilacoides com o ciclo de Calvin no estroma.",
    promptText: "Cria uma animação científica esquemática da fotossíntese numa folha e num cloroplasto.\n\nComeça com a luz a incidir na folha e mostra a água a chegar através dos vasos condutores.\n\nFaz uma ampliação até um cloroplasto. Distingue claramente duas regiões.\n\nNas membranas dos tilacoides, a energia luminosa é absorvida pelos pigmentos fotossintéticos e ocorrem as reações dependentes da luz. A água é utilizada e ocorre libertação de oxigénio.\n\nNo estroma do cloroplasto decorre o ciclo de Calvin, que utiliza dióxido de carbono e a energia química produzida nas reações dependentes da luz para formar compostos orgânicos.\n\nNão mostres o dióxido de carbono a transformar-se diretamente em glicose nos tilacoides.\n\nNão representes moléculas como esferas com rótulos automáticos nem inventes estruturas celulares.\n\nA animação é esquemática e será acompanhada por uma explicação e legendas elaboradas e validadas pelo professor.",
    ethicalConsideration: "Validar a distinção entre tilacoides e estroma, a origem do oxigénio libertado e a função do ciclo de Calvin através de uma fonte científica de Biologia. A animação gerada por IA não deve ser utilizada como fonte científica. Para alunos do 6.º ano, utilizar uma explicação introdutória adaptada às aprendizagens previstas: a planta utiliza água, dióxido de carbono e energia luminosa para produzir matéria orgânica e liberta oxigénio. Não exigir a identificação dos tilacoides, do estroma ou das etapas do ciclo de Calvin quando esses conteúdos não façam parte da planificação curricular do ano."
  },
  {
    id: 10,
    title: "10. Multiplicação Prática com Caixas de Fruta",
    discipline: "Matemática",
    gradeLevel: "1.º Ciclo (3.º ano)",
    category: "Vídeo Narrado com Personagem Animada",
    recommendedTool: "CapCut (Web, PC e Telemóvel) / InVideo AI",
    visualStyle: "Personagem 3D simpática e calorosa numa sala de aula colorida, com maçãs e caixas luminosas",
    pedagogicalObjective: "Desmistificar a tabuada mostrando visualmente que 3 vezes 4 não é magia nem memorização mecânica, mas sim 3 grupos com 4 objetos cada (adição repetida).",
    curriculumCompetence: "Compreender os sentidos da multiplicação e utilizar estratégias de cálculo mental com segurança no quotidiano.",
    promptText: "Utiliza como referência uma imagem estática previamente criada e verificada pelo professor, que contenha exatamente três caixas iguais, cada uma com quatro maçãs vermelhas visíveis.\n\nCria uma animação simples com um movimento de câmara ligeiro ou uma aproximação visual, preservando sem qualquer alteração o número de caixas e de maçãs.\n\nNão acrescentes, retires, dupliques ou deformes objetos.\n\nNão geres texto, números ou símbolos matemáticos.\n\nSe a ferramenta alterar a contagem dos objetos, rejeita a animação e utiliza a imagem estática original.\n\nNa fase de edição, o professor acrescentará a expressão matemática 4 + 4 + 4 = 12 e 3 × 4 = 12, depois de confirmar a correspondência entre o número de grupos e a quantidade de elementos.",
    ethicalConsideration: "Não confiar numa geração de vídeo para produzir contagens matemáticas exatas. Criar e validar a imagem com os elementos pretendidos e inserir a notação matemática no editor."
  },
  {
    id: 11,
    title: "11. A Revolução dos Cravos (25 de Abril de 1974)",
    discipline: "História / Cidadania",
    gradeLevel: "2.º / 3.º Ciclo e Secundário",
    category: "Reconstituição Histórica e Cidadania",
    recommendedTool: "Kling AI / MiniMax — Hailuo AI / Luma AI — Ray3.2",
    visualStyle: "Reconstituição visual ilustrativa, estilizada e claramente identificada como gerada por Inteligência Artificial; não imitar filmagem documental autêntica.",
    pedagogicalObjective: "Explorar o contexto histórico do 25 de Abril de 1974, relacionando acontecimentos e símbolos com fontes históricas e distinguindo registos documentais de reconstituições visuais.",
    curriculumCompetence: "Compreender o fim da ditadura, a importância da Constituição de 1976 e a valorização ativa dos direitos humanos e das liberdades cívicas.",
    promptText: "Cria uma reconstituição visual ilustrativa, em estilo gráfico ou cinematográfico assumidamente ficcional, inspirada no 25 de Abril de 1974 em Lisboa. Mostra uma rua de Lisboa, a presença de militares e civis e um cravo vermelho como símbolo associado à Revolução dos Cravos. Não imites a aparência de uma filmagem documental autêntica, não inventes diálogos nem detalhes históricos específicos e não apresentes a cena como registo real. A composição deve ser identificada como reconstituição gerada por Inteligência Artificial e acompanhada, na atividade, por fotografias, testemunhos e fontes históricas devidamente identificados.",
    ethicalConsideration: "Confrontar a representação com fotografias de arquivo, testemunhos e fontes históricas identificadas. Não utilizar a reconstituição como prova documental. Se forem representados uniformes, veículos militares, insígnias ou outros detalhes históricos específicos, estes devem ser confrontados com imagens de arquivo. Não inventar acontecimentos ou comportamentos de pessoas reais."
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

// 5. ATIVIDADES DE SALA DE AULA REAIS E TESTÁVEIS (Linguagem Humana e EduQA 2026/2027)
export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: "entrevista-ia",
    title: "Entrevista a uma Figura da História",
    discipline: "História / Português / Cidadania",
    targetCycle: "2.º e 3.º Ciclo do Ensino Básico",
    estimatedDuration: "4 a 5 aulas de 50 minutos, consoante o número de grupos e a realização de parte da edição em trabalho autónomo.",
    icon: "Users",
    learningObjectives: [
      "Pesquisar em fontes históricas credíveis o papel de uma figura marcante (ex.: Aristides de Sousa Mendes, D. Afonso Henriques, Marie Curie).",
      "Elaborar um guião de 3 perguntas e respostas com rigor factual, distinguindo a verdade histórica de lendas.",
      "Produzir um pequeno vídeo simulando a entrevista e analisar criticamente o resultado com a turma."
    ],
    teacherVerificationChecklist: [
      "Qual é a aprendizagem que se pretende desenvolver? (Rigor histórico e competência comunicativa)",
      "A IA acrescenta valor real a esta tarefa? (Apoia na reconstituição visual sem substituir a pesquisa factual)",
      "Que etapas podem ser realizadas sem IA? (Pesquisa, guião histórico, validação documental e coavaliação)",
      "Que dados ou conteúdos serão enviados para a ferramenta? (Apenas texto didático genérico, sem dados de alunos)",
      "A ferramenta está aprovada e é adequada ao contexto? (Ferramentas institucionais da escola)",
      "Existem alternativas para alunos sem equipamento, conta ou autorização? (Simulação teatral, podcast ou cartaz)",
      "Como será verificada a aprendizagem e a contribuição individual dos alunos? (Grelha de rubrica ponderada e autoavaliação)"
    ],
    whoOperatesTool: {
      firstCycle: "Privilegiar o professor como operador da ferramenta. Os alunos observam, formulam ideias e preparam o guião.",
      secondCycle: "O professor verifica previamente a idade mínima e termos; opera ou apoia na preparação de prompts.",
      thirdAndSecondary: "Utilização direta permitida quando compatível com os termos do fornecedor e autorizações institucionais."
    },
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Pesquisa e Verificação de Fontes (Aula 1 · 50 min)",
        description: "Os alunos organizam-se em pares e escolhem uma figura histórica. Antes de tocarem em qualquer ferramenta digital, consultam o manual escolar e fontes fidedignas (RTP Ensina, Dicionário Biográfico, arquivos) para recolher datas, factos e contexto real.",
        aiUseMode: "Sem IA",
        recommendedTools: ["Manual Escolar", "RTP Ensina", "Europeana"],
        teacherTip: "Alerte os alunos para o risco de anacronismos: figuras do século XII não usavam relógios nem falavam como no século XXI."
      },
      {
        step: 2,
        title: "Construção do Guião Histórico a Duas Vozes (Aula 2 · 50 min)",
        description: "Os alunos redigem as 3 perguntas do jornalista e as 3 respostas fundamentadas da figura histórica. O professor valida o texto no papel ou num documento partilhado antes de qualquer gravação. As respostas devem ser identificadas como dramatização baseada em informação histórica.",
        aiUseMode: "Sem IA",
        subitems: [
          "Pergunta 1: O contexto da época e a principal escolha que a figura teve de fazer.",
          "Pergunta 2: O maior desafio ou oposição que enfrentou na sua vida.",
          "Pergunta 3: O legado que deixou para a sociedade atual."
        ]
      },
      {
        step: 3,
        title: "Preparação de Imagem ou Ilustração de Apoio (Aula 3 · 50 min)",
        description: "O professor ou os alunos (quando autorizados) preparam uma imagem ilustrativa da figura ou do cenário recorrendo a gravuras de domínio público ou ferramentas com termos compatíveis com a conta escolar. Não utilizar ferramentas com restrição de idade como o Perchance para alunos menores.",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Canva para Educação", "Microsoft Clipchamp"]
      },
      {
        step: 4,
        title: "Montagem, Revisão e Legendas (Aula 4 · 50 min)",
        description: "Os pares montam o vídeo de cerca de 90 segundos com recurso a um editor simples, gravando a locução e ativando legendas com ortografia e pontuação revistas. Identificação clara de que se trata de uma simulação educativa.",
        aiUseMode: "Sem IA",
        recommendedTools: ["Microsoft Clipchamp", "CapCut (Web, PC e Telemóvel)"]
      },
      {
        step: 5,
        title: "Apresentação, Validação Histórica e Coavaliação (Aula 5 · 50 min)",
        description: "Exibição dos trabalhos à turma com debate crítico. Os colegas analisam o rigor dos factos apresentados e identificam eventuais anacronismos ou elementos especulativos.",
        aiUseMode: "Sem IA",
        teacherTip: "Promova um ambiente de entreajuda onde o erro factual detetado pelos colegas é uma oportunidade de aprendizagem mútua."
      }
    ],
    studentDeliverables: [
      "Guião escrito com as 3 perguntas, respostas fundamentadas e fontes documentais consultadas.",
      "Vídeo curto de aproximadamente 90 segundos com a simulação da entrevista e legendas revistas.",
      "Ficha de reflexão e evidência de processo: uma decisão tomada pelo par e uma dificuldade ultrapassada."
    ],
    evaluationRubric: [
      {
        id: "historico",
        criterion: "Rigor histórico dos factos apresentados",
        weight: 40,
        evidence: "Exatidão das datas, dos acontecimentos e do contexto da figura, sem anacronismos ou dados falsos."
      },
      {
        id: "linguagem",
        criterion: "Clareza da linguagem e correção do Português",
        weight: 30,
        evidence: "Correção gramatical, vocabulário adequado à época e dicção clara na narração oral e nas legendas."
      },
      {
        id: "sentido_critico",
        criterion: "Sentido crítico na avaliação da imagem gerada por IA",
        weight: 20,
        evidence: "Capacidade de identificar os limites, eventuais imperfeições ou licenças ficcionais da representação visual."
      },
      {
        id: "cooperacao",
        criterion: "Cooperação e respeito no trabalho em equipa",
        weight: 10,
        evidence: "Partilha equilibrada de tarefas entre os elementos do par, cumprimento de prazos e entreajuda."
      }
    ],
    evaluationCriteria: [
      "Rigor histórico dos factos apresentados (40%)",
      "Clareza da linguagem e correção do Português (30%)",
      "Sentido crítico na avaliação da imagem gerada por IA (20%)",
      "Cooperação e respeito no trabalho em equipa (10%)"
    ],
    processEvaluation: {
      selfAssessment: "O aluno identifica uma decisão de pesquisa tomada e uma dificuldade que conseguiu superar.",
      peerAssessment: "Um colega de outro grupo identifica um aspeto factual bem documentado e sugere uma melhoria fundamentada.",
      processEvidence: "Registo da fonte de arquivo consultada, indicação de um elemento descartado por anacronismo e versão final do guião."
    },
    udlAndDifferentiation: {
      representation: "Disponibilizar instruções em texto e orais; fornecer exemplos de guiões e quadros cronológicos de apoio.",
      actionAndExpression: "Possibilidade de apresentar em vídeo, podcast áudio, banda desenhada narrada ou encenação teatral direta.",
      engagement: "Liberdade na escolha da figura histórica dentro dos períodos curriculares; papéis flexíveis no grupo.",
      noTechAlternative: "Elaboração de guião em papel e dramatização presencial em aula com suporte de gravuras impressas (Dec.-Lei n.º 54/2018)."
    },
    pedagogicalFramework: "Taxonomia de Anderson & Krathwohl (Níveis 'Analisar' e 'Criar') + Orientações EduQA 2026/2027.",
    rgpdSafetyChecklist: [
      "Não criar nem divulgar imagens, vídeos ou gravações de voz sintéticas que representem alunos, professores ou colegas.",
      "Nenhum rosto ou voz real de aluno é carregado para plataformas externas de IA.",
      "As pesquisas são realizadas sob a orientação e supervisão ativa do professor."
    ]
  },
  {
    id: "micro-documentario",
    title: "Micro-Documentário: Explicar a Ciência em 60 Segundos",
    discipline: "Ciências Naturais / Físico-Química / Biologia",
    targetCycle: "3.º Ciclo e Ensino Secundário",
    estimatedDuration: "2 semanas (4 aulas de 50 minutos mais trabalho de equipa)",
    icon: "HeartPulse",
    learningObjectives: [
      "Descodificar um fenómeno científico complexo (ex.: a mitose, a energia das ondas, a circulação sanguínea).",
      "Escrever uma locução concisa em que cada palavra conta, aplicando o Princípio da Modalidade de Mayer.",
      "Construir um micro-documentário dinâmico pronto a partilhar com a comunidade escolar."
    ],
    teacherVerificationChecklist: [
      "Qual é a aprendizagem que se pretende desenvolver? (Compreensão e síntese de processos científicos dinâmicos)",
      "A IA acrescenta valor real a esta tarefa? (Auxilia na visualização tridimensional de processos microscópicos ou abstratos)",
      "Que etapas podem ser realizadas sem IA? (Validação científica das fontes, guião, storyboard e revisão das legendas)",
      "Que dados ou conteúdos serão enviados para a ferramenta? (Apenas descrições conceptuais científicas neutras)",
      "A ferramenta está aprovada e é adequada ao contexto? (Ferramentas de edição e software institucional da escola)",
      "Existem alternativas para alunos sem equipamento, conta ou autorização? (Apresentação comentada ou cartaz desdobrável)",
      "Como será verificada a aprendizagem e a contribuição individual dos alunos? (Avaliação da síntese científica e glossário)"
    ],
    whoOperatesTool: {
      firstCycle: "Não aplicável diretamente; no 1.º ciclo o professor operaria qualquer demonstração visual.",
      secondCycle: "O professor disponibiliza previamente um banco de clipes validados para montagem pelos alunos.",
      thirdAndSecondary: "Os alunos podem desenvolver o storyboard, preparar instruções, selecionar referências e avaliar criticamente os resultados. A operação direta das ferramentas de geração de vídeo só pode ocorrer quando a idade mínima, os termos do fornecedor, os requisitos de consentimento e as regras institucionais o permitirem. Quando essas condições não estiverem reunidas, a geração é realizada pelo professor, que apresenta o resultado aos alunos para análise."
    },
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Pesquisa Científica e Validação dos Conceitos (Aula 1 · 50 min)",
        description: "Os alunos escolhem um fenómeno onde o movimento seja crucial. Recolhem informação no manual e em artigos de referência, definindo 3 conceitos-chave que o público leigo tem de reter com rigor.",
        aiUseMode: "Sem IA",
        recommendedTools: ["Manual Escolar", "Artigos de Divulgação Científica", "Simulações PhET"],
        teacherTip: "Quando existir uma simulação científica validada (como as do PhET), utilize-a como fonte de comparação com a representação gerada."
      },
      {
        step: 2,
        title: "Desenho da Narrativa Visual e Storyboard (Aula 2 · 50 min)",
        description: "Em quadrículas de papel ou documento digital, os alunos desenham o que se vai ver e o que a voz vai dizer em três momentos: Introdução (0-15s), O Processo (15-40s) e O Impacto (40-60s).",
        aiUseMode: "Sem IA",
        teacherTip: "Evite texto corrido que repita integralmente a narração. Aplique o Princípio da Redundância de Mayer mantendo legendas de acessibilidade e palavras-chave."
      },
      {
        step: 3,
        title: "Criação de Clipes ou Apoio Visual (Aula 3 · 50 min)",
        description: "Os alunos selecionam imagens de arquivo ou preparam instruções para a criação de um clipe ilustrativo. A operação da ferramenta é feita pelo professor sempre que a idade, a conta, o consentimento ou as regras institucionais não permitam a utilização direta pelos alunos. A escolha da ferramenta deve respeitar os termos de utilização: o Hailuo exige idade mínima de 16 anos; a Luma permite a utilização entre os 13 e os 17 anos apenas com consentimento do progenitor ou representante legal nos termos do fornecedor. As condições do Kling devem ser confirmadas nos termos atuais antes de autorizar a utilização pelos alunos.",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Kling AI", "Luma AI — Ray3.2", "MiniMax — Hailuo AI"]
      },
      {
        step: 4,
        title: "Edição, Revisão, Legendas e Apresentação (Aula 4 · 50 min)",
        description: "Montagem dos elementos audiovisuais no CapCut ou Clipchamp. Gravação da locução clara em Português de Portugal e correção manual da pontuação e dos termos científicos nas legendas automáticas.",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Microsoft Clipchamp", "CapCut (Web, PC e Telemóvel)"]
      }
    ],
    studentDeliverables: [
      "Storyboard com a estrutura dos três momentos e o guião oral redigido.",
      "Vídeo MP4 com cerca de 60 segundos com legendas revistas e acessíveis.",
      "Glossário científico com a definição rigorosa dos 3 termos técnicos utilizados."
    ],
    evaluationRubric: [
      {
        id: "ciencia",
        criterion: "Correção científica dos conceitos",
        weight: 45,
        evidence: "Rigor conceptual na explicação do fenómeno biológico ou físico-químico, sem conceções alternativas erradas."
      },
      {
        id: "sintese",
        criterion: "Capacidade de síntese e clareza da locução",
        weight: 30,
        evidence: "Estruturação concisa em 60 segundos, ritmo pausado, tom pedagógico e respeito pelo tempo do espectador."
      },
      {
        id: "montagem",
        criterion: "Qualidade da montagem e ritmo de visualização",
        weight: 15,
        evidence: "Fluidez nos cortes, sincronização entre imagem e palavra, e volume calibrado da locução."
      },
      {
        id: "acessibilidade",
        criterion: "Acessibilidade e revisão das legendas",
        weight: 10,
        evidence: "Legendas sincronizadas, sem erros de transcrição fonética, e inclusão de transcrição textual de apoio."
      }
    ],
    evaluationCriteria: [
      "Correção científica dos conceitos (45%)",
      "Capacidade de síntese e clareza da locução (30%)",
      "Qualidade da montagem e ritmo de visualização (15%)",
      "Acessibilidade e revisão das legendas (10%)"
    ],
    processEvaluation: {
      selfAssessment: "O grupo regista uma alteração que fez ao texto da narração para tornar o conceito mais compreensível.",
      peerAssessment: "Um colega valida se o glossário técnico corresponde com exatidão ao que é explicado no vídeo.",
      processEvidence: "Rascunho inicial do storyboard com as anotações do professor e versão final exportada."
    },
    udlAndDifferentiation: {
      representation: "Fornecer esquemas gráficos do processo antes da redação do guião; disponibilizar modelos de storyboards.",
      actionAndExpression: "Possibilidade de criar animação passo a passo, infográfico interactivo ou demonstração com modelos físicos.",
      engagement: "Escolha do fenómeno científico pelo grupo; atribuição de tarefas de redação, gravação e revisão técnica.",
      noTechAlternative: "Apresentação oral com maquete ou póster científico em papel ilustrado à mão (Dec.-Lei n.º 54/2018)."
    },
    pedagogicalFramework: "Princípios da Segmentação e Modalidade de Richard Mayer (2020) + DUA.",
    rgpdSafetyChecklist: [
      "Utilizar apenas música cuja licença permita a utilização pretendida (ex.: Wikimedia Commons, Europeana, arquivo com licença educativa).",
      "Confirmar condições de atribuição de cada faixa e imagem de terceiros.",
      "Não carregar gravações com dados identificativos dos estudantes."
    ]
  },
  {
    id: "noticiario-critico",
    title: "O Noticiário de Ciência: Separar Facto de Ficção",
    discipline: "Cidadania e Desenvolvimento / Português / Geografia",
    targetCycle: "3.º Ciclo e Secundário",
    estimatedDuration: "2 a 3 aulas de 50 minutos",
    icon: "Newspaper",
    learningObjectives: [
      "Desenvolver literacia mediática: aprender a identificar como a IA pode ser usada para desinformar ou simular notícias falsas.",
      "Recriar uma notícia séria sobre alterações climáticas ou biodiversidade com base em relatórios científicos reais (IPCC, ICNF).",
      "Desenvolver procedimentos de verificação da origem, data, contexto e fontes de um conteúdo audiovisual; rotular sintéticos com transparência."
    ],
    teacherVerificationChecklist: [
      "Qual é a aprendizagem que se pretende desenvolver? (Literacia mediática, sentido crítico e verificação de fontes)",
      "A IA acrescenta valor real a esta tarefa? (Permite analisar como funcionam as manipulações e praticar a rotulagem ética)",
      "Que etapas podem ser realizadas sem IA? (Verificação cruzada de notícias, pesquisa documental e debate em aula)",
      "Que dados ou conteúdos serão enviados para a ferramenta? (Apenas texto noticioso simulado baseado em relatórios públicos)",
      "A ferramenta está aprovada e é adequada ao contexto? (Canva para Educação ou ferramentas de edição autorizadas)",
      "Existem alternativas para alunos sem equipamento, conta ou autorização? (Artigo jornalístico escrito no jornal da escola)",
      "Como será verificada a aprendizagem e a contribuição individual dos alunos? (Checklist de verificação de factos assinada)"
    ],
    whoOperatesTool: {
      firstCycle: "Não aplicável a este nível de complexidade.",
      secondCycle: "O professor conduz a análise de exemplos no quadro interativo e coordena o debate crítico.",
      thirdAndSecondary: "Os alunos realizam a redação e edição em pares sob supervisão das orientações de cidadania digital."
    },
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Análise de Conteúdos Sintéticos e Desinformação (Aula 1 · 50 min)",
        description: "Os alunos analisam notícias reais e peças geradas por computador, avaliando contexto, data, fonte primária e confirmação em fontes independentes. A própria tecnologia de IA generativa é objeto de estudo.",
        aiUseMode: "IA integrada",
        recommendedTools: ["Exemplos de Noticiários", "Arquivo RTP"],
        teacherTip: "A aparência visual não basta para determinar autenticidade: ensine a verificar a cadeia de custódia e a fonte original."
      },
      {
        step: 2,
        title: "Pesquisa e Verificação de Fontes Científicas (Aula 2 · 50 min)",
        description: "A turma simula a redação de um telejornal de ciência, elaborando uma peça noticiosa rigorosa baseada num relatório ambiental autêntico (ex.: seca, preservação do lince ibérico, transição energética).",
        aiUseMode: "Sem IA",
        recommendedTools: ["Relatórios IPCC", "Portal ICNF", "Agência Portuguesa do Ambiente"]
      },
      {
        step: 3,
        title: "Produção de Elementos Ilustrativos com Rotulagem Ética (Aula 2/3 · 50 min)",
        description: "Os alunos criam elementos visuais de apoio ou vinhetas de telejornal no Canva ou Clipchamp. Rotulam de forma visível e transparente qualquer imagem sintética como 'Reconstituição ilustrativa gerada por computador'.",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Canva para Educação", "Microsoft Clipchamp"]
      },
      {
        step: 4,
        title: "Análise Crítica Final e Debate em Aula (Aula 3 · 50 min)",
        description: "Visualização coletiva das peças produzidas. Debate sobre o impacto da desinformação, a distinção entre divulgação pedagógica e obrigações jurídicas concretas do artigo 50.º e a importância da verificação de fontes. Não apresentar a rotulagem na atividade como dever legal universal dos alunos.",
        aiUseMode: "Sem IA",
        teacherTip: "Sensibilize para as regras relativas a imagens de pessoas reais e os procedimentos de comunicação escolar perante incidentes digitais."
      }
    ],
    studentDeliverables: [
      "Texto da notícia com citação explícita do relatório científico fonte (IPCC, ICNF ou APA).",
      "Vídeo da peça noticiosa com identificação clara e percetível de que contém elementos gerados por IA.",
      "Checklist de verificação de factos assinada pelo grupo."
    ],
    evaluationRubric: [
      {
        id: "fidelidade_fonte",
        criterion: "Fidelidade da notícia à fonte científica",
        weight: 40,
        evidence: "Dados estatísticos, conclusões e contexto rigorosamente fiéis ao relatório científico consultado."
      },
      {
        id: "verificacao_factos",
        criterion: "Verificação das fontes e dos factos",
        weight: 30,
        evidence: "Aplicação do método de verificação cruzada e indicação transparente das fontes primárias."
      },
      {
        id: "comunicacao",
        criterion: "Clareza da comunicação e dicção",
        weight: 20,
        evidence: "Estrutura jornalística clara (lead, desenvolvimento, fecho) e dicção cuidada na locução."
      },
      {
        id: "transparencia_ia",
        criterion: "Identificação transparente dos elementos sintéticos",
        weight: 10,
        evidence: "Identifica de forma clara os elementos visuais gerados ou alterados por IA, distingue ilustração de registo documental e indica as fontes utilizadas. A avaliação incide na transparência pedagógica e na literacia mediática, não numa certificação do cumprimento jurídico do artigo 50.º."
      }
    ],
    evaluationCriteria: [
      "Fidelidade da notícia à fonte científica (40%)",
      "Verificação das fontes e dos factos (30%)",
      "Clareza da comunicação e dicção (20%)",
      "Identificação transparente dos elementos sintéticos (10%)"
    ],
    processEvaluation: {
      selfAssessment: "O grupo regista uma afirmação duvidosa encontrada na internet que conseguiu desmentir com a fonte oficial.",
      peerAssessment: "Um colega avalia se a rotulagem de IA é percetível e se a notícia cita claramente a entidade científica.",
      processEvidence: "Ficha de verificação de factos com as hiperligações para as fontes primárias e o guião da notícia."
    },
    udlAndDifferentiation: {
      representation: "Fornecer sínteses prévias dos relatórios do IPCC com vocabulário simplificado e glossário.",
      actionAndExpression: "Apresentação como podcast radiofónico, artigo de jornal escolar ilustrado ou vídeo de bancada.",
      engagement: "Papéis diferenciados: jornalista de investigação, pivot de notícias, verificador de factos e editor de imagem.",
      noTechAlternative: "Produção de um boletim informativo impresso em papel com análise de recortes de imprensa (Dec.-Lei n.º 54/2018)."
    },
    pedagogicalFramework: "Referencial de Educação para os Media (DGE) + Regulamento (UE) 2024/1689 e 2026/1744.",
    rgpdSafetyChecklist: [
      "Rotulagem clara de que as imagens são criadas por computador.",
      "Proibição absoluta de simular notícias falsas alarmistas ou boatos de pânico que envolvam a escola ou a comunidade.",
      "Não criar réplicas de pessoas reais sem consentimento institucional."
    ]
  },
  {
    id: "quadros-animados",
    title: "Vozes do Património: O Quadro que Conta a Sua História",
    discipline: "Educação Visual / História / Literatura",
    targetCycle: "1.º ao 3.º Ciclo e Secundário",
    estimatedDuration: "3 a 4 aulas práticas de 50 minutos",
    icon: "Boxes",
    learningObjectives: [
      "Observar com detalhe uma obra de arte do património nacional ou universal.",
      "Investigar o contexto histórico e cultural da obra e analisar os seus elementos visuais, distinguindo informação documentada de interpretações possíveis.",
      "Dar um movimento subtil à pintura e criar uma narrativa na primeira pessoa com a perspetiva de quem viveu a cena."
    ],
    teacherVerificationChecklist: [
      "Qual é a aprendizagem que se pretende desenvolver? (Interpretação estética, contexto patrimonial e expressão escrita)",
      "A IA acrescenta valor real a esta tarefa? (Permite animar subtilmente um detalhe plástico sem deturpar a obra)",
      "Que etapas podem ser realizadas sem IA? (Estudo da obra no museu/manual, redação do monólogo e avaliação estética)",
      "Verificar os direitos de autor da obra e as condições de utilização da respetiva reprodução digital. A disponibilidade pública de uma imagem não significa automaticamente que esteja no domínio público ou que possa ser reutilizada sem restrições.",
      "A ferramenta está aprovada e é adequada ao contexto? (Ferramentas com verificação de direitos)",
      "Existem alternativas para alunos sem equipamento, conta ou autorização? (Dramatização de 'quadro vivo' em aula)",
      "Como será verificada a aprendizagem e a contribuição individual dos alunos? (Ficha de análise artística e monólogo literário)"
    ],
    whoOperatesTool: {
      firstCycle: "O professor opera a animação subtil da pintura no ecrã da turma; os alunos criam a história e fazem a voz.",
      secondCycle: "O professor apoia a animação com ferramentas institucionais; alunos redigem e gravam em pares.",
      thirdAndSecondary: "Os alunos podem preparar o storyboard, selecionar os elementos visuais, escrever o monólogo e realizar a edição e gravação áudio. A geração da animação deve ser operada pelo professor sempre que a ferramenta escolhida tenha restrições de idade ou a escola não autorize a utilização direta pelos alunos. O Pika exige utilizadores com pelo menos 18 anos; por isso, não deve ser indicado como ferramenta de utilização direta por alunos menores, mesmo com autorização parental. A utilização do Kling pelos alunos só pode ocorrer depois de confirmadas as condições etárias e os termos aplicáveis."
    },
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Investigação da Obra e Visita Virtual (Aula 1 · 50 min)",
        description: "Através do Google Arts & Culture ou dos portais dos museus nacionais (MNAA, Soares dos Reis), os alunos escolhem uma pintura histórica e documentam autor, data, estilo plástico e contexto.",
        aiUseMode: "Sem IA",
        recommendedTools: ["Google Arts & Culture", "Portal do Museu Nacional de Arte Antiga"]
      },
      {
        step: 2,
        title: "Construção da Narrativa na Primeira Pessoa (Aula 2 · 50 min)",
        description: "Os alunos assumem a perspetiva de uma personagem retratada ou de um observador da época e escrevem um monólogo poético de cerca de 40 segundos, expressando os sentimentos e o contexto histórico da cena. O monólogo é uma criação ficcional dos alunos. Não deve ser apresentado como testemunho real da personagem nem como declaração documentada do artista.",
        aiUseMode: "Sem IA",
        teacherTip: "Excelente oportunidade para trabalhar a empatia histórica, a adjetivação expressiva e a norma do Português."
      },
      {
        step: 3,
        title: "Animação Ilustrativa do Detalhe (Aula 3 · 50 min)",
        description: "O professor opera o Pika quando esta ferramenta é escolhida, uma vez que os seus termos exigem idade mínima de 18 anos. O Kling só pode ser operado diretamente pelos alunos depois de se confirmar que cumprem os termos etários e as condições de utilização aplicáveis. Os alunos participam na preparação do storyboard, na escolha dos movimentos ilustrativos e na avaliação crítica do resultado. Deve privilegiar-se um movimento subtil que preserve a composição da obra (por exemplo, o movimento de um tecido, da água ou da luz).",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Pika", "Kling AI"]
      },
      {
        step: 4,
        title: "Avaliação Crítica da Animação e Partilha (Aula 4 · 50 min)",
        description: "No Clipchamp, monta-se o clipe animado com a voz expressiva do aluno gravada ao microfone. Apresentação à turma com debate sobre como a animação preserva ou altera a composição, os elementos visuais e a leitura possível da obra. Não atribuir uma intenção ao artista sem uma fonte documental que a sustente.",
        aiUseMode: "Sem IA",
        recommendedTools: ["Microsoft Clipchamp"]
      }
    ],
    studentDeliverables: [
      "Ficha técnica da obra (autor, data, técnica plástica e museu onde se encontra preservada).",
      "Monólogo literário escrito na primeira pessoa com revisão linguística.",
      "Vídeo final de cerca de 40 segundos unindo a imagem animada com respeito à locução expressiva."
    ],
    evaluationRubric: [
      {
        id: "profundidade",
        criterion: "Profundidade e sensibilidade da interpretação artística",
        weight: 40,
        evidence: "Compreensão da mensagem estética da obra, sensibilidade histórica e expressividade literária do monólogo."
      },
      {
        id: "respeito_plastico",
        criterion: "Qualidade e respeito pelo estilo plástico da obra",
        weight: 30,
        evidence: "Preservação da paleta de cores, da textura pictórica e da iluminação original do pintor na animação."
      },
      {
        id: "diccao",
        criterion: "Expressividade e dicção da narração oral",
        weight: 20,
        evidence: "Tom emotivo adequado ao contexto da cena, ritmo pausado e pronúncia cuidada em língua portuguesa."
      },
      {
        id: "autonomia",
        criterion: "Autonomia e empenho na atividade",
        weight: 10,
        evidence: "Pesquisa autónoma sobre o museu, cuidado na preparação dos materiais e respeito pelo trabalho dos colegas."
      }
    ],
    evaluationCriteria: [
      "Profundidade e sensibilidade da interpretação artística (40%)",
      "Qualidade e respeito pelo estilo plástico da obra (30%)",
      "Expressividade e dicção da narração oral (20%)",
      "Autonomia e empenho na atividade (10%)"
    ],
    processEvaluation: {
      selfAssessment: "O aluno identifica uma frase do monólogo que reescreveu para refletir melhor o estado de espírito da personagem.",
      peerAssessment: "Um colega comenta se o movimento gerado parece natural ou se prejudicou a composição original da pintura.",
      processEvidence: "Ficha de museu preenchida com a análise plástica da tela e ficheiro final do monólogo."
    },
    udlAndDifferentiation: {
      representation: "Proporcionar reproduções em alta resolução com ampliações de detalhes e audiodescrições da pintura.",
      actionAndExpression: "Opção de encenar a pintura fisicamente (técnica de 'quadro vivo'), gravar monólogo sonoro ou criar texto epistolar.",
      engagement: "Escolha da obra de arte de acordo com as preferências dos alunos (pintura renascentista, barroca ou modernista).",
      noTechAlternative: "Reconstituição presencial de 'quadro vivo' em sala com figurinos simples e leitura expressiva (Dec.-Lei n.º 54/2018)."
    },
    pedagogicalFramework: "Plano Nacional das Artes (PNA) + Taxonomia de Anderson & Krathwohl (Nível 'Criar').",
    rgpdSafetyChecklist: [
      "Verificar os direitos de autor da obra e as condições de utilização da respetiva reprodução digital. A disponibilidade pública de uma imagem não significa automaticamente que esteja no domínio público ou que possa ser reutilizada sem restrições.",
      "Verificação de licenças em repositórios abertos (Wikimedia Commons, Europeana).",
      "Processamento seguro sem exposição de dados individuais dos estudantes."
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
