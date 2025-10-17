"use client";
import { FiCheck, FiStar, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    popular: false,
    features: [
      { text: "1,000 emails/month", included: true },
      { text: "Basic templates", included: true },
      { text: "Drag & Drop editor", included: true },
      { text: "Community support", included: true },
      { text: "AI Assistant", included: false },
      { text: "Advanced analytics", included: false }
    ]
  },
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    description: "Everything to grow your business",
    popular: true,
    features: [
      { text: "10,000 emails/month", included: true },
      { text: "All 1600+ templates", included: true },
      { text: "Advanced editor", included: true },
      { text: "Priority support", included: true },
      { text: "AI Assistant", included: true },
      { text: "Basic analytics", included: true }
    ]
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "Advanced features for scaling",
    popular: false,
    features: [
      { text: "100,000 emails/month", included: true },
      { text: "All templates + Custom", included: true },
      { text: "Advanced automation", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Advanced AI Assistant", included: true },
      { text: "Advanced analytics", included: true }
    ]
  }
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border"
            style={{ backgroundColor: "white", borderColor: brandColors.accent }}
          >
            <FiStar style={{ color: brandColors.secondary }} size={16} />
            <span style={{ color: brandColors.primary }} className="text-sm font-semibold">SIMPLE PRICING</span>
          </div>
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Choose Your Perfect
            <br />
            <span style={{ color: brandColors.secondary }}>Plan</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Start free, upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index )}
              onMouseLeave={() => setHoveredIndex(null)}
              className="rounded-2xl p-8 border-2 transition-all duration-300 relative"
              style={{
                backgroundColor: "white",
                borderColor: plan.popular ? brandColors.primary : "#ddd",
                transform: hoveredIndex === index ? "translateY(-12px)" : "translateY(0)",
                boxShadow: hoveredIndex === index || plan.popular ? `0 20px 40px ${brandColors.primary}15` : "none"
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-white"
                  style={{ backgroundColor: brandColors.secondary }}
                >
                  <FiStar size={14} />
                  Most Popular
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {plan.name}
                </h3>
                <p style={{ color: "#666" }}>{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-8 py-6" style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
                <span className="text-5xl font-bold" style={{ color: brandColors.primary }}>
                  {plan.price}
                </span>
                <span style={{ color: "#999" }} className="ml-2">/{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: brandColors.secondary + "20" }}
                      >
                        <FiCheck size={14} style={{ color: brandColors.secondary }} />
                      </div>
                    ) : (
                      <div 
                        className="w-5 h-5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#eee" }}
                      />
                    )}
                    <span 
                      className={`text-sm ${feature.included ? "" : "line-through"}`}
                      style={{ color: feature.included ? "#1a1a1a" : "#999" }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className="w-full rounded-lg py-4 font-semibold transition-all flex items-center justify-center gap-2"
                style={{
                  backgroundColor: plan.popular ? brandColors.secondary : "white",
                  color: plan.popular ? "white" : brandColors.primary,
                  border: plan.popular ? "none" : `2px solid ${brandColors.primary}`
                }}
              >
                Get Started
                {plan.popular && <FiArrowRight size={18} />}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="rounded-2xl p-10 border-2"
            style={{ backgroundColor: "white", borderColor: brandColors.accent }}
          >
            <h3 className="text-2xl font-bold text-center mb-4" style={{ color: "#1a1a1a" }}>
              Not Sure Which Plan to Choose?
            </h3>
            <p className="text-center mb-8" style={{ color: "#666" }}>
              Join <span style={{ color: brandColors.secondary }} className="font-bold">1,500,000+</span> businesses that trust our platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="px-8 py-3 rounded-lg font-semibold transition-all text-white hover:scale-105"
                style={{ backgroundColor: brandColors.secondary }}
              >
                Start Free Trial
              </button>
              <button 
                className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: brandColors.primary, color: brandColors.primary, backgroundColor: "white" }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}