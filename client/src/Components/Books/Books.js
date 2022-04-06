import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import { getBooks } from "../../API/books";
import {getAllBooks} from '../../actions/bookActions'

import Col from "react-bootstrap/Col";
import Book from "./Book/Book";

const genKey = () => Math.floor(Math.random()*100000000000000000)

const books = [
{
    id:genKey(),
    title:"Slaughterhouse-Five", 
    author:"Kurt Vonnegut", 
    pages:275, 
    read:'yes'
},{
    id:genKey(),
    title:"Slaughterhouse-Five", 
    author:"Kurt Vonnegut", 
    pages:275, 
    read:'yes'
},
{
    id:genKey(),
    title:"Slaughterhouse-Five", 
    author:"Kurt Vonnegut", 
    pages:275, 
    read:'yes'
},
{
    id:genKey(),
    title:"Slaughterhouse-Five", 
    author:"Kurt Vonnegut", 
    pages:275, 
    read:'yes'
},
{
    id:genKey(),
    title:"Slaughterhouse-Five", 
    author:"Kurt Vonnegut", 
    pages:275, 
    read:'yes'
}]

const Books = () => {
    //const userBooks = useSelector(state => state)
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
            {books.map(book => (
                <Col xs='auto' lg={3} key={book.id}>               
                    <Book props={book}  /> 
                </Col>
            ))}
        </>
    )
}

export default Books