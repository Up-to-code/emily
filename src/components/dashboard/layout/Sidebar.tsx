// components/dashboard/Sidebar.tsx
import { SidebarHeader } from './SidebarHeader';
import { Navigation } from './Navigation';
import { UserSection } from './UserSection';

interface SidebarProps {
  sidebarOpen: boolean;
  mobileSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onCloseMobile: () => void;
  onSignOut: () => void;
}

export const Sidebar = ({
  sidebarOpen,
  mobileSidebarOpen,
  onToggleSidebar,
  onCloseMobile,
  onSignOut
}: SidebarProps) => {
  return (
    <div 
      className={`
        fixed inset-y-0 left-0 z-50 bg-base-100
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${sidebarOpen ? 'w-64' : 'w-20'}
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        border-r border-base-300
      `}
    >
      <div className="flex flex-col h-full">
        <SidebarHeader 
          sidebarOpen={sidebarOpen} 
          onToggle={onToggleSidebar} 
        />
        
        <Navigation 
          sidebarOpen={sidebarOpen} 
          onItemClick={onCloseMobile}
        />
        
        <UserSection 
          sidebarOpen={sidebarOpen} 
          onSignOut={onSignOut}
        />
      </div>
    </div>
  );
};