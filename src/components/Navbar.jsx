/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../assets/css/navbar-style.css";

const Navbar = (props) => {
	return (
		<header className="header">
			<nav className="navbar">
				<div className="navbar-logo">
					<span className="layout-logo">
						<Link to="/">
							<img className="logo-image" src={props?.logo} alt="logo-image" />
							<span className="logo-name-1"> {props?.logoName1}</span><span className="logo-name-2"> {props?.logoName2}</span>
						</Link>
					</span>
					<div className="layout-btn-mobile">
						<div className="layout-icon-mobile">
							{props?.isLoggedIn ?
								<div className="icon-menu">
									{props?.navIcon.map(item => (
										<div className={item.icon} key={item.id}>
											{item.tagSpan ? <span className="count-notification"> 0 </span> : ''}
											<Link to={item.page}><i className={item.iconName}></i></Link>
										</div>
									))}
								</div>
								: <Link to="/login" className="btn-login">Login</Link>
							}
						</div>
						<span className="layout-btn-hamburger">
							<button id="btn-hamburger" className="btn-hamburger" onClick={props?.hamburgerClick}><i className="fa-solid fa-bars" id="icon-hamburger"></i></button>
						</span>
					</div>
				</div>

				<div className="navbar-menu">
					<ul className="opacity-0 layout-menu">
						{props?.menus.map(list => (
							<li className={props?.currentPage === list.page ? 'menu-list active' : 'menu-list'} key={list.id}><Link to={list.page} className="menu-link"> {list.name}</Link></li>
						))}
					</ul>
					<div className="layout-icon">
						{props?.isLoggedIn ?
							<div className="icon-menu">
								{props?.navIcon.map(item => (
									<div className={item.icon} key={item.id}>
										{item.tagSpan ? <span className="count-notification"> 0 </span> : ''}
										<Link to={item.page}><i className={item.iconName}></i></Link>
									</div>
								))}
							</div>
							: <Link to="/login" className="btn-login">Login</Link>
						}
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar;