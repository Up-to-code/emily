// components/HydrationWrapper.tsx
'use client';

import { useEffect, useState } from 'react';

export default function HydrationWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={isMounted ? 'block' : 'hidden'}>
      {children}
    </div>
  );
}