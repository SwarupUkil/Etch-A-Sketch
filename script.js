// Javascript for the etch-sketch

const container = document.querySelector('.container');
const row = document.createElement('div');
const column = document.createElement('div');
let columnGrid = [];
let grid = [];

row.classList.add('row');
column.classList.add('column');

// Adds columns to the row element.

for (let i=0; i<16; i++){
    for(let v=0; v<16; v++){
        columnClone = column.cloneNode();
        columnClone.addEventListener('mouseover', 
        (event) => {
            event.currentTarget.classList.add('black');
        });
        columnGrid.push(columnClone);
        // row.appendChild(columnClone);
    }

    grid.push(columnGrid);
    columnGrid = [];
}

for (let i=0; i<16; i++){
    rowClone = row.cloneNode();
    for(let v=0; v<16; v++){
        rowClone.appendChild(grid[i][v]);
    }
    container.appendChild(rowClone);
}