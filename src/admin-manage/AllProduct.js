import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./admin-style/allProduct.scss"

const AllProduct = () => {

    let [products, setProducts] = useState([])
    let [again, setAgain] = useState(false)

    useEffect(() => {
        let fetchData = async () => {
            let data = {
                sliceRange : 100
            }
            await axios.post(process.env.REACT_APP_SERVER_URL + "/get-all-product", data)
                .then(res => {
                    let arr = [...res.data]
                    setProducts([...arr.reverse()])
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData()
    }, [again])

    let fetchAgain = () => {
        setAgain(!again)
    }

    let mapData = (products) => {
        return products.map((item, index) => {
            return (
                <Product
                    key={index}
                    image={item.image}
                    name={item.name}
                    form={item.form}
                    color={item.color}
                    gender={item.gender}
                    size={item.size}
                    cost={item.cost}
                    quantity={item.quantity}
                    updateState={fetchAgain}
                />
            )
        })
    }
    return (
        <div className="all">
            {mapData(products)}
        </div>
    );
};

let Product = (props) => {
    return (
        <div className="item">
            <input style={{ display: "none" }} type="file" id="input" />
            <label htmlFor="input">
                <div style={{ backgroundImage: "url(" + props.image + ")" }} className="item__img"></div>
            </label>
            <strong>{props.name} - {props.form} - {props.color}</strong>
            <p>Gender: {props.gender}</p>
            <p>Size: {props.size}</p>
            <p>Cost: {props.cost}</p>
            <p>Số lượng còn lại: {props.quantity}</p>
            <button>
                Cập nhật
            </button>
        </div>
    )
}

export default AllProduct;