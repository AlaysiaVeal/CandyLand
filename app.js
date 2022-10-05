const dice = document.querySelector('.dice')
const dice2 = document.querySelector('.dice2')
const colors = ['lightskyblue', 'plum', 'palevioletred', 'lightgoldenrodyellow']
const boxes = document.querySelectorAll('.box')
const colors2 = ['#CCFFFF', '#663300', '#000000', '#FFFFFF']

let color = 0

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
        el.style.backgroundColor = 'black'
      }
    })
    box.style.backgroundColor = 'white'
  })
})
/*   */

/*  {
    boxes.forEach((el) => {
      if (el.style.backgroundColor === 'white') {
        el.style.backgroundColor = 'black'
      } */
