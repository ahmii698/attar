import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

const allProducts = [
  { id: 1, name: "Black & Silver Platinum", price: "Rs. 2,100", priceNum: 2100, rating: 1330, category: "Premium" },
  { id: 2, name: "Ameer Al Oud", price: "Rs. 1,800", priceNum: 1800, rating: 890, category: "Eastern" },
  { id: 3, name: "Oud Al Aswad", price: "Rs. 3,200", priceNum: 3200, rating: 650, category: "Premium" },
  { id: 4, name: "Sultan E Ameer", price: "Rs. 4,500", priceNum: 4500, rating: 420, category: "Premium" },
  { id: 5, name: "Winter Collection 2024", price: "Rs. 2,500", priceNum: 2500, rating: 120, category: "Western" },
  { id: 6, name: "Oudh Al Ward", price: "Rs. 3,800", priceNum: 3800, rating: 95, category: "Eastern" },
  { id: 7, name: "Silver & White", price: "Rs. 1,950", priceNum: 1950, rating: 78, category: "Premium" },
  { id: 8, name: "Musk Al Mahal", price: "Rs. 5,200", priceNum: 5200, rating: 156, category: "Premium" },
  { id: 9, name: "Royal Oud", price: "Rs. 6,500", priceNum: 6500, rating: 245, category: "Premium" },
  { id: 10, name: "Amber Rose", price: "Rs. 1,500", priceNum: 1500, rating: 89, category: "Western" },
]

function ShopPage() {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Collection</h1>
        <p>Discover our premium range of attars</p>
      </div>
      
      <div className="shop-container">
        {/* Sidebar */}
        <div className="shop-sidebar">
          <div className="sidebar-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Premium Attars</a></li>
              <li><a href="#">Western Attars</a></li>
              <li><a href="#">Eastern Attars</a></li>
              <li><a href="#">Best Sellers</a></li>
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h4>Price Range</h4>
            <input type="range" min="0" max="10000" className="price-range" />
            <div className="price-labels">
              <span>Rs. 0</span>
              <span>Rs. 10,000+</span>
            </div>
          </div>
          
          <div className="sidebar-section">
            <h4>Fragrance Notes</h4>
            <label className="checkbox-label">
              <input type="checkbox" /> Oud
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Amber
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Musk
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Rose
            </label>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="shop-products">
          <div className="products-grid">
            {allProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage