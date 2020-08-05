var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickRandomColor();

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");

var h1=document.querySelector("h1");


for(var i=0;i<squares.length;i++){
	//add intial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor= this.style.backgroundColor;
		
		//compare color of clicked square to the picked color
		if(clickedColor===pickedColor){
			messageDisplay.textContent="CORRECT!!!";	//display correct on guessing right
			resetButton.textContent= "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else{
			this.style.backgroundColor="#232323";   //to fade out the wrong color to match the background color
			messageDisplay.textContent="Try Again";  //display try again on guessing wrong
		}
	});
}


				//***THE WHITE STRIP BUTTONS ZONE***

var easyBtn=document.querySelector("#easyBtn");
easyBtn.addEventListener("click",function(){
	//to toggle the button on and off
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares=3;
	//to pick new 3 colors
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from the selected 3 colors
	pickedColor=pickRandomColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//to display only 3 squares and hide the bottom three squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display='none';
		}
	}

});

var hardBtn=document.querySelector("#hardBtn");
hardBtn.addEventListener("click",function(){
	//to toggle the button on and off
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares=6;
		//to pick new 6 colors
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from the selected 3 colors
	pickedColor=pickRandomColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//to display all 6 squares 
	for(var i=0; i<squares.length; i++){
			squares[i].style.background=colors[i];
			squares[i].style.display='block';	
	}

});

var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){

	this.textContent='New Colors'
	messageDisplay.textContent='';
	//generate all new colors
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor=pickRandomColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//change color of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="steelblue";
});

			//WHITE STRIP BUTTON ZONE ENDS




//TO CHANGE THE COLOR OF ALL THE REMAINING SQUARES TO THE CORRECT COLOR, WHEN WE HIT THE CORRECT COLOR
function changeColors(color){
	//loop through all squares
	for(var i=0;i<colors.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;	//use squares array only
	}
}


function pickRandomColor(){
	var random=Math.floor(Math.random() * colors.length) 		//to pick random color, Math.floor() gives a whole number, Math.random gives a decimal value in 0.13121..something, so to get a random value between 1-6 use Math.random * 6 and then apply floor on it
	return colors[random];
}

//TO GENERATE AN ARRAY OF RANDOM COLORS
function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

//TO GENERATE A SINGLE RANDOM COLOR
function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random() * 256);

	//pick a green from 0 to 255
	var g=Math.floor(Math.random() * 256);

	//pick a blue from 0 to 255 
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; // spaces should be correct
}