// types/navigation.ts
export interface NavigationItem {
    name: string;
    href: string;
    icon: string;
    badge?: number;
    isNew?: boolean;
  }
  
  export interface NavigationProps {
    sidebarOpen: boolean;
    onItemClick?: () => void;
  }
  
  export interface NavigationItemProps extends NavigationItem {
    isActive: boolean;
    sidebarOpen: boolean;
    onClick?: () => void;
  }