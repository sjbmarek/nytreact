import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 60, textAlign: "center", marginTop: 10 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
