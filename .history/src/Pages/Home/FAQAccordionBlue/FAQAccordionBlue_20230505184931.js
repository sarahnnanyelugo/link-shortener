import React, { useState } from "react";
import "./_faq--accordion-blue.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQAccordionBlue = () => {
  return (
    <div className="faq-accordion-blue-container">
      <center>
        <h3></h3>
      </center>
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
            <h4> What is a QR Code?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Quick response or QR, is a type of barcode that can store a
              multitude of information. The obvious difference between a QR Code
              and Barcode is its appearance. A QR Code is always in the shape of
              a square and contains smaller, even blocks similar to Tetris. A
              Barcode, on the other hand, has vertical bars in different
              thicknesses and is often accompanied by a serial number.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4> What can a QR Code do?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Because of its versatility, a QR Code can be programmed to do a
              multitude of things. It can be split into two formats: Dynamic and
              Static. A Dynamic QR Code is useful for businesses or nonprofits
              in their marketing strategy because of its advantages. Though it
              needs a subscription to work, it is a small price to pay compared
              to the benefits it offers. Dynamic QR Code solutions are editable,
              which means if you made a mistake and only noticed it after the QR
              Codes are printed, you can easily log in to the dashboard and fix
              them without changing the appearance of the already printed
              Codes..
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4> What is a Link-in-bio?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The term “Link-in-bio” refers to the clickable URL that you can
              add to your profile section for social media. Most social media
              platforms give you the option to add a link in your bio to take
              followers to your website, product page, content or some other
              important page.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4> Why choose Bitly?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Whether you’re sharing one link or scan or millions, our platform
              was built to help you make every point of connection between your
              content and your audience ignite action. It’s why the most
              recognized brands in the world love our platform.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordionBlue;
