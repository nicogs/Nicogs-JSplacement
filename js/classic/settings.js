const data = {
	canvas: { 
		size: 8192,
		cord: 0,
		iterations: 125,
		brightness: 255,
		color: "",
		background: {
			brightness: 128,
			iterations: 3
		}
	},
	box: {
		active: false,
		scale: 100,
		brightness: {
			min: 0,
			max: 255
		}
	},
	transparantBox: {
		active: true,
		scale: 178,
		brightness: {
			min: 16,
			max: 36
		},
		alpha: {
			min: 68,
			max: 92
		}
	},
	grid: {
		active: true,
		scale: 175,
		brightness: {
			min: 173,
			max: 214
		},
		spacing: 172,
		amount: 5
	},
	columns: {
		active: true,
		scale: 97,
		brightness: {
			min: 74,
			max: 181
		},
		spacing: 667,
		amount: 10
	},
	rows: {
		active: true,
		scale: 55,
		brightness: {
			min: 95,
			max: 98
		},
		spacing: 101,
		amount: 3
	},
	lines: {
		active: true,
		brightness: {
			min: 79,
			max: 138
		},
		width: 22
	}
}

const settingsForm = document.getElementById("settings");
const settingsElements = settingsForm.elements;

const canvasItersEl = settingsElements["canvasIters"];
const canvasBrightnessEl = settingsElements["canvasBrightness"];

const boxOptionEl = settingsElements["boxOption"];
const boxScaleEl = settingsElements["boxScale"];
const boxBrightnessMinEl = settingsElements["boxBrightnessMin"];
const boxBrightnessMaxEl = settingsElements["boxBrightnessMax"];

const transparantBoxOptionEl = settingsElements["transparantBoxOption"];
const transparantBoxScaleEl = settingsElements["transparantBoxScale"];
const transparantBoxBrightnessMinEl = settingsElements["transparantBoxBrightnessMin"];
const transparantBoxBrightnessMaxEl = settingsElements["transparantBoxBrightnessMax"];
const transparantBoxAlphaMinEl = settingsElements["transparantBoxAlphaMin"];
const transparantBoxAlphaMaxEl = settingsElements["transparantBoxAlphaMax"];

const gridOptionEl = settingsElements["gridOption"];
const gridScaleEl = settingsElements["gridScale"];
const gridBrightnessMinEl = settingsElements["gridBrightnessMin"];
const gridBrightnessMaxEl = settingsElements["gridBrightnessMax"];
const gridSpacingEl = settingsElements["gridSpacing"];
const gridAmountEl = settingsElements["gridAmount"];

const columnsOptionEl = settingsElements["columnsOption"];
const columnsScaleEl = settingsElements["columnsScale"];
const columnsBrightnessMinEl = settingsElements["columnsBrightnessMin"];
const columnsBrightnessMaxEl = settingsElements["columnsBrightnessMax"];
const columnsSpacingEl = settingsElements["columnsSpacing"];
const columnsAmountEl = settingsElements["columnsAmount"];

const rowsOptionEl = settingsElements["rowsOption"];
const rowsScaleEl = settingsElements["rowsScale"];
const rowsBrightnessMinEl = settingsElements["rowsBrightnessMin"];
const rowsBrightnessMaxEl = settingsElements["rowsBrightnessMax"];
const rowsSpacingEl = settingsElements["rowsSpacing"];
const rowsAmountEl = settingsElements["rowsAmount"];

const linesOptionEl = settingsElements["linesOption"];
const linesWidthEl = settingsElements["linesWidth"];
const linesBrightnessMinEl = settingsElements["linesBrightnessMin"];
const linesBrightnessMaxEl = settingsElements["linesBrightnessMax"];


