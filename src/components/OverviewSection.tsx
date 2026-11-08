import React from 'react';
import { 
  Target, 
  Sparkles, 
  Film, 
  Sliders, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Brain,
  Scale,
  Sparkle,
  Compass
} from 'lucide-react';
import { MODULE_OVERVIEW } from '../data/presentationData';

interface OverviewSectionProps {
  onNavigate: (tabId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Editorial Split Hero Section with Real Classroom Visual */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E1B18] via-[#2A2420] to-[#181513] text-white border border-stone-800 shadow-2xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          {/* Left Column: Humanist Editorial Headline & Purpose */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 font-mono uppercase">
              <span>Formação Contínua de Professores</span>
              <span className="text-stone-500">/</span>
              <span>Carla Oliveira (2026)</span>
              <span className="text-stone-500">/</span>
              <span className="text-stone-300 font-medium">
                Módulo 3: Ferramentas de Vídeo com IA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-100 leading-[1.12] font-serif-display text-balance">
              Da Curiosidade à Intencionalidade:<br />
              <span className="text-amber-400 font-normal italic">Vídeo com IA</span> na Prática Pedagógica
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              A inteligência artificial não substitui a sensibilidade do professor nem a relação humana na sala de aula. 
              Esta plataforma foi criada para a formação de docentes: fundamenta o uso do audiovisual com base na Teoria da 
              Aprendizagem Multimédia de Richard Mayer, desmistifica ferramentas e oferece guiões de atividades prontos para 
              levar para a turma com intencionalidade, inclusão e segurança.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C05638] hover:bg-[#D96B43] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#C05638]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explorar Ferramentas de Vídeo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('activities')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/15 backdrop-blur-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Guiões Práticos para Sala de Aula</span>
              </button>

              <button
                onClick={() => onNavigate('comparator')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-stone-400 hover:text-stone-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <Scale className="w-4 h-4 text-stone-400" />
                <span>Matriz de Risco RGPD</span>
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-stone-300">
              <div>
                <span className="block text-xl font-black text-white font-mono">9</span>
                <span className="text-[11px] text-stone-400">Ferramentas didáticas selecionadas</span>
              </div>
              <div>
                <span className="block text-xl font-black text-amber-400 font-mono">11</span>
                <span className="text-[11px] text-stone-400">Prompts prontos para o currículo</span>
              </div>
              <div>
                <span className="block text-xl font-black text-emerald-400 font-mono">100%</span>
                <span className="text-[11px] text-stone-400">Foco em privacidade e segurança</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Classroom Photography Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/src/assets/images/hero_teacher_multimedia_classroom_1794113537383.jpg"
                alt="Docente em sala de aula multimédia demonstrando narrativa em vídeo com estudantes colaborando"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-amber-300">
                  Prática Docente em Ação
                </span>
                <p className="text-xs sm:text-sm italic font-serif-display text-stone-200 leading-snug">
                  "O papel do professor não é ser realizador de cinema, mas ensinar o aluno a pensar com imagens e palavras."
                </p>
                <div className="text-[11px] text-stone-400">
                  Fotografia documental · Formação Contínua de Docentes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 FOUNDATIONAL PEDAGOGICAL PILLARS (Clean, Authoritative Pedagogy) */}
      <section className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-stone-200 bg-[#FCFAF7]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] text-[#1E523A] flex items-center justify-center font-bold shrink-0 border border-[#D0E5DC]">
                <Compass className="w-6 h-6 text-[#1E523A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E523A] font-mono">
                  Quadro Teórico e Prático da Formação
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display">
                  Quatro Pilares para uma Prática Audiovisual com Sentido
                </h2>
              </div>
            </div>

            <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0 font-mono">
              Fundamentação Pedagógica (APA 7.ª)
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 mt-3 max-w-3xl leading-relaxed">
            Integrar vídeo com inteligência artificial na escola exige intencionalidade clara. Estes quatro princípios 
            garantem que a tecnologia serve o desenvolvimento cognitivo e ético dos estudantes:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-100 p-6 sm:p-8 gap-6 md:gap-0 bg-white">
          {/* Pillar 1: Revised Bloom's Taxonomy */}
          <div className="space-y-3 md:px-5 first:pl-0">
            <div className="flex items-center gap-2 text-[#C05638] font-bold text-xs uppercase tracking-wider font-mono">
              <Brain className="w-4 h-4" />
              <span>Taxonomia Revista de Bloom</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 font-display">
              O Patamar Cognitivo de 'Criar'
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Segundo a revisão de Anderson & Krathwohl (2001), <strong>Criar</strong> situa-se no topo dos processos cognitivos. 
              Produzir um vídeo com IA desafia o aluno a sintetizar conceitos, estruturar uma narrativa e avaliar criticamente 
              a veracidade do que o modelo gerou.
            </p>
          </div>

          {/* Pillar 2: Mayer CTML Principles */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-[#244B3B] font-bold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Carga Cognitiva (Mayer, 2020)</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 font-display">
              Modalidade e Redundância
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A Teoria da Aprendizagem Multimédia demonstra que o cérebro processa imagem e som por canais separados. 
              O segredo didático é combinar animações visuais com narração oral expressiva, <strong>evitando duplicar texto corrido no ecrã</strong> 
              para não sobrecarregar a memória de trabalho.
            </p>
          </div>

          {/* Pillar 3: Realistic Classroom Tool Selection */}
          <div className="space-y-3 md:px-5">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider font-mono">
              <Film className="w-4 h-4" />
              <span>Viabilidade em Sala de Aula</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 font-display">
              Critérios de Seleção para a Turma
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nem todo o software comercial funciona com 25 alunos em 50 minutos. Privilegiamos ferramentas que não peçam 
              cartão de crédito, que permitam acesso sem registos complexos (como o <strong>Perchance</strong>) ou que disponham 
              de planos escolares seguros (como o <strong>Canva para Educação</strong>).
            </p>
          </div>

          {/* Pillar 4: RGPD & EU AI Act */}
          <div className="space-y-3 md:px-5 last:pr-0">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider font-mono">
              <Scale className="w-4 h-4" />
              <span>RGPD & Ética Digital</span>
            </div>
            <h3 className="text-sm font-bold text-stone-900 font-display">
              Proteção Biometria de Menores
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              O rosto e a voz dos alunos são dados biométricos protegidos (Art. 8.º e 9.º do RGPD) e não devem ser enviados 
              para servidores externos. Além disso, o Regulamento Europeu de IA (Reg. 2024/1689, Art. 50.º) exige que qualquer 
              vídeo gerado seja explicitamente identificado como sintético.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Concept Split: The Cognitive Bridge of Multimedia Pedagogy */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-200 shadow-md">
            <img
              src="/src/assets/images/multimedia_cognitive_pedagogy_concept_1794113538329.jpg"
              alt="Mesa de trabalho de pedagogo com caderno de esboços, storyboard digital, lente e caneca de café"
              className="w-full h-[280px] sm:h-[340px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
              <span className="font-mono text-amber-300 text-[10px] uppercase font-bold">Planeamento & Intencionalidade</span>
              <p className="font-serif-display italic mt-0.5 text-stone-200">Antes do prompt, o guião: como desenhar aprendizagens com sentido.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C05638] uppercase font-mono tracking-wider">
              <Sparkle className="w-4 h-4" />
              <span>Metas Formativas da Ação</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display">
              Três Competências Essenciais para o Professor
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Ao longo deste módulo, exploramos como dominar o potencial do vídeo com IA sem nos perdermos nos aspetos técnicos: 
              compreender os fundamentos da comunicação visual, desenhar guiões rigorosos e liderar projetos inclusivos na escola.
            </p>

            <div className="space-y-3 pt-2">
              {MODULE_OVERVIEW.objectives.map((obj, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex items-start gap-3 hover:border-stone-300 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#C05638] text-white flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-900">
                      {idx === 0 && 'Compreensão Técnica & Crítica'}
                      {idx === 1 && 'Criação Audiovisual & Prompts Rigorosos'}
                      {idx === 2 && 'Integração Curricular & Cidadania Digital'}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
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
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
            Panorama Tecnológico
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display mt-0.5">
            Os Dois Grandes Domínios do Vídeo com IA
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Diferença prática entre a síntese de novo material e a edição inteligente para acessibilidade e inclusão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pillar 1: Generative AI */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#C05638] flex items-center justify-center border border-amber-100">
                  <Film className="w-5 h-5 text-[#C05638]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif-display">
                    IA Generativa de Vídeo
                  </h3>
                  <span className="text-xs text-[#C05638] font-semibold">Síntese Text-to-Video & Image-to-Video</span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Modelos de difusão que transformam descrições textuais em planos de vídeo fluidos. 
                Permitem reconstituir momentos históricos (ex: o Terramoto de 1755 em Lisboa), fenómenos cósmicos 
                ou reações moleculares impossíveis de filmar com uma câmara normal.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100">
                {MODULE_OVERVIEW.videoAICategories[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C05638] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-400 font-mono">Kling AI, Luma Ray 2, InVideo, Perchance</span>
              <button
                onClick={() => onNavigate('tools')}
                className="text-xs text-[#C05638] font-bold hover:text-[#A8492E] flex items-center gap-1 cursor-pointer"
              >
                <span>Ver ferramentas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: AI-Assisted Editing */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#1E523A] flex items-center justify-center border border-emerald-100">
                  <Sliders className="w-5 h-5 text-[#1E523A]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif-display">
                    Edição com IA Integrada
                  </h3>
                  <span className="text-xs text-[#1E523A] font-semibold">Pós-Produção & Inclusão (DUA)</span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Ferramentas que automatizam tarefas morosas da pós-produção: legendagem automática em português de Portugal, 
                remoção inteligente de hesitações/silêncios, corte baseado no guião de texto e traduções multilíngues para acolher alunos estrangeiros.
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100">
                {MODULE_OVERVIEW.videoAICategories[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1E523A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[11px] text-stone-400 font-mono">CapCut, Clipchamp, Canva para Educação</span>
              <button
                onClick={() => onNavigate('advantages')}
                className="text-xs text-[#1E523A] font-bold hover:text-[#143928] flex items-center gap-1 cursor-pointer"
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
