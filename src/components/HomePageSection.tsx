import React from 'react';
import { Target } from 'lucide-react';
import aiVideoCreativeVisual from '../assets/images/ai_video_creative_visual_1794246803380.jpg';

interface HomePageSectionProps {
  onNavigate?: (tabId: string) => void;
}

export const HomePageSection: React.FC<HomePageSectionProps> = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. PRIMEIRA SECÇÃO — BLOCO AZUL */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071F3B] via-[#0B2A4E] to-[#04172C] text-white border border-[#143657] shadow-xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-7 space-y-6">
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

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Explore o potencial da Inteligência Artificial na criação de recursos educativos! Descubra ferramentas, experimente novas possibilidades e conheça exemplos práticos para criar vídeos, animações, avatares e atividades que podem dar uma nova dinâmica às suas aulas.
            </p>
          </div>

          {/* Coluna Direita: Imagem Original */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group bg-[#071526]">
              <img
                src={aiVideoCreativeVisual}
                alt="Composição visual de criatividade audiovisual e Inteligência Artificial na Educação"
                className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEGUNDA SECÇÃO — FUNDO BRANCO: OBJETIVOS DO MÓDULO */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3.5 border-b border-[#EEF2F6] pb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0 border border-[#CEE2F7]">
            <Target className="w-6 h-6 text-[#0966C2]" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
            Objetivos Módulo 3:
          </h2>
        </div>

        <ul className="space-y-3.5">
          <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] hover:border-[#0966C2]/40 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0966C2] shrink-0 mt-2" />
            <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Conhecer diferentes ferramentas de IA úteis na educação.
            </span>
          </li>
          <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] hover:border-[#0966C2]/40 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0966C2] shrink-0 mt-2" />
            <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Experimentar ferramentas de IA para texto, imagem, áudio e vídeo.
            </span>
          </li>
          <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] hover:border-[#0966C2]/40 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0966C2] shrink-0 mt-2" />
            <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Criar recursos educativos com apoio da IA (planos de aula, apresentações, atividades e vídeos).
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
