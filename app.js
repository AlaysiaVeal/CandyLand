const dice = document.querySelector('.dice')
const dice2 = document.querySelector('.dice2')
const colors = ['lightskyblue', 'plum', 'palevioletred', 'lightgoldenrodyellow']
const boxes = document.querySelectorAll('.cell')
const colors2 = ['#CCFFFF', '#663300', '#FFFFFF']
const cell = document.querySelectorAll('.cell')

let player1 = document.getElementsByClassName('.gumDrop')
let player2 = document.getElementsByClassName('.bubbleGum')
let gamePieces = document.querySelectorAll('.game-pieces')
let color = 0
let turn = true
let currentPlayer = 0

dice.addEventListener('click', function onClick() {
  dice.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})

dice2.addEventListener('click', function onClick() {
  dice2.style.backgroundColor =
    colors2[Math.floor(Math.random() * colors2.length)]
})
boxes.forEach((box) => {
  box.addEventListener('click', function onClick() {
    boxes.forEach((el) => {
      if (el.classList.contains('gumDrop')) {
        el.classList.remove('gumDrop')
      }
    })
    box.classList.toggle('gumDrop')
  })
})
