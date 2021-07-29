// Grab grid container
let gridContainer = document.querySelector(".grid-container")

// Add cells to grid 
function addCells(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let i = 1; i <= rows * cols; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.addEventListener("mouseover", function colorCell(e) {
            e.target.style.background = "rgba(0, 0, 0, .9)";
        });
        gridContainer.appendChild(cell);
    }
}

// Generate grid upon loading DOM
document.body.onload = addCells(16, 16);

// Track current grid dimensions
let currentRows = 16;
let currentCols = 16;

// Grab clear button
let clear = document.getElementById("clear-grid");

// Delete all cells on click, then add uncolored cells back to the grid
clear.addEventListener("click", function clearGrid() {
    for (let i = 0; i < currentRows * currentCols; i++) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
    addCells(currentRows, currentCols);
})

// Clear the grid
function clearGrid() {
    for (let i = 0; i < currentRows * currentCols; i++) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

// Grab slider
let slider = document.getElementById("myRange");

// Resize grid according to slider value
slider.oninput = function resizeGrid() {
    clearGrid();
    currentRows = this.value;
    currentCols = this.value;
    addCells(currentRows, currentCols);
}