import React from 'react';
import "../styles/footer.scss"
import store from "../assets/Footer/Store.svg"
import logo from "../assets/Footer/Logo_Ananas_Footer.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={store} alt="str" />
                <h3>TÌM CỬA HÀNG</h3>
            </div>
            <div className="footer__product">
                <h2>SẢN PHẨM</h2>
                <a>Giày Nam</a>
                <a>Giày Nữ</a>
                <a>Thời trang & Phụ kiện</a>
                <a>Sale-off</a>
            </div>
            <div className="footer__product">
                <h2>VỀ CÔNG TY</h2>
                <a>Dứa tuyển dụng</a>
                <a>Liên hệ nhượng quyền</a>
                <a>Về Ananas</a>
            </div>
            <div className="footer__product">
                <h2>HỖ TRỢ</h2>
                <a>FAQs</a>
                <a>Bảo mật thông tin</a>
                <a>Chính sách chung</a>
                <a>Tra cứu đơn hàng</a>
            </div>
            <div className="footer__product">
                <h2>LIÊN HỆ</h2>
                <a>Email góp ý</a>
                <a>Hotline</a>
                <a>0963 429 749</a>
            </div>

            <img className="logo__img" src={logo} atl="logo"/>
        </footer>
    );
};

export default Footer;