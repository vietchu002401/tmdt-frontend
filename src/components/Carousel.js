import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss"

let Carousel = (props) => {
    let settings = {
        dots: props.dots,
        infinite: true,
        speed: 1000,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    }
    let arr = props.content.map((item, index) => {
        return (
            <div className="slide-content" key={index}>
                {item}
            </div>
        )
    })
    return (
        <Slider {...settings}>
            {arr}
            {/* <div className="slide-content">
                <a href="#">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>
            </div>
            <div className="slide-content">
                <a href="#">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>
            </div>
            <div className="slide-content">
                <a href="#">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>
            </div>
            <div className="slide-content">
                <a href="#">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>
            </div> */}
        </Slider>
    )
}

export default Carousel;
