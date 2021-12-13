import * as types from "../typeActions/typeActions"

let initialState={
    logged : false,
    code : ""
}

let loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.LOGIN:
            state.logged = true
            state.code = action.item
            return {...state}
        case types.LOGOUT:
            state = {
                logged : false,
                code : ""
            }
            return {...state}
        default:
            return state
    }
}

export default loginReducer