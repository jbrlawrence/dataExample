// from our JSON file we are creating a variable DATA that we can use to access the climate data
console.log(DATA)

function fillTable(){
	// get the table element from our HTML
	// https://www.w3schools.com/jsref/dom_obj_table.asp
	let tab = document.getElementById("myTable");
	// creating the header row and cells
	let header = tab.createTHead();
	let row = header.insertRow(0);
	let column1 = row.insertCell(0);
	let column2 = row.insertCell(1);
	column1.innerHTML = "<b>Date</b>";
	column2.innerHTML = "<b>Rainfall</b>";
	// looping through the data and adding rows/cells for each entry
	for (let i = 0; i < DATA.features.length; i++){
		let r = tab.insertRow(i+1);
		let c1 = r.insertCell(0);
		let c2 = r.insertCell(1);
		c1.innerHTML = DATA.features[i].properties.date;
		// getting the rainfall data, and checking if it exists
		let rain = DATA.features[i].properties.rain__pluie;
		if (rain){
		c2.innerHTML = `${rain} mm`;}
		else{
			c2.innerHTML = "no data";
		}
	}

}
