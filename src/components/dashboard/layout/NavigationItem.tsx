// components/dashboard/NavigationItem.tsx
import Link from 'next/link';
import { getIconComponent } from '@/components/ui/Icons';
import type { NavigationItemProps } from './types/navigation';

export const NavigationItem = ({ 
  name, 
  href, 
  icon, 
  isActive, 
  sidebarOpen, 
  onClick,
  badge,
  isNew
}: NavigationItemProps) => {
  const IconComponent = getIconComponent(icon);
  
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group
        relative
        ${isActive 
          ? 'bg-primary text-primary-content shadow-sm' 
          : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
        }
      `}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Icon Container */}
      <div className={`
        flex items-center justify-center w-5 h-5 transition-colors duration-200
        ${isActive ? 'text-primary-content' : 'text-base-content/60 group-hover:text-primary'}
      `}>
        <IconComponent className="w-full h-full" />
      </div>
      
      {/* Text Content */}
      {sidebarOpen && (
        <div className="flex items-center justify-between flex-1 min-w-0">
          <span className="font-medium text-sm truncate">{name}</span>
          
          {/* Badges */}
          <div className="flex items-center gap-1 ml-2">
            {isNew && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-content">
                New
              </span>
            )}
            {badge && badge > 0 && (
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-xs font-medium bg-secondary text-secondary-content">
                {badge > 99 ? '99+' : badge}
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Active Indicator for Collapsed State */}
      {!sidebarOpen && isActive && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
      )}
    </Link>
  );
};