
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import Footer from '@/components/Footer';
import { Shield, Eye, Bell, CreditCard, Languages, HelpCircle } from 'lucide-react';

const Settings = () => {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { name: 'Privacy & Security', icon: Shield, description: 'Manage your privacy settings and security preferences' },
        { name: 'Appearance', icon: Eye, description: 'Change how FitPass looks and feels' },
        { name: 'Notifications', icon: Bell, description: 'Configure when and how you want to be notified' }
      ]
    },
    {
      title: 'Payments',
      items: [
        { name: 'Payment Methods', icon: CreditCard, description: 'Manage your payment options and billing details' }
      ]
    },
    {
      title: 'Other',
      items: [
        { name: 'Language', icon: Languages, description: 'Change your language settings' },
        { name: 'Help & Support', icon: HelpCircle, description: 'Get help with using FitPass' }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-[#0F172A] text-[#E2E8F0]">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-white/10 px-6 py-4 bg-[#0F172A]">
          <h1 className="text-2xl font-bold">Settings</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            {settingsGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
                <div className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="p-4 rounded-lg border border-white/10 bg-[#1E293B] hover:bg-[#1E293B]/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-2 rounded-full bg-white/5">
                          <item.icon size={20} className="text-gymstr-orange" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-[#E2E8F0]/70">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Settings;
