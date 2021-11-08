import React, {  useEffect } from 'react';
import Carousel from '../Carousel';
import "../../styles/basket.scss"
import ProductToBuy from './ProductToBuy';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Basket = (props) => {

    let basket = useSelector(state => state.basketReducer)
    let history = useHistory()

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
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
                    src={item.image}
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
            return Number(item.cost) * item.buy
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
                        <p>{new Intl.NumberFormat('de-DE').format(totalCost(basket))}.000</p>
                    </div>
                    <div>
                        <p>Giảm</p>
                        <p>0 VND</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: "bold" }}>Tạm tính</p>
                        <p style={{ fontWeight: "bold" }}>{new Intl.NumberFormat('de-DE').format(totalCost(basket))}.000 VND</p>
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