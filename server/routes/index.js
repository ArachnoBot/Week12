var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const BookSchema = mongoose.Schema({
  name: String,
  author: String,
  pages: Number
})

const Books = mongoose.model("Books", BookSchema)

router.post('/api/book', function(req, res, next) {
  console.log("works!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(Books.find())
  Books.create({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  })
  console.log(Books.find())
  res.sendStatus(200)
});

router.get('/api/getBooks', async function(req, res, next) {
  const books = await Books.find({})
  res.send(books);
});

module.exports = router;