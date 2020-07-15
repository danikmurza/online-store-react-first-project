const {Router} = require('express')
const User = require('../models/User')
const Books = require('../models/books')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await Books.find()
    await res.send(books)
  } catch (e) {
    console.log(e)
  }
})


module.exports = router
