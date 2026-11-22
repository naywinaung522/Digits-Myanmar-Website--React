import { useEffect } from "react";

/** About Us - Digits Myanmar */
export default function About() {
  useEffect(() => {
    document.title = "About Us - Digits Myanmar";
  }, []);

  return (
    <>

 
 Header 

<header>
<div className="container header-container">
<a className="logo" href="/">
<img alt="Digits Myanmar Logo" className="logo-img" src="/images/DM Logo + circle back(31.7.2023).png" />
<span>About</span> </a>
<button className="mobile-menu-btn">
<i className="fas fa-bars"></i>
</button>
<nav>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/blog">News &amp; Blog Post</a></li>
<li><a href="/support">Support</a></li>

<li><a className="active" href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</nav>
</div>
</header>

 Hero Section 

<section className="about-hero">
<div className="container hero-content">
<h1>About <span>Digits Myanmar</span></h1>
<p>Driving Myanmar's Digital Marketing Revolution Through Education, Community, and Innovation</p>
<a className="btn btn-outline" href="#story">Our Story</a>
</div>
</section>

 Mission &amp; Vision Section 

<section className="mission-vision">
<div className="container">
<div className="section-title">
<h2>Our Mission &amp; Vision</h2>
<p>Guiding principles that drive our commitment to Myanmar's digital marketing community</p>
</div>
<div className="mission-vision-grid">
<div className="mission-card">
<div className="mission-icon">
<i className="fas fa-bullseye"></i>
</div>
<h3>Our Mission</h3>
<p>To democratize digital marketing knowledge in Myanmar by providing accessible education, fostering industry collaboration, and empowering professionals and businesses to thrive in the digital economy. We bridge the skills gap through comprehensive resources, hands-on training, and community support.</p>
</div>
<div className="vision-card">
<div className="vision-icon">
<i className="fas fa-eye"></i>
</div>
<h3>Our Vision</h3>
<p>To establish Myanmar as a digital marketing hub in Southeast Asia by 2030, where every marketer has access to world-class education and resources. We envision a vibrant ecosystem where digital innovation drives economic growth and creates sustainable opportunities for all.</p>
</div>
</div>
</div>
</section>

 Story Section 

<section className="story-section" id="story">
<div className="container">
<div className="section-title">
<h2>Our Story</h2>
<p>How Digits Myanmar began and our journey so far</p>
</div>
<div className="story-content">
<div className="story-text">
<h3>From Humble Beginnings to National Impact</h3>
<p>Digits Myanmar was founded in 2020 by a group of passionate digital marketers who recognized the growing need for structured digital marketing education in Myanmar. What started as a small community of 20 professionals sharing knowledge has grown into Myanmar's premier digital marketing association with thousands of members nationwide.</p>
<p>During the digital transformation accelerated by global events, we identified critical gaps in digital skills and resources available to Myanmar businesses and professionals. This realization fueled our commitment to building a comprehensive platform that addresses these needs through education, community building, and industry advocacy.</p>
<p>Today, we partner with leading industry players, educational institutions, and government bodies to shape the future of digital marketing in Myanmar. Our journey continues as we expand our reach and deepen our impact across all regions of the country.</p>
<a className="btn" href="#values">Our Values</a>
</div>
<div className="story-image">
<img alt="Digits Myanmar Journey" src="/images/DM Logo + circle back(31.7.2023).png" />
</div>
</div>
</div>
</section>

 Values Section 

<section className="values-section" id="values">
<div className="container">
<div className="section-title">
<h2>Our Core Values</h2>
<p>The principles that guide everything we do at Digits Myanmar</p>
</div>
<div className="values-grid">
<div className="value-card">
<div className="value-icon">
<i className="fas fa-graduation-cap"></i>
</div>
<h3>Education First</h3>
<p>We believe knowledge should be accessible to all. Our free and affordable resources ensure every marketer in Myanmar can learn and grow.</p>
</div>
<div className="value-card">
<div className="value-icon">
<i className="fas fa-users"></i>
</div>
<h3>Community Driven</h3>
<p>We build stronger together. Our community supports, collaborates, and elevates each member to achieve collective success.</p>
</div>
<div className="value-card">
<div className="value-icon">
<i className="fas fa-lightbulb"></i>
</div>
<h3>Innovation</h3>
<p>We embrace change and continuously evolve our methods to stay at the forefront of digital marketing trends and technologies.</p>
</div>
<div className="value-card">
<div className="value-icon">
<i className="fas fa-hands-helping"></i>
</div>
<h3>Inclusivity</h3>
<p>We welcome marketers from all backgrounds, experience levels, and regions of Myanmar, creating equal opportunities for all.</p>
</div>
</div>
</div>
</section>

 Team Section 

<section className="team-section">
<div className="container">
<div className="section-title">
<h2>Meet Our Leadership</h2>
<p>The passionate team behind Digits Myanmar's mission</p>
</div>
<div className="team-grid">
<div className="team-card">
<div className="team-img">
<img alt="Founder & CEO" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="team-info">
<h3>Ko Min Aung</h3>
<p>Founder &amp; CEO</p>
<p className="bio">Digital marketing veteran with 10+ years of experience, passionate about educating the next generation of marketers.</p>
<div className="team-social">
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
</div>
</div>
</div>
<div className="team-card">
<div className="team-img">
<img alt="Education Director" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="team-info">
<h3>Daw Khin Su</h3>
<p>Education Director</p>
<p className="bio">Former university lecturer specializing in digital media, now leading our educational initiatives and curriculum development.</p>
<div className="team-social">
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-facebook-f"></i></a>
</div>
</div>
</div>
<div className="team-card">
<div className="team-img">
<img alt="Community Manager" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="team-info">
<h3>Ko Zaw Win</h3>
<p>Community Manager</p>
<p className="bio">Expert in community building and engagement, connecting thousands of members across Myanmar's digital marketing ecosystem.</p>
<div className="team-social">
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
</div>
</div>
</div>
<div className="team-card">
<div className="team-img">
<img alt="Partnership Lead" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
</div>
<div className="team-info">
<h3>Daw Hla Hla</h3>
<p>Partnership Lead</p>
<p className="bio">Business development specialist forging strategic partnerships with industry leaders and educational institutions.</p>
<div className="team-social">
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-facebook-f"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>

 CTA Section 

<section className="cta-section">
<div className="container">
<div className="cta-content">
<h2>Join Our <span>Digital Revolution</span></h2>
<p>Become part of Myanmar's fastest-growing digital marketing community. Whether you're a beginner or an experienced professional, there's a place for you at Digits Myanmar.</p>
<div className="cta-buttons">
<a className="btn" href="/#contact">Get Involved</a>
<a className="btn btn-outline" href="/blog">Explore Resources</a>
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
<li><a href="/#features">Support</a></li>
<li><a href="/about">About</a></li>
<li><a href="/#contact">Contact</a></li>
<li><a href="/blog">Blog Post</a></li>
<li><a href="#">Events</a></li>
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
