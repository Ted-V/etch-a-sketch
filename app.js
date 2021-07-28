// Get grid container
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
            e.target.style.border = "0px";
        });
        cell.textContent = `${i}`;
        gridContainer.appendChild(cell);
    }
}

document.body.onload = addCells(16, 16);
