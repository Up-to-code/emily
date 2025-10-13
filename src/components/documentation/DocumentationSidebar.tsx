// components/documentation/DocumentationSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiBook, 
  FiHome,
  FiCompass, 
  FiPackage, 
  FiCode, 
  FiGitBranch, 
  FiPlayCircle,
  FiCheckCircle
} from 'react-icons/fi';
import { documentationData } from '@/data/documentationData';

// Icon mapping for dynamic icons
const iconMap = {
  FiHome: FiHome,
  FiCompass: FiCompass,
  FiPackage: FiPackage,
  FiCode: FiCode,
  FiGitBranch: FiGitBranch,
  FiPlayCircle: FiPlayCircle,
  FiCheckCircle: FiCheckCircle
};

export default function DocumentationSidebar() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    const currentPath = pathname.replace('/doc', '') || '/';
    const targetPath = slug ? `/${slug}` : '/';
    
    // Handle exact matches and subpaths
    if (currentPath === targetPath) return true;
    if (targetPath === '/' && currentPath === '') return true;
    return false;
  };

  // Group pages by category for sidebar organization
  const categoryGroups = {
    'getting-started': {
      title: 'Getting Started',
      pages: documentationData.pages.filter(page => page.category === 'getting-started')
    },
    'overview': {
      title: 'Overview',
      pages: documentationData.pages.filter(page => page.category === 'components' || page.category === 'design')
    },
    'development': {
      title: 'Development',
      pages: documentationData.pages.filter(page => page.category === 'development')
    },
    'resources': {
      title: 'Resources',
      pages: documentationData.pages.filter(page => page.category === 'resources')
    }
  };

  return (
    <div className="w-80 bg-[#FCF6EA] border-r-2 border-[#F5CB9B] min-h-screen p-6 sticky top-0">
      {/* Logo/Brand */}
      <div className="mb-8">
        <Link href="/doc" className="flex items-center gap-3 group">
          <div className="bg-[#62BCBA] rounded-xl p-3 text-white group-hover:bg-[#F78D50] transition-colors duration-300">
            <FiBook className="text-2xl" />
          </div>
          <div>
            <h1 className="font-bold text-[#2D3748] text-lg">Emailly Docs</h1>
            <p className="text-[#4A5568] text-sm">v1.0.0</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-y-8">
        {Object.entries(categoryGroups).map(([categoryKey, group]) => (
          <div key={categoryKey}>
            <h3 className="font-semibold text-[#2D3748] mb-4 text-sm uppercase tracking-wide">
              {group.title}
            </h3>
            <div className="space-y-2">
              {group.pages.map((page) => {
                const IconComponent = iconMap[page.icon as keyof typeof iconMap] || FiHome;
                const active = isActive(page.slug);
                const href = `/doc${page.slug ? `/${page.slug}` : ''}`;
                
                return (
                  <Link
                    key={page.id}
                    href={href}
                    className={`block p-3 rounded-xl transition-all duration-300 group ${
                      active
                        ? 'bg-[#62BCBA] text-white shadow-lg'
                        : 'text-[#4A5568] hover:text-[#2D3748] hover:bg-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`text-lg ${
                        active ? 'text-white' : 'text-[#62BCBA] group-hover:text-[#F78D50]'
                      } transition-colors duration-300`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{page.title}</div>
                        <div className={`text-xs ${
                          active ? 'text-white/80' : 'text-[#4A5568]'
                        } truncate`}>
                          {page.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Quick Help */}
      <div className="mt-12 p-4 bg-white rounded-xl border border-[#F5CB9B]">
        <h4 className="font-semibold text-[#2D3748] text-sm mb-2">Need Help?</h4>
        <p className="text-[#4A5568] text-xs mb-3">
          Check our documentation or contact support.
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/your-repo"
            className="flex-1 text-center bg-[#F78D50] text-white text-xs py-2 px-3 rounded-lg font-medium hover:bg-[#E67C3F] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:support@emailly.com"
            className="flex-1 text-center bg-white text-[#62BCBA] border border-[#62BCBA] text-xs py-2 px-3 rounded-lg font-medium hover:bg-[#62BCBA] hover:text-white transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </div>

      {/* Version Info */}
      <div className="mt-4 text-center">
        <div className="text-xs text-[#4A5568]">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}