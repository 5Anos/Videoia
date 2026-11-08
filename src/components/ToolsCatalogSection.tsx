import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  Play, 
  Image as ImageIcon, 
  Layers, 
  UserCheck, 
  Globe, 
  Info,
  Maximize2,
  X,
  FileVideo,
  Gift,
  ShieldCheck,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Cpu
} from 'lucide-react';
import { TOOLS_CATALOG, ToolCatalogItem } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';

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
  const [showHeyGenVideo, setShowHeyGenVideo] = useState<boolean>(false);
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
    { id: 'free-no-login', label: '100% Grátis & Sem Registo' },
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
      return tool.id === 'perchance' || tool.freeTierDetails.toLowerCase().includes('100% gratuito');
    }

    return true;
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Editorial Studio Hero Card */}
      <section className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C05638] uppercase font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Seleção Pedagógica · Análise Prática de Ferramentas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-serif-display leading-tight">
              Catálogo de Ferramentas de Vídeo com IA para Professores
            </h1>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Guia prático sobre o software de vídeo mais relevante para a escola: limites reais de utilização gratuita, 
              idade mínima dos alunos, pontos fortes didáticos e salvaguardas de privacidade.
            </p>

            {/* Interactive Category Segmented Control */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#181513] text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700 border border-stone-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md relative group">
              <img
                src="/src/assets/images/ai_video_creative_studio_workspace_1794113537764.jpg"
                alt="Estúdio criativo de edição e geração de vídeo com IA com monitores e linha temporal"
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-mono text-amber-300 text-[10px] uppercase font-bold">Bancada de Testes</span>
                <p className="font-serif-display italic text-stone-200 mt-0.5 leading-snug">
                  Todas as quotas e restrições foram testadas na ótica de uma turma real de 25 alunos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filteredTools.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 p-8">
          <Info className="w-10 h-10 text-stone-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-stone-800 font-serif-display">Nenhuma ferramenta encontrada</h3>
          <p className="text-xs text-stone-500 mt-1">Tente ajustar a sua pesquisa ou clique noutra categoria de ferramentas.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isFactCheckOpen = expandedFactChecks[tool.id] || false;

            return (
              <div 
                key={tool.id}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Tool Card Header */}
                  <div className="p-6 border-b border-stone-100 bg-[#FCFAF7]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {tool.badge && (
                          <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-stone-200/80 text-stone-800 mb-2 font-mono">
                            {tool.badge}
                          </span>
                        )}
                        <h2 className="text-lg font-bold text-stone-900 group-hover:text-[#C05638] transition-colors font-serif-display">
                          {tool.name}
                        </h2>
                        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mt-0.5">
                          <span>{tool.category}</span>
                          <span>·</span>
                          <span className="font-semibold text-stone-800">{tool.factCheckStatus.freeStatus}</span>
                        </div>
                      </div>

                      <a
                        href={tool.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors border border-stone-200 shrink-0 shadow-2xs"
                        title={`Abrir página oficial do ${tool.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-xs text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                      {tool.shortDesc}
                    </p>
                  </div>

                  {/* Screenshots or Styled Fallback Container */}
                  {tool.screenshots && tool.screenshots.length > 0 ? (
                    <div className="relative bg-stone-900 aspect-video overflow-hidden">
                      <img 
                        src={tool.screenshots[0].url} 
                        alt={tool.screenshots[0].caption || tool.name}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <button
                        onClick={() => setActiveImageZoom({ url: tool.screenshots[0].url, title: `${tool.name} - ${tool.screenshots[0].caption || 'Screenshot'}` })}
                        className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs backdrop-blur-xs transition-all cursor-pointer"
                        title="Ampliar captura de ecrã"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      {tool.screenshots[0].caption && (
                        <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[11px] text-stone-200 truncate">
                          {tool.screenshots[0].caption}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 bg-[#FAF8F5] border-b border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#C05638]" />
                        Modelo: Text-to-Video de Alta Resolução
                      </span>
                      <span className="text-[11px] text-stone-400">Verificado 2026</span>
                    </div>
                  )}

                  {/* HeyGen Video Embed Highlight */}
                  {tool.demoEmbedUrl && (
                    <div className="p-3 bg-amber-50/70 border-y border-amber-200/60 flex items-center justify-between text-xs">
                      <span className="text-amber-900 font-semibold flex items-center gap-1.5">
                        <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                        Vídeo de Demonstração HeyGen
                      </span>
                      <button
                        onClick={() => setShowHeyGenVideo(!showHeyGenVideo)}
                        className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs transition-colors cursor-pointer"
                      >
                        {showHeyGenVideo ? 'Ocultar Player' : 'Ver Vídeo'}
                      </button>
                    </div>
                  )}

                  {tool.demoEmbedUrl && showHeyGenVideo && (
                    <div className="p-3 bg-stone-950 aspect-video">
                      <iframe
                        src={tool.demoEmbedUrl}
                        title="HeyGen video player demo"
                        className="w-full h-full rounded-xl border-0"
                        allow="encrypted-media; fullscreen"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* CapCut Demo Video Link */}
                  {tool.demoDriveUrl && (
                    <div className="p-3 bg-indigo-50/70 border-y border-indigo-200/60 flex items-center justify-between text-xs">
                      <span className="text-indigo-900 font-semibold flex items-center gap-1.5">
                        <FileVideo className="w-3.5 h-3.5 text-indigo-600" />
                        Exemplo Didático: 'Pequenos Matemáticos'
                      </span>
                      <a
                        href={tool.demoDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors inline-flex items-center gap-1"
                      >
                        <span>Abrir no Drive</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Pedagogical Analysis Drawer */}
                  <div className="p-4 border-b border-stone-100 bg-stone-50/70">
                    <button
                      onClick={() => toggleFactCheck(tool.id)}
                      className="w-full flex items-center justify-between text-left text-xs font-bold text-stone-800 hover:text-[#C05638] cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Análise Prática & Dicas para a Aula</span>
                      </div>
                      {isFactCheckOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400" />
                      )}
                    </button>

                    {isFactCheckOpen && (
                      <div className="mt-3 pt-3 border-t border-stone-200 space-y-2 text-xs animate-in slide-in-from-top-1 duration-150">
                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                          <span className="font-bold block text-[11px] uppercase tracking-wide text-emerald-800 font-mono">
                            ✓ Pontos Fortes na Aprendizagem:
                          </span>
                          <span className="leading-relaxed">{tool.factCheckStatus.whatIsFact}</span>
                        </div>

                        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950">
                          <span className="font-bold block text-[11px] uppercase tracking-wide text-amber-800 font-mono">
                            ⚠ Aspetos Práticos a Ter em Conta:
                          </span>
                          <span className="leading-relaxed">{tool.factCheckStatus.whatIsMisleading}</span>
                        </div>

                        <div className="text-[11px] text-stone-700 pt-1">
                          <strong>Recomendação para a Aula:</strong> {tool.factCheckStatus.teacherVerdict}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Free Tier Details & GDPR */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1 font-mono">
                        <Gift className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Versão Gratuita Real</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-normal">
                        {tool.freeTierDetails}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 text-[11px]">
                      <span className="text-stone-500">Risco RGPD:</span>
                      <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${
                        tool.factCheckStatus.rgpdRiskLevel.includes('Alto') 
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : tool.factCheckStatus.rgpdRiskLevel.includes('Médio')
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {tool.factCheckStatus.rgpdRiskLevel}
                      </span>
                    </div>

                    {tool.requiresEnglishPrompt && (
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                        ⚠️ Atenção: Os prompts têm de ser formulados em inglês nesta ferramenta para garantir fidelidade ao guião.
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedToolModal(tool)}
                    className="text-xs font-bold text-[#C05638] hover:text-[#A8492E] transition-colors cursor-pointer"
                  >
                    Ver Ficha Completa +
                  </button>

                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-[#181513] hover:bg-stone-800 text-white transition-all shadow-2xs cursor-pointer"
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

      {/* Full Tool Detail Modal */}
      {selectedToolModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 border-b border-stone-200 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold text-[#C05638] uppercase tracking-wider font-mono">
                  Ficha Pedagógica e Técnica
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-0.5 font-serif-display">
                  {selectedToolModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedToolModal(null)}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono mb-1.5">
                  Descrição & Enquadramento na Formação
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedToolModal.fullDesc}
                </p>
              </div>

              {/* Practical Evaluation Box in Modal */}
              <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase text-stone-900 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Avaliação Didática e Proteção de Dados</span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                    <strong className="block text-emerald-800 text-[11px] uppercase">Pontos Fortes:</strong>
                    <span>{selectedToolModal.factCheckStatus.whatIsFact}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950">
                    <strong className="block text-amber-800 text-[11px] uppercase">Aspetos a Considerar:</strong>
                    <span>{selectedToolModal.factCheckStatus.whatIsMisleading}</span>
                  </div>
                </div>

                <div className="text-xs text-stone-700 pt-1 border-t border-stone-200/80">
                  <strong>Recomendação para a Aula:</strong> {selectedToolModal.factCheckStatus.teacherVerdict}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono mb-2">
                  Funcionalidades Principais
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedToolModal.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedagogical Use Cases */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono mb-2">
                  Ideias de Aplicação Pedagógica
                </h4>
                <ul className="space-y-2">
                  {selectedToolModal.pedagogicalUseCases.map((useCase, i) => (
                    <li key={i} className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/80 text-xs text-stone-800 flex items-start gap-2">
                      <span className="text-[#C05638] font-bold">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono mb-2">
                  Limitações e Cuidados
                </h4>
                <div className="space-y-1.5">
                  {selectedToolModal.limitations.map((lim, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{lim}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <a
                  href={selectedToolModal.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C05638] hover:bg-[#A8492E] text-white text-xs font-bold transition-all shadow-md shadow-[#C05638]/20"
                >
                  <span>Aceder ao Site Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {activeImageZoom && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImageZoom(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActiveImageZoom(null)}
              className="absolute -top-10 right-0 text-white text-xs font-bold flex items-center gap-1 hover:text-amber-400"
            >
              Fechar ✕
            </button>
            <img 
              src={activeImageZoom.url} 
              alt={activeImageZoom.title} 
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-xs text-stone-300 mt-2 font-mono">
              {activeImageZoom.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
