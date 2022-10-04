const dice = document.querySelector('.dice')
const colors = ['lightskyblue', 'plum', 'palevioletred', 'lightgoldenrodyellow']
const boxes = document.querySelectorAll('.box')

function randomColor(colors) {
  return [Math.floor(Math.random() * colors.length)]
}
let color = 0

dice.addEventListener('click', function onClick() {
  dice.style.backgroundColor = colors[color]
  color = color >= colors.length - 1 ? 0 : color + 1
})
/* box.addEventListener('click', function onClick() {
  box.style.backgroundColor = 'white'
}) */
boxes.forEach((box) => {
  box.addEventListener('click', function onClick() {
    boxes.forEach((el) => {
      if (el.style.backgroundColor === 'white') {
        el.style.backgroundColor = 'black'
      }
    })
    box.style.backgroundColor = 'white'
  })
})
