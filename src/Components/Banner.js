import React from "react";
import "../style.css";

const Banner = () => {
  return (
    <>
      <div id="banner-section">
        <div className="banner-content">
            <div className="container">
                <h5>NEW COLLECTION</h5>
                <h1>New Balance</h1>
                <p>
                From sports to running to work shoes and even sandals, browse our
                women’s active shoes below to find your ideal fit.
                </p>
            </div>
        </div>
        <div className="banner-img">
            <img src="gallery/0.png" alt="shoe455" />
        </div>
      </div>
    </>
  );
};

export default Banner;
