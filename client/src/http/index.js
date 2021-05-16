import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL

})
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.autorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
export {
    $host,
    $authHost
}