const sketchContainer = document.querySelector(".sketch-container");
// grid.style.width = "200px";
// grid.style.height = "200px";

const createGrid = () => {
    for (let i = 0; i < 16*16; i++) {
        const grid = document.createElement("div");

        grid.style.backgroundColor = "blue";
        grid.className = `grid`

        sketchContainer.appendChild(grid);
        console.log(i)
    }
}

createGrid();