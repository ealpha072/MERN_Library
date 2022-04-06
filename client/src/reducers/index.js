import {combineReducers} from 'redux'
import { bookReducer } from './booksReducers'

const rootReducer = combineReducers({
    books: bookReducer
})

export default rootReducer