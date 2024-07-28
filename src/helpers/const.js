const logoImageUrl = "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/logo%2Flogo.png?alt=media&token=6c0217e1-2c6c-41fd-8905-a605f60467b1";
const logoName1 = "D'Coffee";
const logoName2 = "Shop";
const isLoggedIn = false;
const heroImageUrl = "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fhero-img.png?alt=media&token=b5935b35-e191-4520-94cf-7ba58fdf720e";
const heroBgImageUrl = "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fhero-bg-img.png?alt=media&token=97282545-ace7-4b1f-aaf9-caaac089418e";
const storyBgImageUrl = "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fstory-bg-image.jpg?alt=media&token=33d87169-384d-4381-9125-877c6e140041";
const yearCopyright = new Date().getFullYear();

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

const hamburgerClick = () => {
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

const menuCategory = [
	{
		id: 1,
		divClass: "category-menu-box menu-box-1",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fnew-arrivals.jpg?alt=media&token=392521dd-c1a4-4cd5-921a-3de1403fefd4",
		altImg: "new-arrivals-img",
		h3Class: "category-text-h1",
		aName: "New Arrivals",
		aHref: "menu",
		pClass: "category-text-p1",
	},
	{
		id: 2,
		divClass: "category-menu-box",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fcoffee-category.jpg?alt=media&token=e8b823f8-b625-43c9-b7de-d86067650f41",
		altImg: "coffee-cat-img",
		h3Class: "category-text-h2",
		aName: "Coffee",
		aHref: "menu",
		pClass: "category-text-p2",
	},
	{
		id: 3,
		divClass: "category-menu-box",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/coffeeshop-918d2.appspot.com/o/pages%2Fsnack-category.jpg?alt=media&token=bb7a7aa0-6e56-49aa-a457-8e6705a299c7",
		altImg: "snack-cat-img",
		h3Class: "category-text-h2",
		aName: "Snacks",
		aHref: "menu",
		pClass: "category-text-p2",
	},
];

const footerLink1 = [
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
		page: "cart",
		name: "Shopping Cart",
	},
];

const footerLink2 = [
	{
		id: 1,
		page: "about",
		name: "About us",
	},
	{
		id: 2,
		page: "contact",
		name: "Contact us",
	},
	{
		id: 3,
		page: "termandcondition",
		name: "Term & Condition",
	},
	{
		id: 4,
		page: "privacy",
		name: "Privacy Policy",
	},
];

const openHours = [
	{
		id: 1,
		days: "Monday - Friday",
		time: "09:00 - 21:00",
	},
	{
		id: 2,
		days: "Saturday - Sunday",
		time: "09:00 - 22:00",
	},
];

const socialMedia = [
	{
		id: 1,
		link: "#!",
		icon: "fa-brands fa-facebook-f fa-stack-1x fa-inverse medsos-color",
	},
	{
		id: 2,
		link: "#!",
		icon: "fa-brands fa-instagram fa-stack-1x fa-inverse medsos-color",
	},
	{
		id: 3,
		link: "#!",
		icon: "fa-brands fa-tiktok fa-stack-1x fa-inverse medsos-color",
	},
	{
		id: 4,
		link: "#!",
		icon: "fa-brands fa-twitter fa-stack-1x fa-inverse medsos-color",
	},
	{
		id: 5,
		link: "#!",
		icon: "fa-brands fa-youtube fa-stack-1x fa-inverse medsos-color",
	},
];

const scrollFunction = () => {
	const btnToTop = document.getElementById("btnToTop");
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		btnToTop.classList.remove("hidden");
	} else {
		btnToTop.classList.add("hidden");
	}
};
const backToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", scrollFunction);

export { logoImageUrl, logoName1, logoName2, isLoggedIn, navMenu, navIcon, hamburgerClick, currentPage, heroImageUrl, heroBgImageUrl, menuCategory, storyBgImageUrl, footerLink1, footerLink2, openHours, socialMedia, backToTop, yearCopyright };
