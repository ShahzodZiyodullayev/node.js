const db = require("./dataBase")
const filter = require("./filter")
const express = require("express")
const app = express()


app.get("/", (req, res) => {
   const fc = new filter(db, 40, "female", "uzbek")
   res.send(fc.byAge())
})

app.get("/nation", (req, res) => {
   const fc = new filter(db, 40, "female", "uzbek")
   res.send(fc.byNation())
})

app.get("/gender", (req, res) => {
   const fc = new filter(db, 40, "female", "uzbek")
   res.send(fc.byGender())
})

const port = 3000

app.listen(port, () => {
   console.log(`Server ${port} chi portda ish boshladi`)
})