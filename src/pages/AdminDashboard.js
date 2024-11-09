import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TodayActivity from '../components/TodayActivity';
import Notifications from '../components/Notifications';
import LatestActions from '../components/LatestActions';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <Header activePage="Admin Dashboard" toggleSidebar={toggleSidebar} />
      <div className="dashboard-container">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <TodayActivity />
          <Notifications />
          <LatestActions />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
