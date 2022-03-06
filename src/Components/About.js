import React from "react";

const About = () => {
    const paraStyle = {
        height: '12rem',
        width: '100rem',
        margin: 'auto',
    }
  return (
    <>
      <div id="about-section">
        <div className="about-content">
            <h1 style={{lineHeight:"2.2"}}>About Brand</h1>
            <p style={paraStyle}>
            One of the coolest sneaker cult-brands ever, for which retro models
            there are people willing to camp outside stores. The brand was founded
            in 1905 and began to manufacture sneakers that were originally
            designed to improve shoe fit - a special design with three support
            points to provide greater balance and comfort in the shoe. Their model
            Tracster, from 1960, was the first professional running shoe and the
            model W320 was a running shoe designed especially for women only.
            </p>
            <a href="#" className="ancor">Read More</a>
        </div>
      </div>
    </>
  );
};

export default About;
