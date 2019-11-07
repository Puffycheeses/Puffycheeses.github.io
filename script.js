const things = [
    'minimalism',
    'valued',
    'collectable',
    'popular'
]

const images = [
    {
        'url': 'face.png',
        'title': 'I cant wait for my face to be more distorted lmao',
        'description': '2019 - GIMP, iPhone 7 & iMessage<br/>Anonymity is our only power'
    },
    {
        'url': 'BAU.png',
        'title': 'Buisness as usual',
        'description': '2019 - GIMP, iPhone 5s<br/>I\'m keen to sell out'
    },
    {
        'url': 'onceImABillionare.png',
        'title': 'People wouldnt display this',
        'description': '2019 - GIMP, iPhone X, Reddit<br/>Use provided paint once I\'m a billionare'
    }
]

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

    imageElement.src = `./images/${images[currentImage].url}`
    headingElement.innerHTML = `${images[currentImage].title}`
    descriptionElement.innerHTML = `${images[currentImage].description}`
}

function calc (self) {
    if (!self) return
    if (trigger > 1) trigger = 0
    set[trigger] = self
    all.forEach(i => {i.checked = false})
    set.forEach(i => {i.checked = true})
    trigger += 1
}

let imageElement = document.getElementById('image')
let headingElement = document.getElementById('title')
let descriptionElement = document.getElementById('description')
let questionElement = document.getElementById('question')
var currentImage = images.length-1
let acclaimed = document.getElementById('Acclaimed')
let affordable = document.getElementById('Affordable')
let popular = document.getElementById('Popular')

let all = [acclaimed, affordable, popular]
let set = [acclaimed, popular]
let trigger = 0

calc()
question(things)
load('latest')