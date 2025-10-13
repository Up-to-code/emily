// components/documentation/BestPractices.tsx
import { FiGitBranch } from 'react-icons/fi';

export default function BestPractices() {
  return (
    <section id="best-practices" className="bg-[#FCF6EA] rounded-2xl p-8 border-2 border-[#F5CB9B] mt-16">
      <h2 className="text-3xl font-bold text-[#2D3748] mb-6 flex items-center gap-3">
        <FiGitBranch className="text-[#62BCBA]" />
        Best Practices
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-[#2D3748] mb-3">✅ Do</h4>
          <ul className="space-y-2 text-[#4A5568]">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Use consistent spacing (8px grid)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Maintain brand color hierarchy
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Follow the established border radius scale
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Use hover states for interactive elements
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Test components on multiple screen sizes
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Use semantic HTML elements
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-[#2D3748] mb-3">❌ Don&rsquo;t</h4>
          <ul className="space-y-2 text-[#4A5568]">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Use gradients unless specified
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Change border widths from 2px
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Use complex animations
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Break the established color system
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Override component styles unnecessarily
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Skip accessibility testing
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Guidelines */}
      <div className="mt-8 pt-6 border-t border-[#F5CB9B]">
        <h4 className="font-semibold text-[#2D3748] mb-4">Development Guidelines</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 border border-[#F5CB9B]">
            <h5 className="font-semibold text-[#2D3748] mb-2">Code Quality</h5>
            <ul className="text-[#4A5568] text-sm space-y-1">
              <li>• Use TypeScript for type safety</li>
              <li>• Follow React best practices</li>
              <li>• Write meaningful component names</li>
              <li>• Use descriptive prop names</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#F5CB9B]">
            <h5 className="font-semibold text-[#2D3748] mb-2">Performance</h5>
            <ul className="text-[#4A5568] text-sm space-y-1">
              <li>• Optimize images and assets</li>
              <li>• Use React.memo for expensive components</li>
              <li>• Implement proper loading states</li>
              <li>• Test bundle size impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}