const express = require('express')
const router = express.Router()
const authorizer = require("../middlewares/authMiddleware")

router.get("/", authorizer, (req, res) => {
    res.json({ status: 200, message: "Authorized!" })
  })

module.exports = router