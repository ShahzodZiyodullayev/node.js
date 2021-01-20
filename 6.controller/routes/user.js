const express = require("express")
const router = express.Router()
const cont = require("../controller/cont")

router.get("/home", cont.home)

module.exports = router