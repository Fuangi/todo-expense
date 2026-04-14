import chat from "../../assets/service-collaboration.png";

function Contact() {
  return (
    <>
      <h1 className="contact-head">Get in Touch</h1>
      <div className="contact-me">
        <form className="contact-form">
          <p>Have any questions, inquiries or suggestions about our services? Fill in this form to share them with us!</p>
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
            <textarea
              name="message"
              id="message"
              placeholder="Write something here"
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
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
    </>
  );
}

export default Contact;
