import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  return (
        <div>
          Hello {user.username}
        </div>
  );
}
export default Dashboard;
