// components/ui/Checkbox.tsx
interface CheckboxProps {
    label: string | React.ReactNode;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    brandColor: string;
  }
  
  export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    name,
    checked,
    onChange,
    disabled = false,
    brandColor,
  }) => {
    return (
      <label className="flex items-center cursor-pointer group">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="w-5 h-5 rounded transition-all"
          style={{ accentColor: brandColor }}
        />
        <span className="ml-2.5 font-medium transition-colors group-hover:opacity-80" style={{ color: "#1a1a1a" }}>
          {label}
        </span>
      </label>
    );
  };