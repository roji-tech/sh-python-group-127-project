import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import logoR from "../img/logo.png";

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="brand">
				<a href="/">
					<img src={logoR} id="logoR" alt="Group73" />
				</a>
				<h2> RGP-73 Store </h2>
			</div>
			<div className="nav-links">
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/about">About</Link>
				</li>
				<li className="nav-item">
					<Link to="/products">Products</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact"> Contact</Link>
				</li>
			</div>
		</header>
	);
};

export default Navbar;
