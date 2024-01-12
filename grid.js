
// Function to get a random integer within a specified range
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Get the grid container element
let grid = document.getElementById("grid");

// Calculate the number of squares that can fit in the grid
let numSquares = Math.floor(window.innerWidth / 24) * Math.floor(window.innerHeight / 24);

// Create squares and add them to the grid
for (let i = 0; i < numSquares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  if (getRandomInt(2) === 0) {
    square.classList.add("glowing");
  }
  grid.appendChild(square);
}

// Set interval to change the glowing squares every second
setInterval(function() {
  let squares = document.getElementsByClassName("square");
  let randomPositions = getRandomPositions(squares.length);
  for (let i = 0; i < squares.length; i++) {
    if (randomPositions.includes(i)) {
      squares[i].classList.add("glowing");
    } else {
      squares[i].classList.remove("glowing");
    }
  }
}, 500);

// Function to get random positions for glowing effect
function getRandomPositions(length) {
  const positions = [];
  while (positions.length < length / 2) {
    const randomPosition = Math.floor(Math.random() * length);
    if (!positions.includes(randomPosition)) {
      positions.push(randomPosition);
    }
  }
  return positions;
}
