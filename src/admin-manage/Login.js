import React, { useEffect, useState } from 'react';
import "./admin-style/login.scss"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "../store/actions/index"
import { useHistory } from 'react-router-dom';

const Login = () => {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let loginState = useSelector(state => state.loginReducer)
    let dispatch = useDispatch()
    let dispatchLogin = (item)=> dispatch(loginAction(item))

    let history = useHistory()

    let login=async()=>{
        let data = {
            username : username,
            password : password
        }
        await axios.post(process.env.REACT_APP_SERVER_URL + "/login", data)
        .then(res=>{
            dispatchLogin(res.data)
        }).catch(err=>[
            console.log(err)
        ])
    }

    useEffect(()=>{
        if(loginState.logged){
            history.push({
                pathname : "/home"
            })
        }
    },[loginState])


    return (
        <div className="login">
            <div>
                <p>Tai khoan</p>
                <input onKeyPress={(e)=> e.key === "Enter" && login()} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="tai khoan"/>
            </div>
            <div>
                <p>Mat khau</p>
                <input onKeyPress={(e)=> e.key === "Enter" && login()} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="mat khau"/>
            </div>
            <button onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Login;