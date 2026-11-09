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
    description: "Todos nós sabemos a vergonha que muitos sentem em frente a uma câmara ou as horas perdidas a montar tripés e microfones. A IA permite transformar um resumo ou apontamento numa explicação narrada com clareza, mantendo o foco no conteúdo e não na técnica.",
    capabilities: [
      "Transformar sumários ou textos curriculares em vídeos estruturados com imagem e narração.",
      "Gerar locuções com voz natural em português de Portugal, sem a necessidade de gravação.",
      "Criar pequenos vídeos de 1 a 2 minutos, ideais para introduzir, consolidar ou rever conteúdos.",
      "Gravar explicações uma única vez e reutilizá-las com alunos que faltaram ou precisam de reforço."
    ],
    usefulTools: [
      { name: "InVideo AI", description: "Pode apoiar a criação de um rascunho audiovisual a partir de instruções escritas ou guiões." },
      { name: "CapCut (Web, PC e Telemóvel)", description: "Edição simples, legendas automáticas e recursos visuais." },
      { name: "Canva para Educação", description: "Perfeito para integrar vídeos e animações em apresentações já habituais na escola." }
    ],
    teacherBenefits: [
      "Pode reduzir algumas tarefas de preparação técnica e edição, libertando tempo para a planificação pedagógica.",
      "Permite criar uma videoteca de apoio que os alunos podem consultar ao seu próprio ritmo em casa (sala de aula invertida).",
      "Reduz a ansiedade de quem não se sente confortável a expor a sua própria imagem em vídeo."
    ],
    cognitivePrinciple: "Princípio da Modalidade de Mayer: a combinação de imagens relevantes com explicação oral pode apoiar a aprendizagem. A sua eficácia depende da organização da informação, da complexidade do conteúdo e dos conhecimentos prévios dos alunos.",
    rgpdNote: "Nunca introduza dados pessoais de alunos (nomes, notas ou situações individuais) nos guiões que envia para ferramentas na nuvem."
  },
  {
    id: 2,
    title: "2. Legendar e Tornar os Materiais Acessíveis a Todos (DUA)",
    shortTitle: "Inclusão e Acessibilidade",
    description: "Numa turma típica de 25 ou 28 alunos, temos alunos que leem devagar, alunos com défice auditivo e, cada vez mais em Portugal, alunos recém-chegados de outros países que ainda não dominam a nossa língua. As funcionalidades de legendagem, transcrição e tradução podem apoiar o acesso à informação, mas não garantem, por si só, a inclusão de todos os alunos.",
    capabilities: [
      "Criar legendas automáticas sincronizadas e com pontuação adequada em poucos segundos.",
      "Corrigir rapidamente no texto palavras técnicas ou vocabulário científico mal transcrito.",
      "Traduzir o áudio de uma aula para dezenas de línguas, preservando a clareza e entoação.",
      "Produzir materiais com suporte bimodal (áudio + texto simultâneo) que apoiam a literacia."
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Editor de vídeo com funcionalidades de edição e recursos de IA. A disponibilidade e a qualidade das ferramentas de reconhecimento de fala e legendagem devem ser confirmadas na versão utilizada." },
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
      "Localizar no vídeo os momentos onde foi colocada uma dúvida ou explicado um conceito.",
      "Cortar os silêncios, as pausas de transição e os momentos de espera da aula.",
      "Gerar clipes curtos com título automático focados num único problema resolvido.",
      "Disponibilizar pequenos clipes didáticos antes de começar um novo capítulo para despertar o interesse."
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Permite cortar partes do vídeo diretamente selecionando o texto transcrito, sem ter de procurar manualmente na linha de tempo." },
      { name: "InVideo AI", description: "Resume artigos ou capítulos extensos num vídeo dinâmico de 90 segundos com os tópicos essenciais." }
    ],
    teacherBenefits: [
      "Materiais organizados por tema ou conceito, facilitando a consulta de partes específicas.",
      "Fácil consulta rápida no telemóvel antes de fichas de avaliação e momentos de síntese.",
      "Possibilidade de reutilizar e disponibilizar excertos revistos, adequados aos objetivos de cada atividade."
    ],
    cognitivePrinciple: "Princípio da Segmentação de Mayer: a informação pode ser organizada em partes significativas, permitindo ao aluno controlar o ritmo, pausar e rever. O benefício depende do conteúdo e da forma como os segmentos são estruturados.",
    rgpdNote: "Atenção máxima: se a gravação da aula contiver rostos ou perguntas com nomes de alunos, NUNCA a envie para geradores de IA públicos na Internet."
  },
  {
    id: 4,
    title: "4. Apresentadores Virtuais para Manter a Consistência e Proximidade",
    shortTitle: "Avatares Pedagógicos",
    description: "Um avatar virtual pode parecer artificial à primeira vista, mas quando bem utilizado é uma ferramenta complementar: serve para dar as boas-vindas a um módulo, colocar uma questão desafiadora ou simular uma dramatização com uma figura histórica.",
    capabilities: [
      "Criar uma personagem virtual que lê as instruções de um trabalho com clareza e ritmo pausado.",
      "Simular diálogos entre duas figuras (por exemplo, um debate fictício entre dois filósofos ou cientistas).",
      "Manter a mesma voz e identidade visual em materiais de apoio ao estudo ao longo do ano letivo.",
      "Preparar comunicações breves e avisos pedagógicos sem necessidade de montagem de estúdio."
    ],
    usefulTools: [
      { name: "Vidnoz AI", description: "Permite colocar dois avatares a dialogar na mesma cena, o que é útil para simulações didáticas." },
      { name: "HeyGen", description: "Avatares virtuais com sincronização labial avançada, ideal para demonstrações breves do professor." },
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
      "Exportar com qualidade em alta definição pronto a partilhar com os alunos."
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Editor de vídeo com funcionalidades de corte, legendagem e recursos de composição." },
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
    recommendedTool: "Kling AI / Luma Dream Machine / MiniMax (Hailuo AI)",
    visualStyle: "Animação 3D médica translúcida, com contraste forte entre sangue oxigenado e desoxigenado",
    pedagogicalObjective: "Visualizar o percurso do sangue no coração humano em movimento contínuo e compreender a sístole e a diástole.",
    curriculumCompetence: "Identificar os constituintes do sistema cardiovascular e explicar as funções da circulação pulmonar e sistémica.",
    promptText: "Cria uma animação médica educativa em 3D, mostrando um corte longitudinal do coração humano a bater em ritmo calmo e realista. Mostra o sangue desoxigenado (representado a azul) a entrar na aurícula direita através das veias cavas, a passar para o ventrículo direito e a ser bombeado para a artéria pulmonar. Em simultâneo, o sangue oxigenado (representado a vermelho vivo) regressa dos pulmões pelas veias pulmonares para a aurícula esquerda, passa para o ventrículo esquerdo e é ejetado pela artéria aorta. Movimento de câmara suave e contínuo, iluminação clara, fundo neutro em tons de cinzento escuro para destacar as válvulas cardíacas em funcionamento. Sem legendas ou textos automáticos na imagem.",
    ethicalConsideration: "Verificar se as cores convencionais (azul/vermelho) não geram conceções alternativas incorretas nos alunos."
  },
  {
    id: 2,
    title: "2. A Descoberta do Caminho Marítimo para a Índia (1498)",
    discipline: "História",
    gradeLevel: "2.º Ciclo (5.º ou 6.º ano)",
    category: "Reconstituição Histórica Cinematográfica",
    recommendedTool: "Luma Dream Machine / Kling AI",
    visualStyle: "Cinematográfico realista de época, iluminação de fim de tarde, nevoeiro suave sobre a água",
    pedagogicalObjective: "Recriar o ambiente dramático da chegada da armada de Vasco da Gama a Calecute em maio de 1498.",
    curriculumCompetence: "Reconhecer a importância dos Descobrimentos portugueses e localizar as principais etapas da expansão marítima.",
    promptText: "Cria uma cena histórica cinematográfica mostrando três naus portuguesas do século XV (naus São Gabriel e São Rafael) a aproximarem-se da costa de Calecute, na Índia, ao entardecer de maio de 1498. As velas de pano cru exibem a Cruz de Cristo com desgaste natural provocado por meses de navegação no Oceano Atlântico e no Índico. O mar está calmo, com ondas pequenas a baterem no casco de madeira escura. Na linha do horizonte avista-se a costa verdejante de Malabar envolta em névoa quente. Câmara em plano geral que se aproxima lentamente da proa da nau capitânia, onde se veem marinheiros vestidos com roupas simples de linho e lã da época a olharem para a costa com alívio e espanto. Iluminação dourada natural de pôr do sol, sem elementos anacrónicos, sem filtros de fantasia e sem texto gerado na imagem.",
    ethicalConsideration: "Garantir o rigor histórico das embarcações e evitar representações caricaturais das populações locais."
  },
  {
    id: 3,
    title: "3. O Ciclo da Água: Da Evaporação à Precipitação",
    discipline: "Geografia / Ciências Naturais",
    gradeLevel: "2.º Ciclo (5.º ano)",
    category: "Paisagem Dinâmica e Meteorologia",
    recommendedTool: "Pika / Kling AI",
    visualStyle: "Documentário de natureza realista em plano aberto sobre paisagem costeira montanhosa",
    pedagogicalObjective: "Explicar as fases contínuas do ciclo hidrológico: evaporação no oceano, condensação em nuvens sobre as montanhas e precipitação.",
    curriculumCompetence: "Compreender o ciclo da água como processo dinâmico e reconhecer a água como recurso vital e finito.",
    promptText: "Cria uma sequência visual fluida em estilo documentário sobre o ciclo da água numa paisagem de costa atlântica de Portugal Continental. A câmara começa ao nível do mar ao nascer do sol, mostrando o vapor de água a subir suavemente da superfície do oceano por evaporação. Em travelling vertical contínuo, a câmara sobe até à atmosfera onde o vapor condensa, formando nuvens densas cúmulo-nimbo que se deslocam empurradas pelo vento em direção a uma serra costeira. À medida que as nuvens encontram a montanha, escurecem e transformam-se em chuva visível que cai sobre a encosta, alimentando um ribeiro límpido que desce entre rochas de granito e vegetação verdejante. Iluminação natural com transição realista de sol para chuva, sem textos nem diagramas sobrepostos.",
    ethicalConsideration: "Assegurar que o ciclo é compreendido como contínuo e não linear."
  },
  {
    id: 4,
    title: "4. A Mitose Celular: Divisão e Vida ao Microscópio",
    discipline: "Biologia e Geologia",
    gradeLevel: "Ensino Secundário (10.º ou 11.º ano)",
    category: "Microscopia Científica de Alta Resolução",
    recommendedTool: "Kling AI / Luma Dream Machine",
    visualStyle: "Microscopia confocal de fluorescência com fundo negro e contraste vívido de proteínas",
    pedagogicalObjective: "Compreender as fases da mitose (prófase, metáfase, anáfase e telófase) observando a separação dos cromossomas pelo fuso acromático.",
    curriculumCompetence: "Explicar a importância da mitose na manutenção da estabilidade genética e na renovação dos tecidos biológicos.",
    promptText: "Cria uma simulação científica realista com a estética de microscopia confocal de fluorescência, mostrando uma célula eucariota animal a passar pela anáfase e telófase da mitose celular. Os cromossomas duplicados estão corados com fluorescência azul ciano brilhante, alinhados inicialmente na placa equatorial da célula. Os microtúbulos do fuso acromático, visíveis em verde-esmeralda delicado, encurtam gradualmente, puxando os cromatídeos-irmãos para os polos opostos da célula com movimento mecânico preciso e suave. Simultaneamente, a membrana celular começa a invaginar no plano equatorial formando o anel contrátil para a citocinese. Fundo negro absoluto de microscopia biológica, iluminação volumétrica nos cromossomas, foco perfeito e sem texto nem etiquetas na imagem.",
    ethicalConsideration: "Alertar que a fluorescência é uma técnica laboratorial de visualização e não a cor real da matéria biológica viva."
  },
  {
    id: 5,
    title: "5. A Formação dos Vulcões e Placas Tectónicas",
    discipline: "Ciências Naturais / Físico-Química",
    gradeLevel: "3.º Ciclo (7.º ano)",
    category: "Geologia Dinâmica 3D",
    recommendedTool: "Luma Dream Machine / Kling AI / MiniMax (Hailuo AI)",
    visualStyle: "Corte geológico 3D com magma incandescente e fumo volumétrico hiper-realista",
    pedagogicalObjective: "Visualizar o processo de subducção de uma placa oceânica sob uma placa continental e a consequente ascensão de magma.",
    curriculumCompetence: "Relacionar a tectónica de placas com a ocorrência de sismos e erupções vulcânicas no planeta.",
    promptText: "Cria uma animação geológica realista em corte transversal tridimensional da litosfera terrestre, mostrando o limite convergente entre uma placa oceânica e uma placa continental (zona de subducção). A placa oceânica mais densa, de basalto escuro, mergulha lentamente sob a crosta continental granítica. À medida que a placa desce no manto superior, o aumento de pressão e temperatura provoca a fusão parcial das rochas, gerando bolsas de magma incandescente de cor laranja-fogo que ascendem em plumas através de fraturas na crosta até alimentarem a câmara magmática de um vulcão de cone compósito. O vulcão entra em atividade efusiva, libertando uma coluna densa de cinzas e vapor cinzento-escuro para o céu, com escoadas de lava a descerem pela encosta. Foco nítido nas camadas rochosas, sem diagramas, sem setas e sem texto gerado na imagem.",
    ethicalConsideration: "Esclarecer que a velocidade real do processo demora milhões de anos e está acelerada para fins didáticos."
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
    promptText: "Gera um avatar virtual pedagógico com aparência de uma jovem professora de ciências de cerca de 30 anos, com óculos de segurança e bata branca de laboratório abotoada, num ambiente de laboratório escolar luminoso e moderno. A apresentadora olha diretamente para a câmara com uma expressão amigável, acolhedora e confiante, falando em Português de Portugal com dicção impecável e ritmo calmo. Ela gesticula com as mãos de forma natural enquanto explica as três regras de ouro da aula de laboratório de hoje: primeiro, cabelo sempre apanhado e óculos postos; segundo, nunca cheirar nem provar reagentes químicos; terceiro, em caso de derrame, chamar imediatamente o professor sem entrar em pânico. Iluminação suave de estúdio, plano médio cintura-cabeça, sincronização labial perfeita com áudio PT-PT e sem legendas sobrepostas na imagem.",
    ethicalConsideration: "Verificar se as regras laboratoriais estão alinhadas com o regulamento interno da escola."
  },
  {
    id: 7,
    title: "7. O Teorema de Pitágoras no Mundo Real",
    discipline: "Matemática",
    gradeLevel: "3.º Ciclo (8.º ano)",
    category: "Visualização Geométrica 3D Concreta",
    recommendedTool: "CapCut (Web, PC e Telemóvel) / InVideo AI",
    visualStyle: "Geometria arquitetónica 3D limpa em ambiente urbano com água colorida a fluir",
    pedagogicalObjective: "Demonstrar visualmente a relação a² + b² = c² através do preenchimento da área do quadrado da hipotenusa pela água dos quadrados dos catetos.",
    curriculumCompetence: "Deduzir e aplicar o Teorema de Pitágoras na resolução de problemas geométricos do espaço real.",
    promptText: "Cria uma demonstração visual tridimensional fascinante do Teorema de Pitágoras construída numa praça de cidade moderna. No centro, vê-se um triângulo retângulo esculpido em mármore claro com lados com proporções de 3, 4 e 5 metros. Em cada um dos três lados está construído um tanque quadrado de acrílico transparente com a profundidade de 20 centímetros. Inicialmente, os dois tanques dos catetos (o de lado 3 e o de lado 4) estão completamente cheios de água azul-turquesa brilhante, enquanto o tanque da hipotenusa (de lado 5) está completamente vazio. Com a rotação suave de uma válvula mecânica, a água dos dois catetos escorre através de tubos transparentes para dentro do tanque da hipotenusa, enchendo-o com exatidão até à borda, sem sobrar nem faltar uma única gota. Câmara a circular suavemente em ângulo de 45 graus, iluminação de dia ensolarado, sem números nem texto sobrepostos na imagem.",
    ethicalConsideration: "A demonstração visual da água apoia a intuição espacial, mas deve ser complementada com a demonstração algébrica rigorosa."
  },
  {
    id: 8,
    title: "8. A Tragédia de Inês de Castro na Quinta das Lágrimas",
    discipline: "Português / Literatura",
    gradeLevel: "3.º Ciclo e Secundário (9.º ao 12.º ano)",
    category: "Evocação Poética e Histórica de Os Lusíadas",
    recommendedTool: "Luma Dream Machine / Kling AI",
    visualStyle: "Gótico poético do século XIV, luz suave de luar filtrada por salgueiros e água corrente",
    pedagogicalObjective: "Ilustrar o episódio de Inês de Castro d'Os Lusíadas (Canto III) para apoiar o estudo da lírica camoniana e da memória coletiva.",
    curriculumCompetence: "Interpretar textos literários clássicos reconhecendo temas intemporais, símbolos e figuras de estilo.",
    promptText: "Cria uma cena poética e atmosférica de época medieval do século XIV inspirada na lenda de Inês de Castro nos jardins da Quinta das Lágrimas, em Coimbra. Uma jovem nobre de porte sereno e olhar melancólico, vestida com um vestido medieval de veludo azul-escuro com bordados de prata e cabelos soltos sobre os ombros, caminha descalça junto à margem de uma fonte de água cristalina rodeada por pedras cobertas de musgo e salgueiros antigos. A luz do luar ilumina suavemente as águas límpidas, revelando no fundo pedras com tonalidades avermelhadas que evocam a lenda das lágrimas de sangue. Ao fundo, por entre a vegetação densa, avista-se a silhueta em pedra do Mosteiro de Santa Clara-a-Velha sob um céu estrelado. Movimento de câmara lento e contemplativo, atmosfera romântica e comovente, sem sangue explícito, sem violência e sem texto na imagem.",
    ethicalConsideration: "Distinguir claramente o mito romântico e poético da realidade factual documentada pelos historiadores."
  },
  {
    id: 9,
    title: "9. A Fotossíntese: Como as Plantas Fabricam Oxigénio",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "2.º e 3.º Ciclo (6.º ao 8.º ano)",
    category: "Macro-Cinematografia Botânica com Corte Microscópico",
    recommendedTool: "Kling AI / Luma Dream Machine",
    visualStyle: "Transição contínua de macro real de folha verde para corte celular microscópico translúcido",
    pedagogicalObjective: "Compreender como a clorofila capta a energia da luz solar e transforma dióxido de carbono e água em glicose e oxigénio.",
    curriculumCompetence: "Explicar os processos de nutrição das plantas autotróficas e a sua relevância para o equilíbrio dos ecossistemas.",
    promptText: "Cria uma sequência visual contínua começando com um plano de grande aproximação macro a uma folha de videira verde e orvalhada num dia ensolarado. A câmara realiza um zoom contínuo que atravessa a cutícula cerosa e a epiderme da folha, entrando no interior de uma célula do parênquima clorofilino. No citoplasma translúcido, revelam-se dezenas de cloroplastos verdes em forma de disco, banhados por raios de sol microscópicos dourados. No interior dos tilacoides, vê-se a água a chegar pelas nervuras da folha e moléculas de dióxido de carbono a serem transformadas em pequenas esferas luminosas de glicose, enquanto bolhas minúsculas de oxigénio se soltam e saem através dos estômatos abertos. Transições fluidas, estética de documentário de alta gama da BBC, sem legendas nem setas automáticas geradas na imagem.",
    ethicalConsideration: "Assegurar que os alunos não confundem fotossíntese com respiração celular das plantas."
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
    promptText: "Cria um clipe educativo animado curto, com a duração compatível com as opções disponíveis na ferramenta selecionada, destinado a alunos do 3.º ano do 1.º ciclo. Mostra três caixas e coloca quatro maçãs vermelhas em cada caixa. Representa visualmente os três grupos iguais de quatro maçãs. A imagem deve permitir ao professor explicar posteriormente que quatro mais quatro mais quatro são doze e que 3 × 4 = 12. Não acrescentes operações, quantidades ou objetos que alterem o exemplo. Evita texto gerado automaticamente na imagem. A narração, as legendas e a explicação matemática final serão acrescentadas na etapa de edição.",
    ethicalConsideration: "O clipe é apenas um elemento visual de apoio. O produto final, com cerca de dois minutos, deve ser montado numa ferramenta de edição, com narração, identificação matemática correta e uma pergunta de consolidação."
  },
  {
    id: 11,
    title: "11. A Revolução dos Cravos (25 de Abril de 1974)",
    discipline: "História / Cidadania",
    gradeLevel: "2.º / 3.º Ciclo e Secundário",
    category: "Reconstituição Histórica e Cidadania",
    recommendedTool: "Kling AI / MiniMax (Hailuo AI) / Luma Dream Machine",
    visualStyle: "Reconstituição visual ilustrativa, estilizada e claramente identificada como gerada por Inteligência Artificial; não imitar filmagem documental autêntica.",
    pedagogicalObjective: "Explorar o contexto histórico do 25 de Abril de 1974, relacionando acontecimentos e símbolos com fontes históricas e distinguindo registos documentais de reconstituições visuais.",
    curriculumCompetence: "Compreender o fim da ditadura, a importância da Constituição de 1976 e a valorização ativa dos direitos humanos e das liberdades cívicas.",
    promptText: "Cria uma reconstituição visual ilustrativa, em estilo gráfico ou cinematográfico assumidamente ficcional, inspirada no 25 de Abril de 1974 em Lisboa. Mostra uma rua de Lisboa, a presença de militares e civis e um cravo vermelho como símbolo associado à Revolução dos Cravos. Não imites a aparência de uma filmagem documental autêntica, não inventes diálogos nem detalhes históricos específicos e não apresentes a cena como registo real. A composição deve ser identificada como reconstituição gerada por Inteligência Artificial e acompanhada, na atividade, por fotografias, testemunhos e fontes históricas devidamente identificados.",
    ethicalConsideration: "Confrontar a reconstituição com fontes documentais; não usar o vídeo gerado como prova histórica."
  }
];

