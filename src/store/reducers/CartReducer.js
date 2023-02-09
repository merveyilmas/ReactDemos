import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";
import { cartItems } from "../initialValues/CartItems";

const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state = initialState, {type, payload}){
    
    switch (type) {

        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            //sepette bu ürün daha önceden var mıydı diye baktık

            if (product) {
                product.quantity++;
                return{
                    ...state
                    //en son sepetin değişmesi için yeni referans oluşturduk (java da new lemek gibi)
                }
            } else {
                return{
                    //sepette bu ürün hiç yoksa;
                    //aşağıda yepyeni referansı olan yeni bir array oluşturduk ... sayesinde
                    ...state, cartItems:[...state.cartItems, {quantity : 1, product : payload}]
                }
            }            

        case REMOVE_FROM_CART: 
        
            return{
                //aşağıda gönderdiğim değişkenden farklı olanları alıp yeni bir array
                ...state,
                cartItems:state.cartItems.filter(c => c.product.id !== payload.id)
            }           
    
        default:
            return state;
    }
}