function setFormData(){

	canvasItersEl.value = data.canvas.iterations;
	canvasBrightnessEl.value = data.canvas.brightness;
	
	boxOptionEl.checked = data.box.active;
	boxScaleEl.value = data.box.scale;
	boxBrightnessMinEl.value = data.box.brightness.min;
	boxBrightnessMaxEl.value = data.box.brightness.max;

	transparantBoxOptionEl.checked = data.transparantBox.active;
	transparantBoxScaleEl.value = data.transparantBox.scale;
	transparantBoxBrightnessMinEl.value = data.transparantBox.brightness.min;
	transparantBoxBrightnessMaxEl.value = data.transparantBox.brightness.max;
	transparantBoxAlphaMinEl.value = data.transparantBox.alpha.min;
	transparantBoxAlphaMaxEl.value = data.transparantBox.alpha.max;

	gridOptionEl.checked = data.grid.active;
	gridScaleEl.value = data.grid.scale;
	gridBrightnessMinEl.value = data.grid.brightness.min;
	gridBrightnessMaxEl.value = data.grid.brightness.max;
	gridSpacingEl.value = data.grid.spacing;
	gridAmountEl.value = data.grid.amount;

	columnsOptionEl.checked = data.columns.active;
	columnsScaleEl.value = data.columns.scale;
	columnsBrightnessMinEl.value = data.columns.brightness.min;
	columnsBrightnessMaxEl.value = data.columns.brightness.max;
	columnsSpacingEl.value = data.columns.spacing;
	columnsAmountEl.value = data.columns.amount;

	rowsOptionEl.checked = data.rows.active;
	rowsScaleEl.value = data.rows.scale;
	rowsBrightnessMinEl.value = data.rows.brightness.min;
	rowsBrightnessMaxEl.value = data.rows.brightness.max;
	rowsSpacingEl.value = data.rows.spacing;
	rowsAmountEl.value = data.rows.amount;

	linesOptionEl.checked = data.lines.active;
	linesWidthEl.value = data.lines.width;
	linesBrightnessMinEl.value = data.lines.brightness.min;
	linesBrightnessMaxEl.value = data.lines.brightness.max;


}

function getFormData(){

	data.canvas.iterations = canvasItersEl.value;
	data.canvas.brightness = canvasBrightnessEl.value;

	data.box.active = boxOptionEl.checked;
	data.box.scale = boxScaleEl.value;
	data.box.brightness.min = boxBrightnessMinEl.value;
	data.box.brightness.max = boxBrightnessMaxEl.value;

	data.transparantBox.active = transparantBoxOptionEl.checked;
	data.transparantBox.scale = transparantBoxScaleEl.value;
	data.transparantBox.brightness.min = transparantBoxBrightnessMinEl.value;
	data.transparantBox.brightness.max = transparantBoxBrightnessMaxEl.value;
	data.transparantBox.alpha.min = transparantBoxAlphaMinEl.value;
	data.transparantBox.alpha.max = transparantBoxAlphaMaxEl.value;

	data.grid.active = gridOptionEl.checked;
	data.grid.scale = gridScaleEl.value;
	data.grid.brightness.min = gridBrightnessMinEl.value;
	data.grid.brightness.max = gridBrightnessMaxEl.value;
	data.grid.spacing = gridSpacingEl.value;
	data.grid.amount = gridAmountEl.value;
	
	data.columns.active = columnsOptionEl.checked;
	data.columns.scale = columnsScaleEl.value;
	data.columns.brightness.min = columnsBrightnessMinEl.value;
	data.columns.brightness.max = columnsBrightnessMaxEl.value;
	data.columns.spacing = columnsSpacingEl.value;
	data.columns.amount = columnsAmountEl.value;

	data.rows.active = rowsOptionEl.checked;
	data.rows.scale = rowsScaleEl.value;
	data.rows.brightness.min = rowsBrightnessMinEl.value;
	data.rows.brightness.max = rowsBrightnessMaxEl.value;
	data.rows.spacing = rowsSpacingEl.value;
	data.rows.amount = rowsAmountEl.value;

	data.lines.active = linesOptionEl.checked
	data.lines.width = linesWidthEl.value
	data.lines.brightness.min = linesBrightnessMinEl.value
	data.lines.brightness.max = linesBrightnessMaxEl.value
}
