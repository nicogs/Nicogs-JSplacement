let shapeArray = [];
let patternArray = [];

function setShapeArray(){
	if(data.canvas.break){
		data.shape.box.filled = true
		data.shape.box.outlined = true
		data.shape.circle.filled = true
		data.shape.circle.outlined = true
		data.shape.diamond.filled = true
		data.shape.diamond.outlined = true

		shapeArray = [drawBoxFilled, drawBoxOutlined, drawCircleFilled, drawCircleOutlined, drawDiamondFilled, drawDiamondOutlined];
	} else {
		shapeArray = [];
		data.shape.box.filled ? shapeArray.push(drawBoxFilled) : "";
		data.shape.box.outlined ? shapeArray.push(drawBoxOutlined) : "";
		data.shape.circle.filled ? shapeArray.push(drawCircleFilled) : "";
		data.shape.circle.outlined ? shapeArray.push(drawCircleOutlined) : "";
		data.shape.diamond.filled ? shapeArray.push(drawDiamondFilled) : "";
		data.shape.diamond.outlined ? shapeArray.push(drawDiamondOutlined) : "";

		if(shapeArray.length < 1){
			data.shape.box.filled = true
			shapeArray.push(drawBoxFilled)
		}
	}
}

function setPatternArray(){
	if(data.canvas.break){
		data.pattern.line.x = true
		data.pattern.line.y = true
		data.pattern.addition.xy = true
		data.pattern.addition.yx = true
		data.pattern.subtraction.xy = true
		data.pattern.subtraction.yx = true
		data.pattern.grid = true

		patternArray = [lineX, lineY, additionXY, additionYX, subtractionXY, subtractionYX, grid];
	} else {
		patternArray = [];
		data.pattern.line.x ? patternArray.push(lineX) : "";
		data.pattern.line.y ? patternArray.push(lineY) : "";
		data.pattern.addition.xy ? patternArray.push(additionXY) : "";
		data.pattern.addition.yx ? patternArray.push(additionYX) : "";
		data.pattern.subtraction.xy ? patternArray.push(subtractionXY) : "";
		data.pattern.subtraction.yx ? patternArray.push(subtractionYX) : "";
		data.pattern.grid ? patternArray.push(grid) : "";
	}
	
}

function generateMap(){
	const scale = (data.canvas.scale * 32) / 10;
	const ratio = data.canvas.drawingChance * 10;

	setShapeArray();
	setPatternArray();

	ctx.globalCompositeOperation = "normal";

	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, data.canvas.size, data.canvas.size);

	ctx.globalCompositeOperation = "lighten";

	for (let y = -scale; y < data.canvas.size; y+=scale) {
		for (let x = -scale; x < data.canvas.size; x+=scale) {
			if(ratio >= rand(1, 1000)){
				const color = rand(data.canvas.brightness, 255);
				const shapeTemp = rand(0, shapeArray.length-1);
				let patterning; 

				if(patternArray){
					patterning = rand(1, 5);	
				} else {
					patterning = 10;
				}

				if(patterning == 1){
					const a = x;
					const b = y;
					const patternTemp = rand(0, patternArray.length-1);

					patternArray[patternTemp](color, x, y, scale, shapeTemp, a, b, data.pattern.maxLength)

					x = a;
					y = b;
				} else {
					shapeArray[shapeTemp](color, x, y, scale, data.canvas.break);
				}
			}
		}
		
	}

	ctx.globalCompositeOperation = "normal";
	const sourceCanvas = document.getElementById("heightCanvas");
	ctx.drawImage(sourceCanvas, 0, 0);
}

function drawBoxFilled(color, x, y, scale){
	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
	ctx.fillRect(x + scale/4, y + scale/4, scale/2, scale/2)
}

function drawBoxOutlined(color, x, y, scale){
	ctx.strokeStyle = "rgb(" + color + "," + color + "," + color + ")";
	ctx.lineWidth = scale / rand(16, 32);
	ctx.strokeRect(x + scale/4, y + scale/4, scale/2, scale/2)
}

function drawCircleFilled(color, x, y, scale){
	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
	
	if(!data.canvas.break){
		ctx.beginPath()
	}
	
	ctx.arc(x + scale/2, y + scale/2, scale/4, 0, 2 * Math.PI);
	
	if(!data.canvas.break){
		ctx.closePath()
	}

	ctx.fill();
}

function drawCircleOutlined(color, x, y, scale){
	ctx.strokeStyle = "rgb(" + color + "," + color + "," + color + ")";

	if(!data.canvas.break){
		ctx.beginPath()
	}
	
	ctx.arc(x + scale/2, y + scale/2, scale/4, 0, 2 * Math.PI);
	ctx.lineWidth = scale / rand(16, 32);

	if(!data.canvas.break){
		ctx.closePath()
	}

	ctx.stroke();
}

function drawDiamondFilled(color, x, y, scale){
	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";

	if(!data.canvas.break){
		ctx.beginPath()
	}

	ctx.moveTo(x + scale/2, y + scale/8);
	ctx.lineTo(x + scale/8, y + scale/2);
	ctx.lineTo(x + scale/2, y + scale - scale/8);
	ctx.lineTo(x + scale - scale/8, y + scale/2);

	if(!data.canvas.break){
		ctx.closePath()
	}

	ctx.fill();
}

function drawDiamondOutlined(color, x, y, scale){
	ctx.strokeStyle = "rgb(" + color + "," + color + "," + color + ")";
	ctx.lineWidth = scale / rand(16, 32);

	if(!data.canvas.break){
		ctx.beginPath()
	}

	ctx.moveTo(x + scale/2, y + scale/8);
	ctx.lineTo(x + scale/8, y + scale/2);
	ctx.lineTo(x + scale/2, y + scale - scale/8);
	ctx.lineTo(x + scale - scale/8, y + scale/2);

	if(!data.canvas.break){
		ctx.closePath()
	}

	ctx.stroke();
}

function lineX(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		shapeArray[shapeTemp](color, x, y, scale);
		x = x + scale * 2
	}
}

function lineY(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		shapeArray[shapeTemp](color, x, y, scale);
		y = y + scale * 2
	}
}
function additionXY(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		for (let j = 0; j < rand(1, patternMax); j++) {
			shapeArray[shapeTemp](color, x, y, scale);
			y = y + scale * 2
		}
		y = b;
		x = x + scale *2;
	}
	x = a;
}
function additionYX(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		for (let j = 0; j < rand(1, patternMax); j++) {
			shapeArray[shapeTemp](color, x, y, scale);
			x = x + scale * 2
		}
		x = a;
		y = y + scale *2;
	}
	y = b;
}

function subtractionXY(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		for (let j = 0; j < rand(1, patternMax); j++) {
			shapeArray[shapeTemp](color, x, y, scale);
			y = y - scale * 2
		}
		y = b;
		x = x - scale * 2;
	}
	x = a;
}
function subtractionYX(color, x, y, scale, shapeTemp, a, b, patternMax){
	for (let i = 0; i < rand(1, patternMax); i++) {
		for (let j = 0; j < rand(1, patternMax); j++) {
			shapeArray[shapeTemp](color, x, y, scale);
			x = x - scale * 2
		}
		x = a;
		y = y - scale *2;
	}
	y = b;
}
function grid(color, x, y, scale, shapeTemp, a, b, patternMax){
	const randomNumber = rand(1, patternMax);
	for (let i = 0; i < randomNumber; i++) {
		for (let j = 0; j < randomNumber; j++) {
			shapeArray[shapeTemp](color, x, y, scale);
			x = x + scale * 2
		}
		x = a;
		y = y + scale *2;
	}
	y = b;
}