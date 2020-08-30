let BookModel = require('../models/book.model')
let express = require('express')
let router = express.Router()


router.post('/books', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new BookModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/books', (req, res) => {
  if(!req.query.title) {
    return res.status(400).send('Missing parameter')
  }

  BookModel.findOne({
    title: req.query.title
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/books', (req, res) => {
  if(!req.query.title) {
    return res.status(400).send('Missing parameter ')
  }

  BookModel.findOneAndUpdate({
    title: req.query.title
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/books', (req, res) => {
  if(!req.query.title) {
    return res.status(400).send('Missing parameter')
  }

  BookModel.findOneAndRemove({
    title: req.query.title
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router