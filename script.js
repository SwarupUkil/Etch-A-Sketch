// Javascript for the etch-sketch

const container = document.querySelector('.container');
const row = document.createElement('div');
let column = document.createElement('div');

row.classList.add('row');
column.classList.add('column');

// Adds columns to the row element.
for(let v=0; v<16; v++){
    row.appendChild(column.cloneNode());
}
for(let i=0; i<16; i++){
    container.appendChild(row.cloneNode(true));
    // container.appendChild(row);
}