import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link to="/admin" className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span> DASHBOARD</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" aria-expanded="true" aria-controls="collapseUtilities">
                    <span><Link to="/admin/products" className="text-white">SẢN PHẨM</Link></span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed"  aria-expanded="true" aria-controls="collapsePages">
                    <span><Link to="/admin/categorys" className="text-white">DANH MỤC</Link></span>
                </a>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area" />
                    <span><Link to="/admin/categorypost" className="text-white">DANH MUC BAI VIET</Link></span></a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item active">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span><Link to="/admin/post" className="text-white">BAI VIET</Link></span></a>
            </li>
            
            <li className="nav-item active">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span><Link to="/admin/contact" className="text-white">LIÊN HỆ</Link></span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
