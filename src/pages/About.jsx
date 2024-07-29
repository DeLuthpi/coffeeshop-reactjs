import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import { logoImageUrl, logoName1, logoName2, navMenu, hamburgerClick, currentPage, isLoggedIn, navIcon, footerLink1, footerLink2, openHours, socialMedia, backToTop, yearCopyright } from "../helpers/const";

const About = () => {
	return (
		<div>
			<Navbar logo={logoImageUrl} logoName1={logoName1} logoName2={logoName2} menus={navMenu} hamburgerClick={hamburgerClick} currentPage={currentPage} isLoggedIn={isLoggedIn} navIcon={navIcon} />
            <BackToTop backToTop={backToTop} />
            <main className="main-content"></main>
			<Footer logoImage={logoImageUrl} logoName1={logoName1} logoName2={logoName2} footerLink1={footerLink1} footerLink2={footerLink2} openHours={openHours} socialMedia={socialMedia} yearCopyright={yearCopyright} />
		</div>
	)
}

export default About;