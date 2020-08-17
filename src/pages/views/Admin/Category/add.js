import React, { useState, useEffect } from 'react';
import apiRequest from '../../../../api/categoryApi.js';
import api1 from '../../../../api/categoryApi'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import Swal from 'sweetalert2'

const AddCategory = ({ categorys }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const [category, setCategory] = useState([])
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
    console.log(category)

    const onHandleSubmit = async (data) => {
        console.log(data);
        apiRequest.create(data);
        history.push('/admin/categorys')
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">thêm mới danh mục</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Ten</label>
                    <input type="text"
                        ref=
                        {register({
                            required: true,
                            minLength: 4,
                            pattern: /^\S{1}.{0,24}$/i  
                        })}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={category.name} />
                    {errors.name && errors.name.type === "required" && <span className="text-danger">Phải nhập tên</span>}
                    {errors.name && errors.name.type === "minLength" && <span className="text-danger">Lon hon 4 ky tu</span>}
                    {errors.name && errors.name.type === "pattern" && <span className="text-danger">ko đc cách</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddCategory

