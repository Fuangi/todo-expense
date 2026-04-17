import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../features/Homepage";
import Services from "../components/homepage/Services";
import About from "../components/homepage/About";
import Contact from "../components/homepage/Contact";
import Home from "../components/homepage/Home";

function HomeRoutes() {
  return (
    <>
      <Routes>
        <Route path="#home" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default HomeRoutes;
