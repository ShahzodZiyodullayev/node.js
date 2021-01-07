const path = require("path")

// ------------------------------------------------------------
// Quyida path moduli va uning metodlari uchun yaratilgan class
// ------------------------------------------------------------

class workWithPath{
   constructor(one){
      this.one = one
   }
   byBasename(){
      console.log(path.basename(this.one))
   }
   byFilename(){
      console.log(path.dirname(this.one))
   }
   byExtname(){
      console.log(path.extname(this.one))
   }
   byParse(){
      console.log(path.parse(this.one))
   }
   byFormat(){
      const file = path.basename(this.one)
      const result = file.slice(0, file.indexOf('.'))
      console.log(path.format({
         root: "/", 
         name: result, 
         ext: ".txt"
      }))
   }
}

const makePath = new workWithPath(__filename)

module.exports = makePath