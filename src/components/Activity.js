import React from 'react';
import '../styles/Activity.css';

function Activity() {
  return (
    <div className="activity-container">
      <div className="activity-box">415 Active Users</div>
      <div className="activity-box">29570 Records</div>
      <div className="activity-box">0 Commits</div>
      <div className="activity-box">10 Active Admins</div>
      <button className="datasets-btn">Datasets</button>
      <button className="actions-btn">Actions</button>
    </div>
  );
}

export default Activity;
