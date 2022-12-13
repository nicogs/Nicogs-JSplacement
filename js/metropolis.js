let randomNumbers = [];


function metropolis() {
	// refresh();
	ctx.translate(data.canvas.size/2, data.canvas.size/2);
	setRandomNumbers();
	generateMetropolis();
}

function generateMetropolis(){
	ctx.globalCompositeOperation = "normal";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(-data.canvas.size, data.canvas.size, data.canvas.size*2, data.canvas.size*2);

	for (let i = 0; i < randomNumbers[0]; i++) {
		drawBuildings(96,64,1,0,32);
		
	}
	for (let i = 0; i < randomNumbers[1]; i++) {
		drawBuildings(75,54,1.15,0,64);
		
	}
	for (let i = 0; i < randomNumbers[2]; i++) {
		drawBuildings(64,32,1.5,0,96);
		
	}
	ctx.globalCompositeOperation = "difference";

	for (let i = 0; i < randomNumbers[3]; i++) {
		drawBuildings(64,32,3,0,128);
	}
	for (let i = 0; i < randomNumbers[4]; i++) {
		drawBuildings(256,96,1,64,100);
	}

	ctx.globalCompositeOperation = "normal";

	for (let i = 0; i < randomNumbers[5]; i++) {
		drawBuildings(96,32,4,128,169);
	}
	for (let i = 0; i < randomNumbers[6]; i++) {
		drawBuildings(64,28,6,0,255);
	}
	ctx.globalCompositeOperation = "normal";
	ctx.rotate(rand(0,360)*Math.PI/180);

	var sourceCanvas = document.getElementById("heightCanvas");
	ctx.drawImage(sourceCanvas, data.canvas.size/-2, data.canvas.size/-2);
}

function drawBuildings(min, max, range, width, height){
	const color = rand(width, height);
	ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";

	const x = rand(-data.canvas.size/2, data.canvas.size/2) / range;
	const y = rand(-data.canvas.size/2, data.canvas.size/2) / range;
	const sx = rand(data.canvas.size/min, data.canvas.size/max);
	const sy = rand(data.canvas.size/min, data.canvas.size/max);

	ctx.fillRect(x, y, sx, sy);
	ctx.rotate(rand(0,360) * Math.PI/180);
}

function setRandomNumbers(){
	randomNumbers = [];
	randomNumbers.push(rand(0,5000))
	randomNumbers.push(rand(0,1250))
	randomNumbers.push(rand(0,1250))

	randomNumbers.push(rand(0,250))
	randomNumbers.push(rand(0,750))

	randomNumbers.push(rand(0,350))
	randomNumbers.push(rand(0,150))
}