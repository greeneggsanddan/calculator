let operand_1 = 0;
let operand_2 = 0;
let operator = "";
let displayValue = "";
let readyToOperate = false;
let isNextOperand = true;
const bottomDisplay = document.querySelector("#bottom-display");

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

function operate(operator, a, b,) {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

// function operate(operator, a, b,) {
//     switch(operator) {
//         case "+": add(a, b);
//         case "-": subtract(a, b);
//         case "*": multiply(a, b);
//         case "/": divide(a, b); 
//     }
// }

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        console.log(e.target.value);
        if (isNextOperand) {
            displayValue = e.target.value;
            bottomDisplay.textContent = displayValue;
            isNextOperand = false;
        } else {
            displayValue += e.target.value;
            bottomDisplay.textContent = displayValue;
        }
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
            operator = e.target.value;
            displayValue = operand_1;
            bottomDisplay.textContent = operand_1;
            isNextOperand = true;
        } else {    //prepare for 2nd operand
            console.log(e.target.value);
            operand_1 = Number(displayValue);
            operator = e.target.value;
            readyToOperate = true;
            isNextOperand = true;
        }
    });
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", (e) => {
    operand_1 = Number(displayValue);
    operator = e.target.value;
});

// const buttons = document.querySelectorAll()

// const zeroBtn = document.querySelector("#zero");
// const oneBtn = document.querySelector("#one");
// const twoBtn = document.querySelector("#two");
// const threeBtn = document.querySelector("#three");
// const fourBtn = document.querySelector("#four");
// const fiveBtn = document.querySelector("#five");
// const sixBtn = document.querySelector("#six");
// const sevenBtn = document.querySelector("#seven");
// const eightBtn = document.querySelector("#eight");
// const nineBtn = document.querySelector("#nine");
// const oneBtn = document.querySelector("#one");
// const oneBtn = document.querySelector("#one");
// const oneBtn = document.querySelector("#one");
// const oneBtn = document.querySelector("#one");
// const oneBtn = document.querySelector("#one");