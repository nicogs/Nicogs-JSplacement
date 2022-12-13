// Main Generator Setting
const blendModes = ["source-over", "source-over", "source-over", "darken", "lighten"];

// Get files of the sprite
let files = [];




function setFiles() {
	files = [];
	let filesBaseUrl = "./img/" + data.canvas.style + "/" + data.canvas.style + "_";

	if(data.canvas.style === "classic2"){
		for (let i = 0; i < 17; i++) {
			const img = new Image();
			img.src = filesBaseUrl + i + ".svg";
			
			files.push(img)
		};
	}
	if(data.canvas.style === "bigdata"){
		for (let i = 0; i < 5; i++) {
			const img = new Image();
			img.src = filesBaseUrl + i + ".svg";
			
			files.push(img)
		};
	}
	if(data.canvas.style === "aggromaxx"){
		for (let i = 0; i < 12; i++) {
			const img = new Image();
			img.src = filesBaseUrl + i + ".svg";
			
			files.push(img)
		};
	}
	if(data.canvas.style === "crappack"){
		for (let i = 0; i < 27; i++) {
			const img = new Image();
			img.src = filesBaseUrl + i + ".svg";
			
			files.push(img)
		};
	}
}


function generateMap() {
	console.dir(data.canvas);
	setFiles();
	refresh();
	ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle = "rgb(" + data.canvas.background.brightness + "," + data.canvas.background.brightness + "," + data.canvas.background.brightness + ")";
	ctx.fillRect(-data.canvas.cord, -data.canvas.cord, data.canvas.size, data.canvas.size);

	const minime = 125 - data.sprite.scale;
	const maxime = minime * 1.5;

	if(data.canvas.background.iterations != "0"){
		let bets = 1;

		for (let i = 1; i <= data.canvas.background.iterations; i++) {
			
			for (let j = -data.canvas.cord; j <= data.canvas.cord; j+=(data.canvas.size/bets)) {
				
				for (let h = -data.canvas.cord; h <= data.canvas.cord; h+=(data.canvas.size/bets)) {

					const randomNumber = rand(0, files.length - 1);
					const img = files[randomNumber];
					ctx.drawImage(img, h, j, data.canvas.size/bets, data.canvas.size/bets)
				}
			}
			bets++;
		}
	}
	
	for (let i = 0; i < data.canvas.iterations; i++) {
		setTimeout(function() {
			let scale;
			let posX;
			let posY;

			if (data.sprite.mode.seamless === true){
				scale = (data.canvas.size/rand(maxime,minime))*rand(10,25);
				posX = rand(-data.canvas.size, data.canvas.size);
				posY = rand(-data.canvas.size, data.canvas.size);
			} else {
				scale = (data.canvas.size/rand(maxime,minime))*rand(10,25);
				posX = rand(-data.canvas.cord-(data.canvas.cord/4), data.canvas.cord);
				posY = rand(-data.canvas.cord-(data.canvas.cord/4), data.canvas.cord);
			}
		

		const randomNumber = rand(0, files.length - 1);
		const img = files[randomNumber];
		const blendMode = rand(0, blendModes.length -1);
		const roota = rand(0,3) * 90;
		if(data.sprite.mode.rotate){
			
			if(roota != 0){
				ctx.rotate(roota * Math.PI/100)
			}
		}
		const flip = rand(0, 1);
		if(data.sprite.mode.mirror){

			if(flip == "0") {
				ctx.scale(-1,1);
			}
		}

		if(data.sprite.mode.blend){
			ctx.globalCompositeOperation = blendModes[blendMode];
		}
		
		ctx.drawImage(img,posX,posY,scale,scale);
		
		if (data.sprite.mode.seamless){
			if((posX + scale >= data.canvas.cord) && (posY + scale >= data.canvas.cord)){
				posX = posX - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posY = posY - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posX = posX + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if((posX <= -data.canvas.cord) && (posY + scale >= data.canvas.cord)){
				posX = posX + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posY = posY - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posX = posX - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if((posX + scale >= data.canvas.cord) && (posY <= -data.canvas.cord)){
				posX = posX - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posY = posY + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posX = posX + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if((posX <= -data.canvas.cord) && (posY <= -data.canvas.cord)){
				posX = posX + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posY = posY + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
				posX = posX - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}


			else if(posX + scale >= data.canvas.cord){
				posX = posX - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if(posX <= -data.canvas.cord){
				posX = posX + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if(posY + scale >= data.canvas.cord){
				posY = posY - data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
			else if(posY <= -data.canvas.cord){
				posY = posY + data.canvas.size;
				ctx.drawImage(img, posX, posY, scale, scale);
			}
		}

		if(data.sprite.mode.mirror){
			if(flip == "0") {
				ctx.scale(-1,1);
			}
		}

		if(data.sprite.mode.rotate){
			if(roota != 0){
				ctx.rotate(-roota * Math.PI/180);
			}
		}

		}, 20);
	}

	const sourceCanvas = document.getElementById("heightCanvas");
	ctx.drawImage(sourceCanvas, -data.canvas.cord, -data.canvas.cord);
}

data.canvas.cord = data.canvas.size/2

ctx.translate(data.canvas.cord, data.canvas.cord);
	