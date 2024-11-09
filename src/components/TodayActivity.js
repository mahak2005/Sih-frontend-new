import React from 'react';
import '../styles/TodayActivity.css';

const TodayActivity = () => {
  return (
    <div className="today-activity">
      <h3>Today's Activity</h3>
      <div className="activity-cards">
        <div className="card">415 Active Users</div>
        <div className="card">29570 Records</div>
        <div className="card">0 Commits</div>
        <div className="card">10 Active Admins</div>
      </div>
    </div>
  );
};

export default TodayActivity;
