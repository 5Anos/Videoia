import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  Film, 
  Sliders, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Brain, 
  Scale, 
  Sparkle, 
  Compass,
  CheckSquare,
  Clapperboard,
  ShieldCheck,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Check,
  Layers,
  Wrench
} from 'lucide-react';
import { 
  MODULE_OVERVIEW, 
  TOOLS_CATALOG, 
  NON_AI_TOOLS,
  EDUCATIONAL_PROMPTS, 
  CLASSROOM_ACTIVITIES,
  TEACHER_ADVANTAGES 
} from '../data/presentationData';
import aiVideoCreativeVisual from '../assets/images/ai_video_creative_visual_1794246803380.jpg';
import multimediaPedagogyImg from '../assets/images/multimedia_cognitive_pedagogy_concept_1794113538329.jpg';

interface OverviewSectionProps {
  onNavigate: (tabId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  const toggleChecklistItem = (idx: number) => {
    setCheckedChecklist(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const checklistItems = [
    {
      title: 'Autorização Institucional & EPD',
      desc: 'Tenho autorização do Encarregado de Proteção de Dados (EPD) ou da direção da escola para utilizar esta ferramenta com os alunos?'
    },
    {
      title: 'Exigência de Conta e Idade Mínima',
      desc: 'A ferramenta exige conta? Se sim, qual é a idade mínima indicada nos respetivos termos de utilização?'
    },
    {
      title: 'Modelo de Acesso e Custos',
      desc: 'Há opção gratuita funcional e contínua ou apenas um período experimental com pagamento posterior obrigatório?'
    },
    {
      title: 'Dados Biométricos & Servidores',
      desc: 'A ferramenta recolhe dados biométricos (rosto, voz) ou armazena os vídeos gerados em servidores situados fora da União Europeia?'
    },
    {
      title: 'Proibição de Dados Pessoais de Alunos',
      desc: 'Nunca introduzir dados pessoais de alunos (nomes completos, fotografias, amostras de voz, notas ou avaliações) nas plataformas externas.'
    },
    {
      title: 'Exportação e Marca de Água',
      desc: 'A ferramenta permite exportar o vídeo em formato aberto (MP4 standard) e sem marcas de água que prejudiquem a visibilidade pedagógica?'
    },
    {
      title: 'Revisão Científica e Histórica',
      desc: 'O conteúdo gerado pela IA foi rigorosamente revisto e validado pelo professor quanto à correção científica e histórica antes de ser projetado?'
    },
    {
      title: 'Princípio da Transparência',
      desc: 'Os alunos sabem que o vídeo foi gerado com apoio de inteligência artificial (em conformidade com o artigo 50.º do AI Act)?'
    },
    {
      title: 'Alternativa Sem IA Garantida',
      desc: 'Existe uma alternativa sem recurso a IA devidamente planeada para estudantes sem autorização de encarregados de educação ou sem acesso tecnológico?'
    },
    {
      title: 'Foco na Aprendizagem do Estudante',
      desc: 'A atividade avalia as aprendizagens e competências dos alunos e não a mera sofisticação técnica ou cosmética da ferramenta de IA.'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Editorial Studio Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071F3B] via-[#0B2A4E] to-[#04172C] text-white border border-[#143657] shadow-xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 font-mono uppercase">
              <span>Formação Contínua de Professores</span>
              <span className="text-cyan-500">/</span>
              <span className="text-cyan-300">Carla Oliveira (2026)</span>
              <span className="text-cyan-500">/</span>
              <span className="text-slate-300">Módulo 3: Ferramentas de Vídeo com IA</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="inline-block bg-[#FACC15] text-[#071526] font-black px-4 py-1.5 rounded-2xl shadow-xl shadow-amber-400/25 text-2xl sm:text-3xl lg:text-4xl tracking-tight transform -rotate-1">
                  Vídeo com IA
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-200 font-serif-display">
                na Prática Pedagógica
              </h1>
            </div>

            <div className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal space-y-3">
              <p>
                Explore o potencial da Inteligência Artificial na criação de recursos educativos! Descubra ferramentas, experimente novas possibilidades e conheça exemplos práticos para criar vídeos, animações, avatares e atividades que podem dar uma nova dinâmica às suas aulas.
              </p>
              <p>
                Entre, explore cada ferramenta, experimente as suas funcionalidades e descubra tudo o que pode criar!
              </p>
            </div>

            {/* Hero Direct CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] text-xs sm:text-sm font-bold shadow-md shadow-amber-400/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explorar Ferramentas de Vídeo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('activities')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B3B48] hover:bg-[#0E4B5C] text-cyan-200 hover:text-white text-xs sm:text-sm font-semibold border border-cyan-400/40 backdrop-blur-xs transition-all cursor-pointer shadow-md shadow-cyan-950/40"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Guiões Práticos para a Aula</span>
              </button>

              <button
                onClick={() => onNavigate('comparator')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer hover:bg-white/5"
              >
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>Comparador Funcional</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Artwork Without Text */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group bg-[#071526]">
              <img
                src={aiVideoCreativeVisual}
                alt="Composição visual de criatividade audiovisual e Inteligência Artificial na Educação"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: DYNAMIC MODULE STATISTICS COUNTERS */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <button
            onClick={() => onNavigate('tools')}
            className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] hover:border-[#0966C2]/40 transition-all text-left group cursor-pointer"
          >
            <div className="text-2xl sm:text-3xl font-black text-[#08203E] font-mono group-hover:text-[#0966C2] transition-colors">
              {TOOLS_CATALOG.length}
            </div>
            <div className="text-xs font-bold text-[#08203E] mt-1 font-serif-display">
              Ferramentas com IA
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Analisadas pedagogicamente
            </div>
          </button>

          <button
            onClick={() => onNavigate('tools')}
            className="p-4 rounded-2xl bg-[#F0FDF4] border border-emerald-200 hover:border-emerald-400 transition-all text-left group cursor-pointer"
          >
            <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono">
              {NON_AI_TOOLS.length}
            </div>
            <div className="text-xs font-bold text-emerald-950 mt-1 font-serif-display">
              Alternativas sem IA
            </div>
            <div className="text-[11px] text-emerald-700 mt-0.5 leading-snug">
              Código aberto e livres
            </div>
          </button>

          <button
            onClick={() => onNavigate('prompts')}
            className="p-4 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] hover:border-amber-400 transition-all text-left group cursor-pointer"
          >
            <div className="text-2xl sm:text-3xl font-black text-[#874A07] font-mono">
              {EDUCATIONAL_PROMPTS.length}
            </div>
            <div className="text-xs font-bold text-[#874A07] mt-1 font-serif-display">
              Prompts Curriculares
            </div>
            <div className="text-[11px] text-[#A15C07] mt-0.5 leading-snug">
              Validados para as disciplinas
            </div>
          </button>

          <button
            onClick={() => onNavigate('activities')}
            className="p-4 rounded-2xl bg-[#EAF3FD] border border-[#CEE2F7] hover:border-[#0966C2] transition-all text-left group cursor-pointer"
          >
            <div className="text-2xl sm:text-3xl font-black text-[#0966C2] font-mono">
              {CLASSROOM_ACTIVITIES.length}
            </div>
            <div className="text-xs font-bold text-[#08203E] mt-1 font-serif-display">
              Guiões para a Aula
            </div>
            <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
              Com rubricas de avaliação
            </div>
          </button>

          <button
            onClick={() => onNavigate('advantages')}
            className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] hover:border-[#0966C2]/40 transition-all text-left group cursor-pointer col-span-2 md:col-span-1"
          >
            <div className="text-2xl sm:text-3xl font-black text-slate-700 font-mono">
              {TEACHER_ADVANTAGES.length}
            </div>
            <div className="text-xs font-bold text-[#08203E] mt-1 font-serif-display">
              Vantagens Docentes
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Fundamentação empírica
            </div>
          </button>
        </div>
      </section>

      {/* SECTION 11: 10-POINT CHECKLIST FOR TEACHERS BEFORE USING AI VIDEO */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EEF2F6] pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0 border border-[#CEE2F7]">
              <CheckSquare className="w-6 h-6 text-[#0966C2]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0966C2] font-mono">
                Salvaguardas Éticas, Jurídicas e Didáticas
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
                Checklist Rápida para o Professor: Antes de utilizar uma ferramenta de vídeo com IA
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#F0F5FA] text-[#08203E] border border-[#DCE8F6] shrink-0">
            10 Pontos de Verificação
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
          Antes de propor uma atividade com recurso a ferramentas de inteligência artificial de vídeo ou de introduzir materiais digitais na turma, percorra este guia prático para assegurar total conformidade institucional e pedagógica:
        </p>

        <div className="grid md:grid-cols-2 gap-3.5">
          {checklistItems.map((item, idx) => {
            const isChecked = checkedChecklist[idx] || false;

            return (
              <div 
                key={idx}
                onClick={() => toggleChecklistItem(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked 
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-2xs' 
                    : 'bg-[#F8FAFD] border-[#DCE8F6] hover:border-[#0966C2]/40 text-[#08203E]'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5 transition-all ${
                  isChecked 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white border border-[#DCE8F6] text-[#08203E]'
                }`}>
                  {isChecked ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold font-serif-display flex items-center gap-1.5">
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Nota de responsabilidade:</strong> Esta lista destina-se a apoiar a reflexão didática do professor e não substitui os regulamentos internos do Agrupamento de Escolas nem os pareceres do Encarregado de Proteção de Dados (EPD).
          </p>
        </div>
      </section>

      {/* ENQUADRAMENTO NACIONAL EDUQA */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-start sm:items-center justify-between gap-4 border-b border-[#EAF2FA] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5 text-[#0966C2]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0966C2]">
                Enquadramento das Políticas Educativas Nacionais
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#08203E] font-serif-display">
                Orientações nacionais para a utilização responsável da IA na educação
              </h2>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EAF3FD] text-[#085294] border border-[#CDE3F7]">
            EduQA · Portugal
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Em outubro de 2026, o EduQA colocou em consulta pública o documento «Inteligência Artificial na Educação — Orientações para a utilização responsável da IA em contexto educativo», destinado à Educação Pré-Escolar e aos Ensinos Básico e Secundário.
        </p>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          O documento procura apoiar as decisões dos docentes e distingue três modalidades de utilização da Inteligência Artificial nas tarefas escolares:
        </p>

        <div className="grid sm:grid-cols-3 gap-3.5 pt-1">
          <div className="p-4 rounded-2xl bg-[#F0F5FA] border border-[#DCE8F6] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#08203E] font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              <span>Sem IA</span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Quando se pretende observar o desempenho autónomo do aluno.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#EAF3FD] border border-[#CEE2F7] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#0966C2] font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0966C2]" />
              <span>IA de apoio</span>
            </div>
            <p className="text-xs text-slate-700 leading-snug">
              Quando a ferramenta pode ser utilizada apenas nas finalidades e etapas definidas pelo professor.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#874A07] font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-[#874A07]" />
              <span>IA integrada</span>
            </div>
            <p className="text-xs text-slate-800 leading-snug">
              Quando a utilização da Inteligência Artificial faz parte da própria tarefa ou constitui objeto de análise e aprendizagem.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
          O documento inclui também instrumentos de apoio à decisão docente, à verificação prévia de atividades, à identificação da utilização de IA e à apreciação institucional de ferramentas. A utilização de IA deve ter uma finalidade educativa clara, respeitar a idade e o desenvolvimento dos alunos, salvaguardar os dados pessoais e preservar a autonomia intelectual.
        </p>

        <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Estado documental:</strong> versão colocada em consulta pública em 15 de outubro de 2026. A versão final está prevista para disponibilização às escolas a partir de 4 de janeiro de 2027. Consultar a publicação oficial para confirmar eventuais alterações.
          </div>
        </div>
      </section>

      {/* 4 FOUNDATIONAL PEDAGOGICAL PILLARS */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] shadow-xs overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-[#EAF2FA] bg-[#F8FAFD]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center font-bold shrink-0 border border-[#CEE2F7]">
                <Compass className="w-6 h-6 text-[#0966C2]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0966C2] font-mono">
                  Quadro Teórico e Prático da Formação
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
                  Quatro Pilares para uma Prática Audiovisual com Sentido
                </h2>
              </div>
            </div>

            <div className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#EAF3FD] text-[#085294] border border-[#CDE3F7] shrink-0 font-mono">
              Fundamentação Pedagógica (APA 7.ª)
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Integrar vídeo com inteligência artificial na escola exige intencionalidade clara. Estes quatro princípios 
            garantem que a tecnologia serve o desenvolvimento cognitivo e ético dos estudantes:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAF2FA] p-6 sm:p-8 gap-6 md:gap-0 bg-white">
          {/* Pillar 1: Revised Bloom's Taxonomy */}
          <div className="space-y-3 md:px-5 first:pl-0">
            <div className="flex items-center gap-2 text-[#085294] font-bold text-xs uppercase tracking-wider font-mono">
              <Brain className="w-4 h-4 text-[#0966C2]" />
              <span>Taxonomia de Bloom (2001)</span>
            </div>
            <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
              O Patamar Cognitivo de 'Criar'
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Segundo a revisão de Anderson & Krathwohl (2001), <strong>Criar</strong> situa-se no topo dos processos cognitivos. 
              Produzir um vídeo com IA desafia o aluno a sintetizar conceitos, estruturar uma narrativa e avaliar criticamente 
              a veracidade do que o modelo gerou.
            </p>
          </div>

          {/* Pillar 2: Mayer CTML Principles */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-[#0966C2] font-bold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-[#0966C2]" />
              <span>Carga Cognitiva (Mayer, 2020)</span>
            </div>
            <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
              Modalidade e Redundância
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A Teoria Cognitiva da Aprendizagem Multimédia demonstra que o processamento humano ocorre por canais auditivo e visual independentes. A combinação ponderada de imagens e narração oral favorece a integração de modelos mentais; contudo, a sobreposição excessiva de texto escrito idêntico à voz ou estímulos irrelevantes provoca sobrecarga cognitiva.
            </p>
          </div>

          {/* Pillar 3: Realistic Classroom Tool Selection */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider font-mono">
              <Film className="w-4 h-4 text-teal-600" />
              <span>Viabilidade em Sala de Aula</span>
            </div>
            <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
              Critérios de Seleção para a Turma
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nem todo o software comercial funciona com 25 alunos em 50 minutos. A exploração didática deve priorizar ferramentas institucionais (como o Canva para Educação). Plataformas abertas para adultos (como o Perchance, restrito a maiores de 18 anos) destinam-se exclusivamente à preparação prévia pelo docente, nunca ao uso direto por menores.
            </p>
          </div>

          {/* Pillar 4: RGPD & EU AI Act */}
          <div className="space-y-3 md:px-5 last:pr-0">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider font-mono">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>Proteção de Dados & AI Act</span>
            </div>
            <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
              Proteção de Menores e Transparência
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O envio de imagens ou voz de menores para plataformas terceiras coloca reservas éticas e jurídicas. O Regulamento Europeu de Inteligência Artificial (Regulamento 2024/1689 e alteração 2026/1744) estabelece deveres de transparência no artigo 50.º para conteúdos sintéticos e reforça a literacia em IA no artigo 4.º.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Concept Split */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DCE8F6] shadow-xs">
            <img
              src={multimediaPedagogyImg}
              alt="Mesa de trabalho de pedagogo com caderno de esboços, storyboard digital, lente e caneca de café"
              className="w-full h-[280px] sm:h-[340px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041D3A]/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-mono text-amber-300 text-[10px] uppercase font-bold">Planeamento & Intencionalidade</span>
              <p className="font-serif-display italic mt-0.5 text-slate-200">Antes do prompt, o guião: como desenhar aprendizagens com sentido.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0966C2] uppercase font-mono tracking-wider">
              <Sparkle className="w-4 h-4 text-[#0966C2]" />
              <span>Metas Formativas da Ação</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#08203E] font-serif-display">
              Três Competências Essenciais para o Professor
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ao longo deste módulo, exploramos como dominar o potencial do vídeo com IA sem nos perdermos nos aspetos técnicos: 
              compreender os fundamentos da comunicação visual, desenhar guiões rigorosos e liderar projetos inclusivos na escola.
            </p>

            <div className="space-y-3 pt-2">
              {MODULE_OVERVIEW.objectives.map((obj, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] flex items-start gap-3 hover:border-[#0966C2]/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#FACC15] text-[#071526] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#08203E]">
                      {idx === 0 && 'Compreensão Técnica & Crítica'}
                      {idx === 1 && 'Criação Audiovisual & Prompts Rigorosos'}
                      {idx === 2 && 'Integração Curricular & Cidadania Digital'}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {obj}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 Structural Pillars */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0966C2] font-mono">
            Panorama Tecnológico
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display mt-0.5">
            Os Dois Grandes Domínios do Vídeo com IA
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Diferença prática entre a síntese de novo material e a edição inteligente para acessibilidade e inclusão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pillar 1: Generative AI */}
          <div className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-[#0966C2]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#FEF8E7] text-[#874A07] flex items-center justify-center border border-[#FDE5B5]">
                  <Film className="w-5 h-5 text-[#874A07]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#08203E] font-serif-display">
                    IA Generativa de Vídeo
                  </h3>
                  <span className="text-xs text-[#874A07] font-semibold font-mono">Texto para vídeo & Imagem para vídeo</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Modelos que transformam descrições textuais em planos de vídeo fluidos. 
                Permitem reconstituir momentos históricos (ex: o Terramoto de 1755 em Lisboa), fenómenos cósmicos 
                ou reações moleculares difíceis de filmar com uma câmara normal.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                {MODULE_OVERVIEW.videoAICategories[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">InVideo, Kling, Luma, MiniMax, Pika, Runway</span>
              <button
                onClick={() => onNavigate('tools')}
                className="text-xs text-[#0966C2] font-bold hover:text-[#085294] flex items-center gap-1 cursor-pointer"
              >
                <span>Ver ferramentas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: AI-Assisted Editing */}
          <div className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-[#0966C2]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center border border-[#CEE2F7]">
                  <Sliders className="w-5 h-5 text-[#0966C2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#08203E] font-serif-display">
                    Edição com IA Integrada
                  </h3>
                  <span className="text-xs text-[#0966C2] font-semibold font-mono">Pós-Produção & Inclusão (DUA)</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Ferramentas que automatizam tarefas morosas da pós-produção: legendagem automática em português de Portugal, 
                corte baseado no guião de texto e apoio multilíngue para acolhimento de alunos.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                {MODULE_OVERVIEW.videoAICategories[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">CapCut, Clipchamp, Canva para Educação</span>
              <button
                onClick={() => onNavigate('advantages')}
                className="text-xs text-[#0966C2] font-bold hover:text-[#085294] flex items-center gap-1 cursor-pointer"
              >
                <span>Ver 5 vantagens pedagógicas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
