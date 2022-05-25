// Select color
const color = document.getElementById("colorPicker");
// Select size input
const pickSize = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");


// function to create grid
function makeGrid() {
// clear old canvas
    canvas.innerHTML = '';

    let tr, td;

    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);

        }
    }
}

// function to pick a color
canvas.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
});
// function to pick the size of the grid
pickSize.addEventListener("submit", function (mouseEvent) {
    mouseEvent.preventDefault();
    makeGrid();
});