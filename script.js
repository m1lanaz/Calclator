// Capture the HTML elements
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('#divide, #multiply, #subtract, #plus');
const pointBtn = document.querySelector('#point');
const equalBtn = document.querySelector('#equal');

let currentNumber = ''; // Variable to store the current number
let operator = ''; // Variable to store the selected operator
let runningTotal = 0; // Variable to store the running total

// Update the display with the current number
function updateDisplay() {
  screen.textContent = currentNumber;
}

// Clear the calculator
function clearCalculator() {
  currentNumber = '';
  operator = '';
  runningTotal = 0;
  updateDisplay();
}

// Delete the last entered digit
function deleteDigit() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

// Handle number button clicks
function handleNumberClick(e) {
  const clickedNumber = e.target.textContent;
  currentNumber += clickedNumber;
  updateDisplay();
}

// Handle operator button clicks
function handleOperatorClick(e) {
  if (currentNumber === '') return; // Ignore if no number is entered
  if (operator !== '') calculate(); // Calculate previous operation if operator is already selected
  operator = e.target.textContent;
  runningTotal = parseFloat(currentNumber);
  currentNumber = '';
}

// Handle decimal point button click
function handlePointClick() {
  if (currentNumber.includes('.')) return; // Ignore if decimal point is already present
  currentNumber += '.';
  updateDisplay();
}

// Perform the calculation
function calculate() {
  const currentNum = parseFloat(currentNumber);
  if (operator === '+') {
    runningTotal += currentNum;
  } else if (operator === '-') {
    runningTotal -= currentNum;
  } else if (operator === '*') {
    runningTotal *= currentNum;
  } else if (operator === '÷') {
    runningTotal /= currentNum;
  }
  currentNumber = runningTotal.toString();
  operator = '';
  updateDisplay();
}

// Add event listeners to buttons
clearBtn.addEventListener('click', clearCalculator);
deleteBtn.addEventListener('click', deleteDigit);
numberBtns.forEach(btn => btn.addEventListener('click', handleNumberClick));
operatorBtns.forEach(btn => btn.addEventListener('click', handleOperatorClick));
pointBtn.addEventListener('click', handlePointClick);
equalBtn.addEventListener('click', calculate);