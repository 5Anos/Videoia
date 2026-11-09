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
  demoDriveUrl?: string;
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

export interface ClassroomActivity {
  id: string;
  title: string;
  discipline: string;
  targetCycle: string;
  estimatedDuration: string;
  icon: string;
  learningObjectives: string[];
  teacherImplementationSteps: {
    step: number;
    title: string;
    description: string;
    subitems?: string[];
    recommendedTools?: string[];
    teacherTip?: string;
  }[];
  studentDeliverables: string[];
  evaluationCriteria: string[];
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
      caution: "A IA inventa pormenores com frequência. O olhar crítico do professor e dos alunos é indispensável para caçar erros conceituais."
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
      "Transformar sumários ou textos curriculares em vídeos estruturados com imagens pertinentes",
      "Gerar locuções com voz natural em português de Portugal para acompanhar os diapositivos",
      "Criar pequenos vídeos de 1 a 2 minutos (microlearning) para rever conteúdos antes de testes",
      "Gravar explicações uma única vez e reutilizá-las com alunos que faltaram ou precisam de reforço"
    ],
    usefulTools: [
      { name: "InVideo AI", description: "Pode apoiar a criação de um rascunho audiovisual a partir de instruções escritas; o guião, as imagens e a narração devem ser revistos pelo docente." },
      { name: "CapCut (Web, PC e Telemóvel)", description: "Ideal para criar animações explicativas rápidas com estilo didático e legendas automáticas." },
      { name: "Canva para Educação", description: "Perfeito para integrar vídeos e animações em apresentações já habituais na escola." }
    ],
    teacherBenefits: [
      "Pode reduzir algumas tarefas de preparação técnica e edição; a poupança efetiva depende da ferramenta, da complexidade do recurso e do trabalho de revisão necessário.",
      "Permite criar uma videoteca de apoio que os alunos podem consultar ao seu próprio ritmo em casa (sala de aula invertida)",
      "Reduz a ansiedade de quem não se sente confortável a expor a sua própria imagem em vídeo"
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
      "Criar legendas automáticas sincronizadas e com pontuação adequada em poucos segundos",
      "Corrigir rapidamente no texto palavras técnicas ou vocabulário científico mal transcrito",
      "Traduzir o áudio de uma aula para dezenas de línguas, preservando a clareza e entoação",
      "Produzir materiais com suporte bimodal (áudio + texto simultâneo) que apoiam a literacia"
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Editor de vídeo com funcionalidades de edição e recursos de IA. A disponibilidade e a qualidade das ferramentas de reconhecimento de fala e legendagem devem ser confirmadas na versão utilizada." },
      { name: "Microsoft Clipchamp", description: "A Microsoft disponibiliza um plano gratuito na versão pessoal do Clipchamp. As funcionalidades e as condições das contas escolares ou profissionais dependem da licença utilizada." }
    ],
    teacherBenefits: [
      "A legendagem e a disponibilização de alternativas textuais podem apoiar a acessibilidade, mas não significam, por si só, que a atividade cumpra os princípios do DUA.",
      "A tradução automática pode apoiar a compreensão inicial, mas deve ser revista e adaptada ao contexto linguístico e disciplinar.",
      "Apoio direto a alunos com dificuldades de concentração ou processamento auditivo"
    ],
    cognitivePrinciple: "Princípio da Redundância de Mayer: a apresentação simultânea de gráficos, narração e texto impresso idêntico pode, em determinadas condições, aumentar a carga de processamento. Este princípio não justifica retirar legendas necessárias à acessibilidade. É importante distinguir legendas de acessibilidade de texto redundante utilizado como elemento visual.",
    rgpdNote: "A gravação da voz do professor é um dado pessoal. Em ferramentas externas, use ferramentas institucionais da escola sempre que possível."
  },
  {
    id: 3,
    title: "3. Transformar Aulas ou Gravações Longas em Pílulas Curtas",
    shortTitle: "Pílulas e Resumos Curtos",
    description: "Uma gravação extensa pode dificultar a localização de uma explicação específica. A criação de excertos com objetivos claros pode facilitar a consulta e a revisão, desde que os segmentos mantenham o contexto necessário.",
    capabilities: [
      "Localizar automaticamente no vídeo os momentos onde foi colocada uma dúvida ou explicado um conceito",
      "Cortar os silêncios, as pausas de transição e os momentos de espera da aula",
      "Gerar clipes curtos com título automático focados num único problema resolvido",
      "Disponibilizar pequenos 'trailers' didáticos antes de começar um novo capítulo para despertar o interesse"
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Permite cortar partes do vídeo diretamente selecionando o texto transcrito, sem ter de procurar na linha de tempo." },
      { name: "InVideo AI", description: "Resume artigos ou capítulos extensos num vídeo dinâmico de 90 segundos com os tópicos essenciais." }
    ],
    teacherBenefits: [
      "Materiais organizados por tema ou conceito, facilitando a consulta de partes específicas.",
      "Fácil consulta rápida no telemóvel antes de fichas de avaliação",
      "Possibilidade de reutilizar e disponibilizar excertos revistos, adequados aos objetivos de cada atividade."
    ],
    cognitivePrinciple: "Princípio da Segmentação de Mayer: a informação pode ser organizada em partes significativas, permitindo ao aluno controlar o ritmo, pausar e rever. O benefício depende do conteúdo e da forma como os segmentos são estruturados.",
    rgpdNote: "Atenção máxima: se a gravação da aula contiver rostos ou perguntas com nomes de alunos, NUNCA a envie para geradores de IA públicos na Internet."
  },
  {
    id: 4,
    title: "4. Apresentadores Virtuais para Manter a Consistência e Proximidade",
    shortTitle: "Avatares Pedagógicos",
    description: "Um avatar virtual pode parecer artificial à primeira vista, mas quando bem utilizado é uma ferramenta preciosa: serve para dar as boas-vindas a um módulo, colocar uma questão desafiadora ou simular uma entrevista com uma figura histórica.",
    capabilities: [
      "Criar uma personagem virtual que lê as instruções de um trabalho com clareza e paciência infinita",
      "Simular diálogos entre duas figuras (por exemplo, um debate fictício entre dois filósofos ou cientistas)",
      "Manter a mesma voz e identidade visual em todos os materiais de apoio ao estudo ao longo do ano letivo",
      "Gravar comunicações breves para a comunidade escolar ou encarregados de educação sem montar cenários"
    ],
    usefulTools: [
      { name: "Vidnoz AI", description: "Permite colocar dois avatares a conversar na mesma cena, o que é ótimo para debates didáticos." },
      { name: "HeyGen", description: "Os avatares mais realistas do mercado com excelente sincronização labial, ideal para demonstrações." },
      { name: "Canva para Educação", description: "Avatares simples e personagens animadas prontas para usar em apresentações de sala de aula." }
    ],
    teacherBenefits: [
      "Permite atualizar um guião no ano seguinte sem ter de regravar o vídeo do início",
      "Pode introduzir uma personagem ou voz diferente, quando essa opção serve o objetivo pedagógico; não se deve presumir um aumento automático da motivação.",
      "Pode permitir preparar previamente uma mensagem ou explicação narrada, que o professor revê e contextualiza."
    ],
    cognitivePrinciple: "Princípio da Voz e Princípio da Personalização de Mayer: estes princípios abordam, em determinadas condições, a preferência por uma voz humana e por uma linguagem conversacional. Não permitem concluir que qualquer voz sintética prejudica a aprendizagem nem que a utilização de avatares aumenta automaticamente o envolvimento.",
    rgpdNote: "Fotografias, vídeos e gravações de voz podem conter dados pessoais. A utilização de funcionalidades de criação ou clonagem de voz e imagem exige análise dos termos, das autorizações, da finalidade e das orientações institucionais. Não assumir que todos estes dados são automaticamente dados biométricos de categoria especial."
  },
  {
    id: 5,
    title: "5. Edição Intuitiva sem Precisar de Tirar um Curso de Audiovisual",
    shortTitle: "Edição Descomplicada",
    description: "A maioria dos professores não tem tempo para aprender programas profissionais pesados como o Premiere ou o DaVinci. Alguns editores permitem realizar operações a partir de uma transcrição, mas essa funcionalidade depende do produto e do plano. Noutros casos, a edição continua a ser feita na linha temporal.",
    capabilities: [
      "Apagar gaffes, hesitações e palavras repetidas ('humm', 'portanto', 'é assim') apagando o texto",
      "Equilibrar o volume do microfone e retirar o eco da sala de aula com um simples clique",
      "Adicionar transições e títulos limpos sem ter de ajustar manualmente segundo a segundo",
      "Exportar com qualidade em alta definição (1080p) pronto a partilhar com os alunos"
    ],
    usefulTools: [
      { name: "CapCut (Web, PC e Telemóvel)", description: "Editor de vídeo com funcionalidades de edição e recursos de IA." },
      { name: "Microsoft Clipchamp", description: "A Microsoft disponibiliza um plano gratuito na versão pessoal do Clipchamp. As funcionalidades e as condições das contas escolares ou profissionais dependem da licença utilizada." }
    ],
    teacherBenefits: [
      "Algumas tarefas de edição podem tornar-se mais simples, embora o tempo necessário dependa do recurso e da ferramenta.",
      "Acabamento limpo que transmite brio pedagógico e respeito pelo tempo do estudante",
      "Fim do sentimento de frustração técnica que afasta tantos docentes das tecnologias"
    ],
    cognitivePrinciple: "Princípio da Sinalização de Mayer: consiste na utilização de pistas visuais ou verbais que orientam a atenção para a organização e para os elementos relevantes da informação. Cortar hesitações ou ruído pode melhorar a edição, mas não constitui, por si só, a aplicação deste princípio.",
    rgpdNote: "O facto de uma aplicação estar instalada no computador não garante que todas as operações sejam locais. Confirme se os ficheiros são enviados para servidores externos e consulte as regras da escola antes de utilizar gravações ou imagens identificáveis."
  }
];

