// Javascript for the etch-sketch

const container = document.querySelector('.container');
const row = document.createElement('div');
const column = document.createElement('div');
let columnGrid = [];
let grid = [];
let gridSize = 16;
let gridWidth = 400;

row.classList.add('row');
column.classList.add('column');
updateGrid();


// Creates the entire grid of divisions.

function updateGrid(){
    columnGrid = [];
    grid = []; // reset grid sizes.
    for(let i = 0; i < gridSize; i++){
        for(let v = 0; v < gridSize; v++){
            columnClone = column.cloneNode();
            columnClone.style.padding = `${(gridWidth / gridSize / 2)}px`;
            columnClone.addEventListener('mouseover', 
            (event) => {
                event.currentTarget.classList.add('black');
            });
            columnGrid.push(columnClone);
        }
    
        grid.push(columnGrid);
        columnGrid = [];
    }
    
    for(let i = 0; i < gridSize; i++){
        rowClone = row.cloneNode();
        for(let v = 0; v < gridSize; v++){
            rowClone.appendChild(grid[i][v]);
        }
        container.appendChild(rowClone);
    }
}


// Deletes all the elements in the main container in the html.

function deleteGrid(){
    let allRows = document.querySelectorAll('.row');
    console.log(allRows);
    allRows.forEach(element => {
        container.removeChild(element);
    });
}


// Button Javascript

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    let size = parseInt(prompt('Input a size between 1-100.'));
    if(size && 1 <= size && size <= 100){
        gridSize = size;
        deleteGrid();
        updateGrid();
    }
});