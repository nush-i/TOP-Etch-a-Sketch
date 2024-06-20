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
