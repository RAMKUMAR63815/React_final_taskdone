import { useState } from "react";
import "./Dashboard1.css";

function Dashboard() {
  const [place, setPlace] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (!place.trim()) return;
    setList([...list, { id: Date.now(), place }]);
    setPlace("");
  };

  const del = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <div
      className="dashboard-page"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="dashboard-overlay">

        <div className="dashboard-hero">
          <h1>📍 Travel Booking Dashboard</h1>
          <p>Plan, manage and track your dream destinations</p>
        </div>

        <div className="dashboard-grid">

          <div className="form-box">
            <input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Enter destination (Goa, Dubai, Paris...)"
            />
            <button onClick={add}>➕ Add Booking</button>
          </div>

          {list.length === 0 ? (
            <div className="empty">
              <h2>🧳 No Bookings Yet</h2>
              <p>Start adding your travel destinations ✈️</p>
            </div>
          ) : (
            list.map((i) => (
              <div key={i.id} className="dashboard-card">
                <span>📍 {i.place}</span>
                <button onClick={() => del(i.id)}>Delete</button>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;