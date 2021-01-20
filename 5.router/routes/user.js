const filterClass = require("../filter")
const db = require("../dataBase")
const express = require("express")
const router = express.Router()

router.get("/home", (req, res) => {

   const classss = new filterClass(db, Number(req.query.age), req.query.nation, req.query.gender)
   let sendMessage

   if(req.query.age){
      sendMessage = classss.byAge()
   }else if(req.query.nation){
      sendMessage = classss.byNation()
   }else if(req.query.gender){
      sendMessage = classss.byGender()
   }else{
      sendMessage = "Ma'lumotlar bazasida bunday xususiyat mavjud emas"
   }

   res.status(200).json({
      success: true,
      data: sendMessage
   })
})

module.exports = router