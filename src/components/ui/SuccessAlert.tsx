// components/ui/SuccessAlert.tsx
import { FiCheck } from 'react-icons/fi';

interface SuccessAlertProps {
  message: string;
  icon?: React.ReactNode;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ message, icon }) => {
  return (
    <div 
      className="px-4 py-4 rounded-2xl border-2 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300" 
      style={{ 
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderColor: "rgba(16, 185, 129, 0.3)",
        color: "#065f46"
      }} 
      role="status"
    >
      {icon || <FiCheck className="flex-shrink-0 mt-0.5 w-5 h-5" />}
      <span className="font-medium">{message}</span>
    </div>
  );
};