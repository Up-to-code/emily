// components/ui/Icons.tsx
import {
  FiHome, FiMail, FiSettings, FiUser, FiBarChart, FiZap,
  FiChevronLeft, FiChevronRight, FiLogOut, FiMenu, FiBell, FiSearch,
  FiStar, FiTrendingUp, FiUsers, FiFileText
} from 'react-icons/fi';

export const Icons = {
  FiHome, FiMail, FiSettings, FiUser, FiBarChart, FiZap,
  FiChevronLeft, FiChevronRight, FiLogOut, FiMenu, FiBell, FiSearch,
  FiStar, FiTrendingUp, FiUsers, FiFileText
} as const;

export type IconName = keyof typeof Icons;

// Type guard to check if a string is a valid icon name
export const isValidIconName = (name: string): name is IconName => {
  return name in Icons;
};

// Safe icon getter with fallback
export const getIconComponent = (iconName: string) => {
  if (isValidIconName(iconName)) {
    return Icons[iconName];
  }
  // Fallback to a default icon
  console.warn(`Icon "${iconName}" not found. Using FiHome as fallback.`);
  return FiHome;
};