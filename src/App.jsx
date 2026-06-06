// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";


import Services from "./pages/services/Services";
import Flights from "./pages/services/Flights";
import Hotels from "./pages/services/Hotels";
import Cabs from "./pages/services/Cabs";
import PackageDetails from "./pages/PackageDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/package/:id" element={<PackageDetails />} />

        <Route path="/services" element={<Services />}>
          <Route path="flights" element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="cabs" element={<Cabs />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;