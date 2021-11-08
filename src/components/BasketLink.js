import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import "../styles/basketPreview.scss"
const BasketLink = () => {

    let styled = {
        div: {
            width: "30px",
            height: "60px",
            position: "fixed",
            top: "30%",
            right: "0",
            backgroundColor: "rgb(235, 106, 0)",
            borderRadius: "10px 0 0 10px",
            zIndex: "10"
        },
        link: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px 0 0 10px",
            color: "black"
        }
    }

    let [preview, setPreview] = useState(false)
    let basket = useSelector(state => state.basketReducer)

    useEffect(() => {
        setPreview(true)
    }, [basket])
    return (
        <div onMouseOver={() => setPreview(true)} onMouseOut={() => setPreview(false)} style={styled.div}>
            <Link to="/your-basket" style={styled.link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
            </Link>
            <PreviewBasket preview={preview} />
        </div>
    );
};

let PreviewBasket = (props) => {
    let basket = useSelector(state => state.basketReducer)
    let obj = basket[basket.length - 1]
    let history = useHistory()

    let mapBasket = (obj) => {
        if(obj){
            return (
                <div style={{ minHeight: "130px", width: "100%", padding: "10px", display: 'flex', justifyContent: "space-between", borderBottom: "2px solid black" }}>
                    <div style={{ flexBasis: "30%", maxHeight: "100px", backgroundImage: "url(" + obj.image + ")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", flex: "1", padding: "10px", paddingTop: "0" }}>
                        <strong>{obj.name}</strong>
                        <strong>{obj.cost}</strong>
                        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ margin: "0" }}>Size</p>
                            <p style={{ margin: "0" }}>{obj.size}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <p style={{ margin: "0" }}>Số lượng</p>
                            <p style={{ margin: "0" }}>{obj.buy}</p>
                        </div>
                    </div>
                </div>
            )
        }
        return <h4 style={{ flex: "1", padding: "10px", fontWeight: "bold", margin: "0" }}>GIỎ HÀNG TRỐNG</h4>
    }

    let mapBasket2 = (obj) => {
        if(obj){
            return (
                <div style={{ minHeight: "130px", width: "100%", padding: "10px", display: 'none', justifyContent: "space-between", borderBottom: "2px solid black" }}>
                    <div style={{ flexBasis: "30%", maxHeight: "100px", backgroundImage: "url(" + obj.image + ")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", flex: "1", padding: "10px", paddingTop: "0" }}>
                        <strong>{obj.name}</strong>
                        <strong>{obj.cost}</strong>
                        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ margin: "0" }}>Size</p>
                            <p style={{ margin: "0" }}>{obj.size}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <p style={{ margin: "0" }}>Số lượng</p>
                            <p style={{ margin: "0" }}>{obj.buy}</p>
                        </div>
                    </div>
                </div>
            )
        }
        return <h4 style={{ flex: "1", padding: "10px", fontWeight: "bold", margin: "0", display : "none" }}>GIỎ HÀNG TRỐNG</h4>
    }

    if (props.preview) {
        return (
            <div className="styled2">
                <h4 style={{ height: "50px", padding: "10px", fontWeight: "bold", margin: "0" }}>GIỎ HÀNG ({basket.length})</h4>
                {mapBasket(obj)}
                <button onClick={() => history.push({ pathname: "/your-basket" })} style={{ width: "100%", height: "50px", backgroundColor: "rgb(235, 106, 0)", color: "black", position: "absolute", bottom: "0" }}>
                    VÀO GIỎ HÀNG
                </button>
            </div>
        )
    }
    return (
        <div className="styled1">
            <h4 style={{ flex: "1", padding: "10px", fontWeight: "bold", margin: "0", display: "none" }}>GIỎ HÀNG ({basket.length})</h4>
            {mapBasket2(obj)}
            <button style={{ width: "100%", height: "50px", backgroundColor: "rgb(235, 106, 0)", color: "black", display: "none" }}>
                VÀO GIỎ HÀNG
            </button>
        </div>
    )
}

export default BasketLink;