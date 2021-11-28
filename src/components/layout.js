import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import "./../scss/typography.css";
import "./../scss/theme.scss";

const Layout = ({ children, darkNavigation, darkFooter, full }) => (
  <>
    <Navigation isDark={darkNavigation} />
    {children}
    {!full && <Footer isDark={darkFooter} />}
  </>
);

export default Layout;
