/* eslint-disable react/prop-types */
import "../assets/css/backto-top-style.css";

const BackTop = (props) => {
	return (
		<button type="button" className="back-to-top" onClick={props?.backToTop} id="btnToTop">
			<span className="fa-stack fa-lg">
				<i className="fa-solid fa-square fa-stack-2x"></i>
				<i className="fa-solid fa-angles-up fa-stack-1x fa-inverse"></i>
			</span>
		</button>
	);
}

export default BackTop;