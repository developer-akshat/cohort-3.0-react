import axios from "axios";

export const authData = () => axios.create({
    baseURL:"https://dummyjson.com",
});