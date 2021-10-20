import * as types from "../typeActions/typeActions"
let initialState = []
if(localStorage && localStorage.getItem("basket")){
    initialState = JSON.parse(localStorage.getItem("basket"))
}

let basketReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.ADDTOBASKET:
            state = [...state, action.item]
            localStorage.setItem("basket",JSON.stringify([...state]))
            return [...state]
        case types.REMOVEFROMBASKET:
            let newState = state.filter(item=> item.id !== action.item)
            localStorage.setItem("basket",JSON.stringify([...newState]))
            state = [...newState]
            return [...state]
        case types.REMOVEALL:
            state = []
            localStorage.setItem("basket",JSON.stringify([]))
            return [...state]
        default:
            return state
    }
}

export default basketReducer