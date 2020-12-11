// Detecting button press
for(var i=0; i<document.getElementsByClassName("drum").length; i++)
{
  document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);
}
function handleClick()
{
  this.style.color="white";
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detecting keyboard button press
document.addEventListener("keypress", function(event){
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
})


// make sound on button and keyboard press
function makeSound(key){
  switch (key) {
    case "w" :
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a" :
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s" :
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d" :
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j" :
          var crack = new Audio("sounds/crash.mp3");
          crack.play();
        break;

      case "k" :
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;

      case "l" :
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;

    default:
    console.log(innerHTML);
    console.log(event.key);
  }
}

// Button animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed") }, 300);
}
