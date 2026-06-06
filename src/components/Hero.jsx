import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div>
        <h1>Explore The World</h1>
        <p>Book your dream vacation today.</p>

        <button onClick={() => navigate("/packages")}>
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;