import React, { useState } from "react";
import "./_faq--accordion-blue.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQAccordionBlue = () => {
  return (
    <div className="faq-accordion-blue-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is a URL shortener?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A URL shortener, also known as a link shortener, seems like a
              simple tool, but it is a service that can have a dramatic impact
              on your marketing efforts. Link shorteners work by transforming
              any long URL into a shorter, more readable link. When a user
              clicks the shortened version, they’re automatically forwarded to
              the destination URL. Think of a short URL as a more descriptive
              and memorable nickname for your long webpage address. You can, for
              example, use a short URL like bit.ly/CelebrateBitly so people will
              have a good idea about where your link will lead before they click
              it. If you’re contributing content to the online world, you need a
              URL shortener. Make your URLs stand out with our easy to use free
              link shortener above.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Can One Account Manage Multi Schools ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Getting your school enrolled is so easy. Click on signup to
              onboard your <br />
              school in seconds.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>Do you store my credit card information?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              No, we don’t store your credit card information. Take a look at
              our Privacy Policy <br /> to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4>Are my transactions secure?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, Zoho Books secures your transactions through SSL encryption
              and two factor
              <br /> authentication method.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordionBlue;
