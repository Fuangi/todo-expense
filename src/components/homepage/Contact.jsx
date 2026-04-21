import { FaEnvelope, FaLink, FaLinkedin, FaPhone } from "react-icons/fa";
import chat from "../../assets/service-collaboration.png";
import ContactForm from "../forms/ContactForm";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
              <p><FaEnvelope className="info-icon"/> vanessafuangi@gmail.com</p>
              <p><FaPhone className="info-icon"/> +237682866419</p>
              <p> <FaLocationPin className="info-icon"/> Mayor Street, Buea</p>
            </div>
          </div>
          <div className="socials">
            <div className="social-side">
              <p>Follow me on social:</p>
              <Link to="">
                <FaLinkedin className="social-link" />
              </Link>
              <Link to="">
                <FaInstagram className="social-link" />
              </Link>
              <Link to="">
                <FaFacebook className="social-link" />
              </Link>
            </div>
            <div className="website-side">
              <Link to="">
                <FaLink className="social-link" /> My website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
