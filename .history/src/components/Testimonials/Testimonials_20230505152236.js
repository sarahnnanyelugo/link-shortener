import React from "react";
import Star from "../../assets/images/stars.png";
import Quote from "../../assets/images/Quote.svg";
import "./testimonials.scss";
function Testimonials(props) {
  return (
    <div className="testimonial-div">
      <div className="flexy flexyM">
        <img className="   logo" src={Star} alt="Scholar" width="10%" />
        <img className="   logo" src={Quote} alt="Scholar" width="10%" />
      </div>
      <p>{props.paragrapg}</p>
    </div>
  );
}

export default Testimonials;