import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";

function Home() {
  const packages = [
    {
      id: 1,
      title: "Goa Beach Holiday",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      price: 14999,
    },
    {
      id: 2,
      title: "Bali Paradise",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      price: 49999,
    },
    {
      id: 3,
      title: "Dubai Luxury Tour",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      price: 69999,
    },
  ];

  return (
    <>
      <Hero />

      <section className="section">
        <h2>🌍 Popular Destinations</h2>
        <p>Explore top travel destinations around the world</p>

        <div className="grid">
          {packages.map((p) => (
            <PackageCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="section dark">
        <h2>⭐ Why Choose TravelGo?</h2>

        <div className="grid">
          <div className="info-card">✔ Best Price Guarantee</div>
          <div className="info-card">✔ 24/7 Customer Support</div>
          <div className="info-card">✔ Trusted Travel Partners</div>
        </div>
      </section>
    </>
  );
}

export default Home;