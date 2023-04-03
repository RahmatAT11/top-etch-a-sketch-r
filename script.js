const sketchContainer = document.querySelector(".sketch-container");
const createGridBtn = document.getElementById("create-grid-button");
const maxValue = 100;
let isNotMaxValue = true;
// grid.style.width = "200px";
// grid.style.height = "200px";

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize**2; i++) {
        const grid = document.createElement("div");

        grid.className = `grid`

        sketchContainer.appendChild(grid);
    }

    sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;
    sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, 10px)`
}

const appsSetup = () => {
    do {
        const gridSize = parseInt(window.prompt("Please enter the grid size"));
    
        if (gridSize <= maxValue) {
            createGrid(gridSize);
            isNotMaxValue = false;
        }
    } while (isNotMaxValue);
}

createGridBtn.onclick = () => appsSetup();

console.log(createGridBtn)