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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4> Benefits of a short URL</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              How many people can even remember a long web address, especially
              if it has tons of characters and symbols? A short URL can make
              your link more memorable. Not only does it allow people to easily
              recall and share your link with others, it can also dramatically
              improve traffic to your content. On a more practical side, a short
              URL is also easier to incorporate into your collateral – whether
              you’re looking to engage with your customers offline or online.
              Bitly is the best URL shortener for everyone, from influencers to
              small brands to large enterprises, who are looking for a simple
              way to create, track and manage their links.
            </p>
            <button className="accord-get-started">
              {" "}
              Find a plan that works for you
            </button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4> What is a custom URL shortener??</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A custom URL shortener, sometimes referred to as a branded URL
              shortener, lets you brand your links. For example, instead of
              bit.ly/2m75BWD, you could use a custom short URL like
              yourbrnd.co/2m75BWD. There are several benefits of branding your
              short links. Branded links build trust between your audience and
              your business, drive more clicks, give your audience a preview of
              where they are being taken and increase brand awareness. A link
              shortening service that includes custom short URLs is vital to
              improving audience engagement with your communications. A short
              URL is good, but a custom URL works every time.
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
