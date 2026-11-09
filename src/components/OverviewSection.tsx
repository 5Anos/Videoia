import React from 'react';
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
  Clapperboard
} from 'lucide-react';
import { 
  MODULE_OVERVIEW, 
  TOOLS_CATALOG, 
  EDUCATIONAL_PROMPTS, 
  CLASSROOM_ACTIVITIES 
} from '../data/presentationData';
import landingHeroBannerImg from '../assets/images/landing_hero_banner.png';
import multimediaPedagogyImg from '../assets/images/multimedia_cognitive_pedagogy_concept_1794113538329.jpg';

interface OverviewSectionProps {
  onNavigate: (tabId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Editorial Studio Hero Section Matching User Reference */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07172A] via-[#0A1E35] to-[#050E1A] text-white border border-[#143657] shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
          {/* Left Column: Bold Humanist Editorial Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 font-mono uppercase">
              <span>Formação Contínua de Professores</span>
              <span className="text-cyan-500">/</span>
              <span className="text-cyan-300">Carla Oliveira (2026)</span>
              <span className="text-cyan-500">/</span>
              <span className="text-stone-300">Módulo 3: Ferramentas de Vídeo com IA</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12] font-serif-display text-balance">
                Da Curiosidade e Rigor à Criatividade,
              </h1>
              
              <div>
                <span className="inline-block bg-[#FACC15] text-[#071526] font-black px-4 py-1.5 rounded-2xl shadow-xl shadow-amber-400/25 text-2xl sm:text-3xl lg:text-4xl tracking-tight transform -rotate-1">
                  Vídeo com IA
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-200 font-serif-display">
                na Prática Pedagógica
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              A inteligência artificial não substitui a sensibilidade do professor nem a relação humana na sala de aula. 
              Esta plataforma foi criada para a formação de docentes: fundamenta o uso do audiovisual com base na Teoria da 
              Aprendizagem Multimédia de Richard Mayer, desmistifica ferramentas e oferece guiões de atividades prontos para 
              levar para a turma com intencionalidade, inclusão e segurança.
            </p>

            {/* Hero Direct CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] text-xs sm:text-sm font-bold shadow-lg shadow-amber-400/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
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
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-stone-300 hover:text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer hover:bg-white/5"
              >
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>Comparador Funcional</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Reference & Clapperboard Checklist */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group bg-[#071526]">
              <img
                src={landingHeroBannerImg}
                alt="Ambiente cinematográfico com cadeira de realizador IA na Educação, claqueta com checklist e portátil de edição"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/90 via-[#071526]/30 to-transparent" />
              
              {/* Clapperboard Floating Checklist Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071526]/85 backdrop-blur-md border border-cyan-500/40 text-white space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                    <Clapperboard className="w-4 h-4 text-amber-300" />
                    Plano de Produção Docente
                  </span>
                  <span className="text-[10px] text-cyan-300">4 Etapas</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-200">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold">Planear o Guião</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-200">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold">Criar com IA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-200">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold">Editar e Legendar</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-200">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold">Aplicar na Turma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 FOUNDATIONAL PEDAGOGICAL PILLARS (Dark Studio Theme) */}
      <section className="bg-[#0B1E33] rounded-3xl border border-[#143657] shadow-xl overflow-hidden text-white">
        <div className="p-6 sm:p-8 border-b border-[#143657] bg-[#07172A]/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 text-cyan-300 flex items-center justify-center font-bold shrink-0 border border-cyan-800/60">
                <Compass className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  Quadro Teórico e Prático da Formação
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-display">
                  Quatro Pilares para uma Prática Audiovisual com Sentido
                </h2>
              </div>
            </div>

            <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 shrink-0 font-mono">
              Fundamentação Pedagógica (APA 7.ª)
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-3xl leading-relaxed">
            Integrar vídeo com inteligência artificial na escola exige intencionalidade clara. Estes quatro princípios 
            garantem que a tecnologia serve o desenvolvimento cognitivo e ético dos estudantes:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#143657] p-6 sm:p-8 gap-6 md:gap-0 bg-[#0B1E33]">
          {/* Pillar 1: Revised Bloom's Taxonomy */}
          <div className="space-y-3 md:px-5 first:pl-0">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Brain className="w-4 h-4" />
              <span>Taxonomia Revista de Bloom</span>
            </div>
            <h3 className="text-sm font-bold text-white font-serif-display">
              O Patamar Cognitivo de 'Criar'
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Segundo a revisão de Anderson & Krathwohl (2001), <strong>Criar</strong> situa-se no topo dos processos cognitivos. 
              Produzir um vídeo com IA desafia o aluno a sintetizar conceitos, estruturar uma narrativa e avaliar criticamente 
              a veracidade do que o modelo gerou.
            </p>
          </div>

          {/* Pillar 2: Mayer CTML Principles */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Carga Cognitiva (Mayer, 2020)</span>
            </div>
            <h3 className="text-sm font-bold text-white font-serif-display">
              Modalidade e Redundância
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              A Teoria Cognitiva da Aprendizagem Multimédia demonstra que o processamento humano ocorre por canais auditivo e visual independentes, ambos com capacidade estritamente limitada na memória de trabalho. A combinação ponderada de imagens dinâmicas e narração oral favorece a integração de modelos mentais coerentes; contudo, a sobreposição excessiva de texto escrito idêntico à voz ou a inclusão de estímulos decorativos irrelevantes (efeito sedutor) provoca sobrecarga cognitiva e prejudica a retenção e a transferência.
            </p>
          </div>

          {/* Pillar 3: Realistic Classroom Tool Selection */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Film className="w-4 h-4" />
              <span>Viabilidade em Sala de Aula</span>
            </div>
            <h3 className="text-sm font-bold text-white font-serif-display">
              Critérios de Seleção para a Turma
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nem todo o software comercial funciona com 25 alunos em 50 minutos. A exploração didática deve priorizar ferramentas que não exijam cartão de crédito e soluções institucionais (como o Canva para Educação). Plataformas abertas para adultos (como o Perchance, restrito a maiores de 18 anos) destinam-se exclusivamente à exploração e preparação prévia pelo docente, nunca ao uso direto por menores.
            </p>
          </div>

          {/* Pillar 4: RGPD & EU AI Act */}
          <div className="space-y-3 md:px-5 last:pr-0">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono">
              <Scale className="w-4 h-4" />
              <span>Proteção de Dados e Transparência</span>
            </div>
            <h3 className="text-sm font-bold text-white font-serif-display">
              Proteção Biometria de Menores
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              O envio de gravações de imagem ou voz de crianças e jovens para plataformas de terceiros coloca reservas éticas e jurídicas intransponíveis face ao RGPD e aos direitos da personalidade. Nos termos do Regulamento Europeu de Inteligência Artificial (Regulamento (UE) 2024/1689, Artigo 50.º), a geração de conteúdos manipulados ou sintéticos que simulem pessoas, objetos ou acontecimentos reais impõe deveres específicos de transparência: o resultado deve ser assinalado e divulgado como conteúdo gerado por inteligência artificial, aplicando-se regras distintas consoante se trate de fornecedores de sistemas ou de utilizadores operacionais.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Concept Split: The Cognitive Bridge of Multimedia Pedagogy */}
      <section className="bg-[#0B1E33] rounded-3xl border border-[#143657] p-6 sm:p-10 shadow-xl text-white">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#143657] shadow-md">
            <img
              src={multimediaPedagogyImg}
              alt="Mesa de trabalho de pedagogo com caderno de esboços, storyboard digital, lente e caneca de café"
              className="w-full h-[280px] sm:h-[340px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071526]/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-mono text-amber-300 text-[10px] uppercase font-bold">Planeamento & Intencionalidade</span>
              <p className="font-serif-display italic mt-0.5 text-stone-200">Antes do prompt, o guião: como desenhar aprendizagens com sentido.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase font-mono tracking-wider">
              <Sparkle className="w-4 h-4" />
              <span>Metas Formativas da Ação</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-display">
              Três Competências Essenciais para o Professor
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ao longo deste módulo, exploramos como dominar o potencial do vídeo com IA sem nos perdermos nos aspetos técnicos: 
              compreender os fundamentos da comunicação visual, desenhar guiões rigorosos e liderar projetos inclusivos na escola.
            </p>

            <div className="space-y-3 pt-2">
              {MODULE_OVERVIEW.objectives.map((obj, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#07172A] border border-[#143657] flex items-start gap-3 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#FACC15] text-[#071526] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {idx === 0 && 'Compreensão Técnica & Crítica'}
                      {idx === 1 && 'Criação Audiovisual & Prompts Rigorosos'}
                      {idx === 2 && 'Integração Curricular & Cidadania Digital'}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {obj}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 Structural Pillars: Generative Synthesis vs Post-Production */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
            Panorama Tecnológico
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-display mt-0.5">
            Os Dois Grandes Domínios do Vídeo com IA
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Diferença prática entre a síntese de novo material e a edição inteligente para acessibilidade e inclusão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pillar 1: Generative AI */}
          <div className="bg-[#0B1E33] rounded-3xl border border-[#143657] p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-400/10 text-amber-300 flex items-center justify-center border border-amber-400/30">
                  <Film className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif-display">
                    IA Generativa de Vídeo
                  </h3>
                  <span className="text-xs text-amber-300 font-semibold font-mono">Síntese Text-to-Video & Image-to-Video</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Modelos de difusão que transformam descrições textuais em planos de vídeo fluidos. 
                Permitem reconstituir momentos históricos (ex: o Terramoto de 1755 em Lisboa), fenómenos cósmicos 
                ou reações moleculares impossíveis de filmar com uma câmara normal.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#143657]">
                {MODULE_OVERVIEW.videoAICategories[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#143657] flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">InVideo AI, Kling AI, Luma Dream Machine e Hailuo AI</span>
              <button
                onClick={() => onNavigate('tools')}
                className="text-xs text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Ver ferramentas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: AI-Assisted Editing */}
          <div className="bg-[#0B1E33] rounded-3xl border border-[#143657] p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-400/10 text-teal-300 flex items-center justify-center border border-teal-400/30">
                  <Sliders className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif-display">
                    Edição com IA Integrada
                  </h3>
                  <span className="text-xs text-teal-300 font-semibold font-mono">Pós-Produção & Inclusão (DUA)</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Ferramentas que automatizam tarefas morosas da pós-produção: legendagem automática em português de Portugal, 
                remoção inteligente de hesitações/silêncios, corte baseado no guião de texto e traduções multilíngues para acolher alunos estrangeiros.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#143657]">
                {MODULE_OVERVIEW.videoAICategories[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#143657] flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">CapCut, Clipchamp, Canva para Educação</span>
              <button
                onClick={() => onNavigate('advantages')}
                className="text-xs text-teal-300 font-bold hover:text-teal-200 flex items-center gap-1 cursor-pointer"
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
