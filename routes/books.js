const {Router} = require('express')
const Books = require('../models/books')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await Books.find()
    res.send(books)
  }catch (e) {
    console.log(e)
  }
})
router.post('/register', async (req, res)=>{
  const books = new Books({
    title: "Hello",
    author: "Garri potter",
    price: 15,
    count: 70,
    img: "link"
  })
  
  await books.save()
  
  res.status(201).json({ message: 'Книга Добавлена' })
})
// router.get('/:id/edit', async (req, res) => {
//   if (!req.query.allow) {
//     return res.redirect('/')
//   }
//
//   const books = await Books.findById(req.params.id)
//
//   res.render('books-edit', {
//     title: `Редактировать ${books.title}`,
//     books
//   })
// })
//
router.post('/edit', async (req, res) => {
  const {id} = req.body
  delete req.body.id
  await Books.findByIdAndUpdate(id, req.body)
  res.redirect('/books')
})


router.post('/buy', async (req, res) => {
  const {id, count} = req.body
  delete req.body.id
  await Books.findByIdAndUpdate(id, req.body)
  res.redirect('/books')
})

module.exports = router
