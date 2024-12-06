import React from "react";
import '../css/Website.css';
import Web from "../components/Images/WebsiteDevelopment.png";


function Website(){

    return (
        <div className="main-content">
        <div id='Website'>
            <h1>Professional Website Development</h1>
            <div className="row">
                <div className="col">
                    <img src={Web} alt="Website-Development" />
                </div>
                <div className="col">
                    <h2>Change Your Thoughts into Staggering Sites</h2>
                    <p>At Dechro we understand that every business has unique requirements
                         when it comes to establishing an online presence. That’s why we offer both 
                         Static and Dynamic Website Development Services to cater to your specific needs. 
                         Whether you need a simple, fast-loading website or a feature-rich, interactive 
                         platform, we’ve got you covered..</p>
                </div>
            </div>
            <div className="static">
            <h1>Static Website Development</h1>
                  <p>Static website development focuses on creating simple, efficient,
                  and fast-loading websites that do not require server-side processing.
                  A static website consists of fixed HTML files that display the same information 
                  to every visitor. These sites are ideal for showcasing portfolios, small business 
                  information, landing pages, or any content that doesn't need frequent updates.</p>
            </div>
            
        </div>
        </div>
    );
};


export default Website;

