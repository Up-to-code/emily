// components/Hero.tsx
import { FiPlay, FiArrowRight, FiMail } from 'react-icons/fi';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export default function Hero({
  headline = "Design Emails Your Way with Easy Drag & Drop",
  subheadline = "Create stunning email campaigns that convert. No coding required, just drag, drop, and send.",
  primaryCta = "Get Started Free",
  secondaryCta = "Watch Demo"
}: HeroProps) {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-base-200 to-base-300" aria-labelledby="main-headline">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-base-100 rounded-2xl px-6 py-3 mb-8 border border-accent" role="status">
              <FiMail className="text-primary text-lg" aria-hidden="true" />
              <span className="text-primary font-semibold">DRAG-N-DROP HTML EMAIL BUILDER</span>
            </div>
            
            {/* Headline */}
            <h1 id="main-headline" className="text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight">
              Design Emails{' '}
              <span className="text-primary block lg:inline">Your Way</span>{' '}
              with Easy Drag & Drop
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-base-content/70 mb-8 font-normal leading-relaxed">
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-content rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
                aria-label={`${primaryCta} - opens signup form`}
              >
                {primaryCta}
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button 
                className="bg-base-100 hover:bg-base-200 text-primary border border-primary rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                aria-label={`${secondaryCta} - opens video demonstration`}
              >
                <FiPlay className="text-xl" aria-hidden="true" />
                {secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column - Email Examples */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Main Email Example */}
              <div className="bg-base-100 rounded-2xl p-8 border border-accent transform rotate-2 transition-transform duration-300 group-hover:rotate-0">
                <div className="flex gap-2 mb-4" aria-hidden="true">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="space-y-4" aria-label="Email template preview">
                  {/* Email Header */}
                  <div className="bg-base-200 rounded-xl p-4 border border-accent">
                    <div className="text-sm text-base-content/70">To: customer@example.com</div>
                    <div className="text-sm text-base-content/70">Subject: Welcome to Our Service!</div>
                  </div>
                  
                  {/* Email Content Blocks */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary rounded-xl h-20" aria-hidden="true"></div>
                    <div className="bg-secondary rounded-xl h-20" aria-hidden="true"></div>
                    <div className="bg-accent rounded-xl h-32 col-span-2" aria-hidden="true"></div>
                  </div>
                  
                  {/* CTA Button in Email */}
                  <div className="bg-neutral text-neutral-content text-center py-3 rounded-xl font-semibold" aria-hidden="true">
                    Get Started Now
                  </div>
                </div>
              </div>

              {/* Floating Mini Email - Top Right */}
              <div 
                className="absolute -top-4 -right-4 bg-base-100 rounded-xl p-4 border border-primary transform -rotate-6 w-32 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 animate-float-delayed"
                aria-hidden="true"
              >
                <div className="space-y-2">
                  <div className="bg-primary rounded h-2"></div>
                  <div className="bg-accent rounded h-2"></div>
                  <div className="bg-secondary rounded h-6"></div>
                </div>
              </div>

              {/* Floating Mini Email - Bottom Left */}
              <div 
                className="absolute -bottom-4 -left-4 bg-base-100 rounded-xl p-4 border border-secondary transform rotate-6 w-32 transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 animate-float"
                aria-hidden="true"
              >
                <div className="space-y-2">
                  <div className="bg-secondary rounded h-3"></div>
                  <div className="bg-primary rounded h-3"></div>
                  <div className="bg-accent rounded h-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add floating animation styles */}

    </section>
  );
}