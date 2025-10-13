// components/Pricing.tsx
import { FiCheck, FiStar } from 'react-icons/fi';

export default function Pricing() {
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

  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
            <FiStar className="text-primary" />
            <span className="text-primary text-sm font-medium">SIMPLE PRICING</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-base-content/70 text-lg">
            Start free, upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border-2 relative ${
                plan.popular ? 'border-primary bg-primary/10' : 'border-base-300 bg-base-100'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-flex items-center gap-2">
                  <FiStar className="text-sm" />
                  Most Popular
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-base-content mb-2">{plan.name}</h3>
                <p className="text-base-content/70">{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-base-content">{plan.price}</span>
                <span className="text-base-content/70 ml-2">/{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <FiCheck className="w-5 h-5 text-success flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-base-content" : "text-base-content/40 line-through"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full rounded-xl py-4 font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-primary hover:bg-primary/90 text-primary-content' 
                  : 'bg-base-100 hover:bg-base-200 text-primary border border-base-300'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <div className="bg-base-200 rounded-2xl p-8 max-w-2xl mx-auto border border-base-300">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Not Sure Which Plan to Choose?
            </h3>
            <p className="text-base-content/70 mb-6">
              Join <span className="text-primary font-bold">1,500,000+</span> businesses that trust our platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-content rounded-xl px-6 py-3 font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="bg-base-100 hover:bg-base-200 text-primary border border-base-300 rounded-xl px-6 py-3 font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}