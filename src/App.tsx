import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ToolsCatalogSection } from './components/ToolsCatalogSection';
import { PromptsBankSection } from './components/PromptsBankSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ToolsComparatorSection } from './components/ToolsComparatorSection';
import { BibliographySection } from './components/BibliographySection';
import { PromptGeneratorModal } from './components/PromptGeneratorModal';
import { PrintableGuideModal } from './components/PrintableGuideModal';
import { EducationalPrompt } from './data/presentationData';
import { 
  GraduationCap, 
  BookOpen, 
  Printer,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState<boolean>(false);
  const [selectedPromptForGenerator, setSelectedPromptForGenerator] = useState<EducationalPrompt | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [toolFilterFromAdvantage, setToolFilterFromAdvantage] = useState<string | undefined>(undefined);

  const handleOpenGenerator = (prompt?: EducationalPrompt) => {
    setSelectedPromptForGenerator(prompt || null);
    setIsGeneratorOpen(true);
  };

  const handleSelectToolFromAdvantage = (toolName: string) => {
    setToolFilterFromAdvantage(toolName);
    setActiveTab('tools');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans antialiased selection:bg-[#C05638] selection:text-white">
      {/* Sticky Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setToolFilterFromAdvantage(undefined);
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenPromptGenerator={() => handleOpenGenerator()}
        onPrintGuide={() => setIsPrintModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {activeTab === 'overview' && (
          <OverviewSection onNavigate={(tab) => setActiveTab(tab)} />
        )}

        {activeTab === 'advantages' && (
          <AdvantagesSection onSelectTool={handleSelectToolFromAdvantage} />
        )}

        {activeTab === 'tools' && (
          <ToolsCatalogSection 
            searchQuery={searchQuery} 
            selectedToolFilter={toolFilterFromAdvantage}
          />
        )}

        {activeTab === 'prompts' && (
          <PromptsBankSection 
            searchQuery={searchQuery} 
            onUsePromptInGenerator={(prompt) => handleOpenGenerator(prompt)}
          />
        )}

        {activeTab === 'activities' && (
          <ActivitiesSection />
        )}

        {activeTab === 'comparator' && (
          <ToolsComparatorSection />
        )}

        {activeTab === 'bibliography' && (
          <BibliographySection onPrintGuide={() => setIsPrintModalOpen(true)} />
        )}
      </main>

      {/* Global Interactive Modals */}
      <PromptGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        initialPrompt={selectedPromptForGenerator}
      />

      <PrintableGuideModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200/90 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#181513] text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <p className="font-bold text-stone-900 font-serif-display text-sm">
                  Formação Contínua de Docentes · Módulo 3: Ferramentas de Vídeo com IA
                </p>
                <p className="text-stone-500 text-[11px]">
                  Autora e Formadora: Carla Oliveira · Formação 2026 · Pronta para Publicação no GitHub
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-stone-500">
              <button
                onClick={() => setActiveTab('overview')}
                className="hover:text-[#C05638] transition-colors cursor-pointer"
              >
                Visão Pedagógica
              </button>

              <span className="text-stone-300">·</span>

              <button
                onClick={() => setActiveTab('comparator')}
                className="hover:text-[#C05638] transition-colors cursor-pointer"
              >
                Comparador & RGPD
              </button>

              <span className="text-stone-300">·</span>

              <button
                onClick={() => setActiveTab('bibliography')}
                className="hover:text-[#C05638] transition-colors cursor-pointer"
              >
                Bibliografia APA 7th
              </button>

              <span className="text-stone-300">·</span>

              <button
                onClick={() => setIsPrintModalOpen(true)}
                className="hover:text-[#C05638] transition-colors inline-flex items-center gap-1.5 cursor-pointer font-bold text-stone-800"
              >
                <Printer className="w-3.5 h-3.5 text-[#C05638]" />
                <span>Ficha Pedagógica (PDF)</span>
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
            <p>
              Plataforma pedagógica aberta concebida para formação docente, alinhada com o Perfil dos Alunos à Saída da Escolaridade Obrigatória.
            </p>
            <p className="flex items-center gap-1.5 text-stone-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Conforme com RGPD (Art. 8.º e 9.º) e Regulamento Europeu de IA (Reg. 2024/1689, Art. 50.º)</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
