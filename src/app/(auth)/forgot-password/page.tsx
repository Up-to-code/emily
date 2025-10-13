// app/(auth)/sign-in/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiArrowRight, FiAlertCircle, FiCheck, FiShield } from 'react-icons/fi';

import { signIn } from '@/lib/auth-client';

interface AuthError {
  message?: string;
  code?: string;
  status?: number;
}

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
   
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const result = await signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: '/dashboard',
      });

      if (result?.error) {
        const authError = result.error as AuthError;
        
        switch (authError.code) {
          case 'INVALID_EMAIL':
            setError('Invalid email address');
            break;
          case 'INVALID_PASSWORD':
          case 'INVALID_CREDENTIALS':
            setError('Invalid email or password');
            break;
          case 'USER_NOT_FOUND':
            setError('No account found with this email');
            break;
          case 'EMAIL_NOT_VERIFIED':
            setError('Please verify your email before signing in');
            break;
          case 'ACCOUNT_LOCKED':
            setError('Your account has been locked. Please contact support');
            break;
          case 'TOO_MANY_REQUESTS':
            setError('Too many login attempts. Please try again later');
            break;
          default:
            setError(authError.message || 'Sign in failed. Please check your credentials.');
        }
        setLoading(false);
        return;
      }

      if (result?.data) {
        router.push('/dashboard');
        router.refresh();
      } else {
        setError('Sign in failed. Please try again.');
        setLoading(false);
      }
      
    } catch (err) {
      console.error('Sign in error:', err);
      
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (error) {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Header with Badge */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-base-100 rounded-2xl px-6 py-3 mb-8 border border-accent" role="status">
                <FiShield className="text-primary text-lg" aria-hidden="true" />
                <span className="text-primary font-semibold">SECURE AUTHENTICATION</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight">
                Welcome{' '}
                <span className="text-primary block lg:inline">Back</span>
              </h1>
              
              <p className="text-lg text-base-content/70 mb-8 font-normal leading-relaxed">
                Sign in to your account to access your dashboard and continue your work.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-error/10 text-error text-sm p-4 rounded-2xl border border-error/20 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <FiAlertCircle className="flex-shrink-0 mt-0.5" size={18} />
                  <span>{error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-semibold text-base-content">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <FiMail size={20} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                    autoComplete="email"
                    className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-2xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-3">
                <label htmlFor="password" className="block text-sm font-semibold text-base-content">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <FiLock size={20} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                    autoComplete="current-password"
                    className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-2xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-4 h-4 rounded border-base-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <span className="ml-2 text-base-content group-hover:text-base-content/80 transition-colors font-medium">
                    Remember me
                  </span>
                </label>
                
                <Link 
                  href="/forgot-password" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                  tabIndex={loading ? -1 : 0}
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-primary-content rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-base-content/60 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  disabled={loading}
                  className="py-4 px-4 bg-base-100 hover:bg-base-200 border border-base-300 rounded-2xl font-semibold text-base-content transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  disabled={loading}
                  className="py-4 px-4 bg-base-100 hover:bg-base-200 border border-base-300 rounded-2xl font-semibold text-base-content transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <span className="text-base-content/60 font-medium">Don&lsquo;t have an account? </span>
                <Link 
                  href="/sign-up" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                  tabIndex={loading ? -1 : 0}
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Just Image */}
        <div className="hidden lg:flex lg:w-1/2 h-screen bg-cover bg-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}>
          {/* Optional: Add a subtle overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
}