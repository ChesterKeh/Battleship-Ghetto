//*Variables //

//*Asset//

const shipType = {
  Smallship: 2,
  Mediumship: 3,
  LargeShip: 5,
};

const ship = (type) => {
  const id = type;
  const length = shipType.length(type);
  let direction = "horizontal";
};

const getDirection = (direction) => {
  const changeDirection = () => {
    direction === "horizontal" || direction === "vertical";
  };
};

//*The Grid

function theGrid(size) {
  let grid = [];
  for (let i = 0; i < size.length; i++) {
    grid[i] = [];
    for (let j = 0; j < size.length; j++) {
      grid[i][j] = 0; // 0 is an empty cell
    }
  }
  return grid;
}


function generateBoard(board, elementId, clickHandler){
    const table = document.getElementById(elementId);
    table.innerHTML = " ";
}