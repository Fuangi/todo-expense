import React from "react";

function Signup() {
  return (
    <form className="auth-form">
      <h2>Signup</h2>
      <p>Please fill your details to start your journey with us</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="tel" name="location" id="location" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="conPass">Confirm Password</label>
        <input type="password" name="conPass" id="conPass" />
      </div>

      <button className="form-btn">Signup</button>
    </form>
  );
}

export default Signup;
