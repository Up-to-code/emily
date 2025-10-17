// components/layout/AuthLayout.tsx
interface AuthLayoutProps {
  children: React.ReactNode;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section 
      className="min-h-screen px-6 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      {children}
    </section>
  );
};