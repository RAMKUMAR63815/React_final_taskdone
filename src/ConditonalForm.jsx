import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } 

    // Phone Validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if ((formData.phone.length<10)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Address Validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // City Validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // State Validation
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // Country Validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Zip Code Validation
    if (!formData.zipCode) {
      newErrors.zipCode = "Zip Code is required";
    } else if ((formData.zipCode.length<6)) {
      newErrors.zipCode = "Zip Code must be 6 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");
      console.log(formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span>{errors.phone}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <span>{errors.address}</span>

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <span>{errors.city}</span>

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <span>{errors.state}</span>

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <span>{errors.country}</span>

        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <span>{errors.zipCode}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;