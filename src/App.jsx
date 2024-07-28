/* eslint-disable no-mixed-spaces-and-tabs */
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
const App = () => {
	return (
		<Routes>
			<Route path="/" element = {<Home />} />
			<Route path="/home" element = {<Home />} />
		</Routes>
	)
}
export default App;