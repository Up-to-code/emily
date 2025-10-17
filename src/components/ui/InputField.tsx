// components/ui/InputField.tsx
import { FiAlertCircle } from 'react-icons/fi';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  icon: React.ReactNode;
  error?: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  autoComplete,
  icon,
  error,
  brandColors,
}) => {
  return (
    <div className="space-y-3">
      <label htmlFor={name} className="text-sm font-semibold text-base block" style={{ color: "#1a1a1a" }}>
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:opacity-100" style={{ color: "#999", opacity: 0.5 }}>
          {icon}
        </div>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          className="w-full pl-12 pr-4 py-4 border-2 rounded-2xl text-base leading-relaxed focus:outline-none transition-all duration-200 disabled:opacity-50"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "#f0f0f0",
            color: "#1a1a1a"
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = brandColors.primary;
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#f0f0f0";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
          }}
        />
      </div>
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <FiAlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
};