const express = require("express")
const dataBase = require("./dataBase")
const filter = require("./filter")

const app = express()

app.get("/", (req, res) => {
   res.send(filter.byAge())
})

app.get("/users", (req, res) => {
   res.send(filter.byGender())
})

app.get("/services", (req, res) => {
   res.send(filter.byNation())
})

app.listen(3000, () => {
   console.log(`Server 3000 chi portda ish boshladi`)
})