let firstNumber 
let secondNumber
let step = 0;
let operation 
let result = 0;

let numArray = []
let secNumArray = []

let display = document.getElementById('display');


function getNumber(num){

    //to keep the number within the displays size 
    if(display.value.length > 9){
        alert('The number is too large!');
        return;
    }
    
    // max num valu in js 
    // if(num > Number.MAX_VALUE){
    //     alert('The number is too large!');
    //     return;
    // }
    //display.value = num;

    if(step === 0 || step === 1){
        numArray.push(num) // the arr will look like [2, 4, 5]
        step = 1;
        firstNumber = Number(numArray.join('')) // to merge them into one string ant Num() will make it a numver
        display.value = firstNumber;
    } else if (step === 2){
            secNumArray.push(num)
            secondNumber = Number(secNumArray.join(''))
            display.value = secondNumber;
    }
}


function getOperator(op){
    step = 2;
    operation = op;
}

function clearDisplay(){
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null;
    result = 0;
    numArray = []
    secNumArray = []
}

const calculate = () => {
        if(operation === '+'){
            result = firstNumber + secondNumber;
            display.value = result;
        } else if (operation === '-'){
            result = firstNumber - secondNumber;
            display.value = result;
        } else if (operation === '*'){
            result = firstNumber * secondNumber;
            display.value = result;
        } else if (operation === '/'){
            if(secondNumber == 0){
                alert('The number can not be devided by 0!');
                return;
            }
            result = firstNumber / secondNumber;
            display.value = result;
        } 
    }