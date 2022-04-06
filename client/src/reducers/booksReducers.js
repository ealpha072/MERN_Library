import { ActionTypes } from "../actions/actionTypes"

const initialState = {
    books:[]
}

export const bookReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_NEW_BOOK:
            return state
        case ActionTypes.GET_ALL_BOOKS:
            return{...state, books:payload}
        default:
            return state
    }
}

