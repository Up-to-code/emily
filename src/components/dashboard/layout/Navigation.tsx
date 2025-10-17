// components/dashboard/Navigation.tsx
import { usePathname } from 'next/navigation';
import { NavigationItem } from './NavigationItem';
import { navigationItems } from '@/lib/theme';
import type { NavigationProps } from './types/navigation';

export const Navigation = ({ sidebarOpen, onItemClick }: NavigationProps) => {
  const pathname = usePathname();

  // Enhanced navigation items with additional data
  const enhancedNavigationItems = navigationItems.map(item => ({
    ...item,
    isActive: pathname === item.href,
    // Example badges - you can make this dynamic
    badge: item.name === 'Emails' ? 3 : item.name === 'Analytics' ? 12 : undefined,
    isNew: item.name === 'Templates'
  }));

  return (
    <nav 
      className="flex-1 px-4 py-6 space-y-1"
      aria-label="Main navigation"
    >
      {enhancedNavigationItems.map((item) => (
        <NavigationItem
          key={item.name}
          {...item}
          sidebarOpen={sidebarOpen}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};