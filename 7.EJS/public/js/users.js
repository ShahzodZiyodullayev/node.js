let li = document.querySelectorAll("li")
console.log(li[0].childNodes[0].data)

// document.body.addEventListener("click", function(){
//    li.forEach((e) => {
//       // e.setAttribute(dataText, `${li[0].childNodes[0].data}`)
//       e.style.setProperty('--content', `attr(${li[0].childNodes[0].data})`)
//    })
// })
// window.addEventListener("load", function(){
//    li[0].setAttribute('data-text', `${li[0].childNodes[0].data}`)
//    li[0].style.setProperty('--x', `attr(data-text)`)
// })