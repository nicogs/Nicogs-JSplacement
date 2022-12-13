const data = {
	canvas: {
		size: 8192,
		cord: 0,
		scale: 20,
		brightness: 0,
		drawingChance: 2.5,
		break: false,
	},
	shape: {
		box: {
			filled: true,
			outlined: true
		},
		circle: {
			filled: true,
			outlined: true
		},
		diamond: {
			filled: true,
			outlined: true
		},
	},
	pattern: {
		maxLength: 5, 
		line: {
			x: true,
			y: true
		},
		addition: {
			xy: true,
			yx: true
		},
		subtraction: {
			xy: true,
			yx: true
		},
		grid: true
	}

}

const dataCanvas = {
	size: data.canvas.size,
	cord: data.canvas.cord,
};


const settingsForm = document.getElementById("settings");
const settingsElements = settingsForm.elements;

const canvasScaleEl = settingsElements["canvasScale"];
const canvasBrightnessMinEl = settingsElements["canvasBrightnessMin"];
const canvasDrawingChanceEl = settingsElements["canvasDrawingChance"];
const canvasBreakEl = settingsElements["breakCode"];

const shapeBoxFilledEl = settingsElements["shapeBoxFilled"];
const shapeBoxOutlinedEl = settingsElements["shapeBoxOutlined"];
const shapeCircleFilledEl = settingsElements["shapeCircleFilled"];
const shapeCircleOutlinedEl = settingsElements["shapeCircleOutlined"];
const shapeDiamondFilledEl = settingsElements["shapeDiamondFilled"];
const shapeDiamondOutlinedEl = settingsElements["shapeDiamondOutlined"];

const patternMaxLenghtEl = settingsElements["patternMaxLength"]
const patternLineXEl = settingsElements["patternLineX"];
const patternLineYEl = settingsElements["patternLineY"];
const patternAdditionXYEl = settingsElements["patternAdditionXY"];
const patternAdditionYXEl = settingsElements["patternAdditionYX"];
const patternSubtractionXYEl = settingsElements["patternSubtractionXY"];
const patternSubtractionYXEl = settingsElements["patternSubtractionYX"];
const patternGridXYEl = settingsElements["patternGridXY"];

function setFormData(){
	canvasScaleEl.value = data.canvas.scale
	canvasBrightnessMinEl.value = data.canvas.brightness
	canvasDrawingChanceEl.value = data.canvas.drawingChance
	canvasBreakEl.checked = data.canvas.break

	shapeBoxFilledEl.checked = data.shape.box.filled
	shapeBoxOutlinedEl.checked = data.shape.box.outlined
	shapeCircleFilledEl.checked = data.shape.circle.filled
	shapeCircleOutlinedEl.checked = data.shape.circle.outlined
	shapeDiamondFilledEl.checked = data.shape.diamond.filled
	shapeDiamondOutlinedEl.checked = data.shape.diamond.outlined

	patternMaxLenghtEl.value = data.pattern.maxLength
	patternLineXEl.checked = data.pattern.line.x 
	patternLineYEl.checked = data.pattern.line.y
	patternAdditionXYEl.checked = data.pattern.addition.xy
	patternAdditionYXEl.checked = data.pattern.addition.yx
	patternSubtractionXYEl.checked = data.pattern.subtraction.xy
	patternSubtractionYXEl.checked = data.pattern.subtraction.yx
	patternGridXYEl.checked = data.pattern.grid
}

function getFormData(){
	data.canvas.scale = canvasScaleEl.value
	data.canvas.brightness = canvasBrightnessMinEl.value
	data.canvas.drawingChance = canvasDrawingChanceEl.value
	data.canvas.break = canvasBreakEl.checked

	data.shape.box.filled = shapeBoxFilledEl.checked
	data.shape.box.outlined = shapeBoxOutlinedEl.checked
	data.shape.circle.filled = shapeCircleFilledEl.checked
	data.shape.circle.outlined = shapeCircleOutlinedEl.checked
	data.shape.diamond.filled = shapeDiamondFilledEl.checked
	data.shape.diamond.outlined = shapeDiamondOutlinedEl.checked

	data.pattern.maxLength = patternMaxLenghtEl.value
	data.pattern.line.x  = patternLineXEl.checked
	data.pattern.line.y = patternLineYEl.checked
	data.pattern.addition.xy = patternAdditionXYEl.checked
	data.pattern.addition.yx = patternAdditionYXEl.checked
	data.pattern.subtraction.xy = patternSubtractionXYEl.checked
	data.pattern.subtraction.yx = patternSubtractionYXEl.checked
	data.pattern.grid = patternGridXYEl.checked
	
}