let equation="";
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
        case 'divide':
            return divide(px,py);
        case 'multiply':
            return multiply(px,py);
        case 'add':
            return add(px,py);
        case 'subtract':
            return subtract(px,py);
    }
}


function evaluateEquation(button){
    console.log(button);
    const display = document.querySelector("#display");

    console.log(display);
    if(button.id === "="){
        console.log("equals");
        processEquation();

    }
    else{
        equation += button.id;
        display.innerText = equation;
    }
    
}

function processEquation(){
    display.innerText = equation;
    equation = "";
}


