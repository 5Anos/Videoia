import React, { useState } from 'react';
import { 
  Video, 
  Languages, 
  Scissors, 
  UserCheck, 
  Sliders, 
  CheckCircle2, 
  Target,
  GraduationCap,
  ShieldCheck,
  Laptop,
  BarChart3,
  Clapperboard,
  ArrowUpRight
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
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Advantage Selector Pill Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {TEACHER_ADVANTAGES.map((adv) => {
          const Icon = ADVANTAGE_ICONS[adv.id] || Video;
          const isSelected = adv.id === selectedAdvantageId;

          return (
            <button
              key={adv.id}
              onClick={() => setSelectedAdvantageId(adv.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0966C2] text-white border-[#0966C2] shadow-sm font-bold'
                  : 'bg-white hover:bg-slate-50 border-[#DCE8F6] text-slate-700 hover:text-[#0966C2]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-[#0966C2]'}`} />
              <span>0{adv.id}. {adv.shortTitle || adv.title.replace(/^\d+\.\s*/, '')}</span>
            </button>
          );
        })}
      </div>

      {/* Main Banner Card (As in User Attachment Screenshot) */}
      <section className="bg-gradient-to-r from-[#EBF5FE] via-[#F4F9FE] to-[#E3F1FD] border border-[#CDE3F7] p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* Blue Rounded Square with Video Camera Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#D6EAFE] border border-[#BBDCFB] text-[#0966C2] flex items-center justify-center shrink-0 shadow-xs">
              <CurrentIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0966C2]" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-[#0966C2] tracking-wider uppercase block">
                PILAR DE APLICAÇÃO PEDAGÓGICA 0{currentAdvantage.id} DE 05
              </span>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#08203E] font-serif-display mt-0.5">
                <span className="border-b-4 border-[#FACC15] pb-0.5 inline-block">
                  {currentAdvantage.title}
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end lg:self-center">
            {/* Blue Clapperboard Graphic Icon */}
            <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#BBDCFB] flex items-center justify-center text-[#0966C2] shadow-2xs">
              <Clapperboard className="w-5 h-5 text-[#0966C2]" />
            </div>
          </div>
        </div>

        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* Introductory Editorial Text */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal px-1">
        {currentAdvantage.description}
      </p>

      {/* Two Side-by-Side Cards (Mayer Framework & Data Protection) */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Cognitive Framework Card (Soft Blue) */}
        <div className="bg-[#EAF3FD] border border-[#CEE2F7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#D6EAFE] text-[#0966C2] flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-[#0966C2]" />
            </div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#0B4B82] uppercase">
              ENQUADRAMENTO COGNITIVO (MAYER, 2020)
            </h2>
          </div>
          <div className="text-xs text-[#132B47] leading-relaxed whitespace-pre-line font-medium">
            {currentAdvantage.cognitivePrinciple}
          </div>
        </div>

        {/* Data Protection Card (Soft Amber / Cream) */}
        <div className="bg-[#FEF8E7] border border-[#FDE5B5] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FDECBF] text-[#874A07] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#874A07]" />
            </div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#874A07] uppercase">
              PROTEÇÃO DE DADOS E UTILIZAÇÃO RESPONSÁVEL
            </h2>
          </div>
          <p className="text-xs text-[#2A1E0E] leading-relaxed font-medium">
            {currentAdvantage.rgpdNote}
          </p>
        </div>
      </div>

      {/* Three Practical Columns (As in Reference Mockup) */}
      <div className="grid md:grid-cols-3 gap-5 pt-2">
        {/* Column 1: O que a IA consegue fazer */}
        <div className="bg-[#EAF3FD] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
              <Target className="w-4 h-4 text-[#0966C2]" />
              <span>O QUE A IA CONSEGUE FAZER</span>
            </div>
            <ul className="space-y-2.5 pt-3">
              {currentAdvantage.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#DCE8F6] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 leading-snug">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Ferramentas de referência */}
        <div className="bg-[#EAF3FD] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
              <Laptop className="w-4 h-4 text-[#0966C2]" />
              <span>FERRAMENTAS DE REFERÊNCIA</span>
            </div>
            <div className="space-y-2.5 pt-3">
              {currentAdvantage.usefulTools.map((tool, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-[#DCE8F6] shadow-2xs flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-xs text-[#08203E] font-serif-display">
                      {tool.name}
                    </span>
                    {onSelectTool && (
                      <button
                        onClick={() => onSelectTool(tool.name)}
                        className="bg-[#D7ECFC] hover:bg-[#C2E2FB] text-[#085294] font-bold px-2.5 py-1 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all shrink-0 cursor-pointer"
                        title={`Ver ${tool.name} no catálogo`}
                      >
                        <span>Ver no catálogo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Impacto na prática docente */}
        <div className="bg-[#EAF3FD] border border-[#CFE3F8] rounded-2xl p-5 shadow-xs space-y-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
              <BarChart3 className="w-4 h-4 text-[#0966C2]" />
              <span>IMPACTO NA PRÁTICA DOCENTE</span>
            </div>
            <ul className="space-y-2.5 pt-3">
              {currentAdvantage.teacherBenefits.map((ben, i) => (
                <li key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#DCE8F6] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 leading-snug">{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
