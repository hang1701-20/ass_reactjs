import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from './../../../../api/categoryPostApi'
import postApi from './../../../../api/postApi'
import axios from 'axios'

const Blog = props => {
    const [post, setPost] = useState([]);
    console.log(post);
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
            const { data } = await postApi.getAll();
            setPost(data)
        } catch (error) {
        }
    }
    const getAllpostByCateId = async (id) => {
        try {
            const { data } = await api.getPostsByCateId(id)
            console.log("zzzzzzzzzzzzzz", data)
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onHandelClick = (id) => {
        console.log("aaaaaaqaaa", id)
        getAllpostByCateId(id)
    }
    return (
        <div className="container">
            <div className="container">
                <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Post</li>
                </ol>
                <h2>Our Post</h2>
                <div className="col-md-9 product-model-sec">
                    {post.map((el, index) => (
                        <div className="row mb-5">
                            <div style={{ border: '1px solid black' }}>
                                <div className="col-md-3">
                                    <img src={el.image} alt style={{ width: '80px', border: '1px solid secondary', margin: '10px' }} />
                                </div>
                                <div className="col-md-5" style={{ margin: '30px' }}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{el.name}</h3><br />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{el.title}</h5><br />
                                            <p>{el.date}</p>
                                            <Link to={`/detailpost/${el.id}`} className="btn btn-primary">chi tiết bài viết</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rsidebar span_1_of_left">
                    <section className="sky-form">
                        <div className="product_right">
                            <h4 className="m_2"><span className="glyphicon glyphicon-minus" aria-hidden="true" />danh mục bài viết</h4>
                            <div className="tab1">
                                {postCategories.map((el, index) => (
                                    <ul className="place">
                                        <li className="sort" onClick={() => onHandelClick(el.id)}>{el.name}</li>
                                        <li className="by"><img src="images/do.png" alt /></li>
                                        <div className="clearfix"> </div>
                                    </ul>
                                ))}
                            </div>
                            {/*script*/}
                            {/* script */}
                        </div></section>
                    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
                    {/**/}
                </div>
            </div>
        </div>

    )
}

Blog.propTypes = {

}

export default Blog
