// Get Image from canvas
// Create URL for image
// change name to NicogsPlacement + Settings 
// set url

document.getElementById("heightExport").addEventListener("click",exportHeight )


function exportHeight(){
	downloadImg(getImage("heightCanvas"), "download.png");
}

function downloadImg(url, name){
	const placeholder = document.createElement("a");
	placeholder.download = name;
	placeholder.href = url;

	document.body.appendChild(placeholder);
	placeholder.click();
	document.body.removeChild(placeholder);
	delete placeholder
}

function getImage(target){
	const targetCanvas = document.getElementById(target);
	const imgURL = targetCanvas.toDataURL("image/png");
	return imgURL;
}


function encodeData(){
}
function decodeData(){
	 
}



function encodeBuild(){


	const canvasBuildCode = dataCanvas.iterations + "-" + dataCanvas.brightness + "-" + dataCanvas.color;
	const boxBuildCode = (dataBox.active ? "1" + "-" + dataBox.scale + "-" + dataBox.brightness.min + "-" + dataBox.brightness.max : "0");
	const transparantBoxBuildCode = dataTransparantBox.active ? "1" + "-" + dataTransparantBox.scale + "-" + dataTransparantBox.brightness.min + "-" + dataTransparantBox.brightness.max + "-" + dataTransparantBox.alpha.min + "-" + dataTransparantBox.alpha.max : "0";
	const gridBuildCode = dataGrid.active ? "1"+ "-" + dataGrid.scale + "-" + dataGrid.brightness.min + "-" + dataGrid.brightness.max + "-" + dataGrid.spacing+ "-" + dataGrid.amount : "0";
	const columnsBuildCode = dataColumns.active ? "1"+ "-" + dataColumns.scale + "-" + dataColumns.brightness.min + "-" + dataColumns.brightness.max + "-" + dataColumns.spacing+ "-" + dataColumns.amount : "0";
	const rowsBuildCode = dataRows.active ? "1" + "-" + dataRows.scale + "-" + dataRows.brightness.min + "-" + dataRows.brightness.max + "-" + dataRows.spacing+ "-" + dataRows.amount : "0";
	const linesBuildCode = dataLines.active ? "1" + "-" + dataLines.width  + "-" + dataLines.brightness.min  + "-" + dataLines.brightness.max : "0"; 

	const newBuildCode = canvasBuildCode + "_" + boxBuildCode + "_" + transparantBoxBuildCode + "_" + gridBuildCode + "_" + columnsBuildCode + "_" + rowsBuildCode + "_" + linesBuildCode;

	return newBuildCode;
}

function createBuild(buildCode){
	// Remove the _ & - from the buildCode, creates an arrray per Type, that on his turn has a array per setting
	const buildCodeType = decodeType(buildCode);
	// Translate the array with numbers to the settings
	decodeSettings(buildCodeType[0], buildCodeType[1], buildCodeType[2], buildCodeType[3], buildCodeType[4], buildCodeType[5], buildCodeType[6]);
	setFormData();
	generateMap();
	
}



function decodeType(buildCode){
	const decodedSplitType = buildCode.split("_");
	const decodedSplitSetting = [];


	for (let i = 0; i < decodedSplitType.length; i++) {
		const newDecodedSetting = decodedSplitType[i].split("-");
		decodedSplitSetting.push(newDecodedSetting);
	}

	console.log(decodedSplitSetting)
	return decodedSplitSetting;
}

function decodeSettings(buildCodeCanvas, buildCodeBox, buildCodeTransparantBox, buildCodeGrid, buildCodeColumns, buildCodeRows, buildCodeLines){

	dataCanvas.iterations = buildCodeCanvas[0];
	dataCanvas.brightness = buildCodeCanvas[1];


	// Box [1] in decodedSplitSetting Array
	if(buildCodeBox[0] === "0"){
		dataBox.active = false;

	} else if(buildCodeBox[0] === "1"){
		dataBox.active = true;
		dataBox.scale = buildCodeBox[1]
		dataBox.brightness.min = buildCodeBox[2]
		dataBox.brightness.max = buildCodeBox[3]
	}

	// Transparant Box [2] in decodedSplitSetting Array
	if(buildCodeTransparantBox[0] === "0"){
		dataTransparantBox.active = false;

	} else if(buildCodeTransparantBox[0] === "1"){
		dataTransparantBox.active = true;
		dataTransparantBox.scale = buildCodeTransparantBox[1]
		dataTransparantBox.brightness.min = buildCodeTransparantBox[2]
		dataTransparantBox.brightness.max = buildCodeTransparantBox[3]
		dataTransparantBox.alpha.min = buildCodeTransparantBox[4]
		dataTransparantBox.alpha.max = buildCodeTransparantBox[5]
	}

	// Grid [3] in decodedSplitSetting Array
	if(buildCodeGrid[0] === "0"){
		dataGrid.active = false;

	} else if(buildCodeGrid[0] === "1"){
		dataGrid.active = true;
		dataGrid.scale = buildCodeGrid[1]
		dataGrid.brightness.min = buildCodeGrid[2]
		dataGrid.brightness.max = buildCodeGrid[3]
		dataGrid.spacing = buildCodeGrid[4]
		dataGrid.amount = buildCodeGrid[5]
	}

	// Columns [4] in decodedSplitSetting Array
	if(buildCodeColumns[0] === "0"){
		dataColumns.active = false;

	} else if(buildCodeColumns[0] === "1"){
		dataColumns.active = true;
		dataColumns.scale = buildCodeColumns[1]
		dataColumns.brightness.min = buildCodeColumns[2]
		dataColumns.brightness.max = buildCodeColumns[3]
		dataColumns.spacing = buildCodeColumns[4]
		dataColumns.amount = buildCodeColumns[5]
	}

	// Rows [5] in decodedSplitSetting Array
	if(buildCodeRows[0] === "0"){
		dataRows.active = false;

	} else if(buildCodeRows[0] === "1"){
		dataRows.active = true;
		dataRows.scale = buildCodeRows[1]
		dataRows.brightness.min = buildCodeRows[2]
		dataRows.brightness.max = buildCodeRows[3]
		dataRows.spacing = buildCodeRows[4]
		dataRows.amount = buildCodeRows[5]
	}

	// Lines [6] in decodedSplitSetting Array
	if(buildCodeLines[0] === "0"){
		dataLines.active = false;

	} else if(buildCodeLines[0] === "1"){
		dataLines.active = true;
		linesWidthEl.value = buildCodeLines[1]
		dataLines.brightness.min = buildCodeLines[2]
		dataLines.brightness.max = buildCodeLines[3]
	}
}

function testDecodingBuild(){
	console.log("Encoding build...")
	const testEncodedBuild = encodeBuild();
	console.log("------------------------------")
	console.log("Encoded build: " + testEncodedBuild);

	console.log("==============================")

	console.log("Decoding build...")
	const testDecodeBuild = decodeBuild(testEncodedBuild);
	console.log("------------------------------")
	console.log("Decoded build: " + testDecodeBuild);
	console.log("------------------------------")
}