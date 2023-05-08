import React from "react";
import Star from "../../assets/images/stars.png";
import Quote from "../../assets/images/Quote.svg";
import "./testimonials.scss";
function Testimonials(props) {
  return (
    <div className="testimonial-div col-md-12">
      <div className="flexy flexyM">
        <div className="  star col-md-11">
          {" "}
          <img src={Star} alt="Scholar" width="15%" height="25px" />
        </div>
        <div className="quote">
          {" "}
          <img src={Quote} alt="Scholar" />
        </div>
      </div>
      <h1>{props.paragraph}</h1>
      <br />
      <p>{props.testifier}</p>
    </div>
  );
}

export default Testimonials;
