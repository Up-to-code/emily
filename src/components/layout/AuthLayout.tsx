// components/layout/AuthLayout.tsx
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300">
      <div className="flex min-h-screen">
        {/* Left Side - Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-base-content">EmailBuilder</span>
              </div>
              
              <h1 className="text-3xl font-bold text-base-content mb-3">{title}</h1>
              {subtitle && (
                <p className="text-base-content/70 mb-8 text-lg">{subtitle}</p>
              )}
            </div>

            {children}
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/10 to-secondary/10 items-center justify-center p-12">
          <div className="max-w-md">
            <div className="bg-base-100 rounded-3xl p-8 border-2 border-accent shadow-2xl transform rotate-1">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-base-200 rounded-2xl p-4 border border-accent">
                  <div className="text-sm text-base-content/70">From: team@emailbuilder.com</div>
                  <div className="text-sm text-base-content/70">Subject: Welcome to EmailBuilder!</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/20 rounded-2xl h-16 border border-primary/30"></div>
                  <div className="bg-secondary/20 rounded-2xl h-16 border border-secondary/30"></div>
                  <div className="bg-accent/20 rounded-2xl h-24 col-span-2 border border-accent/30"></div>
                </div>
                
                <div className="bg-primary text-primary-content text-center py-4 rounded-2xl font-semibold text-lg">
                  Create Your First Email
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 right-1/4 bg-base-100 rounded-2xl p-4 border-2 border-primary w-24 transform -rotate-6 animate-float">
              <div className="space-y-2">
                <div className="bg-primary rounded h-2"></div>
                <div className="bg-accent rounded h-2"></div>
                <div className="bg-secondary rounded h-4"></div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4 bg-base-100 rounded-2xl p-4 border-2 border-secondary w-24 transform rotate-6 animate-float-delayed">
              <div className="space-y-2">
                <div className="bg-secondary rounded h-3"></div>
                <div className="bg-primary rounded h-3"></div>
                <div className="bg-accent rounded h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}