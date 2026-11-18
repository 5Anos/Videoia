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
  requiredInput?: string;
  toolSetup?: string;
  promptLabel?: string;
  copyButtonLabel?: string;
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
  },
  {
    id: 6,
    title: "6. Envolver os alunos na criação de vídeos",
    shortTitle: "Criação pelos alunos",
    description: "Permite ao professor envolver os alunos na conceção e produção de vídeos com apoio de ferramentas de Inteligência Artificial. Os alunos podem pesquisar informação, elaborar guiões, planear cenas, selecionar recursos visuais, criar narrativas audiovisuais e analisar criticamente os resultados.",
    capabilities: [
      "Elaborar guiões e storyboards a partir de conteúdos curriculares.",
      "Criar vídeos explicativos, apresentações e narrativas audiovisuais em grupo.",
      "Utilizar funcionalidades de IA para apoiar a criação ou adaptação de elementos visuais, narração e legendas, quando disponíveis na conta.",
      "Analisar criticamente os resultados gerados por IA, identificar erros e justificar as escolhas realizadas."
    ],
    usefulTools: [
      {
        name: "Canva para Educação",
        description: "Criar e editar vídeos e apresentações multimédia em projetos individuais ou colaborativos, utilizando os modelos e as funcionalidades de IA disponíveis e autorizadas na conta educativa."
      },
      {
        name: "Microsoft Clipchamp",
        description: "Montar sequências de vídeo, gravar narrações, editar áudio e vídeo e adicionar legendas, de acordo com as funcionalidades disponíveis na conta."
      }
    ],
    teacherBenefits: [
      "Colocar os alunos no papel de autores e comunicadores do conhecimento.",
      "Desenvolver a criatividade, a comunicação, a colaboração e a literacia digital.",
      "Observar a compreensão dos conteúdos através das explicações e escolhas presentes nos vídeos.",
      "Promover o pensamento crítico através da análise e validação dos conteúdos gerados por IA."
    ],
    pedagogicalNote: "Definir previamente os objetivos de aprendizagem e os critérios de qualidade. Valorizar o processo de pesquisa, elaboração do guião, produção e revisão, não apenas o vídeo final. Antes de envolver os alunos, confirmar a idade mínima, os termos do fornecedor, as permissões da conta escolar e as regras da instituição. Quando uma ferramenta não permitir a utilização direta por menores, o professor opera as funcionalidades de IA e os alunos participam na preparação e análise dos conteúdos. Não carregar imagens, vozes ou dados pessoais dos alunos sem as autorizações e validações aplicáveis."
  }
];

