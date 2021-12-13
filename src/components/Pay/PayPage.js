import React, { useEffect, useState } from 'react';
import "../../styles/pay.scss"
import Carousel from '../Carousel';
import OderInfo from './OderInfo';

const PayPage = (props) => {
    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]
    
    let [name,setName] = useState("")
    let [phone,setPhone] = useState("")
    let [email,setEmail] = useState("")
    let [address,setAddress] = useState("")
    let [city,setCity] = useState("")
    let [district,setDistrict] = useState("")
    let [town,setTown] = useState("")

    let [customer, setCustomer] = useState({})
    useEffect(()=>{
        let info = {
            name : name,
            phone : phone,
            email : email,
            address : address,
            city : city,
            district : district,
            town : town
        }
        setCustomer(info)
    },[name, phone, email, address, city, district, town])

    useEffect(()=>{
        document.title = "Order | Ananas Clone"
    },[])
    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="pay-main">
                <div className="customer-info">
                    <h3>THÔNG TIN GIAO HÀNG</h3>

                    <div className="customer-input">
                        <input onChange={(e)=> setName(e.target.value)} placeholder="HỌ TÊN" type="text" />
                        <input onChange={(e)=> setPhone(e.target.value)} placeholder="Số điện thoại" type="text" />
                        <input onChange={(e)=> setEmail(e.target.value)} placeholder="Email" type="text" />
                        <input onChange={(e)=> setAddress(e.target.value)} placeholder="Địa chỉ" type="text" />
                        <input onChange={(e)=> setCity(e.target.value)} placeholder="Tỉnh/Thành phố" type="text" />
                        <input onChange={(e)=> setDistrict(e.target.value)} placeholder="Quận/Huyện" type="text" />
                        <input onChange={(e)=> setTown(e.target.value)} placeholder="Xã/Phường/Thị trấn" type="text" />
              


                    </div>
                    <h3>PHƯƠNG THỨC GIAO HÀNG</h3>
                    <div className="transport">
                        <div style={{ display: 'flex', alignItems: "center", margin : "10px" }}>
                            <input type="radio" value="1" defaultChecked />
                            <p style={{ margin: "0", marginLeft: "10px" }}>Tốc độ tiêu chuẩn (từ 2 - 5 ngày làm việc)</p>
                        </div>
                        <strong style={{margin : "10px"}}>45.000 VND</strong>
                    </div>
                    <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                    <div className="pay">
                        <div style={{ display: 'flex', alignItems: "center", margin : "10px" }}>
                            <input type="radio" name="transport" value="1" defaultChecked/>
                            <p style={{ margin: "0", marginLeft: "10px" }}>Thanh toán trực tiếp khi giao hàng</p>
                        </div>
                    </div>
                </div>
                <div className="order-info">
                    <OderInfo customerInfo={customer} />
                </div>
            </div>
        </div>
    );
};

export default PayPage;