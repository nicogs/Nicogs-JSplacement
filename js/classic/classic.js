// Variables
const mainArray = [];
const specialArray = [];

// Main Map generator
function generateMap(){
	ctx.fillStyle = "rgb(" + data.canvas.brightness + "," + data.canvas.brightness + "," + data.canvas.brightness + ")";
	ctx.fillRect(0, 0, data.canvas.size, data.canvas.size)
	
	fillArray();
	
	for (let i = 0; i < data.canvas.iterations; i++) {
		const randomNumber = rand(0,mainArray.length-1);
		mainArray[randomNumber]();
	}

	var sourceCanvas = document.getElementById("heightCanvas");
	sourceCanvas.setAttribute("class", "art");
	ctx.drawImage(sourceCanvas, 0, 0);
}

//Fill Arrays
function fillArray(){
	for (let i = 0; i <= mainArray.length+1; i++) {
		mainArray.pop();
	}
	for (let i = 0; i <= specialArray.length +1; i++) {
		specialArray.pop();
	}
	
	console.log(mainArray)
	data.box.active ? mainArray.push(drawBox) : false;
	data.transparantBox.active ? mainArray.push(drawTransparantBox) : false;
	
	if(data.grid.active || data.columns.active || data.rows.active || data.lines.active){
		mainArray.push(drawSpecial);
	}

	data.grid.active ? specialArray.push(drawGrid) : false;
	data.columns.active ? specialArray.push(drawColumns) : false;
	data.rows.active ? specialArray.push(drawRows) : false;
	data.lines.active ? specialArray.push(drawLines) : false;
}

function drawSpecial(){
	const randomNumber = rand(0,specialArray.length-1);
	specialArray[randomNumber]();
}






// DRAWING

function drawBox(res) {
	const color = rand(data.box.brightness.min, data.box.brightness.max);
	const boxscale = data.box.scale;
	const x = rand((0-(data.canvas.size/16)), data.canvas.size);
	const y = rand((0-(data.canvas.size/16)), data.canvas.size);
	const width = rand((data.canvas.size/16), (data.canvas.size/8))*(data.box.scale/100);
	const height = rand((data.canvas.size/16), (data.canvas.size/8))*(data.box.scale/100);

	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
	ctx.fillRect(x, y, width, height);
}

function drawTransparantBox(){
	const color = rand(data.transparantBox.brightness.min, data.transparantBox.brightness.max);
	const alpha = rand(data.transparantBox.alpha.min, data.transparantBox.alpha.max) / 100;

	const x = rand((0-(data.canvas.size/16)), data.canvas.size);
	const y = rand((0-(data.canvas.size/16)), data.canvas.size);
	const width = rand((data.canvas.size/24), (data.canvas.size/8))*(data.transparantBox.scale/100);
	const height = rand((data.canvas.size/24), (data.canvas.size/8))*(data.transparantBox.scale/100);
	
	ctx.fillStyle = "rgba(" + color + "," + color + "," + color + "," + alpha + ")";

	ctx.fillRect(x, y, width, height);
}

function drawGrid(){
	const color = rand(data.grid.brightness.min, data.grid.brightness.max);

	const gridX = rand(2, data.grid.amount);
	const gridY = rand(2, data.grid.amount);

	const posX = rand((0-(data.canvas.size/16)), data.canvas.size);
	const posY = rand((0-(data.canvas.size/16)), data.canvas.size);

	const gap = (rand((data.canvas.size/256), (data.canvas.size/96)) * (rand(30,100)/100)) * (data.grid.scale/100);

	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";

	for (let y = 0; y < gridY; y++) {
		const newPosY = posY + ((gap*(data.grid.spacing/100)) + gap) * y;
		for (let x = 0; x < gridX; x++) {
			const newPosX = posX + ((gap*(data.grid.spacing/100)) + gap) * x;
			ctx.fillRect(newPosX, newPosY, gap, gap);
			
		}
	}
};

function drawColumns() {
	const color = rand(data.columns.brightness.min, data.columns.brightness.max);

	const gridX = rand(2, data.columns.amount);

	const posX = rand((0-(data.canvas.size/16)), data.canvas.size);
	const posY = rand((0-(data.canvas.size/16)), data.canvas.size);

	const gap = (rand((data.canvas.size/256), (data.canvas.size/96)) * (rand(30,100)/100)) * (data.columns.scale/100);

	const exp = rand(5, 20);

	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";

	for (let x = 0; x < gridX; x++) {
		const newPosX = posX + ((gap*(data.columns.spacing/100)) + gap) * x;
		ctx.fillRect(newPosX, posY, gap, (gap*exp));
		
	}
}

function drawRows() {
	const color = rand(data.rows.brightness.min, data.rows.brightness.max);

	const gridY = rand(2, data.rows.amount);

	const posX = rand((0-(data.canvas.size/16)), data.canvas.size);
	const posY = rand((0-(data.canvas.size/16)), data.canvas.size);

	const gap = (rand((data.canvas.size/256), (data.canvas.size/96)) * (rand(30,100)/100)) * (data.rows.scale/100);

	const exp = rand(5, 20);

	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";

	for (let y = 0; y < gridY; y++) {
		const newPosY = posY + ((gap*(data.rows.spacing/100)) + gap) * y;
		ctx.fillRect(posX, newPosY, (gap*exp), gap);
		
	}
}

function drawLines() {
	const color = rand(data.lines.brightness.min, data.lines.brightness.max);

	const posX = rand((0-(data.canvas.size/16)), data.canvas.size);
	const posY = rand((0-(data.canvas.size/16)), data.canvas.size);

	const gridX = rand(2, 5);
	const lines = rand(1, 15);

	if(posX >= posY){
		ctx.beginPath();
		ctx.moveTo(posX, posY);
		ctx.lineTo(data.canvas.size, posY);

		for (let x = 0; x < gridX; x++) {
			const newPosX = posX + (50 * lines * x);
			const randomNumber = rand(1,2);

			ctx.moveTo(newPosX, posY);

			if(randomNumber ==  1){
				ctx.lineTo(newPosX, 0);
			} else {
				ctx.lineTo(newPosX, data.canvas.size);
			};
		};
	} else {
		ctx.beginPath();
		ctx.moveTo(posX, posY);
		ctx.lineTo(0, posY);

		for (let x = 0; x < gridX; x++) {
			const newPosY = posY + (50 * lines * x);
			const randomNumber = rand(1,2);

			ctx.moveTo(posX, newPosY);

			if(randomNumber ==  1){
				ctx.lineTo(0, newPosY);
			} else {
				ctx.lineTo(data.canvas.size, newPosY);
			};
		};
	}

	ctx.lineWidth = data.lines.width;
		ctx.strokeStyle = "rgb(" + color + "," + color + "," + color + ")";
		ctx.stroke();

}