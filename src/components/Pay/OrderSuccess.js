import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Carousel from '../Carousel';
const OrderSuccess = (props) => {

    let params = useParams()
    let history = useHistory()
    
    console.log(params.id)

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let [order, setOrder] = useState({})

    useEffect(() => {
        let fetchData = async()=>{
            let data = {
                id : params.id
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + "/search-order",data)
            .then(res => {
                setOrder({ ...res.data })
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
        fetchData()
        document.title = "Order Information | Ananas Clone"
    }, [params.id])


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
                    <h3 style={styled}>Đơn hàng của bạn sẽ được xác nhận sau ít giờ.</h3>
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