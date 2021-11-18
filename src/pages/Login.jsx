import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import companylogo1 from '../components/img/logo/logo_1.png'
const Login = () => {
    return (
        <div>
            <main className="main">
	      <div className="main_con">
		<section className="wrapper">
			<div className="heading ">
            <img src={ companylogo1 } className="logimg text-center" alt="loging comp logo" />
				<h1 className="text text-large ">Sign In </h1>
				
			</div>
			<form name="login" className="form">
				<div className="input-control">
					<label for="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" className="input-field" placeholder="Email Address" />
				</div>
				<div className="input-control">
					<label for="password" className="input-label" hidden>Password</label>
					<input type="password" name="password" className="input-field" placeholder="Password" />
				</div>
				<div className="input-control justify-content-start">
					<input type="checkbox" idName="statements" name="statements" className="mx-2"  />
					<label for="vehicle1"> Remember Me</label>
				</div>
				<div className="input-control">
					<Link to="/" className="text text-links">Forgot Password</Link>
					<input type="button" name="submit" className="input-submit" value="Login" disabled />
				</div>
			</form>
			<div className="striped">
				<span className="striped-line"></span>
				<span className="striped-text">Or</span>
				<span className="striped-line"></span>
			</div>
            <p class="text text-center">New user? <span><Link class="text text-links" to="/signup">Create an account</Link></span></p>
		</section>
	</div>
</main>
        </div>
    )
}

export default Login
