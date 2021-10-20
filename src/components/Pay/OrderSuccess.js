import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Carousel from '../Carousel';
const OrderSuccess = () => {

    let params = useParams()
    let history = useHistory()

    let slider1 = [
        <a href="#" className="slide-content" href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href="#" className="slide-content" href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href="#" className="slide-content" href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href="#" className="slide-content" href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let [order, setOrder] = useState({})

    useEffect(async () => {
        await axios.post(process.env.REACT_APP_SERVER_URL + "/search-order", { id: params.id })
            .then(res => {
                setOrder({ ...res.data })
            }).catch(err => {
                console.log(err)
            })
        document.title = "Order Information | Ananas Clone"
    }, [])


    let styled = {
        textAlign: "center",
        fontWeight: "bold",
        margin: "20px"
    }
    let styleButton = {
        width : "200px",
        height : "60px",
        backgroundColor : "rgb(235, 106, 0)",
        color : "white",
        margin : "20px auto",
        display : "block"
    }

    let showOrder = (order) => {
        if (order.id === undefined) {
            return (
                <div style={{width : "100%"}}>
                    <h1 style={styled}>Không tìm thấy đơn hàng</h1>
                    <button onClick={()=> history.push({pathname : "/"})} style={styleButton}>
                        VỀ TRANG CHỦ
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1 style={styled}>Đặt hàng thành công</h1>
                    <h3 style={styled}>Mã đơn hàng của bạn là: {order.id}</h3>
                    <h3 style={styled}>Tổng số tiền phải trả: {order.totalCost} VND</h3>
                </div>
            )
        }
    }
    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            {showOrder(order)}
        </div>
    );
};

export default OrderSuccess;