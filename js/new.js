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
