import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../css/error.css";
import errorImage from "../img/error.svg";

const Error = () => {
	return (
		<div>
			<Navbar />
			<div className="error">
				<div className="error-wrap">
					<img src={errorImage} className="errorImage" alt="" />
					<h2 className="error-text">Error</h2>
				</div>
				<p className="pg-not-fd">Page Not Found</p>

				<div className="back-home-wrap">
					<Link to="/" className="back-home">
						Click to go back to Home Page
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Error;
