// components/ui/Button.tsx
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  children,
  className = '',
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full py-4 px-6 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 text-white hover:scale-105 active:scale-95 disabled:opacity-60 ${className}`}
      style={style}
    >
      {loading ? (
        <>
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};