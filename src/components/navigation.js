import React from "react";
import { Link } from "gatsby";
import Logo from "../images/brand.inline.svg";

const Navigation = ({ isDark = false }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDark ? "navbar-dark" : "navbar-light bg-white border-bottom"
      }`}
    >
      <div className="container">
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" to="/">
          <Logo className="navbar-brand-img" width="80" alt="APPSR" />
        </Link>

        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          {/* <!-- Toggler --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>
          <ul className="navbar-nav ">
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/guide"
                activeClassName="active"
                partiallyActive
              >
                Les guides
              </Link>
            </li> */}
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/information"
                activeClassName="active"
                partiallyActive
              >
                Informations
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/fact"
                activeClassName="active"
                partiallyActive
              >
                Fiches pratiques
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/focus"
                activeClassName="active"
                partiallyActive
              >
                Focus
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/blog"
                activeClassName="active"
                partiallyActive
              >
                Blog
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/focus"
                activeClassName="active"
                partiallyActive
              >
                Focus
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/contact"
                activeClassName="active"
                partiallyActive
              >
                Contact
              </Link>
            </li>
          </ul>
          <div />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
