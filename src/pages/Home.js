import React, { useRef, useEffect, useCallback } from "react";
import '../css/Home.css';

function Home() {
  const contentRef = useRef(null);

  const handleIntersect = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeUp');
      } else {
        entry.target.classList.remove('fadeUp');
      }
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const currentContentRef = contentRef.current;

    if (currentContentRef) {
      observer.observe(currentContentRef);
    }

    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
    };
  }, [handleIntersect]);

  return (
    <div id="home" className="img-fluid top-fix">
      <div className="container">
        <div className="content" style={{ height: '100vh' }} ref={contentRef}>
          <div className="row ps-5">
            <h1>Web and Software Development company</h1>
            <h3>Dechro, is basically the best structure to plan sites and foster web applications 
                that suitable all business.We focus on innovation, efficiency, and excellence.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
