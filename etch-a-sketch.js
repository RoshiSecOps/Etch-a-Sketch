const container = document.querySelector("#Container");

// Creating the menu to be appended before the grid
const gridMenu = document.createElement('div')
gridMenu.id = "Menu"
const gridSize = document.createElement('input')
const gridChange = document.createElement('button')
gridChange.innerText = "Change Grid";

const mainBody = document.querySelector("body")

// Initial grid creation 16x16
let boxCount = 16
for (i = 0; i < boxCount; i ++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";

    for (r = 0; r < boxCount; r ++) {
        let column = document.createElement("div");
        row.appendChild(column).className = "gridColumn";
    }
}

const rows = document.querySelector(".gridRow");
const colums = document.querySelector("div.gridColumn");

// Adding the menu on top of the grid
mainBody.insertBefore(gridMenu, container);
gridMenu.appendChild(gridSize);
gridMenu.appendChild(gridChange);

// Adding mouseover events to the cells
document.querySelectorAll('.gridColumn').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = "yellow"
    })
  })

// Simple function to clear the grid, will be used to create the new one.
function clearGrid() {
    document.querySelector('body').removeChild(document.querySelector("#Container"));
}

// Function to clear the old grid and create new one based on input value
function createNewGrid() {
    clearGrid();

    // Taking grid size from input and creating new container
    const gridSize = document.querySelector("input").value;
    const container = document.createElement("div");
    container.id = "Container";
    const mainBody = document.querySelector("body")
    mainBody.appendChild(container);

    // Using the input and greating the new grid on container
    let boxCount = gridSize
        for (i = 0; i < boxCount; i ++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";

    for (r = 0; r < boxCount; r ++) {
        let column = document.createElement("div");
        row.appendChild(column).className = "gridColumn";
        }
    }

    // Adding the old mouseover event to make sure it works with the new grid.
    document.querySelectorAll('.gridColumn').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "yellow"
        })
      })
    
}

gridChange.addEventListener("click", createNewGrid);