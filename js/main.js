// ! goTop

let anchors = document.querySelectorAll('a[href*="#"]')

// for (let i = 0; i < anchors.length; i++){
//   anchors[i]
// }


for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const goTop = document.querySelector('.link-top')
window.addEventListener('scroll', function (){
  if (window.scrollY > 0){
goTop.style.display = 'flex'
  }
  else {
    goTop.style.display = 'none'
  }
})
