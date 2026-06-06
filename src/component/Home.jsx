import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "../components/PackageCard";

export default function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // Auto navigate when count reaches 10
  useEffect(() => {
    if (count === 10) {
      navigate("/contact");
    }
  }, [count, navigate]);

  // Packages data
  const packages = [
    {
      id: 1,
      title: "Goa Beach Trip",
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
    <div className="page">
      <h2>Home Component</h2>

      {/* COUNTER SECTION */}
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => navigate("/contact")}>
        Move to Contact
      </button>

      {/* PACKAGES SECTION */}
      <h2 style={{ marginTop: "40px" }}>
        🌍 Popular Packages
      </h2>

      <div className="grid">
        {packages.map((p) => (
          <PackageCard
            key={p.id}
            id={p.id}
            title={p.title}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}