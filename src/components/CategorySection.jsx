/* eslint-disable react/prop-types */
import "../assets/css/category-style.css";

const CategorySection = (props) => {
	return (
		// Category Section
		<section className="category-section" aria-labelledby="category-section">
			<div className="container category-layout">
				<div className="category-heading">
					<h2 className="category-heading-text">Shop by Category</h2>
					<a href="/menu" className="btn-browse-top">Browse all categories <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
				</div>
				<div className="category-body">
					{props?.menuCategory.map(item => (
						<div className={item.divClass} key={item.id}>
							<img src={item.imageUrl} alt={item.altImg} className="category-img" />
							<div aria-hidden="true" className="category-gradient"></div>
							<div className="category-text">
								<div>
									<h3 className={item.h3Class}>
										<a href={item.aHref}><span className="category-text-link"></span>{item.aName}</a>
									</h3>
									<p aria-hidden="true" className={item.pClass}>Shop now</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="layout-browse-bottom">
					<a href="/menu" className="btn-browse-bottom">Browse all categories <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
				</div>
			</div>
		</section>
	);
}

export default CategorySection;