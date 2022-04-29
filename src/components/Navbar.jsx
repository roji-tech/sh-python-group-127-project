import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/navbar1.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openCloseNav = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className="Navbar">
			<Link to={"/"}>
				<span className="nav-logo">Tasty</span>
			</Link>
			<div className={`nav-items ${isOpen && "open"}`}>
				<Link to="/" className="link" onClick={openCloseNav}>
					HOME
				</Link>
				<Link to="/about" className="link" onClick={openCloseNav}>
					ABOUT
				</Link>
				<Link to="/products" className="link" onClick={openCloseNav}>
					PRODUCTS
				</Link>
				<Link to="/contact" className="link" onClick={openCloseNav}>
					CONTACT
				</Link>
			</div>
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={openCloseNav}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;
