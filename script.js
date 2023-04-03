const sketchContainer = document.querySelector(".sketch-container");
const createGridBtn = document.getElementById("create-grid-button");
const maxValue = 100;
let isNotMaxValue = true;
// grid.style.width = "200px";
// grid.style.height = "200px";

const createGrid = (gridSize) => {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        const grid = document.createElement("div");

        grid.className = `grid`;
        grid.id = `grid${i}`;

        grid.onmouseenter = () => {
            grid.style.backgroundColor = "white";
        }

        sketchContainer.appendChild(grid);
    }

    sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;
    sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, 10px)`
}

const destroyGrid = () => {
    if (sketchContainer.children.length > 0) {
        const iterate = sketchContainer.children.length;
        for (let i = 0; i < iterate; i++) {
            const child = sketchContainer.firstChild;
            console.log(i)
            sketchContainer.removeChild(child);
        }
    }
}

const appsSetup = () => {
    do {
        destroyGrid();
        const gridSize = parseInt(window.prompt("Please enter the grid size"));
    
        if (gridSize <= maxValue && gridSize > 0) {
            createGrid(gridSize);
            isNotMaxValue = false;
        }
    } while (isNotMaxValue);
}

createGridBtn.onclick = () => appsSetup();