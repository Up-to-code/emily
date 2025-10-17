// components/ui/ErrorAlert.tsx
import { FiAlertCircle } from 'react-icons/fi';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return (
    <div 
      className="px-4 py-4 rounded-2xl border-2 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300" 
      style={{ 
        backgroundColor: "rgba(255, 102, 102, 0.1)",
        borderColor: "rgba(255, 102, 102, 0.3)",
        color: "#cc0000"
      }} 
      role="alert"
    >
      <FiAlertCircle className="flex-shrink-0 mt-0.5 w-5 h-5" />
      <span className="font-medium">{message}</span>
    </div>
  );
};