// 3. BANCO DE PROMPTS PEDAGÓGICOS (Linguagem Humana, Clara e Pronta para Sala de Aula)
export const EDUCATIONAL_PROMPTS: EducationalPrompt[] = [
  {
    id: 1,
    title: "1. Como Funciona o Coração: Circulação Sanguínea",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "2.º e 3.º Ciclo / Secundário",
    category: "Animação Científica 3D",
    recommendedTool: "Kling AI / MiniMax (Hailuo AI) / Luma Dream Machine (Ray 2)",
    visualStyle: "Animação científica esquemática e limpa, corte transversal, luz clara de laboratório, sem excessos de fantasia",
    pedagogicalObjective: "Ajudar os alunos a ver no espaço tridimensional o trajeto do sangue: a contração das aurículas e ventrículos e a distinção entre o sangue com maior e menor concentração de oxigénio nos circuitos pulmonar e sistémico.",
    curriculumCompetence: "Explicar a circulação sistémica e pulmonar no corpo humano e reconhecer a anatomia funcional do coração.",
    promptText: "Cria uma animação médica e educativa em 3D de alta qualidade mostrando um corte frontal do coração humano a bater com ritmo calmo. Mostra o sangue a entrar e a sair das aurículas e dos ventrículos com válvulas a abrir e fechar com precisão. Usa setas subtis em azul para sangue desoxigenado e em vermelho vivo para sangue oxigenado. Estas cores são convenções gráficas e não representam a cor real do sangue. Estilo didático e claro para contexto escolar, ritmo pausado, sem cortes bruscos e com rigor anatómico.",
    ethicalConsideration: "Verifique se a IA não baralha a posição anatómica das artérias pulmonares e da aorta."
  },
  {
    id: 2,
    title: "2. A Dança da Vida: As Fases da Mitose Celular",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "3.º Ciclo / Ensino Secundário",
    category: "Processo Biológico Sequencial",
    recommendedTool: "Luma Dream Machine (Ray 2) / Kling AI / Runway",
    visualStyle: "Animação de microscopia celular com câmara lenta fluida e cromossomas bem destacados",
    pedagogicalObjective: "Visualizar a sequência ordenada da mitose (prófase, metáfase, anáfase e telófase), mostrando aos alunos como o material genético se condensa e separa o material genético durante as fases da mitose.",
    curriculumCompetence: "Compreender a importância da replicação e separação equitativa do ADN na regeneração e crescimento dos seres vivos.",
    promptText: "Cria uma animação científica educativa mostrando a divisão de uma célula animal ao microscópio em câmara lenta contínua. Vemos os cromossomas a condensar-se no núcleo, a alinharem-se no centro da célula na placa equatorial e depois a serem puxados suavemente para os polos opostos pelas fibras do fuso, até à formação de duas células-filhas após a divisão do citoplasma. Tons translúcidos, iluminação suave, movimento didático e sem distorções visuais caóticas.",
    ethicalConsideration: "Confirme se a IA não funde os cromossomas numa massa disforme durante a anáfase."
  },
  {
    id: 3,
    title: "3. Uma Pintura Clássica que Ganha Vida",
    discipline: "Educação Visual / História da Arte",
    gradeLevel: "Todos os Ciclos",
    category: "Transformação Estética e Criativa",
    recommendedTool: "Pika Labs (Pika 2.1) / Runway / Kling AI",
    visualStyle: "Transição cinematográfica suave que respeita as pinceladas e as cores da tela a óleo original",
    pedagogicalObjective: "Trabalhar a sensibilidade estética e a leitura de imagem, permitindo que os alunos imaginem o que estava fora da moldura ou como era o ambiente real na época do pintor.",
    curriculumCompetence: "Analisar composições plásticas, a luz e a cor nas obras de arte, desenvolvendo a capacidade crítica de interpretação visual.",
    promptText: "Começa com um plano fechado de uma pintura a óleo antiga num museu de arte. A câmara aproxima-se devagar da tela e, de repente, as pinceladas de tinta ganham vida suavemente: as copas das árvores pintadas balançam com uma brisa suave, a água do riacho reflete a luz do sol e o céu começa a ter nuvens lentas em movimento. Mantém rigorosamente o estilo, a paleta de cores e a textura do quadro a óleo original sem parecer um desenho animado infantil.",
    ethicalConsideration: "A animação deve ser identificada como interpretação visual ficcional, não como registo histórico. Confirme também os direitos de utilização da reprodução digital da obra."
  },
  {
    id: 4,
    title: "4. Viagem ao Interior da Célula Eucariótica",
    discipline: "Ciências Naturais / Biologia Celular",
    gradeLevel: "3.º Ciclo e Secundário",
    category: "Exploração Microscópica 3D",
    recommendedTool: "Kling AI / MiniMax (Hailuo AI) / Luma Dream Machine (Ray 2)",
    visualStyle: "Expedição espacial microscópica pelo citoplasma celular, luz bioluminescente acolhedora e foco nítido",
    pedagogicalObjective: "Dar aos alunos a sensação de estarem dentro da célula, identificando as mitocôndrias, o retículo endoplasmático e o complexo de Golgi no seu ecossistema vivo.",
    curriculumCompetence: "Distinguir organelos celulares e relacionar a sua forma com a função que desempenham no metabolismo e na produção de energia.",
    promptText: "Cria um vídeo educativo que simula uma viagem calma em câmara lenta pelo interior do citoplasma de uma célula viva. A câmara desliza suavemente mostrando mitocôndrias com as suas cristas iluminadas por dentro, o retículo com pequenos ribossomas e pequenas vesículas a flutuarem em direção à membrana celular. Atmosfera calma de documentário biológico de alta qualidade, nítido e representação esquemática dos organelos, sem afirmar que as respetivas dimensões estão rigorosamente à escala.",
    ethicalConsideration: "Alerte os alunos para o facto de as cores na microscopia real serem normalmente adicionadas digitalmente e valide a imagem gerada com uma fonte científica."
  },
  {
    id: 5,
    title: "5. A Floresta Tropical ao Amanhecer e o Clima",
    discipline: "Geografia / Ciências / Cidadania",
    gradeLevel: "1.º ao 3.º Ciclo",
    category: "Documentário de Natureza",
    recommendedTool: "MiniMax (Hailuo AI) / Luma Dream Machine (Ray 2) / CapCut (Web, PC e Telemóvel)",
    visualStyle: "Documentário de natureza calmo estilo BBC, luz dourada matinal, névoa suave e biodiversidade serena",
    pedagogicalObjective: "Explicar a importância da humidade, da evapotranspiração das copas das árvores e do papel das grandes florestas na regulação do clima do planeta.",
    curriculumCompetence: "Compreender os equilíbrios dos grandes ecossistemas terrestres e os impactos do desmatamento no aquecimento global (ODS 15).",
    promptText: "Vídeo estilo documentário de natureza em alta definição mostrando uma floresta tropical húmida ao nascer do sol. Raios de sol dourados atravessam a bruma matinal entre as copas de árvores gigantes. Gotas de orvalho reluzem em folhas largas verdes, pequenas aves voam ao longe e uma atmosfera de paz transmite a riqueza viva do ecossistema. Movimento de câmara lento e estável descendo suavemente do dossel florestal até ao solo de musgo.",
    ethicalConsideration: "Excelente recurso para motivar debates sobre as alterações climáticas sem criar ansiedade paralisante nas crianças. O vídeo é uma ilustração do ecossistema. A explicação sobre evapotranspiração, biodiversidade e influência das florestas no clima deve ser sustentada em fontes científicas e não inferida apenas a partir das imagens geradas."
  },
  {
    id: 6,
    title: "6. A Força dos Oceanos e a Energia das Ondas",
    discipline: "Físico-Química / Geografia",
    gradeLevel: "2.º e 3.º Ciclo",
    category: "Fenómeno Físico e Natural",
    recommendedTool: "Kling AI / MiniMax (Hailuo AI) / Luma Dream Machine (Ray 2)",
    visualStyle: "Cinematografia realista com física de fluidos bem calculada, água translúcida e céu de tempestade",
    pedagogicalObjective: "Visualizar a transferência da energia do vento para a massa líquida e compreender como a energia das ondas pode ser aproveitada como recurso renovável.",
    curriculumCompetence: "Reconhecer diferentes formas de energia mecânica e cinética e avaliar o potencial das energias limpas no litoral português.",
    promptText: "Vídeo realista mostrando a força das ondas no oceano atlântico junto à costa. Ondas altas com espuma branca quebram com potência controlada contra rochedos, mostrando o movimento circular da massa de água e o potencial de aproveitamento da energia das ondas. Céu com nuvens cinzentas dinâmicas mas sem exageros de ficção científica. Ritmo majestoso e documental, realçando a física dos fluidos e a força renovável dos oceanos.",
    ethicalConsideration: "Pode ser articulado com as caraterísticas da costa portuguesa (por exemplo, as ondas da Nazaré e a energia undimotriz)."
  },
  {
    id: 7,
    title: "7. Vida nos Recifes de Coral e a Conservação Marinha",
    discipline: "Ciências Naturais / Cidadania",
    gradeLevel: "1.º e 2.º Ciclo",
    category: "Biodiversidade Subaquática",
    recommendedTool: "MiniMax (Hailuo AI) / Pika Labs (Pika 2.1) / CapCut (Web, PC e Telemóvel)",
    visualStyle: "Câmara subaquática com água límpida, raios de sol ondulantes e cores harmoniosas",
    pedagogicalObjective: "Observar relações ecológicas nos recifes, incluindo relações de simbiose, e compreender que o branqueamento dos corais pode estar associado a diferentes situações de stress ambiental, incluindo o aumento da temperatura da água.",
    curriculumCompetence: "Reconhecer a importância da biodiversidade marinha e propor atitudes do dia a dia para proteger os oceanos contra o plástico e a poluição.",
    promptText: "Vídeo subaquático luminoso explorando um recife de coral saudável e cheio de vida. A luz do sol atravessa a água cristalina criando padrões luminosos sobre corais em tons de laranja, violeta e rosa. Pequenos peixes tropicais nadam em cardume entre anémonas com movimentos naturais e pacíficos. Estilo educativo tranquilo, câmara lenta que transmite a beleza e a fragilidade do fundo do mar.",
    ethicalConsideration: "Permite confrontar este vídeo com fotos reais de recifes degradados para promover pensamento crítico nos alunos."
  },
  {
    id: 8,
    title: "8. A Savana e as Relações Entre os Seres Vivos",
    discipline: "Estudo do Meio / Ciências Naturais",
    gradeLevel: "1.º e 2.º Ciclo",
    category: "Ecologia e Vida Selvagem",
    recommendedTool: "Kling AI / Luma Dream Machine (Ray 2)",
    visualStyle: "Luz dourada de fim de tarde na planície aberta, poeira suave iluminada e comportamento animal natural",
    pedagogicalObjective: "Observar características do ecossistema da savana, identificar elementos do habitat e descrever o comportamento de um grupo de elefantes no seu ambiente.",
    curriculumCompetence: "Identificar fatores do meio que influenciam as plantas e animais e reconhecer a interdependência entre os seres vivos.",
    promptText: "Vídeo estilo documentário sereno de vida selvagem mostrando uma família de elefantes africanos com crias a caminhar pela savana dourada ao entardecer. Ao fundo vê-se uma acácia típica recortada contra um céu quente alaranjado. A marcha dos animais é lenta e protetora, levantando uma leve poeira dourada pela luz do sol. Sensação de tranquilidade e cooperação familiar no reino animal.",
    ethicalConsideration: "Excelente recurso para crianças mais novas do 1.º ciclo desenvolverem empatia pelos animais."
  },
  {
    id: 9,
    title: "9. O Castelo Medieval Português: Defesa e Quotidiano",
    discipline: "História e Geografia de Portugal (HGP)",
    gradeLevel: "2.º e 3.º Ciclo",
    category: "Reconstituição Histórica",
    recommendedTool: "Kling AI / Luma Dream Machine (Ray 2) / Runway",
    visualStyle: "Cinematografia histórica realista de época, pedra de granito autêntica, luz suave de tarde",
    pedagogicalObjective: "Identificar elementos arquitetónicos de defesa presentes no castelo escolhido, relacionando-os com a sua função e com o contexto histórico medieval.",
    curriculumCompetence: "Caracterizar o território português na época da fundação da nacionalidade e o papel das fortificações medievais na defesa do reino.",
    promptText: "Reconstituição histórica realista em vídeo cinematográfico mostrando um castelo medieval de pedra maciça românica no cimo de um monte verdejante na Península Ibérica no século XII. Vê-se a torre de menagem austera, as muralhas com ameias e seteiras, com um caminho de terra onde habitantes de época caminham com vestes simples de linho e lã. Luz suave de fim de tarde sem aspeto de fantasia medieval ou castelos de contos de fadas, transmitindo sobriedade e rigor da história de Portugal. A representação deve ser adaptada ao monumento selecionado e confrontada com imagens ou documentação histórica; não inventes elementos específicos que não estejam documentados.",
    ethicalConsideration: "Confirmar os elementos arquitetónicos na documentação do castelo escolhido. Não assumir que todos os castelos portugueses tinham fosso, torre de menagem, ameias ou seteiras na mesma configuração."
  },
  {
    id: 10,
    title: "10. Matemática Lúdica: Descomplicar a Multiplicação",
    discipline: "Matemática",
    gradeLevel: "1.º Ciclo (3.º ano)",
    category: "Vídeo Narrado com Personagem Animada",
    recommendedTool: "CapCut (Web, PC e Telemóvel) / InVideo AI",
    visualStyle: "Personagem 3D simpática e calorosa numa sala de aula colorida, com maçãs e caixas luminosas",
    pedagogicalObjective: "Desmistificar a tabuada mostrando visualmente que 3 vezes 4 não é magia nem decoreba, mas sim 3 grupos com 4 objetos cada (adição repetida).",
    curriculumCompetence: "Compreender os sentidos da multiplicação e utilizar estratégias de cálculo mental com segurança no quotidiano.",
    promptText: "Cria um vídeo educativo animado de 2 minutos para explicar a multiplicação a crianças do 3.º ano do ensino básico. Um personagem jovem e simpático em animação 3D mostra 3 caixas e coloca 4 maçãs vermelhas dentro de cada uma. Ele conta devagar: 4 mais 4 mais 4 são 12, ou seja, 3 vezes 4 igual a 12. Linguagem simples, alegre e em português de Portugal correto, terminando com uma pergunta divertida para os alunos responderem na aula.",
    ethicalConsideration: "Garantir sempre a norma do português europeu nos termos matemáticos (parcelas, fatores, produto)."
  },
  {
    id: 11,
    title: "11. A Revolução dos Cravos (25 de Abril de 1974)",
    discipline: "História / Cidadania",
    gradeLevel: "2.º / 3.º Ciclo e Secundário",
    category: "Reconstituição Histórica e Cidadania",
    recommendedTool: "Kling AI / MiniMax (Hailuo AI) / Luma Dream Machine (Ray 2)",
    visualStyle: "Reconstituição visual ilustrativa, estilizada e claramente identificada como gerada por Inteligência Artificial; não imitar filmagem documental autêntica.",
    pedagogicalObjective: "Explorar o contexto histórico do 25 de Abril de 1974, relacionando acontecimentos e símbolos com fontes históricas e distinguindo registos documentais de reconstituições visuais.",
    curriculumCompetence: "Compreender o fim da ditadura, a importância da Constituição de 1976 e a valorização ativa dos direitos humanos e das liberdades cívicas.",
    promptText: "Cria uma reconstituição visual ilustrativa, em estilo gráfico ou cinematográfico assumidamente ficcional, inspirada no 25 de Abril de 1974 em Lisboa. Mostra uma rua de Lisboa, a presença de militares e civis e um cravo vermelho como símbolo associado à Revolução dos Cravos. Não imites a aparência de uma filmagem documental autêntica, não inventes diálogos nem detalhes históricos específicos e não apresentes a cena como registo real. A composição deve ser identificada como reconstituição gerada por Inteligência Artificial e acompanhada, na atividade, por fotografias, testemunhos e fontes históricas devidamente identificados.",
    ethicalConsideration: "Confrontar a reconstituição com fontes documentais; não usar o vídeo gerado como prova histórica."
  }
];

