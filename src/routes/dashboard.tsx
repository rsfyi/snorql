import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="py-4 px-2">
      <Outlet />
    </div>
  );
}

export default Dashboard;
