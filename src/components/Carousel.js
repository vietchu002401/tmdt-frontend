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
        </Slider>
    )
}

export default Carousel;
