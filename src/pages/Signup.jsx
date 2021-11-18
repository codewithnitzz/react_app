import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/login.css';
import companylogo1 from '../components/img/logo/logo_1.png'
const Signup = () => {
    return (
        <div>
            <main className="main">
	      <div className="main_con">
		<section className="wrapper">
			<div className="heading ">
            <img src={ companylogo1 } className="logimg text-center" alt="logining company logo" />
				<h1 className="text text-large ">Sign Up </h1>
				
			</div>
			<form name="login" className="form">
				<div className="input-control">
					<label for="Name" className="input-label" hidden>Name</label>
					<input type="text" name="Name" className="input-field" placeholder="Name" required />
				</div>
				<div className="input-control">
					<label for="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email" className="input-field" placeholder="Email Address" required />
				</div>
				<div className="input-control">
					<label for="password" className="input-label" hidden>Password</label>
					<input type="password" name="password" className="input-field" placeholder="Password" required />
				</div>
				<div className="input-control justify-content-evenly">
					<input type="checkbox" idName="statements" name="statements"  />
					<label for="vehicle1"> I agree all statements in <Link to="/#" > Terms of Service </Link> </label>
				</div>
				<div className="input-control justify-content-around">	
					<input type="button" name="submit" className="input-submit" value="Register" disabled />
				</div>
			</form>
			<div className="striped">
				<span className="striped-line"></span>
				<span className="striped-text">Or</span>
				<span className="striped-line"></span>
			</div>
            <p class="text text-center">I have already Account ? <span><Link class="text text-links" to="/login">Sign in</Link></span></p>
		</section>
	</div>
</main> 
        </div>
    )
}

export default Signup
