import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import mainPic1 from "../../assets/Hi-im-Mule_1920x1050-Desktop.jpg"
import mainPic2 from "../../assets/Track-6_Suede_Moonphase_1920x1050.jpg"
import mainPic3 from "../../assets/Vintas-Temperate_desktop.jpg"

import Bigpreview1 from '../../assets/BigPreview/banner-phụ_2m-600x320.jpg';
import Bigpreview2 from '../../assets/BigPreview/Banner_Sale-off-1.jpg';
import "../../styles/BigPreview.scss"
import "../../styles/home.scss"
import Bigpreview from './Bigpreview';
import buyList1 from "../../assets/buyList/catalogy-1.jpg"
import buyList2 from "../../assets/buyList/catalogy-2.jpg"
import buyList3 from "../../assets/buyList/catalogy-3.jpg"
import Product from '../Product';
import mainPic from "../../assets/Banner_Clothing.jpg"
import { Link } from 'react-router-dom';

const Home = () => {

    let slider1 = [
        <a href="#" className="slide-content" href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href="#" className="slide-content" href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href="#" className="slide-content" href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href="#" className="slide-content" href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]
    let slide2 = [
        <img src={mainPic1} alt="main" />,
        <img src={mainPic2} alt="main" />,
        <img src={mainPic3} alt="main" />
    ]

    let slide3=[
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
        <Product src={buyList1} title="Hat" color="pink" cost="275.000"/>,
    ]

    useEffect(()=>{
        document.title = "Ananas Clone"
    },[])

    return (
        <div style={{ width: "100%" }}>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <Carousel dots={false} content={slide2} slidesToShow={1} slidesToScroll={1} />
            <div className="home-big-preview">
                <Bigpreview src={Bigpreview1} title="ALL BLACK IN BLACK" preview="Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán" />
                <Bigpreview src={Bigpreview2} title="OUTLET SALE" preview='Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.' />
            </div>
            <h2 style={{ textAlign: "center", fontWeight : "bold" }}>DANH MỤC MUA HÀNG</h2>
            <div className="buying-list">
                <div style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + buyList1 + ")"}}>
                    <Link to="/product-list?color=&costRange=&form=&gender=men&line=&size=&status=">GIÀY NAM</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=men&line=&size=&status=%2CNew%20Arrivals">New Arrivals</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=men&line=&size=&status=%2CSale%20Off">Sale-off</Link>
                </div>
                <div style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + buyList2 + ")"}}>
                    <Link to="/product-list?color=&costRange=&form=&gender=woman&line=&size=&status=">GIÀY NỮ</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=woman&line=&size=&status=New%20Arrivals">New Arrivals</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=woman&line=&size=&status=%2CSale%20Off">Sale-off</Link>
                </div>
                <div style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + buyList3 + ")"}}>
                    <Link to="/product-list?color=&costRange=&form=&gender=&line=&size=&status=">DÒNG SẢN PHẨM</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=&line=Basas&size=&status=">Basas</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=&line=Vintas&size=&status=">Vintas</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=&line=Urbas&size=&status=">Urbas</Link>
                    <Link to="/product-list?color=&costRange=&form=&gender=&line=Pattas&size=&status=">Pattas</Link>
                </div>
            </div>
            {/* <h2 style={{ textAlign: "center", fontWeight : "bold" }}>BEST SELLER</h2> */}
            {/* <div className="best-seller">
                <Carousel dots={true} content={slide3} slidesToShow={4} slidesToScroll={1}/>
            </div> */}
            <img style={{width : "100%", margin : "50px 0 50px"}} src={mainPic} alt="main"/>
        </div>
    );
};

export default Home;