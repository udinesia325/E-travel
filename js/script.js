function handleEach() {
  // body..
  document.location = this.dataset.href
}

function handleEachImg() {
  document.querySelector(".main-banner img")
    .src = `assets/${this.dataset.img}`
  
}




document.querySelectorAll("[data-href]").forEach((element) => {
element.addEventListener("click",handleEach)

})

//untul places



document.querySelectorAll("[data-img]").forEach((element) => {
element.addEventListener("click",handleEachImg)

})