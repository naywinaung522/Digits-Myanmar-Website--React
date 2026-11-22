import { useEffect } from "react";

/** Digital Marketing News - Digits Myanmar */
export default function News() {
  useEffect(() => {
    document.title = "Digital Marketing News - Digits Myanmar";
  }, []);

  return (
    <>

 Header 

<header>
<div className="container header-container">
<a className="logo" href="/">Digits<span>Myanmar</span></a>
<button className="mobile-menu-btn">
<i className="fas fa-bars"></i>
</button>
<nav>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/blog">Blog Post</a></li>
<li><a href="/support">Support</a></li>
<li><a className="active" href="/news">News</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</nav>
</div>
</header>

 News Hero Section 

<section className="news-hero">
<div className="container hero-content">
<h1>Digital Marketing <span>News</span></h1>
<p>Stay updated with the latest trends, insights, and developments in Myanmar's digital marketing landscape and beyond.</p>
<a className="btn btn-outline" href="#featured">Latest Updates</a>
</div>
</section>

 News Categories 

<section className="news-categories">
<div className="container">
<div className="categories-container">
<button className="category-btn active" data-category="all">All News</button>
<button className="category-btn" data-category="industry">Industry Trends</button>
<button className="category-btn" data-category="social">Social Media</button>
<button className="category-btn" data-category="seo">SEO Updates</button>
<button className="category-btn" data-category="events">Events</button>
<button className="category-btn" data-category="myanmar">Myanmar Market</button>
<button className="category-btn" data-category="tools">New Tools</button>
</div>
</div>
</section>

 Featured News Section 

<section className="featured-news" id="featured">
<div className="container">
<div className="section-title">
<h2>Featured News</h2>
<p>Top stories and important updates from the digital marketing world</p>
</div>
<div className="featured-article">
<div className="featured-image">
<img alt="Digital Marketing Trends 2025" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
<div className="featured-badge">Trending</div>
</div>
<div className="featured-content">
<div className="category">Industry Trends</div>
<h2>2025 Digital Marketing Predictions: What Myanmar Marketers Need to Know</h2>
<p>AI integration, hyper-personalization, and voice search optimization are set to dominate the digital landscape in 2025. Learn how Myanmar businesses can prepare for these changes and stay ahead of the competition.</p>
<div className="meta">
<span><i className="far fa-calendar"></i> March 15, 2025</span>
<span><i className="far fa-clock"></i> 5 min read</span>
<span><i className="far fa-user"></i> By Digits Team</span>
</div>
<a className="btn" href="#">Read Full Article</a>
</div>
</div>
</div>
</section>

 News Grid Section 

<section className="news-grid-section">
<div className="container">
<div className="section-title">
<h2>Latest Updates</h2>
<p>Fresh insights and breaking news in digital marketing</p>
</div>
<div className="news-grid">

<div className="news-card" data-category="social">
<div className="news-image">
<img alt="Social Media Algorithm" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">Social Media</div>
<h3>Facebook &amp; Instagram Algorithm Changes: Impact on Myanmar Businesses</h3>
<p>Recent updates to Meta's algorithms are changing how content reaches audiences. Learn what this means for Myanmar-based businesses and how to adapt your strategy.</p>
<div className="news-meta">
<span>March 12, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>

<div className="news-card" data-category="myanmar">
<div className="news-image">
<img alt="Myanmar E-commerce" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">Myanmar Market</div>
<h3>E-commerce Boom in Myanmar: 40% Growth Expected in 2025</h3>
<p>New reports show significant growth in Myanmar's e-commerce sector, with digital payment adoption reaching new highs. Discover opportunities for digital marketers.</p>
<div className="news-meta">
<span>March 10, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>

<div className="news-card" data-category="seo">
<div className="news-image">
<img alt="SEO Updates" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">SEO Updates</div>
<h3>Google's Core Update: What It Means for Myanmar Websites</h3>
<p>Google's latest core algorithm update emphasizes user experience and content quality. Learn how to optimize your Myanmar-focused website for better rankings.</p>
<div className="news-meta">
<span>March 8, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>

<div className="news-card" data-category="tools">
<div className="news-image">
<img alt="Marketing Tools" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">New Tools</div>
<h3>Top 10 Free Digital Marketing Tools for Myanmar Startups</h3>
<p>Discover essential tools that can help Myanmar startups compete effectively without breaking the budget. From analytics to social media management.</p>
<div className="news-meta">
<span>March 5, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>

<div className="news-card" data-category="events">
<div className="news-image">
<img alt="Digital Marketing Event" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">Events</div>
<h3>Digits Myanmar Announces Annual Digital Marketing Conference 2025</h3>
<p>Save the date! Our biggest event of the year brings together industry leaders, workshops, and networking opportunities for Myanmar's digital marketing community.</p>
<div className="news-meta">
<span>March 3, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>

<div className="news-card" data-category="industry">
<div className="news-image">
<img alt="AI Marketing" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
</div>
<div className="news-content">
<div className="category">Industry Trends</div>
<h3>AI-Powered Marketing: How Artificial Intelligence is Transforming Digital Strategies</h3>
<p>Explore how AI technologies are revolutionizing content creation, customer segmentation, and campaign optimization for marketers worldwide, including Myanmar.</p>
<div className="news-meta">
<span>February 28, 2025</span>
<a className="read-more" href="#">Read More →</a>
</div>
</div>
</div>
</div>

<div className="pagination">
<a className="page-link active" href="#">1</a>
<a className="page-link" href="#">2</a>
<a className="page-link" href="#">3</a>
<a className="page-link" href="#">4</a>
<a className="page-link" href="#">Next →</a>
</div>
</div>
</section>

 Industry Insights Section 

<section className="insights-section">
<div className="container">
<div className="section-title">
<h2>Industry Insights</h2>
<p>Expert analysis and market intelligence for digital marketers</p>
</div>
<div className="insights-grid">
<div className="insight-card">
<div className="insight-icon">
<i className="fas fa-chart-line"></i>
</div>
<h3>Market Analysis</h3>
<p>Detailed reports on Myanmar's digital marketing landscape, consumer behavior, and emerging opportunities for businesses of all sizes.</p>
</div>
<div className="insight-card">
<div className="insight-icon">
<i className="fas fa-users"></i>
</div>
<h3>Consumer Trends</h3>
<p>Latest research on Myanmar consumers' digital habits, preferences, and how they interact with brands across different platforms.</p>
</div>
<div className="insight-card">
<div className="insight-icon">
<i className="fas fa-lightbulb"></i>
</div>
<h3>Strategy Guides</h3>
<p>Actionable guides and frameworks to help Myanmar businesses develop effective digital marketing strategies for local and global markets.</p>
</div>
</div>
</div>
</section>

 Newsletter Section 

<section className="newsletter-section">
<div className="container">
<div className="newsletter-content">
<h2>Stay <span>Informed</span></h2>
<p>Subscribe to our newsletter and get the latest digital marketing news, insights, and updates delivered directly to your inbox every week.</p>
<form className="newsletter-form" id="newsletterForm">
<input placeholder="Enter your email address" required={true} type="email" />
<button className="btn" type="submit">Subscribe</button>
</form>
<p style={{'fontSize': '0.9rem', 'marginTop': '15px'}}>No spam, unsubscribe anytime. We respect your privacy.</p>
</div>
</div>
</section>

 Footer 

<footer>
<div className="container">
<div className="footer-container">
<div className="footer-col">
<h3>Digits Myanmar</h3>
<p>Digital Marketing Association of Myanmar - Empowering marketers with knowledge, resources, and community support.</p>
<div className="social-links">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-instagram"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>
<div className="footer-col">
<h3>Quick Links</h3>
<ul className="footer-links">
<li><a href="/">Home</a></li>
<li><a href="/#features">Support</a></li>
<li><a href="/about">About</a></li>
<li><a href="/#contact">Contact</a></li>
<li><a href="/blog">Blog Post</a></li>
<li><a href="/news">News</a></li>
</ul>
</div>
<div className="footer-col">
<h3>Resources</h3>
<ul className="footer-links">
<li><a href="#">Digital Marketing Guide</a></li>
<li><a href="#">SEO Resources</a></li>
<li><a href="#">Social Media Tips</a></li>
<li><a href="#">Content Strategy</a></li>
<li><a href="#">Analytics Tools</a></li>
<li><a href="#">Case Studies</a></li>
</ul>
</div>
</div>
<div className="copyright">
<p>© 2025 Digits Myanmar. All rights reserved. | Digital Marketing Association of Myanmar</p>
</div>
</div>
</footer>
    </>
  );
}
