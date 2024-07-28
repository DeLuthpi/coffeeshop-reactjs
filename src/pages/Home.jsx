import Navbar from "../components/Navbar";
import { logoImageUrl, logoName1, logoName2, navMenu, handleClick, currentPage, isLoggedIn, navIcon } from "../helpers/const";

const Home = () => {
	return (
		<div>
			<Navbar logo={logoImageUrl} logoName1={logoName1} logoName2={logoName2} menus={navMenu} handleClick={handleClick} currentPage={currentPage} isLoggedIn={isLoggedIn} navIcon={navIcon} />
		</div>
	);
};

export default Home;