// 3. BANCO DE PROMPTS PARA VÍDEOS COM IA (17 PROMPTS PRONTOS A UTILIZAR)
export const EDUCATIONAL_PROMPTS: EducationalPrompt[] = [
  {
    id: 1,
    title: "O percurso do sangue no coração",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "3.º Ciclo (9.º ano)",
    creationType: "Apresentador virtual — vídeo explicativo com guião e esquema anatómico de apoio",
    recommendedTool: "Vidnoz AI — AI Video Wizard",
    pedagogicalObjective: "Visualizar o percurso do sangue na circulação pulmonar e sistémica, distinguindo os dois circuitos.",
    requiredInput: "Esquema anatómico validado do coração, em formato PNG ou JPG, com cavidades e principais vasos sanguíneos identificados.",
    toolSetup: "Abrir o Vidnoz AI Video Wizard, selecionar um avatar público adulto e uma voz em português, se disponível. Carregar o esquema anatómico validado do coração e utilizá-lo como apoio visual durante a explicação. Introduzir o texto de narração fornecido, rever as cenas e confirmar a correspondência entre a fala e o esquema antes de gerar o vídeo. A conta deve ser utilizada pelo professor adulto.",
    promptLabel: "Prompt para o AI Video Wizard",
    copyButtonLabel: "Copiar prompt",
    promptText: `Cria um vídeo educativo curto, em português de Portugal, com um apresentador virtual adulto a explicar o percurso do sangue na circulação pulmonar e sistémica.

Utiliza exclusivamente o esquema anatómico carregado como referência visual para a explicação. Não inventes, redesenhes ou alteres a anatomia do coração. Não substituas as cavidades, válvulas ou vasos sanguíneos identificados no esquema.

O apresentador deve explicar, pela seguinte ordem:

1. O sangue pobre em oxigénio regressa do organismo e entra na aurícula direita pelas veias cavas.
2. Passa pela válvula tricúspide para o ventrículo direito.
3. Sai pelas artérias pulmonares em direção aos pulmões, onde ocorre a hematose.
4. O sangue oxigenado regressa pelas veias pulmonares à aurícula esquerda.
5. Passa pela válvula mitral para o ventrículo esquerdo.
6. Sai pela aorta e é distribuído por todo o organismo.

Utiliza linguagem científica correta, frases curtas e uma explicação adequada a alunos do 9.º ano.

Mantém o esquema visível nas cenas correspondentes. Não acrescentes informação anatómica que não esteja representada ou validada.`,
    validationNote: "Confirmar a sequência das cavidades, válvulas e vasos sanguíneos. Verificar especialmente que as artérias pulmonares transportam sangue do coração para os pulmões e que as veias pulmonares transportam sangue dos pulmões para o coração. O esquema deve ser validado pelo professor. O avatar não deve criar uma nova representação anatómica."
  },
  {
    id: 2,
    title: "A chegada de Vasco da Gama à Índia (1498)",
    discipline: "História",
    gradeLevel: "2.º Ciclo (5.º ou 6.º ano)",
    creationType: "Imagem para vídeo — animação de ilustração histórica",
    recommendedTool: "Adobe Firefly — Gerar Vídeo (Imagem para Vídeo)",
    pedagogicalObjective: "Representar visualmente a chegada da expedição de Vasco da Gama a Calecute em 1498, distinguindo uma reconstituição de um documento histórico.",
    requiredInput: "Ilustração histórica devidamente licenciada de embarcações portuguesas junto à costa de Calecute.",
    toolSetup: "Abrir Firefly, selecionar Vídeo > Gerar Vídeo, carregar a ilustração como primeiro quadro e utilizar o campo Prompt para descrever o movimento. O modelo deve utilizar a imagem carregada como referência visual.",
    promptLabel: "Prompt",
    copyButtonLabel: "Copiar prompt",
    promptText: "As ondas movem-se suavemente junto às embarcações e as velas ondulam com a brisa. A câmara aproxima-se lentamente da frota, mantendo um movimento contínuo e discreto.",
    validationNote: "Identificar o resultado como reconstituição histórica ilustrativa gerada por IA, nunca como filmagem documental autêntica. Confrontar a representação com fontes históricas."
  },
  {
    id: 3,
    title: "O ciclo da água",
    discipline: "Ciências Naturais / Geografia",
    gradeLevel: "2.º Ciclo (5.º ano)",
    creationType: "Imagem para vídeo — animação de esquema científico",
    recommendedTool: "Google Vids — Animar Imagem com IA",
    pedagogicalObjective: "Representar as principais etapas do ciclo da água, incluindo evaporação, condensação, precipitação, escoamento e infiltração.",
    requiredInput: "Esquema do ciclo da água em formato JPG ou PNG. Preferir uma imagem nítida, sem legendas demasiado pequenas.",
    toolSetup: "Abrir o Google Vids e carregar o esquema do ciclo da água. Selecionar a funcionalidade de animação de imagem, quando disponível na conta. Introduzir o texto no campo destinado à descrição do movimento. Utilizar a imagem original como referência e verificar o resultado antes de o integrar no vídeo final.",
    promptLabel: "Prompt",
    copyButtonLabel: "Copiar prompt",
    promptText: `Animate this water cycle diagram with subtle, natural movement. Keep the original scientific diagram, labels, arrows, colours and layout unchanged.

Show the clouds moving slowly across the sky. Animate raindrops falling from the clouds towards the land and water. Show gentle movement of surface water towards rivers and the sea.

Represent the water cycle in a calm and educational way. Keep the camera fixed and stable. Do not add new labels, arrows, symbols or scientific elements. Do not change the original diagram or rearrange its components.

The animation must preserve the scientific information in the uploaded image.`,
    validationNote: "Confirmar que a imagem original mantém as legendas, setas e etapas do ciclo da água. Verificar a evaporação, condensação, precipitação, escoamento e infiltração. A animação pode alterar elementos do esquema; se isso acontecer, utilizar novamente a imagem original e acrescentar os movimentos no editor. Não aceitar alterações científicas introduzidas pela IA."
  },
  {
    id: 4,
    title: "A mitose celular",
    discipline: "Biologia e Geologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    creationType: "Apresentador virtual — explicação científica com imagens de apoio",
    recommendedTool: "HeyGen — AI Studio",
    pedagogicalObjective: "Identificar visualmente as fases da mitose e compreender a separação das cromátides-irmãs.",
    requiredInput: "Esquema cientificamente validado das quatro fases da mitose, de preferência com uma imagem ou painel separado para cada fase.",
    toolSetup: "Criar cinco cenas no HeyGen AI Studio. Escolher um avatar público adulto e uma voz adequada. Utilizar o primeiro parágrafo como introdução e os quatro parágrafos seguintes, separadamente, nas cenas correspondentes. Inserir a imagem validada de cada fase como recurso visual da respetiva cena. Não pedir ao avatar para gerar esquemas celulares.",
    promptLabel: "Guião para o AI Studio",
    copyButtonLabel: "Copiar guião",
    promptText: "A mitose é a divisão do núcleo que, juntamente com a citocinese, permite formar duas células-filhas com a mesma informação genética e o mesmo número de cromossomas da célula inicial.\n\nNa prófase, os cromossomas condensam-se e o fuso mitótico começa a organizar-se.\n\nNa metáfase, os cromossomas alinham-se no plano equatorial da célula.\n\nNa anáfase, as cromátides-irmãs separam-se e deslocam-se para polos opostos.\n\nNa telófase, formam-se dois novos núcleos. A citocinese divide o citoplasma e completa a separação das duas células-filhas.",
    validationNote: "Confirmar a correspondência entre cada imagem e a respetiva fase. A citocinese é o processo de divisão do citoplasma, distinto da divisão do núcleo."
  },
  {
    id: 5,
    title: "Como se formam os vulcões nas zonas de subducção?",
    discipline: "Ciências Naturais / Geologia",
    gradeLevel: "3.º Ciclo (7.º ano)",
    creationType: "Script to Video — vídeo explicativo com narração",
    recommendedTool: "InVideo AI — Script to Video",
    pedagogicalObjective: "Visualizar a subducção de uma placa oceânica e a formação de magma na região do manto sobrejacente.",
    requiredInput: "Corte geológico validado de uma zona de subducção, com a placa oceânica, o manto sobrejacente e o percurso do magma identificados.",
    toolSetup: "Selecionar o fluxo Script to Video. Utilizar o guião incluído no prompt como narração e carregar o corte geológico como recurso visual. Rever as imagens e substituir qualquer representação geológica incorreta pelo esquema validado antes de exportar.",
    promptLabel: "Prompt para Script to Video",
    copyButtonLabel: "Copiar prompt",
    promptText: `Cria um vídeo educativo de 45 a 60 segundos, em português de Portugal, sobre a formação de vulcões em zonas de subducção.

Utiliza exatamente o seguinte texto como narração, sem alterar os conceitos científicos:

"Nas zonas de convergência, duas placas tectónicas aproximam-se. Quando uma placa oceânica converge com outra placa, a placa oceânica, geralmente mais densa, mergulha sob a outra. Este processo chama-se subducção.

À medida que a placa oceânica desce, liberta água dos minerais que transporta. Essa água favorece a fusão parcial das rochas do manto sobrejacente, originando magma.

O magma pode ascender através da crosta e alimentar vulcões. Assim se formam muitos dos vulcões associados às zonas de subducção."

Utiliza o corte geológico carregado como principal recurso visual. Mostra a placa oceânica a mergulhar sob a outra placa, a formação de magma no manto sobrejacente e a sua ascensão em direção à superfície.

Não representes a placa oceânica como totalmente fundida. Não coloques a origem do magma na placa em subducção. Não inventes legendas científicas.

Utiliza imagens de apoio simples e coerentes com o esquema fornecido. Mantém uma linguagem visual adequada a alunos do 7.º ano.`,
    validationNote: "Confirmar que a placa oceânica mergulha sob a outra placa e que a água libertada favorece a fusão parcial do manto sobrejacente. O magma não deve ser representado como resultado da fusão total da placa em subducção. Rever todas as imagens antes da exportação."
  },
  {
    id: 6,
    title: "Segurança no laboratório de Ciências",
    discipline: "Ciências Naturais / Físico-Química",
    gradeLevel: "3.º Ciclo (7.º ao 9.º ano)",
    creationType: "Edição de vídeo — montagem de imagens, narração com voz sintética e legendagem automática",
    recommendedTool: "Microsoft Clipchamp — Texto para Voz e Legendas",
    pedagogicalObjective: "Apresentar regras fundamentais de segurança laboratorial através de um vídeo explicativo com imagens, narração e legendas.",
    requiredInput: "Imagens ou clips curtos que mostrem a utilização de equipamentos de proteção, a organização de uma bancada e comportamentos seguros no laboratório.",
    toolSetup: "Importar as imagens ou clips para o editor do Clipchamp. Selecionar Gravar e Criar > Texto para Voz e inserir o texto de narração. Escolher uma voz em português disponível e pré-visualizar o áudio. Organizar as imagens de acordo com a narração. No final, utilizar a funcionalidade de legendas automáticas e rever cuidadosamente o texto gerado. Se não existir uma voz adequada em português de Portugal, gravar a narração do professor.",
    promptLabel: "Texto para narração",
    copyButtonLabel: "Copiar texto",
    promptText: `Antes de iniciar uma experiência, lê atentamente as instruções do professor e coloca o equipamento de proteção indicado.

Prende o cabelo comprido e mantém a bancada organizada.

Nunca comas, bebas ou proves reagentes no laboratório. Não cheires diretamente os recipientes.

Utiliza os materiais e equipamentos apenas de acordo com as instruções recebidas.

Se ocorrer um derrame ou acidente, afasta-te e informa imediatamente o professor. Não tentes limpar sem orientação.

No laboratório, a segurança é responsabilidade de todos.`,
    validationNote: "Confirmar que as imagens correspondem às regras de segurança apresentadas na narração. Rever todas as legendas, especialmente os termos relacionados com equipamentos e materiais laboratoriais. Adaptar as regras ao regulamento do laboratório da escola. O Clipchamp é utilizado para montagem, narração e legendagem, não para criar um apresentador virtual."
  },
  {
    id: 7,
    title: "O Teorema de Pitágoras: a relação entre as áreas",
    discipline: "Matemática",
    gradeLevel: "3.º Ciclo (8.º ano)",
    creationType: "Guião de narração com IA e montagem de vídeo com diagrama matemático",
    recommendedTool: "Canva para Educação — Magic Write e Editor de Vídeo",
    pedagogicalObjective: "Visualizar a relação entre as áreas dos quadrados construídos sobre os lados de um triângulo retângulo.",
    requiredInput: "Diagrama criado e validado no GeoGebra, com um triângulo retângulo de catetos 3 cm e 4 cm, hipotenusa 5 cm e quadrados construídos externamente sobre os três lados.",
    toolSetup: "Abrir um Canva Doc ou design e utilizar o Magic Write para criar a narração. Depois, abrir o Editor de Vídeo, inserir o diagrama original do GeoGebra e acrescentar a narração gravada ou gerada pela ferramenta disponível. Animar apenas a entrada dos elementos no editor. Não utilizar geração de vídeo por IA para redesenhar o diagrama.",
    promptLabel: "Prompt para Magic Write",
    copyButtonLabel: "Copiar prompt",
    promptText: "Escreve uma narração de 35 a 45 segundos, em português de Portugal, para um vídeo de Matemática do 8.º ano sobre o Teorema de Pitágoras. Utiliza apenas este exemplo: um triângulo retângulo com catetos de 3 cm e 4 cm e hipotenusa de 5 cm. Explica que as áreas dos quadrados construídos sobre os catetos são 9 cm² e 16 cm² e que a área do quadrado sobre a hipotenusa é 25 cm². Relaciona estes valores com 9 + 16 = 25 e 3² + 4² = 5². Utiliza linguagem clara, adequada à idade, sem alterar os valores nem o exemplo.",
    validationNote: "Confirmar todos os valores e a fórmula. O diagrama geométrico deve manter-se como imagem validada do GeoGebra, sem geração de novas medidas ou formas."
  },
  {
    id: 8,
    title: "Inês de Castro: História, Lenda e Literatura",
    discipline: "Português / História",
    gradeLevel: "3.º Ciclo (9.º ano) e Ensino Secundário",
    creationType: "Imagem para vídeo — animação de ilustração literária",
    recommendedTool: "PixVerse — Image to Video",
    pedagogicalObjective: "Criar uma representação visual inspirada no episódio de Inês de Castro, distinguindo a dimensão histórica da construção literária e lendária.",
    requiredInput: "Ilustração artística de Inês de Castro, com autorização de utilização.",
    toolSetup: "Selecionar Image to Video e carregar a ilustração. O texto deve descrever os movimentos pretendidos, não voltar a descrever todos os elementos da imagem.",
    promptLabel: "Prompt",
    copyButtonLabel: "Copiar prompt",
    promptText: "A água ondula suavemente, as folhas movem-se com uma brisa leve e o tecido do vestido acompanha discretamente o movimento. A câmara aproxima-se lentamente, mantendo o estilo e a composição da ilustração.",
    validationNote: "Distinguir a informação histórica, a tradição lendária e a representação literária de Camões. A Quinta das Lágrimas deve ser apresentada como espaço associado à tradição lendária, não como local historicamente comprovado do acontecimento."
  },
  {
    id: 9,
    title: "A fotossíntese: da luz à produção de matéria orgânica",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    creationType: "Edição de vídeo — narração científica, legendagem e montagem com esquema validado",
    recommendedTool: "CapCut — Texto para Voz e Legendas Automáticas",
    pedagogicalObjective: "Visualizar a relação entre as reações dependentes da luz nos tilacoides e o ciclo de Calvin no estroma do cloroplasto.",
    requiredInput: "Esquema cientificamente validado de um cloroplasto, com os tilacoides e o estroma identificados.",
    toolSetup: "Importar o esquema validado para o CapCut. Organizar a imagem no vídeo e adicionar o texto de narração. Utilizar a funcionalidade de texto para voz, se disponível na versão utilizada, ou gravar a narração. Gerar legendas automáticas e rever todos os termos científicos. Não utilizar a geração de imagens por IA para substituir o esquema científico fornecido pelo professor.",
    promptLabel: "Texto para narração",
    copyButtonLabel: "Copiar texto",
    promptText: `A fotossíntese é o processo através do qual os organismos fotossintéticos utilizam a energia da luz para produzir compostos orgânicos.

Nas membranas dos tilacoides dos cloroplastos decorrem as reações dependentes da luz. Durante estas reações, ocorre a fotólise da água, há libertação de oxigénio e são produzidos ATP e NADPH.

No estroma do cloroplasto decorre o ciclo de Calvin, que utiliza ATP e NADPH para fixar dióxido de carbono e formar compostos orgânicos.

As duas etapas estão relacionadas e permitem transformar energia luminosa em energia química armazenada em moléculas orgânicas.`,
    validationNote: "Confirmar que as reações dependentes da luz decorrem nas membranas dos tilacoides e que o ciclo de Calvin ocorre no estroma. Verificar a pronúncia de tilacoides, estroma, ATP, NADPH e dióxido de carbono. Rever todas as legendas. O esquema científico deve ser fornecido e validado pelo professor."
  },
  {
    id: 10,
    title: "Multiplicação prática: três grupos de quatro",
    discipline: "Matemática",
    gradeLevel: "1.º Ciclo (3.º ano)",
    creationType: "Guião de narração com IA e montagem de vídeo com elementos gráficos",
    recommendedTool: "Canva para Educação — Magic Write e Editor de Vídeo",
    pedagogicalObjective: "Representar a multiplicação como adição repetida através de três grupos com quatro elementos cada.",
    requiredInput: "Design de vídeo com três caixas iguais, cada uma com exatamente quatro maçãs vermelhas, criadas manualmente a partir dos elementos do Canva.",
    toolSetup: "Utilizar Magic Write para preparar a narração. No Editor de Vídeo, construir manualmente os três grupos com quatro maçãs cada. Animar a entrada de cada grupo de forma sequencial e adicionar a expressão matemática no final. Não utilizar geração de imagem ou vídeo por IA para criar ou contar as maçãs.",
    promptLabel: "Prompt para Magic Write",
    copyButtonLabel: "Copiar prompt",
    promptText: "Escreve uma narração de 20 a 25 segundos, em português de Portugal, para alunos do 3.º ano, explicando a multiplicação como adição repetida. Utiliza exatamente três grupos com quatro maçãs em cada grupo. Inclui as expressões 4 + 4 + 4 = 12 e 3 × 4 = 12. Utiliza linguagem simples e adequada à idade. Não alteres o número de grupos nem a quantidade de maçãs.",
    validationNote: "Construir a imagem manualmente no Canva: três grupos, quatro maçãs em cada grupo. Confirmar a contagem antes de exportar o vídeo."
  },
  {
    id: 11,
    title: "A Revolução dos Cravos — 25 de Abril de 1974",
    discipline: "História / Cidadania",
    gradeLevel: "2.º e 3.º Ciclos e Ensino Secundário",
    creationType: "Imagem para vídeo — reconstituição histórica ilustrativa",
    recommendedTool: "Runway — Gen-4.5 Image to Video",
    pedagogicalObjective: "Representar visualmente o ambiente associado ao 25 de Abril de 1974, distinguindo a reconstituição gerada de uma imagem documental.",
    requiredInput: "Ilustração ou imagem devidamente licenciada alusiva ao 25 de Abril de 1974. Preferir uma ilustração de referência e não uma fotografia de arquivo original.",
    toolSetup: "Abrir Runway, selecionar o modelo Gen-4.5 e o modo Image to Video. Carregar a imagem de referência e introduzir o prompt no campo de texto. O texto deve descrever o movimento a criar, não repetir a descrição da imagem.",
    promptLabel: "Prompt",
    copyButtonLabel: "Copiar prompt",
    promptText: "Os cravos vermelhos nas mãos da multidão oscilam suavemente com a brisa. As pessoas apresentam movimentos discretos e naturais. A câmara aproxima-se lentamente dos cravos, num movimento contínuo e estável.",
    validationNote: "Identificar o vídeo como reconstituição ilustrativa gerada por IA. Não apresentar a animação como filmagem original de 25 de Abril de 1974. Confrontar a representação com fotografias, testemunhos e documentos históricos."
  },
  {
    id: 12,
    title: "A Batalha do Buçaco (1810): animar uma imagem histórica",
    discipline: "História",
    gradeLevel: "3.º Ciclo (9.º ano)",
    creationType: "Imagem para vídeo — animação histórica em três clips independentes",
    recommendedTool: "Vidnoz AI — Animate Image",
    pedagogicalObjective: "Explorar uma reconstituição visual de um episódio das Invasões Francesas, distinguindo a animação gerada por IA de um documento histórico.",
    requiredInput: "Três imagens de referência ou uma imagem histórica que possa servir de base à criação de três planos distintos da Batalha do Buçaco.",
    toolSetup: "Preparar três clips separados a partir das imagens de referência. Introduzir um prompt de movimento de cada vez na funcionalidade de animação de imagem. Não tentar gerar toda a batalha num único clip. Guardar os três resultados e montá-los posteriormente num editor de vídeo. Rever uniformes, armamento, bandeiras e contexto histórico antes de utilizar o resultado.",
    promptLabel: "Três prompts em inglês — copiar separadamente",
    copyButtonLabel: "Copiar prompt",
    promptText: `CLIP 1 — GENERAL VIEW OF THE BATTLEFIELD

Animate this historical illustration of the Battle of Bussaco, Portugal, 1810. Show a wide view of the forested hills and the military positions of the opposing armies. Add subtle movement to the flags and trees. Use a slow and stable camera movement. Preserve the original uniforms, weapons, landscape and composition. Do not add new soldiers or objects.

CLIP 2 — TROOP MOVEMENT

Animate the soldiers in the historical illustration with restrained and realistic movement. Show small groups of infantry advancing carefully across the battlefield. Add distant musket smoke drifting slowly through the air. Keep the camera stable and avoid exaggerated movement. Preserve the original uniforms, weapons, flags and historical appearance. Do not create graphic violence or hand-to-hand combat.

CLIP 3 — AFTER THE BATTLE

Animate a quiet final view of the historical battlefield after the confrontation. Show smoke slowly dissipating over the forested hills. Add subtle movement to the vegetation and flags. Use a slow camera pull-back. Preserve the original historical illustration and its composition. Do not introduce new characters or objects.`,
    validationNote: "Identificar os três clips como reconstituições históricas ilustrativas geradas por IA, nunca como documentos de arquivo. Verificar uniformes, bandeiras, armamento e contexto histórico. Montar os três clips num editor de vídeo e acrescentar uma narração histórica validada pelo professor."
  },
  {
    id: 13,
    title: "Os Descobrimentos Portugueses: uma viagem pelos séculos XV e XVI",
    discipline: "História / Geografia",
    gradeLevel: "2.º e 3.º Ciclos",
    creationType: "Documentário histórico — criação de clips independentes e montagem final",
    recommendedTool: "Vidnoz AI — Criar Vídeo",
    pedagogicalObjective: "Representar diferentes momentos da expansão marítima portuguesa e promover a reflexão sobre os contactos entre povos e as consequências da expansão.",
    requiredInput: "Imagens históricas ou ilustrações devidamente licenciadas para servir de referência visual. Mapa histórico validado das rotas marítimas portuguesas.",
    toolSetup: "Preparar cinco clips independentes, um para cada momento do documentário. Utilizar a ferramenta para gerar ou animar cada clip separadamente. Não pedir a criação do documentário completo numa única geração. Utilizar o mapa histórico validado como elemento gráfico fornecido pelo professor. Montar os clips num editor de vídeo e acrescentar a narração. Rever a cronologia, as imagens e o conteúdo histórico antes da exportação.",
    promptLabel: "Guião e cinco prompts visuais separados",
    copyButtonLabel: "Copiar prompt",
    promptText: `TÍTULO: Os Descobrimentos Portugueses — viagens, encontros e consequências

NARRAÇÃO:

Durante os séculos XV e XVI, os portugueses realizaram viagens marítimas que estabeleceram novas rotas entre a Europa, África, Ásia e, mais tarde, a América.

Estas viagens foram possíveis graças ao desenvolvimento da navegação, à utilização de instrumentos náuticos e à experiência dos navegadores.

Em 1498, a expedição comandada por Vasco da Gama chegou a Calecute, na Índia, estabelecendo uma ligação marítima entre a Europa e o oceano Índico.

A expansão portuguesa promoveu contactos comerciais, culturais e políticos entre diferentes povos. Contudo, também esteve associada à conquista de territórios, à violência, à exploração económica e à escravização de populações.

Estudar os Descobrimentos implica compreender tanto as viagens e os contactos entre sociedades como as consequências humanas, políticas e económicas da expansão.

CLIP 1 — AS CARAVELAS

Create a historically inspired animation of a Portuguese sailing ship from the fifteenth century navigating the Atlantic Ocean. Show gentle ocean waves and sails moving in the wind. Preserve historically plausible ship design. Slow cinematic camera movement.

CLIP 2 — A NAVEGAÇÃO

Create a historical educational scene showing navigation instruments used by Portuguese sailors during the fifteenth century. Show a nautical chart, compass and astrolabe on a wooden table. Use a slow camera movement. Do not include modern objects.

CLIP 3 — AS ROTAS MARÍTIMAS

Use the historical map supplied by the teacher. Preserve the original map, labels and route lines. Do not invent or modify geographical locations. Add only a subtle visual emphasis to the existing maritime routes.

CLIP 4 — A CHEGADA À ÍNDIA

Create an illustrative historical reconstruction of Portuguese ships arriving near Calicut in 1498. Show ships approaching the coast. Avoid invented historical details and preserve a plausible fifteenth-century setting.

CLIP 5 — CONTACTOS E CONSEQUÊNCIAS

Create an educational historical illustration representing encounters between Portuguese travellers and communities in Africa and Asia during the sixteenth century. Represent the different groups with dignity and historical care. Avoid stereotypes, romanticised depictions or an exclusively celebratory view of expansion.`,
    validationNote: "Confirmar a cronologia, a chegada a Calecute em 1498 e a representação dos instrumentos de navegação. Verificar cuidadosamente o mapa e as rotas, que devem ser fornecidos pelo professor. Garantir que a narração aborda os contactos entre povos, a conquista, a exploração e a escravização. Os clips são reconstituições ilustrativas e não documentos históricos."
  },
  {
    id: 14,
    title: "O 25 de Abril: um apresentador virtual explica a Revolução dos Cravos",
    discipline: "História / Cidadania",
    gradeLevel: "3.º Ciclo (9.º ano) e Ensino Secundário",
    creationType: "Apresentador virtual — guião histórico com personagem fictícia e voz",
    recommendedTool: "HeyGen — Criar Avatar, AI Studio e Voice Design",
    pedagogicalObjective: "Criar um apresentador virtual para narrar acontecimentos relacionados com a Revolução de 25 de Abril de 1974.",
    requiredInput: "Não necessita de imagem de uma pessoa real. Utilizar um avatar fictício da biblioteca disponibilizada pela ferramenta.",
    toolSetup: "Utilizar um avatar fictício disponível na biblioteca do HeyGen. Não criar uma réplica de Salgueiro Maia nem utilizar fotografias ou gravações da sua voz. Introduzir o texto histórico no campo Script do AI Studio. Escolher uma voz em português de Portugal, se disponível. Rever a pronúncia dos nomes e das expressões históricas antes de exportar.",
    promptLabel: "Guião para o apresentador virtual",
    copyButtonLabel: "Copiar instruções",
    promptText: `A 25 de abril de 1974, Portugal mudou para sempre.

Durante quase 50 anos, o país viveu sob uma ditadura, marcada pela censura, pela falta de liberdade e pela repressão.

Na madrugada desse dia, o Movimento das Forças Armadas iniciou uma revolução para pôr fim ao regime. As senhas transmitidas pela rádio foram «E Depois do Adeus» e «Grândola, Vila Morena».

Os militares ocuparam pontos estratégicos de Lisboa e receberam o apoio da população. Nas ruas, os cravos vermelhos foram oferecidos aos soldados e colocados nos canos das espingardas.

Um dos militares que teve um papel fundamental neste acontecimento foi Salgueiro Maia, capitão de Abril.

A revolução derrubou a ditadura e abriu caminho à democracia.

O 25 de Abril ficou conhecido como a Revolução dos Cravos e representa um marco na história de Portugal e na conquista da liberdade.`,
    validationNote: "Utilizar um apresentador fictício, sem imitar a aparência ou a voz de Salgueiro Maia. Confirmar as datas, os acontecimentos e as senhas da Revolução. O avatar é apenas o apresentador da explicação histórica, não representa a pessoa histórica."
  },
  {
    id: 15,
    title: "A Batalha de Aljubarrota (1385): criar um documentário histórico",
    discipline: "História",
    gradeLevel: "2.º Ciclo (6.º ano) e 3.º Ciclo",
    creationType: "Vídeo histórico narrado — apresentador virtual e imagens de reconstituição",
    recommendedTool: "HeyGen — Criar Vídeo",
    pedagogicalObjective: "Explicar a Batalha de Aljubarrota e a sua importância na consolidação da independência portuguesa através de um vídeo histórico narrado.",
    requiredInput: "Guião histórico validado e imagens ou clips ilustrativos da Batalha de Aljubarrota, preparados separadamente.",
    toolSetup: "No HeyGen AI Studio, selecionar um avatar fictício e inserir o guião histórico no campo Script. Utilizar imagens ou clips previamente preparados como apoio visual, caso o editor permita essa integração. Não pedir ao HeyGen para gerar uma batalha cinematográfica. A representação visual da batalha deve ser preparada separadamente e validada pelo professor.",
    promptLabel: "Guião para o apresentador virtual",
    copyButtonLabel: "Copiar prompt",
    promptText: `A Batalha de Aljubarrota ocorreu a 14 de agosto de 1385, durante a crise de sucessão ao trono português.

O exército português, comandado por D. João I e com a participação de Nuno Álvares Pereira, enfrentou o exército castelhano.

Os portugueses escolheram cuidadosamente o terreno e organizaram posições defensivas que dificultaram o avanço do exército adversário.

A utilização estratégica do terreno e a organização das forças portuguesas contribuíram para a vitória portuguesa.

Esta batalha foi decisiva para a consolidação da independência de Portugal e para o reconhecimento de D. João I como rei.

As imagens que acompanham esta explicação são reconstituições ilustrativas geradas por inteligência artificial e não documentos históricos da época.`,
    validationNote: "Confirmar a data de 14 de agosto de 1385, os intervenientes e o contexto da crise de sucessão. Identificar todas as imagens geradas por IA como reconstituições ilustrativas. Não apresentar as imagens como registos autênticos da batalha."
  },
  {
    id: 16,
    title: "A germinação de uma semente de feijão",
    discipline: "Ciências Naturais",
    gradeLevel: "2.º Ciclo (5.º ano) — 10 a 12 anos",
    creationType: "Texto para vídeo — animação científica 3D.",
    recommendedTool: "Canva — Video Clip (8 segundos)",
    pedagogicalObjective: "Representar as principais etapas da germinação de uma semente e observar o desenvolvimento inicial da planta.",
    requiredInput: "Não necessita de imagem. A animação é gerada a partir do texto.",
    toolSetup: "No Canva, abrir a funcionalidade Video Clip através do Canva AI. Selecionar a duração de 8 segundos, quando disponível, introduzir o prompt em inglês e gerar o clip. Não confundir com Magic Video ou com o editor de vídeo normal.",
    promptLabel: "Prompt (em inglês)",
    copyButtonLabel: "Copiar prompt",
    promptText: `Create a single 8-second educational video clip showing the germination of a bean seed.

Style: high-quality 3D educational animation, bright natural colours, realistic botanical details, visually engaging and suitable for 10–12-year-old students.

Scene: Show a bean seed beneath the soil in a transparent cross-section of the ground. In a smooth time-lapse animation, the seed absorbs water, opens, develops roots growing downwards and a green shoot growing upwards through the soil. Finish with a small green seedling emerging above the ground.

Camera: Close-up view, fixed camera, clear visibility of the seed, roots and shoot.

Lighting: Soft natural daylight, clean educational visual style.`,
    validationNote: "Verificar que a radícula emerge primeiro e cresce para baixo e que o rebento cresce em direção à superfície. A animação representa de forma acelerada um processo que ocorre ao longo de vários dias."
  },
  {
    id: 17,
    title: "A evaporação: uma etapa do ciclo da água",
    discipline: "Ciências Naturais / Geografia",
    gradeLevel: "2.º Ciclo (5.º ano)",
    creationType: "Texto para vídeo — animação educativa 2D.",
    recommendedTool: "Adobe Firefly — Generate Video (Text to Video)",
    pedagogicalObjective: "Representar visualmente a evaporação da água a partir da superfície do oceano, como uma das etapas do ciclo da água.",
    requiredInput: "Não necessita de imagem de referência. A animação é criada a partir de texto.",
    toolSetup: "Abrir Adobe Firefly, selecionar Vídeo e a opção Generate Video (Text to Video). Introduzir o prompt em inglês. Selecionar uma composição adequada a uma animação educativa, com câmara fixa e uma única cena.",
    promptLabel: "Prompt (em inglês)",
    copyButtonLabel: "Copiar prompt",
    promptText: `Create a beautiful 2D educational animation showing one stage of the water cycle: evaporation.

A bright yellow sun shines above a blue ocean. Invisible water vapour rises gently from the ocean surface towards the sky, suggested by subtle translucent upward movement rather than visible liquid droplets. A few white clouds float slowly across the blue sky.

Use a clean, colourful, friendly cartoon animation style, similar to a high-quality educational science video for children.

Smooth simple animation, consistent illustrations, soft colours, clear shapes and a cheerful atmosphere.

Keep the camera fixed. Show only water vapour rising from the ocean. One continuous animated scene. No text, no labels, no subtitles, no realistic photography.`,
    validationNote: "O vídeo representa apenas a evaporação, não o ciclo da água completo. O vapor de água é invisível; não deve ser apresentado como gotículas líquidas a subir do oceano."
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
      "Não assumir Português de Portugal ou direitos comerciais sem confirmação.",
      "Não é permitida a criação de avatares de pessoas com menos de 18 anos, mesmo com consentimento parental."
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
      { label: "Documentação de Planos", url: "https://docs.invideo.io/account/plans" },
      { label: "Política de Segurança Infantil", url: "https://invideo.io/legal/child-safety/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Plano gratuito limitado",
      minimumAge: "16 anos. Menores de 18 anos necessitam de consentimento e supervisão parental.",
      rgpdRiskLevel: "",
      teacherVerdict: "Permite apoiar a criação de um rascunho audiovisual a partir de instruções escritas, exigindo validação científica e revisão de guião.",
      whatIsFact: "Cria uma proposta estruturada de vídeo com cortes e narração a partir de uma instrução em texto.",
      whatIsMisleading: "O guião gerado automaticamente necessita de revisão pedagógica e científica pelo professor."
    }
  },
  {
    id: "kling",
    name: "Kling AI",
    category: "Geração de Vídeo e Movimento Visual",
    badge: "Movimento e Fotorrealismo",
    shortDesc: "O Kling AI disponibiliza modelos de criação audiovisual com Inteligência Artificial, incluindo geração de vídeo a partir de texto e imagens.",
    fullDesc: "O Kling AI disponibiliza modelos de criação audiovisual com Inteligência Artificial, incluindo geração de vídeo a partir de texto e imagens. As funcionalidades dependem do modelo e da versão selecionada.",
    keyFeatures: [
      "Geração de clipes visuais a partir de instruções em texto",
      "Animação de fotografias e ilustrações estáticas",
      "Representação visual de movimentos de fluidos, tecidos e efeitos de iluminação",
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
      "Criar representações visuais ilustrativas de fenómenos físicos ou químicos difíceis de filmar, para observação e análise crítica, sem as apresentar como simulações científicas validadas.",
      "Animação de quadros e gravuras históricas para projetos interdisciplinares",
      "Exercícios de observação crítica do movimento gerado por IA"
    ],
    externalUrl: "https://kling.ai/",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "recurring-free-credits",
    officialSources: [
      { label: "Página Oficial", url: "https://kling.ai/" },
      { label: "Política de Utilização", url: "https://kling.ai/docs/user-policy" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Créditos gratuitos periódicos sujeitos a limites",
      minimumAge: "13 anos. Menores de 18 anos necessitam de representação parental.",
      rgpdRiskLevel: "",
      teacherVerdict: "Adequado para geração de clipes visuais curtos ilustrativos para demonstrar fenómenos dinâmicos.",
      whatIsFact: "Gera clipes visuais a partir de texto e imagens, incluindo representações de movimento e efeitos visuais.",
      whatIsMisleading: "O realismo visual não garante precisão física ou química. Os resultados podem apresentar erros e artefactos."
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
    freeTierDetails: "A página oficial de preços apresenta planos pagos e não indica um plano gratuito recorrente. Os custos variam conforme o modelo, a resolução, a duração e o modo de criação.",
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
      { label: "Aplicação Luma", url: "https://app.lumalabs.ai/" },
      { label: "Preços Oficiais", url: "https://lumalabs.ai/pricing" },
      { label: "Termos de Serviço", url: "https://lumalabs.ai/legal/terms-of-service" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Planos pagos; plano gratuito recorrente não indicado na página oficial consultada.",
      minimumAge: "13 anos. Entre os 13 e os 17 anos, é necessário consentimento parental.",
      rgpdRiskLevel: "",
      teacherVerdict: "Permite criar clipes com câmara em movimento e perspetiva 3D; verificar condições comerciais e termos etários antes de qualquer uso.",
      whatIsFact: "O Ray3.2 permite gerar vídeos a partir de texto e imagem, com diferentes opções de criação.",
      whatIsMisleading: "A página de preços não apresenta um plano gratuito recorrente. A qualidade visual não garante rigor científico ou anatómico."
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
    freeTierDetails: "Os utilizadores gratuitos têm acesso a funcionalidades básicas e podem descarregar vídeos com marca de água. Podem existir créditos promocionais de boas-vindas, sujeitos a elegibilidade e validade. Não constituem créditos diários permanentes.",
    limitations: [
      "Modelos e condições variáveis.",
      "Marcas de água e exportação dependem do plano.",
      "Não garantir geração de vídeo com a duração de um documentário completo.",
      "Validar os resultados antes de utilização educativa.",
      "Ao utilizar o serviço, o utilizador concede ao fornecedor uma licença mundial, gratuita, não exclusiva, perpétua e irrevogável sobre os conteúdos enviados e gerados, incluindo direitos de utilização, reprodução, modificação, distribuição e criação de obras derivadas. Esta licença mantém-se após o fim do contrato."
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
      { label: "Termos de Serviço", url: "https://hailuoai.video/doc/terms-of-service.html" },
      { label: "Condições de Acesso e Créditos", url: "https://hailuoai.video/doc/payment-policy.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Créditos promocionais de utilização pontual, sujeitos a elegibilidade, validade e condições do fornecedor. Não equivale a um plano gratuito com créditos recorrentes.",
      minimumAge: "16 anos.",
      rgpdRiskLevel: "Os termos concedem ao fornecedor uma licença muito ampla sobre os conteúdos enviados e gerados. Evitar carregar dados pessoais de alunos.",
      teacherVerdict: "Útil para o professor gerar pequenas ilustrações visuais expressivas; respeitar a idade mínima e rever rigor.",
      whatIsFact: "Interpretação detalhada de descrições ricas em texto.",
      whatIsMisleading: "Os créditos promocionais não são créditos diários recorrentes. Os termos concedem ao fornecedor uma licença muito abrangente sobre os conteúdos enviados e gerados."
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
    freeTierDetails: "O plano Free tem custo zero, mas inclui zero créditos mensais. Permite comprar packs de créditos sem subscrição. A geração de vídeos exige créditos adquiridos ou promocionais. O plano não inclui licença comercial.",
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
      { label: "Preços Oficiais", url: "https://pika.art/pricing" },
      { label: "Termos de Serviço", url: "https://pika.art/terms-of-service" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Plano gratuito sem créditos mensais; packs de créditos adquiridos separadamente.",
      minimumAge: "18 anos.",
      rgpdRiskLevel: "",
      teacherVerdict: "Ferramenta para criação e efeitos visuais; confirmar condições de acesso previamente.",
      whatIsFact: "O plano Free não inclui créditos mensais para geração de vídeos.",
      whatIsMisleading: "A designação Free não significa que existam gerações mensais gratuitas."
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
      { label: "Preços Oficiais", url: "https://www.capcut.com/pricing/" },
      { label: "Termos de Serviço", url: "https://www.capcut.com/clause/terms-of-service" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Editor gratuito com funcionalidades Pro pagas",
      minimumAge: "13 anos. Menores de 18 anos necessitam de consentimento parental.",
      rgpdRiskLevel: "",
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
      minimumAge: "Consultar as condições etárias aplicáveis à conta Canva para Educação e aos respetivos utilizadores.",
      rgpdRiskLevel: "",
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
      minimumAge: "18 anos.",
      rgpdRiskLevel: "",
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
      minimumAge: "Não confirmada nesta ficha; consultar os termos oficiais da Microsoft.",
      rgpdRiskLevel: "",
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
      minimumAge: "18 anos.",
      rgpdRiskLevel: "",
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
      "Não garantir funcionalidades não documentadas.",
      "É proibida a criação de avatares que representem ou aparentem representar pessoas com menos de 18 anos.",
      "A representação de pessoas reais exige consentimento explícito."
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
      { label: "Termos de Serviço", url: "https://pt.vidnoz.com/termos.html" },
      { label: "Política de Utilização e Moderação", url: "https://pt.vidnoz.com/moderation-policy.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Opções gratuitas com limites e opções pagas",
      minimumAge: "18+ anos para criação de conta (termos oficiais)",
      rgpdRiskLevel: "",
      teacherVerdict: "Ferramenta para criação de avatares didáticos por docentes adultos; verificar limites de exportação.",
      whatIsFact: "Oferece criação de vídeos com personagens virtuais a partir de texto.",
      whatIsMisleading: "As opções gratuitas têm limitações. É proibida a criação de avatares que representem menores de 18 anos e a representação de pessoas reais sem consentimento explícito."
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
      "Não recomendar utilização autónoma por menores.",
      "A edição de vídeos carregados não está atualmente disponível no Espaço Económico Europeu, incluindo Portugal.",
      "A funcionalidade Avatars também não está atualmente disponível nesta região."
    ],
    pedagogicalUseCases: [
      "Geração de clipes visuais ilustrativos para conceitos científicos ou históricos pelo docente",
      "Exploração de continuidade visual a partir de imagens de referência"
    ],
    externalUrl: "https://labs.google/fx/pt-pt/tools/flow",
    screenshots: [],
    capabilityTags: ["text-to-video", "image-to-video"],
    accessType: "recurring-free-credits",
    officialSources: [
      { label: "Página Oficial Google Flow", url: "https://labs.google/fx/pt-pt/tools/flow" },
      { label: "Documentação de Créditos", url: "https://support.google.com/flow/answer/16526234?hl=en" },
      { label: "Disponibilidade e Línguas", url: "https://support.google.com/flow/answer/16353544?hl=en" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "50 créditos diários gratuitos (sujeito a disponibilidade)",
      minimumAge: "18 anos.",
      rgpdRiskLevel: "",
      teacherVerdict: "Ferramenta de criação generativa para professores adultos. Permite criar clipes a partir de texto e imagens, mas a edição de vídeos carregados e a funcionalidade Avatars não estão disponíveis no Espaço Económico Europeu.",
      whatIsFact: "Disponibiliza modelos generativos da Google com créditos diários renováveis.",
      whatIsMisleading: "Os 50 créditos diários não garantem um número fixo de vídeos. A edição de vídeos carregados e a funcionalidade Avatars estão indisponíveis no Espaço Económico Europeu."
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
      "Não assumir que todas as funcionalidades estão disponíveis em qualquer conta escolar.",
      "As exceções educativas previstas para o Gemini for Education e o NotebookLM não se aplicam automaticamente ao Google Vids."
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
      { label: "Anúncio Oficial", url: "https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/" },
      { label: "Termos Específicos do Google Workspace", url: "https://workspace.google.com/terms/service-terms/" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Até 3 vídeos de 15s por mês com modelo Omni 1.2 Flash",
      minimumAge: "18 anos para as funcionalidades de IA generativa abrangidas pelos termos do Google Workspace.",
      rgpdRiskLevel: "",
      teacherVerdict: "Ferramenta útil para o professor organizar e produzir apresentações em vídeo. A utilização das funcionalidades generativas em contas escolares deve respeitar as condições da conta e as configurações do administrador Workspace.",
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
      minimumAge: "16 anos. Consultar os termos para as condições aplicáveis a menores.",
      rgpdRiskLevel: "",
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
      { label: "FAQ de Créditos Generativos", url: "https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html" },
      { label: "Termos Gerais da Adobe", url: "https://www.adobe.com/pt/legal/terms.html" }
    ],
    lastVerified: "2026-11-09",
    factCheckStatus: {
      freeStatus: "Acesso gratuito limitado com créditos generativos",
      minimumAge: "É necessário ter pelo menos 13 anos para criar um Adobe ID.",
      rgpdRiskLevel: "",
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
      minimumAge: "Não confirmada nesta ficha; consultar os termos oficiais do fornecedor.",
      rgpdRiskLevel: "",
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

// 5. ATIVIDADES NA AULA — PROPOSTAS PRÁTICAS
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
    ],
    toolImportantNote: "A conta deve ser utilizada pelo professor adulto. Não utilizar fotografias, rostos ou gravações de voz dos alunos. As funcionalidades, os créditos e os limites de utilização dependem das condições da conta."
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
      "Os créditos diários renovam-se segundo as condições da plataforma. Confirmar o custo apresentado antes de carregar em Generate. Não gerar versões adicionais desnecessariamente.",
      "Adaptar a complexidade dos critérios de sustentabilidade ao ano de escolaridade e aos conteúdos já trabalhados.",
      "O vídeo é uma representação visual gerada por IA, não uma prova de que as soluções apresentadas são realmente sustentáveis. Comparar o resultado com os critérios estudados e identificar elementos em falta, imprecisos ou irrealistas."
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
      "Neste modo, a imagem carregada já define a personagem e a composição. O prompt deve concentrar-se apenas nos movimentos desejados. Utilizar desenhos originais ou imagens devidamente autorizadas.",
      "Depois da geração, comparar a animação com o desenho original e identificar alterações introduzidas pela IA, como mudanças nas cores, proporções, rosto ou fundo. A animação não reproduz necessariamente o desenho de forma exata.",
      "A conta e a geração do vídeo devem ser geridas pelo professor. Utilizar desenhos originais ou imagens devidamente autorizadas."
    ]
  },
  {
    id: "video-educativo-legendas",
    number: 4,
    title: "Criar um Vídeo Educativo e Acrescentar Legendas",
    discipline: "Ciências Naturais",
    year: "5.º ou 6.º ano",
    duration: "2 aulas de 50 minutos.",
    tool: "Canva — Magic Media / Video Clip / Editor de Vídeo",
    usageMode: "Gerar clips curtos com IA e montar o vídeo no editor",
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
          "4. Introduzir as instruções seguintes, caso a ferramenta disponibilize um campo de descrição:",
          "Ter em conta que o Magic Video gera um vídeo vertical (9:16). Não solicitar formato horizontal nesta atividade."
        ],
        copyItem: {
          id: "canva-magic-instructions",
          label: "Copiar instruções",
          title: "Instruções para o Canva Magic Video",
          content: `Cria um vídeo educativo vertical (9:16) sobre a polinização, utilizando exclusivamente as imagens e os clips carregados e respeitando a sua ordem.

Apresenta primeiro a flor e o esquema das suas estruturas reprodutoras; depois, uma abelha a visitar uma flor; em seguida, uma imagem que mostre pólen no corpo de um inseto; e, por fim, outra flor da mesma espécie.

Utiliza transições simples, ritmo calmo e tempo suficiente para observar cada imagem.

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
          "4. Confirmar a língua detetada pela ferramenta. Se necessário, selecionar Português manualmente.",
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
    validationNotes: [],
    toolImportantNote: "O Video Clip gera clips curtos a partir de instruções textuais. O Magic Media disponibiliza ferramentas de geração de conteúdos. O editor de vídeo permite organizar e montar os elementos. Estas funcionalidades são distintas. Selecionar a opção disponível na conta e não assumir que um único prompt produz automaticamente um vídeo educativo completo."
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
      "3. O professor abre o Fliki, seleciona Script to Video e copia o «Guião Completo (3 Cenas)», mantendo as três cenas separadas. Para criar um único vídeo, utilizar o guião completo. Os três textos individuais servem apenas para trabalhar ou gerar cada cena separadamente."
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
        note: "Para criar um único vídeo com três cenas, copiar apenas este guião completo. Os botões das cenas individuais servem para trabalhar ou gerar cada cena separadamente."
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
  },
  {
    id: "batalha-bucaco-imagem",
    number: 6,
    title: "Animar uma Imagem Histórica: Batalha do Buçaco (1810)",
    discipline: "História",
    year: "3.º ciclo (9.º ano)",
    duration: "1 aula de 50 minutos.",
    tool: "Vidnoz AI",
    usageMode: "Animate Image — animação de imagem estática.",
    freeAccess: "Consultar o Catálogo de Ferramentas para confirmar os créditos, limites de geração e condições de exportação. A conta deve ser utilizada pelo professor adulto.",
    challenge: "Transformar uma imagem da Batalha do Buçaco numa reconstituição visual animada, explorando o movimento das tropas e o ambiente do campo de batalha.",
    howToSteps: [
      "1. Os alunos observam uma imagem da Batalha do Buçaco e identificam os elementos históricos: tropas portuguesas e britânicas, tropas francesas, uniformes, bandeiras e cenário.",
      "2. O professor confirma a adequação histórica da imagem e verifica se existe autorização para a sua utilização.",
      "3. O professor abre o Vidnoz AI e seleciona Animate Image (Image to Video).",
      "4. Carrega a imagem de referência e introduz o prompt seguinte, em inglês.",
      "5. Gera uma versão inicial e verifica os movimentos, as personagens, os uniformes e o cenário.",
      "6. Os alunos observam o resultado e identificam os elementos que foram preservados ou alterados pela IA."
    ],
    copyItems: [
      {
        id: "bucaco-vidnoz-prompt",
        label: "Copiar prompt",
        title: "Prompt para Vidnoz AI — Animate Image",
        content: `Animate this historical Battle of Bussaco scene, Portugal, 1810. Portuguese and British soldiers fire their muskets while French infantry advances through the battlefield. The cannon fires with a powerful flash, producing thick smoke. Soldiers move forward, flags wave strongly in the wind, and smoke drifts across the forested hills. The camera slowly moves forward through the battlefield, creating an immersive cinematic war scene. Realistic historical movements, dramatic atmosphere. Preserve the original uniforms, flags and characters.`
      }
    ],
    recommendedSettings: [
      "Funcionalidade: Animate Image / Image to Video.",
      "Carregar uma única imagem de referência.",
      "Utilizar a imagem original como referência visual.",
      "Começar com uma única geração.",
      "Pré-visualizar o resultado antes de exportar."
    ],
    expectedResult: "Uma imagem histórica da Batalha do Buçaco transformada numa curta animação audiovisual.",
    validationNotes: [
      "A Batalha do Buçaco ocorreu a 27 de setembro de 1810, durante a terceira invasão francesa. As forças anglo-portuguesas enfrentaram o exército francês.",
      "Identificar o vídeo como reconstituição histórica gerada por IA, não como documento de arquivo.",
      "Verificar uniformes, bandeiras, armamento e contexto histórico.",
      "A IA pode alterar elementos da imagem original, mesmo quando o prompt pede a sua preservação."
    ],
    toolImportantNote: "A funcionalidade Animate Image utiliza uma imagem carregada como referência. A conta Vidnoz exige utilização por adultos. O professor é responsável pela operação da ferramenta e pela validação do resultado."
  },
  {
    id: "descobrimentos-portugueses-vidnoz",
    number: 7,
    title: "Os Descobrimentos Portugueses: Uma Viagem pelos Séculos XV e XVI",
    discipline: "História / Geografia",
    year: "2.º e 3.º ciclos",
    duration: "2 aulas de 50 minutos.",
    tool: "Vidnoz AI",
    usageMode: "AI Video Wizard — criação de vídeo a partir de instruções escritas e cenas.",
    freeAccess: "Consultar o Catálogo de Ferramentas para confirmar créditos, duração disponível e limites de exportação. A conta deve ser utilizada pelo professor adulto.",
    challenge: "Criar um pequeno documentário audiovisual sobre a expansão marítima portuguesa, os contactos entre povos e as consequências da expansão.",
    howToSteps: [
      "1. Os alunos pesquisam, em fontes históricas adequadas, acontecimentos e instrumentos relacionados com a expansão marítima portuguesa.",
      "2. Organizam a informação em cinco momentos: navegação, instrumentos, viagem, chegada à Índia e rotas marítimas.",
      "3. O professor abre o Vidnoz AI e seleciona o AI Video Wizard / Create Video.",
      "4. Introduz o prompt completo, define a duração de 30 segundos e seleciona uma narração em português de Portugal.",
      "5. Rever individualmente as cinco cenas, confirmar a sequência histórica e corrigir eventuais imprecisões.",
      "6. Exportar o documentário e discutir as diferentes dimensões históricas da expansão portuguesa."
    ],
    copyItems: [
      {
        id: "descobrimentos-vidnoz-prompt",
        label: "Copiar prompt",
        title: "Prompt para Vidnoz AI — AI Video Wizard",
        content: `Cria um vídeo histórico cinematográfico de 30 segundos sobre os Descobrimentos Portugueses, nos séculos XV e XVI.

Cena 1: Uma caravela portuguesa navega em alto-mar, enfrentando ondas e vento forte. A câmara aproxima-se da embarcação e mostra as velas a agitar-se.

Cena 2: Um navegador observa um mapa antigo, utiliza uma bússola e orienta a tripulação. Mostrar instrumentos de navegação da época.

Cena 3: A caravela atravessa o oceano e aproxima-se da costa do sudoeste da Índia, seguindo a rota marítima percorrida pelos navegadores portugueses.

Cena 4: Mostrar a chegada de Vasco da Gama à Índia, em 1498, com embarcações no porto de Calecute.

Cena 5: Um mapa antigo apresenta as rotas marítimas portuguesas que ligaram a Europa, África e Ásia.

Estilo de documentário histórico, imagens realistas, movimentos de câmara cinematográficos, cores e vestuário de época, música épica discreta. Narrativa em português de Portugal. Abordagem histórica rigorosa, incluindo a expansão marítima, os contactos entre povos e as consequências da expansão portuguesa.`
      }
    ],
    recommendedSettings: [
      "Ferramenta: Vidnoz AI Video Wizard.",
      "Duração pretendida: 30 segundos, se disponível no plano utilizado.",
      "Narrativa: Português de Portugal.",
      "Estrutura: cinco cenas.",
      "Rever as cenas antes de exportar."
    ],
    expectedResult: "Um pequeno documentário histórico com cinco cenas sobre a expansão marítima portuguesa.",
    validationNotes: [
      "Confirmar a chegada de Vasco da Gama a Calecute em 1498.",
      "Verificar a utilização dos instrumentos de navegação da época e a representação das embarcações.",
      "Não apresentar a expansão marítima apenas numa perspetiva de glorificação. Abordar também as relações comerciais, os contactos culturais, a conquista, a violência e as suas consequências para diferentes populações.",
      "A IA pode gerar instrumentos, mapas e embarcações historicamente incorretos. O professor deve rever os elementos visuais."
    ],
    toolImportantNote: "A criação do vídeo deve ser realizada pelo professor adulto, com revisão do guião, das cenas e da narração antes da exportação."
  },
  {
    id: "25-abril-avatar-heygen",
    number: 8,
    title: "O 25 de Abril: Criar um Avatar Inspirado em Salgueiro Maia",
    discipline: "História / Cidadania",
    year: "3.º ciclo (9.º ano) e Ensino Secundário",
    duration: "2 aulas de 50 minutos.",
    tool: "HeyGen",
    usageMode: "Criação de avatar com IA + AI Studio (Script) + Voice Design.",
    freeAccess: "Consultar o Catálogo de Ferramentas para confirmar o plano, créditos e limites de criação. A conta deve ser utilizada pelo professor adulto.",
    challenge: "Criar um apresentador virtual inspirado numa figura histórica para narrar os acontecimentos da Revolução de 25 de Abril de 1974.",
    howToSteps: [
      "1. Os alunos pesquisam os acontecimentos do 25 de Abril e selecionam os factos essenciais para o guião.",
      "2. O professor abre o HeyGen e acede à funcionalidade de criação de avatar (Design with AI).",
      "3. Copia a descrição do avatar para o respetivo campo e gera uma personagem digital inspirada em Salgueiro Maia.",
      "4. Abre o AI Studio e seleciona o avatar criado.",
      "5. Copia o guião para o campo Script.",
      "6. Acede à funcionalidade Voice Design, introduz a descrição da voz e seleciona-a para a narração.",
      "7. Pré-visualiza a apresentação, verifica a pronúncia em português de Portugal e exporta o vídeo."
    ],
    copyItems: [
      {
        id: "heygen-25abril-script",
        label: "Copiar guião",
        title: "GUIÃO — Campo Script",
        content: `A 25 de abril de 1974, Portugal mudou para sempre.

Durante quase 50 anos, o país viveu sob uma ditadura, marcada pela censura, pela falta de liberdade e pela repressão.

Na madrugada desse dia, o Movimento das Forças Armadas iniciou uma revolução para pôr fim ao regime. As senhas transmitidas pela rádio foram «E Depois do Adeus» e «Grândola, Vila Morena».

Os militares ocuparam pontos estratégicos de Lisboa e receberam o apoio da população. Nas ruas, os cravos vermelhos foram oferecidos aos soldados e colocados nos canos das espingardas.

A revolução derrubou a ditadura e abriu caminho à democracia.

O 25 de Abril ficou conhecido como a Revolução dos Cravos: um marco na história de Portugal e na conquista da liberdade.`,
        note: "Colar exclusivamente no campo Script do HeyGen AI Studio."
      },
      {
        id: "heygen-25abril-avatar",
        label: "Copiar descrição do avatar",
        title: "AVATAR — Campo Design with AI",
        content: `Create a realistic historical male character inspired by Captain Salgueiro Maia, the Portuguese military officer who played a key role in the Carnation Revolution of April 25, 1974.

A Portuguese army captain, 29 years old, with dark brown slightly wavy hair, a clean-shaven face, strong expressive features and a determined yet calm gaze.

He wears an authentic-looking Portuguese military olive-green uniform from the early 1970s, including a field shirt, shoulder epaulettes and a period-appropriate military cap.

His appearance conveys courage, leadership, intelligence and integrity.

Photorealistic style, historically inspired 1970s appearance, natural facial features, realistic fabric textures, professional cinematic lighting.

Neutral standing pose, facing the camera, upper-body portrait. Plain, unobtrusive background.`,
        note: "Colar no campo de criação do avatar. A personagem é uma representação digital inspirada numa figura histórica."
      },
      {
        id: "heygen-25abril-voice",
        label: "Copiar descrição da voz",
        title: "VOZ — Campo Voice Design",
        content: `Create an original male voice that SPEAKS EXCLUSIVELY IN EUROPEAN PORTUGUESE (PORTUGAL). The spoken language MUST be Portuguese from Portugal, NOT English and NOT Brazilian Portuguese. All generated speech and voice samples must be entirely in European Portuguese. Native Portuguese pronunciation, with a natural Portuguese accent, correct Portuguese intonation and authentic pronunciation of Portuguese words. Warm, deep, mature and confident male voice. Calm, articulate and expressive, suitable for narrating a historical documentary. Moderate speaking pace, with natural pauses. NEVER speak in English.`,
        note: "Colar no campo Voice Design, separadamente do guião e do avatar."
      }
    ],
    recommendedSettings: [
      "Criar um avatar adulto com a funcionalidade Design with AI.",
      "Utilizar o guião no campo Script do AI Studio.",
      "Criar uma voz através de Voice Design.",
      "Selecionar Português de Portugal na configuração da voz, quando disponível.",
      "Pré-visualizar a pronúncia antes de exportar."
    ],
    expectedResult: "Um vídeo histórico com um avatar digital inspirado em Salgueiro Maia a narrar os acontecimentos do 25 de Abril.",
    validationNotes: [
      "Salgueiro Maia tinha 29 anos em 25 de abril de 1974. A representação digital deve respeitar essa idade.",
      "O avatar é uma representação gerada por IA e não uma imagem ou gravação autêntica de Salgueiro Maia.",
      "Confirmar as duas senhas transmitidas pela rádio e a sequência dos acontecimentos.",
      "Rever a narração e a pronúncia de nomes e expressões históricas antes de utilizar o vídeo."
    ],
    toolImportantNote: "A criação da conta e a utilização do HeyGen devem ser realizadas pelo professor adulto. Os alunos participam na pesquisa, preparação do guião e validação histórica, sem criar contas ou fornecer rostos e vozes pessoais."
  },
  {
    id: "batalha-aljubarrota-heygen",
    number: 9,
    title: "Explicar a Batalha de Aljubarrota com um apresentador virtual",
    discipline: "História",
    year: "2.º ciclo (5.º e 6.º anos) e 3.º ciclo",
    duration: "2 aulas de 50 minutos.",
    tool: "HeyGen",
    usageMode: "Vídeo histórico narrado com apresentador virtual",
    freeAccess: "Consultar o Catálogo de Ferramentas para confirmar o plano, créditos, duração e condições de exportação. A conta deve ser utilizada pelo professor adulto.",
    challenge: "Criar um vídeo histórico curto sobre a Batalha de Aljubarrota, utilizando um apresentador virtual para explicar os acontecimentos e imagens ou clips ilustrativos previamente preparados para acompanhar a narração.",
    howToSteps: [
      "1. Preparar um guião histórico validado pelo professor.",
      "2. Abrir o HeyGen AI Studio, selecionar um avatar fictício e inserir o guião no campo Script.",
      "3. Escolher uma voz adequada em português.",
      "4. Utilizar imagens ou clips históricos ilustrativos previamente preparados como apoio visual.",
      "5. Rever a pronúncia, a cronologia e a correspondência entre narração e imagens antes de exportar."
    ],
    copyItems: [
      {
        id: "aljubarrota-heygen-prompt",
        label: "Copiar guião",
        title: "Guião para copiar",
        content: `A Batalha de Aljubarrota ocorreu a 14 de agosto de 1385, durante a crise de sucessão ao trono português.

O exército português, comandado por D. João I e com a participação de Nuno Álvares Pereira, enfrentou o exército castelhano.

A escolha do terreno e a organização defensiva foram fundamentais para a vitória portuguesa.

Esta batalha contribuiu decisivamente para a consolidação da independência de Portugal e para o reconhecimento de D. João I como rei.

As imagens utilizadas neste vídeo são reconstituições ilustrativas e não documentos históricos da época.`
      }
    ],
    recommendedSettings: [
      "Narração exclusivamente em português de Portugal.",
      "Rever a representação dos exércitos, armamento e vestuário.",
      "Confirmar a pronúncia dos nomes históricos antes de exportar."
    ],
    expectedResult: "Um vídeo histórico narrado por um apresentador virtual sobre a Batalha de Aljubarrota, acompanhado por imagens ou clips ilustrativos.",
    validationNotes: [
      "Confirmar a data, os intervenientes e o contexto histórico.",
      "Utilizar um avatar fictício, sem imitar figuras históricas.",
      "Identificar as imagens geradas por IA como reconstituições ilustrativas."
    ],
    toolImportantNote: "O HeyGen é utilizado pelo professor adulto. Os alunos participam na investigação, organização das cenas e validação histórica, sem necessitarem de criar uma conta."
  },
  {
    id: "germinacao-semente-feijao-canva",
    number: 10,
    title: "A Germinação de uma Semente de Feijão",
    discipline: "Ciências Naturais",
    year: "2.º ciclo (5.º ano)",
    duration: "1 aula de 50 minutos.",
    tool: "Canva — Video Clip",
    usageMode: "Texto para vídeo — animação educativa 3D de 8 segundos.",
    freeAccess: "A disponibilidade do Video Clip e os limites de geração dependem da conta e do plano Canva. Confirmar a funcionalidade na conta escolar antes da aula.",
    challenge: "Criar uma animação científica curta que represente a germinação de uma semente de feijão.",
    howToSteps: [
      "1. Os alunos identificam as principais etapas da germinação de uma semente.",
      "2. O professor abre o Canva AI e seleciona Video Clip.",
      "3. Escolhe a duração de 8 segundos, quando disponível.",
      "4. Introduz o prompt em inglês e gera o clip.",
      "5. Os alunos observam a animação e identificam a emergência da raiz e o crescimento do caule.",
      "6. Comparam a representação gerada com um esquema científico ou com uma observação real da germinação."
    ],
    copyItems: [
      {
        id: "germinacao-canva-prompt",
        label: "Copiar prompt",
        title: "Prompt para Canva — Video Clip (8 segundos)",
        content: `Create a single 8-second educational video clip showing the germination of a bean seed.

Style: high-quality 3D educational animation, bright natural colours, realistic botanical details, visually engaging and suitable for 10–12-year-old students.

Scene: Show a bean seed beneath the soil in a transparent cross-section of the ground. In a smooth time-lapse animation, the seed absorbs water, opens, develops roots growing downwards and a green shoot growing upwards through the soil. Finish with a small green seedling emerging above the ground.

Camera: Close-up view, fixed camera, clear visibility of the seed, roots and shoot.

Lighting: Soft natural daylight, clean educational visual style.`
      }
    ],
    recommendedSettings: [
      "Ferramenta: Canva AI — Video Clip.",
      "Duração: 8 segundos.",
      "Estilo: animação educativa 3D.",
      "Câmara: plano aproximado e fixo.",
      "Começar com uma única geração."
    ],
    expectedResult: "Um vídeo educativo de oito segundos que representa visualmente a germinação de uma semente de feijão.",
    validationNotes: [
      "A radícula emerge da semente e dá origem à raiz primária, que cresce em direção ao solo.",
      "O rebento cresce em direção à superfície.",
      "A animação representa um processo que decorre ao longo de vários dias, apresentado de forma acelerada.",
      "Confirmar que a sequência visual não inverte o desenvolvimento da raiz e do caule."
    ],
    toolImportantNote: "Esta proposta utiliza a funcionalidade Canva Video Clip, não Magic Video. Confirmar previamente que a funcionalidade está disponível na conta utilizada pelo professor."
  },
  {
    id: "evaporacao-ciclo-agua-firefly",
    number: 11,
    title: "A Evaporação: Uma Etapa do Ciclo da Água",
    discipline: "Ciências Naturais / Geografia",
    year: "2.º ciclo (5.º ano)",
    duration: "1 aula de 50 minutos.",
    tool: "Adobe Firefly — Generate Video",
    usageMode: "Texto para vídeo — animação educativa 2D.",
    freeAccess: "A geração de vídeo utiliza créditos generativos. Confirmar o saldo e os limites da conta Adobe antes de iniciar a atividade.",
    challenge: "Criar uma animação educativa curta que represente a evaporação da água à superfície do oceano.",
    howToSteps: [
      "1. Os alunos recordam as etapas do ciclo da água e identificam a evaporação.",
      "2. O professor abre Adobe Firefly e seleciona Vídeo → Generate Video (Text to Video).",
      "3. Introduz o prompt em inglês.",
      "4. Seleciona uma animação 2D, com câmara fixa e uma única cena.",
      "5. Gera o vídeo e verifica a representação da passagem da água líquida ao estado gasoso.",
      "6. Os alunos identificam o fenómeno representado e relacionam-no com as restantes etapas do ciclo da água."
    ],
    copyItems: [
      {
        id: "evaporacao-firefly-prompt",
        label: "Copiar prompt",
        title: "Prompt para Adobe Firefly — Text to Video",
        content: `Create a beautiful 2D educational animation showing one stage of the water cycle: evaporation.

A bright yellow sun shines above a blue ocean. Transparent water vapour rises gently from the ocean surface towards the sky, represented by subtle translucent wisps rather than visible liquid droplets. A few white clouds float slowly across the blue sky.

Use a clean, colourful, friendly cartoon animation style, similar to a high-quality educational science video for children.

Smooth simple animation, consistent illustrations, soft colours, clear shapes and a cheerful atmosphere.

Keep the camera fixed. Show only water vapour rising from the ocean. One continuous animated scene. No text, no labels, no subtitles, no realistic photography.`
      }
    ],
    recommendedSettings: [
      "Funcionalidade: Generate Video — Text to Video.",
      "Estilo: animação 2D educativa.",
      "Câmara: fixa.",
      "Uma única cena contínua.",
      "Começar com uma única geração."
    ],
    expectedResult: "Um pequeno clip educativo em 2D que representa a evaporação da água a partir da superfície do oceano.",
    validationNotes: [
      "A evaporação corresponde à passagem da água do estado líquido ao estado gasoso.",
      "O vapor de água é invisível. A representação visual por traços translúcidos é apenas uma convenção didática.",
      "Não representar gotículas líquidas a subir do oceano como se fossem vapor.",
      "Este vídeo representa apenas a evaporação, não o ciclo da água completo. A condensação, precipitação, escoamento e infiltração devem ser explorados separadamente."
    ],
    toolImportantNote: "Esta atividade utiliza geração de vídeo a partir de texto no Adobe Firefly. O prompt foi ajustado para manter o rigor científico da evaporação, sem representar gotículas líquidas como vapor de água."
  },
  {
    id: "viagem-gota-agua-google-vids",
    number: 12,
    title: "A viagem de uma gota de água",
    discipline: "Ciências Naturais",
    year: "5.º ano",
    duration: "30 a 45 minutos",
    tool: "Google Vids — Criar",
    usageMode: "Criação de vídeo a partir de texto e narração, sem carregar imagens de referência.",
    freeAccess: "Utilizar a conta Google e verificar os limites de utilização disponíveis na conta.",
    challenge: "Criar um vídeo educativo com várias cenas que conte a história de uma gota de água durante o ciclo da água. A ferramenta deverá gerar as imagens a partir da descrição escrita e do guião de narração.",
    howToSteps: [
      "1. Aceder ao Google Vids.",
      "2. Selecionar a funcionalidade «Criar».",
      "3. Não carregar imagens na secção «Ingredientes».",
      "4. Copiar o prompt integral disponibilizado nesta atividade.",
      "5. Introduzir o prompt no campo de criação.",
      "6. Gerar o vídeo.",
      "7. Rever as cenas e confirmar a correspondência entre as imagens e a narração.",
      "8. Se necessário, gerar as cenas separadamente e reuni-las no editor."
    ],
    copyItems: [
      {
        id: "gota-agua-google-vids-prompt",
        label: "Copiar prompt",
        title: "Prompt Integral — Google Vids (Criar)",
        content: `CENA 1 — NO OCEANO

Apresenta uma gota de água no oceano, rodeada de outras gotas. O Sol começa a aquecer a superfície do mar.

Narração: «Olá! Sou uma pequena gota de água e vivo no imenso oceano. Um dia, o calor do Sol começou a aquecer a água à minha volta.»

CENA 2 — A EVAPORAÇÃO

Mostra a gota a transformar-se em vapor de água e a subir na atmosfera.

Narração: «Com o calor do Sol, a água evapora-se e transforma-se em vapor, subindo lentamente para a atmosfera.»

CENA 3 — A CONDENSAÇÃO

Mostra o vapor de água a arrefecer e a formar pequenas gotículas que dão origem às nuvens.

Narração: «À medida que subo, encontro temperaturas mais baixas. O vapor arrefece e condensa-se, formando pequenas gotículas de água que constituem as nuvens.»

CENA 4 — A PRECIPITAÇÃO

Mostra uma nuvem a libertar gotas de chuva sobre uma paisagem.

Narração: «Quando as gotículas se juntam e ficam suficientemente pesadas, caem sob a forma de precipitação. E eis que volto à Terra!»

CENA 5 — O REGRESSO À NATUREZA

Mostra a água a infiltrar-se no solo, alimentar um rio e regressar ao oceano.

Narração: «Parte da água infiltra-se no solo, outra parte alimenta os rios e acaba por regressar ao oceano. A minha viagem continua!»

CENA 6 — O CICLO CONTINUA

Apresenta uma paisagem natural com oceano, montanhas, nuvens e chuva.

Narração: «E assim funciona o ciclo da água: um processo contínuo e essencial à vida no nosso planeta.»

Termina com a frase: «A água é essencial à vida. Vamos protegê-la!»`
      }
    ],
    expectedResult: "Um vídeo educativo com uma narrativa visual sobre o ciclo da água, criado a partir de um guião escrito, sem utilização de imagens carregadas pelo utilizador.",
    validationNotes: [
      "Confirmar a representação correta da evaporação, condensação, precipitação, infiltração e escoamento. Verificar se a narração corresponde às imagens apresentadas."
    ]
  },
  {
    id: "evolucao-meios-comunicacao-google-vids",
    number: 13,
    title: "A evolução dos meios de comunicação",
    discipline: "TIC / História / Cidadania",
    year: "5.º ao 9.º ano",
    duration: "30 a 45 minutos",
    tool: "Google Vids — Criar com Ingredientes",
    usageMode: "Criação de vídeo a partir de imagens carregadas pelo utilizador e de instruções escritas.",
    freeAccess: "Utilizar a conta Google e verificar os limites de utilização disponíveis na conta.",
    challenge: "Criar um pequeno documentário sobre a evolução dos meios de comunicação, utilizando cinco imagens selecionadas e carregadas pelo formando. A IA deverá animar as imagens e organizá-las numa narrativa cronológica.",
    stages: [
      {
        title: "Etapa 1 — Como fazer",
        steps: [
          "1. Pesquisar cinco imagens representativas da evolução dos meios de comunicação.",
          "2. Guardar as imagens no computador.",
          "3. Aceder ao Google Vids.",
          "4. Selecionar «Criar».",
          "5. Carregar as cinco imagens na área «Ingredientes».",
          "6. Copiar o prompt integral disponibilizado nesta atividade.",
          "7. Introduzir o prompt no campo de criação.",
          "8. Gerar o vídeo.",
          "9. Rever a sequência cronológica, as animações e a narração.",
          "10. Se necessário, gerar as cenas separadamente e reuni-las no editor."
        ]
      },
      {
        title: "Etapa 2 — Imagens a carregar",
        steps: [
          "Imagem 1: Telégrafo do século XIX.",
          "Imagem 2: Telefone fixo do século XX.",
          "Imagem 3: Televisão dos anos 60 ou 70.",
          "Imagem 4: Telemóvel dos anos 90 ou 2000.",
          "Imagem 5: Smartphone atual."
        ]
      }
    ],
    copyItems: [
      {
        id: "meios-comunicacao-google-vids-prompt",
        label: "Copiar prompt",
        title: "Prompt Integral — Google Vids (Criar com Ingredientes)",
        content: `CENA 1 — O TELÉGRAFO

Utiliza a imagem do telégrafo. Anima a cena, mostrando uma pessoa a transmitir uma mensagem através do equipamento.

Narração: «No século XIX, o telégrafo revolucionou a comunicação à distância, permitindo transmitir mensagens através de sinais elétricos.»

CENA 2 — O TELEFONE FIXO

Utiliza a imagem do telefone fixo. Mostra uma pessoa a levantar o auscultador e a comunicar com outra pessoa.

Narração: «Com a popularização do telefone, passou a ser possível ouvir a voz de alguém que se encontrava a grandes distâncias.»

CENA 3 — A TELEVISÃO

Utiliza a imagem da televisão. Mostra uma família reunida a assistir a uma emissão televisiva.

Narração: «A televisão transformou a comunicação, permitindo transmitir notícias, informação e entretenimento através de imagens e sons.»

CENA 4 — O TELEMÓVEL

Utiliza a imagem do telemóvel. Mostra uma pessoa a escrever uma mensagem e a realizar uma chamada.

Narração: «Com o aparecimento dos telemóveis, a comunicação tornou-se portátil. Passámos a poder comunicar praticamente em qualquer lugar.»

CENA 5 — O SMARTPHONE

Utiliza a imagem do smartphone. Mostra uma pessoa a realizar uma videochamada, a consultar informação e a comunicar através de aplicações digitais.

Narração: «Hoje, os smartphones permitem comunicar instantaneamente, partilhar imagens, realizar videochamadas e aceder a uma quantidade enorme de informação.»

Termina com a frase: «A tecnologia mudou a forma como comunicamos. E o futuro continua a surpreender-nos!»`
      }
    ],
    expectedResult: "Um documentário educativo com cinco cenas, construído a partir das imagens selecionadas e carregadas pelo formando, com animação, narração e sequência cronológica.",
    validationNotes: [
      "Confirmar se todas as imagens foram utilizadas, se os equipamentos correspondem às épocas apresentadas e se a sequência histórica está correta."
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
