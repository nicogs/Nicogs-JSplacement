const dCan = document.createElement("canvas");
dCan.width = data.canvas.size / data.canvas.gridSize;
dCan.height = data.canvas.size / data.canvas.gridSize;
const dtx = dCan.getContext("2d");
dtx.translate(dCan.width/2, dCan.height/2);

let parts = [];

function setUltra(){
	let bases = [];
	let addons = [];
	for (let i = 0; i < 3; i++) {
		const img  = new Image();
		img.src = "./img/ultra/base_" + i + ".png"; 
		bases.push(img);
	}
	for (let i = 0; i < 6; i++) {
		const img  = new Image();
		img.src = "./img/ultra/addon_" + i + ".png"; 
		addons.push(img);
	}
	parts.push(bases);
	parts.push(addons);
}

setUltra();

function generateMap(){
	ctx.globalCompositeOperation = "normal";
	ctx.fillStyle = "#000000"
	ctx.fillRect(0, 0, data.canvas.size, data.canvas.size);

	for (let i = 0; i < data.canvas.gridSize; i++) {
		for (let j = 0; j < data.canvas.gridSize; j++) {
			const imgBase = parts[0][rand(0, parts[0].length-1)];
			dtx.fillRect(dCan.width/-2, dCan.height/-2, dCan.width, dCan.height);
			dtx.drawImage(imgBase, dCan.width/-2, dCan.height/-2, dCan.width, dCan.height)

			if(rand(1, 1000) >= 150){
				const imgAddon = parts[1][rand(0, parts[1].length-1)];
				dtx.drawImage(imgAddon, dCan.width/-2, dCan.height/-2, dCan.width, dCan.height)
			}

			const angle = rand(0, 3) * 90
			if(angle != 0){
				dtx.rotate(angle * Math.PI/180)
			}

			ctx.drawImage(dCan, j * (data.canvas.size/data.canvas.gridSize), i * (data.canvas.size/data.canvas.gridSize), data.canvas.size/data.canvas.gridSize, data.canvas.size/data.canvas.gridSize)
			
		}
		
	}

	ctx.globalCompositeOperation = "normal";
	const sourceCanvas = document.getElementById("heightCanvas");
	ctx.drawImage(sourceCanvas, 0, 0);

}

