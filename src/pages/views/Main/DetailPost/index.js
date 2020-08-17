import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from './../../../../api/categoryPostApi'
import postApi from './../../../../api/postApi'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

const DetailPost = props => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
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
    const getAllpostByCateId = async (id) => {
        try {
            const { data } = await api.getPostsByCateId(id);
            console.log(data);
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onHandelClick = (id) => {
        getAllpostByCateId(id)
    }
    return (
        <div>
            <div className="container">
                <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Products</li>
                </ol>
                <h2>Our Products</h2>
                <div className="col-md-9 product-model-sec">
                    <div className="row mb-5">
                        <div>
                            <div className="col-md-3">
                                <img src={post.image} alt style={{ width: '120px', margin: '10px' }} />
                            </div>
                            <div className="col-md-6" style={{ margin: '30px' }}>
                                <div className="card">
                                    <div className="card-header">
                                        <h3>{post.name}</h3><br />
                                        <p>{post.date}</p>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5><br />
                                        <p>{ReactHtmlParser(post.content)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

DetailPost.propTypes = {

}

export default DetailPost
