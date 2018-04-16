import React from "react";
import "./Footer.css";

const Footer = props => (
	<footer className="footer">
	<div className="bottom">{props.children}</div>
	</footer>
);

export default Footer;