import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    const signupDetails = [
      { name, username, email, phone, location, password, confirmPass },
    ];
    console.log(signupDetails);

    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setLocation("");
    setPassword("");
    setConfirmPass("");
  }

  return (
    <form className="auth-form" onSubmit={handleSignup}>
      <h2>Signup</h2>
      <p>Please fill your details to start your journey with us</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="tel"
          name="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="conPass">Confirm Password</label>
        <input
          type="password"
          name="conPass"
          id="conPass"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>

      <button className="form-btn">Signup</button>
    </form>
  );
}

export default Signup;
