const data = {
	canvas: { 
		size: 8192,
		cord: 0,
	},
	layer: {
		count: 35,
		wires: 3
	},
	wire:{
		color: {
			linear: true,
			linearInverted: false,
			curve: false,
			curveInverted: false,
			random: false
		},
		width: {
			max: 65, 
			originSpreadMax: 0,
			mode: {
				linear: false,
				linearInverted: false,
				curve: false,
				curveInverted: false,
				random: true
			}
		},
		step: {
			length: {
				min: 128,
				max: 2048
			},
			direction: {
				any: true,
				cardinal: false,
				diagonal: false,
				conical: false
			}
		}
	}
}

const settingsForm = document.getElementById("settings");
const settingsElements = settingsForm.elements;

const canvasLayerCount = settingsElements["canvasLayerCount"];
const canvasLayerWires = settingsElements["canvasLayerWires"];

const wireColorLinear = settingsElements["colorLinear"];
const wireColorLinearInverted = settingsElements["colorLinearInverted"];
const wireColorCurve = settingsElements["colorCurve"];
const wireColorCurveInverted = settingsElements["colorCurveInverted"];
const wireColorRandom = settingsElements["colorRandom"];

const wireWidthMax = settingsElements["wireWidthMax"];
const wireWidthOriginSpreadMax = settingsElements["wireOriginSpreadMax"];
const wireWidthLinear = settingsElements["widthLinear"];
const wireWidthLinearInverted = settingsElements["widthLinearInverted"];
const wireWidthCurve = settingsElements["widthCurve"];
const wireWidthCurveInverted = settingsElements["widthCurveInverted"];
const wireWidthRandom = settingsElements["widthRandom"];

const wireStepLengthMin = settingsElements["stepLengthMin"];
const wireStepLengthMax = settingsElements["stepLengthMax"];
const wireStepDirectionAny = settingsElements["stepDirectionAny"];
const wireStepDirectionCardinal = settingsElements["stepDirectionCardinal"];
const wireStepDirectionDiagonal = settingsElements["stepDirectionDiagonal"];
const wireStepDirectionConical = settingsElements["stepDirectionConical"];

function setFormData(){
	canvasLayerCount.value = data.layer.count
	canvasLayerWires.value = data.layer.wires

	wireColorLinear.checked = data.wire.color.linear
	wireColorLinearInverted.checked = data.wire.color.linearInverted
	wireColorCurve.checked = data.wire.color.curve
	wireColorCurveInverted.checked = data.wire.color.curveInverted
	wireColorRandom.checked =data.wire.color.random

	wireWidthMax.value = data.wire.width.max
	wireWidthOriginSpreadMax.value = data.wire.width.originSpreadMax
	wireWidthLinear.checked = data.wire.width.mode.linear
	wireWidthLinearInverted.checked = data.wire.width.mode.linearInverted
	wireWidthCurve.checked = data.wire.width.mode.curve
	wireWidthCurveInverted.checked = data.wire.width.mode.curveInverted
	wireWidthRandom.checked = data.wire.width.mode.random

	wireStepLengthMin.value = data.wire.step.length.min
	wireStepLengthMax.value = data.wire.step.length.max
	wireStepDirectionAny.checked = data.wire.step.direction.any
	wireStepDirectionCardinal.checked = data.wire.step.direction.cardinal
	wireStepDirectionDiagonal.checked = data.wire.step.direction.diagonal
	wireStepDirectionConical.checked = data.wire.step.direction.conical
}

function getFormData(){
	data.layer.count = canvasLayerCount.value
	data.layer.wires = canvasLayerWires.value

	data.wire.color.linear = wireColorLinear.checked
	data.wire.color.linearInverted = wireColorLinearInverted.checked
	data.wire.color.curve = wireColorCurve.checked
	data.wire.color.curveInverted = wireColorCurveInverted.checked
	data.wire.color.random = wireColorRandom.checked

	data.wire.width.max = wireWidthMax.value
	data.wire.width.originSpreadMax = wireWidthOriginSpreadMax.value
	data.wire.width.mode.linear = wireWidthLinear.checked
	data.wire.width.mode.linearInverted = wireWidthLinearInverted.checked
	data.wire.width.mode.curve = wireWidthCurve.checked
	data.wire.width.mode.curveInverted = wireWidthCurveInverted.checked
	data.wire.width.mode.random = wireWidthRandom.checked

	data.wire.step.length.min = wireStepLengthMin.value
	data.wire.step.length.max = wireStepLengthMax.value
	data.wire.step.direction.any = wireStepDirectionAny.checked
	data.wire.step.direction.cardinal = wireStepDirectionCardinal.checked
	data.wire.step.direction.diagonal = wireStepDirectionDiagonal.checked
	data.wire.step.direction.conical = wireStepDirectionConical.checked
}