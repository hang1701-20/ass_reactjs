import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutMain from '../pages/layouts/LayoutMain';
import AllCategory from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/Category/add';
import EditCategory from '../pages/views/Admin/Category/edit';
//Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import ProductsManager from '../pages/views/Admin/Products';
import AddProduct from '../pages/views/Admin/Products/add';
import DetailsProduct from '../pages/views/Admin/Products/details';
import EditProduct from '../pages/views/Admin/Products/edit.js';
import Cart from '../pages/views/Main/Cart';
import CheckAout from '../pages/views/Main/CheckAout';
import Contact from '../pages/views/Main/Contact';
import Createacc from '../pages/views/Main/Createacc';
import DetailRroductMain from '../pages/views/Main/DetailRroductMain';
import Home from '../pages/views/Main/Home';
import Login from '../pages/views/Main/Login';
import MyAccount from '../pages/views/Main/MyAccount';
import Product from '../pages/views/Main/Product';
import AllCategoryPost from '../pages/views/Admin/CategoryPost';
import Post from '../pages/views/Admin/Post'
import AddPost from '../pages/views/Admin/Post/add';
import EditPost from '../pages/views/Admin/Post/edit';
import Blog from '../pages/views/Main/Blog';
import DetailPost from '../pages/views/Main/DetailPost';
import Pagination from './../pages/views/Admin/Pagination'
import api from './../api/productApi'
import Search from './../components/Search'
import SearchPrice from '../pages/views/Main/SearchPrice';
import SearchName from '../pages/views/Main/SearchName';
import Contacts from '../pages/views/Admin/Contact';



const Routers = ({ product,categorys }) => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                const { data } = await api.getAll();
                setProducts(data);
                setLoading(false);
            } catch (error) {
            }
        }
        getProduct()
    }, []);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       setLoading(true);
    //       const res = await api.get();
    //       setProducts(res.data);
    //       setLoading(false);
    //     };
    
    //     fetchPosts();
    //   }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={currentPosts, product} loading={loading}/>
                                
                            </Route>
                            <Route path='/admin/AddProduct'>
                                <AddProduct />
                            </Route>
                            <Route path='/admin/EditProduct/:id'>
                                <EditProduct />
                            </Route>
                            <Route path='/admin/DetailsProduct/:id'>
                                <DetailsProduct />
                            </Route>
                            <Route path='/admin/categorys'>
                                <AllCategory categorys={categorys} />
                            </Route>
                            <Route path='/admin/addcategorys'>
                                <AddCategory categorys={categorys} />
                            </Route>
                            <Route path='/admin/editcategorys/:id'>
                                <EditCategory categorys={categorys} />
                            </Route>
                            <Route path='/admin/categorypost'>
                                <AllCategoryPost />
                            </Route>
                            <Route path='/admin/post'>
                                <Post />
                            </Route>
                            <Route path='/admin/addpost'>
                                <AddPost />
                            </Route>
                            <Route path='/admin/editpost/:id'>
                                <EditPost />
                            </Route>
                            <Route path='/admin/contact'>
                                <Contacts />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/product">
                                <Product />
                            </Route>
                            <Route path="/detailproductmain/:id">
                                <DetailRroductMain />
                            </Route>
                            <Route path="/cart/:id">
                                <Cart />
                            </Route>
                            <Route path="/checkaout/:id">
                                <CheckAout />
                            </Route>
                            <Route path="/MyAccount">
                                <MyAccount />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/createacc">
                                <Createacc />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/detailpost/:id">
                                <DetailPost />
                            </Route>
                            <Route path="/search/:key">
                                <Search />
                            </Route>
                            <Route path="/searchprice">
                                <SearchPrice />
                            </Route>
                            <Route path="/searchname">
                                <SearchName />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
