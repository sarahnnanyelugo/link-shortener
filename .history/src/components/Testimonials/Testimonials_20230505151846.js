import React from "react";
import Star from "../../assets/images/star.png";
import Quote from "../../assets/images/quote.svg";

function Testimonials(props) {
  return (
    <div className="testimonial-div">
      <div className="flexy flexyM">
        <img className="   logo" src={Star} alt="Scholar" width="100%" />
        <img className="   logo" src={Quote} alt="Scholar" width="100%" />
      </div>
    </div>
  );
}

export default Testimonials;
