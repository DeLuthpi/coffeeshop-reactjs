/* eslint-disable react/prop-types */
import "../assets/css/footer-style.css";

const Footer = (props) => {
	return (
		// Footer
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-top-layout">
					<div className="footer-logo">
						<span className="footer-logo-layout">
							<img className="footer-logo-img" src={props?.logoImage} />
							<h6>{props?.logoName1} <span className="footer-logo-span">{props?.logoName2}</span></h6>
						</span>
						<p className="footer-text-p">Nestled in the south of Bekasi City, our cozy café offers a warm and inviting atmosphere perfect for both work and leisure.</p>
						<br />
						<p className="footer-text-p"><i className="fa-solid fa-location-dot"> </i> Puri gading, Pedurenan village, Jatiasih, South Bekasi</p>
						<p className="footer-text-p">West Java, Indonesia - 17425</p>
					</div>

					<div className="footer-page">
						<h6 className="footer-page-heading">Pages</h6>
						<ul>
							{props?.footerLink1.map(list => (
								<li className="footer-page-link" key={list.id}>
									<a href={list.page}>{list.name}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-page">
						<h6 className="footer-page-heading">Company</h6>
						<ul>
							{props?.footerLink2.map(list => (
								<li className="footer-page-link" key={list.id}>
									<a href={list.page}>{list.name}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-opening">
						<h6 className="footer-page-heading">Open Hours</h6>
						{props?.openHours.map(list => (
							<span className="footer-page-span" key={list.id}>
								<p className="footer-page-p">{list.days}</p>
								<p>{list.time}</p>
							</span>
						))}

						<div className="social-media">
							<h6 className="footer-page-heading">Connect with us</h6>
							<ul className="footer-medsos">
								{props?.socialMedia.map(list => (
									<li className="footer-medsos-list" key={list.id}>
										<a href={list.link}>
											<span className="fa-stack fa-lg">
												<i className="fa-solid fa-circle fa-stack-2x"></i>
												<i className={list.icon}></i>
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<span>Copyright © {props?.yearCopyright}. All Rights Reserved. {props?.logoName1} {props?.logoName2} — Designed by</span>
				<a className="footer-bottom-link" href="#!"> De Luthpi</a>
			</div>
		</footer>
		
	);
}

export default Footer;