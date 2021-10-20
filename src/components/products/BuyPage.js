import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import "../../styles/buyPage.scss"
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../store/actions';

const BuyPage = (props) => {

    let params = useParams()

    let basketItem = useSelector(state => state.basketReducer)
    let dispatch = useDispatch()
    let dispatchAddToBasket = (item)=>dispatch(addToBasket(item))
    let history = useHistory()

    let slider1 = [
        <a href="#" className="slide-content" href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href="#" className="slide-content" href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href="#" className="slide-content" href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href="#" className="slide-content" href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    let [detail, setDetail] = useState({})
    let [toBuy, setToBuy] = useState({})

    useEffect(async () => {
        let data = {
            id: params.id
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/get-detail", data)
            .then(res => {
                setDetail(res.data)
                document.title = res.data.name + " | Ananas Clone"
            }).catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : "instant"
        })
    },[])

    let RenderGender = ({ detail }) => {
        if (detail.gender === 1) {
            return "Nam"
        } else if (detail.gender === 0) {
            return "Nữ"
        } else {
            return "Nam/Nữ"
        }
    }

    let chooseSize = async (e) => {
        let data = {
            name: detail.name,
            line: detail.line,
            color: detail.color,
            gender: detail.gender,
            form: detail.form,
            cost: detail.cost,
            size: e.target.value
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/get-tobuy", data)
            .then(res => {
                setToBuy({ ...res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    let renderQuantity = (toBuy) => {
        let arr = []
        if (toBuy.quantity > 0) {
            for (let i = 1; i <= toBuy.quantity; i++) {
                arr.push(<option key={i} value={i}>{i}</option>)
            }
        } else {
            arr.push(<option key="1">Size bạn chọn hiện tại đã hết hàng</option>)
        }
        return arr
    }

    let chooseQuantity = (e) => {
        let data = toBuy
        data.buy = Number(e.target.value)
        delete data.quantity
        setToBuy(data)
    }

    let addBasket=()=>{
        if(toBuy.buy > 0){
            dispatchAddToBasket(toBuy)
        }
    }

    let goToPay=()=>{
        if(toBuy.buy > 0){
            dispatchAddToBasket(toBuy)
            history.push({pathname : "/your-basket"})
        }
    }


    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="buy-page">
                <div className="router">

                </div>
                <div className="buy-page__main">
                    <div className="buy__img">
                        <div style={{ width: "100%", height: "700px", background: "grey" }}>

                        </div>
                    </div>
                    <div className="buy__info">
                        <h3>{detail.name} - {detail.form} - {detail.color} - <RenderGender detail={detail} />
                        </h3>
                        <div className="status">
                            <p>Mã sản phẩm : <strong>{detail.id}</strong></p>
                            <p>Tình trạng : <strong>{detail.quantity > 0 ? "Còn hàng" : "Hết hàng"}</strong></p>
                        </div>
                        <h4>{detail.cost} VND</h4>

                        <div className="option">
                            <p>Kết hợp thiết kế hở gót cùng quai dán, Basas Bumper Gum NE - Mule mang lại trải nghiệm tiện lợi tăng cấp so với phiên bản thắt dây truyền thống. Lên chân nhanh chóng trong tích tắc không cần chạm tay nhưng vẫn sở hữu diện mạo đầy tính thanh lịch, Basas Bumper Gum NE - Mule chính là lựa chọn toàn diện cho mọi dịp dạo chơi từ nhà ra phố của các tín đồ thời trang trẻ.</p>
                        </div>

                        <div className="option">
                            <div className="size-and-quantity">
                                <div>
                                    <h3>SIZE</h3>
                                    <select onChange={chooseSize} id="cars">
                                        <option value="0">0</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                    </select>
                                </div>
                                <div>
                                    <h3>SỐ LƯỢNG</h3>
                                    <select onChange={chooseQuantity} id="cars">
                                        <option value="0">0</option>
                                        {renderQuantity(toBuy)}
                                    </select>
                                </div>
                            </div>
                            <div onClick={addBasket} className="add-basket">
                                <h3>THÊM VÀO GIỎ HÀNG</h3>
                            </div>
                            <div onClick={goToPay} className="pay">
                                <h3>THANH TOÁN</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPage;