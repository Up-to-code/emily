// components/dashboard/SidebarHeader.tsx
import { Icons } from '@/components/ui/Icons';

interface SidebarHeaderProps {
  sidebarOpen: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ sidebarOpen, onToggle }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-base-300">
      <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center w-full'}`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
          <Icons.FiZap className="w-6 h-6 text-primary-content" />
        </div>
        {sidebarOpen && (
          <div>
            <h1 className="text-xl font-semibold text-base-content">Emailly</h1>
            <p className="text-xs text-base-content/70">Dashboard</p>
          </div>
        )}
      </div>
      
      {/* Desktop Toggle Button */}
      <button
        onClick={onToggle}
        className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-base-200 transition-colors duration-200 text-primary"
      >
        {sidebarOpen ? 
          <Icons.FiChevronLeft className="w-5 h-5" /> : 
          <Icons.FiChevronRight className="w-5 h-5" />
        }
      </button>
    </div>
  );
};