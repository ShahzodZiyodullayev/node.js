const express = require("express")
const control = require("../controller/control")
const router = express.Router()

router.get("/home", control.home)

module.exports = router