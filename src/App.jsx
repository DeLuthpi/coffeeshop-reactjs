/* eslint-disable no-mixed-spaces-and-tabs */
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const App = () => {
	return (
		<Routes>
			<Route path="/" element = {<Home />} />
			<Route path="/home" element = {<Home />} />
			<Route path="/menu" element = {<Menu />} />
			<Route path="/services" element = {<Services />} />
			<Route path="/about" element = {<About />} />
			<Route path="/contact" element = {<Contact />} />
			<Route path="/cart" element = {<Cart />} />
			<Route path="/termsandcondition" element = {<Terms />} />
			<Route path="/privacy" element = {<Privacy />} />
		</Routes>
	)
}
export default App;