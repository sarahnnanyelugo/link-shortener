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

      <div className="col-md-8 offset-md-2 flexy">
        <div className="col-md-6">
          {" "}
          <img className="   logo" src={Globe} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          <Row>
            <Col className="h1">500K</Col>
            <Col className="h6">global paying customers</Col>
          </Row>
          <hr />{" "}
          <Row>
            <Col className="h1">5.7M</Col>
            <Col className="h6">monthly active users</Col>
          </Row>
          <hr />{" "}
          <Row>
            <Col className="h1">256M</Col>
            <Col className="h6">links & QR codes created monthly</Col>
          </Row>
          <hr />{" "}
          <Row>
            <Col className="h1">10B</Col>
            <Col className="h6">links & QR codes created monthly</Col>
          </Row>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Home;
