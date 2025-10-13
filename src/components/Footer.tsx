// components/Footer.tsx
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-base-200 py-12 px-6 border-t border-base-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-base-content">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content">
                E
              </div>
              <span>Emailly</span>
            </div>
            <p className="text-base-content/70 text-sm leading-relaxed">
              Create beautiful emails that convert with our drag-and-drop builder.
            </p>
          </div>
          
          {/* Links */}
          {['Product', 'Resources', 'Company'].map((category) => (
            <div key={category}>
              <h4 className="font-semibold text-base-content mb-4">{category}</h4>
              <div className="space-y-2">
                {['Features', 'Templates', 'Pricing'].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="block text-base-content/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8 text-center">
          <p className="text-base-content/70 text-sm flex items-center justify-center gap-2">
            © 2024 Emailly. Made with <FiHeart className="text-error" /> for email creators.
          </p>
        </div>
      </div>
    </footer>
  );
}