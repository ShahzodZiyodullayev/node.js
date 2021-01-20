const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.use("/api/user", require('./routes/user'))

const port = 7000
app.listen(7000, (req, res) => {
   console.log(`Server ${port} da ish boshladi`)
})