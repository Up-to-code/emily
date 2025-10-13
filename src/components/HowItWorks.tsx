// components/HowItWorks.tsx
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Choose Template",
      description: "Select from 1600+ professionally designed templates for every industry",
      features: ["1600+ Templates", "All Industries", "Mobile Ready"]
    },
    {
      step: "2", 
      title: "Customize Design", 
      description: "Use our drag-and-drop editor to create perfect emails in minutes",
      features: ["Drag & Drop Editor", "No Coding Skills", "Live Preview"]
    },
    {
      step: "3",
      title: "Send & Analyze",
      description: "Launch campaigns and track performance with real-time analytics",
      features: ["Smart Scheduling", "Real-time Analytics", "A/B Testing"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-base-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-base-100 rounded-full px-4 py-2 mb-6 border border-base-300">
            <span className="text-primary text-sm font-medium">HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
            Create Amazing Emails in 3 Simple Steps
          </h2>
          <p className="text-base-content/70 text-lg">
            Follow our easy process to design, build, and launch successful email campaigns
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-primary-content rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-base-content mb-4">{step.title}</h3>
                <p className="text-base-content/70 mb-6 text-lg">{step.description}</p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-base-content/70">
                      <FiCheck className="w-4 h-4 text-success" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-base-content mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-base-content/70 mb-8">
            Join 10,000+ businesses creating amazing emails
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-content rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-3 transition-colors">
              Start Free Trial
              <FiArrowRight className="text-lg" />
            </button>
            
            <button className="bg-base-100 hover:bg-base-200 text-primary border border-base-300 rounded-xl px-8 py-4 font-semibold transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}