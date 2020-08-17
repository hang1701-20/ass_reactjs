import React, { useEffect, useState } from 'react';
import apiRequest from '../../../../api/productApi.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redux_details_Product } from '../../../../actions';
import { useParams } from 'react-router-dom';

const DetailsProduct = ({ products, fetchDetailProduct }) => {
    const [product, setProducts] = useState({});
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

    const { id } = useParams();
    console.log(product);
    return (
        <div>
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn btn-primary">{product.price}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailsProduct.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProduct)
