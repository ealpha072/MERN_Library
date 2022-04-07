import express from 'express'   
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import myRouter from './Routes/routes.js'
import {CONNECTION_URI} from './keys.js'


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/books', myRouter)

const PORT = 5000

mongoose.connect(CONNECTION_URI)
.then(() => app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`)))
.catch(err => console.log(err.msg))

