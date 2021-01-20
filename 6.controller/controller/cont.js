const filterClass = require("../filter")
const db = require("../model/users")

exports.home = (req, res) => {

   const classss = new filterClass(db, Number(req.query.id), req.query.nation, req.query.gender)
   let sendMessage

   if(req.query.id){
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
}