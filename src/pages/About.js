// import React from "react";
// import '../css/About.css';
// import "../App.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import card1 from "../components/Images/card1.jpg";
// import card2 from "../components/Images/card2.jpg";
// import card3 from "../components/Images/card3.jpg";

// function About() {
//     return (
//         <div className="main-content">
//             <div id='About'>
//               <h1>About Us</h1>
//             <h2>
//             Dechro, based in Erode, India, is a leading web development company 
//             specializing in crafting modern and unique websites tailored to your business needs.
//              Our expertise lies in building robust and cost-effective web solutions for small 
//              businesses and startups. Committed to helping clients achieve their business goals 
//              on time and within budget, Dechro continuously enhances its technical skills, expertise,
//               and ideas. As a trusted name in web development, we are known for hiring skilled full-stack 
//               developers to deliver cutting-edge websites that ensure 100% client satisfaction.
//             </h2>
//                 <h1>Why You Choose ?</h1>
//                 <div className="row">
//                     <div className="col">
//                         <Card style={{ width: '20rem' }}>
//                             <Card.Img variant="top" src={card1} />
//                             <Card.Body>
//                                 <Card.Title className="title">Professional Web Development</Card.Title>
//                                 <Card.Text>
//                                 Build your online presence with a stunning, responsive,
//                                  and user-friendly website. Our team ensures seamless integration and 
//                                  functionality for your business needs.
//                                 </Card.Text>
//                                 <Button variant="primary">Learn More</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     <div className="col">
//                         <Card style={{ width: '20rem' }}>
//                             <Card.Img variant="top" src={card2} />
//                             <Card.Body>
//                                 <Card.Title className="title">Digital Marketing Platforms</Card.Title>
//                                 <Card.Text>
//                                 Drive traffic,boost engagement,and grow your brand 
//                                  with our cutting-edge digital marketing strategies.
//                                   From SEO to social media,we’ve got you covered. 
//                                 </Card.Text>
//                                 <Button variant="primary">Learn More</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     <div className="col">
//                         <Card style={{ width: '20rem' }}>
//                             <Card.Img variant="top" src={card3} />
//                             <Card.Body>
//                                 <Card.Title className="title">ERP & CRM Platforms</Card.Title>
//                                 <Card.Text>
//                                 Streamline your business operations and enhance customer
//                                  relationships with our comprehensive ERP and CRM systems. Boost
//                                   productivity and improve efficiency today.
//                                 </Card.Text>
//                                 <Button variant="primary">Learn More</Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// }

// export default About;

import React from "react";
import '../css/About.css';
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from "../components/Images/card1.jpg";
import card2 from "../components/Images/card2.jpg";
import card3 from "../components/Images/card3.jpg";
import Particles from "react-tsparticles"; // Import particles component
import { loadFull } from "tsparticles"; // Load particle configuration
import { Link } from 'react-router-dom'; // Import the Link component from React Router

function About() {
  // Particle options
  const particlesInit = async (main) => {
    await loadFull(main); // Loads the full set of particles
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: 1
    },
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.5, // Opacity of particles
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 3, // Size of particles
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1
        }
      },
      links: {
        enable: true,
        distance: 150,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        }
      }
    }
  };

  return (
    <div className="main-content">
      <Particles
        id="tsparticles" // ID for the particles component
        init={particlesInit}
        options={particlesOptions} // Particle configuration
      />
      <div id='About' style={{ zIndex: 2, position: 'relative' }}>
        <h1>About Us</h1>
        <h2>
          Dechro, based in Erode, India, is a leading web development company
          specializing in crafting modern and unique websites tailored to your business needs.
          Our expertise lies in building robust and cost-effective web solutions for small
          businesses and startups. Committed to helping clients achieve their business goals
          on time and within budget, Dechro continuously enhances its technical skills, expertise,
          and ideas. As a trusted name in web development, we are known for hiring skilled full-stack
          developers to deliver cutting-edge websites that ensure 100% client satisfaction.
        </h2>
        <h1>Why You Choose?</h1>
        <div className="row">
          <div className="col">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title className="title">Professional Web Development</Card.Title>
                <Card.Text>
                  Build your online presence with a stunning, responsive,
                  and user-friendly website. Our team ensures seamless integration and
                  functionality for your business needs.
                </Card.Text>
                <Button variant="primary" className="button">Get Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title className="title">Digital Marketing Platforms</Card.Title>
                <Card.Text>
                  Drive traffic, boost engagement, and grow your brand
                  with our cutting-edge digital marketing strategies.
                  From SEO to social media, we’ve got you covered.
                </Card.Text>
                <Button variant="primary" className="button">Get Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={card3} />
              <Card.Body>
                <Card.Title className="title">ERP & CRM Platforms</Card.Title>
                <Card.Text>
                  Streamline your business operations and enhance customer
                  relationships with our comprehensive ERP and CRM systems. Boost
                  productivity and improve efficiency today.
                </Card.Text>
                <Button variant="primary" className="button">Get Details</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
