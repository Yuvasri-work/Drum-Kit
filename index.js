//Detecting button press
var buttonLength = document.querySelectorAll(".drum").length;

for(var i=0; i < buttonLength; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {



   var buttonInnerHTML = this.innerHTML;                 //"this" keyword indicates the "i" value which we are getting inside the for loop while looping each values. It detects the innerHTML of the button pressed
   
   makeSound(buttonInnerHTML);                    //passing the key by calling our makeSound function & passing buttonInnerHTML as parameter to detect the key
   //this above will make sound when clicking on the button
        
   makeAnimation(buttonInnerHTML);
   });

    
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {            //here "keydown" is an event, parameter "event" is an event that triggers the keydown in the entire document

   makeSound(event.key);                        //calling our makeSound function & passing event.key in which it tells the event of which key is pressed. This event contains the property called "key" and tells us which keyboard key was pressed
   makeAnimation(event.key);
});

function makeSound(key) {                    //creating new function to check key values & give sound accordingly

   switch (key) {                            //using switch case to switch among the keys we pressed in the keyboard using key parameter
      case "w":
         var crash = new Audio('sounds/crash.mp3');
         crash.play();                                    //variable created newly above must be used to call the play() method
      break;
 
      case "a":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
      break;
 
      case "s":
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
      break;
 
      case "d":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
      break;
 
      case "j":
         var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play();
      break;
 
      case "k":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
      break;
 
      case "l":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
      break;
    
     default: console.log(buttonInnerHTML);
 
    }
  
   }
   
    
    //adding animation for the keys pressed/clicked
    function makeAnimation(currentKey) {
     var activeButton = document.querySelector("." + currentKey);      //it is similar to querySelector("".w"), in which currentkey gets the value of key pressed
     
     activeButton.classList.add("pressed");            //it adds a predefined css class which contains animation attributes to our variable activeButton
     
     //to add the newly added animation to be removed after few seconds(100 millisecond-0.1 sec), using settimeout
     setTimeout(function() {
      
      activeButton.classList.remove("pressed");   
     }, 100);
     
    }
  





//it checks the buttons having class drum, add event listener i.e, when we click that button, it must display the alert inside function
//it checks the length of class list by selecting buttons having drum class & adding its length
//we can also store "document.querySelectorAll(".drum").length" in a variable & using that variable while comparing with "I" instead of writing fully
//here we're using for loop so that this eventlistener applies to all buttons and also for extra buttons if added