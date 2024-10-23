import React from 'react';

import arrow from "../../images/footer/arrow2.svg"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
      <div className="footer-container">
          <div className="dynamic-underline section-title">Nikolai Petukhov</div>

          <button onClick={scrollToTop} className="footer-arrow">
              <img src={arrow} alt="Arrow"/>
          </button>
      </div>
  );
};

export default Footer;
