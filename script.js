const container = document.querySelector("#container");
const setBtn = document.querySelector('#reset');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function createGrid(dimension) {
    const totalSquares = dimension * dimension;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
        square.style.opacity = 0;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
            let currentOpacity = square.style.opacity;
            if (currentOpacity < 1) {
                square.style.opacity = Number(currentOpacity) + 0.1
            }
        });    
    }
}



setBtn.addEventListener('click', () => {
    let result = prompt('How many cells to a side?', '50');
    if (result === null) {
      return;
    } else if (Number(result) > 0 && Number(result) <= 100) {
      container.replaceChildren();
      createGrid(Number(result));
    } else if (Number(result) > 100) {
      alert("Please input a number between 1 and 100");
      return;
    } else if (Number(result) != Number) {
      alert("Please input a number between 1 and 100");
      return;
    }
  });