//Boilerplate code for canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Sets the background color for the canvas
ctx.fillStyle = 'rgb(12, 17, 0)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Called everytime the window is resized
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//Adds event listener to the window
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

//Create array
var letters = new Array();

//Function to make the letter object
function letter(char, xPos, yPos, speed){
    this.char = char;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
}

//Populate array with letter objects
for (var i = 0; i < 512; i ++){
    letters.push(new letter(String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)), Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), (Math.random()*2)+1));
}

//Draw function called every interval
function draw(){
    ctx.fillStyle = 'rgb(12, 17, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < letters.length; i ++){
        //Set Font
        ctx.font = "large Source Code Pro";

        //Draw letters
        ctx.fillStyle = "#385000";
        ctx.fillText(letters[i].char, letters[i].xPos, letters[i].yPos);

        //Increment height or randomize letter and width
        if (letters[i].yPos > canvas.height){
            letters[i].yPos = 0;
            letters[i].xPos = Math.floor(Math.random() * canvas.width);
            letters[i].char = String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
        }
        else{
            letters[i].yPos += letters[i].speed;
        }
    }
}

//Call draw function every interval
setInterval(draw, 10);