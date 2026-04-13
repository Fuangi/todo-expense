import React from "react";

function Contact() {
  return (
    <>
    <h1 className="contact-head">Get in Touch</h1>
    <div className="contact-me">
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
        <button>Send Message</button>
      </form>
      <div className="my-details">
        <h3>Vanessa Fuangi</h3>

        <div className="my-details-socials">
          <p>vanessafuangi@gmail.com</p>
          <p>+237682866419</p>
          <p>Mayor Street, Buea</p>

          <div>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
    </div>
      </div>
    </>
  );
}

export default Contact;
