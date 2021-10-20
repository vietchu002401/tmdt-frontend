import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/product.scss"

const Product = (props) => {

    let [buyNow, setBuyNow] = useState(false)


    return (
        <div onMouseOver={() => setBuyNow(true)} onMouseOut={() => setBuyNow(false)} className="product">
            <Link to={"/product-detail/" + props.id}>
                <div style={{backgroundImage : props.quantity > 0 ? "url(" + props.src + ")" : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + props.src + ")"}} className="img img-2">

                </div>
                <div>
                    {props.quantity > 0 ? <BuyNow buyNow={buyNow} /> : <div className="buy-now" style={{backgroundColor : "red", color : "white"}}>HẾT HÀNG</div>}
                    <h4>{props.name}</h4>
                    <p>{props.color}</p>
                    <h4>{props.cost}</h4>
                </div>
            </Link>
        </div>
    )
}

let BuyNow = (props) => {
    if (props.buyNow) {
        return (
            <div className="buy-now" style={{opacity : 1}}>
                MUA NGAY
            </div>
        )
    }
    return (
        <div className="buy-now" style={{opacity : 0}}>
            MUA NGAY
        </div>
    )
}

export default Product;