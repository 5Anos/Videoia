import React, { useState } from 'react';
import { 
  ExternalLink, 
  Check, 
  Info,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { TOOLS_CATALOG, NON_AI_TOOLS, ToolCatalogItem } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';
import { ToolLogo } from './ToolLogos';
import studioWorkspaceImg from '../assets/images/ai_video_creative_studio_workspace_1794113537764.jpg';

interface ToolsCatalogSectionProps {
  searchQuery?: string;
  selectedToolFilter?: string;
}

export const ToolsCatalogSection: React.FC<ToolsCatalogSectionProps> = ({ 
  searchQuery = '',
  selectedToolFilter 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Ferramentas' },
    { id: 'text-to-video', label: 'Texto-para-Vídeo / Imagem-para-Vídeo' },
    { id: 'video-editing', label: 'Edição de Vídeo' },
    { id: 'avatars', label: 'Avatares Virtuais' },
    { id: 'subtitles', label: 'Legendagem' },
    { id: 'screen-recording', label: 'Gravação de Ecrã' },
  ];

  const decisionScenarios = [
    {
      id: 1,
      title: 'Quero gerar pequenos clipes a partir de texto ou imagem',
      tools: [
        'Google Flow',
        'Kling AI',
        'Luma AI — Ray3.2',
        'MiniMax — Hailuo AI',
        'PixVerse',
        'Adobe Firefly — Vídeo',
        'Runway'
      ],
      targetCategory: 'text-to-video',
      icon: '🎬',
      note: 'Estas ferramentas permitem gerar clipes visuais a partir de instruções ou imagens, de acordo com o modelo. Os limites, a duração, a resolução e os créditos variam. A geração de clipes não equivale automaticamente à criação de um vídeo pedagógico completo.'
    },
    {
      id: 2,
      title: 'Quero preparar um primeiro vídeo estruturado a partir de um guião',
      tools: ['InVideo AI', 'Google Vids'],
      targetCategory: 'presentation-video',
      icon: '📝',
      note: 'O InVideo AI pode apoiar a criação de um rascunho audiovisual a partir de texto. O Google Vids permite organizar e editar cenas e integrar pequenos clipes gerados por IA. As duas ferramentas têm funcionalidades e limites diferentes; o professor deve rever e montar o vídeo final.'
    },
    {
      id: 3,
      title: 'Quero editar um vídeo que já gravei e rever as legendas',
      tools: [
        'CapCut',
        'Microsoft Clipchamp',
        'Canva para Educação',
        'Shotcut',
        'OpenShot'
      ],
      targetCategory: 'video-editing',
      icon: '✂️',
      note: 'Estas ferramentas permitem editar e organizar conteúdos audiovisuais. A legendagem automática só está disponível em determinadas ferramentas, versões, idiomas e planos. A disponibilidade de Português de Portugal deve ser confirmada na conta utilizada.'
    },
    {
      id: 4,
      title: 'Quero criar um apresentador virtual ou uma personagem que comunica',
      tools: ['HeyGen', 'Vidnoz AI'],
      targetCategory: 'avatars',
      icon: '👤',
      note: 'Estas ferramentas permitem criar vídeos com apresentadores ou avatares virtuais. A qualidade da voz, a disponibilidade de Português de Portugal e a sincronização labial dependem do modelo, do idioma e do plano. Não são garantidas.'
    },
    {
      id: 5,
      title: 'Quero gravar o ecrã, uma demonstração ou uma explicação',
      tools: ['OBS Studio', 'Microsoft Clipchamp', 'Canva para Educação'],
      targetCategory: 'screen-recording',
      icon: '🖥️',
      note: 'O OBS Studio é especialmente indicado para gravação de ecrã, câmara e áudio. O Clipchamp e o Canva disponibilizam opções de gravação e integração em projetos, conforme a conta e a versão. O OBS não é um editor de vídeo.'
    }
  ];

  const filteredTools = TOOLS_CATALOG.filter(tool => {
    const matches = matchesSearch(searchQuery, [
      tool.name,
      tool.shortDesc,
      tool.fullDesc,
      tool.category,
      ...tool.keyFeatures,
      ...tool.pedagogicalUseCases,
      tool.factCheckStatus.whatIsFact,
      tool.factCheckStatus.whatIsMisleading,
      tool.factCheckStatus.teacherVerdict
    ]);
    if (!matches) return false;

    if (selectedToolFilter && tool.name.toLowerCase() !== selectedToolFilter.toLowerCase()) {
      return false;
    }

    if (activeCategory === 'text-to-video') {
      return tool.capabilityTags?.some(tag => tag === 'text-to-video' || tag === 'image-to-video');
    }
    if (activeCategory === 'video-editing') {
      return tool.capabilityTags?.includes('video-editing');
    }
    if (activeCategory === 'avatars') {
      return tool.capabilityTags?.includes('avatars');
    }
    if (activeCategory === 'subtitles') {
      return tool.capabilityTags?.includes('subtitles');
    }
    if (activeCategory === 'screen-recording') {
      return tool.capabilityTags?.includes('screen-recording');
    }

    return true;
  });

  const getAccessBadgeInfo = (tool: ToolCatalogItem) => {
    if (tool.badge) {
      return { label: tool.badge, style: 'bg-amber-50 text-amber-900 border-amber-300' };
    }
    switch (tool.accessType) {
      case 'free-editor':
      case 'completely-free':
        return { label: 'Editor Gratuito', style: 'bg-emerald-50 text-emerald-800 border-emerald-300' };
      case 'education-eligibility':
        return { label: 'Gratuito para Educação', style: 'bg-blue-50 text-blue-800 border-blue-300' };
      case 'recurring-free-credits':
        return { label: 'Créditos Periódicos', style: 'bg-amber-50 text-amber-800 border-amber-300' };
      case 'limited-free-plan':
      case 'freemium':
        return { label: 'Plano Gratuito Limitado', style: 'bg-amber-50 text-amber-800 border-amber-300' };
      case 'one-time-free-trial':
      case 'free-trial':
        return { label: 'Período Experimental', style: 'bg-indigo-50 text-indigo-800 border-indigo-300' };
      case 'community-experimental':
        return { label: 'Comunitário / Aberto', style: 'bg-purple-50 text-purple-800 border-purple-300' };
      case 'paid-or-unconfirmed':
      case 'paid-only':
        return { label: 'Pago / Não Confirmado', style: 'bg-slate-100 text-slate-800 border-slate-300' };
      default:
        return { label: 'Gratuito com Limitações', style: 'bg-amber-50 text-amber-800 border-amber-300' };
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '09/11/2026';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Editorial Studio Hero Card */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Seleção Pedagógica · 16 Ferramentas de IA Analisadas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] font-serif-display leading-tight">
              Catálogo de Ferramentas de Vídeo com IA para Professores
            </h1>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-2xl">
              Guia factual sobre o software de vídeo mais relevante para a prática docente em Portugal: limites reais de utilização gratuita, 
              idade mínima recomendada, pontos fortes didáticos, salvaguardas éticas e ligações à documentação oficial.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#FACC15] text-[#071526] font-bold shadow-xs'
                      : 'bg-[#EAF3FD] hover:bg-[#DCEBFB] text-[#08203E] border border-[#CEE2F7]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#DCE8F6] shadow-xs relative group">
              <img
                src={studioWorkspaceImg}
                alt="Estúdio criativo de edição e geração de vídeo com IA com monitores e linha temporal"
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041D3A]/90 via-[#041D3A]/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-mono text-[#FACC15] text-[10px] uppercase font-bold">Verificação Periódica</span>
                <p className="font-serif-display italic text-slate-100 mt-0.5 leading-snug">
                  As condições, créditos e quotas de utilização variam frequentemente e devem ser confirmadas na página de cada fornecedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide: "Que ferramenta escolher para a minha tarefa?" */}
      <section className="bg-[#F8FAFD] rounded-3xl border border-[#DCE8F6] p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2EDF8] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF3FD] text-[#0966C2] flex items-center justify-center shrink-0 border border-[#CEE2F7]">
              <Compass className="w-5 h-5 text-[#0966C2]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0966C2]">
                Apoio à Decisão Docente
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#08203E] font-serif-display">
                Que ferramenta escolher para a minha tarefa?
              </h2>
            </div>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {decisionScenarios.length} cenários práticos de sala de aula
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {decisionScenarios.map((scen) => (
            <div 
              key={scen.id}
              className="p-5 rounded-2xl bg-white border border-[#DCE8F6] shadow-xs flex flex-col justify-between hover:border-[#0966C2]/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl" role="img" aria-label="ícone do cenário">{scen.icon}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#EAF3FD] text-[#0966C2] border border-[#CEE2F7]">
                    Cenário 0{scen.id}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[#08203E] leading-snug font-serif-display group-hover:text-[#0966C2] transition-colors">
                  {scen.title}
                </h3>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {scen.note}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#EEF2F6] space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#0B4B82] block">
                  Ferramentas recomendadas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {scen.tools.map((t, ti) => (
                    <span 
                      key={ti}
                      className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-[#F0F5FA] text-[#08203E] border border-[#DCE8F6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Tool Cards Grid (Full information visible on each card) */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-[#DCE8F6] p-8 shadow-xs">
          <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-[#08203E] font-serif-display">Nenhuma ferramenta encontrada</h3>
          <p className="text-xs text-slate-500 mt-1">Tente ajustar a sua pesquisa ou selecione outra categoria.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredTools.map((tool) => {
            const badgeInfo = getAccessBadgeInfo(tool);

            return (
              <article 
                key={tool.id}
                className="bg-white rounded-3xl border border-[#DCE8F6] shadow-xs hover:border-[#38BDF8] transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* 1. Nome da ferramenta, logótipo, categoria e identificação de acesso */}
                  <header className="border-b border-[#EEF2F6] pb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl shadow-2xs overflow-hidden shrink-0 ring-1 ring-[#DCE8F6] bg-slate-900 flex items-center justify-center">
                        <ToolLogo toolId={tool.id} size="md" className="w-full h-full" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold font-mono text-[#0B4B82] uppercase tracking-wider">
                            {tool.category}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${badgeInfo.style}`}>
                            {badgeInfo.label}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display">
                          {tool.name}
                        </h2>
                      </div>
                    </div>
                  </header>

                  {/* 1. Descrição */}
                  <section className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Descrição
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {tool.fullDesc}
                    </p>
                  </section>

                  {/* 2. Principais Funcionalidades */}
                  <section className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Principais Funcionalidades
                    </h3>
                    <div className="space-y-1 text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {tool.keyFeatures.map((feat, i) => (
                        <div key={i}>{feat}</div>
                      ))}
                    </div>
                  </section>

                  {/* 3. Tipos de Conteúdo de Entrada */}
                  <section className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Tipos de Conteúdo de Entrada
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {tool.inputTypes.join(' · ')}
                    </p>
                  </section>

                  {/* 4. Cenários de Aplicação em Sala de Aula */}
                  <section className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Cenários de Aplicação em Sala de Aula
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {tool.pedagogicalUseCases.map((useCase, i) => (
                        <p key={i}>
                          <strong>Cenário 0{i + 1}:</strong> {useCase}
                        </p>
                      ))}
                    </div>
                  </section>

                  {/* 5. Requisitos Legais, Idade e Salvaguardas */}
                  <section className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Requisitos Legais, Idade e Salvaguardas
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {tool.factCheckStatus.minimumAge.startsWith('É necessário') ? (
                        <span>
                          {tool.factCheckStatus.minimumAge}
                          {tool.factCheckStatus.rgpdRiskLevel && 
                           tool.factCheckStatus.rgpdRiskLevel !== "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha." && (
                            <> · Nota sobre proteção de dados: {tool.factCheckStatus.rgpdRiskLevel}</>
                          )}
                        </span>
                      ) : (
                        <span>
                          <strong>Idade mínima recomendada:</strong> {tool.factCheckStatus.minimumAge}
                          {tool.factCheckStatus.rgpdRiskLevel && 
                           tool.factCheckStatus.rgpdRiskLevel !== "Não foi realizada uma avaliação jurídica ou técnica de risco nesta ficha." && (
                            <> · Nota sobre proteção de dados: {tool.factCheckStatus.rgpdRiskLevel}</>
                          )}
                        </span>
                      )}
                    </p>
                  </section>

                  {/* 6. Fontes Oficiais da Ferramenta */}
                  <section className="space-y-2 pt-2 border-t border-[#EEF2F6]">
                    <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                      Fontes Oficiais da Ferramenta
                    </h3>
                    {tool.officialSources && tool.officialSources.length > 0 && (
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                        {tool.officialSources.map((source, sIdx) => (
                          <React.Fragment key={sIdx}>
                            {sIdx > 0 && ' · '}
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-[#0966C2] hover:underline"
                            >
                              {source.label}
                            </a>
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 font-mono">
                      Verificado em {formatDate(tool.lastVerified)}
                    </p>
                  </section>
                </div>

                {/* Card Footer: Exclusively single action button «Experimentar» */}
                <div className="p-6 bg-[#F8FAFC] border-t border-[#EEF2F6] flex items-center justify-end">
                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                  >
                    <span>Experimentar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Dedicated Section for Non-AI Free Alternatives */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EEF2F6] pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Alternativas Livres e de Código Aberto</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display mt-1">
              Alternativas gratuitas para editar e gravar vídeo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Software gratuito e de código aberto para edição ou gravação local de conteúdos audiovisuais, sem consumo de créditos de geração de IA. O Shotcut e o OpenShot são editores de vídeo; o OBS Studio permite gravar o ecrã, a câmara e o áudio, mas não é um editor. A utilização de câmara e microfone pode captar dados pessoais, pelo que devem ser respeitadas as permissões, as autorizações e as regras de proteção de dados aplicáveis.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            3 Ferramentas Livres
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NON_AI_TOOLS.map((tool) => (
            <div 
              key={tool.id}
              className="rounded-2xl border border-[#DCE8F6] bg-[#F8FAFD] p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center ring-1 ring-slate-800 shrink-0">
                      <ToolLogo toolId={tool.id} size="md" className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#08203E] font-serif-display group-hover:text-emerald-700 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono block">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center border border-[#DCE8F6] shrink-0"
                    title={`Abrir página oficial de ${tool.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {tool.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#E2EDF8]">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                    Cenários pedagógicos:
                  </span>
                  <ul className="space-y-1">
                    {tool.pedagogicalUseCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2EDF8] flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Código Aberto / Offline
                </span>

                <a
                  href={tool.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Página oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
