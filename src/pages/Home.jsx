import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { logoImageUrl, logoName1, logoName2, navMenu, hamburgerClick, currentPage, isLoggedIn, navIcon, heroImageUrl, heroBgImageUrl, menuCategory } from "../helpers/const";
import CategorySection from "../components/CategorySection";

const Home = () => {
	return (
		<div>
			<Navbar logo={logoImageUrl} logoName1={logoName1} logoName2={logoName2} menus={navMenu} hamburgerClick={hamburgerClick} currentPage={currentPage} isLoggedIn={isLoggedIn} navIcon={navIcon} />
			<HeroSection logoName1={logoName1} logoName2={logoName2} heroImage={heroImageUrl} heroBgImage={heroBgImageUrl} />
			<CategorySection menuCategory={menuCategory} />
		</div>
	);
};

export default Home;