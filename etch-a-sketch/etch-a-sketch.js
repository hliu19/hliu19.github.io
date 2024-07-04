const container = document.querySelector(".container");
const square = document.createElement("div");
square.id = "square";

let pad_size = 20;

function promptSize () {
    let new_size = parseInt(prompt("How big do you want the sketchpad to be?"));
    pad_size = new_size;
    clearPad();
    createPad();
}

function createPad () {
    for (let i = 0; i < pad_size; i++) {

        let row = document.createElement("div")
        row.className = "row";
        row.classList.add("row");
    
        for (let j = 0; j < pad_size; j++) {
            let cell = document.createElement("cell");
            cell.className = "cell";
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    
        container.appendChild(row);
    }

    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("pointerenter", (event) => paint(event));
    }
}

function clearPad() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove());
}

function paint(event) {
    
    if (event.buttons === 1) {
        let r = 0;
        let g = 0;
        let b = 0;
            
        // Update the background color of the cell
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        event.target.style.opacity = "1";
    }
}

createPad();

let clear = document.getElementById("clear");

clear.addEventListener("click", function () {
    clearPad();
    createPad();
});

let resize = document.getElementById("resize");

resize.addEventListener("click", promptSize);