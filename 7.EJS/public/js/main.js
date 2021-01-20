let div = document.querySelectorAll('.div')
let body = document.querySelector('body')
let textOne = document.querySelector("#textOne")
let textHOne = document.querySelector("#textOne h1")
let textTwo = document.querySelector("#textTwo")
let textHTwo = document.querySelector("#textTwo h1")

div.forEach((e) => {
   e.addEventListener("mousemove", function(){
      body.style.backdropFilter = "blur(15px)"
      if(e == div[0]){
         div[1].style.filter = "blur(10px)"
         textTwo.style.display = "block"
      }else if(e   == div[1]){
         div[0].style.filter = "blur(10px)"
         textOne.style.display = "block"
      }
   })
   e.addEventListener("mouseout", function(){
      body.style.backdropFilter = "blur(0px)"
      div[1].style.filter = "blur(0px)"
      div[0].style.filter = "blur(0px)"
      textTwo.style.display = "none"
      textOne.style.display = "none"
   })
})
