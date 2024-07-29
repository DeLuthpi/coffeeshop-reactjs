/* eslint-disable react/prop-types */
import "../assets/css/story-style.css";
import { Link } from "react-router-dom";

const StorySection = (props) => {
	return (
		// Story Section
		<section className="story-section" aria-labelledby="story-section">
			<div className="story-section-layout">
				<div className="story-layout-bg-img">
					<img src={props?.storyBgImage} alt="story-bg-img" className="story-bg-img" />
				</div>
				<div aria-hidden="true" className="story-bg-img-gradient"></div>
				<div className="story-layout-text">
					<h2 className="story-text-h1">Little Story of {props?.logoName1} <span className="story-text-h2">{props?.logoName2}</span></h2>
					<p className="story-text-p">At {props?.logoName1} {props?.logoName2}, we believe in more than just serving great coffee. We create a community hub where people come together to relax, recharge, and connect. Nestled in the south of Bekasi City, our cozy café offers a warm and inviting atmosphere perfect for both work and leisure.</p>
					<Link to="/about" className="btn-read-story">Read our story</Link>
				</div>
			</div>
		</section>
	);
}

export default StorySection;