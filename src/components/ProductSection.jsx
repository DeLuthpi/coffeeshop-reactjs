/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../assets/css/product-style.css";
import { Link } from "react-router-dom";

const ProductSection = (props) => {
	return (
		// Product Section
		<section className="product-section" aria-labelledby="product-section">
			<div className="container product-section-layout">
				<div className="product-section-heading">
					<h1 className="product-text-h1">Our <span className="product-text-h2">Menu&apos;s</span></h1>
					<div className="product-heading-border">
						<div className="product-heading-dot"></div>
						<div className="product-heading-line"></div>
						<div className="product-heading-dot"></div>
					</div>
				</div>

				<div className="container product-section-body">
					<div className="product-body-heading">
						<h2 className="product-body-text-h1">Our Coffee <i className="fa-solid fa-mug-hot text-chocolate"></i></h2>
						<Link to="/coffee-category" className="btn-browse-top">Browse all coffee <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
					</div>
					<div className="product-layout">
						{props?.coffeeList.slice(0, 6).map(product => (
							<div className="product-card" key={product.id}>
								<img className="product-img" src={product.coffeeImgUrl} alt={product.coffeeName} />
								<div className="product-detail">
									<h1 className="product-name">{product.coffeeName}</h1>
									<h2 className="product-price">{product.coffeePrice}</h2>
									<div className="product-rate">
										<div>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											{product.coffeeRate >= 4.7 ? <i className="text-yellow-500 fa-solid fa-star-half-stroke"></i> : <i className="text-gray-400 fa-regular fa-star"></i>}
										</div>
										<span className="text-gray-400">({product.coffeeRate})</span>
									</div>
									<div className="btn-add-cart">
										{props?.isLoggedIn ?
											<Link className="text-btn-add-cart" onClick={() => props.addToCart(product)}><i className="fa-solid fa-plus"></i> add to cart</Link>
											: <Link className="text-btn-add-cart" to="/login"><i className="fa-solid fa-plus"></i> add to cart</Link>
										}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="layout-browse-bottom">
					<Link to="/coffee-category" className="btn-browse-bottom">Browse all coffee <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
					</div>
				</div>

				<div className="container product-section-body">
					<div className="product-body-heading">
						<h2 className="product-body-text-h1">Our Snacks <i className="rotate-90 fa-solid fa-pizza-slice text-chocolate"></i></h2>
						<Link to="/snacks-category" className="btn-browse-top">Browse all snacks <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
					</div>
					<div className="product-layout">
						{props?.snackList.slice(0, 6).map(product => (
							<div className="product-card" key={product.id}>
								<img className="product-img" src={product.snackImgUrl} alt={product.snackName} />
								<div className="product-detail">
									<h1 className="product-name">{product.snackName}</h1>
									<h2 className="product-price">{product.snackPrice}</h2>
									<div className="product-rate">
										<div>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											<i className="text-yellow-500 fa-solid fa-star"></i>
											{product.snackRate >= 4.7 ? <i className="text-yellow-500 fa-solid fa-star-half-stroke"></i> : <i className="text-gray-400 fa-regular fa-star"></i>}
										</div>
										<span className="text-gray-400">({product.snackRate})</span>
									</div>
									<div className="btn-add-cart">
										{props?.isLoggedIn ?
											<Link className="text-btn-add-cart" onClick={() => props.addToCart(product)}><i className="fa-solid fa-plus"></i> add to cart</Link>
											: <Link className="text-btn-add-cart" to="/login"><i className="fa-solid fa-plus"></i> add to cart</Link>
										}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="layout-browse-bottom">
						<Link to="/snacks-category" className="btn-browse-bottom">Browse all snacks <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductSection;