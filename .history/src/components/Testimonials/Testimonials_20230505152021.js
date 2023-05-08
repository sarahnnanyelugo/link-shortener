import React from "react";
import Star from "../../assets/images/star.png";
import Quote from "../../assets/images/quote.svg";
import "./testimonials.scss";
function Testimonials(props) {
  return (
    <div className="testimonial-div">
      <div className="flexy flexyM">
        <img className="   logo" src={Star} alt="Scholar" width="100%" />
        <img className="   logo" src={Quote} alt="Scholar" width="100%" />
      </div>
      <p>{props.paragrapg}</p>
    </div>
  );
}

export default Testimonials;
