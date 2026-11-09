import React, { useState } from 'react';
import { 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  UserCheck, 
  Info,
  Maximize2,
  X,
  FileVideo,
  ShieldCheck,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TOOLS_CATALOG, ToolCatalogItem } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';
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
  const [selectedToolModal, setSelectedToolModal] = useState<ToolCatalogItem | null>(null);
  const [activeImageZoom, setActiveImageZoom] = useState<{ url: string; title: string } | null>(null);
  const [expandedFactChecks, setExpandedFactChecks] = useState<Record<string, boolean>>({});

  const toggleFactCheck = (toolId: string) => {
    setExpandedFactChecks(prev => ({
      ...prev,
      [toolId]: !prev[toolId]
    }));
  };

  const categories = [
    { id: 'all', label: 'Todas as Ferramentas' },
    { id: 'generative', label: 'Texto-para-Vídeo (Generativo)' },
    { id: 'editing', label: 'Edição & Legendas Automáticas' },
    { id: 'avatars', label: 'Avatares Virtuais' },
    { id: 'free-no-login', label: 'Exploração sem registo' },
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

    if (activeCategory === 'avatars') {
      return tool.category.toLowerCase().includes('avatar') || tool.keyFeatures.some(f => f.toLowerCase().includes('avatar'));
    }
    if (activeCategory === 'generative') {
      return tool.inputTypes.includes('Prompt de Texto') || tool.keyFeatures.some(f => f.toLowerCase().includes('prompt'));
    }
    if (activeCategory === 'editing') {
      return tool.category.toLowerCase().includes('edição') || tool.keyFeatures.some(f => f.toLowerCase().includes('legend'));
    }
    if (activeCategory === 'free-no-login') {
      return tool.id === 'perchance' || tool.freeTierDetails.toLowerCase().includes('sem registo');
    }

    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Editorial Studio Hero Card */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Seleção Pedagógica · Análise Prática de Ferramentas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] font-serif-display leading-tight">
              Catálogo de Ferramentas de Vídeo com IA para Professores
            </h1>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-2xl">
              Guia prático sobre o software de vídeo mais relevante para a escola: limites reais de utilização gratuita, 
              idade mínima dos alunos, pontos fortes didáticos e salvaguardas de privacidade.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#FACC15] text-[#071526] font-bold shadow-sm shadow-amber-300/40'
                      : 'bg-[#EAF3FD] hover:bg-[#DCEBFB] text-[#08203E] border border-[#CEE2F7]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#DCE8F6] shadow-sm relative group">
              <img
                src={studioWorkspaceImg}
                alt="Estúdio criativo de edição e geração de vídeo com IA com monitores e linha temporal"
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041D3A]/90 via-[#041D3A]/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-mono text-[#FACC15] text-[10px] uppercase font-bold">Verificação Contínua</span>
                <p className="font-serif-display italic text-slate-100 mt-0.5 leading-snug">
                  As condições e quotas de utilização variam frequentemente e devem ser confirmadas junto de cada fornecedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filteredTools.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-[#DCE8F6] p-8 shadow-sm">
          <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-[#08203E] font-serif-display">Nenhuma ferramenta encontrada</h3>
          <p className="text-xs text-slate-500 mt-1">Tente ajustar a sua pesquisa ou clique noutra categoria de ferramentas.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isFactCheckOpen = expandedFactChecks[tool.id] || false;

            return (
              <div 
                key={tool.id}
                className="bg-white rounded-3xl border border-[#DCE8F6] shadow-sm hover:shadow-md hover:border-[#38BDF8] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Tool Card Header */}
                  <div className="p-6 border-b border-[#EEF2F6] bg-gradient-to-b from-[#F8FAFC] to-white">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {tool.badge && (
                          <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#FEF8E7] text-[#92400E] border border-[#FDE5B5] mb-2 font-mono">
                            {tool.badge}
                          </span>
                        )}
                        <h2 className="text-lg font-bold text-[#08203E] group-hover:text-[#0284C7] transition-colors font-serif-display">
                          {tool.name}
                        </h2>
                        <div className="flex items-center gap-2 text-xs text-[#64748B] font-medium mt-0.5">
                          <span>{tool.category}</span>
                          <span>·</span>
                          <span className="font-semibold text-[#0B4B82]">{tool.factCheckStatus.freeStatus}</span>
                        </div>
                      </div>

                      <a
                        href={tool.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-[#F0F5FA] hover:bg-[#E2EDF8] text-[#08203E] flex items-center justify-center transition-colors border border-[#DCE8F6] shrink-0 shadow-xs"
                        title={`Abrir página oficial do ${tool.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-xs text-[#475569] mt-3 line-clamp-3 leading-relaxed">
                      {tool.shortDesc}
                    </p>
                  </div>

                  {/* Screenshots or Styled Fallback Container */}
                  {tool.screenshots && tool.screenshots.length > 0 ? (
                    <div className="relative bg-[#041D3A] aspect-video overflow-hidden">
                      <img 
                        src={tool.screenshots[0].url} 
                        alt={tool.screenshots[0].caption || tool.name}
                        className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
                        loading="lazy"
                      />
                      <button
                        onClick={() => setActiveImageZoom({ url: tool.screenshots![0].url, title: `${tool.name} - ${tool.screenshots![0].caption || 'Screenshot'}` })}
                        className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs backdrop-blur-xs transition-all cursor-pointer"
                        title="Ampliar captura de ecrã"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      {tool.screenshots[0].caption && (
                        <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-[11px] text-slate-100 truncate">
                          {tool.screenshots[0].caption}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center border-b border-[#EEF2F6] text-slate-400">
                      <div className="text-center p-4">
                        <FileVideo className="w-8 h-8 mx-auto mb-2 text-[#0284C7]/60" />
                        <span className="text-xs font-mono text-slate-500">{tool.name} Studio</span>
                      </div>
                    </div>
                  )}

                  {/* Badges / Key Specs */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]">
                        <span className="block font-mono text-[10px] text-[#64748B] uppercase">Registo / Idade</span>
                        <span className="font-semibold text-[#08203E]">{tool.factCheckStatus.minimumAge}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]">
                        <span className="block font-mono text-[10px] text-[#64748B] uppercase">Acesso Gratuito</span>
                        <span className="font-semibold text-[#92400E] truncate block" title={tool.freeTierDetails}>
                          {tool.freeTierDetails}
                        </span>
                      </div>
                    </div>

                    {/* Educational Use Case Preview */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#0B4B82] uppercase tracking-wider block">
                        Cenário de Aplicação:
                      </span>
                      <p className="text-xs text-[#334155] line-clamp-2 leading-relaxed">
                        {tool.pedagogicalUseCases[0] || 'Apoio à produção de conteúdos e diferenciação pedagógica.'}
                      </p>
                    </div>

                    {/* Fact Check Toggle Drawer */}
                    <div className="pt-2 border-t border-[#EEF2F6]">
                      <button
                        onClick={() => toggleFactCheck(tool.id)}
                        className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#08203E] hover:text-[#0284C7] cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#0B4B82]">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Auditoria Pedagógica & Fact-Check</span>
                        </span>
                        {isFactCheckOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#0B4B82]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isFactCheckOpen && (
                        <div className="mt-2 space-y-2.5 text-xs animate-in fade-in duration-150">
                          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                            <div className="font-bold flex items-center gap-1 font-mono text-[10px] uppercase text-emerald-800">
                              <Check className="w-3 h-3" />
                              <span>O que é Realidade Comprovada:</span>
                            </div>
                            <p className="text-[11px] text-emerald-800 leading-snug">{tool.factCheckStatus.whatIsFact}</p>
                          </div>

                          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                            <div className="font-bold flex items-center gap-1 font-mono text-[10px] uppercase text-amber-800">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Mito / Exagero de Marketing:</span>
                            </div>
                            <p className="text-[11px] text-amber-800 leading-snug">{tool.factCheckStatus.whatIsMisleading}</p>
                          </div>

                          <div className="p-3 rounded-xl bg-[#EAF3FD] border border-[#CEE2F7] text-[#08203E] space-y-1">
                            <div className="font-bold flex items-center gap-1 font-mono text-[10px] uppercase text-[#0B4B82]">
                              <UserCheck className="w-3 h-3" />
                              <span>Parecer para Professores:</span>
                            </div>
                            <p className="text-[11px] leading-snug text-[#1E293B]">{tool.factCheckStatus.teacherVerdict}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-[#EEF2F6] mt-auto bg-[#F8FAFC]/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedToolModal(tool)}
                    className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1] cursor-pointer py-3"
                  >
                    Ver Ficha Completa
                  </button>

                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Experimentar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tool Detail Modal */}
      {selectedToolModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DCE8F6] text-[#08203E]">
            <div className="p-6 sm:p-8 border-b border-[#EEF2F6] bg-[#F8FAFC] flex items-start justify-between gap-4 sticky top-0 z-10">
              <div>
                <span className="text-[11px] font-bold font-mono text-[#0B4B82] uppercase tracking-wider">
                  {selectedToolModal.category}
                </span>
                <h2 className="text-2xl font-bold text-[#08203E] font-serif-display mt-0.5">
                  {selectedToolModal.name}
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  {selectedToolModal.shortDesc}
                </p>
              </div>
              <button
                onClick={() => setSelectedToolModal(null)}
                className="w-9 h-9 rounded-xl bg-[#F0F5FA] hover:bg-[#E2EDF8] text-[#08203E] flex items-center justify-center border border-[#DCE8F6] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B4B82] uppercase font-mono tracking-wider mb-2">
                  Descrição Aprofundada
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {selectedToolModal.fullDesc}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-bold text-[#0B4B82] uppercase font-mono tracking-wider mb-2">
                  Principais Funcionalidades
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {selectedToolModal.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span className="text-[#334155]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedagogical Scenarios */}
              <div>
                <h3 className="text-sm font-bold text-[#92400E] uppercase font-mono tracking-wider mb-2">
                  Cenários de Aplicação em Sala de Aula
                </h3>
                <div className="space-y-2 text-xs">
                  {selectedToolModal.pedagogicalUseCases.map((useCase, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] leading-relaxed">
                      <strong className="text-[#08203E]">Cenário 0{i + 1}:</strong> {useCase}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal & Age Safeguards */}
              <div className="p-4 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#92400E] font-mono uppercase">
                  <ShieldAlert className="w-4 h-4 text-[#B45309]" />
                  <span>Requisitos Legais, Idade e Salvaguardas</span>
                </div>
                <p className="text-xs text-[#78350F] leading-relaxed">
                  Idade mínima recomendada: {selectedToolModal.factCheckStatus.minimumAge} · Avaliação de conformidade RGPD: {selectedToolModal.factCheckStatus.rgpdRiskLevel}
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#F8FAFC] border-t border-[#EEF2F6] flex items-center justify-between gap-4 sticky bottom-0">
              <span className="text-xs text-[#64748B] font-mono">
                {selectedToolModal.factCheckStatus.freeStatus}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedToolModal(null)}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-[#08203E] text-xs font-semibold border border-[#DCE8F6] cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  href={selectedToolModal.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] text-xs font-bold shadow-xs inline-flex items-center gap-1.5"
                >
                  <span>Abrir Website Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {activeImageZoom && (
        <div 
          onClick={() => setActiveImageZoom(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden border border-[#DCE8F6] shadow-2xl"
          >
            <div className="p-4 bg-[#F8FAFC] border-b border-[#EEF2F6] flex items-center justify-between text-[#08203E] text-xs font-mono">
              <span>{activeImageZoom.title}</span>
              <button 
                onClick={() => setActiveImageZoom(null)}
                className="p-1 rounded-lg hover:bg-[#F0F5FA] text-slate-500 hover:text-[#08203E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img 
              src={activeImageZoom.url} 
              alt={activeImageZoom.title} 
              className="w-full max-h-[80vh] object-contain bg-[#041D3A]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
