// app/dashboard/loading.tsx
'use client';

import { JSX } from 'react';

export default function DashboardLoading(): JSX.Element {
  return (
    <div className="p-6 space-y-8 animate-pulse">
      {/* Welcome Section Skeleton */}
      <div className="text-center lg:text-left space-y-4">
        <div className="h-8 bg-base-300 rounded-xl w-64 mx-auto lg:mx-0"></div>
        <div className="h-6 bg-base-300 rounded-lg w-80 mx-auto lg:mx-0"></div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-base-300 bg-base-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-base-300 rounded-xl"></div>
              <div className="w-16 h-6 bg-base-300 rounded-full"></div>
            </div>
            <div className="h-8 bg-base-300 rounded-lg w-3/4 mb-2"></div>
            <div className="h-4 bg-base-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Two Column Layout Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity Skeleton */}
        <div className="p-6 rounded-xl border border-base-300 bg-base-100">
          <div className="h-7 bg-base-300 rounded-lg w-48 mb-6"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-3">
                <div className="w-10 h-10 bg-base-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-base-300 rounded w-3/4"></div>
                  <div className="h-3 bg-base-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Skeleton */}
        <div className="p-6 rounded-xl border border-base-300 bg-base-100">
          <div className="h-7 bg-base-300 rounded-lg w-48 mb-6"></div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-base-300 bg-base-100 text-center"
              >
                <div className="w-8 h-8 bg-base-300 rounded-lg mx-auto mb-2"></div>
                <div className="h-4 bg-base-300 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}