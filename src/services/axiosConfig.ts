import axios, { AxiosInstance } from "axios"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://food-order-app-49e0a-default-rtdb.firebaseio.com/"
})

export default axiosInstance