import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import "../../styles/searchOrder.scss"
import axios from 'axios';

const SearchOrder = (props) => {

    useEffect(() => {
        document.title = "Search Order | Ananas Clone"
    }, [])

    let [orderId, setOrderId] = useState("")
    let [order, setOrder] = useState({})

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let searchOrder = async (orderId) => {
        let data = {
            id : orderId
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/search-order",data)
            .then(res => {
                setOrder(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    let mapOrder = (order) => {
        if (order.productInfo) {
            return (
                <div style={{backgroundColor : "#ebebeb"}} className="search-order-main">
                    {order.productInfo.map((item, index) => {
                        return (
                            <div key={index} className="order-product">
                                <div style={{ backgroundImage: "url(" + item.image + ")" }} className="order-img"></div>
                                <div className="order-more">
                                    <h3>{item.name} - {item.form} - {item.color} - {item.gender}</h3>
                                    <div>
                                        <p>Size: {item.size}</p>
                                        <p>Số lượng: {item.buy}</p>
                                    </div>
                                    <h4>{item.cost} VND</h4>
                                </div>
                            </div>
                        )
                    })}
                    <div style={{ display: "flex" }}>
                        <h3 className="cost">Tổng giá trị đơn hàng: </h3>
                        <h3 style={{ color: "rgb(235, 106, 0)" }} className="cost">{new Intl.NumberFormat('de-DE').format(order.totalCost)} VND</h3>
                    </div>
                    {order.status ? <h3>Đơn hàng của bạn đã được xác nhận và được giao sau ít ngày</h3> : <h3>Đơn hàng chưa được xác nhận</h3>}
                </div>
            )
        } else {
            return null
        }
    }
    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="search-order-main">
                <h2>TRA CỨU ĐƠN HÀNG</h2>
                <input onChange={(e) => setOrderId(e.target.value)} type="text" placeholder="Nhập mã đơn hàng" />
                <button onClick={() => searchOrder(orderId)}>
                    TRA CỨU ĐƠN HÀNG
                </button>
            </div>
            {mapOrder(order)}
        </div>
    );
};

export default SearchOrder;