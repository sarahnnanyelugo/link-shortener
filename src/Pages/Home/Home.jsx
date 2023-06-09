import React, { useState } from "react";
import ConverterButton from "./ConverterButton/ConverterButton";
import "./home.scss";
import Globe from "../../assets/images/globe.png";
import CountUp from "react-countup";
import TestimonialCarousel from "./TestimonialCarousel";
import Novasol from "../../assets/images/novasol.svg";
import BigFIshl from "../../assets/images/big-fish.svg";
import Marriot from "../../assets/images/marriott.svg";
import York from "../../assets/images/new-york-times.svg";
import Arts from "../../assets/images/electronic-arts.svg";
import FAQAccordionBlue from "./FAQAccordionBlue/FAQAccordionBlue";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Endpoints } from "../../components/Endpoints";
function Home() {
  const [urlValue, setUrlValue] = useState("");
  function ChangeUrl(e) {
    setUrlValue(e.target.value);
  }
  return (
    <>
      <div className="col-md-8 offset-md-2 home-container">
        <div className="col-md-12">
          <h2 className="col-md-10">
            Shorten URLs. Generate QR Codes. And now, create Link-in-bios.
          </h2>
          <button className="app-btn">Get Started for Free</button>
        </div>
      </div>
      <div className="shortner-div ">
        <div className="flexy col-md-8 offset-md-2">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="shorten your link"
              onChange={ChangeUrl}
              value={urlValue}
            />
          </div>
        </div>
        <div className="col-md-8 offset-md-2 conveter-btn-div">
          <ConverterButton url={urlValue} />
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
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={500}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="K"
                  enableScrollSpy={true}
                />
              </h1>
            </div>
            <div className="col-md-8">
              <h6>global paying customers</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={5.7}
                  duration={3}
                  decimal="."
                  prefix=" "
                  suffix="M"
                  enableScrollSpy={true}
                />
              </h1>
            </div>
            <div className="col-md-8">
              <h6>monthly active users</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={250}
                  duration={3}
                  prefix=" "
                  suffix="M"
                  enableScrollSpy={true}
                />
              </h1>
            </div>
            <div className="col-md-8 counter ">
              <h6>links & QR codes created monthly</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  prefix=" "
                  suffix="B"
                  enableScrollSpy={true}
                />
              </h1>
            </div>
            <div className="col-md-8">
              <h6>connections (clicks & scans) monthly</h6>
            </div>
          </div>
          <hr />{" "}
          <div className="flexy flexyM counter">
            <div className="col-md-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={800}
                  duration={3}
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
            </div>
            <div className="col-md-8">
              <h6>app integrations</h6>
            </div>
          </div>
          <hr />{" "}
        </div>
        <hr />
      </div>
      <center>
        <h1 className="slider-header">What Bitly customers are saying</h1>
      </center>
      <div className="col-md-8 offset-md-2 " style={{ marginBottom: "160px" }}>
        <TestimonialCarousel />
      </div>
      <div className="col-md-8 offset-md-2">
        <hr />
      </div>
      <center>
        <h2 style={{ marginTop: "50px" }}>
          Loved by big and small brands everywhere
        </h2>
      </center>
      <center>
        {" "}
        <div className="partners">
          <img
            className="  partners "
            src={Novasol}
            alt="Scholar"
            width="10%"
          />
          <img
            className="  partners"
            src={BigFIshl}
            alt="Scholar"
            width="10%"
          />
          <img
            className=" partners  "
            src={Marriot}
            alt="Scholar"
            width="10%"
          />
          <img className="partners  " src={York} alt="Scholar" width="10%" />
          <img
            className="partners  arts"
            src={Arts}
            alt="Scholar"
            width="10%"
          />
        </div>
      </center>
      <div className="col-md-8 offset-md-2">
        <FAQAccordionBlue />
      </div>
      <div className="col-md-12 get-started-div">
        <center>
          <h1>More than a free link shortener</h1>
          <button className="app-btn">Get Started</button>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default Home;
