import React, { useEffect, useState } from 'react'
import apiRequest from './../../../../api/productApi.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api1 from './../../../../api/categoryApi'
import { connect } from 'react-redux'
import axios from 'axios'
import { redux_all_Product, redux_delete_Product } from '../../../../actions';
import Swal from 'sweetalert2'
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

const ProductsManager = ({ products, fetchAllProduct, loading }) => {
    const [Sotrang, setSotrang] = useState(0);
    const tongSp = products.length;
    const tinhTrang = Math.ceil(tongSp / 5);
    const mang = [];
    for (var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
    }
    useEffect(() => {
        fetchAllProduct();
    }, []);

    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);


    const removeHandle = async (id) => {
        try {
            const data = await apiRequest.remove(id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    fetchAllProduct();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        } catch (error) {
            console.log("failed to request API: ", error);
        }
    }

    if (loading) {
        return <h2>Loading...</h2>;
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
                                    <th scope="col">Danh muc</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Ngày đằng</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Tiêu đề</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((el, index) => (
                                    index < (((Sotrang + 1) * 5)) && index > ((Sotrang * 5) - 1) && <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {category && category.map(cate => cate.id == el.categoryId ? cate.name : console.log(cate.id))}
                                        </td>
                                        <td>{el.name}</td>
                                        <td><img src={el.image} alt="" width="70" /></td>
                                        <td>{el.price}</td>
                                        <td>{el.date}</td>
                                        <td>{el.status}</td>
                                        <td>{ReactHtmlParser(el.title)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(el.id)}>Xóa</button>
                                            <Link className="btn btn-info" to={`/admin/EditProduct/${el.id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        {Sotrang > 0 && <li class="page-item" onClick={() => setSotrang(Sotrang - 1)}><a class="page-link" href="#">Previous</a></li>
                                        }
                                        {mang && mang.map((sotrang) =>
                                            <li class="page-item" onClick={() => setSotrang(sotrang - 1)}><a class="page-link" href="#"> {sotrang}</a></li>
                                        )}
                                        {Sotrang < (mang.length - 1) &&
                                            <li class="page-item" onClick={() => setSotrang(Sotrang + 1)}><a class="page-link" href="#">Next</a></li>}
                                    </ul>
                                </nav>

                            </tfoot>
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
        DELETE_ITEM: (products) => dispatch(redux_delete_Product(products)),
        fetchAllProduct: text => dispatch(redux_all_Product()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsManager)
