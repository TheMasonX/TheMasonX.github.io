let numbers = { 69, 420 };

window.onload = function onLoad() {
	// Store list of entries by category name
	for (let i = 0; i < category_names.length; i ++) {
		name = category_names[i];
		categories[name] = getCategory(name);
	}
}

function generate() {
	reset();
	let template = pickRandom('template');
	let result = fillInTemplate(template);
	result = formatOutput(result);
	document.getElementById("content").innerHTML = result;
}