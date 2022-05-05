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
    switch(operator){
        case 'divide':
            divide(x,y);
            break;
        case 'multiply':
            multiply(x,y);
            break;
        case 'add':
            add(x,y);
            break;
        case 'subtract':
            subtract(x,y);
            break;
    }
}


