import { Routes, Route } from "react-router-dom";
import Homepage from "../features/Homepage";
import Services from "../components/homepage/Services";
import About from "../components/homepage/About";
import Contact from "../components/homepage/Contact";

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="#services" element={<Services />} />
      <Route path="#about" element={<About />} />
      <Route path="#contact" element={<Contact />} />
    </Routes>
  );
}

export default HomeRoutes;
