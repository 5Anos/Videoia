import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Check, 
  X, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck,
  Scale
} from 'lucide-react';

export const ToolsComparatorSection: React.FC = () => {
  const [filterAvatar, setFilterAvatar] = useState(false);
  const [filterNoLogin, setFilterNoLogin] = useState(false);
  const [filterPromptVideo, setFilterPromptVideo] = useState(false);

  const comparisonData = [
    {
      id: 'invideo',
      name: 'InVideo AI',
      category: 'Vídeo Didático Completo',
      freeTier: 'Gerações grátis semanais com marca de água e exportação 720p',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta necessária)',
      minimumAge: '13+ anos',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: true,
      promptLanguage: 'Português e Inglês',
      difficulty: 'Muito Fácil',
      keyHighlight: 'Transforma um prompt numa aula completa com locução, clips de stock e legendas',
      teacherVerdict: 'A ferramenta mais rápida para o professor preparar um vídeo de introdução a uma matéria.',
      url: 'https://invideo.io/'
    },
    {
      id: 'kling',
      name: 'Kling AI (Kling 1.5)',
      category: 'Cinematográfico & Físico',
      freeTier: 'Créditos diários de boas-vindas com renovação parcial',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta necessária)',
      minimumAge: '13+ anos',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: false,
      promptLanguage: 'Inglês (preferencial) ou PT',
      difficulty: 'Intermédio',
      keyHighlight: 'Líder mundial em coerência de movimento físico, anatomia humana e iluminação',
      teacherVerdict: 'Excelente para reconstituições de fenómenos e cenas que exigem realismo de movimento.',
      url: 'https://klingai.com/'
    },
    {
      id: 'luma',
      name: 'Luma Dream Machine (Ray 2)',
      category: 'Reconstituição Histórica',
      freeTier: 'Aprox. 30 gerações gratuitas mensais na versão web',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta Google)',
      minimumAge: '13+ anos',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: false,
      promptLanguage: 'Inglês (obrigatório para fidelidade)',
      difficulty: 'Intermédio',
      keyHighlight: 'Movimentos de câmara cinematográficos em grande escala e texturas naturais',
      teacherVerdict: 'Ideal para viagens no tempo e reconstituições históricas ou geográficas.',
      url: 'https://lumalabs.ai/dream-machine'
    },
    {
      id: 'minimax',
      name: 'Minimax (Hailuo AI)',
      category: 'Expressões Humanas',
      freeTier: 'Gerações gratuitas diárias acessíveis no portal web',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta necessária)',
      minimumAge: '13+ anos',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: false,
      promptLanguage: 'Inglês e Chinês',
      difficulty: 'Intermédio',
      keyHighlight: 'Expressões faciais naturais e gestos humanos sem distorções grotescas',
      teacherVerdict: 'Muito útil para dramatizações de literatura e empatia histórica.',
      url: 'https://hailuoai.video/'
    },
    {
      id: 'perchance',
      name: 'Perchance AI Video',
      category: '100% Livre para Turmas',
      freeTier: '100% Gratuito sem limites, sem cartão e sem criar conta',
      requiresLogin: false,
      rgpdRisk: 'Baixo (Sem dados pessoais)',
      minimumAge: 'Qualquer idade (com supervisão)',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: false,
      promptLanguage: 'Inglês obrigatório',
      difficulty: 'Muito Fácil',
      keyHighlight: 'A única ferramenta que respeita o RGPD ao não pedir emails, senhas ou dados aos alunos',
      teacherVerdict: 'O porto seguro para colocar turmas do Ensino Básico a gerar vídeos em aula.',
      url: 'https://perchance.org/vido'
    },
    {
      id: 'canva',
      name: 'Canva para Educação',
      category: 'Ecossistema Escolar',
      freeTier: '100% Gratuito para docentes e alunos de escolas públicas/privadas',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta escolar institucional)',
      minimumAge: 'Todas as idades (com domínio escolar)',
      hasAvatars: true,
      hasTextToVideo: true,
      hasSubtitlesTranslation: true,
      promptLanguage: 'Português',
      difficulty: 'Muito Fácil',
      keyHighlight: 'Plataforma completa de apresentação, vídeo colaborativo e filtros de segurança infantil',
      teacherVerdict: 'A solução mais estável e segura para projetos de turma em escolas.',
      url: 'https://www.canva.com/pt_pt/educacao/'
    },
    {
      id: 'capcut',
      name: 'CapCut AI',
      category: 'Edição & Legendas PT',
      freeTier: 'Exportação 1080p grátis sem marca + bónus inicial de 300 créditos IA',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta ByteDance)',
      minimumAge: '13+ anos',
      hasAvatars: true,
      hasTextToVideo: true,
      hasSubtitlesTranslation: true,
      promptLanguage: 'Português',
      difficulty: 'Muito Fácil',
      keyHighlight: 'Legendas automáticas em português com alta precisão e corte por transcrição',
      teacherVerdict: 'Indispensável para o professor tornar qualquer vídeo acessível (DUA).',
      url: 'https://www.capcut.com/'
    },
    {
      id: 'clipchamp',
      name: 'Microsoft Clipchamp',
      category: 'Vozes Neurais PT-PT',
      freeTier: '1080p grátis ilimitado sem marcas de água',
      requiresLogin: true,
      rgpdRisk: 'Baixo/Médio (Ecossistema Microsoft)',
      minimumAge: '13+ anos',
      hasAvatars: false,
      hasTextToVideo: false,
      hasSubtitlesTranslation: true,
      promptLanguage: 'Português (Vozes Azure PT-PT Duarte e Raquel)',
      difficulty: 'Fácil',
      keyHighlight: 'A melhor síntese vocal com pronúncia autêntica de Portugal integrada no Windows',
      teacherVerdict: 'Ideal para criar locuções didáticas sem sotaque estrangeiro.',
      url: 'https://app.clipchamp.com/'
    },
    {
      id: 'heygen',
      name: 'HeyGen',
      category: 'Avatares & Tradução',
      freeTier: 'Trial único de 1 crédito (~1 minuto) com marca de água',
      requiresLogin: true,
      rgpdRisk: 'Alto (Biometria / Voz / Rosto)',
      minimumAge: '18+ anos',
      hasAvatars: true,
      hasTextToVideo: true,
      hasSubtitlesTranslation: true,
      promptLanguage: 'Português e Inglês',
      difficulty: 'Fácil',
      keyHighlight: 'Realismo de avatares e sincronização labial (lip-sync) multilíngue',
      teacherVerdict: 'Excelente para demonstração pelo docente. Inviável como ferramenta gratuita contínua.',
      url: 'https://app.heygen.com/'
    },
    {
      id: 'sora',
      name: 'OpenAI Sora',
      category: 'Física Cinematográfica',
      freeTier: 'Pago / Requer subscrição ChatGPT Plus/Pro',
      requiresLogin: true,
      rgpdRisk: 'Médio (Conta OpenAI)',
      minimumAge: '13+ parental (18+ UE)',
      hasAvatars: false,
      hasTextToVideo: true,
      hasSubtitlesTranslation: false,
      promptLanguage: 'Inglês (obrigatório para fidelidade)',
      difficulty: 'Intermédio',
      keyHighlight: 'Modelos de difusão espaciotemporal e renderização foto-realista',
      teacherVerdict: 'Excelente para ilustrar o estado da arte aos alunos sem criar contas.',
      url: 'https://sora.chatgpt.com/'
    }
  ];

  const filtered = comparisonData.filter(item => {
    if (filterAvatar && !item.hasAvatars) return false;
    if (filterNoLogin && item.requiresLogin) return false;
    if (filterPromptVideo && !item.hasTextToVideo) return false;
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C05638] uppercase font-mono mb-1">
            <Scale className="w-3.5 h-3.5 text-[#C05638]" />
            <span>Matriz Comparativa & Conformidade RGPD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif-display">
            Comparador de Ferramentas de Vídeo com IA
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Quadro comparativo para apoiar a seleção fundamentada da ferramenta: quotas reais gratuitas, 
            idade mínima legal, língua do prompt e parecer ético de sala de aula.
          </p>
        </div>

        {/* Quick Filter Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterNoLogin(!filterNoLogin)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterNoLogin
                ? 'bg-[#1E523A] text-white border-[#1E523A] shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {filterNoLogin ? '✓ Sem Conta (100% Livre)' : '+ Sem Conta (Alunos)'}
          </button>

          <button
            onClick={() => setFilterPromptVideo(!filterPromptVideo)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterPromptVideo
                ? 'bg-[#C05638] text-white border-[#C05638] shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {filterPromptVideo ? '✓ Texto-para-Vídeo' : '+ Texto-para-Vídeo'}
          </button>

          <button
            onClick={() => setFilterAvatar(!filterAvatar)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterAvatar
                ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {filterAvatar ? '✓ Com Avatares' : '+ Com Avatares'}
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#181513] text-stone-200 font-semibold border-b border-stone-800 text-[11px] font-mono uppercase tracking-wider">
                <th className="p-4 sm:p-5 min-w-[170px] text-white">Ferramenta</th>
                <th className="p-4 sm:p-5 min-w-[200px]">Cotas Reais & Grátis</th>
                <th className="p-4 sm:p-5 min-w-[140px]">Risco RGPD / Idade</th>
                <th className="p-4 sm:p-5 text-center min-w-[80px]">Sem Conta</th>
                <th className="p-4 sm:p-5 text-center min-w-[90px]">Texto-Vídeo</th>
                <th className="p-4 sm:p-5 text-center min-w-[80px]">Avatares</th>
                <th className="p-4 sm:p-5 min-w-[130px]">Língua do Prompt</th>
                <th className="p-4 sm:p-5 min-w-[220px]">Veredicto do Especialista</th>
                <th className="p-4 sm:p-5 text-center min-w-[70px]">Acesso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((tool, idx) => (
                <tr 
                  key={tool.id} 
                  className={`hover:bg-stone-50/80 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/50'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-bold text-stone-900">
                    <div className="text-sm font-serif-display">{tool.name}</div>
                    <div className="text-[11px] text-stone-500 font-normal mt-0.5 line-clamp-1">
                      {tool.category}
                    </div>
                  </td>

                  <td className="p-4 sm:p-5 text-stone-700 leading-relaxed font-normal">
                    {tool.freeTier}
                  </td>

                  <td className="p-4 sm:p-5">
                    <span className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold mb-1 ${
                      tool.rgpdRisk.includes('Alto')
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : tool.rgpdRisk.includes('Médio')
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {tool.rgpdRisk}
                    </span>
                    <div className="text-[10px] text-stone-500 font-mono">
                      {tool.minimumAge}
                    </div>
                  </td>

                  <td className="p-4 sm:p-5 text-center">
                    {!tool.requiresLogin ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>

                  <td className="p-4 sm:p-5 text-center">
                    {tool.hasTextToVideo ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>

                  <td className="p-4 sm:p-5 text-center">
                    {tool.hasAvatars ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>

                  <td className="p-4 sm:p-5 text-stone-700">
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                      tool.promptLanguage.includes('obrigatório')
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {tool.promptLanguage}
                    </span>
                  </td>

                  <td className="p-4 sm:p-5 text-stone-700 text-xs leading-relaxed">
                    {tool.teacherVerdict}
                  </td>

                  <td className="p-4 sm:p-5 text-center">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-stone-100 hover:bg-[#181513] text-stone-600 hover:text-white transition-colors"
                      title={`Aceder a ${tool.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
