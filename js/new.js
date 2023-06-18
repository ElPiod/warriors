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

// New_2
const tilte = document.getElementById('lorem')
const tilte1 = document.getElementById('lorem1')


const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio quos, minima, perferendis aspernatur deleniti assumenda delectus ullam commodi facilis beatae vitae iste repellat quia doloribus fugit ea omnis fugiat.`
const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio quos, minima, perferendis aspernatur deleniti assumenda delectus ullam commodi facilis beatae vitae iste repellat quia doloribus fugit ea omnis fugiat.`


let index = 0
let index1 = 0


const play = () => {
    tilte.innerHTML = text.slice(0, index)
    tilte1.innerHTML = text1.slice(0, index1)


    index++
    index1++

    if(index & index1 > text.length) {
        index = 0
        index1 = 0
    }
}

let timer = setInterval(play, 100)
