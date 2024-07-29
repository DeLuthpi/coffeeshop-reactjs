import { logoName1, logoName2 } from "../helpers/const";

const Login = () => {
	return (
		<div>
            <section className="login-section" style={{backgroundColor: '#fefae0', height: '100vh'}}>
				<div className="login-layout">
					<span className="logo-name-1"> {logoName1}</span><span className="logo-name-2"> {logoName2}</span>
					<h2>Login Page</h2>
				</div>
			</section>
		</div>
	)
}

export default Login;