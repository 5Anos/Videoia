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
    freeStatus: '100% Gratuito (Sem Conta)' | 'Gratuito para Escolas' | 'Freemium Útil' | 'Freemium Muito Limitado' | 'Pago / Trial Rápido';
    minimumAge: string;
    rgpdRiskLevel: 'Baixo (Sem dados de alunos)' | 'Médio (Conta necessária)' | 'Alto (Biometria / Voz / Rosto)';
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
      description: "Ferramentas práticas que eliminam as horas perdidas em softwares complicados de edição. Permitem colocar legendas automáticas em português, cortar pausas desnecessárias e adaptar materiais a alunos com necessidades específicas.",
      highlights: [
        "Gerar legendas automáticas precisas em português europeu com 1 clique",
        "Traduzir explicações para a língua materna de alunos migrantes que estão a aprender português",
        "Limpar o áudio gravado no telemóvel para que a explicação soe com voz límpida e profissional",
        "Editar o vídeo apagando simplesmente as palavras erradas no texto transcrito"
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
      { name: "InVideo AI", description: "Escreve uma frase e a ferramenta cria o vídeo completo: guião, narração, imagens e legendas." },
      { name: "CapCut AI", description: "Ideal para criar animações explicativas rápidas com estilo didático e legendas automáticas." },
      { name: "Canva Educação", description: "Perfeito para integrar vídeos e animações em apresentações já habituais na escola." }
    ],
    teacherBenefits: [
      "Liberta até 80% do tempo habitual de preparação técnica de gravações",
      "Permite criar uma videoteca de apoio que os alunos podem consultar ao seu próprio ritmo em casa (sala de aula invertida)",
      "Reduz a ansiedade de quem não se sente confortável a expor a sua própria imagem em vídeo"
    ],
    cognitivePrinciple: "Princípio da Modalidade de Mayer: os alunos compreendem melhor quando combinamos gráficos relevantes com uma explicação falada, em vez de sobrecarregar o ecrã com blocos de texto denso.",
    rgpdNote: "Nunca introduza dados pessoais de alunos (nomes, notas ou situações individuais) nos guiões que envia para ferramentas na nuvem."
  },
  {
    id: 2,
    title: "2. Legendar e Tornar os Materiais Acessíveis a Todos (DUA)",
    shortTitle: "Inclusão e Acessibilidade",
    description: "Numa turma típica de 25 ou 28 alunos, temos alunos que leem devagar, alunos com défice auditivo e, cada vez mais em Portugal, alunos recém-chegados de outros países que ainda não dominam a nossa língua. A IA faz a ponte para que ninguém fique para trás.",
    capabilities: [
      "Criar legendas automáticas sincronizadas e com pontuação adequada em poucos segundos",
      "Corrigir rapidamente no texto palavras técnicas ou vocabulário científico mal transcrito",
      "Traduzir o áudio de uma aula para dezenas de línguas, preservando a clareza e entoação",
      "Produzir materiais com suporte bimodal (áudio + texto simultâneo) que apoiam a literacia"
    ],
    usefulTools: [
      { name: "CapCut (Desktop / Web)", description: "Reconhecimento de fala em português muito fiável e com estilos de legenda legíveis e limpos." },
      { name: "Microsoft Clipchamp", description: "Integrado no Windows, 100% gratuito e com excelentes vozes neurais em português europeu." },
      { name: "Veed.io", description: "Excelente para legendagem rápida no navegador e tradução multilingue." }
    ],
    teacherBenefits: [
      "Cumprimento prático do Desenho Universal para a Aprendizagem (DUA) sem passar noites a transcrever",
      "Acolhimento acolhedor e imediato de alunos estrangeiros com materiais traduzidos",
      "Apoio direto a alunos com dificuldades de concentração ou processamento auditivo"
    ],
    cognitivePrinciple: "Princípio da Redundância de Mayer: as legendas devem servir para inclusão e acessibilidade; evite forçar os alunos ouvintes a lerem um ecrã cheio de texto idêntico ao que a voz diz, pois isso cansa a mente.",
    rgpdNote: "A gravação da voz do professor é um dado pessoal. Em ferramentas externas, use ferramentas institucionais da escola sempre que possível."
  },
  {
    id: 3,
    title: "3. Transformar Aulas ou Gravações Longas em Pílulas Curtas",
    shortTitle: "Pílulas e Resumos Curtos",
    description: "Colocar uma gravação de 50 minutos no Teams ou no Classroom é garantir que quase nenhum aluno a vai ver até ao fim. As ferramentas inteligentes ajudam a fatiar a gravação nos 3 minutos essenciais que explicam a regra ou o exercício-chave.",
    capabilities: [
      "Localizar automaticamente no vídeo os momentos onde foi colocada uma dúvida ou explicado um conceito",
      "Cortar os silêncios, as pausas de transição e os momentos de espera da aula",
      "Gerar clipes curtos com título automático focados num único problema resolvido",
      "Disponibilizar pequenos 'trailers' didáticos antes de começar um novo capítulo para despertar o interesse"
    ],
    usefulTools: [
      { name: "CapCut", description: "Permite cortar partes do vídeo diretamente selecionando o texto transcrito, sem ter de procurar na linha de tempo." },
      { name: "InVideo AI", description: "Resume artigos ou capítulos extensos num vídeo dinâmico de 90 segundos com os tópicos essenciais." }
    ],
    teacherBenefits: [
      "Materiais adaptados ao tempo de atenção real dos jovens de hoje",
      "Fácil consulta rápida no telemóvel antes de fichas de avaliação",
      "Menor peso nos servidores da escola e maior taxa de visualização efetiva"
    ],
    cognitivePrinciple: "Princípio da Segmentação de Mayer: as pessoas aprendem com muito mais eficácia quando a informação é dividida em pequenas partes que o aluno pode pausar, rever e controlar ao seu ritmo.",
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
      { name: "Canva Educação", description: "Avatares simples e personagens animadas prontas para usar em apresentações de sala de aula." }
    ],
    teacherBenefits: [
      "Permite atualizar um guião no ano seguinte sem ter de regravar o vídeo do início",
      "Cria um elemento lúdico e inovador que capta o olhar dos alunos nos primeiros minutos da aula",
      "Garante uma comunicação fluida mesmo em dias em que o docente está sem voz ou cansado"
    ],
    cognitivePrinciple: "Princípio da Voz e Personificação: o tom de voz deve ser empático, pausado e com entoação humana; vozes robóticas monocórdicas aumentam o cansaço mental e provocam distração rápida.",
    rgpdNote: "Criar 'clones' com o seu próprio rosto e voz envolve dados biométricos sensíveis. Prefira sempre avatares fictícios genéricos para fins didáticos."
  },
  {
    id: 5,
    title: "5. Edição Intuitiva sem Precisar de Tirar um Curso de Audiovisual",
    shortTitle: "Edição Descomplicada",
    description: "A maioria dos professores não tem tempo para aprender programas profissionais pesados como o Premiere ou o DaVinci. A edição com IA trata o vídeo como se fosse um documento do Word: para cortar uma frase errada, basta apagá-la no texto da transcrição.",
    capabilities: [
      "Apagar gaffes, hesitações e palavras repetidas ('humm', 'portanto', 'é assim') apagando o texto",
      "Equilibrar o volume do microfone e retirar o eco da sala de aula com um simples clique",
      "Adicionar transições e títulos limpos sem ter de ajustar manualmente segundo a segundo",
      "Exportar com qualidade em alta definição (1080p) pronto a partilhar com os alunos"
    ],
    usefulTools: [
      { name: "CapCut Desktop", description: "Gratuito, leve no computador e com ferramentas de corte de silêncio e melhoramento de voz soberbas." },
      { name: "Microsoft Clipchamp", description: "Simples, fiável, não coloca marcas de água e não exige instalações complicadas no Windows." }
    ],
    teacherBenefits: [
      "Autonomia real: o professor faz pequenos ajustes aos seus vídeos em 10 minutos nos intervalos",
      "Acabamento limpo que transmite brio pedagógico e respeito pelo tempo do estudante",
      "Fim do sentimento de frustração técnica que afasta tantos docentes das tecnologias"
    ],
    cognitivePrinciple: "Princípio da Sinalização de Mayer: retirar hesitações, ruídos de fundo e elementos distratores orienta a atenção do aluno diretamente para a ideia essencial da aula.",
    rgpdNote: "Editores com processamento local no seu próprio computador (como o Clipchamp ou o CapCut local) são mais seguros do que carregar ficheiros para servidores desconhecidos."
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
    recommendedTool: "Kling AI / Minimax / Luma Dream Machine",
    visualStyle: "Animação científica esquemática e limpa, corte transversal, luz clara de laboratório, sem excessos de fantasia",
    pedagogicalObjective: "Ajudar os alunos a ver no espaço tridimensional o trajeto do sangue: a contração das aurículas e ventrículos e a separação entre o sangue com oxigénio e o sangue com dióxido de carbono.",
    curriculumCompetence: "Explicar a circulação sistémica e pulmonar no corpo humano e reconhecer a anatomia funcional do coração.",
    promptText: "Cria uma animação médica e educativa em 3D de alta qualidade mostrando um corte frontal do coração humano a bater com ritmo calmo. Mostra o sangue a entrar e a sair das aurículas e dos ventrículos com válvulas a abrir e fechar com precisão. Usa setas subtis em azul para sangue desoxigenado e em vermelho vivo para sangue oxigenado. Estilo didático e claro para contexto escolar, ritmo pausado, sem cortes bruscos e com rigor anatómico.",
    ethicalConsideration: "Verifique se a IA não baralha a posição anatómica das artérias pulmonares e da aorta."
  },
  {
    id: 2,
    title: "2. A Dança da Vida: As Fases da Mitose Celular",
    discipline: "Ciências Naturais / Biologia",
    gradeLevel: "3.º Ciclo / Ensino Secundário",
    category: "Processo Biológico Sequencial",
    recommendedTool: "Luma Dream Machine / Kling AI / Runway",
    visualStyle: "Animação de microscopia celular com câmara lenta fluida e cromossomas bem destacados",
    pedagogicalObjective: "Visualizar a sequência ordenada da mitose (prófase, metáfase, anáfase e telófase), mostrando aos alunos como o material genético se condensa e divide com perfeição.",
    curriculumCompetence: "Compreender a importância da replicação e separação equitativa do ADN na regeneração e crescimento dos seres vivos.",
    promptText: "Cria uma animação científica educativa mostrando a divisão de uma célula animal ao microscópio em câmara lenta contínua. Vemos os cromossomas a condensar-se no núcleo, a alinharem-se no centro da célula na placa equatorial e depois a serem puxados suavemente para os polos opostos pelas fibras do fuso, até a célula se dividir em duas novas células gémeas perfeitas. Tons translúcidos, iluminação suave, movimento didático e sem distorções visuais caóticas.",
    ethicalConsideration: "Confirme se a IA não funde os cromossomas numa massa disforme durante a anáfase."
  },
  {
    id: 3,
    title: "3. Uma Pintura Clássica que Ganha Vida",
    discipline: "Educação Visual / História da Arte",
    gradeLevel: "Todos os Ciclos",
    category: "Transformação Estética e Criativa",
    recommendedTool: "Pika Labs / Runway / Kling AI",
    visualStyle: "Transição cinematográfica suave que respeita as pinceladas e as cores da tela a óleo original",
    pedagogicalObjective: "Trabalhar a sensibilidade estética e a leitura de imagem, permitindo que os alunos imaginem o que estava fora da moldura ou como era o ambiente real na época do pintor.",
    curriculumCompetence: "Analisar composições plásticas, a luz e a cor nas obras de arte, desenvolvendo a capacidade crítica de interpretação visual.",
    promptText: "Começa com um plano fechado de uma pintura a óleo antiga num museu de arte. A câmara aproxima-se devagar da tela e, de repente, as pinceladas de tinta ganham vida suavemente: as copas das árvores pintadas balançam com uma brisa suave, a água do riacho reflete a luz do sol e o céu começa a ter nuvens lentas em movimento. Mantém rigorosamente o estilo, a paleta de cores e a textura do quadro a óleo original sem parecer um desenho animado infantil.",
    ethicalConsideration: "Ótimo ponto de partida para debater com a turma os direitos de autor e o treino de modelos com obras de artistas humanos."
  },
  {
    id: 4,
    title: "4. Viagem ao Interior da Célula Eucariótica",
    discipline: "Ciências Naturais / Biologia Celular",
    gradeLevel: "3.º Ciclo e Secundário",
    category: "Exploração Microscópica 3D",
    recommendedTool: "Kling AI / Minimax / Luma Ray 2",
    visualStyle: "Expedição espacial microscópica pelo citoplasma celular, luz bioluminescente acolhedora e foco nítido",
    pedagogicalObjective: "Dar aos alunos a sensação de estarem dentro da célula, identificando as mitocôndrias, o retículo endoplasmático e o complexo de Golgi no seu ecossistema vivo.",
    curriculumCompetence: "Distinguir organelos celulares e relacionar a sua forma com a função que desempenham no metabolismo e na produção de energia.",
    promptText: "Cria um vídeo educativo que simula uma viagem calma em câmara lenta pelo interior do citoplasma de uma célula viva. A câmara desliza suavemente mostrando mitocôndrias com as suas cristas iluminadas por dentro, o retículo com pequenos ribossomas e pequenas vesículas a flutuarem em direção à membrana celular. Atmosfera calma de documentário biológico de alta qualidade, nítido e pedagogicamente fiel às proporções dos organelos.",
    ethicalConsideration: "Alerte os alunos para o facto de as cores na microscopia real serem normalmente adicionadas digitalmente."
  },
  {
    id: 5,
    title: "5. A Floresta Tropical ao Amanhecer e o Clima",
    discipline: "Geografia / Ciências / Cidadania",
    gradeLevel: "1.º ao 3.º Ciclo",
    category: "Documentário de Natureza",
    recommendedTool: "Minimax / Luma Dream Machine / CapCut",
    visualStyle: "Documentário de natureza calmo estilo BBC, luz dourada matinal, névoa suave e biodiversidade serena",
    pedagogicalObjective: "Explicar a importância da humidade, da evapotranspiração das copas das árvores e do papel das grandes florestas na regulação do clima do planeta.",
    curriculumCompetence: "Compreender os equilíbrios dos grandes ecossistemas terrestres e os impactos do desmatamento no aquecimento global (ODS 15).",
    promptText: "Vídeo estilo documentário de natureza em alta definição mostrando uma floresta tropical húmida ao nascer do sol. Raios de sol dourados atravessam a bruma matinal entre as copas de árvores gigantes. Gotas de orvalho reluzem em folhas largas verdes, pequenas aves voam ao longe e uma atmosfera de paz transmite a riqueza viva do ecossistema. Movimento de câmara lento e estável descendo suavemente do dossel florestal até ao solo de musgo.",
    ethicalConsideration: "Excelente recurso para motivar debates sobre as alterações climáticas sem criar ansiedade paralisante nas crianças."
  },
  {
    id: 6,
    title: "6. A Força dos Oceanos e a Energia das Ondas",
    discipline: "Físico-Química / Geografia",
    gradeLevel: "2.º e 3.º Ciclo",
    category: "Fenómeno Físico e Natural",
    recommendedTool: "Kling AI / Minimax / Luma Ray 2",
    visualStyle: "Cinematografia realista com física de fluidos bem calculada, água translúcida e céu de tempestade",
    pedagogicalObjective: "Visualizar a transferência da energia do vento para a massa líquida e compreender como a energia das ondas pode ser aproveitada como recurso renovável.",
    curriculumCompetence: "Reconhecer diferentes formas de energia mecânica e cinética e avaliar o potencial das energias limpas no litoral português.",
    promptText: "Vídeo realista mostrando a força das ondas no oceano atlântico junto à costa. Ondas altas com espuma branca quebram com potência controlada contra rochedos, mostrando o movimento circular da massa de água e a energia das marés. Céu com nuvens cinzentas dinâmicas mas sem exageros de ficção científica. Ritmo majestoso e documental, realçando a física dos fluidos e a força renovável dos oceanos.",
    ethicalConsideration: "Pode ser articulado com as caraterísticas da costa portuguesa (por exemplo, as ondas da Nazaré e a energia undimotriz)."
  },
  {
    id: 7,
    title: "7. Vida nos Recifes de Coral e a Conservação Marinha",
    discipline: "Ciências Naturais / Cidadania",
    gradeLevel: "1.º e 2.º Ciclo",
    category: "Biodiversidade Subaquática",
    recommendedTool: "Minimax / Pika Labs / CapCut",
    visualStyle: "Câmara subaquática com água límpida, raios de sol ondulantes e cores harmoniosas",
    pedagogicalObjective: "Conhecer as relações de cooperação entre espécies nos recifes e sensibilizar para o branqueamento dos corais causado pela subida de temperatura da água.",
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
    recommendedTool: "Kling AI / Luma Dream Machine",
    visualStyle: "Luz dourada de fim de tarde na planície aberta, poeira suave iluminada e comportamento animal natural",
    pedagogicalObjective: "Identificar cadeias alimentares, cooperação em grupo e como a escassez de água molda a vida dos grandes mamíferos.",
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
    recommendedTool: "Kling AI / Luma Ray 2 / Runway",
    visualStyle: "Cinematografia histórica realista de época, pedra de granito autêntica, luz suave de tarde",
    pedagogicalObjective: "Distinguir a torre de menagem, as muralhas, as seteiras e o fosso, compreendendo como os castelos garantiam a segurança das populações na Idade Média.",
    curriculumCompetence: "Caracterizar o território português na época da fundação da nacionalidade e o papel das fortificações medievais na defesa do reino.",
    promptText: "Reconstituição histórica realista em vídeo cinematográfico mostrando um castelo medieval de pedra maciça românica no cimo de um monte verdejante na Península Ibérica no século XII. Vê-se a torre de menagem austera, as muralhas com ameias e seteiras, com um caminho de terra onde habitantes de época caminham com vestes simples de linho e lã. Luz suave de fim de tarde sem aspeto de fantasia medieval ou castelos de contos de fadas, transmitindo sobriedade e rigor da história de Portugal.",
    ethicalConsideration: "Atenção: A maioria das IA tende a criar castelos de fantasia germânica ou inglesa; oriente os alunos para o granito e sobriedade dos castelos portugueses (Guimarães, Almourol, Tomar)."
  },
  {
    id: 10,
    title: "10. Matemática Lúdica: Descomplicar a Multiplicação",
    discipline: "Matemática",
    gradeLevel: "1.º Ciclo (3.º ano)",
    category: "Vídeo Narrado com Personagem Animada",
    recommendedTool: "CapCut AI (Estilo Whimsical 3D) / InVideo AI",
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
    recommendedTool: "Kling AI / Minimax / Luma Ray 2",
    visualStyle: "Fotorealismo de documentário de época dos anos 70, calçada portuguesa autêntica, luz de primavera de Lisboa",
    pedagogicalObjective: "Evocar a esperança e o caráter pacífico e singular do 25 de Abril que devolveu a liberdade e a democracia ao povo português.",
    curriculumCompetence: "Compreender o fim da ditadura, a importância da Constituição de 1976 e a valorização ativa dos direitos humanos e das liberdades cívicas.",
    promptText: "A young Portuguese soldier in authentic vintage 1970s military camouflage uniform and green beret walking down a historic cobblestone street (calçada portuguesa) in Lisbon during the peaceful Carnation Revolution on a sunny morning in April 1974. A fresh bright red carnation flower is gently placed inside the barrel of his rifle. Smiling citizens and children walk alongside the military vehicles with joyful expressions, historic Lisbon buildings with wrought-iron balconies in the soft spring morning light. Ultra-realistic authentic historical documentary footage look, peaceful and deeply humane.",
    ethicalConsideration: "Excelente recurso para cruzar com o Plano Nacional de Cinema e com testemunhos reais de familiares que viveram o 25 de Abril."
  }
];

