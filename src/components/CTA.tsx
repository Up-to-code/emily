import { FiArrowRight, FiCheck, FiStar, FiUsers, FiCalendar, FiMail } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

export default function CTA() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 mb-8 border-2"
              style={{ backgroundColor: "white", borderColor: brandColors.accent }}
            >
              <FiMail style={{ color: brandColors.primary }} size={18} />
              <span style={{ color: brandColors.primary }} className="font-semibold text-sm">READY TO GET STARTED?</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
              Start Creating
              <br />
              <span style={{ color: brandColors.secondary }}>Amazing Emails</span>
              <br />
              Today
            </h2>
            
            {/* Description */}
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#666" }}>
              Join thousands of users creating stunning email campaigns with our intuitive drag-and-drop builder. No credit card required.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              {/* Users Count */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: brandColors.primary, borderColor: "#F8F5EE" }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ color: "#1a1a1a" }}>10,000+</div>
                  <div className="text-sm" style={{ color: "#666" }}>Active Users</div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar 
                      key={star} 
                      size={18}
                      style={{ color: brandColors.accent, fill: brandColors.accent }}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ color: "#1a1a1a" }}>4.9/5</div>
                  <div className="text-sm" style={{ color: "#666" }}>Rating</div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "No credit card required",
                "Free forever plan",
                "30-day money back",
                "24/7 support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="rounded-full p-1.5 flex-shrink-0"
                    style={{ backgroundColor: brandColors.primary }}
                  >
                    <FiCheck size={14} className="text-white" />
                  </div>
                  <span className="font-medium text-sm" style={{ color: "#666" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA Cards */}
          <div className="space-y-6">
            {/* Main CTA Card */}
            <div 
              className="rounded-2xl p-8 text-center border-2 transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: "white",
                borderColor: brandColors.accent
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
                Start Free Today
              </h3>
              <p className="mb-6" style={{ color: "#666" }}>
                Get immediate access to all basic features
              </p>
              
              <div className="space-y-4 mb-6">
                {/* Primary CTA */}
                <button 
                  className="w-full rounded-lg px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: brandColors.secondary }}
                >
                  Get Started Free
                  <FiArrowRight size={18} />
                </button>
                
                {/* Secondary CTA */}
                <button 
                  className="w-full rounded-lg px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 border-2 transition-all hover:bg-gray-50"
                  style={{ 
                    borderColor: brandColors.primary,
                    color: brandColors.primary,
                    backgroundColor: "white"
                  }}
                >
                  <FiCalendar size={18} />
                  Schedule a Demo
                </button>
              </div>

              <p className="text-xs" style={{ color: "#999" }}>
                Free forever plan • No credit card • Cancel anytime
              </p>
            </div>

            {/* Trust Badge */}
            <div 
              className="rounded-2xl p-6 text-center border-2 transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: "white",
                borderColor: brandColors.accent
              }}
            >
              <div className="flex items-center justify-center gap-4">
                <div style={{ color: brandColors.primary, fontSize: "28px" }}>
                  <FiUsers />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div className="font-bold text-lg" style={{ color: "#1a1a1a" }}>
                    Join 10,000+ Users
                  </div>
                  <div className="text-sm" style={{ color: "#666" }}>
                    Worldwide Community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="text-center mt-12 pt-8" style={{ borderTop: "1px solid #ddd" }}>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: "99.9% Uptime", color: "#10B981" },
              { label: "Bank-Level Security", color: "#3B82F6" },
              { label: "GDPR Compliant", color: brandColors.primary },
              { label: "24/7 Support", color: brandColors.secondary }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2" style={{ color: "#666" }}>
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}