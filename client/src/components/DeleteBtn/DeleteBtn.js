import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  // <span className="delete-btn" {...props}>
  //   ✗
  // </span>
  <div>
	  <button type="button" className="ml-1 delete-btn btn btn-primary" {...props}>
	    Delete
	  </button>
	  <button type="button" className="save-btn btn btn-primary" {...props}>
	    Save
	  </button>  
  </div>

);

export default DeleteBtn;
