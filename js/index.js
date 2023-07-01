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
//scroll id acceuil_1

// Animation acceuil_1_1
const tilte = document.getElementById('autotext')
const tilte1 = document.getElementById('autotext1')
const tilte2 = document.getElementById('autotext2')

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio quos, minima, perferendis aspernatur deleniti assumenda delectus ullam commodi facilis beatae vitae iste repellat quia doloribus fugit ea omnis fugiat.`
const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio quos, minima, perferendis aspernatur deleniti assumenda delectus ullam commodi facilis beatae vitae iste repellat quia doloribus fugit ea omnis fugiat.`
const text2 = `Warriors © 2023 Tous droits réservés.`

let index = 0
let index1 = 0
let index2 = 0

const play = () => {
    tilte.innerHTML = text.slice(0, index)
    tilte1.innerHTML = text1.slice(0, index1)
    tilte2.innerHTML = text2.slice(0, index2)


    index++
    index1++
    index2++
    if(index & index1 & index2 > text.length) {
        index2 = 0
    }
}

let timer = setInterval(play, 100)



