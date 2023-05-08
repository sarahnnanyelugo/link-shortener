import React from "react";
import ConverterButton from "./ConverterButton/ConverterButton";
import "./home.scss";
import Globe from "../../assets/images/globe.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Home() {
  return (
    <>
      <div className="col-md-8 offset-md-2 home-container">
        <div className="col-md-12">
          <h1 className="col-md-10">
            We’ve expanded! <br />
            Shorten URLs. Generate QR Codes. And now, create Link-in-bios.
          </h1>
          <button className="app-btn">Get Started for Free</button>
        </div>
      </div>
      <div className="shortner-div ">
        <div className="flexy col-md-8 offset-md-2">
          <div className="col-md-8">
            <input type="text" placeholder="shorten your link" />
          </div>
        </div>
        <div className="col-md-8 offset-md-2 conveter-btn-div">
          <ConverterButton />
        </div>
      </div>

      <div className="col-md-8 offset-md-2 flexy count-up">
        <div className="col-md-6">
          {" "}
          <img className="   logo" src={Globe} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>500K</h1>
            </div>
            <div className="col-md-8">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>500K</h1>
            </div>
            <div className="col-md-8">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>500K</h1>
            </div>
            <div className="col-md-8 counter ">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>500K</h1>
            </div>
            <div className="col-md-8">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>500K</h1>
            </div>
            <div className="col-md-8">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
