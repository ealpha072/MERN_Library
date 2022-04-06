import express from 'express'
import Book from '../Models/bookModel.js'

const myRouter = express.Router()

myRouter.get('/', async (req, res)=>{
    try {
        const myBooks = await Book.find()
        res.status(200).json(myBooks)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

myRouter.post('/create', async (req, res)=>{
    const bookDetails = req.body
    const newBook = new Book(bookDetails)

    try {
        await newBook.save()
        res.status(200).json(newBook)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

export default myRouter