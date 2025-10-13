// components/documentation/ComponentsOverview.tsx
import { Component, ColorToken, DesignToken } from '@/types/documentation';
import { FiCompass, FiPackage } from 'react-icons/fi';

interface ComponentsOverviewProps {
  components: Component[];
  colorPalette: ColorToken[];
  designTokens: DesignToken[];
}

export default function ComponentsOverview({ 
  components, 
  colorPalette, 
  designTokens 
}: ComponentsOverviewProps) {
  return (
    <div className="space-y-16">
      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="#components" className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#62BCBA] rounded-xl p-3 text-white">
              <FiCompass className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#2D3748]">Components</h3>
          </div>
          <p className="text-[#4A5568]">Browse all available components with examples and props</p>
        </a>

        <a href="#colors" className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#F78D50] rounded-xl p-3 text-white">
              <FiPackage className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#2D3748]">Design System</h3>
          </div>
          <p className="text-[#4A5568]">Color palette, typography, and design tokens</p>
        </a>

        <a href="#usage" className="bg-[#FCF6EA] rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#62BCBA] rounded-xl p-3 text-white">
              <FiCompass className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#2D3748]">Getting Started</h3>
          </div>
          <p className="text-[#4A5568]">How to implement and customize components</p>
        </a>
      </div>

      {/* Components Section */}
      <section id="components">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8 flex items-center gap-3">
          <FiCompass className="text-[#62BCBA]" />
          Available Components
        </h2>
        
        <div className="bg-[#FCF6EA] rounded-2xl border-2 border-[#F5CB9B] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 bg-[#62BCBA] text-white p-4 font-semibold">
            <div>Component</div>
            <div>Description</div>
            <div>Props</div>
            <div>Usage</div>
          </div>
          
          {components.map((component, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 border-b border-[#F5CB9B] last:border-b-0 hover:bg-white/50 transition-colors duration-300">
              <div className="font-semibold text-[#2D3748]">{component.name}</div>
              <div className="text-[#4A5568]">{component.description}</div>
              <div className="text-sm text-[#4A5568] font-mono bg-white/50 p-2 rounded">{component.props}</div>
              <div className="text-[#4A5568]">{component.usage}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Palette Section */}
      <section id="colors">
        <h2 className="text-3xl font-bold text-[#2D3748] mb-8 flex items-center gap-3">
          <FiPackage className="text-[#62BCBA]" />
          Design System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Color Palette */}
          <div>
            <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Color Palette</h3>
            <div className="space-y-4">
              {colorPalette.map((color, index) => (
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
          </div>

          {/* Design Tokens */}
          <div>
            <h3 className="text-2xl font-bold text-[#2D3748] mb-6">Design Tokens</h3>
            <div className="space-y-4">
              {designTokens.map((token, index) => (
                <div key={index} className="p-4 bg-white rounded-2xl border-2 border-[#F5CB9B]">
                  <div className="font-semibold text-[#2D3748] mb-2">{token.token}</div>
                  <div className="text-[#4A5568] font-mono text-sm bg-[#FCF6EA] p-2 rounded">{token.value}</div>
                </div>
              ))}
            </div>

            {/* Typography Scale */}
            <div className="mt-8 p-4 bg-white rounded-2xl border-2 border-[#F5CB9B]">
              <h4 className="font-semibold text-[#2D3748] mb-4">Typography Scale</h4>
              <div className="space-y-3">
                {[
                  { size: "48px", usage: "Hero Headings", class: "text-5xl" },
                  { size: "32px", usage: "Section Headings", class: "text-4xl" },
                  { size: "24px", usage: "Card Headings", class: "text-2xl" },
                  { size: "20px", usage: "Subheadings", class: "text-xl" },
                  { size: "18px", usage: "Body Large", class: "text-lg" },
                  { size: "16px", usage: "Body Base", class: "text-base" },
                  { size: "14px", usage: "Small Text", class: "text-sm" }
                ].map((type, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-[#F5CB9B] pb-2 last:border-b-0">
                    <div className={`font-semibold text-[#2D3748] ${type.class}`}>
                      Aa
                    </div>
                    <div className="text-right">
                      <div className="text-[#4A5568] text-sm font-mono">{type.size}</div>
                      <div className="text-[#4A5568] text-xs">{type.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}