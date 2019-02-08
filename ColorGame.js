var numOfSquares = 6;
var colors = [];

//Math.floor(Math.random() * 256)
//returns random number between 0 and 255
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
  for(var i = 0; i < modeButtons.length; i++)
  {
    modeButtons[i].addEventListener("click", function()
    {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy")
      { numOfSquares = 3; }
      else
      { numOfSquares = 6; }
      reset();
    });
  }
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].addEventListener("click", function()
    {
      if(this.style.backgroundColor === pickedColor)
      {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      }
      else
      {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  reset();
}

function reset()
{
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++)
  {
    if(colors[i])
    {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
    else
    {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function()
{
  reset();
});

function changeColors(inColor)
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = inColor;
  }
}

function pickColor()
{
  return colors[Math.floor(Math.random()*colors.length)];
}

function randomRGBColor()
{
  return "rgb(" + Math.floor(Math.random() * 256) + 
           ", " + Math.floor(Math.random() * 256) + 
           ", " + Math.floor(Math.random() * 256) + ")";
}

function generateRandomColors(num)
{
  var give = [];
  for(var i = 0; i < num; i++)
  {
    give.push(randomRGBColor());
  }
  return give;
}