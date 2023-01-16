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
        square.addEventListener('mouseover', changeColor)
    }
 }
 board.appendChild(fragment);
 
board.style.display = "grid";
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

};

//hovering effect changing the color
function changeColor(e) {
  e.target.style.backgroundColor = "pink";
}

//button for changing size
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
 let num = prompt("choisissez un nombre entre 1 et 100");
 
 if (num <= 100 && num > 0) {
  container.innerHTML = "";
  createSquares(num);
} else {
  alert("erreur: entrez un nombre compris entre 1 et 100")
}
});

window.onload = () => {
  createSquares(defaultSize)}