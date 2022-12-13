const data = {
	canvas: {
		size: 8192,
		cord: 0,
		gridSize: 4,
	}

}

const dataCanvas = {
	size: data.canvas.size,
	cord: data.canvas.cord,
};


const settingsForm = document.getElementById("settings");
const settingsElements = settingsForm.elements;

const canvasGridSizeEl = settingsElements["canvasGridSize"];


function setFormData(){

	canvasGridSizeEl.value = data.canvas.gridSize;
}

function getFormData(){
	data.canvas.gridSize = canvasGridSizeEl.value
}