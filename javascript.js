// Query Selectors 
const display = document.querySelector('.display');
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');
const buttonSix = document.querySelector('.six');
const buttonSeven = document.querySelector('.seven');
const buttonEight = document.querySelector('.eight');
const buttonNine = document.querySelector('.nine');
const buttonTen = document.querySelector('.ten');
const buttonPlus = document.querySelector('.plus');
const buttonSubstract = document.querySelector('.subtract');
const buttonMultiply = document.querySelector('.multiply');
const buttonDivide = document.querySelector('.divide');
const buttonClear = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonZero = document.querySelector('.zero');
const buttonPoint = document.querySelector('.point');
const buttonEqual = document.querySelector('.equal');


// Event Listeners // 

// clear button
buttonClear.addEventListener('click', () => {
    location.reload();
})

// button Delete
buttonDelete.addEventListener('click', () =>  {
    log.textContent = log.textContent.slice(0,-1); 
}); 

// button Multiply
buttonMultiply.addEventListener('click', () =>  {
    log.textContent += "*";
}); 

// button Divide
buttonDivide.addEventListener('click', () =>  {
    log.textContent += "/";
}); 

// button Add
buttonPlus.addEventListener('click', () =>  {
    log.textContent += "+";
}); 

// button Subtract
buttonSubstract.addEventListener('click', () =>  {
    log.textContent += '-';
});

// button one
buttonOne.addEventListener('click', () =>  {
    log.textContent += 1 // += is how we are going to string together numbers. 
}); 

// button two
buttonTwo.addEventListener('click', () =>  {
    log.textContent += 2
}); 

// button three
buttonThree.addEventListener('click', () =>  {
    log.textContent += 3
}); 

// button four
buttonFour.addEventListener('click', () =>  {
    log.textContent += 4
}); 

// button five
buttonFive.addEventListener('click', () =>  {
    log.textContent += 5
}); 

// button six
buttonSix.addEventListener('click', () =>  {
    log.textContent += 6
}); 

// button seven
buttonSeven.addEventListener('click', () =>  {
    log.textContent += 7
}); 

// button eight
buttonEight.addEventListener('click', () =>  {
    log.textContent += 8
}); 

// button nine
buttonNine.addEventListener('click', () =>  {
    log.textContent += 9
}); 

// button Zero
buttonZero.addEventListener('click', () =>  {
    log.textContent += 0
}); 

// button point
buttonPoint.addEventListener('click', () =>  {
    log.textContent += ".";
}); 


// display output 
const log = document.getElementById('display'); // creating a way to log outputs 

// Button Equal
buttonEqual.addEventListener('click', () => {
    const expression = log.textContent;
    const tokens = tokenize(expression);
    const result = evaluate(tokens);
    log.textContent = result;// Or any other result from evaluation
});

function tokenize(expression) {
    const tokens = [];
    let currentNumber = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (isDigit(char) || char === '.') {
            currentNumber += char;
        } else if (isOperator(char)) {
            if (currentNumber !== '') {
                tokens.push(currentNumber);
                currentNumber = '';
            }
            tokens.push(char);
        }
    }

    if (currentNumber !== '') {
        tokens.push(currentNumber);
    }

    return tokens;
}

function isDigit(char) {
    return /\d/.test(char);
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function evaluate(tokens) {
    let resultTokens = [];
    let i = 0;

    while (i < tokens.length) {
        if (tokens[i] === "*" || tokens[i] === "/") {
            let prevNum = parseFloat(resultTokens[resultTokens.length - 1]);
            let nextNum = parseFloat(tokens[i + 1]);

            let result;
            if (tokens[i] === "*") {
                result = prevNum * nextNum;
            } else if (tokens[i] === "/") {
                result = prevNum / nextNum;
            }

            resultTokens[resultTokens.length - 1] = result;  // Replace previous number with result
            i += 2;  // Skip over the operator and next number
        } else {
            resultTokens.push(tokens[i]);  // Push numbers or operators that are not * or /
            i++;
        }
    }
    
    return resultTokens;
}








