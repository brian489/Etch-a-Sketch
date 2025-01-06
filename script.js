const canvas = document.getElementById("canvas");
let size;
const sizeButton = document.getElementById("size");
sizeButton.addEventListener("click", getSize());
let isMouseDown = false;

function makeCanvas(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        canvas.appendChild(div);
    }
}
function prepareCanvas() {
    const squareArray = document.getElementsByClassName("square");
    canvas.addEventListener('mousedown', () => {
        isMouseDown = true;
        console.log("hi")
    })
    canvas.addEventListener('mouseup', () => {
        isMouseDown = false;
    })
    
    for(const i of squareArray) {
        i.addEventListener("mouseover", (event) => {
            console.log(isMouseDown)
            if (isMouseDown === true){
                event.target.classList.toggle("coloured"); 
            } 
        });
        i.addEventListener("mousedown", (event) => {
            event.target.classList.toggle("coloured"); 
        })
    }
}

function getSize() {
    size = prompt("Size?");
    makeCanvas(size);
    document.documentElement.style.setProperty('--size', `${700/size}px`);
    prepareCanvas();
}

