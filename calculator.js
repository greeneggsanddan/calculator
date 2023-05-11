let operand_1 = 0;
let operand_2 = 0;
let operator = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b,) {
    switch(operator) {
        case "add": add(a, b);
        case "subtract": subtract(a, b);
        case "multiply": multiply(a, b);
        case "divide": divide(a, b); 
    }
}