function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in <span className="gold">Touch</span></h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className="contact-container-single">
        {/* Contact Form Only */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button className="submit-btn">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage