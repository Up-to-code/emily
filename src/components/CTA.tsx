// components/CTA.tsx
import { FiArrowRight, FiCheck, FiStar, FiUsers, FiCalendar, FiMail } from 'react-icons/fi';

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-3 bg-base-100 rounded-2xl px-5 py-3 mb-8 border-2 border-accent">
              <FiMail className="text-primary text-lg" />
              <span className="text-primary font-semibold text-sm">READY TO GET STARTED?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6 leading-tight">
              Start Creating
              <span className="block text-primary">Amazing Emails</span>
              Today
            </h2>
            
            <p className="text-base-content/70 text-lg mb-8 leading-relaxed">
              Join thousands of users creating stunning email campaigns with our intuitive drag-and-drop builder. No credit card required.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 bg-primary rounded-full border-2 border-base-100 flex items-center justify-center text-primary-content text-sm font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-base-content">
                  <div className="font-bold text-lg">10,000+</div>
                  <div className="text-base-content/70 text-sm">Active Users</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>
                <div className="text-base-content">
                  <div className="font-bold text-lg">4.9/5</div>
                  <div className="text-base-content/70 text-sm">Rating</div>
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
                <div key={index} className="flex items-center gap-3 text-base-content/70">
                  <div className="bg-primary rounded-full p-1.5">
                    <FiCheck className="w-3 h-3 text-primary-content" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA Cards */}
          <div className="space-y-6">
            {/* Main CTA Card */}
            <div className="bg-base-100 rounded-2xl p-8 border-2 border-accent text-center hover:border-primary transition-colors duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-base-content mb-4">Start Free Today</h3>
              <p className="text-base-content/70 mb-6">Get immediate access to all basic features</p>
              
              <div className="space-y-4 mb-6">
                <button className="w-full bg-secondary text-secondary-content rounded-xl px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-secondary/90 transition-colors duration-300">
                  Get Started Free
                  <FiArrowRight className="text-lg" />
                </button>
                
                <button className="w-full bg-base-100 text-primary border-2 border-primary rounded-xl px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-content transition-colors duration-300">
                  <FiCalendar className="text-lg" />
                  Schedule a Demo
                </button>
              </div>

              <p className="text-base-content/70 text-xs">
                Free forever plan • No credit card • Cancel anytime
              </p>
            </div>

            {/* Trust Badge */}
            <div className="bg-base-100 rounded-2xl p-6 border-2 border-accent text-center hover:border-primary transition-colors duration-300 shadow-lg">
              <div className="flex items-center justify-center gap-4 text-base-content">
                <FiUsers className="text-2xl text-primary" />
                <div>
                  <div className="font-bold text-lg">Join 10,000+ Users</div>
                  <div className="text-base-content/70 text-sm">Worldwide Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="text-center mt-12 pt-8 border-t border-accent">
          <div className="flex flex-wrap justify-center gap-6 text-base-content/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-info rounded-full"></div>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-error rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}