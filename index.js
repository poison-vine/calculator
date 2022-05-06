let firstValue = '';
let secondValue = '';
let operatorVal = '';
let answer = 0;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x,y,operator)
{
    let px = parseInt(x);
    let py = parseInt(y);
    switch(operator){
        case '÷':
            return divide(px,py);
        case 'x':
            return multiply(px,py);
        case '+':
            return add(px,py);
        case '-':
            return subtract(px,py);
    }
}


function numberEntered(number)
{
    if(operatorVal === ''){
        firstValue += number.id;
    }
    else{
        secondValue += number.id;
    }

    let disp = document.querySelector('#display');
    if(disp.innerText === '0')disp.innerText = '';
    disp.innerText += number.id;
}

function operatorEntered(op)
{
    let disp = document.querySelector('#display');
    disp.innerText += op.id;

    if(operatorVal === ''){
        operatorVal = op.id;
    }
    else if(secondValue !== '' && operatorVal !== ''){
        firstValue = String(operate(firstValue , secondValue , operatorVal));
        secondValue = '';
        operatorVal = op.id;
        console.log(firstValue);
    }

    if(operatorVal === 'equals')
    {
        disp.innerText = String(firstValue);
        firstValue = '';
        secondValue = '';
        operatorVal = '';
    }
}



