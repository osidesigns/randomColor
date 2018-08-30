
//Variable Declaration for div & buttons
var divBgColor = document.getElementById('bgColor');
var redBtn = document.getElementById('redBtn');
var greenBtn = document.getElementById('greenBtn');
var blueBtn = document.getElementById('blueBtn');

//Variable Declaration for Random Number Color Values
var redColorValue = generateRandomNumber();
var greenColorValue = generateRandomNumber();
var blueColorValue = generateRandomNumber();

(function speak(){

	return 'Hello There Guy!';
});

//Initial Color Set
changeColor();


//Change Color Value on click event
redBtn.onclick = function(){
	redColorValue = generateRandomNumber();
	changeColor();
};

greenBtn.onclick = function(){
	greenColorValue = generateRandomNumber();
	changeColor();
};

blueBtn.onclick = function(){
	blueColorValue = generateRandomNumber();
	changeColor();
};

//Generates a Random Number between 0 and 255 and 
//returns it result
function generateRandomNumber(){
	var randomNumber = Math.floor(Math.random() * 256);
	return randomNumber;
}

//Change Color of Div Background
function changeColor(){
	/*console.log(redColorValue);
	console.log(greenColorValue);
	console.log(blueColorValue);*/

	divBgColor.style.backgroundColor = "rgb(" + redColorValue + ',' + greenColorValue + ',' + blueColorValue + ")";
}