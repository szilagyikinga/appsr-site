import React from "react";

import Logo from "../images/brand.inline.svg";
import Curve from "./curve";

const Footer = ({ isDark }) => {
  return (
    <>
      <Curve className={isDark ? "text-black" : "text-gray-200"} />
      <footer
        className={`py-8 py-md-11 ${isDark ? "bg-black" : "bg-gray-200"}`}
      >
        <div className="container">
          <div className="row justify-content-between footer-content">
            <div className="col-12 col-lg-3">
              <Logo
                style={isDark ? { fill: "white" } : {}}
                className="footer-brand img-fluid mb-2"
                width="180"
                alt="APPSR"
              />
              <p className="text-gray-700 mb-2">
                Association de Promotion de Prévoyance, Santé et Retraite
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h6 className="fw-bold text-uppercase text-gray-700">
                Mentions légales
              </h6>

              <ul className="list-unstyled text-muted mb-0">
                <li className="mb-3">
                  <a href="/terms" className="text-reset">
                    Conditions générales d'utilisation
                  </a>
                </li>

                <li className="mb-3">
                  <a href="/privacy" className="text-reset">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
