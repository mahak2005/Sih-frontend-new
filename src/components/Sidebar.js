import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <ul>
        <li>Upload New Files</li>
        <li>Update Data</li>
        <li>Version Control</li>
        <li>Manage Access</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
