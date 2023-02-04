const dice = document.querySelector('.dice')
const colors = [
  'lightskyblue',
  'plum',
  'palevioletred',
  'lightgoldenrodyellow',
  '#CCFFFF',
  '#663300',
  '#FFFFFF'
]
const boxes = document.querySelectorAll('.cell')
const cell = document.querySelectorAll('.cell')
const button = document.querySelector('button')
const lastCell = document.querySelector('.last-cell')
const statusDisplay = document.querySelector('.score-display')
const video = document.querySelector('.my-video')

dice.addEventListener('click', function onClick() {
  dice.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
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

boxes.forEach((box) => {
  box.addEventListener('click', function onClick() {
    boxes.forEach((el) => {
      if (el.classList.contains('bubbleGum')) {
        el.classList.remove('bubbleGum')
      }
    })
    box.classList.toggle('bubbleGum')
  })
})

lastCell.addEventListener('click', function onClick() {
  statusDisplay.innerHTML = 'YOU WON!'
})
button.addEventListener('click', function onClick() {
  location.reload()
})
