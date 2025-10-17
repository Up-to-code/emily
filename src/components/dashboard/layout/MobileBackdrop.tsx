// components/dashboard/MobileBackdrop.tsx
interface MobileBackdropProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export const MobileBackdrop = ({ isOpen, onClose }: MobileBackdropProps) => {
    if (!isOpen) return null;
    
    return (
      <div 
        className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
        onClick={onClose}
      />
    );
  };