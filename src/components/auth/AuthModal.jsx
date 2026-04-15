import { useNavigate, Outlet } from "react-router-dom";

function AuthModal({ children }) {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay" onClick={() => navigate("/")}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="auth-header">
          {/* These act as tabs to switch between forms */}
          <button onClick={() => navigate("login")}>Login</button>
          <button onClick={() => navigate("signup")}>Sign Up</button>
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
