import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Carousel from '../Carousel';
import Product from '../Product';

const SearchPage = (props) => {

    let searchValue = new URLSearchParams(useLocation().search)
    let key = searchValue.get("key")

    let [products, setProducts] = useState([])

    let slider1 = [
        <a href={props.match.url} className="slide-content">BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</a>,
        <a href={props.match.url} className="slide-content">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</a>,
        <a href={props.match.url} className="slide-content">HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</a>,
        <a href={props.match.url} className="slide-content">FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</a>,
    ]

    useEffect(()=>{
        let fetchData = async()=>{
            let data = {
                key : key.toLowerCase()
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + "/search-product",data)
            .then(res=>{
                setProducts([...res.data])
            }).catch(err=>{
                console.log(err)
            })
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[key])

    useEffect(()=>{
        document.title =  searchValue.get("key") + " | Ananas Clone"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[key])

    let mapData = (products)=>{
        if(products.length > 0){
            return products.map((item, index)=>{
                return <Product key={index} quantity={item.quantity} id={item.id} src={item.image} name={item.name} color={item.color} cost={item.cost} />
            })
        }
    }

    return (
        <div>
            <Carousel dots={false} content={slider1} slidesToShow={1} slidesToScroll={1} />
            <div className="search-product-main">
                {mapData(products)}
            </div>
        </div>
    );
};

export default SearchPage;