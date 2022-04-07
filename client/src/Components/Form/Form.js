import React from "react";
import { useState } from "react";
import {createBook} from "../../API/books";
import {useDispatch} from 'react-redux'
//my functions
import {addBook} from '../../actions/bookActions'
//material UI components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const formStyles = {
    label:{
        color:'white',
        fontWeight:300,
        paddingLeft:'5px'
    },
    headerForm:{
        position: 'relative',
        backgroundColor: 'rgb(10, 25, 41)',
        color: 'rgb(178, 186, 194)',
        fontSize: '0.875rem',
        border: '1px solid rgb(19, 47, 76)',
        borderRadius: '10px',
        transitionProperty: 'all',
        transitionDuration: '150ms',
    }
}

export const HeaderForm = () => {
    return(
        <>
            <Form as='form' >
                <InputGroup >
                    
                    <Form.Control type='text' placeholder='Search Book' style={formStyles.headerForm} />
                </InputGroup>
            </Form>
        </>
    )
}

export const NewBookForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] =  useState({
        title:'', 
        author:'', 
        pages:'', 
        read:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        createBook(formData).then(response => console.log(response.data))
        dispatch(addBook(formData))
    }

    const handleInputValueChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label style={formStyles.label}>Title</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="Enter the titile" 
                        style={formStyles.headerForm} 
                        onChange={handleInputValueChange} 
                        value={formData.title} 
                        name='title'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={formStyles.label}>Author</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="Enter the titile" 
                        style={formStyles.headerForm} 
                        onChange={handleInputValueChange} 
                        value={formData.author} 
                        name='author'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={formStyles.label}>Pages</Form.Label>
                    <Form.Control  
                        type="number" 
                        placeholder="Enter the titile" 
                        style={formStyles.headerForm} 
                        onChange={handleInputValueChange} 
                        value={formData.pages} 
                        name='pages'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={formStyles.label}>Read</Form.Label>
                    <Form.Check type='checkbox' label='Read this Book' />
                </Form.Group>
                <Button type='submit' variant='primary' >Submit</Button>
            </Form>
        </>
    )
}


