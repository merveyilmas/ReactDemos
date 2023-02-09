import { combineReducers } from "redux";
import cartReducer from "./reducers/CartReducer";

//tüm state lerin toplandığı yer
//redux ta hazır olan bir fonksiyon var bunun için "combineReducers"

const rootReducer = combineReducers({
    cart : cartReducer
    //user : userReducer   -> gibi mesela
})

export default rootReducer;