import SectionHeading from '../components/SectionHeading'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Royal Attar</h1>
        <p>Crafting excellence since 1985</p>
      </div>
      
      <div className="about-container">
        <div className="about-story">
          <SectionHeading title="Our Story" subtitle="A legacy of fragrance" />
          <p>Royal Attar was founded in 1985 with a simple mission: to bring the finest quality attars to discerning customers around the world. For nearly four decades, we have perfected our craft, blending ancient techniques with modern expertise.</p>
          <p>Our master perfumers source only the rarest ingredients — agarwood from ancient forests, saffron from Kashmir, roses from Damascus. Each attar is aged in traditional copper vessels for up to 12 months, allowing the notes to mature and harmonize.</p>
          <p>Today, Royal Attar is trusted by thousands of customers globally. From royalty to connoisseurs, our fragrances have become synonymous with luxury, authenticity, and excellence.</p>
        </div>
        
        <div className="about-values">
          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3>100% Natural</h3>
            <p>No synthetic additives, just pure ingredients</p>
          </div>
          <div className="value-card">
            <div className="value-icon">👑</div>
            <h3>Premium Quality</h3>
            <p>Sourced from the finest regions</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⏳</div>
            <h3>Traditional Methods</h3>
            <p>Age-old techniques preserved</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💎</div>
            <h3>Luxury Experience</h3>
            <p>Unforgettable fragrance journey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage