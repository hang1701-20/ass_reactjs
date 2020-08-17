import React, { useEffect, useState } from 'react'
import apiRequest from '../../../../api/productApi'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { redux_details_Product } from '../../../../actions'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

const DetailRroductMain = ({ products, fetchDetailProduct }) => {
  const [product, setProducts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.get(id);
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);

  console.log();
  return (
    <div>
      <div className="single-sec">
        <div className="container">
          <ol className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li className="active">Products</li>
          </ol>
          {/* start content */}
          <div className="col-md-9 det">
            <div className="single_left">
              <div className="flexslider">
                <div className="flex-viewport"><ul className="slides" style={{ transitionDuration: '0s' }}><li className="clone" aria-hidden="true" style={{ width: 309, float: 'left', display: 'block' }}>
                  <img src={product.image} style={{ width: '300px' }} draggable="true" />
                </li>
                </ul></div><ol className="flex-control-nav flex-control-thumbs">
                </ol></div>
              {/* FlexSlider */}
              <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />
            </div>
            <div className="single-right">
              <h3>{product.name}</h3>
              <div className="id"><h4>{product.status}</h4></div>
              <form action className="sky-form">
                <fieldset>
                  <section>
                    <div className="rating">
                      <input type="radio" name="stars-rating" id="stars-rating-5" />
                      <label htmlFor="stars-rating-5"><i className="icon-star" /></label>
                      <input type="radio" name="stars-rating" id="stars-rating-4" />
                      <label htmlFor="stars-rating-4"><i className="icon-star" /></label>
                      <input type="radio" name="stars-rating" id="stars-rating-3" />
                      <label htmlFor="stars-rating-3"><i className="icon-star" /></label>
                      <input type="radio" name="stars-rating" id="stars-rating-2" />
                      <label htmlFor="stars-rating-2"><i className="icon-star" /></label>
                      <input type="radio" name="stars-rating" id="stars-rating-1" />
                      <label htmlFor="stars-rating-1"><i className="icon-star" /></label>
                      <div className="clearfix" />
                    </div>
                  </section>
                </fieldset>
              </form>
              <div className="cost">
                <div className="prdt-cost">
                  <ul>
                    <li>MRP: <del>{product.price}</del></li>
                    <li>Sellling Price:</li>
                    <li className="active">Rs {product.salePrice}</li>
                    <Link to={`/cart/${id}`}>BUY NOW</Link>
                  </ul>
                </div>
                <div className="check">
                  <p><span className="glyphicon glyphicon-map-marker" aria-hidden="true" />Enter pin code for delivery &amp; availability</p>
                  <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Enter Pin code" />
                    </div>
                    <button type="submit" className="btn btn-default">Verify</button>
                  </form>
                </div>
                <div className="clearfix" />
              </div>
              <div className="item-list">
                <ul>
                  <li>Material: Silver,Gold</li>
                  <li>Color: Red</li>
                  <li>Type: Earring &amp; Pendant Set</li>
                  <li>Brand: American Diamond</li>
                  <li><a href="#">Click here for more details</a></li>
                </ul>
              </div>
              <div className="single-bottom1">
                <h6>Details</h6>
                <p className="prod-desc">{ReactHtmlParser(product.title)}</p>
              </div>
            </div>
            <div className="clearfix" />
            <div className="sofaset-info">
              <h4>{products.name}</h4>
              <ul>
                <li>Classic and vibrant detailing</li>
                <li>Design: Exquisitely crafted necklace set to suit your festive mood</li>
                <li>Stones Used: Synthetic stones and beads</li>
                <li>Colour: Brown Jute, Sheron Brown</li>
                <li>Recommended Wear: Festive</li>
                <li>Note: The image has been enlarged for better viewing</li>
                <li>Contents: 4 Pc</li>
                <li>Delivery Time: 7 to 10 days from the Day of Dispatch</li>
              </ul>
            </div>
            {/**/}
            <div className="product-table">
              <h3>Specifications of American Diamond Famina Ruby Copper, Brass Jewel Set</h3>
              <div className="item-sec">
                <h4>Features</h4>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td><p>Pearl Type</p></td>
                      <td><p>Plastic</p></td>
                    </tr>
                    <tr>
                      <td><p>Color</p></td>
                      <td><p>Gold</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="item-sec">
                <h4>General</h4>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td><p>Base Material</p></td>
                      <td><p>Alloy</p></td>
                    </tr>
                    <tr>
                      <td><p>Brand</p></td>
                      <td><p>Ethnic Jewels</p></td>
                    </tr>
                    <tr>
                      <td><p>Precious/Artificial Jewellery</p></td>
                      <td><p>Fashion Jewellery</p></td>
                    </tr>
                    <tr>
                      <td><p>Model Number</p></td>
                      <td><p>ID 4523</p></td>
                    </tr>
                    <tr>
                      <td><p>Occasion</p></td>
                      <td><p>Wedding &amp; Engagement</p></td>
                    </tr>
                    <tr>
                      <td><p>Type</p></td>
                      <td><p>Earring &amp; Necklace Set</p></td>
                    </tr>
                    <tr>
                      <td><p>Ideal For</p></td>
                      <td><p>Women</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="arrivals">
              <h3>Related Products</h3>
              <div className="arrival-grids">
                <div className="nbs-flexisel-container"><div className="nbs-flexisel-inner"><ul id="flexiselDemo1" className="nbs-flexisel-ul" style={{ left: '-199.5px', display: 'block' }}>
                  <li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p3.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 14000</p>
                        <span className="pric1"><del>Rs 15000</del></span>
                        <span className="disc">[10% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p4.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 4000</p>
                        <span className="pric1"><del>Rs 8500</del></span>
                        <span className="disc">[45% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"> <img src="images/p5.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 18000</p>
                        <span className="pric1"><del>Rs 21000</del></span>
                        <span className="disc">[8% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p2.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 12000</p>
                        <span className="pric1"><del>Rs 18000</del></span>
                        <span className="disc">[12% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p3.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 14000</p>
                        <span className="pric1"><del>Rs 15000</del></span>
                        <span className="disc">[10% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p4.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 4000</p>
                        <span className="pric1"><del>Rs 8500</del></span>
                        <span className="disc">[45% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"> <img src="images/p5.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 18000</p>
                        <span className="pric1"><del>Rs 21000</del></span>
                        <span className="disc">[8% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li><li className="nbs-flexisel-item" style={{ width: '199.5px' }}>
                    <a href="product.html"><img src="images/p2.jpg" alt />
                      <div className="arrival-info">
                        <h4>Jewellerys #1</h4>
                        <p>Rs 12000</p>
                        <span className="pric1"><del>Rs 18000</del></span>
                        <span className="disc">[12% Off]</span>
                      </div>
                    </a><div className="viw"><a href="product.html">
                    </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                    </div>
                  </li></ul><div className="nbs-flexisel-nav-left" style={{ top: 123 }} /><div className="nbs-flexisel-nav-right" style={{ top: 123 }} /></div></div>
              </div>
            </div>
            {/**/}
          </div>
          <div className="rsidebar span_1_of_left">
            <section className="sky-form">
              <div className="product_right">
                <h4 className="m_2"><span className="glyphicon glyphicon-minus" aria-hidden="true" />Categories</h4>
                <div className="tab1">
                  <ul className="place">
                    <li className="sort">Fashion</li>
                    <li className="by"><img src="images/do.png" alt /></li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="single-bottom" style={{ display: 'none' }}>
                    <a href="#"><p>Gifts</p></a>
                    <a href="#"><p>Flowers</p></a>
                    <a href="#"><p>Shoes</p></a>
                    <a href="#"><p>Suits</p></a>
                    <a href="#"><p>Dresses</p></a>
                  </div>
                </div>
                <div className="tab2">
                  <ul className="place">
                    <li className="sort">Women Ethnic Wear</li>
                    <li className="by"><img src="images/do.png" alt /></li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="single-bottom" style={{ display: 'none' }}>
                    <a href="#"><p>Sarees &amp; More</p></a>
                    <a href="#"><p>Salwar Suits</p></a>
                  </div>
                </div>
                <div className="tab3">
                  <ul className="place">
                    <li className="sort">Personal Care</li>
                    <li className="by"><img src="images/do.png" alt /></li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="single-bottom" style={{ display: 'none' }}>
                    <a href="#"><p>Make Up</p></a>
                  </div>
                </div>
                <div className="tab4">
                  <ul className="place">
                    <li className="sort">Jewellery</li>
                    <li className="by"><img src="images/do.png" alt /></li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="single-bottom" style={{ display: 'none' }}>
                    <a href="#"><p>Fashion</p></a>
                    <a href="#"><p>Precious</p></a>
                    <a href="#"><p>1 Gram Gold</p></a>
                  </div>
                </div>
                <div className="tab5">
                  <ul className="place">
                    <li className="sort">Specials</li>
                    <li className="by"><img src="images/do.png" alt /></li>
                    <div className="clearfix"> </div>
                  </ul>
                  <div className="single-bottom" style={{ display: 'none' }}>
                    <a href="#"><p>Cakes</p></a>
                    <a href="#"><p>Party Items</p></a>
                    <a href="#"><p /></a>
                    <a href="#"><p>Relax Chairs</p></a>
                  </div>
                </div>
                {/*script*/}
                {/* script */}
              </div></section>
            <section className="sky-form">
              <h4><span className="glyphicon glyphicon-minus" aria-hidden="true" />DISCOUNTS</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Upto - 10% (20)</label>
                </div>
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />40% - 50% (5)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />30% - 20% (7)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />10% - 5% (2)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Other(50)</label>
                </div>
              </div>
            </section>
            <section className="sky-form">
              <h4><span className="glyphicon glyphicon-minus" aria-hidden="true" />Price</h4>
              <ul className="dropdown-menu1">
                <li><a href>
                </a><div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a href><div className="ui-slider-range ui-widget-header" style={{ left: '2.125%', width: '85.375%' }} /></a><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: '2.125%' }} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: '87.5%' }} /></div>
                  <input type="text" id="amount" style={{ border: 0, fontWeight: 'NORMAL', fontFamily: '"Arimo", sans-serif' }} />
                </li>
              </ul>
            </section>
            {/**/}
            <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
            {/**/}
            <section className="sky-form">
              <h4><span className="glyphicon glyphicon-minus" aria-hidden="true" />Type</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />1 Gram Gold (30)</label>
                </div>
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Gold Plated   (30)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Platinum      (30)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Silver        (30)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Jewellery Sets  (30)</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Stone Items   (30)</label>
                </div>
              </div>
            </section>
            <section className="sky-form">
              <h4><span className="glyphicon glyphicon-minus" aria-hidden="true" />Brand</h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Akasana Collectio</label>
                </div>
                <div className="col col-4">
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Colori</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Crafts Hub</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Jisha</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Karatcart</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Titan</label>
                  <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Amuktaa</label>
                </div>
              </div>
            </section>
          </div>
          <div className="clearfix" />
        </div>
      </div>

    </div>
  )
}

DetailRroductMain.propTypes = {

}

const mapStateToProps = (state) => {
  const { data } = state
  return { products: data }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailProduct: text => dispatch(redux_details_Product(text)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailRroductMain)

