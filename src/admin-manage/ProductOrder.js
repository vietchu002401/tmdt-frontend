import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./admin-style/productOrder.scss"

const ProductOrder = () => {
    let params = useParams()
    let [order, setOrder] = useState({})
    useEffect(()=>{
        let fetchData = async()=>{
            let data = {
                id : params.id
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + "/search-order",data)
            .then(res=>{
                setOrder(res.data)
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        fetchData()
    },[])

    let mapData=(order)=>{
        if(order.productInfo){
            return order.productInfo.map((item, index)=>{
                return (
                    <div key={index} className="product">
                        <div className="product-image" style={{backgroundImage : "url(" + item.image + ")"}}></div>
                        <div className="product-info">
                            <h3>{item.name} - {item.form} - {item.color} - {item.gender}</h3>
                            <p>Size: {item.size}</p>
                            <p>Số lượng: {item.buy}</p>
                            <p>Giá: {item.cost} VND</p>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="product-main">
            <h4>Đơn hàng gồm</h4>
            {mapData(order)}
            <h4>Tổng đơn: {new Intl.NumberFormat('de-DE').format(order.totalCost)} VND</h4>
        </div>
    );
};

export default ProductOrder;