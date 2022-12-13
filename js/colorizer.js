

function colorize(gradientId){
	
	// Make the height map invisible, Make the color canvas visible
	hideAllCanvas();
	colorCanvas.setAttribute("class", "extraCanvas");
	
	const paletteCanvas = document.createElement('canvas');
	paletteCanvas.width = 256;
	paletteCanvas.height = 1;
	const paletteCtx = paletteCanvas.getContext("2d");

	const paletteImg = document.getElementById(gradientId);

	paletteCtx.drawImage(paletteImg, 0, 0, 256, 1);

	const heightSource = ctx.getImageData(0, 0, data.canvas.size, data.canvas.size);
	const paletteSource = paletteCtx.getImageData(0, 0, 256, 1);

	const destination = ctx.createImageData(data.canvas.size, data.canvas.size);

	const paletteRed = [];
	const paletteGreen = [];
	const paletteBlue = [];

	for(var i=0; i<=1023; i+=4){
		paletteRed.push(paletteSource.data[i]);
		paletteGreen.push(paletteSource.data[i + 1]);
		paletteBlue.push(paletteSource.data[i + 2]);
	}

	for(var i=0, l=data.canvas.size*data.canvas.size*4; i<l; i+=4){
		destination.data[i] = paletteRed[heightSource.data[i]];
		destination.data[i + 1] = paletteGreen[heightSource.data[i]];
		destination.data[i + 2] = paletteBlue[heightSource.data[i]];
		destination.data[i + 3] = 255;
	}

	colorCtx.clearRect(-data.canvas.size * 2, -data.canvas.size *2, data.canvas.size * 4, data.canvas.size * 4);
	colorCtx.globalCompositeOperation = "source-over";
	colorCtx.putImageData(destination, 0, 0);

}


function uncolorize(){
	canvas.setAttribute("class", "art");
	colorCanvas.setAttribute("class", "extraCanvas invisible");
	colorCtx.clearRect(data.canvas.size * -2, data.canvas.size * -2, data.canvas.size * 4, data.canvas.size * 4);
}


function showColorOptions(){
	
	const colorOptionsElement = document.getElementById("colorOptions");

	for (let i = 1; i <= 20; i++) {
		const col = document.createElement("div");
		col.classList.add("col");
		col.classList.add("col-md-1");

		const img = document.createElement("img")
		img.src = "./img/gradients/gradient_" + i + ".png";
		img.setAttribute("class", "card-img-top gradient");
		img.setAttribute("id", "gradient_" + i);
		img.addEventListener("click", (event) => {
			colorize(event.target.id);
		} )
		
		col.append(img);
		colorOptionsElement.append(col);
	}
}
