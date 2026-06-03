import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef(null)
  const megaMenuRef = useRef(null)
  const triggerRef = useRef(null)
  
  const categories = {
    men: [
      'Oud Collection', 'Woody Fragrances', 'Spicy Attars', 
      'Premium Men', 'Best Sellers Men', 'Black & Silver Platinum',
      'Ameer Al Oud', 'Sultan E Ameer', 'The Great Oud'
    ],
    women: [
      'Floral Attars', 'Rose Collection', 'Sweet Fragrances', 
      'Premium Women', 'Best Sellers Women', 'Oudh Al Ward',
      'Musk Al Mahal', 'Ghilaf E Kaba', 'Hajar E Aswad'
    ],
    season: [
      'Summer Fresh Attars', 'Summer Citrus Collection', 'Summer Light Fragrances', 'Summer Specials',
      'Winter Warm Oud', 'Winter Amber Collection', 'Winter Rich Attars', 'Winter Specials',
      'Spring Floral Fresh', 'Spring Garden Collection', 'Spring Breeze', 'Spring Light Oud',
      'Autumn Earthy Notes', 'Autumn Warm Spices', 'Autumn Collection', 'Autumn Rich Woody'
    ],
    type: [
      'Royal Collection', 'Gold Edition', 'Platinum Range', 'Limited Edition', 'Black & Gold',
      'Everyday Attars', 'Budget Friendly', 'Value Pack', 'Starter Collection', 'Silver & White',
      'Light Attars', 'Mild Fragrances', 'Daily Wear', 'Subtle Oud',
      'Intense Oud', 'Powerful Attars', 'Long Lasting', 'Concentrated'
    ],
    topSellers: [
      'Black & Silver Platinum', 'Ameer Al Oud', 'Oud Al Aswad', 
      'Sultan E Ameer', 'Royal Oud', '★★★★★ (1330)'
    ],
    newArrivals: [
      'Winter Collection 2024', 'Spring Fresh', 'Oudh Al Ward', 
      'Silver & White', 'Musk Al Mahal', 'Black & Gold'
    ]
  }
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsMegaMenuOpen(true)
  }
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 100)
  }
  
  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  
  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 100)
  }
  
  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <span className="logo-gold">Royal Attar</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
          
          {/* Mega Menu Dropdown - Stable with delay */}
          <div 
            className="mega-menu-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span ref={triggerRef} className="nav-link mega-trigger">SHOP ▾</span>
            
            {isMegaMenuOpen && (
              <div 
                className="mega-menu full-width"
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
              >
                <button className="mega-close-btn" onClick={closeMegaMenu}>✕</button>
                <div className="mega-menu-inner">
                  <div className="mega-grid">
                    {/* Men Category */}
                    <div className="mega-col">
                      <h4>👔 MEN</h4>
                      <ul>
                        {categories.men.map(item => <li key={item}><a href="#" onClick={closeMegaMenu}>{item}</a></li>)}
                      </ul>
                    </div>
                    
                    {/* Women Category */}
                    <div className="mega-col">
                      <h4>💄 WOMEN</h4>
                      <ul>
                        {categories.women.map(item => <li key={item}><a href="#" onClick={closeMegaMenu}>{item}</a></li>)}
                      </ul>
                    </div>
                    
                    {/* Season Wise */}
                    <div className="mega-col">
                      <h4>🌸 SEASON</h4>
                      <ul>
                        {categories.season.map(item => <li key={item}><a href="#" onClick={closeMegaMenu}>{item}</a></li>)}
                      </ul>
                    </div>
                    
                    {/* Type Wise */}
                    <div className="mega-col">
                      <h4>💰 TYPE</h4>
                      <ul>
                        {categories.type.map(item => <li key={item}><a href="#" onClick={closeMegaMenu}>{item}</a></li>)}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Top Sellers & New Arrivals Row */}
                  <div className="mega-row">
                    <div className="mega-half">
                      <h4>🔥 TOP SELLERS</h4>
                      <div className="product-grid">
                        {categories.topSellers.map(item => (
                          <div key={item} className="product-chip" onClick={closeMegaMenu}>
                            {item.includes('★★★★★') ? (
                              <span className="rating-product">★★★★★ {item.replace('★★★★★', '')}</span>
                            ) : (
                              <a href="#">{item}</a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mega-half">
                      <h4>✨ NEW ARRIVALS</h4>
                      <div className="product-grid">
                        {categories.newArrivals.map(item => (
                          <div key={item} className="product-chip" onClick={closeMegaMenu}>
                            <a href="#">{item}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Banner */}
                  <div className="mega-footer">
                    <div className="featured-item" onClick={closeMegaMenu}>🔥 Best Selling Oud Collection</div>
                    <div className="featured-item" onClick={closeMegaMenu}>✨ New Arrivals Summer 2024</div>
                    <div className="featured-item" onClick={closeMegaMenu}>🎁 Buy 2 Get 1 Free - Limited Time</div>
                    <div className="featured-item" onClick={closeMegaMenu}>⭐ Black & Silver Platinum - Rs.2,100</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <NavLink to="/best-sellers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>BEST SELLERS</NavLink>
          <NavLink to="/deals" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>DEALS</NavLink>
          <NavLink to="/testers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>TESTERS</NavLink>
          <NavLink to="/outlets" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>OUR OUTLETS</NavLink>
          <NavLink to="/blogs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>BLOGS</NavLink>
        </div>
        
        <div className="nav-icons">
          <button className="icon-btn"><FiSearch /></button>
          <button className="icon-btn"><FiUser /></button>
          <button className="icon-btn cart-icon">
            <FiShoppingCart />
            <span className="cart-count">0</span>
          </button>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>SHOP</Link>
          <Link to="/best-sellers" onClick={() => setIsMobileMenuOpen(false)}>BEST SELLERS</Link>
          <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)}>DEALS</Link>
          <Link to="/testers" onClick={() => setIsMobileMenuOpen(false)}>TESTERS</Link>
          <Link to="/outlets" onClick={() => setIsMobileMenuOpen(false)}>OUR OUTLETS</Link>
          <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </>
  )
}

export default Navbar