import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { HomePageSection } from './components/HomePageSection';
import { OverviewSection } from './components/OverviewSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ToolsCatalogSection } from './components/ToolsCatalogSection';
import { PromptsBankSection } from './components/PromptsBankSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ToolsComparatorSection } from './components/ToolsComparatorSection';
import { BibliographySection } from './components/BibliographySection';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [toolFilterFromAdvantage, setToolFilterFromAdvantage] = useState<string | undefined>(undefined);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setToolFilterFromAdvantage(undefined);
    }
    setActiveTab(tab);
  };

  const handleSelectToolFromAdvantage = (toolName: string) => {
    setToolFilterFromAdvantage(toolName);
    setActiveTab('tools');
  };

  return (
    <div className="min-h-screen bg-[#041D3A] text-slate-800 flex font-sans antialiased selection:bg-[#FACC15] selection:text-[#041D3A]">
      {/* Left Sidebar Navigation (Desktop Fixed, Mobile Slide-out) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Main Workspace */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 bg-[#F0F5FA] text-[#08203E] min-h-screen">
        {/* Mobile Header (Hidden on Desktop) */}
        <TopNav
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
        />

        {/* Dynamic Content Views */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
          {activeTab === 'home' && (
            <HomePageSection onNavigate={handleTabChange} />
          )}

          {activeTab === 'overview' && (
            <OverviewSection onNavigate={handleTabChange} />
          )}

          {activeTab === 'advantages' && (
            <AdvantagesSection onSelectTool={handleSelectToolFromAdvantage} />
          )}

          {activeTab === 'tools' && (
            <ToolsCatalogSection 
              selectedToolFilter={toolFilterFromAdvantage}
            />
          )}

          {activeTab === 'prompts' && (
            <PromptsBankSection />
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

        {/* Clean Footer */}
        <footer className="border-t border-[#DCE8F6] bg-white/70 px-4 sm:px-8 py-4 text-center text-xs text-slate-500 font-medium">
          <p>Autora e Formadora: Carla Oliveira · Formação 2026</p>
        </footer>
      </div>
    </div>
  );
}
