// import React from "react";
// import "../css/Erp.css";

// function Erp(){
//     return (
//         <div className="main-content">
//         <div id='Erp'>
// <h1>ERP Development</h1>
// <div className="row">
//     <div className="col">
//          At Dechro, we specialize in crafting customized ERP Development 
//         platforms designed to optimize your business processes.
//          Every organization operates uniquely, and our ERP systems are tailored to fit your
//           specific workflows, ensuring seamless integration and enhanced productivity. From managing 
//           day-to-day operations to scaling with your growth, our platforms empower businesses to thrive
//            in a competitive landscape.
//            </div>
//            <div className="col">

//            </div>
//            <div className="row">

//            </div>
// </div>
          
//            </div>
//         </div>
//     );
// };

// export default Erp;




import React, { useEffect } from "react";
import "../css/Erp.css";
import AOS from "aos"; // For animations
import "aos/dist/aos.css";

function Erp() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 120, // Offset from the viewport
    });
  }, []);

  return (
    <div className="main-content">
      <div id="Erp">
        <h1>ERP Development</h1>
        <div className="row">
            <p>
              At Dechro, we specialize in crafting customized ERP Development
              platforms designed to optimize your business processes. Every
              organization operates uniquely, and our ERP systems are tailored
              to fit your specific workflows, ensuring seamless integration and
              enhanced productivity. From managing day-to-day operations to
              scaling with your growth, our platforms empower businesses to
              thrive in a competitive landscape.
            </p>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up">
            <h3>Custom ERP Development</h3>
            <p>Building ERP solutions designed specifically for your business processes.
            Tailored modules for finance, human resources, inventory, procurement, and more.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Cloud-Based ERP Solutions</h3>
            <p>Development of cloud-based ERP systems for easy accessibility and scalability.
            Secure, remote access to your ERP system, enabling collaboration from anywhere.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>ERP Integration Services</h3>
            <p>Seamless integration of ERP systems with your existing IT infrastructure.
            Connecting ERP with third-party tools like CRM, e-commerce platforms, and accounting software.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Real-Time Data Analytics and Reporting</h3>
            <p>Dashboards and tools to track business performance and KPIs in real time.
            Custom reports for better decision-making and strategic planning.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Mobile ERP Applications</h3>
            <p>Development of mobile-friendly ERP solutions for on-the-go access.
            Optimized interfaces for smartphones and tablets, enhancing fieldwork efficiency.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>ERP Maintenance and Support</h3>
            <p>Regular system updates to ensure compatibility with the latest technologies.
            Troubleshooting, performance optimization, and user training for smooth operation.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Workflow Automation</h3>
            <p>Automating repetitive tasks like payroll, inventory management, and order processing.
            Streamlined workflows for increased productivity and reduced operational costs.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Industry-Specific ERP Solutions</h3>
            <p>Specialized ERP systems for industries like manufacturing, healthcare, retail, and logistics.
            Tailored functionalities to address the unique challenges of each sector. </p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Data Migration and Management</h3>
            <p>Secure transfer of data from legacy systems to your new ERP platform.
            Ensuring data integrity and minimal downtime during migration.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Security and Compliance</h3>
            <p>Implementation of robust security measures to protect sensitive business data.
            Ensuring compliance with industry-specific regulations and standards.</p>
          </div>
        </div>
        <div className="row">
            <h1>CRM Development</h1>
            <p>Customer Relationship Management (CRM) systems are essential for businesses seeking 
                to build stronger relationships with their customers, streamline sales processes, and
                 enhance customer engagement. At Dechro, we specialize in developing robust, scalable, 
                 and intuitive CRM solutions that empower businesses to manage customer interactions 
                 effectively.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-up">
            <h3>Custom CRM Development</h3>
            <p>Tailored CRM systems designed to fit your sales, marketing, and customer service workflows.
            Personalized dashboards and tools to manage leads, contacts, and customer journeys.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Cloud-Based CRM Solutions</h3>
            <p>Development of cloud-based CRM platforms for easy access from anywhere.
            Secure, remote connectivity to customer data for enhanced team collaboration.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Mobile CRM Applications</h3>
            <p>Creating mobile-optimized CRM solutions for on-the-go sales and support teams.
            Responsive interfaces ensuring seamless user experience on smartphones and tablets.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>CRM Integration Services</h3>
            <p>Integrating your CRM system with tools like email marketing platforms, social media, and e-commerce solutions.
            Synchronizing data across third-party applications for a unified experience.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Customer Support Automation</h3>
            <p>Automating support workflows with features like ticketing systems, live chat, and AI chatbots.
            Streamlining query resolution to enhance customer satisfaction and retention.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Sales Pipeline Management</h3>
            <p>Tools to track and manage every stage of the sales cycle efficiently.
            Real-time updates on sales activities, forecasts, and team performance.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Advanced Analytics and Reporting</h3>
            <p>Providing insights into customer behavior, sales trends, and campaign performance.
            Generating detailed reports to optimize strategies and decision-making.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>CRM Maintenance and Customizationt</h3>
            <p>Regular updates and improvements to ensure the CRM adapts to evolving business needs.
            Adding new features and modules as your business grows.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Data Security and Compliance</h3>
            <p>Implementing robust security measures to protect sensitive customer information.
            Ensuring compliance with GDPR, HIPAA, and other industry regulations.</p>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <h3>Industry-Specific CRM Solutions</h3>
            <p>Custom CRM systems for industries like retail, healthcare, education, and real estate.
            Features tailored to address the unique needs of each sector.</p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Erp;
