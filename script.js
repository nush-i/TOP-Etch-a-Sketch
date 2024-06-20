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