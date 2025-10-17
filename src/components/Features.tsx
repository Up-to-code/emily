/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import { FiZap, FiMail, FiSliders, FiBarChart2, FiShare2, FiLock } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const features = [
  {
    icon: FiZap,
    title: "AI Powered",
    description: "Generate beautiful emails instantly with our advanced AI",
    color: brandColors.secondary
  },
  {
    icon: FiMail,
    title: "Drag & Drop",
    description: "Intuitive editor with simple drag and drop interface",
    color: brandColors.primary
  },
  {
    icon: FiSliders,
    title: "Full Control",
    description: "Customize every element to match your brand perfectly",
    color: brandColors.accent
  },
  {
    icon: FiBarChart2,
    title: "Analytics",
    description: "Track opens, clicks, and conversions in real-time",
    color: brandColors.secondary
  },
  {
    icon: FiShare2,
    title: "Easy Sharing",
    description: "Send to thousands or share with your team instantly",
    color: brandColors.primary
  },
  {
    icon: FiLock,
    title: "Secure",
    description: "Enterprise-grade security for your email campaigns",
    color: brandColors.accent
  }
];

export default function FeaturesComponent() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Why Choose
            <br />
            <span style={{ color: brandColors.secondary }}>EmailBuilder</span>
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Everything you need to create, send, and track amazing email campaigns
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index as any)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "white",
                  borderColor: hoveredIndex === index ? feature.color : "#ddd",
                  transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: hoveredIndex === index ? `0 12px 24px ${feature.color}20` : "none"
                }}
              >
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    color: feature.color,
                    transform: hoveredIndex === index ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)"
                  }}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p style={{ color: "#666" }} className="leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div
                  className="mt-6 h-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: feature.color,
                    width: hoveredIndex === index ? "100%" : "0%"
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            className="rounded-lg px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
            style={{
              backgroundColor: brandColors.secondary
            }}
          >
            Start Creating Now
          </button>
        </div>
      </div>
    </section>
  );
}