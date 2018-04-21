import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  // <span className="delete-btn" {...props}>
  //   ✗
  // </span>
    <span>
	  <button type="button" className="mr-1 btn-danger ml-1 delete-btn btn"{...props}>
	    Delete
	  </button> 
  </span>

);

export default DeleteBtn;
