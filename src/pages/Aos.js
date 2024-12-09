import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 120,    // Offset for triggering animations
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, AOS Animation!</h1>
      <p data-aos="fade-in">This paragraph will fade in when scrolled into view.</p>
    </div>
  );
}

export default Aos;
