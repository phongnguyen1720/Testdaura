const btn = document.getElementById("btn");
const box = document.getElementById("box");
const hex = document.querySelector('.hex');
function getRandomColor(){
    let r = parseInt(Math.random() * 254);
    let g = parseInt(Math.random() * 254);
    let b = parseInt(Math.random() * 254);
    return `rgb(${r}, ${g}, ${b})`
}
btn.addEventListener("click", ()=>{
    let randomColor = getRandomColor();
    console.log(randomColor);
    box.style.backgroundColor = randomColor;
    hex.innerHTML = randomColor;
})

//thay đổi màu background;
let currentColor = 'transparent'

const listColors = ['red', 'orange', 'yellow', 'blue', 'green', 'cyan', 'violet']

function getRandomColorExcept(previousColor) {
  const listColorsFiltered = listColors.filter(color => color !== previousColor)
  randomColor = listColorsFiltered[Math.floor(Math.random() * listColorsFiltered.length)]
  currentColor = randomColor
  return randomColor
}

const btnElement = document.querySelector('button')
const bodyElement = document.querySelector('body')

btnElement.addEventListener('click', function() {
  bodyElement.style.backgroundColor = getRandomColorExcept(currentColor)
})
