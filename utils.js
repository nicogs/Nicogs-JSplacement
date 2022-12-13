// GLOBAL VARIABLES

// CANVASES
	const canvas = document.getElementById("heightCanvas");
	const ctx = canvas.getContext("2d");

	const colorCanvas = document.getElementById("colorCanvas");
	const colorCtx = colorCanvas.getContext("2d");

	const normalCanvas = document.getElementById("normalCanvas");
	const normalCtx = normalCanvas.getContext("2d");
	
	function hideAllCanvas(){
		canvas.setAttribute("class", "art invisible");
		normalCanvas.setAttribute("class", "extraCanvas invisible");
		colorCanvas.setAttribute("class", "extraCanvas invisible");
	}


//

function refresh() {
	
	ctx.clearRect(-data.canvas.size*2, -data.canvas.size*2, data.canvas.size*4, data.canvas.size*4);
}

// RANDOM
function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



// On dom Load
document.getElementById("settings").addEventListener('submit', (event) => {
	event.preventDefault();
	getFormData();
	refresh();
	generateMap();
})

document.addEventListener("DOMContentLoaded",() => {
	setFormData();
	showColorOptions();
	navbar();
	refresh();
	generateMap();
});


function navbar() {
	const pages = [
		{
			name: "Classic", 
			file: "index.html"
		},
		{
			name: "2",
			file: "classictwo.html"
		},
		{
			name: "Wyre",
			file: "wyre.html"
		},
		{
			name: "dotGrid",
			file: "dotGrid.html"
		},
		{
			name: "Ultra",
			file: "ultra.html"
		},
	];
	const ul = document.getElementById("navbarItems");

	for (const page of pages) {
		const li = document.createElement("li");
		li.setAttribute("class", "nav-item");
		
		const a = document.createElement("a");
		a.href = "./" + page.file;
		a.setAttribute("class", "nav-link")
		a.textContent = page.name;

		li.append(a)
		ul.append(li)
	}
}