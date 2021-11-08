import React, { useEffect } from 'react';
import Carousel from './Carousel';
import "../styles/comingSoon.scss"
import CS from "../assets/bg_comingsoon.jpg"
import { useHistory } from 'react-router-dom';

const ComingSoon = (props) => {

    let history = useHistory()
    useEffect(()=>{
        document.title = "Coming Soon | Ananas Clone"
    },[])

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]
    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075)), url(" + CS +")"}} className="coming-soon">
                <h1>COMING SOON</h1>
                <button onClick={()=> history.push({pathname : "/"})}>
                    QUAY LẠI TRANG CHỦ
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;