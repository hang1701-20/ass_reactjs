import React, { useState, useEffect } from 'react';
import apiRequest from '../../../../api/postApi';
import api from '../../../../api/categoryPostApi'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import firebase from "../../../../firebase"

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddPost = props => {
    const d = new Date();
    const { register, handleSubmit, watch, errors } = useForm();
    const [post, setPost] = useState({});
    const history = useHistory();
    const [content, setContent] = useState();

    const [categorypost, setCategoryPost] = useState([]);
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api.getAll();
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategoryPost()
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
                history.push('/admin/post')
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
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={post.name} />
                    {errors.name && errors.name.type === "required" && <span className="text-danger">Phải nhập tên</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="text-danger">Nhập trên 4 ký tự</span>}
                    {errors.name && errors.name.type === "pattern" && <span className="text-danger">ko đc cách</span>}
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="postCategoryId" ref={register} id="">
                        <option></option>
                        {categorypost && categorypost.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">title</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name='content' name='content' ref={register({ required: true})} value={post.content} />
                    {errors.content && <span className="text-danger">Phải tieu de</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Content</label>
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name='content' ref={register({ required: true })} value={post.content} /> */}
                    <CKEditor
                                editor={ClassicEditor}
                                data=""
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
                                    minLength: 8,
                                })}
                                name='content'
                                value={content}
                                type="text" hidden/>
                    {errors.content && <span className="text-danger">Phải tieu de</span>}
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">anh</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='image' ref={register({ required: true })} value={post.image} />
                    {errors.image && <span className="text-danger">phải chọn ảnh</span>}
                </div>
                <input type="hidden" name="date" ref={register} value={d.toISOString()} className="form-control" id="exampleInputEmail1" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddPost

