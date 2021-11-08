import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../store/actions';

const ProductToBuy = (props) => {

    let [status, setStatus] = useState("")
    let dispatch = useDispatch()
    let dispatchRemoveFromBasket = (item) => dispatch(removeFromBasket(item))

    useEffect(() => {
        let fetchData = async() => {
            await axios.post(process.env.REACT_APP_SERVER_URL + "/get-detail", { id: props.id })
                .then(res => {
                    setStatus(res.data.quantity > 0 ? "Còn hàng" : "Hết hàng")
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData()
    }, [props.id])

    let remove = () => {
        dispatchRemoveFromBasket(props.id)
    }
    return (
        <div className="basket-content">
            <div className="image">
                <img src={props.src} alt="" />
            </div>
            <div className="introduce">
                <h3>{props.name} - {props.form} - {props.color} - {props.gender}</h3>
                <strong>Giá: {props.cost} VND</strong>
                <div>
                    <strong>Size: {props.size}</strong>
                    <strong>Số lượng: {props.quantity}</strong>
                </div>
            </div>
            <div className="more">
                <h4>{props.cost} VND</h4>
                <p>{status}</p>
                <button onClick={remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="white" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductToBuy;