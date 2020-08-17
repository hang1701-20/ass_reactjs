import React, { useState, useEffect } from 'react';
import apiRequest from '../../../../api/productApi.js';
import api1 from '../../../../api/categoryApi'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { connect } from 'react-redux'
import { redux_add_Product } from '../../../../actions';
import axios from 'axios';
import Swal from 'sweetalert2'
import firebase from "../../../../firebase"


import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = ({ products, categorys }) => {
    const d = new Date();
    const { register, handleSubmit, watch, errors } = useForm();
    const [product, setProducts] = useState({});
    const history = useHistory();

    const [title, setTitle] = useState();
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
        console.log(data);
        let file = data.image[0]
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log("zzzzz", url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                apiRequest.create(newData);
                history.push('/admin/Products')
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            })
        });

    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">thêm mới sản phẩm</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Ten</label>
                    <input type="text" ref=
                        {register({
                            required: true,
                            minLength: 4,
                            pattern: /^\S{1}.{0,24}$/i
                        })}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={product.name} />
                    {errors.name && errors.name.type === "required" && <span className="text-danger">Phải nhập tên</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="text-danger">Nhập trên 4 ký tự</span>}
                    {errors.name && errors.name.type === "pattern" && <span className="text-danger">ko đc cách</span>}
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
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='price' ref={register({ required: true, maxLength: 20 })} value={product.price} />
                    {errors.price && <span className="text-danger">Phải nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">sale price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='salePrice' ref={register({ required: true})} value={product.salePrice} />
                    {errors.salePrice && <span className="text-danger">Phải nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <CKEditor
                                editor={ClassicEditor}
                                data=""
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
                                    minLength: 8,
                                })}
                                name='title'
                                value={title}
                                type="text" hidden/>
                    {errors.title && <span className="text-danger">tiêu đề</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">status</label>
                    <select class="form-control" name="status"  ref={register({ required: true })} value={product.status} id="">
                        <option>Còn hàng</option>
                        <option>Hết hàng</option>
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">anh</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='image' ref={register({ required: true })} value={product.image} />
                    {errors.image && <span className="text-danger">phải chọn ảnh</span>}
                </div>
                <input type="hidden" name="date" ref={register} value={d.toISOString()} className="form-control" id="exampleInputEmail1" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        redux_add_Product: (products) => dispatch(redux_add_Product(products)),
    }
}

export default connect(null, mapDispatchToProps)(AddProduct)

