function Home() {
  return (
    <div className="hero">
      <h1>Find Your Dream Job</h1>

      <p>
        Connect with top companies and explore
        thousands of opportunities.
      </p>

      <button className="btn">
        Explore Jobs
      </button>

      <div className="stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Jobs</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>2000+</h2>
          <p>Candidates</p>
        </div>
      </div>
    </div>
  );
}

export default Home;