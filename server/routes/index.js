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

router.post('/api/book', async (req, res, next) => {
  console.log("???????????????????????????????????????????????")

  console.log("1 if connected: ", db.readyState)

  Books.create({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  })

  const stuff = await db.db.listCollections().toArray()
  const collectionNames = stuff.map(collection => collection.name);
  console.log(collectionNames)

  res.sendStatus(201)
});

router.get('/api/getBooks', async function(req, res, next) {
  const books = await Books.find({})
  console.log(books)
  res.send(books);
});



module.exports = router;
