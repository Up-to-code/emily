import { FiHeart, FiMail } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const footerLinks = [
  {
    category: "Product",
    items: ["Features", "Templates", "Pricing"]
  },
  {
    category: "Resources",
    items: ["Documentation", "Blog", "Support"]
  },
  {
    category: "Company",
    items: ["About", "Contact", "Privacy"]
  }
];

export default function Footer() {
  return (
    <footer 
      className="py-16 px-6 border-t"
      style={{ 
        backgroundColor: "#F8F5EE",
        borderColor: "#ddd"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: brandColors.secondary }}
              >
                <FiMail size={20} />
              </div>
              <span className="text-lg font-bold" style={{ color: "#1a1a1a" }}>
                EmailBuilder
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Create beautiful emails that convert with our AI-powered drag-and-drop builder. No coding required.
            </p>
          </div>
          
          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h4 className="font-semibold mb-4" style={{ color: "#1a1a1a" }}>
                {section.category}
              </h4>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="block text-sm transition-colors hover:opacity-70"
                    style={{ color: "#666" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div style={{ borderTop: "1px solid #ddd", margin: "2rem 0" }}></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-2" style={{ color: "#666" }}>
            © 2024 EmailBuilder. Made with 
            <FiHeart size={16} style={{ color: brandColors.secondary }} /> 
            for email creators.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: "#666" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: "#666" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}