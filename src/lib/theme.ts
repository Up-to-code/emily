// lib/theme.ts

import { NavigationItem } from "@/components/dashboard/layout/types/navigation";

 
export const brandColors = {
  primary: "#F77658",    // Periwinkle Blue
  secondary: "#839DF9",  // Coral Red
  accent: "#FFC936",     // Yellow
  success: "#5CBF84",
  warning: "#FFC936",
  error: "#F77658",
};

export const navigationItems: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: 'FiHome' },
  { name: 'Emails', href: '/dashboard/emails', icon: 'FiMail' },
  { name: 'Templates', href: '/dashboard/marketplace', icon: 'FiZap' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: 'FiBarChart' },
  { name: 'Team', href: '/dashboard/team', icon: 'FiUsers' },
  { name: 'Settings', href: '/dashboard/settings', icon: 'FiSettings' },
];