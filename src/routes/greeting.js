const express = require('express')
const router = express.Router()

router.get('/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`).status(200)
})

module.exports = router
