import axios from "axios"

export const getAllproducts = async()=>{
    try {
        let res = axios.get("https://dummyjson.com/products")
        return res.data
    } catch (error) {
        console.log("Error in api " ,error)
    }
}