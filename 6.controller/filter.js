class filterClass{
   constructor(dataBase, one, two, three){
      this.db = dataBase
      this.one = one 
      this.two = two
      this.three = three
   }
   byAge(){
      const ageMethod = this.db.filter(item => item.id === this.one)
      return ageMethod
   }
   byNation(){
      const nationMethod = this.db.filter(item => item.nation === this.two)
      return nationMethod
   }
   byGender(){
      const genderMethod = this.db.filter(item => item.gender === this.three)
      return genderMethod
   }
}

module.exports = filterClass