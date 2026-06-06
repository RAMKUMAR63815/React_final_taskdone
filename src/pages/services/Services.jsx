import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div
      className="services-page"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >

    
      <div className="services-overlay">

   
        <div className="services-hero">
          <h1>🌍 Our Travel Services</h1>
          <p>Everything you need for a perfect journey in one place</p>
        </div>

        <div className="services-nav">

          <Link to="flights" className="service-card">
            <span>✈️</span>
            <h3>Flights</h3>
            <p>Book domestic & international flights</p>
          </Link>

          <Link to="hotels" className="service-card">
            <span>🏨</span>
            <h3>Hotels</h3>
            <p>Luxury & budget hotel stays</p>
          </Link>

          <Link to="cabs" className="service-card">
            <span>🚖</span>
            <h3>Cabs</h3>
            <p>Quick and safe city rides</p>
          </Link>

        </div>

 
        <div className="service-box">
          <h2>✨ Select a service to explore</h2>
          <p>Click on Flights, Hotels, or Cabs above to continue.</p>
        </div>

      </div>
    </div>
  );
}

export default Services;