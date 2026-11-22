import { useEffect } from "react";

/** Contact Us - Digits Myanmar */
export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Digits Myanmar";
  }, []);

  return (
    <>


 Header 

<header>
<div className="container header-container">
<a className="logo" href="/">
<img alt="Digits Myanmar Logo" className="logo-img" src="/images/DM Logo + circle back(31.7.2023).png" />
<span>Contact</span> </a>
<button className="mobile-menu-btn">
<i className="fas fa-bars"></i>
</button>
<nav>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/blog">News &amp; Blog Post</a></li>
<li><a href="/support">Support</a></li>
<li><a href="/about">About</a></li>
<li><a className="active" href="/contact">Contact</a></li>
</ul>
</nav>
</div>
</header>

 Hero Section 

<section className="contact-hero">
<div className="container hero-content">
<h1>Get In <span>Touch</span></h1>
<p>We're here to help you with all your digital marketing needs. Reach out to us with questions, partnership
                inquiries, or to learn more about our community.</p>
<div className="hero-buttons">
<a className="btn" href="#contact-form">Send a Message</a>
<a className="btn btn-outline" href="#locations">Visit Our Office</a>
</div>
</div>
</section>

 Contact Information Section 

<section className="contact-info-section">
<div className="container">
<div className="section-title">
<h2>Contact Information</h2>
<p>Choose your preferred way to connect with us</p>
</div>
<div className="contact-info-grid">
<div className="info-card">
<div className="info-icon">
<i className="fas fa-phone-alt"></i>
</div>
<h3>Phone</h3>
<p>Speak directly with our team during business hours</p>
<div className="contact-detail">+95 9 123 456 789</div>
<div className="contact-detail">+95 9 987 654 321</div>
<a className="btn btn-outline" href="tel:+959123456789">Call Now</a>
</div>
<div className="info-card">
<div className="info-icon">
<i className="fas fa-envelope"></i>
</div>
<h3>Email</h3>
<p>Send us an email and we'll respond within 24 hours</p>
<div className="contact-detail">info@digitsmyanmar.com</div>
<div className="contact-detail">support@digitsmyanmar.com</div>
<a className="btn btn-outline" href="mailto:info@digitsmyanmar.com">Send Email</a>
</div>
<div className="info-card">
<div className="info-icon">
<i className="fas fa-map-marker-alt"></i>
</div>
<h3>Head Office</h3>
<p>Visit our main office during business hours</p>
<div className="contact-detail">No. 123, Digital Street</div>
<div className="contact-detail">Yangon, Myanmar</div>
<a className="btn btn-outline" href="#map">View Map</a>
</div>
<div className="info-card">
<div className="info-icon">
<i className="fas fa-clock"></i>
</div>
<h3>Business Hours</h3>
<p>We're available to assist you during these hours</p>
<div className="contact-detail">Mon-Fri: 9:00 AM - 6:00 PM</div>
<div className="contact-detail">Sat: 10:00 AM - 4:00 PM</div>
<a className="btn btn-outline" href="#faq">View FAQ</a>
</div>
</div>
</div>
</section>

 Contact Form Section 

<section className="contact-form-section" id="contact-form">
<div className="container">
<div className="form-container">
<div className="form-title">
<h3>Send Us a Message</h3>
<p>Fill out the form below and we'll get back to you as soon as possible</p>
</div>
<div className="success-message" id="successMessage">
<i className="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We'll get
                    back to you within 24 hours.
                </div>
<form className="contact-form" id="contactForm">
<div className="form-group">
<label htmlFor="name">Full Name *</label>
<input className="form-control" id="name" placeholder="Enter your full name" required={true} type="text" />
<div className="error-message" id="nameError">Please enter your name</div>
</div>
<div className="form-group">
<label htmlFor="email">Email Address *</label>
<input className="form-control" id="email" placeholder="Enter your email address" required={true} type="email" />
<div className="error-message" id="emailError">Please enter a valid email address</div>
</div>
<div className="form-group">
<label htmlFor="phone">Phone Number</label>
<input className="form-control" id="phone" placeholder="Enter your phone number" type="tel" />
</div>
<div className="form-group">
<label htmlFor="subject">Subject *</label>
<select className="form-control" id="subject" required={true}>
<option disabled={true} selected={true} value="">Select a subject</option>
<option value="general">General Inquiry</option>
<option value="partnership">Partnership Opportunity</option>
<option value="training">Training &amp; Courses</option>
<option value="membership">Membership Information</option>
<option value="technical">Technical Support</option>
<option value="other">Other</option>
</select>
<div className="error-message" id="subjectError">Please select a subject</div>
</div>
<div className="form-group full-width">
<label htmlFor="message">Message *</label>
<textarea className="form-control" id="message" placeholder="Enter your message here..." required={true}></textarea>
<div className="error-message" id="messageError">Please enter your message</div>
</div>
<div className="form-submit">
<button className="btn" type="submit">Send Message</button>
</div>
</form>
</div>
</div>
</section>

 Office Locations Section 

<section className="locations-section" id="locations">
<div className="container">
<div className="section-title">
<h2>Our Offices</h2>
<p>Visit us at any of our locations across Myanmar</p>
</div>
<div className="locations-grid">
<div className="location-card">
<div className="location-img">
<img alt="Yangon Office" src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="location-info">
<h3>Yangon Headquarters</h3>
<div className="location-detail">
<i className="fas fa-map-marker-alt"></i>
<p>No. 123, Digital Street, Hlaing Township, Yangon, Myanmar</p>
</div>
<div className="location-detail">
<i className="fas fa-phone-alt"></i>
<p>+95 9 123 456 789</p>
</div>
<div className="location-detail">
<i className="fas fa-clock"></i>
<p>Mon-Fri: 9:00 AM - 6:00 PM</p>
</div>
<a className="btn btn-outline" href="tel:+959123456789">Call Office</a>
</div>
</div>
<div className="location-card">
<div className="location-img">
<img alt="Mandalay Office" src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="location-info">
<h3>Mandalay Office</h3>
<div className="location-detail">
<i className="fas fa-map-marker-alt"></i>
<p>No. 456, Tech Avenue, Chanmyatharsi Township, Mandalay, Myanmar</p>
</div>
<div className="location-detail">
<i className="fas fa-phone-alt"></i>
<p>+95 9 234 567 890</p>
</div>
<div className="location-detail">
<i className="fas fa-clock"></i>
<p>Mon-Fri: 9:30 AM - 5:30 PM</p>
</div>
<a className="btn btn-outline" href="tel:+959234567890">Call Office</a>
</div>
</div>
<div className="location-card">
<div className="location-img">
<img alt="Naypyidaw Office" src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="location-info">
<h3>Naypyidaw Office</h3>
<div className="location-detail">
<i className="fas fa-map-marker-alt"></i>
<p>No. 789, Innovation Road, Zabuthiri Township, Naypyidaw, Myanmar</p>
</div>
<div className="location-detail">
<i className="fas fa-phone-alt"></i>
<p>+95 9 345 678 901</p>
</div>
<div className="location-detail">
<i className="fas fa-clock"></i>
<p>Mon-Fri: 10:00 AM - 5:00 PM</p>
</div>
<a className="btn btn-outline" href="tel:+959345678901">Call Office</a>
</div>
</div>
</div>
</div>
</section>

 Map Section 

<section className="map-section" id="map">
<div className="container">
<div className="section-title">
<h2>Find Us on Map</h2>
<p>Locate our offices easily with the map below</p>
</div>
<div className="map-container">
<div className="map-placeholder">
<i className="fas fa-map-marked-alt"></i>
<h3>Interactive Map</h3>
<p>In a real implementation, this would display an interactive Google Map</p>
<p>showing our office locations across Myanmar.</p>
</div>
</div>
</div>
</section>

 FAQ Section 

<section className="faq-section" id="faq">
<div className="container">
<div className="section-title">
<h2>Contact FAQ</h2>
<p>Quick answers to common questions about contacting us</p>
</div>
<div className="faq-container">
<div className="faq-item">
<div className="faq-question">
<span>What's the best way to contact Digits Myanmar?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>For general inquiries, email is usually the fastest way to reach us. For urgent matters, you
                            can call our main office. If you need technical support, please use our dedicated support
                            channels.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>How long does it take to get a response?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>We aim to respond to all inquiries within 24 hours during business days. For emails received
                            on weekends or holidays, we'll respond on the next business day.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>Can I visit your office without an appointment?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>Yes, you can visit our offices during business hours. However, for meetings with specific
                            team members, we recommend scheduling an appointment in advance to ensure they're available.
                        </p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>Do you offer digital marketing consultations?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>Yes! We offer free initial consultations for businesses interested in digital marketing
                            strategies. Please schedule a consultation through our website or contact our business
                            development team.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>How can I partner with Digits Myanmar?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>We welcome partnerships with educational institutions, businesses, and industry
                            organizations. Please contact our partnerships team at partnerships@digitsmyanmar.com to
                            discuss opportunities.</p>
</div>
</div>
</div>
</div>
</section>

 CTA Section 

<section className="cta-section">
<div className="container">
<div className="cta-content">
<h2>Join Our <span>Digital Community</span></h2>
<p>Connect with thousands of digital marketers across Myanmar. Attend our events, participate in
                    workshops, and grow your digital marketing skills with us.</p>
<div className="cta-buttons">
<a className="btn" href="/#contact">Become a Member</a>
<a className="btn btn-outline" href="/blog">View Events</a>
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
<p>Digital Marketing Association of Myanmar - Empowering marketers with knowledge, resources, and
                        community support.</p>
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
<li><a href="/support">Support</a></li>
<li><a href="/about">About</a></li>
<li><a className="active" href="/contact">Contact</a></li>
<li><a href="/blog">Blog Post</a></li>
<li><a href="#">Events</a></li>
</ul>
</div>
<div className="footer-col">
<h3>Contact Information</h3>
<ul className="footer-links">
<li><a href="tel:+959123456789"><i className="fas fa-phone"></i> +95 9 123 456 789</a></li>
<li><a href="mailto:info@digitsmyanmar.com"><i className="fas fa-envelope"></i>
                                info@digitsmyanmar.com</a></li>
<li><a href="#"><i className="fas fa-map-marker-alt"></i> Yangon, Myanmar</a></li>
<li><a href="#"><i className="fas fa-clock"></i> Mon-Fri: 9AM-6PM</a></li>
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