// 4. CATÁLOGO COMPLETO DAS MELHORES FERRAMENTAS DE VÍDEO COM IA (2026)
export const TOOLS_CATALOG: ToolCatalogItem[] = [
  {
    id: "invideo",
    name: "InVideo AI",
    category: "Vídeo Educativo Pronto com 1 Frase",
    badge: "A Mais Útil para Professores",
    shortDesc: "Escreva uma frase sobre qualquer tema curricular e a ferramenta cria um vídeo completo com guião pedagógico, narração em português, planos de imagem pertinentes e legendas.",
    fullDesc: "Para um professor com pouco tempo, o InVideo AI é a ferramenta mais prática e impressionante da atualidade. Em vez de exigir que o docente procure vídeos de stock, grave a voz e sincronize tudo, o InVideo gera o guião curricular, escolhe imagens adequadas ao tema, coloca uma locução natural e legendas legíveis. Se não gostar de uma frase ou de uma imagem, pode simplesmente pedir por mensagem: 'substitui a imagem do minuto 1 por uma célula ao microscópio' e a IA ajusta de imediato.",
    keyFeatures: [
      "Gera vídeos educativos completos a partir de um simples prompt ou plano de aula",
      "Vozes naturais em português que narram a explicação com boa cadência",
      "Banco gigante de vídeos de arquivo de alta qualidade incluído automaticamente",
      "Edição através de chat: pode pedir para trocar imagens ou encurtar explicações em linguagem corrente",
      "Legendas automáticas incluídas que facilitam a leitura aos alunos"
    ],
    inputTypes: ["Instrução em Texto", "Resumo de Matéria", "Artigos Web"],
    freeTierDetails: "Permite testar e gerar até 10 minutos de vídeo por semana na versão gratuita (com marca de água discreta).",
    limitations: [
      "Vídeos gratuitos incluem marca de água da InVideo no canto",
      "Algumas imagens de arquivo premium têm restrições se não subscrever um plano pago",
      "O guião gerado precisa sempre de uma leitura atenta do professor para verificar se o vocabulário está adaptado à idade dos alunos"
    ],
    pedagogicalUseCases: [
      "Criar introduções de 2 minutos para lançar um tema novo (ex.: Os Romanos na Península Ibérica)",
      "Produzir sínteses rápidas para colocar no Teams ou Moodle antes de uma semana de testes",
      "Trabalho de projeto: os alunos escrevem o guião de um documentário e usam a ferramenta para ilustrar"
    ],
    externalUrl: "https://invideo.io/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos com supervisão docente",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "A ferramenta número 1 para o dia a dia do docente. Poupa horas a fio na criação de materiais explicativos com acabamento profissional.",
      whatIsFact: "Cria de facto um vídeo estruturado de raiz com narração e cortes coerentes com base num único pedido pedagógico.",
      whatIsMisleading: "Os guiões gerados pela IA tendem a ser um pouco genéricos se o professor não especificar o ciclo de ensino e os conceitos obrigatórios no pedido."
    }
  },
  {
    id: "kling",
    name: "Kling AI",
    category: "Fotorrealismo e Física do Mundo Real",
    badge: "O Melhor Realismo Visual de 2026",
    shortDesc: "Modelo de referência mundial para gerar vídeos a partir de texto com movimentos humanos perfeitos, física natural e fidelidade inacreditável.",
    fullDesc: "O Kling AI (desenvolvido pela Kuaishou) tornou-se no padrão de excelência de geração de vídeo. Enquanto outros modelos criam movimentos borrados ou deformações estranhas nas mãos e nos corpos, o Kling consegue recriar pessoas a caminhar, expressões faciais subtis, água a correr e dinâmicas de movimento que parecem filmadas com uma câmara de cinema. É perfeito para criar reconstituições históricas ou cenários de geografia física que parecem genuínos.",
    keyFeatures: [
      "Compreensão profunda da física: gravidade, reflexos, luz e fluidez dos corpos",
      "Modo Texto-para-Vídeo e Imagem-para-Vídeo (anime uma pintura antiga com realismo espantoso)",
      "Opção de controlar a câmara (panorâmica, zoom e inclinação) com precisão cinematográfica",
      "Gera clipes de 5 a 10 segundos com estabilidade e sem quebras visuais grotescas"
    ],
    inputTypes: ["Texto Detalhado", "Imagens Estáticas (Quadros, Fotos)"],
    freeTierDetails: "Oferece cerca de 66 créditos gratuitos todos os dias após login, o que permite gerar 6 a 8 clipes de teste diariamente a custo zero.",
    limitations: [
      "As filas de espera na geração gratuita podem demorar 10 a 20 minutos em horas de ponta",
      "Os prompts funcionam com muito maior precisão quando escritos em inglês",
      "Não gera som nem narração automaticamente (tem de se juntar o áudio depois no CapCut ou Clipchamp)"
    ],
    pedagogicalUseCases: [
      "Reconstituição de figuras da História de Portugal com rigor de farda e arquitetura",
      "Animação de quadros e ilustrações de Educação Visual para análise plástica",
      "Criação de paisagens naturais dinâmicas para aulas de Geografia e Ciências"
    ],
    externalUrl: "https://klingai.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos (18+ sem supervisão)",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Visualmente superior a praticamente tudo o que existe no mercado. Os créditos diários gratuitos renovam-se, permitindo aos professores preparar clipes aos poucos.",
      whatIsFact: "Produz os movimentos humanos e a física de luz mais fidedignos da atualidade.",
      whatIsMisleading: "Exige paciência devido ao tempo de renderização na nuvem e requer que o professor traduza o prompt para inglês para obter os melhores resultados."
    }
  },
  {
    id: "luma",
    name: "Luma Dream Machine (Ray 2)",
    category: "Câmara Cinemática & Dinâmica de Fluidos",
    badge: "Cinema em Sala de Aula",
    shortDesc: "Ferramenta de ponta para criar movimentos de câmara fluídos, tempestades marítimas, dinâmicas de fluidos e transições de viagem no tempo.",
    fullDesc: "A Dream Machine da Luma AI é um dos modelos mais rápidos e impressionantes para criar planos de grande escala: sobrevoos de montanhas, tempestades nos oceanos, dinâmicas de lava vulcânica ou aproximações dramáticas a edifícios históricos. A sua interface é extremamente simples e limpa, funcionando diretamente no navegador sem complicações técnicas.",
    keyFeatures: [
      "Velocidade de renderização notável em comparação com outros motores pesados",
      "Movimentos de câmara em grua e drone perfeitos para introduções temáticas",
      "Função 'Keyframes' para definir o início e o fim da cena através de duas imagens",
      "Compreensão de luz natural e profundidade de campo cinematográfica"
    ],
    inputTypes: ["Prompt de Texto", "Upload de Imagem Inicial e Final"],
    freeTierDetails: "Disponibiliza 30 gerações gratuitas por mês na conta básica.",
    limitations: [
      "Clipes com duração máxima de 5 segundos na versão gratuita",
      "Melhor desempenho obtido com descrições redigidas em inglês",
      "Ocasionalmente pode gerar ligeiras deformações em movimentos anatómicos muito acelerados"
    ],
    pedagogicalUseCases: [
      "Simular viagens geológicas: vulcões em erupção, glaciares e erosão costeira",
      "Criar introduções marcantes que agarram a atenção da turma no primeiro minuto",
      "Exercícios de escrita criativa em Português: os alunos veem um clipe intrigante e escrevem a história por detrás da cena"
    ],
    externalUrl: "https://lumalabs.ai/dream-machine",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Uma das ferramentas mais intuitivas e com melhor relação entre qualidade e cota gratuita mensal.",
      whatIsFact: "Produz movimentos de câmara fluidos e dinâmicas ambientais com realismo cinematográfico.",
      whatIsMisleading: "Gera apenas o vídeo mudo; todo o trabalho pedagógico de colocar voz e contexto tem de ser feito em conjunto."
    }
  },
  {
    id: "minimax",
    name: "MiniMax (Hailuo AI)",
    category: "Expressões Humanas e Movimento Físico",
    badge: "Excelente Opção Gratuita",
    shortDesc: "Geração de vídeo com IA de grande realismo, notável na reprodução de gestos humanos naturais e com uma versão gratuita muito acessível.",
    fullDesc: "O MiniMax (também conhecido como Hailuo AI) surpreendeu o meio tecnológico pela naturalidade com que gera movimentos de pessoas, animais e fluidos sem o aspeto artificial e plástico característico de outras soluções. Para ilustrar uma aula com pessoas a conversar, alunos numa biblioteca ou um artesão a trabalhar no passado, é das ferramentas mais fiáveis da atualidade.",
    keyFeatures: [
      "Movimento corporal orgânico e expressividade facial muito realista",
      "Renderização de tecidos, luz solar e texturas de madeira ou pedra com grande detalhe",
      "Interface no navegador rápida e descomplicada",
      "Fidelidade elevada às instruções pedagógicas fornecidas"
    ],
    inputTypes: ["Texto", "Upload de Imagem de Referência"],
    freeTierDetails: "Plataforma web com créditos gratuitos diários generosos para experimentação de clipes em alta definição (720p/1080p).",
    limitations: [
      "Requer instruções em inglês para que o modelo compreenda com precisão",
      "Não tem ferramentas de edição integradas (serve estritamente para gerar os clipes brutos)"
    ],
    pedagogicalUseCases: [
      "Recriar figuras históricas a falar ou a trabalhar no seu ofício tradicional",
      "Visualizar animais selvagens e os seus comportamentos para Estudo do Meio",
      "Criação de cenários estimulantes para aulas de Filosofia e Cidadania"
    ],
    externalUrl: "https://hailuoai.video/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Uma agradável surpresa no panorama da IA. Muito generosa na utilização gratuita diária e com resultados estéticos de topo.",
      whatIsFact: "Produz vídeos de 6 segundos com naturalidade corporal que ultrapassa modelos bem mais caros.",
      whatIsMisleading: "A plataforma está em crescimento rápido e a interface tem partes em inglês."
    }
  },
  {
    id: "pika",
    name: "Pika Labs (Pika 2.1)",
    category: "Criatividade, Animação e Efeitos Sonoros",
    badge: "Diversão e Narrativa Visual",
    shortDesc: "Excelente para projetos criativos com alunos: gera vídeo a partir de desenhos, permite adicionar efeitos divertidos e gera efeitos sonoros automáticos que batem certo com a cena.",
    fullDesc: "O Pika destaca-se por ser uma das ferramentas de vídeo com IA mais divertidas e criativas para o meio escolar. Para além de animar imagens estáticas ou gerar pequenos filmes a partir de texto, integra um gerador de efeitos sonoros inteligente: se a cena mostrar uma onda a quebrar ou uma porta a fechar, o Pika adiciona o som correspondente sem o professor ter de procurar ficheiros de áudio na Internet.",
    keyFeatures: [
      "Geração de áudio e efeitos sonoros sincronizados automaticamente com o vídeo gerado",
      "Efeitos Pika criativos ('Melt', 'Inflate', 'Squish') fantásticos para projetos artísticos e lúdicos",
      "Capacidade de substituir partes específicas de um vídeo existente através de pincel de edição",
      "Sincronização labial com vozes enviadas pelo professor"
    ],
    inputTypes: ["Texto", "Imagens Próprias", "Áudios Carregados"],
    freeTierDetails: "Oferece créditos iniciais e recargas periódicas gratuitas de cerca de 30 créditos para testes.",
    limitations: [
      "Vídeos na versão gratuita têm uma marca de água discreta no canto inferior",
      "Duração base curta de 3 a 4 segundos por geração (extensível com consumo de mais créditos)"
    ],
    pedagogicalUseCases: [
      "Dar vida a desenhos e ilustrações feitos pelos próprios alunos nas aulas de Artes",
      "Criar pequenos 'clipes de impacto' com som ambiente integrado para apresentações orais",
      "Projetos de animação digital interdisciplinares (Português + Educação Visual)"
    ],
    externalUrl: "https://pika.art/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Muito apelativa para motivar turmas do 2.º e 3.º Ciclo. O facto de gerar o som ambiente automaticamente poupa muito trabalho aos alunos e ao docente.",
      whatIsFact: "Gera de facto som ambiente coerente com a cena visual sem exigir edição externa.",
      whatIsMisleading: "Os efeitos como 'derreter' ou 'esmagar' são lúdicos, mas para rigor científico de Ciências ou História devem ser usados com moderação."
    }
  },
  {
    id: "capcut",
    name: "CapCut (Web, PC e Telemóvel)",
    category: "Edição Fácil, Legendas e Cortes com IA",
    badge: "O Canivete Suíço do Professor",
    shortDesc: "O editor de vídeo gratuito mais completo para professores: coloca legendas perfeitas em português europeu com 1 clique, corta silêncios e exporta em 1080p sem marcas de água.",
    fullDesc: "Se só puder escolher uma ferramenta para o seu computador, o CapCut é a resposta mais prática. Desenvolvido pela ByteDance, tem uma versão para computador (Windows/Mac) e no navegador que faz o trabalho duro por si: grava uma explicação com o telemóvel, abre o CapCut e ele retira o ruído de fundo, apaga os momentos em que ficou a pensar e coloca legendas automáticas animadas com pontuação correta.",
    keyFeatures: [
      "Legendas automáticas em português com excelente precisão fonética e estilos legíveis",
      "Exportação em 1080p de alta definição 100% gratuita e sem marcas de água",
      "Corte inteligente de silêncios e hesitações ('humm', 'tipo') diretamente pela transcrição de texto",
      "Melhoramento de voz com IA que limpa o eco e o barulho de fundo da sala de aula",
      "Banco gigante de músicas escolares, transições e efeitos didáticos"
    ],
    inputTypes: ["Gravações do Telemóvel/Webcam", "Texto para Roteiro", "Ficheiros de Áudio"],
    freeTierDetails: "O editor de vídeo, cortes, melhoramento de voz e as legendas automáticas são 100% gratuitos e sem qualquer marca de água. Apenas funções de IA generativa consomem créditos do bónus inicial de 300 créditos.",
    limitations: [
      "Alguns efeitos e músicas estão identificados com 'PRO' e exigem assinatura paga (mas existem dezenas de alternativas gratuitas)",
      "Os 300 créditos de IA generativa de vídeo são um bónus inicial único e não se renovam mensalmente"
    ],
    pedagogicalUseCases: [
      "Legendar todas as videoaulas para garantir acessibilidade universal (DUA)",
      "Limpar e editar gravações de debates, palestras escolares ou entrevistas feitas pela turma",
      "Montar o vídeo final de projetos de fim de período com fotografias e músicas dos alunos"
    ],
    externalUrl: "https://www.capcut.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Indispensável. É a ferramenta que todo o professor deve instalar para tratar do som e das legendas dos seus materiais sem depender de técnicos.",
      whatIsFact: "Exporta até 1080p sem marcas de água e as legendas em português funcionam com alta fiabilidade de forma totalmente gratuita.",
      whatIsMisleading: "Os 300 créditos de geração de vídeo a partir de prompt são uma oferta de boas-vindas única; para gerar vídeo puro com IA no dia a dia é melhor usar o Kling ou o InVideo."
    }
  },
  {
    id: "canva",
    name: "Canva para Educação",
    category: "Design Integrado e Apresentações em Vídeo",
    badge: "100% Grátis para Escolas",
    shortDesc: "A plataforma que a maioria das escolas já conhece e confia: gratuita para docentes e alunos com email institucional, com gerador de vídeo, animações e filtros de proteção de menores.",
    fullDesc: "O Canva para Educação é uma das poucas plataformas do mundo que disponibiliza as suas funcionalidades premium gratuitamente a professores e alunos do ensino básico e secundário comprovados. Para além de criar apresentações e cartazes, permite juntar clipes de vídeo, gravar o professor em círculo no canto do diapositivo, adicionar legendas e gerar pequenos vídeos por IA dentro de um ambiente seguro e controlado pela escola.",
    keyFeatures: [
      "Totalmente gratuito para professores do ensino regular com conta institucional",
      "Ambiente de turma seguro com filtros de IA calibrados para contexto escolar de menores",
      "Gravação do professor diretamente sobre os diapositivos da aula",
      "Biblioteca imensa de ilustrações, mapas, músicas e fotografias com direitos de autor autorizados",
      "Trabalho colaborativo em tempo real onde vários alunos montam o mesmo vídeo em grupo"
    ],
    inputTypes: ["Apresentações", "Textos", "Imagens", "Gravações da Câmara"],
    freeTierDetails: "100% gratuito sem restrições ou marcas de água para docentes e turmas com acesso aprovado no Canva for Education.",
    limitations: [
      "A geração pura de vídeo por IA a partir de texto consome créditos mensais próprios",
      "Não tem ferramentas de corte por transcrição tão avançadas como o CapCut"
    ],
    pedagogicalUseCases: [
      "Projetos de grupo onde os alunos criam em conjunto uma apresentação em vídeo sobre um tema",
      "Vídeos de boas-vindas e regras da turma no início do ano letivo",
      "Infografias dinâmicas com dados estatísticos e gráficos animados"
    ],
    externalUrl: "https://www.canva.com/pt_pt/educacao/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Gratuito para Escolas",
      minimumAge: "Todas as idades (com domínio da escola)",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "O ecossistema mais seguro e equilibrado para colocar turmas de menores a criar trabalhos multimédia sem riscos de privacidade.",
      whatIsFact: "É genuinamente gratuito para escolas e conta com termos de proteção de dados desenhados para educação.",
      whatIsMisleading: "As contas pessoais gratuitas do Canva não têm estas regalias; o docente tem de submeter o comprovativo de professor para desbloquear o Canva para Educação."
    }
  },
  {
    id: "perchance",
    name: "Perchance AI Video",
    category: "Geração Simples 100% Livre e Sem Registo",
    badge: "O Porto Seguro do RGPD para Turmas",
    shortDesc: "A única ferramenta que não pede conta, não pede email, não pede cartão e não guarda dados pessoais. Ideal para colocar alunos a experimentar em aula sem burocracias de privacidade.",
    fullDesc: "Quando um professor quer que 25 alunos experimentem gerar um vídeo a partir de um prompt numa aula de 50 minutos, o maior pesadelo é o processo de registo: emails que não chegam, passwords esquecidas e violações do RGPD por recolha de dados de menores. O Perchance resolve isto de forma brilhante: acede-se ao site, escreve-se o prompt e o vídeo é gerado diretamente. Sem contas, sem marcas de água e sem recolha de perfis.",
    keyFeatures: [
      "Zero registo: sem email, sem login, sem palavra-passe, sem rastreio comercial",
      "100% gratuito e ilimitado para uso em sala de aula",
      "Conformidade total e imediata com o RGPD para qualquer ciclo de ensino",
      "Simplicidade máxima: uma caixa de texto e um botão de gerar"
    ],
    inputTypes: ["Prompt de Texto"],
    freeTierDetails: "Totalmente gratuito, sem qualquer plano pago ou cobrança oculta.",
    limitations: [
      "A qualidade visual é mais simples do que a do Kling ou do Sora (estilo animação/gif curto)",
      "Os prompts têm obrigatoriamente de ser escritos em inglês",
      "Gera clipes de 2 a 3 segundos com movimento repetido em loop"
    ],
    pedagogicalUseCases: [
      "Primeiro contacto prático dos alunos com a formulação de prompts e pensamento computacional",
      "Aulas de Inglês: os alunos praticam vocabulário e adjetivos descritivos para verem o resultado visual imediato",
      "Ilustração rápida de personagens para redações de Português"
    ],
    externalUrl: "https://perchance.org/vido",
    requiresEnglishPrompt: true,
    screenshots: [],
    factCheckStatus: {
      freeStatus: "100% Gratuito (Sem Conta)",
      minimumAge: "Qualquer idade (com supervisão do professor)",
      rgpdRiskLevel: "Baixo (Sem dados de alunos)",
      teacherVerdict: "A salvação para aulas práticas de informática com turmas do 2.º e 3.º Ciclo. Zero burocracias e risco nulo de proteção de dados.",
      whatIsFact: "Não requer qualquer conta e não comercializa dados dos estudantes.",
      whatIsMisleading: "A resolução e o realismo não competem com motores cinematográficos como o Kling ou a Luma, sendo mais vocacionado para animação curta e lúdica."
    }
  },
  {
    id: "clipchamp",
    name: "Microsoft Clipchamp",
    category: "Edição Simples e Vozes Oficiais de Portugal (PT-PT)",
    badge: "Vozes Autênticas de Portugal",
    shortDesc: "Editor oficial da Microsoft integrado no Windows que oferece as melhores vozes neurais com sotaque português autêntico (Duarte e Raquel) e exportação 1080p sem marcas de água.",
    fullDesc: "Muitos professores queixam-se com razão de que a maioria das ferramentas de IA fala em português do Brasil ou com pronúncia robótica anglo-saxónica. O Clipchamp resolve este problema ao integrar a tecnologia de fala da Microsoft Azure, que inclui as vozes neurais de Portugal mais naturais e bem entoadas do mercado. É simples de usar, vem pré-instalado em muitos computadores da escola e não coloca marcas de água.",
    keyFeatures: [
      "Locução de texto em fala de altíssima qualidade em português europeu (PT-PT) com ajuste de velocidade e tom",
      "Exportação em 1080p nítida totalmente gratuita e ilimitada",
      "Gravador integrado de ecrã e webcam para o docente explicar uma ficha no computador",
      "Totalmente integrado no ecossistema escolar Microsoft (Teams / Office 365)"
    ],
    inputTypes: ["Vídeos do Computador", "Gravação de Ecrã", "Texto para Locução"],
    freeTierDetails: "Exportação ilimitada em 1080p sem marcas de água. Vozes neurais em português totalmente acessíveis no plano gratuito.",
    limitations: [
      "Não faz geração de vídeo sintético a partir de descrições abstratas (é um editor e locutor, não um motor generativo)",
      "A biblioteca de vídeos de stock tem alguns itens reservados aos planos pagos"
    ],
    pedagogicalUseCases: [
      "Dar voz em português correto aos seus diapositivos ou animações geradas noutras ferramentas",
      "Gravar pequenos tutoriais a mostrar como se resolve uma equação no GeoGebra ou no Excel",
      "Produção de audiolivros escolares ou recursos bilingues com dicção límpida"
    ],
    externalUrl: "https://clipchamp.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Útil",
      minimumAge: "13+ anos (ou conta escolar Microsoft)",
      rgpdRiskLevel: "Baixo (Sem dados de alunos)",
      teacherVerdict: "A melhor escolha para garantir que os vídeos educativos falam o português de Portugal que os nossos alunos devem ouvir na escola.",
      whatIsFact: "As vozes PT-PT são gratuitas, naturais e não colocam marcas de água no ficheiro final.",
      whatIsMisleading: "Não cria cenas de vídeo do nada como o Sora ou o Kling; tem de ser o professor a juntar os seus vídeos e imagens."
    }
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Avatares Fotorrealistas e Dobragem com Sincronização Labial",
    badge: "O Padrão de Avatares",
    shortDesc: "Pioneiro mundial em apresentadores virtuais humanos e dobragem com sincronização labial perfeita. Fantástico para demonstração, mas com plano gratuito quase inexistente.",
    fullDesc: "O HeyGen é frequentemente exibido em formações devido ao seu efeito de espanto: permite pegar num vídeo do professor a falar em português e convertê-lo para inglês ou francês com a mesma voz e ajustando o movimento da boca em tempo real. No entanto, é fundamental ser honesto com os docentes: o seu plano de teste é tão curto que serve apenas para ver como funciona, sendo inviável para uso regular sem pagar uma subscrição dispendiosa.",
    keyFeatures: [
      "Avatares humanos com respiração, pestanejo e movimentos de cabeça muito naturais",
      "Dobragem de vídeo com clonagem de voz e sincronização labial impressionante em 40 línguas",
      "Criação de avatares fotográficos a partir de uma única fotografia",
      "Player interativo que pode ser incorporado em páginas web"
    ],
    inputTypes: ["Texto", "Áudio Próprio", "Vídeo Gravado para Traduzir"],
    freeTierDetails: "Apenas 1 crédito de teste único (permite produzir 1 vídeo de 1 minuto) com marca de água grande.",
    limitations: [
      "Plano gratuito praticamente inexistente para o dia a dia de um professor",
      "Planos pagos caros para os orçamentos da educação em Portugal",
      "Questões éticas e legais estritas quanto ao uso de clones biométricos de pessoas reais"
    ],
    pedagogicalUseCases: [
      "Demonstração em ações de formação docente sobre o futuro da multimédia educativa",
      "Aulas de Língua Estrangeira para comparar a mesma mensagem dita em várias línguas com a mesma entoação",
      "Mensagens institucionais de boas-vindas da direção da escola para comunidades multiculturais"
    ],
    externalUrl: "https://www.heygen.com/",
    demoEmbedUrl: "https://app.heygen.com/embeds/3e868218ff734477820be399fb8b1680",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Pago / Trial Rápido",
      minimumAge: "18+ anos",
      rgpdRiskLevel: "Alto (Biometria / Voz / Rosto)",
      teacherVerdict: "Espetacular como demonstração tecnológica. Desaconselhado para uso regular na escola devido aos custos e aos dados biométricos exigidos.",
      whatIsFact: "A sincronização labial e a qualidade dos avatares são das mais sofisticadas da indústria.",
      whatIsMisleading: "Não deve ser vendido como uma ferramenta de trabalho gratuita para os professores, pois o teste termina num minuto."
    }
  },
  {
    id: "sora",
    name: "OpenAI Sora",
    category: "Cinematografia Realista de Grande Escala",
    badge: "A Montra Tecnológica da OpenAI",
    shortDesc: "O modelo de vídeo cinematográfico da OpenAI com capacidade para planos complexos de 1 minuto. Exige subscrição paga e comandos em inglês.",
    fullDesc: "O Sora da OpenAI chamou a atenção do mundo ao mostrar vídeos de reconstituição histórica, animais em habitats complexos e cidades em movimento com uma coerência visual nunca antes vista. Para a educação, representa o vislumbre daquilo que serão os manuais escolares digitais no futuro. Contudo, atualmente continua a ser uma ferramenta reservada a assinantes pagos do ChatGPT Plus ou Pro, não estando disponível de forma livre para as escolas.",
    keyFeatures: [
      "Capacidade de gerar cenas longas com múltiplos ângulos e continuidade espacial",
      "Compreensão de estilos documentais clássicos (como o exemplo do soldado no 25 de Abril)",
      "Simulação de física complexa: reflexos na calçada molhada, multidões e luz solar",
      "Galeria de exploração de prompts de realizadores de topo"
    ],
    inputTypes: ["Texto Descritivo em Inglês", "Imagens Iniciais"],
    freeTierDetails: "Não tem versão gratuita aberta. O acesso faz-se através de subscrição comercial paga da OpenAI.",
    limitations: [
      "Totalmente inacessível gratuitamente para alunos ou professores sem plano pago",
      "Funciona quase exclusivamente com comandos em inglês para atingir fidelidade histórica",
      "Alucinações anatómicas ocasionais em pessoas a correr ou em movimentos rápidos"
    ],
    pedagogicalUseCases: [
      "Reconstituição de acontecimentos marcantes da História de Portugal e Universal",
      "Visualização de biomas e habitats de animais extintos",
      "Debate sobre literacia dos média e a deteção de vídeos falsos (deepfakes) na sociedade"
    ],
    externalUrl: "https://sora.chatgpt.com/explore",
    requiresEnglishPrompt: true,
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Pago / Trial Rápido",
      minimumAge: "13+ com autorização (18+ autónomo)",
      rgpdRiskLevel: "Médio (Conta necessária)",
      teacherVerdict: "Brilhante como referência do estado da arte mundial, mas na prática um professor comum da escola pública portuguesa não a consegue utilizar sem pagar subscrição.",
      whatIsFact: "Consegue manter a consistência física e de iluminação de uma cena como nenhum outro modelo anterior.",
      whatIsMisleading: "Muitos vídeos promocionais na Internet foram selecionados entre dezenas de tentativas falhadas; não é uma ferramenta mágica que acerta sempre à primeira."
    }
  },
  {
    id: "vidnoz",
    name: "Vidnoz AI",
    category: "Diálogos entre Avatares e Conversão de PDFs",
    badge: "Diálogos Dinâmicos com 2 Personagens",
    shortDesc: "Permite criar apresentações com avatares virtuais e tem a particularidade útil de permitir colocar dois avatares a debater na mesma cena.",
    fullDesc: "O Vidnoz AI é uma plataforma focada em transformar guiões, ficheiros PDF ou links da Internet em pequenos vídeos explicativos com personagens virtuais. A sua função mais pedagógica é a de 'Diálogo Dinâmico', onde o professor pode colocar dois avatares a falar à vez — por exemplo, simulando uma conversa entre dois cientistas ou uma sessão de perguntas e respostas entre um professor e um aluno virtual.",
    keyFeatures: [
      "Diálogo alternado entre duas personagens virtuais na mesma cena",
      "Criação de vídeos a partir de ficheiros PDF com matéria curricular",
      "Centenas de avatares de diferentes idades e etnias",
      "Editor integrado para colocar títulos, ícones e diapositivos intercalados"
    ],
    inputTypes: ["Texto", "Ficheiros PDF", "Links de Artigos"],
    freeTierDetails: "Disponibiliza 1 a 3 minutos diários na versão gratuita com resolução padrão (720p) e marca de água.",
    limitations: [
      "Marca de água da Vidnoz visível nos vídeos da conta gratuita",
      "Vozes em português de Portugal mais limitadas nos planos sem pagamento",
      "Tempo de renderização na nuvem pode ser demorado"
    ],
    pedagogicalUseCases: [
      "Simular um debate histórico (ex.: D. Afonso Henriques e a mãe D. Teresa)",
      "Converter um resumo em PDF numa pequena aula em vídeo para apoio ao estudo",
      "Apresentação das regras da disciplina por uma personagem virtual simpática"
    ],
    externalUrl: "https://pt.vidnoz.com/",
    screenshots: [],
    factCheckStatus: {
      freeStatus: "Freemium Muito Limitado",
      minimumAge: "13+ anos",
      rgpdRiskLevel: "Alto (Biometria / Voz / Rosto)",
      teacherVerdict: "Útil para o professor criar simulações pontuais de diálogos entre duas personagens. Não recomendado para os alunos criarem contas.",
      whatIsFact: "A funcionalidade de diálogo entre dois avatares na mesma cena funciona e é didaticamente interessante.",
      whatIsMisleading: "A versão gratuita deixa uma marca de água bastante visível e limita a qualidade a 720p."
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
        description: "Os alunos escrevem as 3 perguntas do jornalista e as 3 respostas fundamentadas da figura histórica. O professor valida o texto no papel ou num documento partilhado antes de avançar para o vídeo.",
        subitems: [
          "Pergunta 1: O contexto da época e a principal escolha que a figura teve de fazer.",
          "Pergunta 2: O maior desafio ou oposição que enfrentou na sua vida.",
          "Pergunta 3: O legado que deixou para a sociedade atual."
        ]
      },
      {
        step: 3,
        title: "Geração da Figura e Narração do Diálogo",
        description: "Utilizando uma ferramenta simples (como o Perchance para criar a imagem da figura ou o Clipchamp para a locução), os alunos montam o diálogo sem precisarem de colocar os seus próprios rostos.",
        recommendedTools: ["Perchance AI Video", "Microsoft Clipchamp", "Canva Educação"]
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
      "Vídeo curto de 1 a 2 minutos com a simulação da entrevista",
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
      "Os alunos não criam contas com dados pessoais individuais.",
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
      "Descodificar um fenómeno científico complexo (ex.: a mitose, a energia das marés, a circulação sanguínea).",
      "Escrever uma locução concisa em que cada palavra conta, aplicando o Princípio da Modalidade de Mayer.",
      "Construir um micro-documentário dinâmico pronto a partilhar com a comunidade escolar."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Escolha do Fenómeno e Mapeamento dos Conceitos",
        description: "Os alunos selecionam um processo científico em que o movimento é essencial para a compreensão. Definem os 3 conceitos fundamentais que o público leigo tem de reter.",
        recommendedTools: ["InVideo AI", "CapCut", "Kling AI"]
      },
      {
        step: 2,
        title: "Desenho da Narrativa Visual (Storyboard)",
        description: "Em quatro quadrículas de papel, os alunos desenham o que se vai ver e o que a voz vai dizer em cada intervalo de 15 segundos: Introdução (0-15s), O Processo (15-40s), O Impacto (40-60s).",
        teacherTip: "Ensine os alunos a não meterem texto no ecrã enquanto a voz fala: a imagem mostra o movimento, a voz explica."
      },
      {
        step: 3,
        title: "Montagem e Legenda Acessível",
        description: "Com o CapCut ou Clipchamp, juntam os clipes de animação, gravam a locução com voz calma e ativam as legendas automáticas em português.",
        recommendedTools: ["CapCut", "Microsoft Clipchamp"]
      },
      {
        step: 4,
        title: "Partilha na Videoteca da Turma",
        description: "Os melhores micro-documentários são arquivados no Teams ou Classroom da disciplina para servirem de material de revisão para os restantes colegas antes dos exames.",
        teacherTip: "Verifique o rigor dos termos científicos antes de publicar para toda a turma."
      }
    ],
    studentDeliverables: [
      "Storyboard em papel ou digital com os 4 momentos do vídeo",
      "Ficheiro de vídeo MP4 de exatamente 60 a 90 segundos com legendas ativadas",
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
      "Identificar marcas visuais de manipulação por IA e cumprir o dever de transparência do Regulamento Europeu de IA."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Análise de Exemplos Reais de Desinformação com IA",
        description: "O professor projeta dois vídeos curtos: um real e um manipulado por IA. Os alunos analisam em conjunto os pormenores que denunciam a criação sintética (olhos sem pestanejar, sombras incoerentes, dentes perfeitos demais).",
        recommendedTools: ["InVideo AI", "Canva Educação"]
      },
      {
        step: 2,
        title: "Elaboração de uma Peça Jornalística Rigorosa",
        description: "A turma simula a redação de um telejornal de ciência. Escrevem uma notícia baseada num relatório ambiental verdadeiro, indicando com clareza quem é a fonte científica.",
        subitems: [
          "O facto noticioso real (ex.: seca no Alentejo, proteção do lince ibérico).",
          "O dado estatístico comprovado.",
          "O aviso obrigatório: 'Imagens geradas por IA para fins de simulação didática'."
        ]
      },
      {
        step: 3,
        title: "Produção e Rotulagem Ética",
        description: "Os alunos montam a peça jornalística e colocam no canto do vídeo a menção visual permanente de que se trata de conteúdo sintético, cumprindo o Artigo 50.º do AI Act da União Europeia.",
        recommendedTools: ["Canva para Educação", "CapCut"]
      }
    ],
    studentDeliverables: [
      "Texto da notícia com citação explícita do relatório científico fonte",
      "Vídeo da peça noticiosa com aviso visível de conteúdo gerado por IA",
      "Checklist de verificação de factos assinada pelo grupo"
    ],
    evaluationCriteria: [
      "Fidelidade da notícia à fonte científica real (40%)",
      "Postura ética e cumprimento das normas de rotulagem de IA da UE (30%)",
      "Clareza da comunicação e dicção jornalística (20%)",
      "Espírito crítico na discussão coletiva (10%)"
    ],
    pedagogicalFramework: "Referencial de Educação para os Media (DGE) + AI Act da União Europeia.",
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
      "Investigar o contexto em que a obra foi pintada e os sentimentos que o artista quis transmitir.",
      "Dar um movimento subtil à pintura e criar uma narrativa na primeira pessoa com a perspetiva de quem viveu a cena."
    ],
    teacherImplementationSteps: [
      {
        step: 1,
        title: "Visita Virtual e Escolha da Obra de Arte",
        description: "Através do Google Arts & Culture ou do Museu Nacional de Arte Antiga, os alunos escolhem uma pintura histórica (ex.: Painéis de São Vicente, O Grito, Fado de José Malhoa).",
        recommendedTools: ["Pika Labs", "Kling AI", "Runway"]
      },
      {
        step: 2,
        title: "A Voz da Personagem da Tela",
        description: "Os alunos imaginam que são uma das figuras da pintura. Escrevem um monólogo curto de 40 segundos: quem sou eu? O que estou a sentir neste momento congelado no tempo?",
        teacherTip: "Excelente oportunidade para trabalhar a empatia histórica e a expressão literária em Português."
      },
      {
        step: 3,
        title: "Animação Respeitosa e Locução",
        description: "Com o Pika ou o Kling, animam apenas o movimento do vento ou da respiração na pintura. No Clipchamp, gravam o monólogo com a sua voz ou com uma voz expressiva em português.",
        recommendedTools: ["Pika Labs", "Microsoft Clipchamp"]
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
    relevanceToEducation: "A obra científica mais importante do mundo sobre como o cérebro humano processa palavras e imagens em vídeo. Formula os 12 princípios cognitivos.",
    criticalAnalysis: "Obrigatória para combater o erro mais frequente na formação: encher o ecrã com texto que um avatar lê simultaneamente. Mayer prova cientificamente que isso sobrecarrega a memória de trabalho e impede a aprendizagem duradoura."
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
    criticalAnalysis: "O Artigo 50.º impõe a obrigação de transparência e rotulagem para qualquer conteúdo de áudio ou vídeo sintético (marcas de água), garantindo que as crianças e jovens sabem sempre distinguir a realidade da ficção digital."
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
    criticalAnalysis: "Recomenda a idade mínima de 13 anos para interação direta e exige que as escolas não cedam a pressão das grandes tecnológicas sem salvaguardas claras de proteção dos menores."
  }
];

