let currentX;
let currentY;
let nextX;
let nextY;
let step;
let color;
let lineWidth;

function generateMap(){
	hideAllCanvas();
	canvas.setAttribute("class", "art");

	const bgColor = 0;
	let nextDirection = rand(0, 7);

	ctx.fillStyle = "rgb(" + bgColor + "," + bgColor + "," + bgColor + ")";
	ctx.fillRect(0, 0, data.canvas.size, data.canvas.size);

	for (let l = 0; l < data.layer.count; l++) {
		for (let i = 0; i < data.layer.wires; i++) {
			currentX = data.canvas.size/2 + rand(-data.wire.width.originSpreadMax, data.wire.width.originSpreadMax)
			currentY = data.canvas.size/2 + rand(-data.wire.width.originSpreadMax, data.wire.width.originSpreadMax)

			ctx.beginPath();
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			ctx.moveTo(currentX, currentY)

			while(((currentX >= 0) && (currentX <= data.canvas.size)) && ((currentY >= 0) && (currentY <= data.canvas.size))){
				step = rand(data.wire.step.length.min, data.wire.step.length.max);

				data.wire.step.direction.any ? direction(rand(0, 7), step) : "";
				data.wire.step.direction.cardinal ? direction(rand(0, 3), step) : "";
				data.wire.step.direction.diagonal ? direction(rand(4, 7), step) : "";
				data.wire.step.direction.conical ? conical(nextDirection, step) : "";

				if(data.wire.step.direction.conical){
					nextDirection = nextDirection + rand(-1, 1);

					if(nextDirection < 0){
						nextDirection = 7;
					} else if(nextDirection > 7){
						nextDirection = 0;
					}
				}

				ctx.lineTo(nextX, nextY);
				currentX = nextX;
				currentY = nextY;
			}

			data.wire.color.linear ? (color = Math.ceil(((254/data.layer.count) * l) + 1)) : "";
			data.wire.color.linearInverted ? (color = 255 - Math.floor(((255/data.layer.count) * l))) : "";
			data.wire.color.curve ? (color = Math.ceil((254 / Math.sqrt(data.layer.count)) * Math.sqrt(l)) + 1) : "";
			data.wire.color.curveInverted ? (color = 255 - (Math.ceil((254 / Math.sqrt(data.layer.count)) * Math.sqrt(l)))) : "";
			data.wire.color.random ? (color = rand(1, 255)) : "";

			data.wire.width.mode.linear ? (lineWidth = data.wire.width.max - Math.floor(((data.wire.width.max / data.layer.count) * l ))) : "";
			data.wire.width.mode.linearInverted ? (lineWidth =  Math.ceil(((data.wire.width.max / data.layer.count) * l ) + 1)) : "";
			data.wire.width.mode.curve ? (lineWidth = data.wire.width.max - Math.ceil((((data.wire.width.max - 1) / Math.sqrt(data.layer.count)) * Math.sqrt(l)))) : "";
			data.wire.width.mode.curveInverted ? (lineWidth = Math.ceil((((data.wire.width.max - 1) / Math.sqrt(data.layer.count)) * Math.sqrt(l))) + 1) : "";
			data.wire.width.mode.random ? (lineWidth = rand(1, data.wire.width.max)) : "";

			ctx.strokeStyle = "rgb(" + color + "," + color + "," + color + ")";
			ctx.lineWidth = lineWidth;
			ctx.stroke();
			ctx.closePath();
		}
		
	}

	ctx.globalCompositeOperation = "normal";
	const sourceCanvas = document.getElementById("heightCanvas");
	ctx.drawImage(sourceCanvas, 0, 0);
}

function direction(i , step){
	switch (i) {
		case 0: nextX = currentX; nextY = currentY+step; break; //Up
		case 1: nextX = currentX+step; nextY = currentY; break; //Right
		case 2: nextX = currentX; nextY = currentY-step; break; //Down
		case 3: nextX = currentX-step; nextY = currentY; break; //Left
		case 4: nextX = currentX+(step*0.715); nextY = currentY+(step*0.715); break; //Up Right
		case 5: nextX = currentX+(step*0.715); nextY = currentY-(step*0.715); break; //Right Down
		case 6: nextX = currentX-(step*0.715); nextY = currentY-(step*0.715); break; //Left Down
		case 7:	nextX = currentX-(step*0.715); nextY = currentY+(step*0.715); break; //Left Up
	}
}

function conical(i,step){
	switch (i) {
		case 0: nextX = currentX; nextY = currentY+step; break; //Up
		case 1: nextX = currentX+(step*0.715); nextY = currentY+(step*0.715); break; //Up Right
		case 2: nextX = currentX+step; nextY = currentY; break; //Right
		case 3: nextX = currentX+(step*0.715); nextY = currentY-(step*0.715); break; //Right Down
		case 4: nextX = currentX; nextY = currentY-step; break; //Down
		case 5: nextX = currentX-(step*0.715); nextY = currentY-(step*0.715); break; //Left Down
		case 6: nextX = currentX-step; nextY = currentY; break; //Left
		case 7:	nextX = currentX-(step*0.715); nextY = currentY+(step*0.715); break; //Left Up
	}
}