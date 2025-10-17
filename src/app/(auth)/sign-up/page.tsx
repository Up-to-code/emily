// app/(auth)/sign-up/page.tsx
'use client';

import { JSX, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiUser, FiArrowRight, FiAlertCircle, FiCheck } from 'react-icons/fi';
import { signUp } from '@/lib/auth-client';

interface AuthError {
  message?: string;
  code?: string;
  status?: number;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

export default function SignUpPage(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
   
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.name.length < 2) {
      setError('Name must be at least 2 characters long');
      setLoading(false);
      return;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      setLoading(false);
      return;
    }

    try {
      const result = await signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        callbackURL: '/dashboard',
      });

      if (result?.error) {
        const authError = result.error as AuthError;
        
        const errorMessages: Record<string, string> = {
          USER_ALREADY_EXISTS: 'An account with this email already exists',
          EMAIL_ALREADY_EXISTS: 'An account with this email already exists',
          INVALID_EMAIL: 'Invalid email address',
          WEAK_PASSWORD: 'Password is too weak. Please use a stronger password',
          INVALID_NAME: 'Invalid name provided',
        };

        setError(errorMessages[authError.code || ''] || authError.message || 'Sign up failed. Please try again.');
        setLoading(false);
        return;
      }

      if (result?.data) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/dashboard');
          router.refresh();
        }, 2000);
      } else {
        setError('Sign up failed. Please try again.');
        setLoading(false);
      }
      
    } catch (err: unknown) {
      console.error('Sign up error:', err);
      
      if (err instanceof Error) {
        if (err.message.includes('fetch')) {
          setError('Network error. Please check your connection and try again.');
        } else if (err.message.includes('timeout')) {
          setError('Request timed out. Please try again.');
        } else {
          setError(err.message || 'An unexpected error occurred. Please try again.');
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    if (error) {
      setError(null);
    }
  };

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
      `}</style>

      <div className="w-full max-w-sm relative z-10 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 leading-tight text-center" style={{ color: "#1a1a1a" }}>
            Create Your
            <br />
            <span style={{ color: brandColors.secondary }}>Account</span>
          </h1>
          <p className="text-lg text-center leading-relaxed" style={{ color: "#666" }}>
            Join thousands using Emailly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Error Message */}
          {error && (
            <div className="px-4 py-4 rounded-2xl border-2 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300" 
              style={{ 
                backgroundColor: "rgba(255, 102, 102, 0.1)",
                borderColor: "rgba(255, 102, 102, 0.3)",
                color: "#cc0000"
              }} 
              role="alert">
              <FiAlertCircle className="flex-shrink-0 mt-0.5 w-5 h-5" />
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="px-4 py-4 rounded-2xl border-2 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300" 
              style={{ 
                backgroundColor: "rgba(102, 255, 102, 0.1)",
                borderColor: "rgba(102, 255, 102, 0.3)",
                color: "#00cc00"
              }} 
              role="status">
              <FiCheck className="flex-shrink-0 mt-0.5 w-5 h-5" />
              <span className="font-medium">Account created! Redirecting...</span>
            </div>
          )}

          {/* Name Input */}
          <div className="space-y-3">
            <label htmlFor="name" className="text-sm font-semibold text-base block" style={{ color: "#1a1a1a" }}>
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:opacity-100" style={{ color: "#999", opacity: 0.5 }}>
                <FiUser className="w-5 h-5" />
              </div>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                disabled={loading}
                autoComplete="name"
                className="w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-base leading-relaxed focus:outline-none transition-all duration-200 disabled:opacity-50"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "#f0f0f0",
                  color: "#1a1a1a"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = brandColors.primary;
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                }}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-semibold text-base block" style={{ color: "#1a1a1a" }}>
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:opacity-100" style={{ color: "#999", opacity: 0.5 }}>
                <FiMail className="w-5 h-5" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={loading}
                autoComplete="email"
                className="w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-base leading-relaxed focus:outline-none transition-all duration-200 disabled:opacity-50"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "#f0f0f0",
                  color: "#1a1a1a"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = brandColors.primary;
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-3">
            <label htmlFor="password" className="text-sm font-semibold text-base block" style={{ color: "#1a1a1a" }}>
              Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:opacity-100" style={{ color: "#999", opacity: 0.5 }}>
                <FiLock className="w-5 h-5" />
              </div>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                disabled={loading}
                autoComplete="new-password"
                className="w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-base leading-relaxed focus:outline-none transition-all duration-200 disabled:opacity-50"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "#f0f0f0",
                  color: "#1a1a1a"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = brandColors.primary;
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                }}
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-3">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-base block" style={{ color: "#1a1a1a" }}>
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:opacity-100" style={{ color: "#999", opacity: 0.5 }}>
                <FiLock className="w-5 h-5" />
              </div>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                disabled={loading}
                autoComplete="new-password"
                className="w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-base leading-relaxed focus:outline-none transition-all duration-200 disabled:opacity-50"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "#f0f0f0",
                  color: "#1a1a1a"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = brandColors.primary;
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                }}
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                disabled={loading}
                className="w-5 h-5 rounded accent-color transition-all"
                style={{ accentColor: brandColors.primary }}
              />
              <span className="ml-2.5 font-medium transition-colors group-hover:opacity-80" style={{ color: "#1a1a1a" }}>
                I agree to the{' '}
                <Link href="/terms" className="font-semibold underline" style={{ color: brandColors.primary }}>
                  Terms
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-semibold underline" style={{ color: brandColors.primary }}>
                  Privacy
                </Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full py-4 px-6 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 text-white hover:scale-105 active:scale-95 disabled:opacity-60"
            style={{ 
              backgroundColor: brandColors.secondary
            }}
          >
            {loading ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Creating account
              </>
            ) : success ? (
              <>
                <FiCheck className="w-5 h-5" />
                Account created
              </>
            ) : (
              <>
                Create Account
                <FiArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Sign In Link */}
          <div className="text-center text-sm">
            <span style={{ color: "#666" }}>Already have an account? </span>
            <Link 
              href="/sign-in" 
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: brandColors.primary }}
            >
              Sign in
            </Link>
          </div>
        </form>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: "#f0f0f0" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#999" }}>
            Trusted by thousands
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
            Create stunning email templates with AI in seconds
          </p>
        </div>
      </div>
    </section>
  );
}