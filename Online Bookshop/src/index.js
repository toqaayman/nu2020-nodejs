let express = require('express')
let app = express()
let publisherRoute = require('./routes/publisher')
let BookRoute = require('./routes/books')
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})

app.use(publisherRoute)
app.use(BookRoute)
app.use(express.static('public'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))