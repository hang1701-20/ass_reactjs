import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { redux_details_Category } from '../../../../actions';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'
import api1 from '../../../../api/categoryApi'
import Swal from 'sweetalert2'

const EditCategory = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { id } = useParams();
    const history =  useHistory();
    console.log(id);
    const [category, setCategory] = useState([])
    console.log(category);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.get(id);
                setCategory(data);
                console.log(id);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    const onHandleSubmit = async (data) => {
        const result = await axios.put(`http://localhost:8000/categorys/${id}`, data);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          history.push('/admin/categorys')
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Sửa sản phẩm</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group" >
                    <label>Ten</label>
                    <input type="text" className="form-control" name='name' ref={register({ required: true, minLength: 4, pattern: /^\S{1}.{0,24}$/i   })} defaultValue={category.name} />
                    {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Nhập trên 4 ký tự</span>}
                    {errors.name && errors.name.type === "pattern" && <span>Khong duoc cach</span>}
                </div>

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
        fetchDetailProduct: text => dispatch(redux_details_Category(text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)