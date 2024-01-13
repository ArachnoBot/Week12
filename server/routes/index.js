var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/bookdb")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const BookSchema = mongoose.Schema({
  name: String,
  author: String,
  pages: Number
})

const Books = mongoose.model("Books", BookSchema)


router.post('/api/book', function(req, res, next) {
  Books.create({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  })
  res.send(req.body)
});

router.get('/api/getBooks', async function(req, res, next) {
  const books = await Books.find({})
  res.send(books);
});

module.exports = router;
