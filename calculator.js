var resultElements;

window.onload = function(){
	resultElements = document.getElementsByClassName('result');
	setDefaultText();

	document.getElementById('btnCalculate').addEventListener('click', calculateResults);
};

function setDefaultText(){
	var i; 
	for(i = 0; i< resultElements.length; i++){
		var element = resultElements[i];
		element.innerText = element.getAttribute('function') + "(x) = ";
	};
};

function getUserInput(){
	var rawValue = document.getElementById('userInput').value.trim();
	if(rawValue.length == 0){
		throw "You must enter a number"
	};
	var num = Number(rawValue);
	if(isNaN(num)){
		throw rawValue + " is not a number."
	}
	return num;
}

function calculateResults(){
	try{
		var x = getUserInput();
	} catch(e){
		alert("Error: " + e);
		return;
	}
	setDefaultText();

	var i;
	for(i = 0; i<resultElements.length; i++){
		var element = resultElements[i];
		var functionName = element.getAttribute('function');
		var func = Math[functionName];
		var result = func(x);
		element.innerText = element.innerText + " " + result;
	}
	
}

