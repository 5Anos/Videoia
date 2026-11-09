import React, { useState } from 'react';
import { 
  FileText, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  Sparkle,
  Shield,
  Layers
} from 'lucide-react';
import { BIBLIOGRAPHY, WHAT_WE_DO_NOT_KNOW } from '../data/presentationData';

export const BibliographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Referências' },
    { id: 'Teoria Cognitiva & Multimédia', label: 'Teoria Cognitiva & Multimédia' },
    { id: 'Políticas & Ética de IA', label: 'Políticas & Regulamentação de IA' },
    { id: 'Taxonomia de Aprendizagem', label: 'Taxonomia & Didática' },
    { id: 'Documentação Técnica Oficial', label: 'Documentação Técnica Oficial' }
  ];

  const filteredBibliography = BIBLIOGRAPHY.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-[#0B4B82]" />
            <span>Fundamentação Científica & Rigor Académico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] tracking-tight font-serif-display">
            Bibliografia APA (7.ª edição) & Limites da Ciência
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Fontes científicas em formato APA (7.ª edição) que sustentam as orientações pedagógicas desta formação, 
            diretrizes da UNESCO e OCDE, legislação europeia (RGPD e AI Act) e declaração de incertezas não resolvidas.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 border-b border-[#DCE8F6]">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#FACC15] text-[#071526] font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#08203E] border border-[#DCE8F6] hover:bg-[#F0F5FA]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bibliography Cards (APA 7th Format) */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredBibliography.map((bib, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-[#DCE8F6] shadow-sm hover:border-[#38BDF8] hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                  {bib.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF8E7] text-[#92400E] border border-[#FDE5B5]">
                  {bib.author} ({bib.year})
                </span>
              </div>

              {/* APA 7th Formal Citation */}
              <div className="text-xs sm:text-sm font-semibold text-[#08203E] leading-snug font-sans pl-3 border-l-2 border-[#0284C7]">
                {bib.citation}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed space-y-1">
                <div className="font-bold text-[#08203E] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>Relevância Pedagógica:</span>
                </div>
                <p className="text-[#475569]">{bib.relevanceToEducation}</p>
              </div>

              {bib.criticalAnalysis && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 leading-relaxed">
                  <strong>Análise do Especialista:</strong> {bib.criticalAnalysis}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION: O QUE NÃO SABEMOS (Mandatory Epistemic Limits) */}
      <section className="rounded-3xl border border-[#FDE5B5] bg-[#FEF8E7] p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#FACC15] text-[#071526] flex items-center justify-center font-bold shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#92400E] uppercase tracking-wider font-mono">
                Honestidade Intelectual & Transparência Epistémica
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#78350F] font-serif-display mt-0.5">
                O Que a Ciência e o Mercado Não Sabem em 2026
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-[#92400E] bg-white px-3.5 py-1 rounded-xl border border-[#FDE5B5] hidden sm:inline-block font-mono">
            Incertezas da Investigação
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed max-w-4xl">
          Como especialista em educação, o maior serviço prestado aos professores não é fingir certezas absolutas, 
          mas sim <strong>declarar abertamente aquilo que a investigação e o mercado ainda não conseguem garantir</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {WHAT_WE_DO_NOT_KNOW.map((item) => (
            <div 
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-[#FDE5B5] hover:border-amber-400 transition-all space-y-2 shadow-xs"
            >
              <h3 className="text-xs sm:text-sm font-bold text-[#78350F] flex items-center gap-1.5 font-serif-display">
                <AlertTriangle className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-[#451A03] leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 border-t border-[#FDE5B5] text-[11px] text-[#92400E] font-medium">
                <strong>Impacto na Aula:</strong> {item.pedagogicalImpact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Action Plan Checklist */}
      <section className="p-6 sm:p-10 rounded-3xl bg-white border border-[#DCE8F6] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#EAF3FD] border border-[#CEE2F7] text-[#0B4B82] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#0B4B82]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#08203E] font-serif-display">
                Checklist Pedagógica: Conceber, Mediar e Avaliar Vídeos com IA
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5">
                Guia orientador de boas práticas para antes, durante e após a produção audiovisual em contexto escolar
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-[#0B4B82]">
              1. Antes da Aula (Conceção)
            </span>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Definir objetivo curricular claro (Bloom: nível 'Criar')</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Escolher ferramenta adequada à faixa etária (Perchance para menores sem login)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Testar previamente o prompt e verificar se não ocorrem alucinações científicas</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-emerald-800">
              2. Durante a Aula (Mediação)
            </span>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Apresentar a IA como copiloto e parceira de ideação, nunca como autor final</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ensinar literacia de dados: verificar fontes e questionar enviesamentos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Proibir a introdução de fotos, nomes ou vozes reais de alunos nos geradores</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-[#92400E]">
              3. Após a Aula (Avaliação)
            </span>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>Partilha e visualização crítica coletiva dos trabalhos da turma</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>Debate sobre clareza didática, precisão dos conceitos e respeito pelo DUA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>Aplicação da rubrica com ponderação explícita (0 a 20 valores)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authorship & Technical / Legal Disclaimers */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE8F6] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EEF2F6] pb-4">
          <div>
            <span className="text-[11px] text-[#0B4B82] font-semibold tracking-wide uppercase font-mono">
              Autoria e Formação
            </span>
            <h2 className="text-base sm:text-lg font-bold text-[#08203E] mt-0.5 font-serif-display">
              2026 | Carla Oliveira · Formadora de Professores
            </h2>
            <p className="text-xs text-[#475569] mt-0.5">
              Recursos didáticos e referenciais pedagógicos desenvolvidos para a ação de capacitação docente em vídeo e Inteligência Artificial.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#64748B] pt-1">
          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#08203E] font-mono text-[11px] uppercase">
              <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Tipografia e Privacidade Institucional</span>
            </div>
            <p className="leading-relaxed">
              Esta plataforma utiliza fontes de sistema e webfonts tipográficas. Em implementações institucionais em redes escolares com requisitos restritos de privacidade do RGPD, as fontes podem ser alojadas localmente sem chamadas a servidores de terceiros.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#08203E] font-mono text-[11px] uppercase">
              <Shield className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Condições de Reutilização Pedagógica</span>
            </div>
            <p className="leading-relaxed">
              Licença de reutilização: não especificada. Textos, guiões e materiais estruturados para uso formativo e didático pelos docentes nos seus respetivos agrupamentos escolares.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
