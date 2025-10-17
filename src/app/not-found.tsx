// app/not-found.tsx
'use client';

import { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiHome, FiArrowLeft, FiSearch, FiMail, FiZap } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

export default function NotFound(): JSX.Element {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    setMounted(true);
    
    // Countdown timer for automatic redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  if (!mounted) {
    return <div className="min-h-screen" style={{ backgroundColor: "#F8F5EE" }} />;
  }

  return (
    <section 
      className="min-h-screen px-6 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      {/* Animated floating gradient orbs */}
      <div 
        className="absolute top-20 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ 
          backgroundColor: brandColors.primary,
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute -bottom-32 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ 
          backgroundColor: brandColors.secondary,
          animation: 'float 8s ease-in-out infinite 2s'
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ 
          backgroundColor: brandColors.accent,
          animation: 'float 7s ease-in-out infinite 1s'
        }}
      ></div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-60px) translateX(-20px);
          }
          75% {
            transform: translateY(-30px) translateX(30px);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <div className="w-full max-w-2xl relative z-10 py-12 text-center">
        {/* Animated 404 Number */}
        <div 
          className="text-32xl font-black mb-8 tracking-tighter opacity-90"
          style={{ 
            color: brandColors.secondary,
            animation: 'bounce 2s infinite',
            fontSize: '12rem',
            lineHeight: '1'
          }}
        >
          404
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
            Page Not Found
          </h1>
          <p className="text-xl leading-relaxed max-w-md mx-auto" style={{ color: "#666" }}>
            Oops! The page you&#39;re looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2" 
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "#f0f0f0"
            }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>
                Redirecting in {countdown} seconds...
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href="/"
            className="flex items-center gap-3 py-4 px-8 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 text-white"
            style={{ backgroundColor: brandColors.secondary }}
          >
            <FiHome className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 py-4 px-8 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 border-2"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: brandColors.primary,
              color: brandColors.primary
            }}
          >
            <FiArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#999" }}>
            Quick Links
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/sign-in"
              className="flex items-center gap-2 py-3 px-6 rounded-xl transition-all hover:scale-105 border-2"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#f0f0f0",
                color: "#1a1a1a"
              }}
            >
              <FiMail className="w-4 h-4" />
              Sign In
            </Link>
            
            <Link 
              href="/sign-up"
              className="flex items-center gap-2 py-3 px-6 rounded-xl transition-all hover:scale-105 border-2"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#f0f0f0",
                color: "#1a1a1a"
              }}
            >
              <FiZap className="w-4 h-4" />
              Sign Up
            </Link>
            
            <Link 
              href="/dashboard"
              className="flex items-center gap-2 py-3 px-6 rounded-xl transition-all hover:scale-105 border-2"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#f0f0f0",
                color: "#1a1a1a"
              }}
            >
              <FiSearch className="w-4 h-4" />
              Dashboard
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 rounded-2xl border-2 max-w-md mx-auto"
          style={{ 
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "#f0f0f0"
          }}>
          <p className="text-sm" style={{ color: "#666" }}>
            Can&#39;t find what you&apos;re looking for? <br />
            <Link 
              href="/contact" 
              className="font-semibold underline transition-colors hover:opacity-80"
              style={{ color: brandColors.primary }}
            >
              Contact support
            </Link>{' '}
            for help.
          </p>
        </div>

        {/* Brand Footer */}
        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: "#f0f0f0" }}>
          <div className="inline-flex items-center gap-2 mb-3">
            <FiZap className="w-5 h-5" style={{ color: brandColors.primary }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#999" }}>
              Emailly
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
            Create stunning email templates with AI in seconds
          </p>
        </div>
      </div>
    </section>
  );
}