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
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="main-content">
      <div id='About'>
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
    <Link to="/Website">
      <Button variant="primary" className="button">
        Get Details
      </Button>
    </Link>
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
    <Link to="/Digital">
      <Button variant="primary" className="button">
        Get Details
      </Button>
    </Link>
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
    <Link to="/Erp">
      <Button variant="primary" className="button">
        Get Details
      </Button>
    </Link>
  </Card.Body>
</Card>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
