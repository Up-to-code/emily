// components/ui/FloatingOrbs.tsx
interface FloatingOrbsProps {
    brandColors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }
  
  export const FloatingOrbs: React.FC<FloatingOrbsProps> = ({ brandColors }) => {
    return (
      <>
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
      </>
    );
  };