import React from 'react';
import "../styles/footer.scss"
import store from "../assets/Footer/Store.svg"
import logo from "../assets/Footer/Logo_Ananas_Footer.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={store} alt="" />
                <h3>TÌM CỬA HÀNG</h3>
            </div>
            <div className="footer__product">
                <h2>SẢN PHẨM</h2>
                <Link to="/product-list?color=&costRange=&form=&gender=men&line=&size=&status=">Giày Nam</Link>
                <Link to="/product-list?color=&costRange=&form=&gender=woman&line=&size=&status=">Giày Nữ</Link>
                <p>Thời trang & Phụ kiện</p>
                <p>Sale-off</p>
            </div>
            <div className="footer__product">
                <h2>VỀ CÔNG TY</h2>
                <p>Dứa tuyển dụng</p>
                <p>Liên hệ nhượng quyền</p>
                <p>Về Ananas</p>
            </div>
            <div className="footer__product">
                <h2>HỖ TRỢ</h2>
                <p>FAQs</p>
                <p>Bảo mật thông tin</p>
                <p>Chính sách chung</p>
                <p>Tra cứu đơn hàng</p>
            </div>
            <div className="footer__product">
                <h2>LIÊN HỆ</h2>
                <p>Email góp ý</p>
                <p>Hotline</p>
                <p>0963 429 749</p>
            </div>

            <img className="logo__img" src={logo} alt=""/>
        </footer>
    );
};

export default Footer;