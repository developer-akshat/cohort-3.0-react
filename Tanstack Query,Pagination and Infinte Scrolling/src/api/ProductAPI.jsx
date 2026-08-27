import axios from "axios"

export const getAllproducts = async(limit,pageParams = 0)=>{
    try {
        console.log("page param",pageParams)
        let res = await axios.get(
            `https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`
        )
        return res.data
    } catch (error) {
        console.log("Error in api " ,error)
    }
}