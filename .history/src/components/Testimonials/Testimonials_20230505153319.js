import React from "react";
import Star from "../../assets/images/stars.png";
import Quote from "../../assets/images/Quote.svg";
import "./testimonials.scss";
function Testimonials(props) {
  return (
    <div className="testimonial-div col-md-12">
      <div className="flexy flexyM">
        <img
          className="  star"
          src={Star}
          alt="Scholar"
          width="15%"
          height="25px"
        />
        <img className="   quote" src={Quote} alt="Scholar" width="10%" />
      </div>
      <h3>{props.paragraph}</h3>
    </div>
  );
}

export default Testimonials;
