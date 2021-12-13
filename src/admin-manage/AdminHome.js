import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Switch, Route } from 'react-router-dom';
import { logoutAction } from '../store/actions/index';
import "./admin-style/allOrder.scss"
import AddProduct from './AddProduct';
import AllOrder from './AllOrder';
import AllProduct from './AllProduct';
import ProductOrder from './ProductOrder';
const AdminHome = () => {

    let loginState = useSelector(state => state.loginReducer)
    let dispatch = useDispatch()
    let logoutDispatch = ()=> dispatch(logoutAction())
    let history = useHistory()

    useEffect(()=>{
        if(!loginState.logged || (loginState.code !== process.env.REACT_APP_CODE)){
            logoutDispatch()
            history.push({
                pathname : "/admin"
            })
        }
    },[])


    return (
        <div>
            <header className="header">
                <ul>
                    <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/all-order">Tất cả đơn hàng</NavLink></li>
                    <li><NavLink activeClassName="active" to="/all-product">Tất cả sản phẩm</NavLink></li>
                    <li><NavLink activeClassName="active" to="/add-product">Thêm hàng</NavLink></li>
                </ul>
            </header>
            <Switch>
                <Route exact path="/home">
                    <p>Hello admin</p>
                    <p>Chú ý: Nếu Reload trang web sẽ phải đăng nhặp lại</p>
                </Route>
                <Route exact path="/all-order">
                    <AllOrder/>
                </Route>
                <Route exact path="/product-order/:id">
                    <ProductOrder/>
                </Route>
                <Route exact path="/all-product">
                    <AllProduct/>
                </Route>
                <Route exact path="/add-product">
                    <AddProduct/>
                </Route>
            </Switch>
        </div>
    );
};

export default AdminHome;