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
          <h3>Copy your new link!</h3>
          <div className="converter-output flexy ">
            <input type="text" placeholder="shortened link" />
          </div>
          <div className="flexy">
            <span>https://bit.ly/41alDAa</span>
            <button>Copy</button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConverterButton;