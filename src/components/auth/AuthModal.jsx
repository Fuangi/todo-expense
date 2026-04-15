import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";

function AuthModal({ children }) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  return (
    <div className="modal-overlay" onClick={() => navigate("/")}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="auth-header">
          {/* These act as tabs to switch between forms */}
          <NavLink to="/auth/login">Login</NavLink>
          <NavLink to="/auth/signup">Sign Up</NavLink>
        </div>

        <div className="auth-body">
          {/* This is where LoginForm or SignupForm will render */}
          <Outlet />
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
