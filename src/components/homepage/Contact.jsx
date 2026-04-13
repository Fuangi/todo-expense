import React from "react";

function Contact() {
  return (
    <div className="contact-me">
      {/* <h1>Get in Touch</h1> */}
      <form className="contact-form">
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="text" name="email" id="name" />
        </div>
        <div>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message"></textarea>
        </div>
      </form>
      <div className="my-details">
        <div className="my-details-intro">
          <img src="" alt="" />
          <h3>Vanessa Fuangi</h3>
        </div>
        <div className="my-details-socials">
          <p>vanessafuangi@gmail.com</p>
          <p>+237682866419</p>
          <p>Mayor Street, Buea</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
