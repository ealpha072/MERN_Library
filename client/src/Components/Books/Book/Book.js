import React from "react";
//import { useSelector, useDispatch } from "react-redux";

import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from  'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const cardStyle = {
    color:'white',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '10px',
    border: '1px solid rgb(30, 73, 118)',
    backgroundColor: 'rgb(19, 47, 76)',
    marginBottom:'5px'
}

const Book = ({props}) => {

    return(
        <>
            <Card style={cardStyle}>
                <Card.Header>{props.author}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Img />
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <ButtonGroup size='sm'>    
                            <Button  variant='primary'>View</Button>
                            <Button  variant='secondary'>Edit</Button> 
                            <Button  variant='danger'>Delete</Button>
                        </ButtonGroup>  
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Book