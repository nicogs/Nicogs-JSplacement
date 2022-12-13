const data = {
	canvas: {
		size: 8192,
		cord: 0,
		iterations: 125,
		style: "bigdata", // classic2, bigdata, crappack, aggromax
		background: {
			brightness: 128, 
			iterations: 3
		}
	},
	sprite: {
		scale: 60, 
		mode: {
			seamless: true, 
			rotate: false,
			mirror: true, 
			blend: true
		}
	}

}

const dataCanvas = {
	size: data.canvas.size,
	cord: data.canvas.cord,
};


const settingsForm = document.getElementById("settings");
const settingsElements = settingsForm.elements;

const canvasStyle = settingsElements["canvasStyle"];
const canvasItersEl = settingsElements["canvasIters"];

const canvasBgItersEl = settingsElements["canvasBgIters"];
const canvasBgBrightnessEl = settingsElements["canvasBgBrightness"];

const spriteScaleEl = settingsElements["spriteScale"];
const spriteModeSeamlessEl = settingsElements["spriteModeSeamless"];
const spriteModeRotateEl = settingsElements["spriteModeRotate"];
const spriteModeMirrorEl = settingsElements["spriteModeMirror"];
const spriteModeBlendEl = settingsElements["spriteModeBlend"];


function setFormData(){

	canvasStyle.value = data.canvas.style;
	canvasItersEl.value = data.canvas.iterations;

	canvasBgItersEl.value = data.canvas.background.iterations;
	canvasBgBrightnessEl.value = data.canvas.background.brightness;

	spriteScaleEl.value = data.sprite.scale;
	spriteModeSeamlessEl.checked = data.sprite.mode.seamless;
	spriteModeRotateEl.checked = data.sprite.mode.rotate;
	spriteModeMirrorEl.checked = data.sprite.mode.mirror;
	spriteModeBlendEl.checked = data.sprite.mode.blend;
}

function getFormData(){
	data.canvas.style = canvasStyle.value
	data.canvas.iterations = canvasItersEl.value

	data.canvas.background.iterations = canvasBgItersEl.value
	data.canvas.background.brightness = canvasBgBrightnessEl.value

	data.sprite.scale = spriteScaleEl.value
	data.sprite.mode.seamless = spriteModeSeamlessEl.checked
	data.sprite.mode.rotate = spriteModeRotateEl.checked
	data.sprite.mode.mirror = spriteModeMirrorEl.checked
	data.sprite.mode.blend = spriteModeBlendEl.checked
	
}
