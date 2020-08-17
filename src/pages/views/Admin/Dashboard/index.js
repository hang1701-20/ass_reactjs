import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cate from './../../../../api/categoryApi'
import productApi from '../../../../api/productApi'
import postApi from '../../../../api/postApi'
import postCateApi from '../../../../api/categoryPostApi'
import contactapi from './../../../../api/contactApi'

const Dashboard = props => {
    const [category, setCategory] = useState([])
    console.log(category);
    useEffect(() => {
        getCategory()
        getProduct()
        getPost()
        getpostCategories()
        getcontact()
    }, []);

    const getCategory = async () => {
        try {
            const { data } = await cate.getAll();
            setCategory(data);
        } catch (error) {
        }
    }

    const [product, setProduct] = useState([])
    const getProduct = async () => {
        try {
            const { data } = await productApi.getAll();
            setProduct(data);
        } catch (error) {
        }
    }

    const [post, setPost] = useState([])
    const getPost = async () => {
        try {
            const { data } = await postApi.getAll();
            setPost(data);
        } catch (error) {
        }
    }

    const [postCategories, setPostCategories] = useState([])
    const getpostCategories = async () => {
        try {
            const { data } = await postCateApi.getAll();
            setPostCategories(data);
        } catch (error) {
        }
    }

    const [contact, setContact] = useState([])
    const getcontact = async () => {
        try {
            const { data } = await contactapi.getAll();
            setContact(data);
        } catch (error) {
        }
    }


    return (
        <div>
            <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
                </div>
                {/* Content Row */}
                <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">DANH MỤC SẢN PHẨM</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{category.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">SẢN PHẨM</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{product.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">DANH MỤC BÀI VIẾT</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{postCategories.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pending Requests Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">BÀI VIẾT</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{post.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Contact</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{contact.length}</div>
                                    </div>
                                    <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Row */}
                <div className="row">
                    {/* Area Chart */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                                    <canvas id="myAreaChart" style={{ display: 'block', width: 668, height: 320 }} width={668} height={320} className="chartjs-render-monitor" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                                    <canvas id="myPieChart" width={301} height={245} className="chartjs-render-monitor" style={{ display: 'block', width: 301, height: 245 }} />
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary" /> Direct
              </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success" /> Social
              </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info" /> Referral
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Row */}
            </div>
        </div>

    )
}

Dashboard.propTypes = {

}

export default Dashboard
