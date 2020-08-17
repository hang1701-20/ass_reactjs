import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api1 from './../../api/categoryApi'
import productApi from "../../api/productApi"
import { connect } from 'react-redux'
import { redux_all_Category } from '../../actions'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Search = ({ categorys, fetchAllCategory }) => {
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState()
  const { key } = useParams();

  useEffect(() => {
    getAllProDucts()
    getCategory()
  }, []);

  const getCategory = async () => {
    try {
      const { data } = await api1.getAll();
      setCategory(data);
    } catch (error) {
    }
  }

  const getAllProDucts = async () => {
    try {
      const { data } = await productApi.getAll()
      setProducts(data)
    } catch (error) {
    }
  }

  const getAllProductsByCateId = async (key) => {
    try {
      const { data } = await api1.getProductsByCateId(key)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  const onHandelClick = (key) => {
    getAllProductsByCateId(key)
  }
    const [KeyWord, setKeyWord] = useState(key)
    const [ProductSearch, setProductSearch] = useState()
    products&&!ProductSearch&&setProductSearch(products.filter((product)=>product.name.toUpperCase().indexOf(key.toUpperCase())>-1))

    if(KeyWord!==key){
        setKeyWord(key)
        setProductSearch(products.filter((product)=>product.name.toUpperCase().indexOf(key.toUpperCase())>-1))
    }
  return (
    <div>
      <div className="product-model">
        <div className="container">
          <ol className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li className="active">Products</li>
          </ol>
          <h2>Our Products</h2>
          <div className="col-md-9 product-model-sec">
            {
              ProductSearch&&ProductSearch.map((p, index) => (
                <div className="product-grid love-grid">
                  <a href="single.html">
                    <div className="more-product"><span> </span></div>
                    <div className="product-img b-link-stripe b-animate-go  thickbox">
                      <img src={p.image} className="img-fluid" alt width="150" height="250" />
                      <div className="b-wrapper">
                        <h4 className="b-animate b-from-left  b-delay03">
                          <button className="btns"><span className="glyphicon glyphicon-zoom-in" aria-hidden="true" />Quick View</button>
                        </h4>
                      </div>
                    </div></a>
                  <div className="product-info simpleCart_shelfItem">
                    <div className="product-info-cust prt_name">
                      <h4>{p.name}</h4>
                      <p>ID: {p.key}</p>
                      <span className="item_price">${p.price}</span>
                      <h5><Link to={`/detailproductmain/${p.key}`}>Chi tiết</Link></h5>
                      <input type="text" className="item_quantity" defaultValue={1} />
                      <Link to={`/checkaout/${p.key}`} className="btn btn-info">cart</Link>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="rsidebar span_1_of_left">
            <section className="sky-form">
              <div className="product_right">
                <h4 className="m_2"><span className="glyphicon glyphicon-minus" aria-hidden="true" />Categories</h4>
                <div className="tab1">
                  {category.map((el, index) => (
                    <ul className="place">
                      <li className="sort" onClick={() => onHandelClick(el.key)}>{el.name}</li>
                      <li className="by"><img src="images/do.png" alt /></li>
                      <div className="clearfix" > </div>
                    </ul>
                  ))}
                  <div className="single-bottom" style={{ display: 'none' }}>
                  </div>
                </div>

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
        </div>
      </div>

    </div>
  )
}

Search.propTypes = {

}

const mapStateToProps = (state) => {
  const { data } = state
  return { categorys: data }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategory: text => dispatch(redux_all_Category()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
