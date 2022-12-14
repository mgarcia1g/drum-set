for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { // looping through the document object model for how many times theres a class with name drum
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { //adding an event listener to specific element in loop with class drum on it and passing an anonymous function to give an alert when its clicked

        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default: console.log("default triggered")
        }

    })
}
document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        let sound = new Audio("sounds/crash.mp3")
        sound.play();
    } else if (event.key === "a") {
        let sound = new Audio("sounds/kick-bass.mp3")
        sound.play();
    } else if (event.key === "s") {
        let sound = new Audio("sounds/snare.mp3")
        sound.play();
    } else if (event.key === "d") {
        let sound = new Audio("sounds/tom-1.mp3")
        sound.play();
    } else if (event.key === "j") {
        let sound = new Audio("sounds/tom-2.mp3")
        sound.play();
    } else if (event.key === "k") {
        let sound = new Audio("sounds/tom-3.mp3")
        sound.play();
    } else if (event.key === "l") {
        let sound = new Audio("sounds/tom-4.mp3")
        sound.play();
    } 
    
})



//HIGHER ORDER FUNCTION
// function add(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1,num2){
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1/num2;
// }

// function calculator(num1,num2, op){
//     return op(num1,num2);
// }
// console.log(calculator(1,2,multiply))
// let audio = new Audio(src="sounds/tom--1.mp3");
// audio.play();