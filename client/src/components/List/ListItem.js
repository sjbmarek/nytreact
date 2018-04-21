import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <a href = {props.url} target="_blank">{props.title}</a>

    <button className="mr-1 btn-danger ml-1 delete-btn btn" {...props}>
    Delete
    </button>
    <button className="mr-1 btn-info ml-1 save-btn btn" {...props}>
    Save
    </button>

  </li>
);
