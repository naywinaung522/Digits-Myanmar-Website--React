import { useEffect } from "react";

/** Digits Myanmar - Blog */
export default function Blog() {
  useEffect(() => {
    document.title = "Digits Myanmar - Blog";
  }, []);

  return (
    <>

  

<header>
<div className="header-container">
<a className="logo" href="/">
<img alt="Digits Myanmar Logo" className="logo-img" src="/images/DM Logo + circle back(31.7.2023).png" />
<span>Blog</span>
</a>
<button className="mobile-menu-btn">
<i className="fas fa-bars"></i>
</button>
<nav>
<ul>
<li><a href="/">Home</a></li>
<li><a className="active" href="/blog">News &amp; Blog</a></li>
<li><a href="/support">Support</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</nav>
</div>
</header>

 Hero Section - REVISED TO MATCH SUPPORT PAGE 

<section className="blog-hero">
<div className="container hero-content">
<h1>Digital Marketing <span>Insights</span> &amp; Trends</h1>
<p>Stay ahead with the latest strategies, tools, and expert analysis from Myanmar's leading digital
                marketing community. Your source for actionable insights that drive results.</p>
<div className="search-container">
<input className="search-box" placeholder="Search blog posts, articles, and resources..." type="text" />
<button className="search-btn"><i className="fas fa-search"></i></button>
</div>

</div>
</section>

 Quick Help Section - ADDED TO MATCH SUPPORT PAGE STRUCTURE 

<section className="quick-help">
<div className="container">

</div></section>

 Main Content 

<main>
<div className="posts-container">

<article className="post-card">
<div className="post-image">
<img alt="Digital Marketing Trends" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
<div className="post-category digital-marketing">Digital Marketing</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> June 20, 2023</div>
<h2 className="post-title">2023 Digital Marketing Trends in Myanmar</h2>
<p className="post-excerpt">Discover the latest digital marketing trends shaping Myanmar's market and
                        how businesses can adapt to stay competitive in the digital landscape.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" />
<span className="author-name">Ko Aung</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="SEO Optimization" src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
<div className="post-category seo">SEO</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> June 15, 2023</div>
<h2 className="post-title">Local SEO Strategies for Myanmar Businesses</h2>
<p className="post-excerpt">Learn how to optimize your website for local search in Myanmar and attract
                        more customers from your target geographical area.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/women/44.jpg" />
<span className="author-name">Daw Hla</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="Social Media Marketing" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
<div className="post-category social-media">Social Media</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> June 10, 2023</div>
<h2 className="post-title">Mastering Facebook Marketing in Myanmar</h2>
<p className="post-excerpt">Essential tips and strategies for effective Facebook marketing tailored to
                        the unique Myanmar audience and market conditions.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/men/22.jpg" />
<span className="author-name">Mg Htun</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="Content Strategy" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
<div className="post-category content">Content Marketing</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> June 5, 2023</div>
<h2 className="post-title">Creating Engaging Content for Myanmar Audiences</h2>
<p className="post-excerpt">Learn how to create content that resonates with Myanmar audiences,
                        considering cultural nuances and local preferences.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/women/65.jpg" />
<span className="author-name">Daw Su</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="Analytics Dashboard" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
<div className="post-category analytics">Analytics</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> June 1, 2023</div>
<h2 className="post-title">Measuring Digital Marketing ROI in Myanmar</h2>
<p className="post-excerpt">A comprehensive guide to tracking and analyzing your digital marketing
                        performance to maximize return on investment.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/men/45.jpg" />
<span className="author-name">Ko Myo</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="Mobile Marketing" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
<div className="post-category strategy">Strategy</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> May 25, 2023</div>
<h2 className="post-title">Developing a Digital Marketing Strategy for Myanmar</h2>
<p className="post-excerpt">Step-by-step guide to creating an effective digital marketing strategy that
                        works in the Myanmar market context.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/women/32.jpg" />
<span className="author-name">Daw Nwe</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="E-commerce" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
<div className="post-category ecommerce">E-commerce</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> May 20, 2023</div>
<h2 className="post-title">E-commerce Marketing Strategies for Myanmar</h2>
<p className="post-excerpt">Essential digital marketing strategies for e-commerce businesses looking to
                        succeed in Myanmar's growing online market.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/men/67.jpg" />
<span className="author-name">Ko Zaw</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>

<article className="post-card">
<div className="post-image">
<img alt="Influencer Marketing" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
<div className="post-category influencer">Influencer Marketing</div>
</div>
<div className="post-content">
<div className="post-date"><i className="far fa-calendar"></i> May 15, 2023</div>
<h2 className="post-title">Influencer Marketing in Myanmar: A Complete Guide</h2>
<p className="post-excerpt">How to effectively leverage influencer marketing in Myanmar's unique social
                        media landscape for maximum impact.</p>
<div className="post-meta">
<div className="post-author">
<img alt="Author" className="author-avatar" src="https://randomuser.me/api/portraits/women/22.jpg" />
<span className="author-name">Daw Thiri</span>
</div>
<a className="read-more" href="#">Read More</a>
</div>
</div>
</article>
</div>

<div className="newsletter">
<h2>Never Miss an Update</h2>
<p>Join 5,000+ digital marketers who receive our weekly newsletter with exclusive content, industry news,
                and expert insights</p>
<form className="newsletter-form">
<input placeholder="Enter your email address" required={true} type="email" />
<button type="submit">Subscribe Now</button>
</form>
</div>

<div className="pagination">
<a className="active" href="#">1</a>
<a href="#">2</a>
<a href="#">3</a>
<a href="#">4</a>
<a href="#">5</a>
<a href="#"><i className="fas fa-chevron-right"></i></a>
</div>
</main>

 Footer 

<footer>
<div className="social-links">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-instagram"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
<p>© 2025 Digits Myanmar. All rights reserved. | Digital Marketing Association of Myanmar</p>
</footer>

 Back to Top Button 

<a className="back-to-top" href="#" id="backToTop">
<i className="fas fa-chevron-up"></i>
</a>
    </>
  );
}
