
let descriptionElement = document.getElementById('description')
let questionElement = document.getElementById('question')
let affordable = document.getElementById('Affordable')
let headingElement = document.getElementById('title')
let acclaimed = document.getElementById('Acclaimed')
let imageElement = document.getElementById('image')
let popular = document.getElementById('Popular')
let all = [acclaimed, affordable, popular]
var currentImage = images.length-1
let set = [acclaimed, popular]
let trigger = 0

function question (things) {
    questionElement.innerHTML = things[Math.floor(Math.random() * (things.length - 0))]
}

function load (index) {
    question (things)
    
    if (currentImage <= 0) currentImage = 0;
    if (currentImage >= images.length-1) currentImage = images.length-1;

    if (!index) { currentImage = Math.floor(Math.random() * (images.length - 0)) } 
    else if (index === 'latest') {currentImage = images.length-1} 
    else if (index === 'oldest') {currentImage = 0} 
    else {currentImage += index}

    if (currentImage < 0 || currentImage >= images.length) return

    imageElement.src = `/api/file/${images[currentImage].fields.image}`
    headingElement.innerHTML = `${images[currentImage].fields.title}`
    descriptionElement.innerHTML = `${images[currentImage].fields.description}`
}

function calc (self) {
    if (!self) return
    if (trigger > 1) trigger = 0
    set[trigger] = self
    all.forEach(i => {i.checked = false})
    set.forEach(i => {i.checked = true})
    trigger += 1
}



calc()
question(things)
load('latest')