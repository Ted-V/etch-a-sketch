// Get grid container
let gridContainer = document.querySelector(".grid-container")

// Add cells to grid 
function addCells(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let i = 1; i <= rows * cols; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.textContent = `${i}`;
        gridContainer.appendChild(cell);
    }
}

document.body.onload = addCells(16, 16);
