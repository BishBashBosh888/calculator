let number1 = "";
let number2 = "";
let operator = null;
let result;

let input = document.querySelector(".input");
let output = document.querySelector(".output");

function updateInput(){
    input.textContent = number1;
}

function add(num1,num2){

}

function subtract(num1,num2){

}

function multiply(num1,num2){

}

function divide(num1,num2){

}

function operate(num1, num2){
    
}

function resetIO(){
    number1 = "";
    number2 = "";
    operator = null;
    result = null;
    input.textContent = "";
    output.textContent = "";
}

document.querySelectorAll(".numbers button").forEach((button) =>{
    button.addEventListener("click", () =>{
        number1 += button.textContent;
        updateInput();
    })
});

document.querySelectorAll(".operators button").forEach((button) =>{
    button.addEventListener("click", () =>{
        if (number1 && !operator) {
            operator = button.textContent;
            number1 += " " + operator + " ";
            updateInput();
        }
    })
});


