import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import "../../styles/productPage.scss"
import desktopProduction from "../../assets/desktop_productlist.jpg"
import Product from '../Product';
import { useLocation } from 'react-router-dom';
import Attribute from './Attribute';
import axios from 'axios';

const ProductPage = (props) => {

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let [list, setList] = useState([])
    let [loader, setLoader] = useState(true)
    let [loadMore, setLoadMore] = useState(false)
    let [sliceRange, setSliceRange] = useState(12)

    let search = new URLSearchParams(useLocation().search)
    let gender = search.get("gender")
    let status = search.get("status")
    let form = search.get("form")
    let line = search.get("line")
    let costRange = search.get("costRange")
    let size = search.get("size")
    let color = search.get("color")

    let convertSearch = (gender, status, form, line, costRange, size, color) => {
        let genderConvert = 0
        let statusConvert = status.length > 0 ? status.split(",") : ""
        let formConvert = form.length > 0 ? form.split(",") : ""
        let lineConvert = line.length > 0 ? line.split(",") : ""
        let costRangeConvert = costRange.length > 0 ? costRange.split(",") : ""
        let sizeConvert = size.length > 0 ? size.split(",") : ""
        let colorConvert = color.length > 0 ? color.split(",") : ""

        if (gender === "men") {
            genderConvert = [1, 2]
        } else if (gender === "woman") {
            genderConvert = [0, 2]
        } else {
            genderConvert = [1, 0, 2]
        }

        return {
            gender: genderConvert,
            status: statusConvert,
            form: formConvert,
            line: lineConvert,
            costRange: costRangeConvert,
            size: sizeConvert,
            color: colorConvert,
            sliceRange: sliceRange
        }
    }

    useEffect(() => {
        let fetchData = async () => {
            if (gender === null) {
                let data = {
                    sliceRange: sliceRange
                }
                await axios.post(process.env.REACT_APP_SERVER_URL + "/get-all-product", data)
                    .then(res => {
                        setList([...res.data])

                        setLoader(false)
                        setLoadMore(false)
                    }).catch(err => {
                        console.log(err)
                        setLoadMore(false)
                    })
            } else {
                setLoader(true)
                let data = convertSearch(gender, status, form, line, costRange, size, color)
                await axios.post(process.env.REACT_APP_SERVER_URL + "/find-product", data)
                    .then(res => {
                        setList([...res.data])
                        setLoader(false)
                        setLoadMore(false)
                    }).catch(err => {
                        console.log(err)
                        setLoadMore(false)
                    })
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender, status, form, line, costRange, color, size, sliceRange])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
        document.title = "Product | Ananas Clone"
    }, [])

    let handleLoadMore = () => {
        if (sliceRange === list.length) {
            setLoadMore(true)
            setSliceRange(sliceRange + 12)
        }
    }



    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="main-product">
                <Attribute />
                <div className="product-list">
                    <img src={desktopProduction} alt="main" />
                    <div id="product" style={{ width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "10px 0" }}>
                        {loader ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : list.length > 0 ? list.map((item, index) => {
                            return <Product key={index} quantity={item.quantity} id={item.id} src={item.image} name={item.name} color={item.color} cost={item.cost} />
                        }) : <h3>Không tìm thấy sản phẩm bạn tìm kiếm</h3>}
                        {loadMore ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : null}
                    </div>
                    {sliceRange > list.length ? null : <button onClick={handleLoadMore} style={{ width: "200px", height: "40px", backgroundColor: "black", color: "white", margin: "20px auto", cursor: "pointer" }}>Load More</button>}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;