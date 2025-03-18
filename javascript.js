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
const buttonAdd = document.querySelector('.add');
const buttonSubstract = document.querySelector('.subtract');
const buttonMultiply = document.querySelector('.multiply');
const buttonDivide = document.querySelector('.divide');
const buttonClear = document.querySelector('.clear');
const buttonDelete = document.querySelector('.delete');
const buttonZero = document.querySelector('.zero');
const buttonDot = document.querySelector('.dot');
const buttonEqual = document.querySelector('.equal');


// Event Listeners // 

// clear button
buttonClear.addEventListener('click', () => {
    const clear = null;
    log.textContent = clear; 
})

// button Delete
buttonDelete.addEventListener('click', () =>  {
    console.log(buttonDelete); 
    log.textContent - " "; 
}); 

// button Multiply
buttonMultiply.addEventListener('click', () =>  {
    const multiply = "*";
    log.textContent *= multiply; 
}); 
// button Add
buttonDelete.addEventListener('click', () =>  {
    log.textContent += 9
}); 
// button Subtract
buttonDelete.addEventListener('click', () =>  {
    log.textContent += 9
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

// display output 
const log = document.getElementById('display'); // creating a way to log outputs 








