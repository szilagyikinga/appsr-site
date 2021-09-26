import React from "react";

import Navigation from "./navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <body>{children}</body>
  </>
);

export default Layout;
