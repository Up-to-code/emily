// components/Navigation.tsx
"use client";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-base-100/80 backdrop-blur-sm px-6 py-4 border-b border-base-300 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold">
              E
            </div>
            <span className="text-xl font-bold text-base-content">Emailly</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Templates', 'Features', 'Pricing'].map((item) => (
              <button key={item} className="text-base-content/70 hover:text-primary transition-colors font-medium">
                {item}
              </button>
            ))}
            <button className="bg-primary hover:bg-primary/90 text-primary-content rounded-lg px-6 py-2 font-medium transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-base-content/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 border-b border-base-300 px-6 py-4">
          <div className="space-y-4">
            {['Templates', 'Features', 'Pricing'].map((item) => (
              <button key={item} className="block w-full text-left text-base-content/70 hover:text-primary transition-colors py-2">
                {item}
              </button>
            ))}
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-content rounded-lg px-4 py-2 font-medium transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
}