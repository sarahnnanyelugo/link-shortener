import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import FB from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
function Footer() {
  return (
    <>
      {" "}
      <div className="col-md-10 offset-md-1 flexy footer-container">
        <div className="flexy flexyM col-md-8">
          <ul className="list-unstyled col-md-4">
            <h5>Why Bitly?</h5>
            <li>
              <a href={"/"} className="footer-links">
                Bitly 101
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Integrations & API
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Enterprise Class
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Pricing
              </a>
            </li>{" "}
            <h5>Products</h5>
            <li>
              <a href={"/"} className="footer-links">
                Link Management
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                QR Codes
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Link-in-bio
              </a>
            </li>{" "}
          </ul>{" "}
          <ul className="list-unstyled col-md-4">
            <h5>Solutions</h5>
            <li>
              <a href={"/"} className="footer-links">
                Social Media
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Digital Marketing
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Customer Service
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                For Developers
              </a>
            </li>{" "}
            <h5>Features</h5>
            <li>
              <a href={"/"} className="footer-links">
                Branded Links
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Mobile Links
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Campaign
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Management & Analytics
              </a>
            </li>{" "}
          </ul>{" "}
          <ul className="list-unstyled col-md-4">
            <h5>Resources</h5>
            <li>
              <a href={"/"} className="footer-links">
                Blog
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Resource Library
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Developers
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                App Connectors
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Support
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Trust Center
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Browser Extension
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Mobile App
              </a>
            </li>{" "}
            <h5>Legal</h5>
            <li>
              <a href={"/"} className="footer-links">
                Privacy Policy
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Cookie Policy
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Terms of Service
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Acceptable Use Policy
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Code of Conduct
              </a>
            </li>{" "}
          </ul>
        </div>
        <div className="col-md-4 flexy flexyM">
          <ul className="list-unstyled col-md-6">
            <h5>Why Bitly?</h5>
            <li>
              <a href={"/"} className="footer-links">
                Bitly 101
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Integrations & API
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Enterprise Class
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Pricing
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                Link Management
              </a>
            </li>{" "}
            <li>
              <a href={"/"} className="footer-links">
                QR Codes
              </a>
            </li>{" "}
          </ul>{" "}
          <div className="col-md-6 offset-1 col-5 logo-sec">
            <img className="" src={Logo} alt="Scholar" width="40%" />
            <p>
              © 2023 Bitly | Handmade in New York City, Denver, Berlin,
              Bielefeld, and all over the world.
            </p>
            <ul className="list-unstyled list-inline mobile-ul">
              <li className="list-inline-item">
                {" "}
                <img
                  className="icon"
                  src={Twitter}
                  alt="Scholar"
                  width="100%"
                />
              </li>
              <li className="list-inline-item">
                {" "}
                <img
                  className="icon"
                  src={LinkedIn}
                  alt="Scholar"
                  width="100%"
                />
              </li>
              <li className="list-inline-item">
                {" "}
                <img className="icon" src={FB} alt="Scholar" width="100%" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