// 4. CATÁLOGO COMPLETO DAS 11 FERRAMENTAS DE VÍDEO COM IA PARA EDUCAÇÃO (2026)
export const TOOLS_CATALOG: ToolCatalogItem[] = [
  {
    id: "invideo",
    name: "InVideo AI",
    category: "Geração de Guião e Vídeo Didático",
    badge: "Guião e Composição",
    shortDesc: "Escreva uma instrução pedagógica e a ferramenta apoia a criação de um rascunho de vídeo com proposta de guião, narração e planos de imagem.",
    fullDesc: "O InVideo AI apoia a estruturação inicial de pequenos vídeos a partir de temas curriculares. Gera uma proposta de guião, seleciona elementos audiovisuais e inclui narração e legendas. O resultado gerado exige sempre revisão e adaptação pedagógica pelo docente para assegurar o rigor conceptual e a adequação ao nível etário dos alunos.",
    keyFeatures: [
      "Apoio à criação de rascunhos de vídeos educativos a partir de instruções escritas",
      "Proposta de locução e opções de narração",
      "Acesso a bibliotecas de imagens e vídeos de arquivo",
      "Edição do guião e substituição de planos na interface",
      "Geração de legendas que podem ser revistas pelo utilizador"
    ],
    inputTypes: ["Instrução em Texto", "Resumo de Matéria", "Artigos Web"],
    freeTierDetails: "Os limites de geração e exportação, a resolução, as marcas de água e os direitos de utilização variam consoante o plano. Consultar as condições oficiais antes de preparar um recurso para publicação ou partilha.",
    limitations: [
      "Vídeos de teste podem incluir marca de água do serviço",
      "Determinados recursos visuais dependem de planos comerciais",
      "O guião gerado exige revisão cuidada pelo docente antes de qualquer utilização educativa"
    ],
    pedagogicalUseCases: [
      "Criar introduções breves para lançamento de temas curriculares pelo professor",
      "Produzir sínteses de apoio para disponibilização na plataforma da escola",
      "Trabalho de projeto em que os alunos redigem o guião e o professor apoia a montagem"
    ],
    externalUrl: "https://invideo.io/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Permite apoiar a criação de rascunhos de vídeos didáticos e apresentações a partir de instruções escritas.",
      whatIsFact: "Cria uma proposta estruturada de vídeo com cortes e narração a partir de uma instrução em texto.",
      whatIsMisleading: "O guião gerado automaticamente necessita de revisão pedagógica e científica pelo professor."
    }
  },
  {
    id: "kling",
    name: "Kling AI",
    category: "Fotorrealismo e Física do Mundo Real",
    badge: "Física e Fotorrealismo",
    shortDesc: "Modelo generativo para criação de vídeos a partir de texto ou imagem com representação de movimentos e iluminação.",
    fullDesc: "O Kling AI permite gerar clipes curtos a partir de texto ou animar imagens estáticas. É utilizado para criar representações visuais de processos dinâmicos, paisagens e reconstituições visuais ilustrativas. O resultado deve ser avaliado criticamente quanto ao rigor histórico ou científico.",
    keyFeatures: [
      "Geração de sequências visuais a partir de instruções em texto",
      "Animação de imagens e gravuras estáticas em alta definição",
      "Modelação de movimentos de fluidos, tecidos e luz natural",
      "Controlo de ângulo de câmara e perspetivas de visualização"
    ],
    inputTypes: ["Instrução em Texto", "Fotografia Estática"],
    freeTierDetails: "Os créditos, limites de geração, filas de espera, marcas de água e condições comerciais podem variar entre modelos e planos. Consultar a informação oficial no momento da utilização; esta ficha não garante uma quota gratuita.",
    limitations: [
      "As funcionalidades de áudio dependem do modelo e das opções disponibilizadas na versão utilizada. Confirmar na documentação oficial se o modelo selecionado permite geração de áudio.",
      "A geração de movimentos complexos pode apresentar artefactos visuais ou distorções ocasionais.",
      "Exige supervisão para evitar alucinações históricas ou científicas."
    ],
    pedagogicalUseCases: [
      "Simular processos físicos ou químicos que não se conseguem filmar em aula",
      "Animação de quadros e gravuras históricas para projetos interdisciplinares",
      "Exercícios de observação crítica da física do movimento gerado por computador"
    ],
    externalUrl: "https://klingai.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Adequado para geração de clipes visuais curtos ilustrativos para demonstrar fenómenos dinâmicos.",
      whatIsFact: "Produz simulações de movimento e iluminação natural com elevado detalhe visual.",
      whatIsMisleading: "As representações visuais podem incluir artefactos e necessitam de validação factual."
    }
  },
  {
    id: "luma",
    name: "Luma Dream Machine",
    category: "Vídeo 3D Dinâmico e Espacial",
    badge: "Fluidez e Movimento 3D",
    shortDesc: "Motor generativo com foco na consistência de câmara e perspetiva tridimensional de objetos e cenários.",
    fullDesc: "O Luma Dream Machine foi concebido para gerar clipes com continuidade espacial apurada, permitindo criar travellings, sobrevoos de paisagens ou animação de peças de museu e modelos tridimensionais a partir de fotos.",
    keyFeatures: [
      "Geração de clipes com consistência espacial e transições de câmara suaves",
      "Animação de fotografias preservando o ponto de fuga e perspetiva",
      "Apoio a movimentos circulares e rotações de câmara em torno de objetos"
    ],
    inputTypes: ["Texto", "Fotografia / Imagem 2D"],
    freeTierDetails: "Os modelos, limites de geração, condições de acesso e planos disponíveis podem mudar. Consulte a página oficial antes de planear a utilização. Esta ficha não garante uma quota gratuita.",
    limitations: [
      "Geração de corpos humanos em movimento rápido pode produzir deformações anatómicas",
      "Tempos de espera sujeitos a tráfego na versão de teste"
    ],
    pedagogicalUseCases: [
      "Sobrevoo de relevos e formações geográficas para apoio às aulas de Geografia",
      "Animação de esculturas clássicas ou peças de arqueologia a partir de fotografias",
      "Criação de fundos imersivos para apresentações temáticas da turma"
    ],
    externalUrl: "https://lumalabs.ai/dream-machine",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Excelente para criar pequenos clipes com sensação de profundidade e câmara em movimento.",
      whatIsFact: "Excelente consistência espacial e movimentos de câmara fluídos.",
      whatIsMisleading: "Pode distorcer mãos, membros e pormenores anatómicos em movimentos complexos."
    }
  },
  {
    id: "minimax",
    name: "MiniMax (Hailuo AI)",
    category: "Geração Cinematográfica com Resolução Elevada",
    badge: "Detalhe e Expressividade",
    shortDesc: "Modelo generativo com capacidade notável de interpretação de instruções descritivas e expressividade.",
    fullDesc: "O MiniMax (disponibilizado através da interface Hailuo AI) destaca-se na geração de vídeos a partir de descrições ricas, produzindo texturas detalhadas, iluminação cinematográfica e reações faciais expressivas para simulações didáticas.",
    keyFeatures: [
      "Elevada fidelidade na interpretação de descrições ricas de cenas e ambientes",
      "Tratamento expressivo de iluminação e atmosferas cinematográficas",
      "Geração de clipes com boa definição e estabilidade temporal"
    ],
    inputTypes: ["Texto Descritivo", "Fotografia de Referência"],
    freeTierDetails: "Os créditos, limites, resolução, marcas de água e condições de utilização variam consoante a versão e o plano. Consultar a informação oficial antes da utilização. Esta ficha não garante a existência de créditos gratuitos.",
    limitations: [
      "Processamento na nuvem com dependência de largura de banda",
      "Exige revisão prévia para garantir que os elementos visuais são rigorosos"
    ],
    pedagogicalUseCases: [
      "Reconstituição de ambientes históricos descritos em textos literários",
      "Visualização de biomas e ecossistemas com atmosfera envolvente",
      "Exercícios de escrita criativa onde os alunos descrevem uma cena e comparam com a imagem"
    ],
    externalUrl: "https://hailuoai.video/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Muito útil para ilustrar cenas ricas onde a atmosfera e o detalhe visual enriquecem a aula.",
      whatIsFact: "Interpretação precisa de descrições de texto e elevada qualidade estética.",
      whatIsMisleading: "Pode acrescentar elementos decorativos que não estavam no prompt original."
    }
  },
  {
    id: "pika",
    name: "Pika",
    category: "Efeitos Criativos e Animação Rápida",
    badge: "Criatividade e Efeitos",
    shortDesc: "Ferramenta acessível no navegador focada em animação de ilustrações e efeitos de transformação visual.",
    fullDesc: "O Pika é conhecido pela facilidade com que permite carregar um desenho, pintura ou fotografia e dar-lhe movimento suave em segundos, sendo ideal para dar vida a trabalhos artísticos dos próprios alunos.",
    keyFeatures: [
      "Animação rápida de imagens carregadas do computador com interface simples",
      "Efeitos visuais de transformação de materiais e estilos gráficos",
      "Controlo básico de movimento em áreas selecionadas da imagem"
    ],
    inputTypes: ["Texto", "Ilustrações / Desenhos dos Alunos", "Fotografias"],
    freeTierDetails: "Os limites, créditos e condições do plano podem mudar. Consultar a documentação oficial na data da utilização. Esta ficha não garante uma quota gratuita.",
    limitations: [
      "Exportação gratuita inclui marca de água do serviço",
      "Resolução e opções de controlo avançado dependem de subscrição"
    ],
    pedagogicalUseCases: [
      "Animar desenhos e pinturas feitos pelos alunos nas aulas de Educação Visual",
      "Criar pequenos 'quadros vivos' para dramatizações históricas ou literárias",
      "Projetos de Expressão Artística com introdução ao cinema de animação"
    ],
    externalUrl: "https://pika.art/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ótima porta de entrada para projetos artísticos onde o objetivo é animar trabalhos manuais dos alunos.",
      whatIsFact: "Interface muito simples e rápida para dar movimento a fotos e desenhos.",
      whatIsMisleading: "Não é adequada para simulações científicas rigorosas que exijam precisão métrica."
    }
  },
  {
    id: "capcut",
    name: "CapCut (Web, PC e Telemóvel)",
    category: "Edição Assistida, Legendas e Composição",
    badge: "Edição e Legendas",
    shortDesc: "Editor de vídeo versátil disponível em várias plataformas com funcionalidades de corte e legendagem automática.",
    fullDesc: "O CapCut é um dos editores mais populares entre os estudantes. Oferece linha temporal intuitiva, recorte de fundo, legendagem automática com sincronização e ferramentas de composição áudio e vídeo.",
    keyFeatures: [
      "Legendagem automática rápida com pontuação que pode ser corrigida manualmente",
      "Edição direta por corte de texto transcrito ou na linha temporal clássica",
      "Biblioteca extensa de transições, efeitos didáticos e pistas de áudio",
      "Disponível em versão Web no navegador, aplicação para computador e telemóvel"
    ],
    inputTypes: ["Vídeos Gravados", "Áudios / Voz do Professor", "Fotografias", "Texto"],
    freeTierDetails: "A disponibilidade de legendagem automática, geração de conteúdos, exportação, créditos e remoção de marcas de água depende da versão, região e plano. Antes da utilização, confirme na página oficial e na conta concreta quais as funcionalidades incluídas.",
    limitations: [
      "A versão para telemóvel pode promover compras na aplicação e requer atenção aos termos de privacidade",
      "Alguns efeitos e modelos visuais avançados estão reservados à versão paga",
      "A existência de uma aplicação instalada não garante que todo o processamento ocorra localmente"
    ],
    pedagogicalUseCases: [
      "Legendar todas as videoaulas do professor para apoiar alunos com dificuldades auditivas (DUA)",
      "Projetos de turma de noticiários, reportagens e documentários científicos",
      "Montagem final de trabalhos interdisciplinares que combinam texto, áudio e vídeo"
    ],
    externalUrl: "https://www.capcut.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta de edição acessível para montar trabalhos escolares e legendar vídeos com facilidade.",
      whatIsFact: "A legendagem automática e as ferramentas de corte agilizam a montagem de vídeos escolares.",
      whatIsMisleading: "Algumas funcionalidades e legendagens exigem ligação à Internet e termos de privacidade específicos."
    }
  },
  {
    id: "canva",
    name: "Canva para Educação",
    category: "Apresentações Multimédia e Vídeo Colaborativo",
    badge: "Ecossistema Escolar",
    shortDesc: "Plataforma de design e apresentações com ferramentas de vídeo e animação integradas para escolas elegíveis.",
    fullDesc: "O Canva para Educação disponibiliza um ambiente para criação de apresentações, infográficos e pequenos vídeos, com modelos educativos prontos e ferramentas de colaboração para professores e turmas.",
    keyFeatures: [
      "Criação e edição colaborativa de vídeos em tempo real entre alunos e professores",
      "Grande biblioteca de vídeos de stock, ilustrações científicas e ícones educativos",
      "Gravação direta de apresentações narradas com câmara em círculo (estilo PiP)",
      "Animação automática de diapositivos e exportação em alta definição sem marca de água"
    ],
    inputTypes: ["Texto", "Apresentações Existentes", "Imagens", "Vídeos"],
    freeTierDetails: "O Canva para Educação é gratuito para professores elegíveis e respetivos alunos do ensino primário, básico e secundário, de acordo com os critérios e a validação do fornecedor. A elegibilidade deve ser confirmada na página oficial. A gratuitidade do programa não significa que todas as funcionalidades de Inteligência Artificial, em particular a geração de vídeo, sejam ilimitadas ou estejam disponíveis em todas as contas. Os limites e as funcionalidades devem ser verificados na conta e documentação atuais.",
    limitations: [
      "Algumas funcionalidades de Inteligência Artificial podem ter limites de utilização ou condições específicas. A disponibilidade depende da ferramenta, da conta, do programa educativo e das condições em vigor. Consultar a informação apresentada pelo fornecedor antes de planear a atividade.",
      "A criação colaborativa exige gestão cuidada de permissões e privacidade."
    ],
    pedagogicalUseCases: [
      "Criação colaborativa de trabalhos de grupo com vídeo e texto em simultâneo",
      "Apresentações orais gravadas pelos alunos para avaliação sumativa ou formativa",
      "Infográficos animados para explicar conceitos de cidadania, ciência e história"
    ],
    externalUrl: "https://www.canva.com/education/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Gratuito para Escolas",
      minimumAge: "Consultar os termos e as condições aplicáveis à conta educativa e aos utilizadores. Não está estabelecida nesta ficha uma idade mínima universal.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Pode constituir uma opção para criação colaborativa de materiais educativos quando o docente, a instituição e os alunos abrangidos cumprem os critérios do programa. A existência de um plano educativo não substitui a análise das funcionalidades concretas, das condições de utilização e das orientações de proteção de dados da escola.",
      whatIsFact: "Permite criar apresentações multimédia colaborativas com ferramentas de animação e vídeo.",
      whatIsMisleading: "A gratuitidade educativa depende de validação documental institucional e não cobre todo o tipo de entidades."
    }
  },
  {
    id: "perchance",
    name: "Perchance AI (Apenas Docentes Adultos, 18+)",
    category: "Exploração Sem Conta (Exclusivo Adultos)",
    badge: "Apenas Docentes (18+)",
    shortDesc: "Ferramenta aberta de exploração de modelos de imagem e vídeo sem registo, de acesso reservado a adultos (18+).",
    fullDesc: "O Perchance é uma plataforma aberta que permite explorar modelos de difusão de texto para imagem e animação básica sem necessidade de criar conta ou facultar dados pessoais. Pelas suas características abertas e termos do serviço, o seu acesso é expressamente reservado a adultos (maiores de 18 anos) para preparação prévia de materiais pelo professor. É totalmente desaconselhado e interdito o seu uso direto por alunos menores de idade.",
    keyFeatures: [
      "Geração rápida de imagens e clipes de teste sem criação de conta nem início de sessão",
      "Não recolhe endereço de correio eletrónico nem dados de registo prévio",
      "Útil para o professor gerar rapidamente ilustrações pontuais para imprimir ou projetar",
      "Código aberto e interface despojada sem anúncios comerciais agressivos"
    ],
    inputTypes: ["Prompt de Texto"],
    freeTierDetails: "Plataforma pública de acesso gratuito mantida pela comunidade. Sem garantia de serviço.",
    limitations: [
      "ACESSO EXCLUSIVO A MAIORES DE 18 ANOS: proibido o uso direto por alunos menores em contexto escolar",
      "Não possui filtros institucionais escolares robustos: o professor deve verificar previamente todo o material gerado",
      "Qualidade e resolução dos clipes visuais são modestas comparadas com modelos comerciais"
    ],
    pedagogicalUseCases: [
      "Preparação prévia pelo professor de imagens temáticas para projetar nas aulas",
      "Geração de ilustrações fictícias para fichas de trabalho em papel",
      "Exclusivamente uso docente: nunca partilhar a hiperligação direta para exploração livre por alunos menores"
    ],
    externalUrl: "https://perchance.org/ai-text-to-video-generator",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Acesso reservado a adultos (18+)",
      minimumAge: "18+ anos (Termos explícitos da plataforma: estritamente reservado a adultos)",
      rgpdRiskLevel: "Baixo para o docente (não recolhe conta); ALTO se exposto a menores sem filtro",
      teacherVerdict: "Ferramenta utilitária exclusiva para o professor preparar materiais no seu computador pessoal.",
      whatIsFact: "Permite gerar imagens e clipes de teste sem conta nem fornecimento de e-mail.",
      whatIsMisleading: "Não é uma ferramenta desenhada para escolas nem pode ser aberta em computadores partilhados por crianças."
    }
  },
  {
    id: "clipchamp",
    name: "Microsoft Clipchamp",
    category: "Edição Integrada e Vozes em Português de Portugal",
    badge: "Vozes PT-PT Nativas",
    shortDesc: "Editor de vídeo integrado no ecossistema Microsoft com funcionalidades de texto-para-voz em Português de Portugal.",
    fullDesc: "O Microsoft Clipchamp combina edição simplificada com conversor de texto para fala de qualidade notável, disponibilizando vozes com sotaque e entoação de Portugal, ideais para narrar apontamentos e videoaulas com dicção correta.",
    keyFeatures: [
      "Síntese de voz de texto para fala com dicção e sotaque em Português de Portugal",
      "Gravação combinada de ecrã e câmara web com separação em faixas para edição flexível",
      "Exportação direta em alta definição (1080p) sem marca de água na conta pessoal",
      "Interface limpa em português e integração fluida no ecossistema escolar do Windows"
    ],
    inputTypes: ["Texto para Narração", "Gravações de Ecrã", "Ficheiros de Vídeo", "Áudios"],
    freeTierDetails: "A disponibilidade das vozes em Português de Portugal, das funcionalidades de locução e das opções de edição depende da versão, da conta e da licença utilizada. Confirme as opções efetivamente disponíveis no ambiente do professor antes da atividade.",
    limitations: [
      "As contas escolares Microsoft 365 Education dependem das permissões configuradas pelo agrupamento",
      "Biblioteca de recursos de stock premium tem custos adicionais se não for utilizada a conta básica"
    ],
    pedagogicalUseCases: [
      "Gravar tutoriais passo a passo de utilização de programas ou resolução de exercícios",
      "Criar locuções narradas para apresentações com dicção correta em Português Europeu",
      "Edição acessível de trabalhos em grupo em escolas que utilizam o ecossistema Microsoft Teams"
    ],
    externalUrl: "https://clipchamp.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Solução recomendada para gerar narrações com sotaque de Portugal sem custos e sem complicações.",
      whatIsFact: "Excelente qualidade de voz em Português de Portugal e exportação 1080p gratuita na versão pessoal.",
      whatIsMisleading: "Nem todas as contas escolares têm as mesmas funcionalidades desbloqueadas pelo administrador."
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Avatares Falantes e Sincronização Labial",
    badge: "Avatares de Alta Fidelidade",
    shortDesc: "Plataforma de geração de apresentadores virtuais realistas com sincronização labial rigorosa.",
    fullDesc: "O HeyGen destaca-se pela qualidade de animação facial e labial de personagens virtuais a partir de texto escrito, sendo utilizado para demonstrações de introdução de módulos ou simulações breves.",
    keyFeatures: [
      "Sincronização labial com naturalidade em múltiplos idiomas",
      "Avatares de estúdio pré-configurados com postura e vestuário sóbrios",
      "Possibilidade de criar diálogos entre avatares em plano partilhado"
    ],
    inputTypes: ["Texto de Guião", "Áudio Pré-gravado"],
    freeTierDetails: "Os planos, créditos de teste, limites de duração, marcas de água e condições de exportação podem mudar. Consulte a página oficial para conhecer as condições em vigor.",
    limitations: [
      "Os planos gratuitos são muito limitados e orientados a testes rápidos de avaliação",
      "Exige planeamento rigoroso para que a demonstração seja feita no ecrã do professor"
    ],
    pedagogicalUseCases: [
      "Demonstração pelo professor de uma personagem histórica a lançar um enigma à turma",
      "Simulação de apresentador de notícias de ciência para debates pedagógicos",
      "Apresentação de boas-vindas a um novo projeto de forma visualmente cativante"
    ],
    externalUrl: "https://www.heygen.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Pago / Trial Rápido",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Excelente para demonstrações pelo professor; inviável como ferramenta de trabalho diário livre para alunos.",
      whatIsFact: "Qualidade de sincronização labial e naturalidade dos avatares de estúdio.",
      whatIsMisleading: "Não permite utilização regular com alunos em regime gratuito sem esgotar créditos rapidamente."
    }
  },
  {
    id: "vidnoz",
    name: "Vidnoz AI",
    category: "Avatares Gratuitos e Diálogos Didáticos",
    badge: "Diálogos e Modelos Rápidos",
    shortDesc: "Ferramenta acessível para geração de apresentadores virtuais com biblioteca de modelos educativos.",
    fullDesc: "O Vidnoz AI disponibiliza funcionalidades para gerar vídeos com personagens virtuais falantes, permitindo criar diálogos entre duas personagens na mesma cena, o que é útil para simular debates didáticos.",
    keyFeatures: [
      "Modo de diálogo com dois avatares a conversar na mesma cena",
      "Modelos de diapositivos educativos pré-formatados para salas de aula",
      "Opção de tradução de vídeos existentes para outras línguas"
    ],
    inputTypes: ["Texto", "Guião a Duas Vozes", "Imagens de Fundo"],
    freeTierDetails: "Os limites, créditos e condições do plano podem mudar. Consultar a documentação oficial na data da utilização. Esta ficha não garante uma quota gratuita.",
    limitations: [
      "Exportação gratuita pode incluir marca de água e tempos de fila em períodos de elevado tráfego",
      "A naturalidade da voz e sincronização varia consoante o idioma e o modelo selecionado"
    ],
    pedagogicalUseCases: [
      "Simular debates entre figuras históricas ou correntes de pensamento opostas",
      "Apresentar desafios interdisciplinares em equipa de professores",
      "Criação de mensagens curtas para alunos com apoio visual e legendas"
    ],
    externalUrl: "https://pt.vidnoz.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Idade mínima: consultar os termos oficiais do fornecedor. Não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Útil para preparar diálogos a duas personagens sem necessidade de software profissional.",
      whatIsFact: "Permite simular dois avatares a debaterem na mesma cena com planos pré-configurados.",
      whatIsMisleading: "As exportações gratuitas podem incluir marcas de água e limitações de qualidade."
    }
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
      thirdAndSecondary: "Os alunos podem gerar excertos visuais pontuais ou montar recursos de arquivo sob supervisão do docente."
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
        description: "O professor ou os alunos selecionam imagens de arquivo ou geram um clipe visual curto para ilustrar o processo microscópico. Funcionamento por professor-operador sempre que haja restrições de contas.",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Kling AI", "Luma Dream Machine", "MiniMax (Hailuo AI)"]
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
        description: "Visualização coletiva das peças produzidas. Debate sobre o impacto da desinformação nas democracias e aplicação dos deveres de transparência previstos no Regulamento Europeu de Inteligência Artificial.",
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
        evidence: "Rotulagem clara de imagens ou ilustrações sintéticas, em conformidade com o Artigo 50.º do AI Act."
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
      "Que dados ou conteúdos serão enviados para a ferramenta? (Apenas fotografias de domínio público de obras de arte)",
      "A ferramenta está aprovada e é adequada ao contexto? (Ferramentas com verificação de direitos)",
      "Existem alternativas para alunos sem equipamento, conta ou autorização? (Dramatização de 'quadro vivo' em aula)",
      "Como será verificada a aprendizagem e a contribuição individual dos alunos? (Ficha de análise artística e monólogo literário)"
    ],
    whoOperatesTool: {
      firstCycle: "O professor opera a animação subtil da pintura no ecrã da turma; os alunos criam a história e fazem a voz.",
      secondCycle: "O professor apoia a animação com ferramentas institucionais; alunos redigem e gravam em pares.",
      thirdAndSecondary: "Os alunos geram a animação subtil e realizam a montagem áudio completa com autonomia supervisionada."
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
        description: "Os alunos assumem a perspetiva de uma personagem retratada ou de um observador da época e escrevem um monólogo poético de cerca de 40 segundos, expressando os sentimentos e o contexto histórico da cena.",
        aiUseMode: "Sem IA",
        teacherTip: "Excelente oportunidade para trabalhar a empatia histórica, a adjetivação expressiva e a norma do Português."
      },
      {
        step: 3,
        title: "Animação Ilustrativa do Detalhe (Aula 3 · 50 min)",
        description: "Com o Pika ou o Kling (operado pelo professor ou por alunos com idade e autorização confirmadas), gera-se um movimento muito suave e respeitoso (o vento num tecido, as ondas da água, a luz de uma vela).",
        aiUseMode: "IA de apoio",
        recommendedTools: ["Pika", "Kling AI"]
      },
      {
        step: 4,
        title: "Avaliação Crítica da Animação e Partilha (Aula 4 · 50 min)",
        description: "No Clipchamp, monta-se o clipe animado com a voz expressiva do aluno gravada ao microfone. Apresentação à turma com debate sobre como a animação respeita ou desvirtua a intenção original do pintor.",
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
      "Obras de arte no domínio público ou com autorização comprovada para fins educativos.",
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
