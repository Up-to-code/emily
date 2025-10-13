// app/(auth)/sign-up/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiUser, FiArrowRight, FiAlertCircle, FiCheck } from 'react-icons/fi';

import { signUp } from '@/lib/auth-client';

interface AuthError {
  message?: string;
  code?: string;
  status?: number;
}

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: '',
  });

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    let label = '';
    let color = '';
    
    if (score <= 1) {
      label = 'Weak';
      color = 'text-error';
    } else if (score <= 3) {
      label = 'Fair';
      color = 'text-warning';
    } else if (score <= 4) {
      label = 'Good';
      color = 'text-success';
    } else {
      label = 'Strong';
      color = 'text-success';
    }

    setPasswordStrength({ score, label, color });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    // Validation
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        
        switch (authError.code) {
          case 'USER_ALREADY_EXISTS':
          case 'EMAIL_ALREADY_EXISTS':
            setError('An account with this email already exists');
            break;
          case 'INVALID_EMAIL':
            setError('Invalid email address');
            break;
          case 'WEAK_PASSWORD':
            setError('Password is too weak. Please use a stronger password');
            break;
          case 'INVALID_NAME':
            setError('Invalid name provided');
            break;
          default:
            setError(authError.message || 'Sign up failed. Please try again.');
        }
        setLoading(false);
        return;
      }

      if (result?.data) {
        setSuccess(true);
        // Redirect after success message
        setTimeout(() => {
          router.push('/dashboard');
          router.refresh();
        }, 2000);
      } else {
        setError('Sign up failed. Please try again.');
        setLoading(false);
      }
      
    } catch (err) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
    
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
                <FiMail className="text-primary text-lg" aria-hidden="true" />
                <span className="text-primary font-semibold">AI EMAIL BUILDER</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight">
                Create Amazing{' '}
                <span className="text-primary block lg:inline">Emails</span>
              </h1>
              
              <p className="text-lg text-base-content/70 mb-8 font-normal leading-relaxed">
                Build beautiful emails faster with AI-powered tools.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-error/10 text-error text-sm p-4 rounded-2xl border border-error/20 flex items-start gap-3">
                  <FiAlertCircle className="flex-shrink-0 mt-0.5" size={18} />
                  <span>{error}</span>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="bg-success/10 text-success text-sm p-4 rounded-2xl border border-success/20 flex items-start gap-3">
                  <FiCheck className="flex-shrink-0 mt-0.5" size={18} />
                  <span>Account created successfully! Redirecting...</span>
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-semibold text-base-content">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <FiUser size={20} />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    disabled={loading}
                    autoComplete="name"
                    className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-2xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

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
                    placeholder="Create a strong password"
                    required
                    disabled={loading}
                    autoComplete="new-password"
                    className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-2xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-base-content/60">Password strength</span>
                      <span className={`text-xs font-semibold ${passwordStrength.color}`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          passwordStrength.score <= 1 ? 'bg-error' :
                          passwordStrength.score <= 3 ? 'bg-warning' : 'bg-success'
                        }`}
                        style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-3">
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-base-content">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <FiLock size={20} />
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
                    className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-2xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  disabled={loading}
                  className="mt-1 w-4 h-4 rounded border-base-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-base-content/70 cursor-pointer">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary hover:text-primary/80 font-medium">
                    Terms
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-primary-content rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Creating account...</span>
                  </>
                ) : success ? (
                  <>
                    <FiCheck size={20} />
                    <span>Account created!</span>
                  </>
                ) : (
                  <>
                    <span>Start Building</span>
                    <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Sign In Link */}
              <div className="text-center pt-4">
                <span className="text-base-content/60 font-medium">Already have an account? </span>
                <Link 
                  href="/sign-in" 
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                  tabIndex={loading ? -1 : 0}
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Just Image */}
        <div className="hidden lg:flex lg:w-1/2 h-screen bg-cover bg-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)'
        }}>
          {/* Optional: Add a subtle overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
}