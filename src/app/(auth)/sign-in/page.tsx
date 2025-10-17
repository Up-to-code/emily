// app/(auth)/sign-in/page.tsx
'use client';

import { JSX, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { signIn } from '@/lib/auth-client';

// Import components
import { AuthLayout } from '@/components/layout/AuthLayout';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';
import { InputField } from '@/components/ui/InputField';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { ErrorAlert } from '@/components/ui/ErrorAlert';

interface AuthError {
  message?: string;
  code?: string;
  status?: number;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

export default function SignInPage(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
   
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        
        const errorMessages: Record<string, string> = {
          INVALID_EMAIL: 'Invalid email address',
          INVALID_PASSWORD: 'Invalid email or password',
          INVALID_CREDENTIALS: 'Invalid email or password',
          USER_NOT_FOUND: 'No account found with this email',
          EMAIL_NOT_VERIFIED: 'Please verify your email before signing in',
          ACCOUNT_LOCKED: 'Your account has been locked. Please contact support',
          TOO_MANY_REQUESTS: 'Too many login attempts. Please try again later',
        };

        setError(errorMessages[authError.code || ''] || authError.message || 'Sign in failed. Please check your credentials.');
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
      
    } catch (err: unknown) {
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
    <AuthLayout brandColors={brandColors}>
      <FloatingOrbs brandColors={brandColors} />

      <div className="w-full max-w-sm relative z-10 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 leading-tight text-center" style={{ color: "#1a1a1a" }}>
            Welcome
            <br />
            <span style={{ color: brandColors.secondary }}>Back</span>
          </h1>
          <p className="text-lg text-center leading-relaxed" style={{ color: "#666" }}>
            Sign in to your Emailly account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Error Message */}
          {error && <ErrorAlert message={error} />}

          {/* Email Input */}
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            disabled={loading}
            autoComplete="email"
            icon={<FiMail className="w-5 h-5" />}
            brandColors={brandColors}
          />

          {/* Password Input */}
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            disabled={loading}
            autoComplete="current-password"
            icon={<FiLock className="w-5 h-5" />}
            brandColors={brandColors}
          />

          {/* Remember Me & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <Checkbox
              label="Remember me"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={loading}
              brandColor={brandColors.primary}
            />
            
            <Link 
              href="/forgot-password" 
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: brandColors.primary }}
            >
              Forgot?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            loading={loading}
            style={{ backgroundColor: brandColors.secondary }}
          >
            <>
              Sign In
              <FiArrowRight className="w-5 h-5" />
            </>
          </Button>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span style={{ color: "#666" }}>Don&rsquo;t have an account? </span>
            <Link 
              href="/sign-up" 
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: brandColors.primary }}
            >
              Sign up
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
    </AuthLayout>
  );
}