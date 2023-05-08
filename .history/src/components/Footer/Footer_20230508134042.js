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
