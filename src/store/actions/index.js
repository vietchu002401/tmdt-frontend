import * as types from "../typeActions/typeActions"

export let addToBasket=(item)=>{
    return{
        type : types.ADDTOBASKET,
        item
    }
}

export let removeFromBasket = (item)=>{
    return{
        type : types.REMOVEFROMBASKET,
        item
    }
}

export let removeAll = ()=>{
    return{
        type : types.REMOVEALL
    }
}

export let loginAction=(item)=>{
    return{
        type : types.LOGIN,
        item
    }
}

export let logoutAction=()=>{
    return{
        type : types.LOGOUT
    }
}