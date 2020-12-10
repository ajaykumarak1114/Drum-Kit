for(var i=0; i<document.getElementsByClassName("drum").length; i++)
{
  document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);

}
function handleClick()
{
  this.style.color="white";
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}
