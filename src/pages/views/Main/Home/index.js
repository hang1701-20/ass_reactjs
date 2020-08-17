import React, { useEffect, useState } from 'react'
import apiRequest from './../../../../api/productApi.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api1 from './../../../../api/categoryApi'
import { connect } from 'react-redux'
import axios from 'axios'
import { redux_all_Product, redux_delete_Product } from '../../../../actions';
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = ({ products, fetchAllProduct }) => {
  const [product, setProducts] = useState([]);
  console.log(product);
  const { id } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/products?_sort=price&_order=asc&_limit=4`);
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  return (

    <div>
      <div class="banner">
        <div class="container">
        </div>
      </div>
      <div className="featured">
        <div className="container">
          <h3>Sản phẩm mới nhất</h3>
          <div className="feature-grids">
            {product.map((el, index) => (
              <div key="index" className="col-md-3 feature-grid jewel">
                <Link to="/detailproductmain"><img src={el.image} alt />
                  <div className="arrival-info">
                    <h4>{el.name}</h4>
                    <p>Rs {el.price}</p>
                    <h5><Link to={`/detailproductmain/${el.id}`}>Chi tiết</Link></h5>
                    <span className="disc">[12% Off]</span>
                  </div>
                </Link>
                <div className="viw"><a href="product.html">
                </a><a href="product.html"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="product.html"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </div>
            ))}
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className="arrivals">
        <div className="container">
          <h3>New Arrivals</h3>
          <div className="arrival-grids">
            <div className="nbs-flexisel-container"><div className="nbs-flexisel-inner"><ul id="flexiselDemo1" className="nbs-flexisel-ul" style={{ left: '-406.98px', display: 'block' }}>
              <li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a1.jpg" alt />
                  <div className="arrival-info">
                    <h4>Fusion Black Polyester Suits</h4>
                    <p>Rs 12000</p>
                    <span className="pric1"><del>Rs 18000</del></span>
                    <span className="disc">[12% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a2.jpg" alt />
                  <div className="arrival-info">
                    <h4>Vogue4All White Net Gowns</h4>
                    <p>Rs 14000</p>
                    <span className="pric1"><del>Rs 15000</del></span>
                    <span className="disc">[10% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a3.jpg" alt />
                  <div className="arrival-info">
                    <h4>Platinum Waist Coat Set Navy</h4>
                    <p>Rs 4000</p>
                    <span className="pric1"><del>Rs 8500</del></span>
                    <span className="disc">[45% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"> <img src="images/a4.jpg" alt />
                  <div className="arrival-info">
                    <h4>La Fanatise White Net Gowns</h4>
                    <p>Rs 18000</p>
                    <span className="pric1"><del>Rs 21000</del></span>
                    <span className="disc">[8% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a1.jpg" alt />
                  <div className="arrival-info">
                    <h4>Fusion Black Polyester Suits</h4>
                    <p>Rs 12000</p>
                    <span className="pric1"><del>Rs 18000</del></span>
                    <span className="disc">[12% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a2.jpg" alt />
                  <div className="arrival-info">
                    <h4>Vogue4All White Net Gowns</h4>
                    <p>Rs 14000</p>
                    <span className="pric1"><del>Rs 15000</del></span>
                    <span className="disc">[10% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"><img src="images/a3.jpg" alt />
                  <div className="arrival-info">
                    <h4>Platinum Waist Coat Set Navy</h4>
                    <p>Rs 4000</p>
                    <span className="pric1"><del>Rs 8500</del></span>
                    <span className="disc">[45% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li><li className="nbs-flexisel-item" style={{ width: 285 }}>
                <a href="product.html"> <img src="images/a4.jpg" alt />
                  <div className="arrival-info">
                    <h4>La Fanatise White Net Gowns</h4>
                    <p>Rs 18000</p>
                    <span className="pric1"><del>Rs 21000</del></span>
                    <span className="disc">[8% Off]</span>
                  </div>
                </a><div className="viw"><a href="product.html">
                </a><a href="#"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" />Quick View</a>
                </div>
                <div className="shrt">
                  <a href="#"><span className="glyphicon glyphicon-star" aria-hidden="true" />Shortlist</a>
                </div>
              </li></ul><div className="nbs-flexisel-nav-left" style={{ top: 168 }} /><div className="nbs-flexisel-nav-right" style={{ top: 168 }} /></div></div>
          </div>
        </div>
      </div>



    </div>
  )
}

Home.propTypes = {

}

const mapStateToProps = (state) => {
  const { data } = state
  return { products: data }
}
const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_ITEM: (products) => dispatch(redux_delete_Product(products)),
    fetchAllProduct: text => dispatch(redux_all_Product()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
