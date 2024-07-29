import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import StorySection from "../components/StorySection";
import ProductSection from "../components/ProductSection";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import { logoImageUrl, logoName1, logoName2, navMenu, hamburgerClick, isLoggedIn, navIcon, heroImageUrl, heroBgImageUrl, menuCategory, storyBgImageUrl, footerLink1, footerLink2, openHours, socialMedia, backToTop, yearCopyright } from "../helpers/const";
import { coffeeList, snackList } from "../helpers/productList";

const Home = () => {
	return (
		<div>
			<Navbar logo={logoImageUrl} logoName1={logoName1} logoName2={logoName2} menus={navMenu} hamburgerClick={hamburgerClick} isLoggedIn={isLoggedIn} navIcon={navIcon} />
			<HeroSection logoName1={logoName1} logoName2={logoName2} heroImage={heroImageUrl} heroBgImage={heroBgImageUrl} />
			<CategorySection menuCategory={menuCategory} />
			<StorySection logoName1={logoName1} logoName2={logoName2} storyBgImage={storyBgImageUrl} />
			<ProductSection coffeeList={coffeeList} snackList={snackList} isLoggedIn={isLoggedIn} />
			<BackToTop backToTop={backToTop} />
			<Footer logoImage={logoImageUrl} logoName1={logoName1} logoName2={logoName2} footerLink1={footerLink1} footerLink2={footerLink2} openHours={openHours} socialMedia={socialMedia} yearCopyright={yearCopyright} />
		</div>
	);
};

export default Home;