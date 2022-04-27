import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h2>Error</h2>
      <p>Page Not Found</p>
			<Link to="/">
				<p>Click to go back to Home Page </p>
			</Link>
		</div>
	);
};

export default Error;
