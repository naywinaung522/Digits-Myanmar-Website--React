import { useEffect } from "react";

/** Support Center - Digits Myanmar */
export default function Support() {
  useEffect(() => {
    document.title = "Support Center - Digits Myanmar";
  }, []);

  return (
    <>

 
 Header 

<header>
<div className="container header-container">
<a className="logo" href="/">
<img alt="Digits Myanmar Logo" className="logo-img" src="/images/dm-logo-circle.png" />
<span>Support</span> </a>
<button className="mobile-menu-btn">
<i className="fas fa-bars"></i>
</button>
<nav>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/blog">News &amp; Blog Post</a></li>
<li><a className="active" href="/support">Support</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</nav>
</div>
</header>

 Hero Section 

<section className="support-hero">
<div className="container hero-content">
<h1>How Can We <span>Help You?</span></h1>
<p>Find answers to your questions, get troubleshooting help, or contact our support team directly. We're here to assist you with all your digital marketing needs.</p>
<div className="search-container">
<input className="search-box" placeholder="Search for answers, guides, or topics..." type="text" />
<button className="search-btn"><i className="fas fa-search"></i></button>
</div>
</div>
</section>

 Quick Help Section 

<section className="quick-help">
<div className="container">
<div className="section-title">
<h2>Quick Help Topics</h2>
<p>Get immediate assistance with these common support categories</p>
</div>
<div className="quick-help-grid">
<div className="help-card">
<div className="help-icon">
<i className="fas fa-book"></i>
</div>
<h3>Documentation</h3>
<p>Comprehensive guides and tutorials for all our digital marketing resources and tools.</p>
<a className="btn btn-outline" href="#">View Guides</a>
</div>
<div className="help-card">
<div className="help-icon">
<i className="fas fa-video"></i>
</div>
<h3>Video Tutorials</h3>
<p>Step-by-step video guides covering basic to advanced digital marketing techniques.</p>
<a className="btn btn-outline" href="#">Watch Videos</a>
</div>
<div className="help-card">
<div className="help-icon">
<i className="fas fa-tools"></i>
</div>
<h3>Troubleshooting</h3>
<p>Solutions to common technical issues with our tools, platforms, and resources.</p>
<a className="btn btn-outline" href="#">Fix Issues</a>
</div>
<div className="help-card">
<div className="help-icon">
<i className="fas fa-comments"></i>
</div>
<h3>Community Forum</h3>
<p>Connect with other digital marketers, ask questions, and share knowledge.</p>
<a className="btn btn-outline" href="#">Join Forum</a>
</div>
</div>
</div>
</section>

 FAQ Section 

<section className="faq-section">
<div className="container">
<div className="section-title">
<h2>Frequently Asked Questions</h2>
<p>Find quick answers to the most common questions about Digits Myanmar</p>
</div>
<div className="faq-container">
<div className="faq-item">
<div className="faq-question">
<span>How can I join the Digits Myanmar community?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>You can join our community by signing up on our website, attending our monthly meetups, or participating in our online forums. Membership is free for all digital marketing enthusiasts in Myanmar.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>Are your digital marketing courses free?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>Yes! All our basic digital marketing courses and resources are completely free. We also offer premium workshops and certification programs for more advanced training at affordable rates.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>How do I access your digital marketing tools?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>After registering on our website, you'll get access to our free tools section. For premium tools, you can subscribe to our Pro membership which gives you full access to all our advanced digital marketing tools and resources.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>Do you offer certification for digital marketing skills?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>Yes, we offer recognized certifications for various digital marketing specializations including SEO, Social Media Marketing, Content Strategy, and Analytics. Our certification programs include both theoretical knowledge and practical assessments.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>Can I contribute content or tutorials to Digits Myanmar?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>Absolutely! We welcome contributions from experienced digital marketers. You can submit your content through our contributor portal, and our editorial team will review it for publication on our platform.</p>
</div>
</div>
<div className="faq-item">
<div className="faq-question">
<span>How can I report a bug or technical issue?</span>
<i className="fas fa-chevron-down faq-icon"></i>
</div>
<div className="faq-answer">
<p>You can report any technical issues through our support ticket system or by emailing tech-support@digitsmyanmar.com. Please include as much detail as possible about the issue, including screenshots if applicable.</p>
</div>
</div>
</div>
<div className="view-all">
<a className="btn" href="#">View All FAQs</a>
</div>
</div>
</section>

 Contact Options 

<section className="contact-section">
<div className="container">
<div className="section-title">
<h2>Contact Our Support Team</h2>
<p>Choose the most convenient way to get in touch with us</p>
</div>
<div className="contact-grid">
<div className="contact-card">
<div className="contact-icon">
<i className="fas fa-envelope"></i>
</div>
<h3>Email Support</h3>
<p>Send us an email and we'll respond within 24 hours on business days.</p>
<div className="contact-info">support@digitsmyanmar.com</div>
<a className="btn btn-outline" href="mailto:support@digitsmyanmar.com">Send Email</a>
</div>
<div className="contact-card">
<div className="contact-icon">
<i className="fas fa-comment-dots"></i>
</div>
<h3>Live Chat</h3>
<p>Chat with our support team in real-time during business hours.</p>
<div className="contact-info">Available 9AM-6PM</div>
<a className="btn btn-outline" href="#" id="startChat">Start Chat</a>
</div>
<div className="contact-card">
<div className="contact-icon">
<i className="fas fa-phone-alt"></i>
</div>
<h3>Phone Support</h3>
<p>Speak directly with our support specialists for immediate assistance.</p>
<div className="contact-info">+95 9 123 456 789</div>
<a className="btn btn-outline" href="tel:+959123456789">Call Now</a>
</div>
<div className="contact-card">
<div className="contact-icon">
<i className="fas fa-ticket-alt"></i>
</div>
<h3>Support Ticket</h3>
<p>Submit a detailed ticket for complex issues that need tracking.</p>
<div className="contact-info">Track your request</div>
<a className="btn btn-outline" href="#">Create Ticket</a>
</div>
</div>
</div>
</section>

 Support Hours 

<section className="hours-section">
<div className="container">
<div className="section-title">
<h2>Support Hours</h2>
<p>Our team is available to help you during these hours</p>
</div>
<div className="hours-container">
<h3>Standard Support Hours</h3>
<table className="hours-table">
<tr>
<td>Monday - Friday</td>
<td>9:00 AM - 6:00 PM (Yangon Time)</td>
</tr>
<tr>
<td>Saturday</td>
<td>10:00 AM - 4:00 PM (Yangon Time)</td>
</tr>
<tr>
<td>Sunday</td>
<td>Closed</td>
</tr>
<tr>
<td>Public Holidays</td>
<td>Closed</td>
</tr>
</table>
<div className="urgent-note">
<h4>Urgent Technical Issues</h4>
<p>For urgent technical issues affecting your ability to use our platform, please call our emergency support line at <strong>+95 9 987 654 321</strong>. This line is monitored 24/7 for critical issues only.</p>
</div>
</div>
</div>
</section>

 CTA Section 

<section className="cta-section">
<div className="container">
<div className="cta-content">
<h2>Still Need <span>Help?</span></h2>
<p>If you couldn't find what you were looking for, our support team is ready to assist you personally. We're committed to helping you succeed in your digital marketing journey.</p>
<div className="cta-buttons">
<a className="btn" href="/#contact">Contact Us</a>
<a className="btn btn-outline" href="/blog">Visit Blog</a>
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
<li><a href="/support">Support</a></li>
<li><a href="/about">About</a></li>
<li><a href="/#contact">Contact</a></li>
<li><a href="/blog">Blog Post</a></li>
<li><a href="#">Events</a></li>
</ul>
</div>
<div className="footer-col">
<h3>Support Resources</h3>
<ul className="footer-links">
<li><a href="#">Help Center</a></li>
<li><a href="#">Community Forum</a></li>
<li><a href="#">Video Tutorials</a></li>
<li><a href="#">Documentation</a></li>
<li><a href="#">System Status</a></li>
<li><a href="#">Report Issue</a></li>
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
