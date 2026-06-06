import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard-menu">

        <Link to="profile">
          Profile
        </Link>

        <Link to="applied">
          Applied Jobs
        </Link>

        <Link to="saved">
          Saved Jobs
        </Link>

      </div>

      <Outlet />

    </div>
  );
}

export default Dashboard;