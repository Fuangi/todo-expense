import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  const validatePassword = (password) => {
    if (PASSWORD_REGEX.test(password)) {
      alert("Password is valid!");
      return true;
    } else {
      alert(
        "Password must contain atleast 1 number, 1 uppercase and a special character",
      );
      return false;
    }
  };

  function handleSignup(e) {
    e.preventDefault();

    if (username.length < 3)
      return alert("Username must be at least 3 characters");

    if (confirmPass !== password) return alert("Passwords do not match");
    else if (!PASSWORD_REGEX.test(password)) {
      alert(
        "Password must be at least 8 characters and include an uppercase letter, a number, and a symbol.",
      );
      return; // Stop the form from submitting
    }

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
          required
        />
      </div>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          required
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
          required
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
          required
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
          required
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
          required
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
          required
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>

      <button className="form-btn">Signup</button>
    </form>
  );
}

export default Signup;
