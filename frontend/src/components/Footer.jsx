import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">
            <span className="gold">Royal</span> Attar
          </h3>
          <p>Premium quality attars since 1985. Handcrafted with ancient techniques and pure natural ingredients.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Western Attars</a></li>
            <li><a href="#">Eastern Attars</a></li>
            <li><a href="#">Premium Collection</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li><FaPhone /> +92 300 1234567</li>
            <li><FaEnvelope /> info@royalattar.com</li>
            <li><FaMapMarkerAlt /> Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Royal Attar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer