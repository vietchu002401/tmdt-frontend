import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeAll } from '../../store/actions';

const OderInfo = (props) => {

    let basket = useSelector(state => state.basketReducer)
    let history = useHistory()

    let dispatch = useDispatch()
    let dispatchRemoveAll = ()=> dispatch(removeAll())

    let mapProduct = (basket) => {
        return basket.map((item, index) => {
            return (
                <div key={index} className="product-info">
                    <div>
                        <strong>{item.name}</strong>
                        <p>{item.cost} VND</p>
                    </div>
                    <div>
                        <p>Size: {item.size}</p>
                        <p>Số lượng: {item.buy}</p>
                    </div>
                </div>
            )
        })
    }

    let totalCost = (basket) => {
        let arr = basket.map(item=>{
            return Number(item.cost) * item.buy
        })
        return arr.reduce((a,b)=> a+b,0)
    }

    let [check, setCheck] = useState(false)
    let [loader, setLoader] = useState(false)

    let payDone = async(customer) => {
        if (customer.name === "" || customer.email === "" || customer.address === "" || customer.phone === "" || customer.city === "" || customer.town === "" || customer.district === "") {
            setCheck(true)
        } else {
            setCheck(false)
            setLoader(true)
            let data = {
                customerInfo: customer,
                productInfo: basket,
                totalCost: (totalCost(basket) + 45) * 1000,
                status: false
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + "/create-order",data)
            .then(res=>{
                setLoader(false)
                console.log(res.data)
                dispatchRemoveAll()
                history.push({pathname : "/order-success/" + res.data})
            }).catch(err=>{
                console.log(err)
            })
        }
    }



    let mapInfo = (basket) => {
        if (basket.length > 0) {
            return (
                <>
                    <div className="product-info">
                        <div className="total">
                            <strong>Đơn hàng</strong>
                            <p>{new Intl.NumberFormat('de-DE').format(totalCost(basket))}.000 VND</p>
                        </div>
                        <div className="total">
                            <strong>Giảm</strong>
                            <p>0 VND</p>
                        </div>
                        <div className="total">
                            <strong>Phí vận chuyển</strong>
                            <p>45.000 VND</p>
                        </div>
                        <div className="total">
                            <strong>Phí thanh toán</strong>
                            <p>0 VND</p>
                        </div>
                    </div>
                    <div className="total">
                        <strong>TỔNG CỘNG</strong>
                        <p style={{ color: "rgb(235, 106, 0)", fontWeight: "bold" }}>{new Intl.NumberFormat('de-DE').format(totalCost(basket) + 45)}.000 VND</p>
                    </div>
                    {loader ? <div className="loader"></div> : null}
                    {check ? <p style={{color : "red"}}>Vui lòng nhập đầy đủ thông tin..!</p> : null}
                    <button onClick={()=>payDone(props.customerInfo)}>
                        HOÀN TẤT ĐẶT HÀNG
                    </button>
                </>
            )
        } else {
            return <p>KHÔNG CÓ ĐƠN HÀNG ĐỂ THANH TOÁN</p>
        }
    }

    return (
        <div className="order-info__main">
            <h3>ĐƠN HÀNG</h3>
            {mapProduct(basket)}

            {mapInfo(basket)}
        </div>
    );
};

export default OderInfo;