// components/dashboard/UserSection.tsx
import { Icons } from '@/components/ui/Icons';

interface UserSectionProps {
  sidebarOpen: boolean;
  onSignOut: () => void;
}

export const UserSection = ({ sidebarOpen, onSignOut }: UserSectionProps) => {
  return (
    <div className="p-4 border-t border-base-300">
      {/* User Info */}
      <div className={`flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors duration-200 cursor-pointer ${
        !sidebarOpen && 'justify-center'
      }`}>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-content font-semibold text-sm">U</span>
        </div>
        {sidebarOpen && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-base-content">
              User Name
            </p>
            <p className="text-xs truncate text-base-content/70">
              user@emailly.com
            </p>
          </div>
        )}
      </div>

      {/* Sign Out Button */}
      <button
        onClick={onSignOut}
        className="flex items-center gap-3 w-full px-4 py-3.5 mt-2 rounded-xl transition-all duration-200 hover:bg-error/10 group text-base-content/70 hover:text-error"
      >
        <Icons.FiLogOut className="w-5 h-5 transition-colors" />
        {sidebarOpen && (
          <span className="font-medium text-sm transition-colors">Sign Out</span>
        )}
      </button>
    </div>
  );
};