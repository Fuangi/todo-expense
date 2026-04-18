import chat from "../../assets/service-collaboration.png";
import ContactForm from "../forms/ContactForm";

function Contact() {
  return (
    <section id="contact">
      <h1 className="contact-head">Get in Touch</h1>
      <div className="contact-me">
        <ContactForm />
        <div className="my-details">
          <div className="my-contact">
            <div className="logo-area">
              <img src={chat} alt="" />
              <h3>Vanessa Fuangi</h3>
            </div>
            <div className="info-area">
              <p>vanessafuangi@gmail.com</p>
              <p>+237682866419</p>
              <p>Mayor Street, Buea</p>
            </div>
          </div>
          <div className="socials">
            <div className="social-side">
              <p>LinkedIn</p>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
            <div className="website-side">
              <p>My website</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
