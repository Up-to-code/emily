// components/dashboard/Header.tsx
import { Icons } from '@/components/ui/Icons';

interface HeaderProps {
  onOpenMobileSidebar: () => void;
}

export const Header = ({ onOpenMobileSidebar }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-base-300 sticky top-0 z-30 bg-base-100">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-base-200 transition-colors duration-200 text-primary"
        >
          <Icons.FiMenu className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Icons.FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3.5 bg-base-200 border border-base-300 rounded-xl text-base-content placeholder:text-base-content/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-base-200 transition-colors duration-200 text-base-content/70 hover:text-base-content">
          <Icons.FiBell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>

        {/* User Profile (Mobile) */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-content font-semibold text-xs">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};