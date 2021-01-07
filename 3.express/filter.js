class filterClass{
   constructor(dataPerson, dataAge, dataGender, dataNation){
      this.dataPerson = dataPerson
      this.dataAge = dataAge
      this.dataGender = dataGender
      this.dataNation = dataNation
   }
   byAge(){
      const filterAge = this.dataPerson.filter(item => item.age > this.dataAge)
      return filterAge
   }
   byNation(){
      const filterNation = this.dataPerson.filter(item => item.nation == this.dataNation)
      return filterNation
   }
   byGender(){
      const filterGender = this.dataPerson.filter(item => item.gender == this.dataGender)
      return filterGender
   }
}


module.exports = filterClass
