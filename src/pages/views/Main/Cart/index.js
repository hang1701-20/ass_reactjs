import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Cart = props => {
    return (
        <div className="container">
             <nav class="navbar navbar-expand-lg navbar-secondary bg-light text-dark mb-5">
                <strong>Home/</strong>
                <span>Cart</span>
            </nav>  
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giá</th>
                        <th scope="col">ảnh</th>
                        <th scope="col">số lượng</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Mark</th>
                        <td>5000</td>
                        <td><img src="https://i.pinimg.com/originals/c2/a2/b7/c2a2b72d1e852146b3d539115c85f0fe.jpg" style={{ width: '6rem' }}></img></td>
                        <td>1</td>
                        <td>5000</td>
                        <td><button className="btn btn-danger">X</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Mark</th>
                        <td>5000</td>
                        <td><img src="https://i.pinimg.com/originals/c2/a2/b7/c2a2b72d1e852146b3d539115c85f0fe.jpg" style={{ width: '6rem' }}></img></td>
                        <td>1</td>
                        <td>5000</td>
                        <td><button className="btn btn-danger">X</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>Tổng tiền: 10000</strong></td>
                        <td><Link to="/CheckAout" className="btn btn-success">Thanh toán {'>'}</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart
