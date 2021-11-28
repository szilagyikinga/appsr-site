import React from "react";

import Curve1 from "../images/curve-1.inline.svg";

const Curve = ({ className }) => (
  <div class="position-relative">
    <div class={`shape shape-bottom shape-fluid-x text-gray-200 ${className}`}>
      <Curve1 />
    </div>
  </div>
);

export default Curve;
