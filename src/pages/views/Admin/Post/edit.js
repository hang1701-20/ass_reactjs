import React, { useEffect, useState } from 'react'
import postApi from './../../../../api/postApi';
import { Link } from 'react-router-dom';
import api from './../../../../api/categoryPostApi'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditPost = (props) => {
    const d = new Date();
    const [content, setContent] = useState();
    const { register, handleSubmit, watch, errors } = useForm();
    const [post, setPost] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const [postCategories, setCategoryPost] = useState([])
    console.log(postCategories);
    useEffect(() => {
        getCategoryPost();
        getAllPost();
    }, []);

    const getCategoryPost = async () => {
        try {
            const { data } = await api.getAll();
            setCategoryPost(data);
        } catch (error) {
        }
    }

    const getAllPost = async () => {
        try {
            const { data } = await postApi.get(id);
            setPost(data)
        } catch (error) {
        }
    }

    const onHandleSubmit = async (data) => {
        const result = await axios.put(`http://localhost:8000/posts/${id}`, data);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        history.push('/admin/post')
        // const product = await axios.push(`http://localhost:8000/product`);
        // console.log(products);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Sửa sản phẩm</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" >
                    <label>Ten</label>
                    <input type="text" className="form-control" name='name' ref={register({ required: true, minLength: 4, pattern: /^\S{1}.{0,24}$/i })} defaultValue={post.name} />
                    {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                    {errors.name && errors.name.type === "pattern" && <span>Khong duoc cach</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Nhập trên 4 ký tự</span>}
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="postCategoryId" ref={register} id="">
                        <option></option>
                        {postCategories && postCategories.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">content</label>
                    <input type="text" className="form-control" name='content' ref={register({ required: true, maxLength: 20 })} defaultValue={post.content} />
                    {errors.price && <span className="text-danger">Bắt buộc nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">content</label>
                    <CKEditor
                                editor={ClassicEditor}
                                data={post.content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setContent(data);
                                }}
                            />
                            <span className="text-danger">
                                    {errors.content && "Sai content"}
                            </span>

                            <input
                                ref={register({
                                    required: true,
                                })}
                                name='content'
                                value={content}
                                type="text" hidden/>
                    {errors.price && <span className="text-danger">Bắt buộc nhập giá</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">anh</label>
                    <input type="text" className="form-control" name='image' defaultValue={post.image} ref={register({ required: true })} />
                    {errors.image && <span className="text-danger">Bắt buộc nhập ảnh</span>}
                </div>
                <input type="hidden" name="date" ref={register} value={d.toISOString()} className="form-control" id="exampleInputEmail1" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default EditPost