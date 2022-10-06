const dice = document.querySelector('.dice')
const dice2 = document.querySelector('.dice2')
const colors = ['lightskyblue', 'plum', 'palevioletred', 'lightgoldenrodyellow']
const boxes = document.querySelectorAll('.cell')
const colors2 = ['#CCFFFF', '#663300', '#000000', '#FFFFFF']
const cell = document.querySelectorAll('.cell')
const gameBoard = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

let player1 = 0
let gamepiece1 = document.querySelector('.gumDrop')
let player2 = 0
let gamepiece2 = document.querySelector('.bubbleGum')
let gamepieces = document.querySelectorAll('.game-pieces')
let color = 0
let turn = true
let currentPlayer = 0

dice.addEventListener('click', function onClick() {
  dice.style.backgroundColor = colors[color]
  color = color >= colors.length - 1 ? 0 : color + 1
})

dice2.addEventListener('click', function onClick() {
  dice2.style.backgroundColor = colors2[color]
  color = color >= colors2.length - 1 ? 0 : color + 1
})

boxes.forEach((box) => {
  box.addEventListener('click', function onClick() {
    boxes.forEach((el) => {
      if (el.style.backgroundColor === 'white') {
        el.style.backgroundColor = colors[Math.floor(Math.random() * 4)]
      }
      if (el.classList.contains('gumDrop')) {
        el.classList.remove('gumDrop')
      }
    })
    box.classList.toggle('gumDrop')
  })
})
