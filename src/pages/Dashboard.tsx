import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        {/* Dashboard content goes here */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {/* Add other dashboard widgets or content here */}
      </main>
    </div>
  );
};

export default Dashboard;
