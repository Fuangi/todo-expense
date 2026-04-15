import React, { useState } from "react";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <div className="home-head" id="home">
      <div className="home-wrapper">
        <h1> V's To-do and Expense Tracker</h1>
        <h3>
          Where planning and budgetting coalasce to make you life easier and
          your financial accountability better!
        </h3>
        <p>
          Start your journey today to account for yesterday and prepare for
          tomorrow
        </p>

        <div className="home-links">
          <HashLink to="#about">Know More </HashLink>
          <Link to="/auth">Join Us </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
