import React, { useState } from 'react';
import { 
  CheckSquare,
  Check,
  Film,
  Sliders,
  CheckCircle2,
  Compass
} from 'lucide-react';
import aiVideoCreativeVisual from '../assets/images/ai_video_creative_visual_1794246803380.jpg';

interface OverviewSectionProps {
  onNavigate?: (tabId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = () => {
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  const toggleChecklistItem = (idx: number) => {
    setCheckedChecklist(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const checklistItems = [
    {
      title: 'Regras da escola',
      desc: 'A ferramenta está autorizada e respeita as regras do agrupamento?'
    },
    {
      title: 'Conta e idade mínima',
      desc: 'Exige registo? Qual é a idade mínima? Os alunos podem utilizá-la?'
    },
    {
      title: 'Custos e limites',
      desc: 'Que créditos, limites de utilização ou custos existem para criar e exportar vídeos?'
    },
    {
      title: 'Privacidade e dados',
      desc: 'Que dados são recolhidos? Onde são armazenados e durante quanto tempo? Consultei a política de privacidade?'
    },
    {
      title: 'Proteção dos dados dos alunos',
      desc: 'Evito carregar nomes, fotografias, vozes ou trabalhos identificáveis dos alunos sem autorização para essa utilização?'
    },
    {
      title: 'Exportação do vídeo',
      desc: 'Consigo exportar o vídeo no formato, qualidade e condições necessárias?'
    },
    {
      title: 'Verificação dos conteúdos',
      desc: 'Confirmei a exatidão da informação, das imagens, da narração e das legendas?'
    },
    {
      title: 'Transparência na utilização da IA',
      desc: 'Informo os alunos sobre a utilização da IA e identifico os conteúdos gerados ou manipulados quando aplicável?'
    },
    {
      title: 'Alternativas de participação',
      desc: 'Existe uma alternativa para os alunos que não possam aceder ou utilizar a ferramenta?'
    },
    {
      title: 'Objetivo pedagógico',
      desc: 'O vídeo contribui efetivamente para as aprendizagens ou serve apenas para criar um efeito visual?'
    }
  ];

  const generativeExamples = [
    'Criar vídeos educativos sem gravação tradicional.',
    'Gerar avatares falantes para apresentações e explicações.',
    'Transformar conteúdos curriculares em vídeo.',
    'Criar animações explicativas de forma rápida.'
  ];

  const editingExamples = [
    'Gerar legendas e transcrições automáticas.',
    'Traduzir legendas e, quando disponível, adaptar a locução a outras línguas.',
    'Preparar versões dos vídeos com diferentes níveis de apoio e complexidade.',
    'Combinar legendas, transcrições, áudio e elementos visuais para facilitar o acesso à informação.'
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

          {/* Right Column: Visual Artwork Without Text */}
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

      {/* 1. SEÇÃO — COMO INTEGRAR A INTELIGÊNCIA ARTIFICIAL DE VÍDEO NA PRÁTICA DOCENTE? */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start sm:items-center justify-between gap-4 border-b border-[#EAF2FA] pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0 border border-[#CEE2F7]">
              <Compass className="w-6 h-6 text-[#0966C2]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
                Como integrar a Inteligência Artificial de Vídeo na prática docente?
              </h2>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
          As ferramentas de Inteligência Artificial de vídeo permitem criar, transformar e adaptar conteúdos audiovisuais para diferentes contextos educativos. O seu potencial pedagógico depende da intencionalidade com que são utilizadas, dos objetivos de aprendizagem e das escolhas do professor.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-1">
          {/* 1. IA de vídeo como apoio ao trabalho docente */}
          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] space-y-2 hover:border-[#0966C2]/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center text-xs font-bold font-mono shrink-0">
                1
              </span>
              <h3 className="font-bold text-sm text-[#08203E] font-serif-display">
                IA de vídeo como apoio ao trabalho docente
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Utilizar ferramentas de IA para transformar conteúdos curriculares em vídeos explicativos, criar introduções a temas, desenvolver demonstrações visuais, sintetizar informação e preparar recursos audiovisuais ajustados às necessidades das turmas.
            </p>
          </div>

          {/* 2. IA de vídeo na criação de recursos educativos */}
          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] space-y-2 hover:border-[#0966C2]/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center text-xs font-bold font-mono shrink-0">
                2
              </span>
              <h3 className="font-bold text-sm text-[#08203E] font-serif-display">
                IA de vídeo na criação de recursos educativos
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explorar ferramentas de IA para gerar vídeos a partir de texto, imagens ou outros conteúdos, criar animações, simular situações, produzir narrativas visuais e desenvolver materiais audiovisuais que tornem as aprendizagens mais dinâmicas e apelativas.
            </p>
          </div>

          {/* 3. IA de vídeo como objeto de aprendizagem */}
          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] space-y-2 hover:border-[#0966C2]/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center text-xs font-bold font-mono shrink-0">
                3
              </span>
              <h3 className="font-bold text-sm text-[#08203E] font-serif-display">
                IA de vídeo como objeto de aprendizagem
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proporcionar aos alunos oportunidades para experimentar a criação de vídeos com IA, desenvolver narrativas audiovisuais, explorar diferentes linguagens visuais e compreender como estas tecnologias funcionam. Promover a análise crítica dos conteúdos gerados, identificando limitações, erros, manipulações e questões relacionadas com os direitos de autor, a privacidade e a utilização responsável da imagem e da voz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OS DOIS GRANDES DOMÍNIOS DO VÍDEO COM IA */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
            Os Dois Grandes Domínios do Vídeo com IA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cartão 1: IA Generativa de Vídeo */}
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
                  <span className="text-xs text-[#874A07] font-semibold font-mono">
                    Texto para vídeo | Imagem para vídeo
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                A IA generativa permite criar novas sequências audiovisuais a partir de instruções escritas ou imagens de referência. É particularmente útil para representar situações, acontecimentos e fenómenos que seriam difíceis, dispendiosos ou impossíveis de filmar.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#08203E] uppercase tracking-wider font-mono block">
                  Exemplos de aplicação educativa:
                </span>
                {generativeExamples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cartão 2: Edição com IA Integrada */}
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
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Algumas ferramentas de IA permitem criar legendas, transcrever áudio, cortar vídeos e traduzir conteúdos. As funcionalidades variam de ferramenta para ferramenta. O professor deve sempre rever os resultados para garantir que estão corretos.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#08203E] uppercase tracking-wider font-mono block">
                  Exemplos de aplicação educativa:
                </span>
                {editingExamples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3.5 border-b border-[#EEF2F6] pb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0 border border-[#CEE2F7]">
            <CheckSquare className="w-6 h-6 text-[#0966C2]" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-[#08203E] font-serif-display leading-snug">
            Antes de utilizar uma ferramenta de Inteligência Artificial na preparação de um vídeo ou numa atividade com os alunos, verifique os seguintes aspetos:
          </h2>
        </div>

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
      </section>
    </div>
  );
};
