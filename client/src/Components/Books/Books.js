import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import { getBooks } from "../../API/books";
import {getAllBooks} from '../../actions/bookActions'

import Book from "./Book/Book";

const Books = () => {
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await getBooks().catch(err => console.log(err))
        dispatch(getAllBooks(response.data))
    }

    useEffect(()=>{
        fetchData()
    })

    return (
        <>
            <Book />
        </>
    )
}

export default Books