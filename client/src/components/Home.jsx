import { useEffect } from "react";

/** Digits Myanmar - Digital Marketing Association */
export default function Home() {
  useEffect(() => {
    document.title = "Digits Myanmar - Digital Marketing Association";
  }, []);

  return (
    <>


      Header

      <header>
        <div className="container header-container">
          <a className="logo" href="/">
            <img alt="Digits Myanmar Logo" className="logo-img" src="/images/dm-logo-circle.png" />
            <span>Digits</span>Myanmar  
          </a>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
          <nav>
            <ul>
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/blog">News &amp; Blog</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      Hero Section

      <section className="hero" id="home">
        <div className="container hero-content">
          <h1>Bright Together <span>With </span> </h1>
          <p>Join Myanmar's Premier Digital Marketing Association. Empowering marketers with knowledge, tools, and community support to drive digital transformation across Myanmar.</p>
          <div className="hero-buttons">
            <a className="btn" href="#features">Explore Our Resources</a>
            <a className="btn btn-outline" href="/contact">Join Our Community</a>
          </div>
        </div>
      </section>

      Stats Section

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number" data-count="5000">5000+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="250">250+</div>
              <div className="stat-label">Learning Resources</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="50">50+</div>
              <div className="stat-label">Industry Experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="100">100+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      Features Section

      <section className="features-section" id="features">
        <div className="container">
          <div className="section-title">
            <h2>Our Resources &amp; Support</h2>
            <p>Everything you need to master digital marketing in Myanmar</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <a href="/blog">
                  <i className="fas fa-newspaper"></i>
                </a>
              </div>
              <h3>Latest News &amp; Blogs</h3>
              <p>Stay ahead with industry insights, trends, and expert analysis from Myanmar's digital marketing landscape. Regular updates to keep you informed.</p>
              <a className="feature-link" href="/blog">Read Articles <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Learning Resources</h3>
              <p>Access comprehensive guides, tutorials, and courses covering all aspects of digital marketing tailored for the Myanmar market.</p>
              <a className="feature-link" href="/support">Start Learning <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Marketing Tools &amp; Support</h3>
              <p>Discover essential tools, templates, and expert support to implement successful digital marketing campaigns in Myanmar.</p>
              <a className="feature-link" href="/support">Get Support <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      About Section

      <section className="about-section" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Digits Myanmar</h2>
            <p>Leading the digital marketing revolution in Myanmar</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Empowering Myanmar's Digital Future</h3>
              <p>Digits Myanmar is the nation's premier Digital Marketing Association dedicated to advancing the digital marketing landscape. We bridge the knowledge gap and create opportunities for professionals, businesses, and enthusiasts across Myanmar.</p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-check-circle highlight-icon"></i>
                  <span className="highlight-text">Free Learning Resources</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle highlight-icon"></i>
                  <span className="highlight-text">Industry Networking</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle highlight-icon"></i>
                  <span className="highlight-text">Expert Mentorship</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle highlight-icon"></i>
                  <span className="highlight-text">Latest Tools &amp; Trends</span>
                </div>
              </div>
              <p>Our community-driven approach ensures that every marketer in Myanmar has access to world-class education, networking opportunities, and the support needed to thrive in today's digital economy.</p>
              <a className="btn" href="/about">Learn More About Us</a>
            </div>
            <div className="about-image">
              <img alt="Digits Myanmar Community" src="/images/DM Logo + circle back(31.7.2023).png" />
            </div>
          </div>
        </div>
      </section>

      Contact Section

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Have questions? We're here to help you succeed</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Our Location</h3>
                  <p>Yangon, Myanmar</p>
                  <p>Digital Hub, Main Office</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p>digitsmyanmar7@gmail.com</p>
                  <p>support@digitsmyanmar.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p>+95 9 XXX XXX XXX</p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Get personalized assistance from our team</p>
              </div>
              <div className="form-success" id="formSuccess">
                <i className="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.
              </div>
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input className="form-control" id="name" placeholder="Enter your full name" required={true} type="text" />
                  <div className="error-message" id="nameError">Please enter your name</div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input className="form-control" id="email" placeholder="Enter your email address" required={true} type="email" />
                  <div className="error-message" id="emailError">Please enter a valid email address</div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input className="form-control" id="subject" placeholder="What is this regarding?" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea className="form-control" id="message" placeholder="How can we help you today?" required={true}></textarea>
                  <div className="error-message" id="messageError">Please enter your message</div>
                </div>
                <button className="btn" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      Footer

      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <h3>Digits Myanmar</h3>
              <p>Digital Marketing Association of Myanmar - Empowering marketers with knowledge, resources, and community support to drive digital transformation across the nation.</p>
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
                <li><a href="/blog">News &amp; Blog</a></li>
                <li><a href="/support">Support Center</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="#">Upcoming Events</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Digital Marketing Guide</a></li>
                <li><a href="#">SEO Resources</a></li>
                <li><a href="#">Social Media Strategy</a></li>
                <li><a href="#">Content Marketing</a></li>
                <li><a href="#">Analytics &amp; Tools</a></li>
                <li><a href="#">Case Studies</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2025 Digits Myanmar. All rights reserved. | Digital Marketing Association of Myanmar</p>
          </div>
        </div>
      </footer>

      Back to Top Button

      <a className="back-to-top" href="#home" id="backToTop">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
