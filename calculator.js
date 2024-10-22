const screen = document.querySelector('#screen');
const keys = document.querySelector('.calculator-keys');
let currentInput = '';
let previousInput = '';
let operator = '';

keys.addEventListener('click', function(event) {
    const target = event.target;

    if (!target.matches('button')) {
        return;
    }

    // Clear the screen
    if (target.classList.contains('all-clear')) {
        currentInput = '';
        previousInput = '';
        operator = '';
        screen.value = '';
        return;
    }

    // Handle operators
    if (target.classList.contains('operator')) {
        operator = target.value;
        previousInput = currentInput;
        currentInput = '';
        return;
    }

    // Handle equal sign
    if (target.classList.contains('equal-sign')) {
        if (previousInput === '' || currentInput === '') {
            return;
        }
        currentInput = calculate(previousInput, currentInput, operator);
        operator = '';
        previousInput = '';
        screen.value = currentInput;
        return;
    }

    // Handle decimal points and numbers
    if (target.value === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += target.value;
    screen.value = currentInput;
});

function calculate(firstOperand, secondOperand, operator) {
    let result = 0;
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    if (operator === '+') {
        result = firstOperand + secondOperand;
    } else if (operator === '-') {
        result = firstOperand - secondOperand;
    } else if (operator === '*') {
        result = firstOperand * secondOperand;
    } else if (operator === '/') {
        result = firstOperand / secondOperand;
    }

    return result.toString();
}
