import React from "react";
import "../style.css";

const Article = () => {
  return (
    <>
      <div className="first-div-img" style={{height:"75vh"}}>
        <img src="gallery/nb574.jpg" alt="shoe" style={{height:"75vh",width:"100vw"}}/>
      </div>
      <div className="article-section">
        <div className="article-first-content">
          <img src="gallery/nb575.png" alt="shoe" />
        </div>
        <div className="article-second-content">
          <div className="second-item">
            <h5>New Balance</h5>
            <h1>Women's 574 'State Fair' Pack Available Now</h1>
            <p>
              The pack consists of three vibrant renditions ($80) constructed
              from a supple nubuck and mesh combination. Contrasting details
              highlight the N logo as well as the semi-translucent outsole. The
              'State Fair' Pack is finished with custom woven tongue labels, as
              well as an all-over frozen popsicle design on the inner liner.
              Purchase your favorite pair online, as well as in-store.
            </p>
          </div>
          <div className="second-item-img">
            <img src="gallery/nb420.png" alt="shoe" />
          </div>
        </div>
      </div>
      <div className="run-gun">
        <div className="run-gun-item">
          <h5>Run It All</h5>
          <p>Introducing the Fresh Foam Lazr V2 for Kids</p>
          <a href="#" className="ancor">SHOP NOW</a>
        </div>
      </div>
    </>
  );
};

export default Article;
