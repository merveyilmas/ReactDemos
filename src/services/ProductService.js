import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("http://localhost:8080/api/getOtaController/getForReact");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/updateOtaController/getByIdForReact?id=" + id);
    }
}