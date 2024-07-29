/* eslint-disable react/prop-types */
import "../assets/css/category-style.css";
import { Link } from "react-router-dom";

const CategorySection = (props) => {
	return (
		// Category Section
		<section className="category-section" aria-labelledby="category-section">
			<div className="container category-layout">
				<div className="category-heading">
					<h2 className="category-heading-text">Shop by Category</h2>
					<Link to="/menu" className="btn-browse-top">Browse all categories <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
				</div>
				<div className="category-body">
					{props?.menuCategory.map(item => (
						<div className={item.divClass} key={item.id}>
							<img src={item.imageUrl} alt={item.altImg} className="category-img" />
							<div aria-hidden="true" className="category-gradient"></div>
							<div className="category-text">
								<div>
									<h3 className={item.h3Class}>
										<Link to={item.linkTo}><span className="category-text-link"></span>{item.linkTag}</Link>
									</h3>
									<p aria-hidden="true" className={item.pClass}>Shop now</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="layout-browse-bottom">
					<Link to="/menu" className="btn-browse-bottom">Browse all categories <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
				</div>
			</div>
		</section>
	);
}

export default CategorySection;