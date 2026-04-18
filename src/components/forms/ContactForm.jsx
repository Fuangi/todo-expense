import { useState } from "react";

function ContactForm() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleContact(e) {
    e.preventDefault();

    const contactDetails = [{ contactName, contactEmail, message }];
    console.log(contactDetails);

    setContactEmail("");
    setContactName("");
    setMessage("");
  }
  return (
    <form className="contact-form" onSubmit={handleContact}>
      <p>
        Have any questions, inquiries or suggestions about our services? Fill in
        this form to share them with us!
      </p>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          name="email"
          id="name"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Your message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Write something here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button>Send Message</button>
    </form>
  );
}

export default ContactForm;
