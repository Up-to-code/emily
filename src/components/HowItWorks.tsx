import { FiCheck, FiArrowRight } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const steps = [
  {
    step: "1",
    title: "Choose Template",
    description: "Select from 1600+ professionally designed templates for every industry",
    features: ["1600+ Templates", "All Industries", "Mobile Ready"],
    color: brandColors.primary
  },
  {
    step: "2", 
    title: "Customize Design", 
    description: "Use our drag-and-drop editor to create perfect emails in minutes",
    features: ["Drag & Drop Editor", "No Coding Skills", "Live Preview"],
    color: brandColors.secondary
  },
  {
    step: "3",
    title: "Send & Analyze",
    description: "Launch campaigns and track performance with real-time analytics",
    features: ["Smart Scheduling", "Real-time Analytics", "A/B Testing"],
    color: brandColors.accent
  }
];

export default function HowItWorks() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border"
            style={{ backgroundColor: "white", borderColor: brandColors.accent }}
          >
            <span style={{ color: brandColors.primary }} className="text-sm font-semibold">HOW IT WORKS</span>
          </div>
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Create Amazing Emails
            <br />
            <span style={{ color: brandColors.secondary }}>in 3 Simple Steps</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Follow our easy process to design, build, and launch successful email campaigns
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white transition-all hover:scale-110"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
              </div>

              {/* Content Card */}
              <div 
                className="flex-1 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: "white",
                  borderColor: item.color + "40"
                }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
                  {item.title}
                </h3>
                <p className="mb-6 text-base" style={{ color: "#666" }}>
                  {item.description}
                </p>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-4">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: item.color + "20" }}
                      >
                        <FiCheck size={14} style={{ color: item.color }} />
                      </div>
                      <span style={{ color: "#1a1a1a" }} className="font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex -mr-8 z-10">
                  <FiArrowRight 
                    size={32} 
                    style={{ color: brandColors.secondary, opacity: 0.3 }}
                    className="rotate-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t-2" style={{ borderColor: "#ddd" }}>
          <h3 className="text-3xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8" style={{ color: "#666" }}>
            Join 10,000+ businesses creating amazing emails
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="rounded-lg px-10 py-4 font-semibold flex items-center justify-center gap-3 transition-all text-white hover:scale-105"
              style={{ backgroundColor: brandColors.secondary }}
            >
              Start Free Trial
              <FiArrowRight size={18} />
            </button>
            
            <button 
              className="rounded-lg px-10 py-4 font-semibold transition-all border-2 hover:bg-gray-50"
              style={{ borderColor: brandColors.primary, color: brandColors.primary, backgroundColor: "white" }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}