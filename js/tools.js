document.getElementById("toolInvert").addEventListener("click", invert)
document.getElementById("toolShowNormal").addEventListener("click", showNormal)
document.getElementById("toolHide").addEventListener("click", showHeight)

document.getElementById("toolSaveNormal").addEventListener("click", saveNormal)
document.getElementById("toolSaveColor").addEventListener("click", saveColor)


function saveNormal(){
	createNormal();
	downloadImg(getImage("normalCanvas"), "download.png");
}

function saveColor(){
	downloadImg(getImage("colorCanvas"), "download.png");
}

function invert() {
	// Get height map again
	uncolorize();

	ctx.globalCompositeOperation = "difference";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(-data.canvas.cord, -data.canvas.cord, data.canvas.size, data.canvas.size);

	ctx.globalCompositeOperation = "source-over";

}

function createNormal() {
	normalCanvas.width = data.canvas.size;
	normalCanvas.height = data.canvas.size;

	const heightSource = ctx.getImageData(0, 0, data.canvas.size, data.canvas.size);
	const destination = ctx.createImageData( data.canvas.size, data.canvas.size );

	for (let i = 0; i < data.canvas.size*data.canvas.size*4; i+=4) {
		let x1;
		let x2;
		let y1;
		let y2;

		if(i%(data.canvas.size*4) == 0){
			x1 = heightSource.data[i];
			x2 = heightSource.data[i+4];
		}

		else if(i%(data.canvas.size*4) == (data.canvas.size-1)*4){
			x1 = heightSource.data[i-4];
			x2 = heightSource.data[i];
		}

		else{
			x1 = heightSource.data[i-4];
			x2 = heightSource.data[i+4];
		}



		if(i<data.canvas.size*4){
			y1 = heightSource.data[i];
			y2 = heightSource.data[i+data.canvas.size*4];
		}

		else if(i>data.canvas.size*(data.canvas.size-1)*4){
			y1 = heightSource.data[i-data.canvas.size*4];
			y2 = heightSource.data[i];
		}

		else{
			y1 = heightSource.data[i-data.canvas.size*4];
			y2 = heightSource.data[i+data.canvas.size*4];
		}

		destination.data[i] = (x1-x2)+127;
		destination.data[i+1] = (y1-y2)+127;
		destination.data[i+2] = 255;
		destination.data[i+3] = 255;
	}

	normalCtx.putImageData(destination, 0, 0);

}

function showNormal(){
	createNormal();
	hideAllCanvas();
	normalCanvas.setAttribute("class", "extraCanvas");
}

function showColor(){
	hideAllCanvas();
	colorCanvas.setAttribute("class", "extraCanvas");
}

function showHeight(){
	hideAllCanvas();
	canvas.setAttribute("class", "art");
}