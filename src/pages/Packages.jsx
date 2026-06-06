import { useState } from "react";
import "./Packages.css";

function Packages() {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Goa Beach Trip", price: 19999, type: "Beach" },
    { name: "Bali Adventure", price: 29999, type: "Adventure" },
    { name: "Dubai Luxury Tour", price: 49999, type: "Luxury" },
    { name: "Paris Romantic Trip", price: 45999, type: "Romantic" },
    { name: "Maldives Honeymoon", price: 39999, type: "Honeymoon" },
    { name: "Switzerland Mountain Tour", price: 54999, type: "Adventure" },
  ];

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="packages-page"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >

      {/* OVERLAY */}
      <div className="packages-overlay">

        {/* HERO */}
        <div className="packages-hero">
          <h1>✈️ Explore Travel Packages</h1>
          <p>Find your perfect destination with unbeatable prices</p>

          <input
            className="search-bar"
            placeholder="Search Goa, Dubai, Maldives..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* GRID */}
        <div className="packages-grid">
          {filtered.map((item, i) => (
            <div key={i} className="package-card">

              <div className="tag">{item.type}</div>

              <h3>{item.name}</h3>

              <p className="price">
                ₹{item.price.toLocaleString()}
                <span>/person</span>
              </p>

              <button>Book Now ✈️</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Packages;