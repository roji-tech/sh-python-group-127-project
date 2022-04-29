import React from "react";

import "../css/about.css";

import res from "../img/restaurant.jpg";

import imgs from "../img/no_image.jpg";

const About = () => {
	return (
		<>
			<div className="about">
				<div id="about-banner-wrap">
					{/* <div id="about-banner"></div> */}
					<div id="about-banner-h2">
						<h2>ABOUT US</h2>
					</div>
				</div>
				<div className="about-global-wrap">
					<div className="about-section">
						<div className="texts" id="text2">
							<img src={res} alt="" />
						</div>
						<div className="texts">
							<h4 className="who">Who We Are</h4>
							<h2>
								We are commited to providing the best customer service.
							</h2>
							<p>
								In order to meet this promise, we are focused on
								preparing the best quality of food and drinks to our
								customers. We also offer the best take-out and food
								delivery services.
							</p>
						</div>
					</div>
					<br />
					<br />
					<div>
						<h4 className="who">About Us</h4>
						<p className="text-p">
							<b> Tasty Restaurant </b> is a restaurant designed around
							the farmer's haul featuring a menu that changes daily with
							a focus on seasonal and local cuisine. Our grains are
							milled fresh for house made pasta, breads, and deserts,
							whole animal butchery is done on site, and an extensive in
							house fermentation program captures flavors at their peak
							and preserves them for the off season. When you visit the
							restaurant, check out our larder to see vinegars, and
							brines bubbling away. <br></br>
							There are two ways to dine with use. One is off the menu
							which offers small plates, pastas and deserts, which are
							all meant to be shared. In addition to our printed menu,
							guests can also order directly off circulating carts that
							stop by during their meal to try 'dim sum' bites. These
							nightly specials will be described as tableside.
						</p>
					</div>
					<br />
					<div id="members-wrap">
						<h4 className="who">Members</h4>
						<div className="about-grid">
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Rojitech</h5>
									<p class="card-text">CEO</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Tunex</h5>
									<p class="card-text">manager.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Sprinkle</h5>
									<p class="card-text">Front-End Developer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Buhari</h5>
									<p class="card-text">Graphics Designer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Gladmo</h5>
									<p class="card-text">Copy writer.</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">oluwafemi</h5>
									<p class="card-text">Marketing</p>
								</div>
							</div>
							<div class="member">
								<img src={imgs} class="card-img-top" alt="Member" />
								<div class="card-body">
									<h5 class="card-title">Muktar</h5>
									<p class="card-text">Full Stack Developer</p>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="prodlist">
						<p>
							<b>
								<em> We are committed to:</em>
							</b>
						</p>
						<br />
						<ol className="about-prodlist">
							<li>Food Delivery. </li>
							<li>finding you the best YUMMY.</li>
							<li>giving quality services.</li>
							<li>the best deals possible.</li>
						</ol>
					</div> */}
					{/* <div className="texts goal">
						<p>YOUR SATISFACTION IS OUR PRIORITY</p>
						<hr />
						<p>THE WORLD IS OUR COMMUNITY</p>
					</div> */}

					<div className="texts">
						<p>
							<em>All the best</em>
						</p>
					</div>
					<br />
					<div className="last-text">
						<p>
							<b id="tasty"> Tasty </b> YUMMY FOOD Restaurant{" "}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
