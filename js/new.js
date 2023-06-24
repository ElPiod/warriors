const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        nav.style.top = '-50px'
        nav.style.transition = '0.3s'
        nav.style.background = 'grey' 
    } else {
        nav.style.top = 0
        nav.style.background = 'grey' 
    }
})


const tilte = document.getElementById('h5')
const text = `cliquez sur la photo pour voir les informations !!!`



let index = 0



const play = () => {
    tilte.innerHTML = text.slice(0, index)


    index++

    if(index > text.length) {
        
    }
}

let timer = setInterval(play, 150)

// section new_4
const new4 = document.getElementById('nouveau')
window.addEventListener('scroll', () => {
    if (window.scrollY > 1304) {
        new4.style.transition = '5s'
        new4.style.transform = 'scale(0.9)' 
        new4.style.transform = 'translateY(-10%)'
        new4.style.visibility = 'visible' 
    } else if (window.scrollY > 1204) {
        new4.style.transition = 'none'
        new4.style.visibility = 'hidden' 
    } else {
        new4.style.visibility = 'hidden'    
    }
})

const maillot1 = document.getElementById('maillot1')
maillot1.addEventListener('click', () => {
    maillot1.style.background = 'white'
})

const maillot2 = document.getElementById('maillot2')
maillot2.addEventListener('click', () => {
    maillot2.style.background = 'white'
})





