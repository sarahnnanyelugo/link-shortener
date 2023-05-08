import React from "react";
import ConverterButton from "./ConverterButton/ConverterButton";
import "./home.scss";
import Globe from "../../assets/images/globe.png";

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
        <div className="col-md-5 offset-md-1"></div>
      </div>
    </>
  );
}

export default Home;