// 4. CATÁLOGO COMPLETO DAS MELHORES FERRAMENTAS DE VÍDEO COM IA (2026)
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
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
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
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
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
      "Animação de imagens estáticas (quadros, esquemas, ilustrações)",
      "Opções de controlo de câmara na geração",
      "Geração de clipes curtos de demonstração"
    ],
    inputTypes: ["Texto Detalhado", "Imagens Estáticas (Quadros, Fotos)"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "O tempo de espera na geração varia conforme a procura no serviço",
      "Instruções em inglês tendem a produzir maior correspondência no modelo",
      "Gera vídeo mudo; sonorização e contexto pedagógico requerem edição adicional"
    ],
    pedagogicalUseCases: [
      "Reconstituição visual ilustrativa de cenários históricos pelo professor",
      "Animação de ilustrações para análise visual em sala de aula",
      "Criação de paisagens naturais em movimento para Geografia e Ciências"
    ],
    externalUrl: "https://klingai.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Modelo generativo com boa reprodução de movimentos e iluminação para ilustrações e reconstituições visuais.",
      whatIsFact: "Gera clipes de movimento fidedignos a partir de descrições textuais detalhadas.",
      whatIsMisleading: "As imagens geradas são representações sintéticas que requerem validação e contextualização pelo docente."
    }
  },
  {
    id: "luma",
    name: "Luma Dream Machine (Ray 2)",
    category: "Câmara Cinemática & Dinâmica de Fluidos",
    badge: "Câmara Cinemática",
    shortDesc: "Ferramenta para criar movimentos de câmara, planos de sobrevoo e transições dinâmicas a partir de texto ou imagens.",
    fullDesc: "A Dream Machine da Luma AI é orientada para a geração de planos com movimento de câmara contínuo, dinâmica de paisagens e fenómenos naturais. A interface funciona através do navegador e permite experimentar sequências curtas para apoio a explicações em vídeo.",
    keyFeatures: [
      "Geração de movimentos de câmara e perspetivas dinâmicas",
      "Função de fotogramas-chave para ligar imagens inicial e final",
      "Simulação de iluminação e planos cinematográficos",
      "Interface direta no navegador"
    ],
    inputTypes: ["Prompt de Texto", "Upload de Imagem Inicial e Final"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Duração curta de cada clipe gerado",
      "Melhor desempenho habitual com instruções formuladas em inglês",
      "Gera apenas o elemento visual sem áudio ou narração"
    ],
    pedagogicalUseCases: [
      "Ilustração de processos geológicos e erosão com movimento de câmara",
      "Aberturas visuais curtas para introduzir conteúdos em sala de aula",
      "Estímulo visual para exercícios de redação e narrativa em Português"
    ],
    externalUrl: "https://lumalabs.ai/dream-machine",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta para geração de movimentos de câmara e transições visuais para recursos didáticos.",
      whatIsFact: "Gera movimentos de câmara fluidos e dinâmicas ambientais a partir de texto e imagens.",
      whatIsMisleading: "O vídeo gerado é mudo e exige contextualização curricular pelo docente."
    }
  },
  {
    id: "minimax",
    name: "MiniMax (Hailuo AI)",
    category: "Expressões Humanas e Movimento Físico",
    badge: "Movimento Físico",
    shortDesc: "Geração de vídeo com IA com capacidade de representação de gestos humanos e elementos do meio físico.",
    fullDesc: "O MiniMax (Hailuo AI) disponibiliza geração de vídeo orientada para a representação de movimentos corporais, animais e elementos naturais. Pode ser explorado pelo docente para preparar pequenos clipes ilustrativos de pessoas em situações históricas ou animais no seu habitat.",
    keyFeatures: [
      "Representação de movimentos corporais e texturas de materiais",
      "Renderização de ambientes iluminados e elementos naturais",
      "Acesso através de plataforma no navegador",
      "Fidelidade às descrições fornecidas"
    ],
    inputTypes: ["Texto", "Upload de Imagem de Referência"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Instruções em inglês tendem a ser interpretadas com maior precisão",
      "Não inclui ferramentas de montagem ou edição de áudio"
    ],
    pedagogicalUseCases: [
      "Ilustração de personagens em ofícios tradicionais ou contextos de época",
      "Visualização de animais no seu ambiente para Estudo do Meio e Ciências",
      "Criação de cenários de reflexão para Cidadania e Filosofia"
    ],
    externalUrl: "https://hailuoai.video/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Modelo generativo orientado à representação de pessoas e animais em contextos ilustrativos.",
      whatIsFact: "Produz sequências visuais curtas com fluidez de movimento a partir de descrições em texto.",
      whatIsMisleading: "A plataforma atualiza as suas condições com frequência e não dispõe de ferramentas de edição completas."
    }
  },
  {
    id: "pika",
    name: "Pika Labs (Pika 2.1)",
    category: "Criatividade, Animação e Efeitos Sonoros",
    badge: "Animação Criativa",
    shortDesc: "Ferramenta para animar ilustrações e gerar pequenos vídeos com efeitos visuais e integração de efeitos sonoros.",
    fullDesc: "O Pika permite gerar pequenas animações a partir de texto, dar movimento a ilustrações estáticas e adicionar efeitos sonoros automáticos à cena. É adequado para projetos criativos e interdisciplinares onde o elemento lúdico e narrativo é valorizado.",
    keyFeatures: [
      "Animação de ilustrações e imagens fornecidas pelo utilizador",
      "Geração de efeitos sonoros ambientais sincronizados com o vídeo",
      "Efeitos visuais de transformação para experimentação artística",
      "Ferramentas de modificação de áreas específicas da imagem"
    ],
    inputTypes: ["Texto", "Imagens Próprias", "Áudios Carregados"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Exportações em versões gratuitas ou de teste podem incluir marca de água",
      "Duração de cada geração é de poucos segundos",
      "Efeitos de distorção lúdica devem ser evitados quando se procura rigor científico"
    ],
    pedagogicalUseCases: [
      "Dar movimento a desenhos elaborados por alunos em Educação Visual",
      "Criar pequenos excertos ilustrativos com som ambiente para exposições",
      "Projetos de animação e narrativa digital interdisciplinar"
    ],
    externalUrl: "https://pika.art/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta de animação e efeitos para projetos criativos e interdisciplinares.",
      whatIsFact: "Permite animar imagens estáticas e gerar efeitos sonoros associados à ação visual.",
      whatIsMisleading: "Efeitos criativos como transformações e deformações devem ser distinguidos de representações factuais."
    }
  },
  {
    id: "capcut",
    name: "CapCut (Web, PC e Telemóvel)",
    category: "Edição Fácil, Legendas e Cortes com IA",
    badge: "Edição e Legendas",
    shortDesc: "Editor de vídeo que disponibiliza ferramentas de corte, tratamento de som, legendagem automática e montagem.",
    fullDesc: "O CapCut (desenvolvido pela ByteDance) disponibiliza versões para computador, aplicação móvel e navegador. Inclui recursos de reconhecimento de voz para legendagem automática em português, ferramentas de corte de pausas e edição de áudio, sendo muito utilizado para a montagem e acabamento de recursos educativos.",
    keyFeatures: [
      "Funcionalidade de legendas automáticas em português com personalização de estilos",
      "Opções de corte de silêncios e hesitações na montagem",
      "Ferramentas de atenuação de ruído de fundo em gravações",
      "Biblioteca de elementos gráficos, transições e efeitos didáticos",
      "Exportação de vídeo em alta definição"
    ],
    inputTypes: ["Gravações do Telemóvel/Webcam", "Texto para Roteiro", "Ficheiros de Áudio"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Certas funcionalidades avançadas ou modelos de efeitos estão identificados como PRO",
      "A disponibilidade e precisão de funções de IA generativa dependem da versão e créditos atribuídos",
      "As condições de tratamento de dados devem ser verificadas de acordo com as regras escolares"
    ],
    pedagogicalUseCases: [
      "Adicionar e rever legendas em videoaulas para apoiar a acessibilidade",
      "Cortar e organizar gravações de apresentações ou entrevistas da turma",
      "Montar o vídeo final de projetos temáticos com elementos visuais e sonoros"
    ],
    externalUrl: "https://www.capcut.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Editor de vídeo com ferramentas de corte, tratamento de áudio e legendagem.",
      whatIsFact: "Disponibiliza legendagem automática em português e ferramentas de edição acessíveis.",
      whatIsMisleading: "A disponibilidade de créditos generativos de IA varia com o plano e não deve ser assumida como ilimitada."
    }
  },
  {
    id: "canva",
    name: "Canva para Educação",
    category: "Design Integrado e Apresentações em Vídeo",
    badge: "Apresentações Escolares",
    shortDesc: "Plataforma de design e multimédia: elegível para docentes e alunos do ensino primário, básico e secundário que cumpram os critérios de validação do fornecedor.",
    fullDesc: "O Canva para Educação disponibiliza recursos para a criação de apresentações, infografias e composição de vídeos para professores e alunos elegíveis do ensino regular (ensino primário, básico e secundário). Permite combinar elementos visuais, diapositivos, gravações e funcionalidades de apoio à montagem de materiais escolares.",
    keyFeatures: [
      "Programa para professores e alunos elegíveis do ensino primário, básico e secundário.",
      "Ambiente de turma para composição de materiais educativos e apresentações.",
      "Gravação do professor sobre os diapositivos da aula.",
      "Biblioteca de elementos gráficos, ilustrações e modelos para uso pedagógico.",
      "Possibilidade de colaboração em projetos de turma."
    ],
    inputTypes: ["Apresentações", "Textos", "Imagens", "Gravações da Câmara"],
    freeTierDetails: "O Canva para Educação é gratuito para docentes e alunos que cumpram os critérios de elegibilidade do programa, aplicável ao ensino primário, básico e secundário. A elegibilidade está sujeita às condições e validação do fornecedor. O programa não está disponível para instituições de ensino superior ou de educação contínua. Esta condição não significa que todas as funcionalidades de IA sejam ilimitadas ou gratuitas.",
    limitations: [
      "A geração de elementos por IA pode estar sujeita a limites e políticas do fornecedor",
      "A elegibilidade depende de processo de validação documental pela instituição"
    ],
    pedagogicalUseCases: [
      "Projetos de grupo onde os alunos criam em conjunto uma apresentação em vídeo sobre um tema",
      "Vídeos de introdução e organização de conteúdos no início do ano letivo",
      "Infografias dinâmicas com dados estatísticos e gráficos animados"
    ],
    externalUrl: "https://www.canva.com/pt_pt/educacao/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Gratuito para Escolas",
      minimumAge: "Consultar os termos do programa Canva para Educação e os critérios de validação escolar.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Útil para apoiar a criação de materiais visuais e apresentações em turmas elegíveis do ensino regular, de acordo com as regras de validação institucional.",
      whatIsFact: "O Canva para Educação disponibiliza acesso gratuito a professores e alunos do ensino primário, básico e secundário elegíveis, mediante validação.",
      whatIsMisleading: "Não está disponível para ensino superior nem garante que todas as funcionalidades de IA sejam ilimitadas ou gratuitas."
    }
  },
  {
    id: "perchance",
    name: "Perchance AI Video",
    category: "Geração de conteúdos com IA — utilização por adultos",
    badge: "Apenas para adultos — 18+",
    shortDesc: "Ferramenta do ecossistema Perchance para exploração de geração de conteúdos por docentes adultos. Os termos do serviço restringem a utilização a pessoas com pelo menos 18 anos; não deve ser recomendada para utilização direta por alunos.",
    fullDesc: "O Perchance disponibiliza diferentes geradores de conteúdos através do navegador. Pode ser considerado pelo docente adulto como recurso de exploração individual, de acordo com os termos do serviço. A ausência de um processo de registo num determinado gerador não permite concluir que o serviço não recolhe dados técnicos ou de utilização. A ferramenta não deve ser apresentada como adequada a qualquer idade nem como solução certificada de conformidade com o RGPD.",
    keyFeatures: [
      "Acesso através do navegador, de acordo com as características de cada gerador.",
      "Exploração de ferramentas de geração de conteúdos por utilizadores adultos.",
      "Funcionalidades e condições específicas dependem do gerador utilizado."
    ],
    inputTypes: ["Prompt de Texto"],
    freeTierDetails: "Consulte os termos do serviço e as condições apresentadas na página do gerador. Esta ficha não garante quotas, limites ou condições comerciais permanentes.",
    limitations: [
      "Os termos do serviço restringem a utilização a pessoas com pelo menos 18 anos.",
      "Não recomendar a utilização direta por alunos.",
      "A política de privacidade descreve recolha automática de informação técnica e de utilização.",
      "Não introduzir informação pessoal, confidencial ou dados de alunos."
    ],
    pedagogicalUseCases: [
      "Exploração individual pelo docente adulto de possibilidades de geração de conteúdos.",
      "Análise crítica das limitações das imagens ou vídeos gerados.",
      "Preparação de um exemplo demonstrativo pelo professor, sem solicitar acesso dos alunos ao serviço."
    ],
    externalUrl: "https://perchance.org/vido",
    requiresEnglishPrompt: true,
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Acesso reservado a adultos (18+)",
      minimumAge: "18+ anos, conforme os termos do fornecedor.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Apenas para exploração individual por docentes adultos que cumpram os termos do serviço. Não recomendar a criação de contas nem a utilização direta por alunos.",
      whatIsFact: "Os termos oficiais indicam que o serviço se destina a utilizadores com pelo menos 18 anos.",
      whatIsMisleading: "Não é correto descrevê-lo como uma ferramenta adequada a qualquer idade, sem recolha de informação ou com risco nulo de privacidade."
    }
  },
  {
    id: "clipchamp",
    name: "Microsoft Clipchamp",
    category: "Edição Simples e Vozes Oficiais de Portugal (PT-PT)",
    badge: "Edição e Locução",
    shortDesc: "Editor de vídeo da Microsoft que disponibiliza ferramentas de corte, legendagem e opções de voz na versão pessoal.",
    fullDesc: "O Microsoft Clipchamp é um editor de vídeo acessível no navegador ou em aplicação que permite realizar montagens, cortes e adicionar locuções ou legendas. A versão pessoal disponibiliza um plano gratuito para exportação até 1080p. As condições de utilização e as funcionalidades integradas em contas escolares Microsoft 365 dependem da subscrição institucional.",
    keyFeatures: [
      "Opções de locução de texto em fala em português europeu com ajuste de parâmetros",
      "Exportação de vídeo em alta definição (até 1080p na versão pessoal gratuita)",
      "Gravador integrado de ecrã e câmara para tutoriais e explicações",
      "Interface acessível para edição e montagem de recursos educativos"
    ],
    inputTypes: ["Vídeos do Computador", "Gravação de Ecrã", "Texto para Locução"],
    freeTierDetails: "A versão pessoal do Clipchamp inclui um plano gratuito que permite exportar vídeos até 1080p. As funcionalidades disponíveis nas contas de trabalho ou educação dependem da licença aplicável. Não extrapolar as condições da conta pessoal para contas escolares ou profissionais.",
    limitations: [
      "Não faz geração de vídeo sintético a partir de descrições abstratas (é um editor e locutor, não um motor generativo)",
      "Certos recursos de arquivo ou elementos visuais dependem de planos comerciais"
    ],
    pedagogicalUseCases: [
      "Gravar e editar locuções em português para acompanhar materiais didáticos",
      "Gravar explicações e tutoriais passo a passo a partir do ecrã do computador",
      "Montagem de recursos audiovisuais com legendas de apoio"
    ],
    externalUrl: "https://clipchamp.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "Consultar os termos do fornecedor e o tipo de conta (pessoal ou escolar).",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Editor útil para montagem de materiais pelo docente e preparação de recursos em vídeo.",
      whatIsFact: "A versão pessoal disponibiliza exportação gratuita até 1080p.",
      whatIsMisleading: "As condições da conta pessoal não se aplicam necessariamente a contas de trabalho ou educação."
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Avatares Fotorrealistas e Dobragem com Sincronização Labial",
    badge: "Avatares e Dobragem",
    shortDesc: "Plataforma de avatares virtuais e dobragem com sincronização labial, útil para demonstração de conceitos tecnológicos.",
    fullDesc: "O HeyGen permite criar avatares virtuais e realizar dobragens com sincronização labial entre vários idiomas. Por envolver processamento de voz e imagem e por ter opções de teste limitadas, é apresentado principalmente como recurso de demonstração conceptual para reflexão pedagógica.",
    keyFeatures: [
      "Avatares virtuais com sincronização labial",
      "Dobragem de vídeo e adaptação de voz em múltiplos idiomas",
      "Criação de avatares a partir de imagem",
      "Reprodução incorporável em páginas web"
    ],
    inputTypes: ["Texto", "Áudio Próprio", "Vídeo Gravado para Traduzir"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Planos comerciais com custos associados à utilização regular",
      "Questões éticas e legais quanto ao envio de imagens ou gravações de pessoas reais",
      "Exige análise atenta dos termos antes de qualquer utilização institucional"
    ],
    pedagogicalUseCases: [
      "Demonstração em ações de formação docente sobre o panorama de avatares virtuais",
      "Comparação de mensagens em diferentes línguas em contextos de reflexão sobre tradução",
      "Debate sobre ética, biometria e transparência de conteúdos sintéticos"
    ],
    externalUrl: "https://www.heygen.com/",
    demoEmbedUrl: "https://app.heygen.com/embeds/3e868218ff734477820be399fb8b1680",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Pago / Trial Rápido",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Demonstração tecnológica de sincronização labial e avatares para exploração conceptual.",
      whatIsFact: "A sincronização labial e a reprodução de avatares funcionam a partir de modelos neurais especializados.",
      whatIsMisleading: "As opções de teste são reduzidas e não devem ser confundidas com uma quota de trabalho continuada para a escola."
    }
  },
  {
    id: "vidnoz",
    name: "Vidnoz AI",
    category: "Diálogos entre Avatares e Conversão de Conteúdos",
    badge: "Diálogos entre Avatares",
    shortDesc: "Plataforma para criação de apresentações com personagens virtuais e simulação de diálogos alternados.",
    fullDesc: "O Vidnoz AI disponibiliza ferramentas para transformar textos e documentos em vídeos narrados por personagens virtuais, permitindo configurar diálogos entre dois avatares na mesma cena para exemplificar entrevistas ou debates conceptuais.",
    keyFeatures: [
      "Diálogo alternado entre personagens virtuais na mesma cena",
      "Criação de vídeos a partir de resumos em texto ou documentos",
      "Galeria de personagens virtuais diversificadas",
      "Editor integrado para inserção de títulos e diapositivos"
    ],
    inputTypes: ["Texto", "Ficheiros PDF", "Links de Artigos"],
    freeTierDetails: "As condições de acesso, os planos, os limites de utilização, os créditos e as opções de exportação podem mudar. Consulte a página oficial do fornecedor antes de planear a utilização. Esta ficha não garante a existência de uma quota gratuita.",
    limitations: [
      "Exportações gratuitas ou de teste podem conter marcas de água",
      "A variedade de vozes disponíveis varia com a versão utilizada",
      "Tempo de processamento na nuvem dependente do serviço"
    ],
    pedagogicalUseCases: [
      "Simulação de diálogos entre figuras históricas preparada pelo professor",
      "Apresentação de conceitos sob a forma de perguntas e respostas",
      "Introdução a tópicos curriculares com apoio visual"
    ],
    externalUrl: "https://pt.vidnoz.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Muito Limitado",
      minimumAge: "Consultar os termos oficiais do fornecedor; idade mínima não confirmada nesta ficha.",
      rgpdRiskLevel: "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha.",
      teacherVerdict: "Ferramenta para criação de apresentações e diálogos entre avatares em vídeo.",
      whatIsFact: "Permite simular diálogos entre duas personagens na mesma cena.",
      whatIsMisleading: "As exportações gratuitas podem incluir marcas de água e limitações de qualidade."
    }
  }
];

