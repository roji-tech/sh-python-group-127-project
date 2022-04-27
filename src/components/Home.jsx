import React from "react";
// Component import
import Banner from "./Banner";
import Products from "./Products";

import "../css/home.css";

const Home = () => {
	return (
		<>
			<Banner />
			<h2>Home</h2>
			<div>
				<Products />
			</div>
		</>
	);
};

export default Home;
