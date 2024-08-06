"use client";
import React, { useState, useEffect } from "react";
import { Playball } from "next/font/google";
const openSans = Playball({
  subsets: ['latin'],
  display: 'swap',
  weight:'400'
});

function Homepage() {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/homepageimg.png')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: windowSize > 375 ? "2.5rem" : "2rem",
              color: "white",
              fontFamily: "Outfit",
            }}
          >
            Leading the Way in High-Quality Knitted Fabrics Worldwide <br />
            Supplying Superior Knitted Fabrics Worldwide
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "white",
              fontFamily: "Outfit",
              marginTop: "1.25rem",
            }}
          >
            “Leading the way in producing high quality knitted fabrics through
            sustainability and <br />
            innovation”
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              color: "white",
              fontFamily: "Outfit",
              marginTop: "1.25rem",
            }}
          >
            We ensure top-quality fabrics, global compliance, and competitive
            pricing, <br />
            while embracing new technologies to exceed customer expectations.
          </p>
          <button
            style={{
              backgroundColor: isHovered ? "#ff6933" : "#FF5618",
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "20px",
              fontFamily: "Outfit",
              marginTop: "1.25rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Scroll to know more
          </button>
        </div>
      </div>
      <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1 className={openSans.className} style={{ fontSize: '3rem' }}>
          We Spread <span style={{ color: '#FF5618' }}>Around The World</span>
        </h1>
        <p>
          {/* Add a lot of text here to ensure scrolling */}
          {Array.from({ length: 100 }, (_, i) => (
            <span key={i}>Additional content to ensure scrolling. </span>
          ))}
        </p>
      </div>
    </>
  );
}

export default Homepage;
