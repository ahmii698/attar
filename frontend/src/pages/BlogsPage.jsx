import { useState } from 'react'
import { Link } from 'react-router-dom'
import at1 from '../assets/at1.jpg'
import at2 from '../assets/at2.jpg'
import at3 from '../assets/at3.jpg'
import at4 from '../assets/at4.jpg'
import at5 from '../assets/at5.jpg'
import at6 from '../assets/at6.jpg'

const blogs = [
  {
    id: 1,
    title: "The Art of Oud: A Journey Through Time",
    excerpt: "Discover the rich history of oud, from ancient Arabian traditions to modern luxury perfumery. Learn how this precious ingredient is sourced and distilled.",
    image: at1,
    category: "Education",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Ahmed Raza",
    tags: ["Oud", "History", "Luxury"]
  },
  {
    id: 2,
    title: "How to Choose the Perfect Attar for Every Season",
    excerpt: "Summer fresh? Winter warm? Learn which attars work best for different weather conditions and occasions.",
    image: at2,
    category: "Guide",
    date: "March 10, 2024",
    readTime: "4 min read",
    author: "Sarah Khan",
    tags: ["Guide", "Seasonal", "Tips"]
  },
  {
    id: 3,
    title: "The Difference Between Oud and Attar",
    excerpt: "Understanding the nuances between these two beloved fragrance forms. What makes each unique and special.",
    image: at3,
    category: "Education",
    date: "March 5, 2024",
    readTime: "3 min read",
    author: "Omar Farooq",
    tags: ["Oud", "Attar", "Education"]
  },
  {
    id: 4,
    title: "Top 10 Best Selling Attars of 2024",
    excerpt: "Check out our most popular fragrances loved by customers worldwide. Discover what makes them special.",
    image: at4,
    category: "Trending",
    date: "February 28, 2024",
    readTime: "6 min read",
    author: "Fatima Al Mansouri",
    tags: ["Best Sellers", "Popular", "2024"]
  },
  {
    id: 5,
    title: "How to Apply Attar for Long Lasting Effect",
    excerpt: "Tips and tricks to make your fragrance stay all day long. Maximize your attar's longevity with these techniques.",
    image: at5,
    category: "Tips",
    date: "February 20, 2024",
    readTime: "4 min read",
    author: "Bilal Ahmed",
    tags: ["Tips", "Application", "Longevity"]
  },
  {
    id: 6,
    title: "Behind the Scenes: How Our Attars Are Made",
    excerpt: "Take a look at our traditional distillation process. From raw materials to the final bottle.",
    image: at6,
    category: "Behind the Scenes",
    date: "February 15, 2024",
    readTime: "7 min read",
    author: "Ahmed Raza",
    tags: ["Process", "Traditional", "Craftsmanship"]
  },
]

// Categories with counts
const categories = [
  { name: "All Posts", count: blogs.length, slug: "all" },
  { name: "Education", count: blogs.filter(b => b.category === "Education").length, slug: "education" },
  { name: "Guide", count: blogs.filter(b => b.category === "Guide").length, slug: "guide" },
  { name: "Trending", count: blogs.filter(b => b.category === "Trending").length, slug: "trending" },
  { name: "Tips", count: blogs.filter(b => b.category === "Tips").length, slug: "tips" },
  { name: "Behind the Scenes", count: blogs.filter(b => b.category === "Behind the Scenes").length, slug: "behind-the-scenes" },
]

function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredBlogs = activeCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category.toLowerCase() === activeCategory.toLowerCase())
  
  return (
    <div className="blogs-page">
      <div className="shop-header">
        <h1>Our Blogs </h1>
        <p>Fragrance insights, tips, and stories from Royal Attar</p>
      </div>
      
      <div className="blogs-layout">
        {/* Sidebar - Categories */}
        <div className="blogs-sidebar">
          <div className="sidebar-category">
            <h3>📂 Categories</h3>
            <ul>
              {categories.map(cat => (
                <li 
                  key={cat.slug} 
                  className={activeCategory === cat.slug ? 'active' : ''}
                  onClick={() => setActiveCategory(cat.slug)}
                >
                  <span>{cat.name}</span>
                  <span className="category-count">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Recent Posts */}
          <div className="sidebar-recent">
            <h3>📖 Recent Posts</h3>
            <ul>
              {blogs.slice(0, 4).map(blog => (
                <li key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  <span className="recent-date">{blog.date}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Tags */}
          <div className="sidebar-tags">
            <h3>🏷️ Popular Tags</h3>
            <div className="tags-cloud">
              {[...new Set(blogs.flatMap(b => b.tags))].map(tag => (
                <span key={tag} className="tag-item">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content - Blogs Grid */}
        <div className="blogs-main">
          <div className="blogs-container">
            {filteredBlogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="blog-category-tag">{blog.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">📅 {blog.date}</span>
                    <span className="blog-readtime">⏱️ {blog.readTime}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-tags">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-author">
                    <span>✍️ By {blog.author}</span>
                  </div>
                  <Link to={`/blog/${blog.id}`} className="read-more-btn">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="no-blogs">
              <p>No blogs found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogsPage