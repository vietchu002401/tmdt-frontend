import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import "../../styles/basket.scss"
import ProductToBuy from './ProductToBuy';
import src from "../../assets/buyList/catalogy-1.jpg"
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Basket = () => {

    let basket = useSelector(state => state.basketReducer)
    let history = useHistory()

    let slider1 = [
        <a href="#" className="slide-content" href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href="#" className="slide-content" href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href="#" className="slide-content" href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href="#" className="slide-content" href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : "instant"
        })
        document.title = "Basket | Ananas Clone"
    },[])

    let mapBasket = (basket) => {
        return basket.map((item, index) => {
            if(item.gender === 1){
                item.gender = "Nam"
            }else if(item.gender === 0){
                item.gender = "Nữ"
            }else{
                item.gender = "Nam/Nữ"
            }
            return (
                <ProductToBuy
                    key={index}
                    src={src}
                    name={item.name}
                    form={item.form}
                    color={item.color}
                    gender={item.gender}
                    cost={item.cost}
                    size={item.size}
                    id={item.id}
                    quantity={item.buy} />
            )
        })
    }

    let totalCost=(basket)=>{
        let arr = basket.map(item=>{
            return Number(item.cost * item.buy)
        })
        return arr.reduce((a,b)=> a+b,0)
    }
    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="basket-main">
                <div className="basket-product">
                    <h3>GIỎ HÀNG</h3>
                    {mapBasket(basket).length > 0 ? mapBasket(basket) : <h4>Giỏ hàng trống</h4>}
                </div>
                <div className="basket-pay">
                    <h3>ĐƠN HÀNG</h3>
                    <div>
                        <p>Đơn hàng</p>
                        <p>{totalCost(basket)}.000</p>
                    </div>
                    <div>
                        <p>Giảm</p>
                        <p>0 VND</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: "bold" }}>Tạm tính</p>
                        <p style={{ fontWeight: "bold" }}>{totalCost(basket)}.000 VND</p>
                    </div>

                    <button onClick={()=> history.push({pathname : "/shipping-information"})}>
                        TIẾP TỤC THANH TOÁN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;