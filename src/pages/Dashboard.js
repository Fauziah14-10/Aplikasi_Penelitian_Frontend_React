import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
