const express = require("express")
const user = require("./model/users")
const news = require("./model/news")
const path = require("path")
const app = express()

app.use("api/", require("./routes/rout"))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
   res.render('index')
})
app.get("/Employers.ejs", (req, res) => {
   const User = user
   res.render('Employers', {users: User})
})
app.get("/News.ejs", (req, res) => {
   const News = news
   res.render('News', {news: News})
})

app.listen(3000, (req, res) => {
   console.log(`Server is working...`)
})