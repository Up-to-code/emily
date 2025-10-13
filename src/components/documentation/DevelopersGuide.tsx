// components/documentation/DevelopersGuide.tsx
import { Component, IntegrationStep } from '@/types/documentation';
import { FiGitBranch, FiCode, FiPlayCircle } from 'react-icons/fi';

interface DevelopersGuideProps {
  components: Component[];
  integrationSteps: IntegrationStep[];
}

export default function DevelopersGuide({ components, integrationSteps }: DevelopersGuideProps) {
  return (
    <div className="space-y-16">
      {/* Integration Steps */}
      <section id="integration">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8 flex items-center gap-3">
          <FiGitBranch className="text-[#F78D50]" />
          Integration Guide
        </h2>

        <div className="space-y-8">
          {integrationSteps.map((step, index) => (
            <div key={index} className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#62BCBA] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2D3748] mb-2">{step.title}</h3>
                  <p className="text-[#4A5568] mb-4">{step.description}</p>
                  <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                    {step.code}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Reference */}
      <section id="api">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8 flex items-center gap-3">
          <FiCode className="text-[#F78D50]" />
          API Reference
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Props Documentation */}
          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Component Props</h3>
            <div className="space-y-4">
              {components.map((component, index) => (
                <div key={index} className="border-b border-[#F5CB9B] pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-[#2D3748] mb-2">{component.name}</h4>
                  <div className="text-sm font-mono bg-white/50 p-3 rounded mb-2">{component.props}</div>
                  <p className="text-[#4A5568] text-sm">{component.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Examples */}
          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Customization</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#2D3748] mb-3">Custom Data Structure</h4>
                <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                  {`const customSteps = [\n  {\n    step: "1",\n    title: "Your Title",\n    description: "Your description",\n    features: ["Feature 1", "Feature 2"]\n  }\n];`}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#2D3748] mb-3">Style Override</h4>
                <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                  {`// Using CSS Modules\n.overrideCard {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 20px;\n}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="installation">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8 flex items-center gap-3">
          <FiPlayCircle className="text-[#F78D50]" />
          Quick Start
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Installation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2D3748] mb-2">1. Install Dependencies</h4>
                <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                  npm install react-icons
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2D3748] mb-2">2. Project Structure</h4>
                <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                  components/<br/>
                  ├── HowItWorks.tsx<br/>
                  ├── Features.tsx<br/>
                  ├── Pricing.tsx<br/>
                  ├── CTA.tsx<br/>
                  └── Footer.tsx
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B]">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Basic Usage</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2D3748] mb-2">Import Components</h4>
                <div className="bg-[#2D3748] text-white p-4 rounded-xl font-mono text-sm">
                  {`import HowItWorks from '@/components/HowItWorks';\nimport Features from '@/components/Features';\n\nexport default function Home() {\n  return (\n    <>\n      <HowItWorks />\n      <Features />\n    </>\n  );\n}`}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2D3748] mb-2">Requirements</h4>
                <p className="text-[#4A5568]">Make sure Tailwind CSS is properly configured in your project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}