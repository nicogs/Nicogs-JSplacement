document.getElementById("presetEssential").addEventListener("click", setPresetEssential);
document.getElementById("presetEsstialTwo").addEventListener("click", setPresetSecondEssential);
document.getElementById("presetMinimal").addEventListener("click", setPresetMinimal);
document.getElementById("presetGnarly").addEventListener("click", setPresetGnarly);
document.getElementById("presetDotGrid").addEventListener("click", setPresetNotDotGrid);

function setPresetEssential() {
	data.canvas.iterations = 1390;
	data.canvas.brightness = 27;

	data.box.active = false;

	data.transparantBox.active = true
	data.transparantBox.scale = 178;
	data.transparantBox.brightness.min = 16;
	data.transparantBox.brightness.max = 36;
	data.transparantBox.alpha.min = 68;
	data.transparantBox.alpha.max = 92;

	data.grid.active = true;
	data.grid.scale = 175;
	data.grid.brightness.min = 173;
	data.grid.brightness.max = 214;
	data.grid.spacing = 172;
	data.grid.amount = 5;
	
	data.columns.active = true;
	data.columns.scale = 97;
	data.columns.brightness.min = 74;
	data.columns.brightness.max = 181;
	data.columns.spacing = 667;
	data.columns.amount = 10;

	data.rows.active = true;
	data.rows.scale = 55;
	data.rows.brightness.min = 95;
	data.rows.brightness.max = 98;
	data.rows.spacing = 101;
	data.rows.amount = 3;

	data.lines.active = true;
	data.lines.width = 79;
	data.lines.brightness.min = 138;
	data.lines.brightness.max = 22;

	setFormData();
	generateMap();
}

function setPresetSecondEssential() {
	data.canvas.iterations = 1960;
	data.canvas.brightness = 179;

	data.box.active = false;

	data.transparantBox.active = true
	data.transparantBox.scale = 144;
	data.transparantBox.brightness.min = 27;
	data.transparantBox.brightness.max = 27;
	data.transparantBox.alpha.min = 15;
	data.transparantBox.alpha.max = 67;

	data.grid.active = false;

	data.columns.active = true;
	data.columns.scale = 126;
	data.columns.brightness.min = 18;
	data.columns.brightness.max = 168;
	data.columns.spacing = 372;
	data.columns.amount = 6;

	data.rows.active = true;
	data.rows.scale = 62;
	data.rows.brightness.min = 121;
	data.rows.brightness.max = 148;
	data.rows.spacing = 144;
	data.rows.amount = 3;

	data.lines.active = false;

	setFormData();
	generateMap();
}

function setPresetMinimal() {
	data.canvas.iterations = 423;
	data.canvas.brightness = 157;

	data.box.active = true;
	data.box.scale = 197;
	data.box.brightness.min = 73;
	data.box.brightness.max = 74;

	data.transparantBox.active = false;

	data.grid.active = true;
	data.grid.scale = 57;
	data.grid.brightness.min = 98;
	data.grid.brightness.max = 235;
	data.grid.spacing = 673;
	data.grid.amount = 8;

	data.columns.active = true;
	data.columns.scale = 103;
	data.columns.brightness.min = 6;
	data.columns.brightness.max = 74;
	data.columns.spacing = 673;
	data.columns.amount = 10;

	data.rows.active = true;
	data.rows.scale = 189;
	data.rows.brightness.min = 78;
	data.rows.brightness.max = 124;
	data.rows.spacing = 420;
	data.rows.amount = 8;

	data.lines.active = true;
	data.lines.width = 13;
	data.lines.brightness.min = 35;
	data.lines.brightness.max = 197;

	setFormData();
	generateMap();

}

function setPresetGnarly() {
	data.canvas.iterations = 1970;
	data.canvas.brightness = 252

	data.box.active = false;

	data.transparantBox.active = true
	data.transparantBox.scale = 110;
	data.transparantBox.brightness.min = 13;
	data.transparantBox.brightness.max = 20;
	data.transparantBox.alpha.min = 3;
	data.transparantBox.alpha.max = 38;

	data.grid.active = true;
	data.grid.scale = 121;
	data.grid.brightness.min = 39;
	data.grid.brightness.max = 245;
	data.grid.spacing = 815;
	data.grid.amount = 7;
	
	data.columns.active = false;

	data.rows.active = true;
	data.rows.scale = 75;
	data.rows.brightness.min = 145;
	data.rows.brightness.max = 247;
	data.rows.spacing = 170;
	data.rows.amount = 7;

	data.lines.active = false;


	setFormData();
	generateMap();

}

function setPresetNotDotGrid() {
	data.canvas.iterations = 2000;
	data.canvas.brightness = 255;

	data.box.active = false;

	data.transparantBox.active = true
	data.transparantBox.scale = 100;
	data.transparantBox.brightness.min = 0;
	data.transparantBox.brightness.max = 0;
	data.transparantBox.alpha.min = 0;
	data.transparantBox.alpha.max = 100;

	data.grid.active = true;
	data.grid.scale = 50;
	data.grid.brightness.min = 0;
	data.grid.brightness.max = 255;
	data.grid.spacing = 500;
	data.grid.amount = 10;

	data.columns.active = true;
	data.columns.scale = 10;
	data.columns.brightness.min = 0;
	data.columns.brightness.max = 255;
	data.columns.spacing = 990;
	data.columns.amount = 10;

	data.rows.active = true;
	data.rows.scale = 10;
	data.rows.brightness.min = 0;
	data.rows.brightness.max = 255;
	data.rows.spacing = 990;
	data.rows.amount = 10;

	data.lines.active = false;

	setFormData();
	generateMap();

}