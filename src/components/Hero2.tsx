"use client";
import { useState, useEffect } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';
import { FiArrowRight, FiLoader, FiCheck } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const suggestions = [
  "Create a welcome email for new subscribers",
  "Design a promotional campaign for summer sale",
  "Build an order confirmation template",
];

export default function EmailHeroWithAI() {
  const [chatInput, setChatInput] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  type AnalysisType = {
    wordCount: number;
    hasCTA: boolean;
    sentiment: string;
    complexity: string;
    score: number;
  } | null;
  const [analysis, setAnalysis] = useState<AnalysisType>(null);
  const [step, setStep] = useState<"input" | "analyzing" | "result">("input");

  useEffect(() => {
    if (!chatInput && isTyping && step === "input") {
      const suggestion = suggestions[currentIndex];
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex < suggestion.length) {
          setDisplayText(suggestion.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(interval);
    } else if (!chatInput && !isTyping && step === "input") {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        setDisplayText("");
        setIsTyping(true);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [chatInput, isTyping, currentIndex, step]);

  const analyzeText = (text: string): { wordCount: number; hasCTA: boolean; sentiment: string; complexity: string; score: number } => {
    const wordCount: number = text.split(/\s+/).filter((w: string) => w.length > 0).length;
    const hasCTA: boolean = /click|button|call|action|subscribe|buy|learn|get|start/i.test(text);
    const sentiment: string = text.toLowerCase().includes("sale") || text.toLowerCase().includes("exclusive") || text.toLowerCase().includes("promo") ? "Promotional" : "Informational";

    return {
      wordCount,
      hasCTA,
      sentiment,
      complexity: wordCount > 50 ? "High" : wordCount > 20 ? "Medium" : "Low",
      score: Math.min(100, Math.floor((wordCount / 100) * 100) + (hasCTA ? 20 : 0))
    };
  };

  const handleSend = async (): Promise<void> => {
    if (chatInput.trim()) {
      setStep("analyzing");
      setIsAnalyzing(true);

      await new Promise((resolve: (value: void) => void) => setTimeout(resolve, 2000));
      
      const textAnalysis = analyzeText(chatInput);
      setAnalysis(textAnalysis);
      setStep("result");
      setIsAnalyzing(false);
      
      setTimeout(() => {
        setChatInput("");
        setDisplayText("");
        setIsTyping(true);
        setStep("input");
        setAnalysis(null);
      }, 4000);
    }
  };

  return (
    <section 
      className="h-[70vh] px-6 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      {/* Animated floating gradient orbs with smooth motion */}
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
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      <div className="w-full max-w-3xl relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight text-center" style={{ color: "#1a1a1a" }}>
            Design Emails
            <br />
            <span style={{ color: brandColors.secondary }}>Your Way</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-16 text-center max-w-xl" style={{ color: "#666" }}>
            Create your perfect email template with AI. Just describe what you want and we&apos;ll build it for you instantly.
          </p>

          {/* Input Box with Enhanced Shadow and Gradient Border */}
          {step === "input" && (
            <div className="w-full">
              <div 
                className="relative group w-full"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                }}
              >
                {/* Animated gradient border background */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent}, ${brandColors.primary})`,
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 3s ease infinite'
                  }}
                ></div>

                <div 
                  className="rounded-3xl p-6 border-2 transition-all duration-300 relative backdrop-blur-sm"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: isFocused ? brandColors.primary : brandColors.accent,
                    boxShadow: isFocused 
                      ? `0 0 0 4px ${brandColors.primary}20, inset 0 0 20px ${brandColors.primary}05` 
                      : `inset 0 0 20px ${brandColors.accent}10`
                  }}
                >
                  <div className="flex items-end gap-4">
                    <div className="flex-1">
                      <textarea
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                          }
                        }}
                        placeholder=""
                        className="w-full outline-none text-lg resize-none leading-relaxed font-medium"
                        style={{ 
                          minHeight: "60px",
                          color: "#1a1a1a",
                          fontFamily: "inherit",
                          backgroundColor: "transparent"
                        }}
                      />
                      {!chatInput && (
                        <div className="text-lg leading-relaxed" style={{ color: "#999" }}>
                          {displayText}
                          {isTyping && <span style={{ color: brandColors.secondary, animation: 'blink 1s infinite' }}>▌</span>}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleSend}
                      disabled={!chatInput.trim()}
                      className="p-3 rounded-xl text-white transition-all hover:scale-110 hover:-rotate-12 disabled:opacity-40 flex-shrink-0"
                      style={{ 
                        backgroundColor: chatInput.trim() ? brandColors.secondary : "#ddd",
                        boxShadow: chatInput.trim() ? `0 8px 20px ${brandColors.secondary}40` : 'none'
                      }}
                    >
                      <BiSolidUpArrow size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes gradientShift {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
                
                @keyframes blink {
                  0%, 49%, 100% {
                    opacity: 1;
                  }
                  50%, 99% {
                    opacity: 0;
                  }
                }
              `}</style>

              {/* CTA Button */}
              <div className="mt-8 flex justify-center">
                <p className="text-center text-sm font-semibold" style={{ color: brandColors.primary }}>
                  ✨ Create your email template with AI in seconds
                </p>
              </div>
            </div>
          )}

          {/* Analyzing State */}
          {step === "analyzing" && (
            <div className="w-full bg-white rounded-3xl p-8 border-2" style={{ borderColor: brandColors.accent }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full animate-spin" style={{ 
                    border: `3px solid ${brandColors.primary}20`,
                    borderTopColor: brandColors.secondary
                  }}></div>
                  <div className="absolute inset-2 flex items-center justify-center">
                    <FiLoader size={24} style={{ color: brandColors.secondary }} className="animate-spin" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "#1a1a1a" }}>Analyzing Your Brief</h3>
                  <p style={{ color: "#666", fontSize: "15px" }}>Processing your email campaign...</p>
                </div>
              </div>

              <div className="space-y-3">
                {['Parsing content', 'Detecting sentiment', 'Optimizing strategy'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3" style={{ color: "#666" }}>
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: brandColors.primary }}></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Result State */}
          {step === "result" && analysis && (
            <div className="w-full bg-white rounded-3xl p-8 border-2" style={{ borderColor: brandColors.accent }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full" style={{ backgroundColor: `${brandColors.primary}20` }}>
                  <FiCheck size={24} style={{ color: brandColors.primary }} />
                </div>
                <h3 className="font-bold text-2xl" style={{ color: "#1a1a1a" }}>Campaign Ready</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3" style={{ borderBottom: `2px solid ${brandColors.accent}` }}>
                  <span className="font-medium" style={{ color: "#666" }}>Word Count</span>
                  <span className="text-lg font-bold" style={{ color: brandColors.primary }}>{analysis.wordCount}</span>
                </div>
                <div className="flex justify-between items-center pb-3" style={{ borderBottom: `2px solid ${brandColors.accent}` }}>
                  <span className="font-medium" style={{ color: "#666" }}>Type</span>
                  <span className="text-lg font-bold" style={{ color: brandColors.secondary }}>{analysis.sentiment}</span>
                </div>
                <div className="flex justify-between items-center pb-3" style={{ borderBottom: `2px solid ${brandColors.accent}` }}>
                  <span className="font-medium" style={{ color: "#666" }}>CTA Present</span>
                  <span className="text-lg font-bold" style={{ color: analysis.hasCTA ? brandColors.primary : "#ccc" }}>
                    {analysis.hasCTA ? '✓ Yes' : '○ No'}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3" style={{ borderBottom: `2px solid ${brandColors.accent}` }}>
                  <span className="font-medium" style={{ color: "#666" }}>Complexity</span>
                  <span className="text-lg font-bold" style={{ color: brandColors.secondary }}>{analysis.complexity}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium" style={{ color: "#666" }}>Campaign Score</span>
                  <span className="text-xl font-bold" style={{ color: brandColors.primary }}>{analysis.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${analysis.score}%`,
                      backgroundColor: brandColors.secondary,
                      boxShadow: `0 0 15px ${brandColors.secondary}50`
                    }}
                  ></div>
                </div>
              </div>

              <button 
                className="w-full rounded-2xl px-6 py-4 text-lg font-bold transition-all flex items-center justify-center gap-2 text-white hover:scale-105 active:scale-95"
                style={{ 
                  backgroundColor: brandColors.secondary,
                  boxShadow: `0 10px 25px ${brandColors.secondary}50`
                }}
              >
                Build Email Now
                <FiArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}