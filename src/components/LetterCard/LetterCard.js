import React from "react";
import "./LetterCard.css";

const LetterCard = props => (
  // <div className="card">
    // <div className = "img-container"  onClick={() =>props.selectLetter(props.id)}>
    //   <img alt={props.name} src={props.image} />
    // </div>
    <div className = "row">
     <div className = "col-md-9">
     <div className="card"></div>
     </div>

     <div className = "col-md-3">
		<button className = "button btn-primary"  onClick={() =>props.selectLetter(props.id)}/>
	</div>
	</div>



);

export default LetterCard;
