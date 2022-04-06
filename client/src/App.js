import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//bootstrap components
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import {getBooks} from './API/books'
import Books from './Components/Books/Books'
import {NewBookForm, HeaderForm} from './Components/Form/Form'
import Footer from './Components/Footer/Footer'

const myStyles = {
    appConatiner:{
        backgroundColor:'rgb(0, 30, 60)', 
        height:'100vh', 
        padding:'0',
        overflow:'auto'
    },
    appBar:{
        position: 'relative',
        color:'white',
        fontWeight:"700",
        top: '0px',
        transition: 'top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: 'rgb(19 47 76) 0px -1px 1px inset',
        backgroundColor: 'rgba(10, 25, 41, 0.72)',
    },
    card:{
        whole:{
            border: '1px solid rgb(19, 47, 76)',
            borderRadius: '10px',
            marginBottom:'20px'
        },
        cardHeader:{
            background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
            fontWeight:'600',
            fontSize:'2 rem'
        }
    }
}


const App = () => {

   

    return (
        <Container 
            fluid 
            style={myStyles.appConatiner}
        >
            <Navbar style={myStyles.appBar}>
                <Navbar.Brand style={{color:'white', fontWeight:'700'}}>Alpha's Library</Navbar.Brand>
                <HeaderForm />
            </Navbar>
            <Container style={{marginTop:'20px'}} fluid>
                <Row >
                    <Col xs={12} lg={3} md={4}>
                        <Card style={myStyles.card.whole}> 
                            <Card.Header style={myStyles.card.cardHeader}>Add new Book</Card.Header>
                            <Card.Body style={{backgroundColor: 'rgb(19, 47, 76)'}}>
                                <NewBookForm />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={9} md={8}>
                        <Card style={myStyles.card.whole}>
                            <Card.Header style={myStyles.card.cardHeader}>
                                Your Books
                                
                            </Card.Header>
                            <Card.Body style={{ backgroundColor:'rgb(19, 47, 76)'}}>
                                <Row style={{marginBottom:'6px'}}>
                                    <Books />
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default App
