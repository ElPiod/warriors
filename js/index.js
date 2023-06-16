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

// Animation Index.Html
const bienvenue = document.getElementById('bienvenue')
const click = document.getElementById('anim')
const logo = document.getElementById('logo')

//Click sur (plus >>)
click.addEventListener('click', () => {
    click.style.transition = '1s' 
    click.style.color = 'white'
})
click.addEventListener('click', () => {
    click.style.transition = '2s' 
    click.style.background = 'black'
})
//Click sur logo acceuil_1_1

const tilte = document.getElementById('autotext')
const tilte1 = document.getElementById('autotext1')

const text = `Je suis Abou Diallo. J'ai 24 ans, j'habite à  Thies plus précisément Hersent`
const text1 = `Je suis Samba Gueye. J'ai 20 ans, j'habite à Kedougou j'habite à Thies plus précisément Hersent`

let index = 0
let index1 = 0

const play = () => {
    tilte.innerHTML = text.slice(0, index)
    tilte1.innerHTML = text1.slice(0, index1)

    index++
    index1++
    if(index & index1 > text.length) {
        
    }
}

let timer = setInterval(play, 200)



