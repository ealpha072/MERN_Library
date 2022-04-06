import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    pages:Number,
    timeAdded:{
        type:Date,
        default:new Date()
    }
})

const Book = mongoose.model('Books', bookSchema)

export default Book