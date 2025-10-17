// app/dashboard/page.tsx
import { JSX } from 'react';
import { FiMail, FiUsers, FiBarChart, FiZap } from 'react-icons/fi';

const brandColors = {
  primary: "#1E90FF",
  secondary: "#FF6A00",
  accent: "#FFD700",
};

const stats = [
  { name: 'Total Emails', value: '1,234', icon: FiMail, change: '+12%', color: brandColors.primary },
  { name: 'Active Campaigns', value: '56', icon: FiZap, change: '+8%', color: brandColors.secondary },
  { name: 'Subscribers', value: '45.6K', icon: FiUsers, change: '+23%', color: '#10B981' },
  { name: 'Open Rate', value: '34.2%', icon: FiBarChart, change: '+2%', color: brandColors.accent },
];

const recentActivities = [
  { action: 'Created new template', time: '2 minutes ago', user: 'You' },
  { action: 'Sent campaign to 5K users', time: '1 hour ago', user: 'Sarah' },
  { action: 'Updated subscriber list', time: '3 hours ago', user: 'Mike' },
  { action: 'Designed new email', time: '5 hours ago', user: 'You' },
];

export default function DashboardPage(): JSX.Element {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
          Welcome back, User! 👋
        </h1>
        <p className="text-lg" style={{ color: "#666" }}>
          Here&apos;s what&lsquo;s happening with your emails today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="p-6 rounded-2xl border-2 transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "#f0f0f0"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <span 
                  className="text-sm font-semibold px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${stat.color}20`,
                    color: stat.color
                  }}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: "#1a1a1a" }}>
                {stat.value}
              </h3>
              <p className="text-sm" style={{ color: "#666" }}>
                {stat.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div 
          className="p-6 rounded-2xl border-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "#f0f0f0"
          }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white transition-colors">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${brandColors.primary}20` }}
                >
                  <FiMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium" style={{ color: "#1a1a1a" }}>
                    {activity.action}
                  </p>
                  <p className="text-sm" style={{ color: "#666" }}>
                    {activity.time} • {activity.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div 
          className="p-6 rounded-2xl border-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderColor: "#f0f0f0"
          }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button 
              className="p-4 rounded-xl border-2 text-center transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: brandColors.primary,
                color: brandColors.primary
              }}
            >
              <FiMail className="w-8 h-8 mx-auto mb-2" />
              <span className="font-semibold">New Email</span>
            </button>
            <button 
              className="p-4 rounded-xl border-2 text-center transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: brandColors.secondary,
                color: brandColors.secondary
              }}
            >
              <FiZap className="w-8 h-8 mx-auto mb-2" />
              <span className="font-semibold">Template</span>
            </button>
            <button 
              className="p-4 rounded-xl border-2 text-center transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#10B981",
                color: "#10B981"
              }}
            >
              <FiUsers className="w-8 h-8 mx-auto mb-2" />
              <span className="font-semibold">Audience</span>
            </button>
            <button 
              className="p-4 rounded-xl border-2 text-center transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: brandColors.accent,
                color: brandColors.accent
              }}
            >
              <FiBarChart className="w-8 h-8 mx-auto mb-2" />
              <span className="font-semibold">Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}