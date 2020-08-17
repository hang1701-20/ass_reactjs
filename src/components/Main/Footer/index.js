import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
     <div className="footer">
  <div className="container">
    <div className="ftr-grids">
      <div className="col-md-3 ftr-grid">
        <h4>About Us</h4>
        <ul>
          <li><a href="#">Who We Are</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="#">Our Sites</a></li>
          <li><a href="#">In The News</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>					 
        </ul>
      </div>
      <div className="col-md-3 ftr-grid">
        <h4>Customer service</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Cancellation</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Bulk Orders</a></li>
          <li><a href="#">Buying Guides</a></li>					 
        </ul>
      </div>
      <div className="col-md-3 ftr-grid">
        <h4>Your account</h4>
        <ul>
          <li><a href="account.html">Your Account</a></li>
          <li><a href="#">Personal Information</a></li>
          <li><a href="#">Addresses</a></li>
          <li><a href="#">Discount</a></li>
          <li><a href="#">Track your order</a></li>					 					 
        </ul>
      </div>
      <div className="col-md-3 ftr-grid">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">&gt; Wedding</a></li>
          <li><a href="#">&gt; Jewellerys</a></li>
          <li><a href="#">&gt; Shoes</a></li>
          <li><a href="#">&gt; Flowers</a></li>
          <li><a href="#">&gt; Cakes</a></li>
          <li><a href="#">...More</a></li>					 
        </ul>
      </div>
      <div className="clearfix" />
    </div>		
  </div>
</div>

        </div>

    )
}

Footer.propTypes = {

}

export default Footer
