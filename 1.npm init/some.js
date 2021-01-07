const person = require("./db")

class somes{
   constructor(one, two, three){
      this.one = one
      this.two = two
      this.three = three
   }
   byFilter(){
      const filterlist = this.one.filter(item => item.age > this.two)
      console.log(filterlist)
   }
   bySome(){
      const someAge = this.one.some(item => item.age > this.two)
      return console.log(someAge)
   }
   byEvery(){
      const everyAge = this.one.every(item => item.age > this.two)
      return console.log(everyAge)
   }
   byFind(){
      const findGender = this.one.find(item => item.gender == this.three)
      return console.log(new Object({
         findGender
      }))
   }
   byMap(){
      const newMap = this.one.map(item => item.age * 2);
      return console.log(new Object({
         newMap
      }))
   }
}

const dataPerson = new somes(person, 40, "female")

module.exports = dataPerson