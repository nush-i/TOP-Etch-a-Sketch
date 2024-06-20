var slider = document.getElementById("choseGrid");
var outputSlider = document.getElementById("chosen-size");
outputSlider.innerHTML = slider.value + " x " + slider.value;


slider.oninput = function() {
    outputSlider.innerHTML = this.value + " x " + this.value;
    createGridItems();
}


var picker = document.getElementById("choseColour");
var outputPicker = document.getElementById("chosen-colour");
outputPicker.innerHTML = picker.value; 

picker.oninput = function() {
    outputPicker.innerHTML = this.value;
}


const container = document.querySelector('.grid-container');
function createGridItems(){
    const gridSize = slider.value;
    const containerSize = container.clientWidth//400
    const itemSize = containerSize/gridSize;
    container.innerHTML = '';
    for (let i=0; i< gridSize * gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${itemSize}px`;
        div.style.height = `${itemSize}px`;
        container.appendChild(div);
    }
}

window.addEventListener('resize', createGridItems);


let isMouseDown = false;
container.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
container.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const chosenColour = picker.value;
        if (event.target.classList.contains('grid-item')) {
            event.target.style.backgroundColor = chosenColour;
        }
    }
});

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem=>{
    gridItem.addEventListener('click',()=>{
        const chosenColour =picker.value;
        gridItem.style.backgroundColor = chosenColour;

    })
})

const clearAll = document.querySelector('.clearAll');
clearAll.addEventListener('click', () =>{
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem=>{
        gridItem.style.backgroundColor = 'transparent';
    });
});

const toggleGridLines = document.querySelector('.gridLine');
toggleGridLines.addEventListener('click', () => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.classList.toggle('hide-grid-lines');
});


