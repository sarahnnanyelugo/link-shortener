import Accordion from "react-bootstrap/Accordion";
import "./converter-button.scss";
import { Link } from "react-router-dom";
import { Endpoints, PostData } from "../../../components/Endpoints";
import { useEffect, useState } from "react";

function ConverterButton({ url }) {
  const [result, setResult] = useState({});
  function convert() {
    const endPoint = Endpoints.post_url;
    // console.log(endPoint);
    const props = { endPoint: endPoint, data: { target_url: url } };
    // setResult(PostData(props));
    let ret = PostData(props);
    ret.then((resp) => {
      setResult(resp);
      console.log(result);
    });
  }
  useEffect(() => {
    console.log(result);
  }, [result]);
  return (
    <div className="converter">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={convert}>
            <h5>Shorten</h5>{" "}
          </Accordion.Header>
          <Accordion.Body>
            <p className="terms">
              By clicking SHORTEN, you are agreeing to Bitly’s Terms of Service,
              Privacy Policy, and Acceptable Use Policy
            </p>

            <div className=" flexy col-md-12 converter-output">
              <span className="shortened-link">Shortened Link</span>
              {result != {} ? (
                <a href={result.url} target="_blank" className="link">
                  {result.url}
                </a>
              ) : (
                ""
              )}
              <button className="copy">Copy</button>
            </div>
            <div className="flexy qr-codes">
              <h5>Need more redirects, custom back-half links, or QR Codes?</h5>
              <button>Check out Starter Plan</button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ConverterButton;
