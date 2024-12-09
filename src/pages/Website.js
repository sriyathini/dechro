import React, { useState } from "react";
import "../css/Website.css";
import Web from "../components/Images/WebsiteDevelopment.png";

// ServiceItem Component for Static Services
const ServiceItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="service-item">
      <div className="service-header" onClick={toggleDetails}>
        <h3>{title}</h3>
        <span className="icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="service-details">{details}</p>}
    </div>
  );
};

// Static Website Services Component
const StaticWebsiteServices = () => {
  const services = [
    {
      title: "Custom Website Design",
      details:
        "Tailored website layouts based on client needs and branding. Mobile-first, responsive designs that work across devices. Clean, minimalistic designs focusing on user experience (UX).",
    },
    {
      title: "HTML/CSS/JavaScript Development",
      details:
        "Building websites using HTML for structure, CSS for styling, and JavaScript for interactivity. Use of modern tools and frameworks like Tailwind CSS or Bootstrap for faster development.",
    },
    {
      title: "Single-Page Websites (SPAs)",
      details:
        "Creating single-page sites for landing pages or campaigns. Smooth scrolling and seamless navigation.",
    },
    {
        title:"Website Optimization",
        details:
        "Optimizing static websites for speed and performance. Compression of assets (CSS, JS, and images) for faster load times."
    },
    {
        title:"Responsive Design Implementation",
        details:
        "Ensuring the site is fully responsive and adapts to screens of all sizes, from mobile phones to large monitors."
    },
    {
        title:"Content Updates and Maintenance",
        details:
        "Periodic updates to text, images, or other static content. Maintenance of links and media to ensure everything works perfectly."
    },
    {
        title:"Static Hosting and Deployment",
        details:
        "Setting up hosting on platforms like GitHub Pages, Netlify, or AWS S3. Implementing CDN integration for global content delivery and faster loading."
    },
    {
        title:"SEO Optimization",
        details:
        "Basic on-page SEO to improve visibility in search engines. Structured data implementation for better ranking and indexing."
    },
    {
        title:"Portfolio and Showcase Development",
        details:
        "Designing portfolio websites for individuals or agencies to showcase work. Integration of image galleries, case studies, and testimonials."
    },
    {
        title:"Documentation and Knowledge Base Sites",
        details:
        "Creating static websites for product documentation or knowledge-sharing platforms. Clean layouts for easy navigation and readability."
    },
  ];

  return (
    <div className="service-section">
      <h2>Types of Services Provided in Static Website Development</h2>
      {services.map((service, index) => (
        <ServiceItem key={index} title={service.title} details={service.details} />
      ))}
    </div>
  );
};

// Dynamic Website Services Component
const DynamicWebsiteServices = () => {
  const services = [
    {
      title: "Custom Website Design and Development",
      details:
        "Tailored web designs that align with branding and business needs. Responsive design ensuring the website works on all devices and screen sizes. Integrating dynamic elements such as sliders, animations, and interactive content.",
    },
    {
      title: "Content Management Systems (CMS) Integration",
      details:
        "Development and customization of CMS platforms like WordPress, Joomla, or Drupal for easy content management. Integration of custom CMS solutions to provide businesses with full control over their website content.",
    },
    {
      title: "E-commerce Website Development",
      details:
        "Building dynamic e-commerce platforms with shopping carts, product pages, and payment gateway integration. Integration with inventory management and order processing systems for smooth operation. Features like dynamic product recommendations, discounts, and pricing.",
    },
    {
      title: "User Authentication and Authorization",
      details:
        "Implementing login systems, user profiles, and role-based access control for secure data handling. Support for features such as social logins, password recovery, and user registrations.",
    },
    {
      title: "Database Development and Integration",
      details:
        "Designing and integrating relational databases (MySQL, PostgreSQL) or NoSQL databases (MongoDB). Building dynamic websites that fetch data from databases and present it in a user-friendly manner. Ensuring that data is stored securely and updated in real-time.",
    },
    {
      title: "Dynamic Content Loading",
      details:
        "Development of features that allow content to load dynamically without refreshing the page (AJAX, APIs). Live content updates, such as comments, likes, or messages in real-time.",
    },
    {
      title: "SEO Optimization for Dynamic Websites",
      details:
        "Implementing SEO strategies to ensure dynamic pages are properly indexed by search engines. Dynamic URL creation for better optimization and indexing of specific pages.",
    },
    {
      title: "API Integration",
      details:
        "Integrating third-party APIs (payment gateways, social media, maps, etc.) for additional functionality. Connecting the website to external services and data sources.",
    },
    {
      title: "Website Maintenance and Updates",
      details:
        "Regularly updating dynamic content such as blog posts, news, and product information. Bug fixes, security patches, and performance optimization to keep the website running smoothly.",
    },
    {
      title: "Web Application Development",
      details:
        "Creating full-featured web applications with dynamic functionality, like online booking systems, customer portals, or management dashboards. Providing features such as data filtering, reporting, and real-time data updates.",
    },
  ];

  return (
    <div className="service-section">
      <h2>Types of Services Provided in Dynamic Website Development</h2>
      {services.map((service, index) => (
        <ServiceItem key={index} title={service.title} details={service.details} />
      ))}
    </div>
  );
};

// Main Website Component
function Website() {
  return (
    <div className="main-content">
      <div id="Website">
        <h1>Professional Website Development</h1>
        <div className="row">
          <div className="col">
            <img src={Web} alt="Website-Development" />
          </div>
          <div className="col">
            <h2>Change Your Thoughts into Staggering Sites</h2>
            <p>
              At Dechro we understand that every business has unique requirements when it comes to
              establishing an online presence. That’s why we offer both Static and Dynamic Website
              Development Services to cater to your specific needs. Whether you need a simple,
              fast-loading website or a feature-rich, interactive platform, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="static">
          <h1>Static Website Development</h1>
          <p>
            Static website development focuses on creating simple, efficient, and fast-loading
            websites that do not require server-side processing. A static website consists of fixed
            HTML files that display the same information to every visitor. These sites are ideal for
            showcasing portfolios, small business information, landing pages, or any content that
            doesn't need frequent updates.
          </p>
          {/* Integrated StaticWebsiteServices Component */}
          <StaticWebsiteServices />
        </div>

        {/* Dynamic Website Development Section */}
        <div className="Dynamic">
          <h1>Dynamic Website Development</h1>
          <p>
            Dynamic website development refers to the creation of websites that are interactive,
            data-driven, and capable of changing content in real-time based on user interactions,
            database queries, or other conditions. Unlike static websites, dynamic websites use
            server-side scripting languages like PHP, Python, or Node.js to generate content
            dynamically. These websites are ideal for businesses or platforms that require frequent
            updates, user logins, or complex functionalities, such as e-commerce stores, social
            networks, or blogs.
          </p>
          {/* Integrated DynamicWebsiteServices Component */}
          <DynamicWebsiteServices />
        </div>
      </div>
    </div>
  );
}

export default Website;