// 5. ATIVIDADES DE SALA DE AULA REAIS E TESTÁVEIS (Linguagem Humana)
export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: "entrevista-ia",
    title: "Entrevista a uma Figura da História",
    discipline: "História / Português / Cidadania",
    targetCycle: "2.º e 3.º Ciclo do Ensino Básico",
    estimatedDuration: "2 a 3 blocos letivos de 50 minutos",
    icon: "Users",
    learningObjectives: [
      "Pesquisar em fontes históricas credíveis o papel de uma figura marcante (ex.: Aristides de Sousa Mendes, D. Afonso Henriques, Marie Curie).",
      "Elaborar um guião de 3 perguntas e respostas com rigor factual, distinguindo a verdade histórica de lendas.",
      "Produzir um pequeno vídeo simulando a entrevista e analisar criticamente o resultado com a turma."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Investigação Prévia e Combate a Anacronismos",
        description: "Os alunos organizam-se em pares e escolhem uma figura histórica. Antes de tocarem em qualquer IA, consultam o manual escolar e fontes fidedignas (RTP Ensina, Dicionário Biográfico) para recolher datas, factos e contexto real.",
        recommendedTools: ["Manual Escolar", "RTP Ensina"],
        teacherTip: "Alerte os alunos para o risco de anacronismos: figuras do século XII não usavam relógios nem falavam como no século XXI."
      },
      {
        step: 2,
        title: "Redação do Guião da Entrevista a Duas Vozes",
        description: "Os alunos escrevem as 3 perguntas do jornalista e as 3 respostas fundamentadas da figura histórica. O professor valida o texto no papel ou num documento partilhado antes de avançar para o vídeo. As respostas devem ser identificadas como dramatização baseada em informação histórica. Não devem ser apresentadas como citações literais da figura escolhida, salvo quando exista uma fonte documental que comprove a citação.",
        subitems: [
          "Pergunta 1: O contexto da época e a principal escolha que a figura teve de fazer.",
          "Pergunta 2: O maior desafio ou oposição que enfrentou na sua vida.",
          "Pergunta 3: O legado que deixou para a sociedade atual."
        ]
      },
      {
        step: 3,
        title: "Geração da Figura e Narração do Diálogo",
        description: "O professor pode preparar uma imagem ilustrativa recorrendo a uma fonte com direitos de utilização adequados ou a uma ferramenta que possa utilizar nos termos aplicáveis à sua conta adulta. Os alunos montam o diálogo com uma ferramenta de edição aprovada pela escola. Não lhes deve ser solicitado que acedam ao Perchance, cujos termos restringem a utilização a maiores de 18 anos.",
        recommendedTools: ["Microsoft Clipchamp", "Canva para Educação"]
      },
      {
        step: 4,
        title: "Apresentação e Caça aos Erros na Aula",
        description: "Cada par exibe o seu vídeo de 90 segundos à turma. Os colegas têm como missão detetar se a IA inventou algum detalhe incorreto (roupas erradas, objetos fora de época) e debatem o rigor histórico.",
        teacherTip: "Transforme a verificação de factos num jogo: quem apanhar uma 'alucinação' da IA ganha um ponto para o grupo."
      }
    ],
    studentDeliverables: [
      "Guião escrito com as 3 perguntas e fontes consultadas",
      "Vídeo curto de aproximadamente 90 segundos com a simulação da entrevista.",
      "Ficha de reflexão de 1 parágrafo: 'O que a IA acertou e o que a IA inventou?'"
    ],
    evaluationCriteria: [
      "Rigor histórico dos factos apresentados (40%)",
      "Clareza da linguagem e correção da língua portuguesa (30%)",
      "Sentido crítico na avaliação dos limites da imagem gerada pela IA (20%)",
      "Cooperação e respeito no trabalho em equipa (10%)"
    ],
    pedagogicalFramework: "Taxonomia de Anderson & Krathwohl (Níveis 'Analisar' e 'Criar') + Desenho Universal para a Aprendizagem.",
    rgpdSafetyChecklist: [
      "Não solicitar que os alunos criem contas em ferramentas externas sem verificar previamente os termos, os requisitos de idade e as orientações da escola.",
      "Nenhum rosto ou voz real de aluno é carregado para a Internet.",
      "As pesquisas são feitas sob a supervisão do professor."
    ]
  },
  {
    id: "micro-documentario",
    title: "Micro-Documentário: Explicar a Ciência em 60 Segundos",
    discipline: "Ciências Naturais / Físico-Química / Biologia",
    targetCycle: "3.º Ciclo e Ensino Secundário",
    estimatedDuration: "2 semanas (trabalho de aula e de casa)",
    icon: "HeartPulse",
    learningObjectives: [
      "Descodificar um fenómeno científico complexo (ex.: a mitose, a energia das ondas, a circulação sanguínea).",
      "Escrever uma locução concisa em que cada palavra conta, aplicando o Princípio da Modalidade de Mayer.",
      "Construir um micro-documentário dinâmico pronto a partilhar com a comunidade escolar."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Escolha do Fenómeno e Mapeamento dos Conceitos",
        description: "Os alunos selecionam um processo científico em que o movimento é essencial para a compreensão. Definem os 3 conceitos fundamentais que o público leigo tem de reter.",
        recommendedTools: ["InVideo AI", "CapCut (Web, PC e Telemóvel)", "Kling AI"]
      },
      {
        step: 2,
        title: "Desenho da Narrativa Visual (Storyboard)",
        description: "Em três quadrículas de papel, os alunos desenham o que se vai ver e o que a voz vai dizer em cada um dos três momentos: Introdução (0–15 s), O Processo (15–40 s) e O Impacto (40–60 s).",
        teacherTip: "Evite texto corrido que repita integralmente a narração. Mantenha as legendas necessárias à acessibilidade e utilize no ecrã palavras-chave ou dados essenciais."
      },
      {
        step: 3,
        title: "Montagem e Legenda Acessível",
        description: "Com o CapCut ou Clipchamp, juntam os clipes de animação, gravam a locução com voz calma e ativam as legendas automáticas em português.",
        recommendedTools: ["CapCut (Web, PC e Telemóvel)", "Microsoft Clipchamp"]
      },
      {
        step: 4,
        title: "Partilha na Videoteca da Turma",
        description: "Os melhores micro-documentários são arquivados no Teams ou Classroom da disciplina para servirem de material de revisão para os restantes colegas antes dos exames.",
        teacherTip: "Verifique o rigor dos termos científicos antes de publicar para toda a turma."
      }
    ],
    studentDeliverables: [
      "Storyboard em papel ou digital com os três momentos do vídeo.",
      "Ficheiro de vídeo MP4 com aproximadamente 60 segundos e legendas revistas.",
      "Glossário com a definição científica de 3 termos técnicos utilizados"
    ],
    evaluationCriteria: [
      "Correção científica dos conceitos explicados (45%)",
      "Capacidade de síntese e clareza da locução (30%)",
      "Qualidade da montagem e respeito pelo ritmo de visualização (15%)",
      "Cumprimento dos prazos e acessibilidade das legendas (10%)"
    ],
    pedagogicalFramework: "Princípios da Segmentação e Modalidade de Richard Mayer (2020).",
    rgpdSafetyChecklist: [
      "Utilização de ferramentas sem partilha de dados biométricos.",
      "Uso de música de arquivo livre de direitos comerciais.",
      "Termos de aceitação do regulamento interno da escola cumpridos."
    ]
  },
  {
    id: "noticiario-critico",
    title: "O Noticiário de Ciência: Separar Facto de Ficção",
    discipline: "Cidadania e Desenvolvimento / Português / Geografia",
    targetCycle: "3.º Ciclo e Secundário",
    estimatedDuration: "2 aulas de 50 minutos",
    icon: "Newspaper",
    learningObjectives: [
      "Desenvolver literacia mediática: aprender a identificar como a IA pode ser usada para desinformar ou simular notícias falsas.",
      "Recriar uma notícia séria sobre alterações climáticas ou biodiversidade com base em relatórios científicos reais (IPCC, ICNF).",
      "Desenvolver procedimentos de verificação da origem, data, contexto e fontes de um conteúdo audiovisual; compreender como os conteúdos sintéticos podem induzir em erro e como os identificar de forma transparente."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Análise de Exemplos Reais de Desinformação com IA",
        description: "Os alunos analisam a origem do conteúdo, o contexto da publicação, a data, a fonte original e a existência de confirmação em fontes independentes. A aparência visual, por si só, não permite determinar com fiabilidade se um vídeo foi gerado ou manipulado por Inteligência Artificial.",
        recommendedTools: ["InVideo AI", "Canva para Educação"]
      },
      {
        step: 2,
        title: "Elaboração de uma Peça Jornalística Rigorosa",
        description: "A turma simula a redação de um telejornal de ciência. Escrevem uma notícia baseada num relatório ambiental verdadeiro, indicando com clareza quem é a fonte científica.",
        subitems: [
          "O facto noticioso real (ex.: seca no Alentejo, proteção do lince ibérico).",
          "O dado estatístico comprovado.",
          "Indicação dos elementos visuais gerados ou alterados por IA, quando existam, distinguindo imagens ilustrativas de registos documentais."
        ]
      },
      {
        step: 3,
        title: "Produção e Rotulagem Ética",
        description: "Os alunos identificam de forma clara e adequada ao contexto os elementos sintéticos ou manipulados utilizados na peça. Quando o conteúdo constitua um deepfake ou se enquadre noutra obrigação de divulgação prevista no artigo 50.º, o professor deve verificar a aplicação da regra correspondente. Não se deve assumir que todos os vídeos gerados por IA necessitam de uma marca visual permanente.",
        recommendedTools: ["Canva para Educação", "CapCut (Web, PC e Telemóvel)"]
      }
    ],
    studentDeliverables: [
      "Texto da notícia com citação explícita do relatório científico fonte",
      "Vídeo da peça noticiosa com identificação clara dos elementos gerados ou manipulados por IA, quando existam, e com as fontes indicadas.",
      "Checklist de verificação de factos assinada pelo grupo"
    ],
    evaluationCriteria: [
      "Fidelidade da notícia à fonte científica real (40%)",
      "Transparência na identificação dos elementos sintéticos e distinção entre ilustração e registo documental (30%).",
      "Clareza da comunicação e dicção jornalística (20%)",
      "Espírito crítico na discussão coletiva (10%)"
    ],
    pedagogicalFramework: "Referencial de Educação para os Media (DGE) + Regulamento (UE) 2024/1689 (AI Act).",
    rgpdSafetyChecklist: [
      "Rotulagem clara de que as imagens são criadas por computador.",
      "Proibição de criar notícias alarmistas ou boatos locais de pânico.",
      "Proteção da identidade dos alunos na publicação."
    ]
  },
  {
    id: "quadros-animados",
    title: "Vozes do Património: O Quadro que Conta a Sua História",
    discipline: "Educação Visual / História / Literatura",
    targetCycle: "1.º ao 3.º Ciclo",
    estimatedDuration: "3 aulas práticas",
    icon: "Boxes",
    learningObjectives: [
      "Observar com detalhe uma obra de arte do património nacional ou universal.",
      "Investigar o contexto histórico e cultural da obra e analisar os seus elementos visuais, distinguindo informação documentada de interpretações possíveis.",
      "Dar um movimento subtil à pintura e criar uma narrativa na primeira pessoa com a perspetiva de quem viveu a cena."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Visita Virtual e Escolha da Obra de Arte",
        description: "Através do Google Arts & Culture ou do Museu Nacional de Arte Antiga, os alunos escolhem uma pintura histórica (ex.: Painéis de São Vicente, O Grito, Fado de José Malhoa).",
        recommendedTools: ["Pika Labs (Pika 2.1)", "Kling AI", "Runway"]
      },
      {
        step: 2,
        title: "A Voz da Personagem da Tela",
        description: "Os alunos imaginam que são uma das figuras da pintura e escrevem um monólogo curto de cerca de 40 segundos. O texto deve ser identificado como criação ficcional inspirada na obra e não como testemunho real da personagem ou declaração documentada do artista.",
        teacherTip: "Excelente oportunidade para trabalhar a empatia histórica e a expressão literária em Português."
      },
      {
        step: 3,
        title: "Animação Respeitosa e Locução",
        description: "Com o Pika ou o Kling, animam apenas o movimento do vento ou da respiração na pintura. No Clipchamp, gravam o monólogo com a sua voz ou com uma voz expressiva em português.",
        recommendedTools: ["Pika Labs (Pika 2.1)", "Microsoft Clipchamp"]
      }
    ],
    studentDeliverables: [
      "Ficha técnica da obra (autor, data, técnica plástica e museu onde se encontra)",
      "Monólogo literário escrito na primeira pessoa",
      "Vídeo final de 40 segundos que une a pintura viva à narração sentida"
    ],
    evaluationCriteria: [
      "Profundidade e sensibilidade da interpretação artística (40%)",
      "Qualidade e respeito pelo estilo plástico da pintura original (30%)",
      "Expressividade e dicção na narração oral (20%)",
      "Autonomia e empenho na atividade de atelier (10%)"
    ],
    pedagogicalFramework: "Plano Nacional das Artes (PNA) + Taxonomia de Anderson & Krathwohl (Nível 'Criar').",
    rgpdSafetyChecklist: [
      "Obras de arte no domínio público ou com autorização para fins educativos.",
      "Processamento seguro sem exposição de dados individuais dos alunos."
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
    relevanceToEducation: "Obra de referência sobre a aprendizagem multimédia e os princípios de conceção de materiais que combinam palavras e imagens.",
    criticalAnalysis: "A obra apresenta princípios para conceber materiais multimédia considerando a seleção, a organização e a integração de palavras e imagens. Estes princípios orientam decisões de conceção, mas não são proibições absolutas. A necessidade de legendas para acessibilidade e de texto de apoio deve ser considerada separadamente da redundância de texto decorativo ou idêntico à narração."
  },
  {
    citation: "OECD. (2023). Digital Education Outlook 2023: Towards an effective digital education ecosystem. OECD Publishing. https://doi.org/10.1787/b41d667e-en",
    author: "OCDE",
    year: 2023,
    title: "Digital Education Outlook 2023: Towards an Effective Digital Education Ecosystem",
    source: "OECD Publishing",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Relatório oficial da OCDE que define as competências digitais dos professores e a necessidade de equidade no acesso aos recursos tecnológicos.",
    criticalAnalysis: "Adverte para o perigo de aprofundamento das desigualdades educativas se as escolas dependerem de ferramentas pagas que as famílias mais desfavorecidas não podem suportar."
  },
  {
    citation: "Regulamento (UE) 2024/1689 do Parlamento Europeu e do Conselho, de 13 de junho de 2024, que cria regras harmonizadas em matéria de inteligência artificial (Regulamento da Inteligência Artificial - EU AI Act). Jornal Oficial da União Europeia, L 2024/1689.",
    author: "União Europeia",
    year: 2024,
    title: "Regulamento da Inteligência Artificial (EU AI Act - Regulamento 2024/1689)",
    source: "Jornal Oficial da União Europeia",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "O primeiro quadro legal vinculativo do mundo sobre inteligência artificial, com impacto direto nas escolas europeias.",
    criticalAnalysis: "O artigo 50.º do Regulamento (UE) 2024/1689 distingue as obrigações dos fornecedores e dos responsáveis pela utilização de determinados sistemas e conteúdos de Inteligência Artificial. O n.º 2 estabelece obrigações de marcação técnica dos resultados sintéticos para os fornecedores dos sistemas abrangidos. O n.º 4 prevê, nas condições aí estabelecidas, a divulgação de conteúdos que constituam deepfakes e de determinados textos gerados ou manipulados por IA e publicados sobre assuntos de interesse público sem revisão ou controlo editorial humano. A divulgação dos deepfakes deve ser clara e percetível. Para conteúdos manifestamente artísticos, criativos, satíricos ou ficcionais, a informação deve ser apresentada de forma adequada, sem prejudicar a fruição da obra. Não se trata de uma obrigação universal de inserir uma marca visual permanente em todos os vídeos gerados por IA."
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
    citation: "UNESCO. (2023). Guidance for generative AI in education and research. UNESCO Publishing. https://doi.org/10.54675/CSWS2836",
    author: "UNESCO",
    year: 2023,
    title: "Guidance for Generative AI in Education and Research",
    source: "UNESCO Publishing",
    category: "Políticas & Ética de IA",
    relevanceToEducation: "Linhas orientadoras mundiais da UNESCO para proteger a infância e os dados escolares perante a vaga de ferramentas generativas comerciais.",
    criticalAnalysis: "O documento apresenta orientações e recomendações para a utilização da Inteligência Artificial generativa na educação e na investigação, abordando questões relacionadas com a adequação etária, a proteção de dados, a supervisão humana e a governação. Qualquer referência à idade de 13 anos deve ser identificada como recomendação do documento, e não como idade mínima geral estabelecida pela legislação portuguesa ou pelos termos de todos os fornecedores."
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
