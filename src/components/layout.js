import React from "react";
import Navigation from "./navigation";
import "./../scss/typography.css";
import "./../scss/theme.scss";

const Layout = ({ children, isDark }) => (
  <>
    <Navigation isDark={isDark} />
    <>{children}</>
  </>
);

export default Layout;
