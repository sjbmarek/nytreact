import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <a href = {props.url}>{props.title}</a>
  </li>
);
