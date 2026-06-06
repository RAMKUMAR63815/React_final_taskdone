import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully! ✈️");

    // ✅ CLEAR INPUT FIELDS AFTER SUBMIT
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="contact-page"
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
      <div className="contact-overlay">

        {/* TITLE */}
        <div className="contact-hero">
          <h1>📞 Contact TravelGo</h1>
          <p>We are here to help you 24/7</p>
        </div>

        {/* GRID */}
        <div className="contact-grid">

          {/* FORM */}
          <form onSubmit={submit} className="form-box1">

            <input
              value={form.name}
              placeholder="Your Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              value={form.email}
              placeholder="Your Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              value={form.message}
              placeholder="Your Message"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button type="submit">Send Message ✈️</button>
          </form>

          {/* INFO CARD */}
          <div className="info-card">
            <h2>🌍 TravelGo Office</h2>
            <p>📍 Chennai, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 travelgo@gmail.com</p>
            <p>🕒 24/7 Support Available</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;