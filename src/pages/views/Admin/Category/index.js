import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import api1 from './../../../../api/categoryApi'
import Swal from 'sweetalert2'

const AllCategory = props => {
    const [category, setCategory] = useState([])
    console.log(category);
    useEffect(() => {
        getCategory()
    }, []);
    
    const getCategory = async () => {
        try {
            const { data } = await api1.getAll();
            setCategory(data);
        } catch (error) {
        }
    }
    
    const removeHandle = async (id) => {
        try {
            const data = await api1.remove(id);
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
                    getCategory();
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
                        <Link to="/admin/addcategorys" className="btn btn-success">Thêm mới</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>  
                                </tr>             
                            </thead>
                            <tbody>
                                {category.map((el, index) => (
                                    <tr key={index}>
                                        <th scope="row">{el.id}</th>                                   
                                        <td>{el.name}</td>                                       
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(el.id)}>Xóa</button>
                                            <Link className="btn btn-info" to={`/admin/editcategorys/${el.id}`}>Sửa</Link>
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

export default AllCategory
