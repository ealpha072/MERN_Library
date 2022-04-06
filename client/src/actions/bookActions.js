import { ActionTypes } from "./actionTypes"

export const addBooks = (book) => {
    return{
        type:ActionTypes.ADD_NEW_BOOK,
        payload: book
    }
}

export const getAllBooks = (books) =>{
    return {
        type:ActionTypes.GET_ALL_BOOKS,
        payload:books
    }
}
