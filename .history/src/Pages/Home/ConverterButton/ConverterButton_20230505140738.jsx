import Accordion from "react-bootstrap/Accordion";
import "./converter-button.scss";
import { Link } from "react-router-dom";

function ConverterButton() {
  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Shorten</h5>{" "}
        </Accordion.Header>
        <Accordion.Body>
          <p className="terms">
            By clicking SHORTEN, you are agreeing to Bitly’s Terms of Service,
            Privacy Policy, and Acceptable Use Policy
          </p>

          <div className=" flexy col-md-12 converter-output">
            <span className="shortened-link">Shortened Link</span>
            <a href="" target="_blank" className="link">
              https://bit.ly/41alDAa
            </a>
            <button className="copy">Copy</button>
          </div>
          <div className="flexy qr-codes">
            <h5>Need more redirects, custom back-half links, or QR Codes?</h5>
            <button>Check out Starter Plan</button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConverterButton;
