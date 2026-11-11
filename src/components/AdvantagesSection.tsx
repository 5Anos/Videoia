import React, { useState } from 'react';
import { 
  Video, 
  Languages, 
  Scissors, 
  UserCheck, 
  Sliders, 
  Users,
  CheckCircle2, 
  Target,
  Laptop,
  BarChart3,
  AlertTriangle,
  Info,
  Sparkles
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
  6: Users,
};

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onSelectTool }) => {
  const [selectedAdvantageId, setSelectedAdvantageId] = useState<number>(1);

  const currentAdvantage: EducationalAdvantage = 
    TEACHER_ADVANTAGES.find(a => a.id === selectedAdvantageId) || TEACHER_ADVANTAGES[0];
  const CurrentIcon = ADVANTAGE_ICONS[currentAdvantage.id] || Video;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header Card */}
      <section className="bg-gradient-to-br from-[#08203E] via-[#0B3B60] to-[#0966C2] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-md">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-amber-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vídeo com IA</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif-display tracking-tight text-white">
            Vídeo com IA no Ensino e na Aprendizagem
          </h1>

          <div className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              A Inteligência Artificial abre novas possibilidades para criar, adaptar e editar vídeos educativos. Os professores podem produzir videoaulas, legendar e traduzir conteúdos, criar avatares e preparar recursos audiovisuais. Os alunos também podem participar na criação de guiões, vídeos e projetos multimédia, desenvolvendo a criatividade, a comunicação e o pensamento crítico, sempre com orientação e supervisão do professor.
            </p>
          </div>
        </div>

        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Introduction Callout */}
      <div className="bg-[#EBF5FE] border border-[#CDE3F7] rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-[#08203E] font-medium leading-relaxed shadow-2xs flex items-start gap-3">
        <Info className="w-5 h-5 text-[#0966C2] shrink-0 mt-0.5" />
        <p>
          As ferramentas de vídeo com IA podem apoiar a criação, adaptação e edição de recursos educativos. A sua utilidade depende do objetivo pedagógico e da revisão do professor.
        </p>
      </div>

      {/* Advantage Selector Pill Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {TEACHER_ADVANTAGES.map((adv) => {
          const Icon = ADVANTAGE_ICONS[adv.id] || Video;
          const isSelected = adv.id === selectedAdvantageId;

          return (
            <button
              key={adv.id}
              onClick={() => setSelectedAdvantageId(adv.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0966C2] text-white border-[#0966C2] shadow-sm font-bold'
                  : 'bg-white hover:bg-slate-50 border-[#DCE8F6] text-slate-700 hover:text-[#0966C2]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-[#0966C2]'}`} />
              <span>0{adv.id}. {adv.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Active Advantage Header Banner */}
      <section className="bg-white border border-[#DCE8F6] p-6 sm:p-7 rounded-2xl shadow-xs space-y-4">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D6EAFE] border border-[#BBDCFB] text-[#0966C2] flex items-center justify-center shrink-0 shadow-2xs">
            <CurrentIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0966C2]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#0966C2] tracking-wider uppercase block">
              APLICAÇÃO 0{currentAdvantage.id} DE 06
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#08203E] font-serif-display mt-0.5">
              {currentAdvantage.title}
            </h2>
          </div>
        </div>

        {/* 1. Descrição breve */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-1 border-t border-slate-100">
          {currentAdvantage.description}
        </p>
      </section>

      {/* Three Main Practical Columns */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* 2. O QUE PERMITE FAZER */}
        <div className="bg-[#F4F9FE] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
            <Target className="w-4 h-4 text-[#0966C2]" />
            <span>O QUE PERMITE FAZER</span>
          </div>
          <ul className="space-y-2.5 pt-2 flex-1">
            {currentAdvantage.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#DCE8F6] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-snug">{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. FERRAMENTAS PARA EXPERIMENTAR */}
        <div className="bg-[#F4F9FE] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
            <Laptop className="w-4 h-4 text-[#0966C2]" />
            <span>FERRAMENTAS PARA EXPERIMENTAR</span>
          </div>
          <div className="space-y-2.5 pt-2 flex-1">
            {currentAdvantage.usefulTools.map((tool, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white border border-[#DCE8F6] shadow-2xs flex flex-col justify-between gap-2.5">
                <div>
                  <span className="font-bold text-xs sm:text-sm text-[#08203E] font-serif-display">
                    {tool.name}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. VANTAGENS */}
        <div className="bg-[#F4F9FE] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
            <BarChart3 className="w-4 h-4 text-[#0966C2]" />
            <span>VANTAGENS</span>
          </div>
          <ul className="space-y-2.5 pt-2 flex-1">
            {currentAdvantage.teacherBenefits.map((ben, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#DCE8F6] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-snug">{ben}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. ATENÇÃO PEDAGÓGICA */}
      <div className="bg-[#FEF8E7] border border-[#FDE5B5] rounded-2xl p-5 sm:p-6 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FDECBF] text-[#874A07] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-[#874A07]" />
          </div>
          <h3 className="text-xs font-mono font-bold tracking-wider text-[#874A07] uppercase">
            ATENÇÃO PEDAGÓGICA
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#2A1E0E] leading-relaxed font-medium pl-10 sm:pl-10.5">
          {currentAdvantage.pedagogicalNote}
        </p>
      </div>

      {/* General Final Note */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          As funcionalidades podem variar consoante a ferramenta, a versão, o idioma, a conta e o plano. Confirme as condições de utilização antes de planificar a atividade.
        </p>
      </div>
    </div>
  );
};
