import React from "react";

// Component import
import Banner from "./Banner";
import Products from "./Products";
import BackToTop from "./BackToTop";
// Image import
import value from "../img/meal-1.jpg";
// styles import
import "../css/home.css";

const Home = () => {
	return (
		<>
			<Banner />
			<section className="value">
				<div>
					<h2 className="custom-title">
						Why Tasty? <span></span>
					</h2>
					<p className="value-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Earum amet accusamus voluptatibus cum rerum ipsam ad optio
						laudantium aut. Iste, ab consequuntur veniam reprehenderit
						tempore enim! Saepe placeat ea distinctio velit reprehenderit,
						cum eum officia reiciendis nemo obcaecati sint nesciunt. Lorem
						ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
						explicabo
					</p>
				</div>
				<div>
					<img src={value} alt="" />
				</div>
			</section>

			<section className="testimonials">
				<h2 className="custom-title">
					Testimonials <span></span>
				</h2>
				<div className="testimonies">
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Prisca David</h3>
					</div>
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Phillip Thomas</h3>
					</div>
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Becca Willams</h3>
					</div>
				</div>
			</section>
			<section className="testimonials">
				<h2 className="custom-title">
					Testimonials <span></span>
				</h2>
				<div className="testimonies">
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Prisca David</h3>
					</div>
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Phillip Thomas</h3>
					</div>
					<div className="testimony">
						<p>
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates, ex!"
						</p>
						<h3 className="author">Becca Willams</h3>
					</div>
				</div>
			</section>
			<div>
				<Products />
			</div>
				<BackToTop />
		</>
	);
};

export default Home;
