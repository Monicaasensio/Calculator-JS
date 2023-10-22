const allButtons = document.querySelectorAll('button'); //making variable to get all buttons
const calcScreen = document.querySelector('.calcscreen'); //to get text content on screen
const operators = ["+", "-", "*", "/", "."];

let equation = []; //empty list/array
let equationString; //uninitialized variable

function calculate(button) {
    const value = button.textContent
    if (value === "AC") {                       
        equation = [];          //gets an empty array
        calcScreen.textContent = ''; 
    } else if (value === "=") {
        console.log(equationString);
        calcScreen.textContent = eval(equationString);
        equationString = undefined;         //make equation string clear
    } else if (equation.length >= 19) {
        calcScreen.textContent = 'Error: limit reached';
    } else {
        equation.push(value);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
}

//adding a function for each button clicked by user, forwards it to calculate function.
for (const button of allButtons) {
    button.addEventListener('click', function listener() {
        calculate(button)
    })
}


//adding keys 0-9, operators
document.onkeyup = e => {
    if (e.key == '0') {
        equation.push(0);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '1') {
        equation.push(1);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '2') {
        equation.push(2);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '3') {
        equation.push(3);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '4') {
        equation.push(4);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '5') {
        equation.push(5);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '6') {
        equation.push(6);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '7') {
        equation.push(7);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '8') {
        equation.push(8);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '9') {
        equation.push(9);
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '+') {
        equation.push('+');
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '-') {
        equation.push('-');
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '*') {
        equation.push('*');
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '/') {
        equation.push('/');
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
    if (e.key == '.') {
        equation.push('.');
        equationString = equation.join('');
        calcScreen.textContent = equationString;
    }
}

//was not able to figure out operator error
// function clicked(value) {
//     if ((equationString[equationString.length] === operators) && (equationString[equationString.length, -1]  === operators)) {
//         alert('Error: two operators clicked');
//     }
// }


//[4, *, 5]
//'4*5'
//4*5 

