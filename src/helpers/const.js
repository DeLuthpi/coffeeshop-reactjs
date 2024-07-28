const logoImageUrl = "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/logo%2Flogo.png?alt=media&token=6c0217e1-2c6c-41fd-8905-a605f60467b1";
const logoName1 = "D'Coffee";
const logoName2 = "Shop";
const isLoggedIn = false;

const path = String(window.location.pathname.replace("/", ""));
let currentPage = "home";

if (path === "") {
	currentPage = "home";
} else {
	currentPage = path;
}

const navMenu = [
	{
		id: 1,
		page: "home",
		name: "Home",
	},
	{
		id: 2,
		page: "menu",
		name: "Menu",
	},
	{
		id: 3,
		page: "services",
		name: "Services",
	},
	{
		id: 4,
		page: "about",
		name: "About us",
	},
	{
		id: 5,
		page: "contact",
		name: "Contact us",
	},
];

const navIcon = [
	{
		id: 1,
		icon: "icon-cart",
		tagSpan: true,
		iconName: "fa-solid fa-basket-shopping",
		linkHref: "cart",
	},
	{
		id: 2,
		icon: "icon-user",
		tagSpan: false,
		iconName: "fa-regular fa-user",
		linkHref: "profile",
	},
];

const handleClick = () => {
	const list = document.querySelector("ul");
	const icon = document.getElementById("icon-hamburger");
	if (icon.classList.contains("fa-bars")) {
		icon.classList.add("fa-xmark");
		icon.classList.remove("fa-bars");
		list.classList.add("opacity-100");
	} else {
		icon.classList.add("fa-bars");
		icon.classList.remove("fa-xmark");
		list.classList.remove("opacity-100");
	}
};

export { logoImageUrl, logoName1, logoName2, isLoggedIn, navMenu, navIcon, handleClick, currentPage };
