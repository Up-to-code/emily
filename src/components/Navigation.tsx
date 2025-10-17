"use client";
import { useState } from 'react';
import { FiMenu, FiX, FiMail } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const menuItems = ['Templates', 'Features', 'Pricing'];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav 
        className="px-6 py-4 border-b sticky top-0 z-50 backdrop-blur-md"
        style={{ 
          backgroundColor: "rgba(248, 245, 238, 0.95)",
          borderColor: "#ddd"
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: brandColors.secondary }}
            >
              <FiMail size={22} />
            </div>
            <span className="text-xl font-bold" style={{ color: "#1a1a1a" }}>
              EmailBuilder
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <button 
                key={item} 
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: "#666" }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              className="px-6 py-2 rounded-lg font-semibold transition-all"
              style={{ 
                color: brandColors.primary,
                border: `2px solid ${brandColors.primary}`,
                backgroundColor: "white"
              }}
            >
              Sign In
            </button>
            <button 
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: brandColors.secondary }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: brandColors.primary }}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-b"
          style={{ 
            backgroundColor: "#F8F5EE",
            borderColor: "#ddd"
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <button 
                key={item} 
                className="block w-full text-left py-3 font-medium transition-colors hover:opacity-70"
                style={{ color: "#666" }}
              >
                {item}
              </button>
            ))}
            
            <div className="border-t pt-4 space-y-3" style={{ borderColor: "#ddd" }}>
              <button 
                className="w-full px-6 py-3 rounded-lg font-semibold transition-all border-2"
                style={{ 
                  color: brandColors.primary,
                  borderColor: brandColors.primary,
                  backgroundColor: "white"
                }}
              >
                Sign In
              </button>
              <button 
                className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: brandColors.secondary }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}