import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container mb-5">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
