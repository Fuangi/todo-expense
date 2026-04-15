import React, { useState } from "react";
import Button from "../../utils/Button";

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

        <div className="home-buttons">
          <Button content="Know more" />
          <Button content="Join us" />
        </div>
      </div>
    </div>
  );
}

export default Home;
