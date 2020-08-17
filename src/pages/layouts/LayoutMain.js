import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
// import '../../assets/css/main/style.scss'
// import '../../assets/css/main/memenu.scss'
import '../../assets/css/main/jquery-ui.scss'
import Silder from '../views/Main/Silder';
export default ({ children }) => {
    console.log('render Main')
    return (
        <div className="user-page">
            <Header />
            <div className="content">
                {children}
            </div>
            <Navbar />
            <Footer />
        </div>
    )
}
