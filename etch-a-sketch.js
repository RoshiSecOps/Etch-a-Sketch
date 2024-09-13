const container = document.getElementById("Container");
const rows = document.getElementById("gridRow");
const colums = document.getElementById("gridColumn");

let boxCount = 32
for (i = 0; i < boxCount; i ++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";

    for (r = 0; r < boxCount; r ++) {
        let column = document.createElement("div");
        row.appendChild(column).className = "gridColumn";
    }
}

//colums.addEventListener('onmouseover', )
