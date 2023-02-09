import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./RootReducer";

export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer())
    //devToolsEnhancer() chrome da redux devtool eklentisini kullanmayı sağlar.
}