let operand_1 = null;
let operator = null;
let displayValue = "0";
let readyToOperate = false;
let isNextOperand = true;
const bottomDisplay = document.querySelector("#bottom-display");

function add(a, b) {
    return Math.round(a * 100000 + b * 100000) / 100000;
}

function subtract(a, b) {
    return Math.round(a * 100000 - b * 100000) / 100000;
}

function multiply(a, b) {
    return Math.round(a * b * 100000) / 100000;
}

function divide(a, b) {
    return Math.round(a * 100000 / b) /100000;
}

function operate(operator, a, b,) {
    switch(operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
}

function clear() {
    readyToOperate = false;
    isNextOperand = true;
    operator = null;
    operand_1 = null;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        if (isNextOperand) { //Starts a new operand
            displayValue = e.target.value;
            isNextOperand = false;
        } else {    //Continues existing operand
            if (displayValue == "0") {  //Prevents multiple starting '0's
                displayValue = e.target.value;
            } else {
                if (displayValue.length < 12) displayValue += e.target.value;
            }
        }
        if (operator != null) readyToOperate = true;    //Checks if there was a clear or an operation
        bottomDisplay.textContent = displayValue;
        console.log(e.target.value);
    });
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (isNextOperand) {
        displayValue = "0.";
        isNextOperand = false;
    } else {
        if(displayValue.toString().includes(".")) return;
        displayValue += ".";
    }
    console.log(".");
    bottomDisplay.textContent = displayValue;
});

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", e => {
        if (readyToOperate) {
            operand_1 = operate(operator, operand_1, Number(displayValue));
            displayValue = operand_1;
            bottomDisplay.textContent = displayValue;
            readyToOperate = false;
        } else {    //prepare for 2nd operand
            operand_1 = Number(displayValue);
        }
        operator = e.target.value;
        console.log(`${operand_1} ${operator}`);
        isNextOperand = true;
    });
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    if (readyToOperate) {
        displayValue = operate(operator, operand_1, Number(displayValue));
        console.log(`= ${displayValue}`);
        bottomDisplay.textContent = displayValue;
        clear();
    }
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    displayValue = "0";
    bottomDisplay.textContent = displayValue;
    clear();
});