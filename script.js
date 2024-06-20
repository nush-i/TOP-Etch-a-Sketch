var slider = document.getElementById("choseGrid");
var outputSlider = document.getElementById("chosen-size");
outputSlider.innerHTML = slider.value + " x " + slider.value;; 

slider.oninput = function() {
    outputSlider.innerHTML = this.value + " x " + this.value;
}

var picker = document.getElementById("choseColour");
var outputPicker = document.getElementById("chosen-colour");
outputPicker.innerHTML = picker.value; 

picker.oninput = function() {
    outputPicker.innerHTML = this.value;
}



const container = document.querySelector('.grid-container');
for (let i=0; i<16 *16; i++){
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

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

