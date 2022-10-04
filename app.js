const dice = document.querySelector('.dice')
const colors = ['lightskyblue', 'plum', 'palevioletred', 'lightgoldenrodyellow']
let color = 0

dice.addEventListener('click', function onClick() {
  dice.style.backgroundColor = colors[color]
  color = color >= colors.length - 1 ? 0 : color + 1
})
