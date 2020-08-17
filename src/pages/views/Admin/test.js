import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { redux_all_Product, redux_add_Product } from '../../../../actions';

const ProductsManager = ({ products, onRemove, fetchAllProduct }) => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        fetchAllProduct();
    }, [])
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <Link to="/admin/AddProduct" className="btn btn-success">Thêm mới</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link className="btn btn-warning" to={`/admin/DetailsProduct/${id}`}>Chi tiết</Link>
                                            <Link className="btn btn-info" to="/admin/EditProduct">Sửa</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { data } = state
    return { products: data }
}
const mapDispatchToProps = (dispatch) => {
    return {
        redux_add_Product: (products)=>dispatch(redux_add_Product(products)),
        fetchAllProduct: text => dispatch(redux_all_Product(text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsManager)
