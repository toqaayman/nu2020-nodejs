let express = require('express')
let router = express.Router()


router.get('/publisher/:name', (req, res) => {
  res.send(`You have requested a publisher ${req.params.name}`)
})

router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})



module.exports = router