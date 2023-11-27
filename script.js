//* Variables //

const Gridsize = 10;
let playerboard = emptyGrid();
let computerboard = emptyGrid();
let playerShips = []; 
let computerShips = [];
let currentplayer = "player";

//* The Grid //

function emptyGrid() {
  let grid = [];
  for (let i = 0; i < Gridsize; i++) {
    grid[i] = [];
    for (let j = 0; j < Gridsize; j++) {
      grid[i][j] = 0; // 0 is an empty cell
    }
  }
  return grid;
}

function shipplacement(grid,ships){
    for (let shipSize  of ships )
        shipplacement(grid, shipSize);
}

//* Creates the board output
function generateBoard(grid, elementId, clickHandler) {
  const table = document.getElementById(elementId);
  table.innerHTML = "";

  for (let i = 0; i < Gridsize; i++){
    const row = document.createElement('tr');
    for (let j = 0; j < Gridsize; j++){
        const cell = document.createElement('td');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener("click", clickHandler);
        if(board[i][j]> 0){
            cell.classList.add('ship');
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
  }
}


//* Asset //

const shipType = {
  Smallship: 2,
  Mediumship: 3,
  LargeShip: 5,
};

class Ship{
    constructor(type){
        this.id = type;
        this.length = shipType[type];
        this.direction = "horizontal";
        this.hits = 0;
        this.isSunk = false;
    }
}


const getDirection = (direction) => {
  const changeDirection = () => {
    direction === "horizontal" || direction === "vertical";
  };
};

//* Hit //
// add a point if ship is hit
getHit(){
    this.hits++; 
    if (this.hits === this.length){
        this.isSunk = true;
    }
}

function getHit(hit) {
  return hit++;
}


//* Sunk //
function isSunk(ship, hits) {
  return hits >= ship.length;
}

