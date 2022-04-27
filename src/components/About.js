import React from "react";

import "../css/about.css";

import imgs from "../img/lap2.jpeg";

const About = () => {
	return (
		<>
			<div>
				<div id="about-banner-wrap">
					<div id="about-banner"></div>
					<div id="about-banner-h2">
						<h2>ABOUT US</h2>
					</div>
				</div>
				<div className="about-global-wrap">
					<div className="texts">
						<h3 className="hello">Hello Friends</h3>
						<p>
							Welcome to <b> RGP-73 Accessories Store</b> owned by a
							Group of Marketers with the passion for Computer
							Accessories.
						</p>
					</div>
					<div className="texts" id="text2">
						<p>
							We started <b> RGP-73 Accessories Store </b> with the idea
							of being able to offer the very best ACCESSORIES with the
							very best price to help our <b>Patronizers</b>
						</p>
					</div>
					<div id="members-wrap">
						<h3>Members</h3>
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
									<h5 class="card-title">Mendouksai</h5>
									<p class="card-text">Back-End Developer.</p>
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
						</div>
					</div>

					<div className="prodlist">
						<p>
							<b> We are committed to:</b>
						</p>
						<ol className="about-prodlist">
							<li>Computer Accesories </li>
							<li>focusing on finding you the best ACCESSORIES</li>
							<li>
								giving quality services and the best deals possible.
							</li>
						</ol>
					</div>
					<div className="texts goal">
						<p>YOUR SATISFACTION IS OUR PRIORITY</p>
						<p>THE WORLD IS OUR COMMUNITY</p>
					</div>
					<div className="texts about-contact">
						<h3> Stay In Touch</h3>
						<p>
							Get 10% off your first purchase by joining our mailing
							list, and receive some of the best deals possible..
						</p>
						<div className="about-form">
							<form action="">
								<div>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="Your Email... "
									/>
								</div>
								<div className="but">
									<button type="submit" id="but">
										Subscribe
									</button>
								</div>
							</form>
						</div>

						<p>If you need anything don't hesitate to contact us!</p>
					</div>
					<div className="texts">
						<p>All the best</p>
					</div>
					<div className="last-text">
						<p>RGP-73 GROUP OF MARKETERS</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
