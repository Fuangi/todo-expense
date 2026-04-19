import React, { useState } from "react";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const loginDetails = [{ loginEmail, loginPassword }];
    console.log(loginDetails);

    setLoginEmail("");
    setLoginPassword("");
  }
  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <p>Please enter your email and password to log into you account</p>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <button className="form-btn">Login</button>
    </form>
  );
}

export default Login;
