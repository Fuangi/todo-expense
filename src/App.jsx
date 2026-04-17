import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import Modal from "./layout/Modal";
import AuthModal from "./components/auth/AuthModal";
import Homepage from "./features/Homepage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/homepage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route
            path="auth"
            element={<Modal children={<AuthModal />} prevLocation="/" />}
          >
            <Route index element={<Navigate to="signup" />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />{" "}
          </Route>
        </Route>
      </Routes>
      <HomeRoutes />
    </BrowserRouter>
  );
}

export default App;
