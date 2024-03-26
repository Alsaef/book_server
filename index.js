const express = require('express')
const books = require('./books.json');
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
  res.send('this is my book server !')
})
app.get('/books', (req, res) => {
  res.send(books)
})
app.get('/books/:id', (req, res) => {
  const id=parseInt(req.params.id)
  console.log('find')
  const phone=books.find(book => book.bookid === id)||{};
  res.send(phone)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})