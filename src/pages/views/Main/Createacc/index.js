import React from 'react'
import PropTypes from 'prop-types'

const Createacc = props => {
    return (
        <div>
           <div className="container">
  <ol className="breadcrumb">
    <li><a href="index.html">Home</a></li>
    <li className="active">Account</li>
  </ol>
  <div className="registration">
    <div className="registration_left">
      <h2>new user? <span> create an account </span></h2>
      {/* [if IE] 
				< link rel='stylesheet' type='text/css' href='ie.css'/>  
			 [endif] */}  
      {/* [if lt IE 7]>  
				< link rel='stylesheet' type='text/css' href='ie6.css'/>  
			 <! [endif] */}  
      <div className="registration_form">
        {/* Form */}
        <form id="registration_form" action="contact.php" method="post">
          <div>
            <label>
              <input placeholder="first name:" type="text" tabIndex={1} required autofocus />
            </label>
          </div>
          <div>
            <label>
              <input placeholder="last name:" type="text" tabIndex={2} required autofocus />
            </label>
          </div>
          <div>
            <label>
              <input placeholder="email address:" type="email" tabIndex={3} required />
            </label>
          </div>
          <div>
            <label>
              <input placeholder="Mobile:" type="email" tabIndex={3} required />
            </label>
          </div>					
          <div className="sky_form1">
            <ul>
              <li><label className="radio left"><input type="radio" name="radio" defaultChecked /><i />Male</label></li>
              <li><label className="radio"><input type="radio" name="radio" /><i />Female</label></li>
              <div className="clearfix" />
            </ul>
          </div>					
          <div>
            <label>
              <input placeholder="password" type="password" tabIndex={4} required />
            </label>
          </div>						
          <div>
            <label>
              <input placeholder="retype password" type="password" tabIndex={4} required />
            </label>
          </div>	
          <div>
            <input type="submit" defaultValue="create an account" id="register-submit" />
          </div>
          <div className="sky-form">
            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />i agree to mobilya.com &nbsp;<a className="terms" href="#"> terms of service</a> </label>
          </div>
        </form>
        {/* /Form */}
      </div>
    </div>
    <div className="registration_left">
      <h2>existing user</h2>
      <div className="registration_form">
        {/* Form */}
        <form id="registration_form" action="contact.php" method="post">
          <div>
            <label>
              <input placeholder="email:" type="email" tabIndex={3} required />
            </label>
          </div>
          <div>
            <label>
              <input placeholder="password" type="password" tabIndex={4} required />
            </label>
          </div>						
          <div>
            <input type="submit" defaultValue="sign in" id="register-submit" />
          </div>
          <div className="forget">
            <a href="#">forgot your password</a>
          </div>
        </form>
        {/* /Form */}
      </div>
    </div>
    <div className="clearfix" />
  </div>
</div>

        </div>
    )
}

Createacc.propTypes = {

}

export default Createacc
