import React from "react";

function Login() {
  return (
    <form className="auth-form">
      <h2>Login</h2>
      <p>Please enter your email and password to log into you account</p>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button className="form-btn">Login</button>
    </form>
  );
}

export default Login;
