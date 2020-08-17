import React, { useEffect, useState } from 'react'
import api1 from './../../../../api/postApi';
import { Link } from 'react-router-dom';
import api from './../../../../api/categoryPostApi'
import Swal from 'sweetalert2'

const Post = ({ posts, fetchAllPost }) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api1.getAll();
                setPost(data);
            } catch (error) {
            }
        }
        getPost()
    }, []);
    console.log(post);

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
    console.log(categorypost);
    const removeHandle = async (id) => {
        try {
            const dataFilter = post.filter(el => el.id !== id)
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
                    setPost(dataFilter);
                    api1.remove(id)
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
                        <Link to="/admin/addpost" className="btn btn-success">Thêm mới</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Danh muc</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">title</th>
                                    <th scope="col">Ngày đằng</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map((el, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {categorypost && categorypost.map(cate => Number(cate.id) == el.postCategoryId ? cate.name : console.log(cate.id))}
                                        </td>
                                        <td>{el.name}</td>
                                        <td><img src={el.image} alt="" width="70" /></td>
                                        <td>{el.title}</td>
                                        <td>{el.date}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(el.id)}>Xóa</button>
                                            <Link className="btn btn-info" to={`/admin/editpost/${el.id}`}>Sửa</Link>
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

export default Post
