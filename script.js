const defaultSize = 16;

function createSquares (size) {
    board = document.getElementById('container')
    fragment = document.createDocumentFragment();
//rows
   for (let i = 0; i < size; i++){
//columns
    for (let j = 0; j < size; j++) {
        const square = document.createElement('div');
        square.className = 'square';
        fragment.appendChild(square);
     square.addEventListener('mouseover', function (event){
      chooseColor();
      event.target.style.backgroundColor = `${color}`;
     })
    }
 }
 board.appendChild(fragment);
 
board.style.display = "grid";
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

//random value for color
const getRandomColor = () => {
  let c = (Math.random() * 0xfffff * 1000000).toString(16);
  console.log("#1A" + c.slice(0, 6))
  return '#' + c.slice(0, 6);
};

//rainbow colors
const colorRainbow = () => {
  const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];
 // return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
 rainbowColors.forEach (function (value) {return value})

};

//button for changing size
let btn = document.getElementById("size-btn");
btn.addEventListener('click', event => {
 let num = prompt("choisissez un nombre entre 1 et 100");
 
 if (num <= 100 && num > 0) {
  container.innerHTML = "";
  createSquares(num);
} else {
  alert("erreur: entrez un nombre compris entre 1 et 100")
}
});

function chooseColor () {
  if (switchColor.classList.contains("on")) {
color = getRandomColor();
  } else if (rainbow.classList.contains("on")) {
color = colorRainbow();
} else if (defaultButton.classList.contains("on")){
color = "#cbc3e3";
} else {
  color = "#cbc3e3"; 
}
}

//switch to a different color 
let switchColor = document.getElementById('switch-btn');
switchColor.addEventListener('click', event => {
  rainbow.classList.remove("on");
  switchColor.classList.add("on");
});

let rainbow = document.getElementById('rainbow-btn');
rainbow.addEventListener('click', event => {
  switchColor.classList.remove("on");
  rainbow.classList.add("on");
});

let defaultButton = document.getElementById('default-btn');
defaultButton.addEventListener('click', event => {
  switchColor.classList.remove("on");
  rainbow.classList.remove("on");
  defaultButton.classList.add("on");
});

 createSquares(defaultSize)