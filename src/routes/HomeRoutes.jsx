import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../features/Homepage";
import Services from "../components/homepage/Services";
import About from "../components/homepage/About";
import Contact from "../components/homepage/Contact";
import AuthModal from "../components/auth/AuthModal";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

function HomeRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="#services" element={<Services />} />
        <Route path="#about" element={<About />} />
        <Route path="#contact" element={<Contact />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
      {/* My auth routes */}

      <Routes>
        <Route path="auth" element={<AuthModal />}>
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default HomeRoutes;
