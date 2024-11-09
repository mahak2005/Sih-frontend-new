import React from 'react';
import '../styles/LatestActions.css';

const LatestActions = () => {
  return (
    <div className="latest-actions">
      <h3>Latest Actions</h3>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User 201 performed a check in to table #Species</td>
            <td>less than a min ago</td>
          </tr>
          <tr>
            <td>User 78 downloaded the data</td>
            <td>1 hour ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestActions;
