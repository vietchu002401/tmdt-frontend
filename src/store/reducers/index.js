import { combineReducers } from "redux";
import basketReducer from "./basketReducer"
import loginReducer from "./loginReducer"


let myReducers = combineReducers({
    basketReducer,
    loginReducer
})

export default myReducers