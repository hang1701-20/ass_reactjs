import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Login = props => {
    return (
        <div>
      <div className="login_sec">
  <div className="container">
    <ol className="breadcrumb">
      <li><a href="index.html">Home</a></li>
      <li className="active">Login</li>
    </ol>
    <h2>Login</h2>
    <div className="col-md-6 log">			 
      <p>Welcome, please enter the folling to continue.</p>
      <p>If you have previously Login with us, <span>click here</span></p>
      <form>
        <h5>Username:</h5>	
        <input type="text" defaultValue />
        <h5>Password:</h5>
        <input type="password" defaultValue />					
        <input type="submit" defaultValue="Login" />					 
        <Link to="/createacc" className="acount-btn">Create an Account</Link>
      </form>
      <a href="#">Forgot Password ?</a>
    </div>	
    <div className="clearfix" />
  </div>
</div>

        </div>
    )
}

Login.propTypes = {

}

export default Login
