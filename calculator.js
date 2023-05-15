let operand_1 = null;
let operator = null;
let displayValue = "";
let readyToOperate = false;
let isNextOperand = true;
const bottomDisplay = document.querySelector("#bottom-display");

function operate(operator, a, b,) {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        console.log(e.target.value);
        if (isNextOperand) { //Starts a new operand
            displayValue = e.target.value;
            isNextOperand = false;
            if (operator != null) { //Checks if there was a clear or an operation
                readyToOperate = true;
            }
        } else {    //Continues existing operand
            if (displayValue == "0") {  //Prevents a '0' from being added to the start of an operand
                displayValue = e.target.value;
            } else {
                displayValue += e.target.value;
            }
        }
        bottomDisplay.textContent = displayValue;
    });
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if(displayValue.includes(".")) {
        return;
    } else {
        displayValue += "."
        bottomDisplay.textContent = displayValue;
    }
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
        readyToOperate = false;
        isNextOperand = true;
        operator = null;
        operand_1 = null;
    }
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    displayValue = "";
    bottomDisplay.textContent = 0;
    readyToOperate = false;
    isNextOperand = true;
    operator = null;
    operand_1 = null;
});