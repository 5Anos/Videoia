import React from 'react';

interface ToolLogoProps {
  toolId: string;
  size?: 'sm' | 'md' | 'lg' | 'banner';
  className?: string;
}

export const ToolLogo: React.FC<ToolLogoProps> = ({ toolId, size = 'md', className = '' }) => {
  const normalizedId = toolId.toLowerCase();

  switch (normalizedId) {
    case 'invideo':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial InVideo AI">
          <defs>
            <linearGradient id="inv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#0B0F19" />
          <path d="M36 28C36 24.5 40 22.3 43 24.2L74 44.5C77 46.4 77 50.8 74 52.7L43 73C40 74.9 36 72.7 36 69.2V28Z" fill="url(#inv-grad)" />
          <circle cx="48" cy="48" r="6" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );

    case 'kling':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Kling AI">
          <defs>
            <linearGradient id="kling-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="#4FACFE" />
            </linearGradient>
            <linearGradient id="kling-neon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#06121E" />
          <path d="M28 22H38V78H28V22Z" fill="url(#kling-grad)" />
          <path d="M38 52L64 24H78L49 54L80 78H65L38 56V52Z" fill="url(#kling-neon)" />
          <circle cx="70" cy="30" r="4" fill="#38BDF8" />
        </svg>
      );

    case 'luma':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Luma AI Ray3.2">
          <defs>
            <linearGradient id="luma-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#0A0B14" />
          <circle cx="50" cy="50" r="32" stroke="url(#luma-ring)" strokeWidth="4" strokeDasharray="6 4" opacity="0.6" />
          <circle cx="50" cy="50" r="22" stroke="#FFFFFF" strokeWidth="3" />
          <circle cx="50" cy="50" r="10" fill="url(#luma-ring)" />
          <path d="M50 18V28M50 72V82M18 50H28M72 50H82" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'minimax':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial MiniMax Hailuo">
          <defs>
            <linearGradient id="minimax-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#0B132B" />
          <rect x="22" y="42" width="9" height="16" rx="4.5" fill="#FF7A00" />
          <rect x="36" y="28" width="9" height="44" rx="4.5" fill="url(#minimax-grad)" />
          <rect x="50" y="20" width="9" height="60" rx="4.5" fill="#38BDF8" />
          <rect x="64" y="32" width="9" height="36" rx="4.5" fill="url(#minimax-grad)" />
          <rect x="78" y="44" width="9" height="12" rx="4.5" fill="#FF7A00" />
        </svg>
      );

    case 'pika':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Pika">
          <rect width="100" height="100" rx="22" fill="#0D0D11" />
          <path d="M50 16C50 34 34 50 16 50C34 50 50 66 50 84C50 66 66 50 84 50C66 50 50 34 50 16Z" fill="#FF4D00" />
          <circle cx="50" cy="50" r="7" fill="#FFFFFF" />
          <circle cx="74" cy="26" r="4" fill="#FFB703" />
        </svg>
      );

    case 'capcut':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial CapCut">
          <rect width="100" height="100" rx="22" fill="#0A0A0A" />
          <path d="M22 34L44 48L22 62V34Z" fill="#FFFFFF" />
          <path d="M78 34L56 48L78 62V34Z" fill="#FFFFFF" />
          <path d="M44 48L50 52L56 48L50 44L44 48Z" fill="#00E5FF" />
          <path d="M26 68H74" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'canva':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Canva">
          <defs>
            <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="50%" stopColor="#7D2AE8" />
              <stop offset="100%" stopColor="#FF4F99" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="url(#canva-grad)" />
          <circle cx="50" cy="50" r="28" fill="#FFFFFF" opacity="0.15" />
          <path d="M56 36C46 36 38 42 38 52C38 61 45 66 54 66C60 66 65 63 68 60L65 55C62 57 58 59 54 59C48 59 44 56 44 50C44 43 49 42 54 42C58 42 61 44 64 46L67 41C64 38 60 36 56 36Z" fill="#FFFFFF" />
          <circle cx="68" cy="38" r="3.5" fill="#FFFFFF" />
        </svg>
      );

    case 'perchance':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Perchance">
          <defs>
            <linearGradient id="perchance-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#042F2E" />
          <rect x="26" y="26" width="48" height="48" rx="12" fill="url(#perchance-grad)" />
          <circle cx="38" cy="38" r="4.5" fill="#FFFFFF" />
          <circle cx="62" cy="38" r="4.5" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" />
          <circle cx="38" cy="62" r="4.5" fill="#FFFFFF" />
          <circle cx="62" cy="62" r="4.5" fill="#FFFFFF" />
        </svg>
      );

    case 'clipchamp':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Microsoft Clipchamp">
          <defs>
            <linearGradient id="clip-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="clip-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#0F172A" />
          <path d="M26 32C26 27.5 30.5 25 34.5 27.5L54 39L42 58L26 48V32Z" fill="url(#clip-grad1)" />
          <path d="M74 68C74 72.5 69.5 75 65.5 72.5L46 61L58 42L74 52V68Z" fill="url(#clip-grad2)" />
          <path d="M42 58L54 39L74 52L62 71L42 58Z" fill="#A855F7" opacity="0.9" />
          <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'heygen':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial HeyGen">
          <defs>
            <linearGradient id="hey-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#180B2B" />
          <rect x="26" y="24" width="14" height="52" rx="7" fill="url(#hey-grad)" />
          <rect x="60" y="24" width="14" height="52" rx="7" fill="url(#hey-grad)" />
          <rect x="36" y="43" width="28" height="14" rx="7" fill="#FFFFFF" />
          <circle cx="70" cy="30" r="4" fill="#F43F5E" />
        </svg>
      );

    case 'vidnoz':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Vidnoz AI">
          <defs>
            <linearGradient id="vid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#1C1304" />
          <rect x="22" y="32" width="38" height="36" rx="10" fill="url(#vid-grad)" />
          <path d="M60 42L78 30V70L60 58V42Z" fill="url(#vid-grad)" />
          <path d="M43 38L33 50H41L37 62L49 48H41L43 38Z" fill="#08203E" />
        </svg>
      );

    case 'google-flow':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Google Flow">
          <defs>
            <linearGradient id="gflow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="33%" stopColor="#34A853" />
              <stop offset="66%" stopColor="#FBBC05" />
              <stop offset="100%" stopColor="#EA4335" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#0A101D" />
          {/* Google Flow dynamic wave loops */}
          <path d="M24 50C24 38 34 32 44 38C54 44 58 58 68 58C76 58 80 54 80 48" stroke="url(#gflow-grad)" strokeWidth="8" strokeLinecap="round" />
          <path d="M20 54C20 62 26 68 34 68C44 68 48 54 58 54C68 54 74 62 80 62" stroke="#4285F4" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          <circle cx="70" cy="32" r="5" fill="#FBBC05" />
        </svg>
      );

    case 'google-vids':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Google Vids">
          <rect width="100" height="100" rx="22" fill="#08101E" />
          {/* Google Workspace video icon */}
          <rect x="22" y="28" width="40" height="44" rx="10" fill="#4285F4" />
          <path d="M62 40L78 30V70L62 60V40Z" fill="#34A853" />
          <circle cx="42" cy="50" r="9" fill="#FFFFFF" />
          <polygon points="39,45 47,50 39,55" fill="#4285F4" />
          <rect x="22" y="62" width="40" height="10" rx="4" fill="#EA4335" opacity="0.9" />
        </svg>
      );

    case 'pixverse':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial PixVerse">
          <defs>
            <linearGradient id="pix-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#090914" />
          {/* PixVerse portal lens */}
          <circle cx="50" cy="50" r="30" stroke="url(#pix-grad)" strokeWidth="6" />
          <path d="M35 50L60 35V65L35 50Z" fill="url(#pix-grad)" />
          <circle cx="68" cy="32" r="4" fill="#22D3EE" />
        </svg>
      );

    case 'adobe-firefly':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Adobe Firefly">
          <defs>
            <linearGradient id="fire-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF0000" />
              <stop offset="40%" stopColor="#FF5500" />
              <stop offset="100%" stopColor="#FFCC00" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="#1A0505" />
          {/* Adobe Firefly butterfly / paintbrush flame */}
          <path d="M50 20C42 32 30 40 22 52C16 61 20 72 30 74C40 76 46 68 50 60C54 68 60 76 70 74C80 72 84 61 78 52C70 40 58 32 50 20Z" fill="url(#fire-grad)" />
          <circle cx="50" cy="46" r="6" fill="#FFFFFF" />
        </svg>
      );

    case 'runway':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Runway">
          <rect width="100" height="100" rx="22" fill="#050505" />
          {/* Runway iconic geometric R */}
          <path d="M26 24H54C64 24 72 31 72 40C72 49 64 56 54 56H40V76H26V24Z" fill="#FFFFFF" />
          <path d="M52 56L74 76H56L38 60H40L52 56Z" fill="#00FF66" />
          <circle cx="44" cy="40" r="5" fill="#050505" />
        </svg>
      );

    case 'shotcut':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial Shotcut">
          <rect width="100" height="100" rx="22" fill="#0E1B2B" />
          <rect x="22" y="24" width="56" height="52" rx="8" fill="#1E40AF" />
          <circle cx="40" cy="50" r="10" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="60" cy="50" r="10" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M30 38L70 62" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'openshot':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial OpenShot">
          <rect width="100" height="100" rx="22" fill="#09182A" />
          <circle cx="50" cy="50" r="30" fill="#2563EB" />
          <circle cx="50" cy="50" r="18" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="8" fill="#1D4ED8" />
          <path d="M50 20V32M50 68V80M20 50H32M68 50H80" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'obs':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logótipo oficial OBS Studio">
          <rect width="100" height="100" rx="22" fill="#0A0A0A" />
          <circle cx="50" cy="50" r="32" fill="#171717" stroke="#333333" strokeWidth="2" />
          <circle cx="50" cy="40" r="11" fill="#FFFFFF" />
          <circle cx="41" cy="57" r="11" fill="#FFFFFF" />
          <circle cx="59" cy="57" r="11" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="7" fill="#0A0A0A" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="100" height="100" rx="22" fill="#0F172A" />
          <circle cx="50" cy="50" r="24" stroke="#38BDF8" strokeWidth="4" />
          <polygon points="44,38 64,50 44,62" fill="#38BDF8" />
        </svg>
      );
  }
};

