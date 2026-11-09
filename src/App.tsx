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

  const handleOpenGenerator = (prompt?: EducationalPrompt) => {
    setSelectedPromptForGenerator(prompt || null);
    setIsGeneratorOpen(true);
  };

  const handleSelectToolFromAdvantage = (toolName: string) => {
    setToolFilterFromAdvantage(toolName);
    setActiveTab('tools');
  };

  return (
    <div className="min-h-screen bg-[#071321] text-stone-100 flex font-sans antialiased selection:bg-[#FACC15] selection:text-[#071321]">
      {/* Left Sidebar Navigation (Desktop Fixed, Mobile Slide-out) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setToolFilterFromAdvantage(undefined);
        }}
        onOpenPromptGenerator={() => handleOpenGenerator()}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Main Workspace (Offset by Sidebar on Desktop) */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 bg-[#071321]">
        {/* Top Navigation Bar with Pill Search */}
        <TopNav
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
          onOpenPromptGenerator={() => handleOpenGenerator()}
        />

        {/* Dynamic Content Views */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
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
            <BibliographySection />
          )}
        </main>
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
