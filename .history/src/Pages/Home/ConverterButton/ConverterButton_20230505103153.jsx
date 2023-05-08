import Accordion from "react-bootstrap/Accordion";
import "./converter-button.scss";
function ConverterButton() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h6>Shorten</h6>{" "}
        </Accordion.Header>
        <Accordion.Body>
          <h3>Copy your new link!</h3>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConverterButton;
