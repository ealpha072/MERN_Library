import axios from "axios";
const baseUrl = 'http://localhost:5000/books'

export const createBook = (obj) =>{
    const request = axios.post(`${baseUrl}/create`, obj)
    return request
}


export const getBooks = () => {
    const request = axios.get(`${baseUrl}/`)
    return request
}
