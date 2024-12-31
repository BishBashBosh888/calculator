let currentDisplay = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");

function updateDisplay(){
    inputDisplay.textContent = currentDisplay;
}

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    if (num2 === 0) {
        outputDisplay.textContent = "Nice try! Can't divide by 0.";
        return "Cannot divide by 0";
    }
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error";
    }
}

function resetIO(){
    currentDisplay = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    inputDisplay.textContent = "";
    outputDisplay.textContent = "";
}

document.querySelectorAll(".numbers button").forEach((button) =>{
    button.addEventListener("click", () => {
        if (currentOperator && firstOperand !== null) {
            currentDisplay += button.textContent;
            secondOperand = parseFloat(currentDisplay);
        } else {
            currentDisplay += button.textContent;
            firstOperand = parseFloat(currentDisplay);
        }
        updateDisplay();
    });
});

document.querySelectorAll(".operators button").forEach((button) =>{
    button.addEventListener("click", () =>{
        if (button.classList.contains("operate")) {
            if (firstOperand !== null && currentOperator && secondOperand !== null) {
                const result = operate(currentOperator, firstOperand, secondOperand);
                outputDisplay.textContent = Math.round(result * 1000) / 1000;
                firstOperand = result;
                secondOperand = null;
                currentDisplay = "";
                currentOperator = null;
            }
        } else if (button.classList.contains("clear")) {
            clearDisplay();
        } else {
            if (currentOperator && firstOperand !== null && secondOperand !== null) {
                const result = operate(currentOperator, firstOperand, secondOperand);
                outputDisplay.textContent = Math.round(result * 1000) / 1000;
                firstOperand = result;
                secondOperand = null;
            }
            currentOperator = button.textContent;
            currentDisplay = "";
        }
        updateDisplay();
    })
});


