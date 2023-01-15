function createDivs () {
    let num = 16,
    div,
    board = document.getElementById('container')
    fragment = document.createDocumentFragment();
//rows
   for (let i = 0; i < num; i++){
//columns
    for (let j = 0; j < num; j++) {
        div = document.createElement('div');
        div.className = 'square';
    
        fragment.appendChild(div);
    }
 }
 board.appendChild(fragment);
};

createDivs();

//hovering effect changing the color

const pixels = document.querySelectorAll(".square")

// function changeColor() {
//    pixels.style.backgroundColor = "blue";
// }

function changeColor() {
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "green";
  })
 }

pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor));
