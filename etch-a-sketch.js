const container = document.querySelector("#Container");
const gridMenu = document.createElement('div')
const gridSize = document.createElement('input')

const gridChange = document.createElement('button')
gridChange.innerText = "Change Grid";

const mainBody = document.querySelector("body")


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

mainBody.insertBefore(gridMenu, container);
gridMenu.appendChild(gridSize);
gridMenu.appendChild(gridChange);

document.querySelectorAll('.gridColumn').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = "yellow"
    })
  })
