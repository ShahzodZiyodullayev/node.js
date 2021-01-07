const dataBase = require("./dataBase")

class filterClass{
   constructor(db, da, dg, dn){
      this.db = db 
      this.da = da
      this.dg = dg
      this.dn = dn
   }
   byAge(){
      const dataAge = this.db.filter(item => item.age > this.da)
      return dataAge
   }
   byGender(){
      const dataGender = this.db.filter(item => item.gender === this.dg)
      return dataGender
   }
   byNation(){
      const dataNation = this.db.filter(item => item.nation === this.dn)
      return dataNation
   }
}

const filter = new filterClass(dataBase, 40, "female", "uzbek")
module.exports = filter