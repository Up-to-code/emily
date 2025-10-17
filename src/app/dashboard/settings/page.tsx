/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/settings/page.tsx
'use client';

import { JSX, useState } from 'react';
import { FiUser, FiCreditCard, FiSave, FiEdit, FiMail, FiPhone, FiGlobe, FiShield, FiBell } from 'react-icons/fi';

type TabType = 'account' | 'billing';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

interface BillingInfo {
  plan: string;
  status: 'active' | 'canceled' | 'past_due';
  nextBilling: string;
  cardLast4: string;
}

export default function SettingsPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('account');
  const [isEditing, setIsEditing] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Alex Johnson',
    email: 'alex.johnson@company.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    position: 'Marketing Director'
  });

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    plan: 'Professional',
    status: 'active',
    nextBilling: 'March 15, 2024',
    cardLast4: '4242'
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Saving profile:', userProfile);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-base-content">Settings</h1>
        <p className="text-lg text-base-content/70">Manage your account and billing</p>
      </div>

      {/* Top Line Tabs */}
      <div className="border-b border-base-300">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('account')}
            className={`pb-4 px-1 border-b-2 transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'account' 
                ? 'border-primary text-primary font-semibold' 
                : 'border-transparent text-base-content/70 hover:text-base-content'
            }`}
          >
            <FiUser className="w-5 h-5" />
            Account Details
          </button>
          
          <button
            onClick={() => setActiveTab('billing')}
            className={`pb-4 px-1 border-b-2 transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'billing' 
                ? 'border-primary text-primary font-semibold' 
                : 'border-transparent text-base-content/70 hover:text-base-content'
            }`}
          >
            <FiCreditCard className="w-5 h-5" />
            Billing & Plans
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'account' && (
          <AccountTab 
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onSave={handleSaveProfile}
          />
        )}

        {activeTab === 'billing' && (
          <BillingTab billingInfo={billingInfo} />
        )}
      </div>
    </div>
  );
}

// Account Tab Component
const AccountTab = ({ 
  userProfile, 
  setUserProfile, 
  isEditing, 
  setIsEditing, 
  onSave 
}: any) => {
  return (
    <div className="space-y-6">
      {/* Header with Edit Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-base-content">Account Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-outline gap-2 py-2.5"
          >
            <FiEdit className="w-4 h-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="btn btn-outline py-2.5"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="btn btn-primary gap-2 py-2.5 text-primary-content"
            >
              <FiSave className="w-4 h-4" />
              Save
            </button>
          </div>
        )}
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="p-6 rounded-xl border border-base-300 bg-base-100 space-y-4">
          <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
            <FiUser className="w-5 h-5 text-primary" />
            Personal Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-base-content mb-2">Full Name</label>
              {isEditing ? (
                <input
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                  className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              ) : (
                <div className="px-4 py-3 bg-base-200 rounded-xl">{userProfile.name}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-base-content mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                  className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              ) : (
                <div className="px-4 py-3 bg-base-200 rounded-xl">{userProfile.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-base-content mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={userProfile.phone}
                  onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              ) : (
                <div className="px-4 py-3 bg-base-200 rounded-xl">{userProfile.phone}</div>
              )}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="p-6 rounded-xl border border-base-300 bg-base-100 space-y-4">
          <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
            <FiGlobe className="w-5 h-5 text-accent" />
            Company Information
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-base-content mb-2">Company Name</label>
              {isEditing ? (
                <input
                  value={userProfile.company}
                  onChange={(e) => setUserProfile({...userProfile, company: e.target.value})}
                  className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              ) : (
                <div className="px-4 py-3 bg-base-200 rounded-xl">{userProfile.company}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-base-content mb-2">Position</label>
              {isEditing ? (
                <input
                  value={userProfile.position}
                  onChange={(e) => setUserProfile({...userProfile, position: e.target.value})}
                  className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              ) : (
                <div className="px-4 py-3 bg-base-200 rounded-xl">{userProfile.position}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6 rounded-xl border border-base-300 bg-base-100">
        <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
          <FiShield className="w-5 h-5 text-warning" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 rounded-xl border border-base-300 bg-base-200 hover:bg-base-300 transition-all text-left">
            <div className="flex items-center gap-3 mb-2">
              <FiShield className="w-5 h-5 text-base-content/70" />
              <span className="font-medium">Change Password</span>
            </div>
            <p className="text-sm text-base-content/70">Update your account password</p>
          </button>

          <button className="p-4 rounded-xl border border-base-300 bg-base-200 hover:bg-base-300 transition-all text-left">
            <div className="flex items-center gap-3 mb-2">
              <FiBell className="w-5 h-5 text-base-content/70" />
              <span className="font-medium">Notifications</span>
            </div>
            <p className="text-sm text-base-content/70">Manage email notifications</p>
          </button>
        </div>
      </div>
    </div>
  );
};

// Billing Tab Component
const BillingTab = ({ billingInfo }: any) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success';
      case 'canceled': return 'bg-error/20 text-error';
      case 'past_due': return 'bg-warning/20 text-warning';
      default: return 'bg-base-300 text-base-content';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-base-content">Billing Information</h2>

      {/* Current Plan */}
      <div className="p-6 rounded-xl border border-base-300 bg-base-100 space-y-6">
        <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
          <FiCreditCard className="w-5 h-5 text-primary" />
          Current Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-base-300 bg-base-200">
            <div className="text-sm text-base-content/70">Plan</div>
            <div className="text-xl font-semibold text-base-content">{billingInfo.plan}</div>
          </div>

          <div className="p-4 rounded-xl border border-base-300 bg-base-200">
            <div className="text-sm text-base-content/70">Status</div>
            <div className={`inline-flex px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(billingInfo.status)}`}>
              {billingInfo.status.toUpperCase()}
            </div>
          </div>

          <div className="p-4 rounded-xl border border-base-300 bg-base-200">
            <div className="text-sm text-base-content/70">Next Billing</div>
            <div className="text-xl font-semibold text-base-content">{billingInfo.nextBilling}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="btn btn-primary py-2.5 text-primary-content">
            Upgrade Plan
          </button>
          <button className="btn btn-outline py-2.5">
            Cancel Subscription
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-6 rounded-xl border border-base-300 bg-base-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
            <FiCreditCard className="w-5 h-5 text-secondary" />
            Payment Method
          </h3>
          <button className="btn btn-outline py-2.5 gap-2">
            <FiEdit className="w-4 h-4" />
            Update
          </button>
        </div>

        <div className="p-4 rounded-xl border border-base-300 bg-base-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div>
              <div className="font-medium text-base-content">Visa •••• {billingInfo.cardLast4}</div>
              <div className="text-sm text-base-content/70">Expires 12/2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="p-6 rounded-xl border border-base-300 bg-base-100 space-y-4">
        <h3 className="text-lg font-semibold text-base-content">Billing History</h3>
        
        <div className="space-y-3">
          {[
            { date: 'Feb 15, 2024', amount: '$49.00', status: 'Paid' },
            { date: 'Jan 15, 2024', amount: '$49.00', status: 'Paid' },
            { date: 'Dec 15, 2023', amount: '$49.00', status: 'Paid' },
          ].map((invoice, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-base-300 bg-base-200">
              <div>
                <div className="font-medium text-base-content">{invoice.date}</div>
                <div className="text-sm text-base-content/70">Professional Plan</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-base-content">{invoice.amount}</div>
                <div className="text-sm text-success">{invoice.status}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-outline w-full py-2.5">
          View Full History
        </button>
      </div>
    </div>
  );
};