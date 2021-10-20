import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Carousel from '../Carousel';
import "../../styles/productPage.scss"
import desktopProduction from "../../assets/desktop_productlist.jpg"
import Product from '../Product';
import buyList1 from "../../assets/buyList/catalogy-1.jpg"
import { useLocation } from 'react-router-dom';
import Attribute from './Attribute';
import axios from 'axios';

const ProductPage = () => {

    let slider1 = [
        <a href="#" className="slide-content" href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href="#" className="slide-content" href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href="#" className="slide-content" href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href="#" className="slide-content" href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let [list, setList] = useState([])
    let search = new URLSearchParams(useLocation().search)
    let gender = search.get("gender")
    let status = search.get("status")
    let form = search.get("form")
    let line = search.get("line")
    let costRange = search.get("costRange")
    let size = search.get("size")
    let color = search.get("color")

    let convertSearch=(gender, status, form, line, costRange, size, color)=>{
        let genderConvert = 0
        let statusConvert = status.length > 0 ? status.split(",") : ""
        let formConvert = form.length > 0 ? form.split(",") : ""
        let lineConvert = line.length > 0 ? line.split(",") : ""
        let costRangeConvert = costRange.length > 0 ? costRange.split(",") : ""
        let sizeConvert = size.length > 0 ? size.split(",") : ""
        let colorConvert = color.length > 0 ? color.split(",") : ""
        
        if (gender === "men") {
            genderConvert = 1
        } else if (gender === "woman") {
            genderConvert = 0
        } else {
            genderConvert = [1, 0, 2]
        }

        return {
            gender : genderConvert,
            status : statusConvert,
            form : formConvert,
            line : lineConvert,
            costRange : costRangeConvert,
            size : sizeConvert,
            color : colorConvert
        }
    }

    useEffect(async () => {
        if (gender === null) {
            await axios.get(process.env.REACT_APP_SERVER_URL + "/get-all-product")
                .then(res => {
                    let arr = res.data.map((item, index) => {
                        return <Product key={index} quantity={item.quantity} id={item.id} src={buyList1} name={item.name} color={item.color} cost={item.cost} />
                    })
                    setList([...arr])
                }).catch(err => {
                    console.log(err)
                })
        } else {
            let data = convertSearch(gender, status, form, line, costRange, size, color)
            await axios.post(process.env.REACT_APP_SERVER_URL + "/find-product", data)
                .then(res => {
                    let arr = res.data.map((item, index) => {
                        return <Product key={index} quantity={item.quantity} id={item.id} src={buyList1} name={item.name} color={item.color} cost={item.cost} />
                    })
                    setList([...arr])
                }).catch(err => {
                    console.log(err)
                })
        }
    }, [gender, status, form ,line , costRange , color , size])

    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : "instant"
        })
        document.title = "Product | Ananas Clone"
    },[])

    return (
        <div>
            <Carousel content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="main-product">
                <Attribute />
                <div className="product-list">
                    <img src={desktopProduction} alt="main" />
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "10px 0" }}>
                        {list.length > 0 ? list : <h3>Không tìm thấy sản phẩm bạn tìm kiếm</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;