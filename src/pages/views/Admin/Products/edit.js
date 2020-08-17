import React, { useEffect, useState } from 'react';
import apiRequest from '../../../../api/productApi.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redux_details_Product } from '../../../../actions';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'
import api1 from '../../../../api/categoryApi'
import Swal from 'sweetalert2'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditProduct = (props) => {
    const d = new Date();
    const [title, setTitle] = useState();
    const { register, handleSubmit, watch, errors } = useForm();
    const [product, setProducts] = useState({});
    const { id } = useParams();
    const history = useHistory();
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

    const onHandleSubmit = async (data) => {
        const result = await axios.put(`http://localhost:8000/products/${id}`, data);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        history.push('/admin/products')
        // const product = await axios.push(`http://localhost:8000/product`);
        // console.log(products);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Sửa sản phẩm</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" >
                    <label>Ten</label>
                    <input type="text" className="form-control" name='name' ref={register({ required: true, minLength: 4, pattern: /^\S{1}.{0,24}$/i })} defaultValue={product.name} />
                    {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                    {errors.name && errors.name.type === "pattern" && <span>Khong duoc cach</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Nhập trên 4 ký tự</span>}
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="categoryId" ref={register} id="">
                        <option></option>
                        {category && category.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">gia</label>
                    <input type="text" className="form-control" name='price' ref={register({ required: true })} defaultValue={product.price} />
                    {errors.price && <span className="text-danger">Bắt buộc nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">sale price</label>
                    <input type="text" className="form-control" name='salePrice' ref={register({ required: true })} defaultValue={product.salePrice} />
                    {errors.salePrice && <span className="text-danger">Bắt buộc nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">title</label>
                    {/* <input type="text" className="form-control" name='title' ref={register({ required: true })} defaultValue={product.title} /> */}
                    <CKEditor
                                editor={ClassicEditor}
                                data={product.title}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setTitle(data);
                                }}
                            />
                            <span className="text-danger">
                                    {errors.title && "Sai title"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
                                })}
                                name='title'
                                value={title}
                                type="text" hidden/>
                    {errors.title && <span className="text-danger">Bắt buộc nhập title</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">status</label>
                    <select class="form-control" name="status" ref={register({ required: true })} defaultValue={product.status} id="">
                        <option></option>
                        <option>Còn hàng</option>
                        <option>Hết hàng</option>
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">anh</label>
                    <input type="text" className="form-control" name='image' defaultValue={product.image} ref={register({ required: true })} />
                    {errors.image && <span className="text-danger">Bắt buộc nhập ảnh</span>}
                </div>
                <input type="hidden" name="date" ref={register} value={d.toISOString()} className="form-control" id="exampleInputEmail1" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)