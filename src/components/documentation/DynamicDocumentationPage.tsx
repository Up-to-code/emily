// components/documentation/DynamicDocumentationPage.tsx
import { DocumentationData, DocumentationPage } from '@/types/documentation';
import DocumentationHeader from './DocumentationHeader';
import ComponentsOverview from './ComponentsOverview';
import DevelopersGuide from './DevelopersGuide';
import BestPractices from './BestPractices';
import SupportSection from './SupportSection';
import { FiHome, FiCompass, FiPackage, FiCode, FiGitBranch, FiPlayCircle, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface DynamicDocumentationPageProps {
  pageData: DocumentationPage;
  documentationData: DocumentationData;
}

const iconMap = {
  FiHome,
  FiCompass,
  FiPackage,
  FiCode,
  FiGitBranch,
  FiPlayCircle,
  FiCheckCircle
};

export default function DynamicDocumentationPage({ 
  pageData, 
  documentationData 
}: DynamicDocumentationPageProps) {
  const renderPageContent = () => {
    switch (pageData.content) {
      case 'introduction':
        return <IntroductionContent documentationData={documentationData} />;
      case 'components':
        return (
          <ComponentsOverview 
            components={documentationData.components}
            colorPalette={documentationData.colorPalette}
            designTokens={documentationData.designTokens}
          />
        );
      case 'design-system':
        return (
          <div className="space-y-12">
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FiPackage className="text-[#62BCBA] text-2xl" />
                <h2 className="text-3xl font-bold text-[#2D3748]">Color Palette</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {documentationData.colorPalette.map((color, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-[#F5CB9B]">
                      <div 
                        className="w-16 h-16 rounded-xl border-2 border-[#F5CB9B]"
                        style={{ backgroundColor: color.value }}
                      ></div>
                      <div>
                        <div className="font-semibold text-[#2D3748]">{color.name}</div>
                        <div className="text-[#4A5568] text-sm font-mono mb-1">{color.value}</div>
                        <div className="text-[#4A5568] text-sm">{color.usage}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Design Tokens</h3>
                  <div className="space-y-4">
                    {documentationData.designTokens.map((token, index) => (
                      <div key={index} className="p-4 bg-white rounded-2xl border-2 border-[#F5CB9B]">
                        <div className="font-semibold text-[#2D3748] mb-2">{token.token}</div>
                        <div className="text-[#4A5568] font-mono text-sm bg-[#FCF6EA] p-2 rounded">{token.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'installation':
        return (
          <div className="space-y-12">
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FiPlayCircle className="text-[#62BCBA] text-2xl" />
                <h2 className="text-3xl font-bold text-[#2D3748]">Quick Start</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Prerequisites</h3>
                  <div className="space-y-3">
                    {['Node.js 16.8 or later', 'React 18 or later', 'Tailwind CSS configured', 'TypeScript (recommended)'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FiCheckCircle className="text-green-500" />
                        <span className="text-[#4A5568]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Installation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#2D3748] mb-2">1. Install Dependencies</h4>
                      <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                        npm install react-icons
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'integration':
        return (
          <DevelopersGuide 
            components={documentationData.components}
            integrationSteps={documentationData.integrationSteps}
          />
        );
      case 'api':
        return (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-[#2D3748] mb-8">API Reference</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Component Props</h3>
                  <div className="space-y-4">
                    {documentationData.components.map((component, index) => (
                      <div key={index} className="border-b border-[#F5CB9B] pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-[#2D3748] mb-2">{component.name}</h4>
                        <div className="text-sm font-mono bg-white/50 p-3 rounded mb-2">{component.props}</div>
                        <p className="text-[#4A5568] text-sm">{component.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'best-practices':
        return <BestPractices />;
      default:
        return <div>Page content not found</div>;
    }
  };

  const IconComponent = iconMap[pageData.icon as keyof typeof iconMap] || FiHome;

  return (
    <div className="min-h-screen bg-white">
      <DocumentationHeader
        title={pageData.title}
        description={pageData.description}
        breadcrumb={pageData.id === 'introduction' 
          ? [{ name: 'Documentation', href: '/doc' }]
          : [
              { name: 'Documentation', href: '/doc' },
              { name: pageData.title, href: `/doc/${pageData.slug}` }
            ]
        }
        icon={<IconComponent className="text-[#62BCBA]" />}
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {renderPageContent()}
        
        {/* Related Pages - Don't show on introduction page */}
        {pageData.related && pageData.related.length > 0 && pageData.id !== 'introduction' && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Related Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pageData.related.map(relatedId => {
                const relatedPage = documentationData.pages.find(p => p.id === relatedId);
                if (!relatedPage) return null;
                
                const RelatedIcon = iconMap[relatedPage.icon as keyof typeof iconMap] || FiHome;
                return (
                  <Link
                    key={relatedPage.id}
                    href={`/doc/${relatedPage.slug}`}
                    className="bg-[#FCF6EA] rounded-xl p-4 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <RelatedIcon className="text-[#62BCBA] text-lg" />
                      <div>
                        <h4 className="font-semibold text-[#2D3748] group-hover:text-[#62BCBA] transition-colors duration-300">
                          {relatedPage.title}
                        </h4>
                        <p className="text-[#4A5568] text-sm">{relatedPage.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        <SupportSection />
      </main>
    </div>
  );
}

// Introduction Content Component
function IntroductionContent({ documentationData }: { documentationData: DocumentationData }) {
  const featuredPages = documentationData.pages.filter(page => 
    ['installation', 'components', 'integration'].includes(page.id)
  );

  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section className="mb-16">
        <div className="bg-[#FCF6EA] rounded-2xl p-8 border-2 border-[#F5CB9B]">
          <h2 className="text-2xl font-bold text-[#2D3748] mb-4">Welcome to Emailly! 🎉</h2>
          <p className="text-[#4A5568] mb-6">
            Emailly is a comprehensive React component library designed specifically for email marketing pages. 
            It provides everything you need to build beautiful, responsive, and high-converting email marketing 
            pages in record time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 bg-white rounded-xl border border-[#F5CB9B]">
              <div className="font-semibold text-[#2D3748]">{documentationData.components.length}+ Components</div>
              <div className="text-[#4A5568]">Pre-built and ready to use</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-[#F5CB9B]">
              <div className="font-semibold text-[#2D3748]">100% Responsive</div>
              <div className="text-[#4A5568]">Works on all devices</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-[#F5CB9B]">
              <div className="font-semibold text-[#2D3748]">Easy Customization</div>
              <div className="text-[#4A5568]">Tailwind CSS powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPages.map((page) => {
            const Icon = FiCompass; // Default icon
            return (
              <Link
                key={page.id}
                href={`/doc/${page.slug}`}
                className="bg-white rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-all duration-300 group hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#62BCBA] rounded-xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2D3748] mb-2 group-hover:text-[#62BCBA] transition-colors duration-300">
                      {page.title}
                    </h3>
                    <p className="text-[#4A5568] mb-4">{page.description}</p>
                    <div className="flex items-center text-[#62BCBA] font-semibold group-hover:text-[#F78D50] transition-colors duration-300">
                      Learn more
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* What's Included */}
      <section>
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8">What's Included</h2>
        <div className="space-y-6">
          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-xl font-bold text-[#2D3748] mb-3">🎨 Design System</h3>
            <p className="text-[#4A5568] mb-4">
              Complete design system with color palette, typography scale, spacing system, 
              and design tokens for consistent UI development.
            </p>
            <ul className="text-[#4A5568] space-y-2">
              <li>• Color palette with semantic tokens</li>
              <li>• Typography scale for consistent text hierarchy</li>
              <li>• Spacing system based on 8px grid</li>
              <li>• Border radius and shadow tokens</li>
            </ul>
          </div>

          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-xl font-bold text-[#2D3748] mb-3">⚡ Components</h3>
            <p className="text-[#4A5568] mb-4">
              Production-ready React components built with TypeScript and Tailwind CSS.
            </p>
            <ul className="text-[#4A5568] space-y-2">
              {documentationData.components.slice(0, 5).map(component => (
                <li key={component.id}>• {component.name} - {component.description}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-xl font-bold text-[#2D3748] mb-3">🚀 Developer Experience</h3>
            <p className="text-[#4A5568] mb-4">
              Built with developers in mind. TypeScript support, comprehensive documentation, 
              and easy customization.
            </p>
            <ul className="text-[#4A5568] space-y-2">
              <li>• Full TypeScript support</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Easy customization and theming</li>
              <li>• Comprehensive API documentation</li>
              <li>• Best practices and examples</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}