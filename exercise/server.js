// function ayirish(param1, param2){
//    return (param2*param1)/100
// }

// console.log(ayirish(30, 20))

// function hello(param1){
//    return "Hello " + param1
// }

// console.log(hello("Shahzod"))

function test(param1){
   if(param1 > 10){
      for(let i = param1; i <= 20; i++){
         return i
      }
   }else if(param1 < 10){
      for(let i = param1; i >= 0; i--){
         return i
      }
   }else if(param1 === 10){
      return "Parametr 10 ga teng"
   }
}

module.exports = test