import { add } from './packages/add.js';
import { div } from './packages/div.js';
import { mult } from './packages/mult.js';
import { sub } from './packages/sub.js';

const display = document.getElementById('display');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.digit, .operator');
const equalB = document.getElementById('equals');
const clearB = document.getElementById('clear');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');

        display.value += value;
    });
});

clearB.addEventListener('click', () => {
    display.value = '';
});

equalB.addEventListener('click', () => {
    const data = display.value;
    
    if (data === "") return; 

    let tokens = [];
    let currentN = "";

    for (let i = 0; i < data.length; i++) {
        const char = data[i];

        if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (currentN !== "") {
                tokens.push(Number(currentN));
                currentN = "";
            }
            tokens.push(char);
        } else {
            currentN += char;
        }
    }
    
    if (currentN !== "") tokens.push(Number(currentN));

    while (tokens.includes('*') || tokens.includes('/')) {
        let index = tokens.findIndex(i => i === '*' || i === '/');
        
        let num1 = tokens[index - 1];
        let operator = tokens[index];
        let num2 = tokens[index + 1];
        let res = 0;

        if (operator === '*') res = mult(num1, num2);
        if (operator === '/') res = div(num1, num2);

        tokens.splice(index - 1, 3, res);
    }

    while (tokens.includes('+') || tokens.includes('-')) {
        let index = tokens.findIndex(i => i === '+' || i === '-');
        
        let num1 = tokens[index - 1];
        let operator = tokens[index];
        let num2 = tokens[index + 1];
        let res = 0;

        if (operator === '+') res = add(num1, num2);
        if (operator === '-') res = sub(num1, num2);

        tokens.splice(index - 1, 3, res);
    }

    result.value = tokens[0];
});
