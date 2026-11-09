import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { OverviewSection } from './components/OverviewSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ToolsCatalogSection } from './components/ToolsCatalogSection';
import { PromptsBankSection } from './components/PromptsBankSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ToolsComparatorSection } from './components/ToolsComparatorSection';
import { BibliographySection } from './components/BibliographySection';
import { PromptGeneratorModal } from './components/PromptGeneratorModal';
import { EducationalPrompt } from './data/presentationData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState<boolean>(false);
  const [selectedPromptForGenerator, setSelectedPromptForGenerator] = useState<EducationalPrompt | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [toolFilterFromAdvantage, setToolFilterFromAdvantage] = useState<string | undefined>(undefined);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setSearchQuery('');
      setToolFilterFromAdvantage(undefined);
    }
    setActiveTab(tab);
  };

  const handleOpenGenerator = (prompt?: EducationalPrompt) => {
    setSelectedPromptForGenerator(prompt || null);
    setIsGeneratorOpen(true);
  };

  const handleSelectToolFromAdvantage = (toolName: string) => {
    setToolFilterFromAdvantage(toolName);
    setSearchQuery('');
    setActiveTab('tools');
  };

  return (
    <div className="min-h-screen bg-[#041D3A] text-slate-800 flex font-sans antialiased selection:bg-[#FACC15] selection:text-[#041D3A]">
      {/* Left Sidebar Navigation (Desktop Fixed, Mobile Slide-out) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenPromptGenerator={() => handleOpenGenerator()}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Main Workspace (Offset by Sidebar on Desktop, Blue-Sky Theme Matching Mockup) */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 bg-[#F0F5FA] text-[#08203E] min-h-screen">
        {/* Top Navigation Bar with Pill Search, Assistant Trigger and Avatar */}
        <TopNav
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
          onOpenPromptGenerator={() => handleOpenGenerator()}
        />

        {/* Dynamic Content Views */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
          {activeTab === 'overview' && (
            <OverviewSection onNavigate={handleTabChange} />
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
            <BibliographySection />
          )}
        </main>

        {/* Clean Footer without Internal Development Notes */}
        <footer className="border-t border-[#DCE8F6] bg-white/70 px-4 sm:px-8 py-4 text-center text-xs text-slate-500 font-medium">
          <p>Autora e Formadora: Carla Oliveira · Formação 2026</p>
        </footer>
      </div>

      {/* Global Interactive Prompt Generator Modal */}
      <PromptGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        initialPrompt={selectedPromptForGenerator}
      />
    </div>
  );
}
