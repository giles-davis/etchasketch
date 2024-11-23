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
    container.style.setProperty('--dimension', dimension);
    
    // Calculate base square size with 1.5x scaling
    const squareSize = (750 / dimension) * 1.5;
    
    // Calculate how many squares we need in each direction
    const squaresPerRow = Math.floor(1750 / squareSize);
    const squaresPerColumn = Math.floor(750 / squareSize);
    
    // Adjust container size to perfectly fit the squares
    container.style.width = `${squareSize * squaresPerRow}px`;
    container.style.height = `${squareSize * squaresPerColumn}px`;
    
    // Create grid based on calculated dimensions
    const totalSquares = squaresPerRow * squaresPerColumn;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
        square.style.opacity = 0;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
            let currentOpacity = square.style.opacity;
            if (currentOpacity < 1) {
                square.style.opacity = Number(currentOpacity) + 0.1;
            }
        });    
    }
}







setBtn.addEventListener('click', () => {
  let result = prompt('Select number of squares for the grid...', '50');
  let num = Number(result);
  if (result === null) return;
  if (isNaN(num) || num <= 0 || num > 100) {
      alert("Invalid input! Please input a number between 1 and 100!");
      return;
  }
  container.replaceChildren();
  createGrid(num);
});
