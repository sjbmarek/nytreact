import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 25, textAlign: "center", marginTop: 10 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
