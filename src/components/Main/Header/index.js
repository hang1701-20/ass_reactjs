import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  const [key, setKeyWord] = useState();
  const handleChangeKeyWord = (e) => {
    const { name, value } = e.target;
    setKeyWord(value)
  }

  
  return (
    <div>
      <div className="top_bg">
        <div className="container">
          <div className="header_top-sec">
            <div className="top_right">
              <ul>
                <li><a href="#">help</a></li>|
				  	<li><a href="contact.html">Contact</a></li>|
					  <li><a href="login.html">Track Order</a></li>
              </ul>
            </div>
            <div className="top_left">
              <ul>
                <li className="top_link">Email:<a href="mailto:info@example.com">mail@example.com</a></li>|
					<li className="top_link"><Link to="/Login">My Account</Link></li>
              </ul>
            </div>
            <div>
              <input onChange={handleChangeKeyWord} name="search"/><Link to={`/search/${key}`}>tìm kiếm</Link>
</div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="header-bottom">
          <div className="container">
            <div className="logo">
              <Link to="/"><h1>Wedding Store</h1></Link>
            </div>
            {/**/}
            <div className="top-nav">
              <ul className="memenu skyblue"><li className="showhide" style={{ overflow: 'hidden', display: 'none' }}><span className="title">MENU</span><span className="icon1" /><span className="icon2" /></li><li className="active"><Link to="/">Home</Link></li>
                <li className="grid"><Link to="/Product">Wedding</Link>

                </li>
                <li className="grid"><Link to="/blog">Blog</Link>
                </li>
                <li className="grid"><a href="typo.html">Typo</a></li>
                <li className="grid"><Link to="/contact">Contact</Link></li>
              </ul>
              <div className="clearfix"> </div>
            </div>
            {/**/}
            <div className="cart box_1">
              <Link to="/checkaout/:id">
                <h3> <div className="total">
                  <span className="simpleCart_total">$0.00</span> (<span id="simpleCart_quantity" className="simpleCart_quantity">0</span>)</div>
                  <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /></h3>
              </Link>
              <p><a className="simpleCart_empty">Empty Cart</a></p>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
            {/**/}
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

    </div>
  )
}

Header.propTypes = {

}

export default Header