interface ToolShowcaseBannerProps {
  toolId: string;
  toolName: string;
  category: string;
}

export const ToolShowcaseBanner: React.FC<ToolShowcaseBannerProps> = ({ toolId, toolName, category }) => {
  const normalizedId = toolId.toLowerCase();

  const themes: Record<string, { bg: string; textCol: string; accentBadge: string; tag: string }> = {
    invideo: {
      bg: 'from-[#180A2E] via-[#2D1254] to-[#0F081D]',
      textCol: 'text-pink-300',
      accentBadge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      tag: 'Geração Completa de Vídeo com Guião'
    },
    kling: {
      bg: 'from-[#031A24] via-[#082E3F] to-[#04121A]',
      textCol: 'text-cyan-300',
      accentBadge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      tag: 'Motor Físico e Realismo de Movimento'
    },
    luma: {
      bg: 'from-[#0D0B24] via-[#1E1747] to-[#0A081A]',
      textCol: 'text-indigo-300',
      accentBadge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      tag: 'Ray3.2 · Câmaras 3D e Sequências Fotorrealistas'
    },
    minimax: {
      bg: 'from-[#061833] via-[#0B2C5A] to-[#051124]',
      textCol: 'text-blue-300',
      accentBadge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      tag: 'Hailuo AI · Movimento Fluido Text/Image-to-Video'
    },
    pika: {
      bg: 'from-[#1F0E05] via-[#381B0B] to-[#120702]',
      textCol: 'text-amber-300',
      accentBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      tag: 'Efeitos Criativos e Dinâmica de Imagem'
    },
    capcut: {
      bg: 'from-[#0A1017] via-[#12202E] to-[#070B10]',
      textCol: 'text-cyan-300',
      accentBadge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      tag: 'Edição Multicanal, Legendas e Áudio'
    },
    canva: {
      bg: 'from-[#05222E] via-[#0C3E4F] to-[#041822]',
      textCol: 'text-teal-300',
      accentBadge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      tag: 'Design Escolar e Vídeo Educativo'
    },
    perchance: {
      bg: 'from-[#04201A] via-[#09382E] to-[#021310]',
      textCol: 'text-emerald-300',
      accentBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      tag: 'Geradores Comunitários (Docentes Adultos 18+)'
    },
    clipchamp: {
      bg: 'from-[#140E2D] via-[#251A4D] to-[#0C081F]',
      textCol: 'text-purple-300',
      accentBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      tag: 'Gravação de Ecrã, Edição e Síntese de Voz'
    },
    heygen: {
      bg: 'from-[#200A2C] via-[#3B1552] to-[#13051C]',
      textCol: 'text-fuchsia-300',
      accentBadge: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
      tag: 'Apresentadores Virtuais e Avatares'
    },
    vidnoz: {
      bg: 'from-[#241703] via-[#452D09] to-[#140D01]',
      textCol: 'text-yellow-300',
      accentBadge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      tag: 'Avatares Educativos e Modelos Prontos'
    },
    'google-flow': {
      bg: 'from-[#08152A] via-[#102B54] to-[#050D1C]',
      textCol: 'text-sky-300',
      accentBadge: 'bg-blue-500/20 text-sky-300 border-blue-500/30',
      tag: '50 Créditos Diários · Google Labs'
    },
    'google-vids': {
      bg: 'from-[#07172A] via-[#0B3A36] to-[#041624]',
      textCol: 'text-emerald-300',
      accentBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      tag: 'Criação e Edição no Google Workspace'
    },
    pixverse: {
      bg: 'from-[#180A2E] via-[#26134D] to-[#0D051A]',
      textCol: 'text-purple-300',
      accentBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      tag: '30 Créditos Diários · Geração Text/Image'
    },
    'adobe-firefly': {
      bg: 'from-[#240808] via-[#481212] to-[#140404]',
      textCol: 'text-amber-300',
      accentBadge: 'bg-red-500/20 text-amber-300 border-red-500/30',
      tag: 'Adobe Creative Cloud · Geração de Vídeo'
    },
    runway: {
      bg: 'from-[#0A0A0A] via-[#1A1A1A] to-[#050505]',
      textCol: 'text-emerald-400',
      accentBadge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      tag: '125 Créditos Únicos de Teste · Gen-3'
    },
    shotcut: {
      bg: 'from-[#081B33] via-[#10305C] to-[#051121]',
      textCol: 'text-blue-300',
      accentBadge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      tag: 'Código Aberto · Edição sem IA'
    },
    openshot: {
      bg: 'from-[#08203E] via-[#0D386E] to-[#051426]',
      textCol: 'text-sky-300',
      accentBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      tag: 'Código Aberto · Montagem de Vídeo'
    },
    obs: {
      bg: 'from-[#121212] via-[#222222] to-[#0A0A0A]',
      textCol: 'text-slate-300',
      accentBadge: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      tag: 'Código Aberto · Gravação de Ecrã e Câmara'
    }
  };

  const theme = themes[normalizedId] || {
    bg: 'from-[#07172A] via-[#0B233D] to-[#04101E]',
    textCol: 'text-cyan-300',
    accentBadge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    tag: category
  };

  return (
    <div className={`aspect-video bg-gradient-to-br ${theme.bg} relative overflow-hidden flex flex-col items-center justify-center p-6 border-b border-[#EEF2F6] select-none group-hover:scale-101 transition-transform duration-300`}>
      {/* Decorative ambient rings */}
      <div className="absolute w-44 h-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent to-black/40 pointer-events-none" />

      {/* Official Brand Logo Icon */}
      <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl shadow-xl shadow-black/40 overflow-hidden ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300 transform group-hover:scale-105">
        <ToolLogo toolId={normalizedId} size="lg" className="w-full h-full" />
      </div>

      {/* Official Name & Badge */}
      <div className="relative z-10 text-center mt-3 space-y-1">
        <div className="text-white font-bold text-sm sm:text-base font-serif-display tracking-wide drop-shadow-sm">
          {toolName}
        </div>
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${theme.accentBadge}`}>
          {theme.tag}
        </span>
      </div>
    </div>
  );
};
