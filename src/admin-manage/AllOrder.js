import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./admin-style/allOrder.scss"

const AllOrder = () => {

    let [allOrder, setAllOrder] = useState([])
    let [again, setAgain] = useState(false)

    useEffect(() => {
        let fetchData = async () => {
            await axios.get(process.env.REACT_APP_SERVER_URL + "/get-all-order")
                .then(res => {
                    setAllOrder(res.data)
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData()
    }, [again])

    let updateState = () => {
        setAgain(!again)
    }

    let mapData = (allOrder) => {
        return allOrder.map((item, index) => {
            return (
                <Order
                    key={index}
                    _id={item._id}
                    name={item.customerInfo.name}
                    email={item.customerInfo.email}
                    phone={item.customerInfo.phone}
                    address={item.customerInfo.address}
                    town={item.customerInfo.town}
                    district={item.customerInfo.district}
                    city={item.customerInfo.city}
                    productInfo={item.productInfo}
                    totalCost={item.totalCost}
                    status={item.status}
                    updateState={updateState}
                />
            )
        })
    }
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Người mua</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Mặt hàng</th>
                        <th>Chi tiết</th>
                        <th>Tổng tiền</th>
                        <th>Tình trạng</th>
                    </tr>
                    {mapData(allOrder)}
                </tbody>
            </table>
        </div>
    );
};

let Order = (props) => {

    let history = useHistory()

    let deleteOrder = async (_id, productInfo, status) => {
        let data = {
            id: _id,
            product: productInfo,
            status : status
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/delete-order", data)
            .then(res => {
                props.updateState()
            }).catch(err => {
                console.log(err)
            })
    }

    let changeStatus = async (_id, status) => {
        let data = {
            id: _id,
            status: !status
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/change-status", data)
            .then(res => {
                props.updateState()
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <tr>
            <td>{props._id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.address} - {props.town} - {props.district} - {props.city}</td>
            <td>{props.productInfo.length} loại</td>
            <td><button onClick={() => history.push({ pathname: "/product-order/" + props._id })} style={{ backgroundColor: "lightgreen", color: "black" }}>Xem</button></td>
            <td>{new Intl.NumberFormat('de-DE').format(props.totalCost)} VND</td>
            <td>
                {props.status ? <button onClick={() => changeStatus(props._id, props.status)} style={{ backgroundColor: "lightgreen", color: "black" }}>Đã xác nhận</button> : <button onClick={() => changeStatus(props._id, props.status)}>Chờ xác nhận</button>}
                <button onClick={() => deleteOrder(props._id, props.productInfo, props.status)}>Xóa</button>
                {/* <button onClick={()=> confirmOrder()} style={{backgroundColor : "lightgreen", color : "black"}}>Giao hàng</button> */}
            </td>
        </tr>
    )
}

export default AllOrder;