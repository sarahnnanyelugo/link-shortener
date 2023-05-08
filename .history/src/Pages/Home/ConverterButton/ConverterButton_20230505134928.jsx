import Accordion from "react-bootstrap/Accordion";
import "./converter-button.scss";
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
            <span>https://bit.ly/41alDAa</span>
            <button className="copy">Copy</button>
          </div>
          <div className="flexy"></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConverterButton;
