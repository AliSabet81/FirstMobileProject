import axios from "axios"

const baseURL = 'https://reqres.in/'

export const instance = axios.create({
    baseURL,
    timeout:25000
})