// 7. O QUE NÓS, EDUCADORES E CIENTISTAS, NÃO SABEMOS EM 2026 (Transparência Epistémica)
export const WHAT_WE_DO_NOT_KNOW = [
  {
    id: "long-term-cognition",
    title: "1. Qual é o impacto a longo prazo de aprender com professores virtuais sintéticos?",
    description: "A ciência e a neuroeducação ainda não têm estudos longitudinais de 5 a 10 anos que comprovem como a exposição diária prolongada a avatares com rostos e vozes sintéticas afeta a empatia, o desenvolvimento socioemocional e a capacidade de relacionamento humano das crianças e dos jovens.",
    pedagogicalImpact: "O avatar deve ser encarado como um recurso complementar e pontual (para uma introdução ou personagem fictícia), nunca como um substituto da presença viva, do olhar e da escuta ativa do professor em sala de aula."
  },
  {
    id: "pricing-volatility",
    title: "2. Durante quanto tempo as ferramentas gratuitas vão continuar acessíveis às escolas?",
    description: "As grandes tecnológicas operam em lógica de mercado de risco. Muitas das ferramentas que hoje oferecem créditos gratuitos estão a fazê-lo para recolher utilizadores e dados de treino. A qualquer momento, como já aconteceu repetidamente no setor, as cotas gratuitas podem ser drasticamente reduzidas ou canceladas sem aviso.",
    pedagogicalImpact: "O professor nunca deve construir um plano anual ou uma disciplina inteira totalmente dependente de uma única aplicação comercial privada."
  },
  {
    id: "training-data-opacity",
    title: "3. Com que imagens e vídeos foram realmente treinados estes modelos neuronais?",
    description: "Nenhuma das grandes empresas de vídeo com IA (OpenAI, ByteDance, Runway, Kling) revela abertamente a lista completa dos ficheiros, livros, filmes ou obras de arte humanas usadas para treinar os seus algoritmos. Subsistem fortes incertezas jurídicas e processos em tribunal sobre violação de propriedade intelectual e direitos de autor.",
    pedagogicalImpact: "O professor tem a oportunidade de ensinar cidadania e ética digital, incentivando os estudantes a questionarem a proveniência dos materiais e a respeitarem a criação artística humana."
  },
  {
    id: "linguistic-nuances-pt",
    title: "4. Até que ponto podemos confiar no vocabulário em Português de Portugal (PT-PT)?",
    description: "Os modelos generativos são treinados esmagadoramente com conteúdos em língua inglesa e português do Brasil. Embora compreendam o português europeu, ocorrem frequentemente desvios semânticos subtis e termos técnicos curriculares que não correspondem às metas do Ministério da Educação em Portugal.",
    pedagogicalImpact: "O professor é o filtro humano insubstituível: nenhum vídeo gerado por IA deve ser projetado em aula sem que o docente tenha verificado previamente cada frase e cada conceito curricular."
  }
];
