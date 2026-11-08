import React, { useState } from 'react';
import { 
  Video, 
  Languages, 
  Scissors, 
  UserCheck, 
  Sliders, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Clock,
  Layers,
  Brain,
  Quote
} from 'lucide-react';
import { TEACHER_ADVANTAGES, EducationalAdvantage } from '../data/presentationData';

interface AdvantagesSectionProps {
  onSelectTool?: (toolName: string) => void;
}

const ADVANTAGE_ICONS: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Video,
  2: Languages,
  3: Scissors,
  4: UserCheck,
  5: Sliders,
};

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onSelectTool }) => {
  const [selectedAdvantageId, setSelectedAdvantageId] = useState<number>(1);

  const currentAdvantage: EducationalAdvantage = 
    TEACHER_ADVANTAGES.find(a => a.id === selectedAdvantageId) || TEACHER_ADVANTAGES[0];
  const CurrentIcon = ADVANTAGE_ICONS[currentAdvantage.id] || Video;

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Editorial Header Split with Classroom Collaboration Visual */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C05638] uppercase font-mono">
              <Layers className="w-4 h-4" />
              <span>Da Teoria à Prática Docente · Teoria Multimédia de Mayer</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight">
              5 Maneiras Práticas de Usar o Vídeo sem Perder Tempo
            </h1>
            
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Nenhum modelo de difusão substitui a presença atenta e a mediação humana de um professor. 
              O propósito destas ferramentas é estritamente utilitário: poupar horas de trabalho repetitivo, 
              diferenciar o ensino para quem tem dificuldades de leitura ou língua e devolver ao docente 
              o seu bem mais precioso — tempo para estar com os alunos.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-stone-500 font-mono">
              <span>5 Pilares Didáticos</span>
              <span className="text-stone-300">/</span>
              <span>Conforme CTML (Mayer, 2020)</span>
              <span className="text-stone-300">/</span>
              <span className="text-emerald-700 font-semibold">100% Amigo do RGPD</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md relative group">
              <img
                src="/src/assets/images/teacher_student_video_collaboration_1794113537076.jpg"
                alt="Professora e alunas a reverem projeto de vídeo num tablet na sala de aula"
                className="w-full h-[240px] sm:h-[280px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <p className="font-serif-display italic text-stone-200 leading-snug">
                  "Menos tempo a cortar vídeo, mais tempo a escutar perguntas e a guiar o pensamento crítico dos estudantes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {TEACHER_ADVANTAGES.map((adv) => {
          const Icon = ADVANTAGE_ICONS[adv.id] || Video;
          const isSelected = adv.id === selectedAdvantageId;

          return (
            <button
              key={adv.id}
              onClick={() => setSelectedAdvantageId(adv.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-[#181513] text-white border-[#181513] shadow-lg shadow-black/10 ring-2 ring-[#C05638]/40'
                  : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-[#C05638] text-white' : 'bg-stone-100 text-stone-700'
                }`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-500'
                }`}>
                  0{adv.id}
                </span>
              </div>
              <div className="font-semibold text-xs sm:text-sm line-clamp-2 leading-snug">
                {adv.shortTitle || adv.title.replace(/^\d+\.\s*/, '')}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Card for Selected Advantage */}
      <section className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
        {/* Banner */}
        <div className="bg-[#181513] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C05638]/20 border border-[#C05638]/40 flex items-center justify-center text-amber-300">
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-amber-400 font-semibold tracking-wider uppercase font-mono">
                Pilar de Aplicação Pedagógica 0{currentAdvantage.id} de 05
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-serif-display">
                {currentAdvantage.title}
              </h2>
            </div>
          </div>
          <span className="text-xs text-stone-300 bg-stone-800/90 px-3.5 py-1.5 rounded-xl border border-stone-700 font-medium font-mono">
            Foco na Sala de Aula
          </span>
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            {currentAdvantage.description}
          </p>

          {/* Theoretical & Legal Grounding Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F4F9F6] border border-[#D5EADF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E523A] font-mono">
                <Brain className="w-4 h-4 text-[#1E523A]" />
                <span>Enquadramento Cognitivo (Mayer, 2020)</span>
              </div>
              <p className="text-xs text-stone-800 leading-relaxed font-medium">
                {currentAdvantage.cognitivePrinciple}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F2] border border-[#FDE3CA] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309] font-mono">
                <ShieldAlert className="w-4 h-4 text-[#B45309]" />
                <span>Alerta RGPD & Regulamento Europeu de IA</span>
              </div>
              <p className="text-xs text-stone-800 leading-relaxed font-medium">
                {currentAdvantage.rgpdNote}
              </p>
            </div>
          </div>

          {/* 3 Practical Columns */}
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {/* Column 1: O que a IA faz */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
                <Sparkles className="w-4 h-4 text-[#C05638]" />
                <span>O que a IA Consegue Fazer</span>
              </div>
              <ul className="space-y-2.5 pt-1 text-xs text-stone-700">
                {currentAdvantage.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200/70">
                    <CheckCircle2 className="w-4 h-4 text-[#C05638] shrink-0 mt-0.5" />
                    <span className="leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Ferramentas de Referência */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
                <Video className="w-4 h-4 text-[#1E523A]" />
                <span>Ferramentas de Referência</span>
              </div>
              <div className="space-y-2.5 pt-1">
                {currentAdvantage.usefulTools.map((tool, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                    <div className="font-bold text-xs text-stone-900 flex items-center justify-between">
                      <span className="font-serif-display text-sm">{tool.name}</span>
                      {onSelectTool && (
                        <button
                          onClick={() => onSelectTool(tool.name)}
                          className="text-[11px] text-[#C05638] hover:text-[#A8492E] flex items-center gap-0.5 cursor-pointer font-bold"
                        >
                          Ver no catálogo <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 mt-1 leading-normal">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Impacto na Prática Docente */}
            <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
                <Clock className="w-4 h-4 text-[#1E523A]" />
                <span>Impacto na Prática Docente</span>
              </div>
              <ul className="space-y-2.5 pt-1 text-xs text-stone-700">
                {currentAdvantage.teacherBenefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200/70">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span className="font-medium text-stone-800 text-xs leading-relaxed">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
