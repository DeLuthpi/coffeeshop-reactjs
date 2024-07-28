import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import StorySection from "../components/StorySection";
import ProductSection from "../components/ProductSection";
import { logoImageUrl, logoName1, logoName2, navMenu, hamburgerClick, currentPage, isLoggedIn, navIcon, heroImageUrl, heroBgImageUrl, menuCategory, storyBgImageUrl } from "../helpers/const";
import { coffeeList, snackList } from "../helpers/productList";

const Home = () => {
	return (
		<div>
			<Navbar logo={logoImageUrl} logoName1={logoName1} logoName2={logoName2} menus={navMenu} hamburgerClick={hamburgerClick} currentPage={currentPage} isLoggedIn={isLoggedIn} navIcon={navIcon} />
			<HeroSection logoName1={logoName1} logoName2={logoName2} heroImage={heroImageUrl} heroBgImage={heroBgImageUrl} />
			<CategorySection menuCategory={menuCategory} />
			<StorySection logoName1={logoName1} logoName2={logoName2} storyBgImage={storyBgImageUrl} />
			<ProductSection coffeeList={coffeeList} snackList={snackList} />
		</div>
	);
};

export default Home;