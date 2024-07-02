const container = document.querySelector(".container");
const square = document.createElement("div");

square.id = "square";

let pad_size = 20;

function promptSize () {
    let new_size = Number(prompt("How big do you want the sketchpad to be?"));
    pad_size = new_size;
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
}

createPad();