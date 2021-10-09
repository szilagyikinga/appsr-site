import React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/brand.inline.svg";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" to="/test">
          <Logo className="navbar-brand-img" width="130" alt="APPSR" />
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
        <div className="collapse navbar-collapse" id="navbarCollapse">
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
          <ul className="navbar-nav m-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/test" activeClassName="active">
                Les guides
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/information"
                activeClassName="active"
              >
                Informations
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/fact" activeClassName="active">
                Fiches pratiques
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/focus" activeClassName="active">
                Focus
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/contact" activeClassName="active">
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
