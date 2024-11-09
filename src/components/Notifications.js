import React from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <div className="notification">1 new Researcher registered</div>
      <div className="notification">All records are up to Date</div>
      <div className="notification">No urgent data requests</div>
      <div className="notification">Check latest commits</div>
    </div>
  );
};

export default Notifications;
