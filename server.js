//Imports
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

//Other Imports
require('dotenv').config()
// const PORT = process.env.PORT || 8000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes

//Database
mongoose.connect('mongod://localhost:27017/strapi-blog', {useNewUrlParser: true}, () => {
    console.log(`The db is connected!`)
})

//Global Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMessage: err.message})
})

//Server
app.listen(8000, () =>{
    console.log(`Server listening on port ${8000}`)
})