const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user')
const imageRoute = require('./routes/images')
const testRoute = require('./routes/test')

app.use(express.json())
app.use('/uploads', express.static('uploads')) // making image for public use

app.use('/post', postsRoute)
app.use('/user', userRoute)
app.use('/images', imageRoute)
app.use('/test', testRoute)

module.exports = app