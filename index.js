// displayelement
const operatorVal = '+-*/%'

const display = document.getElementById("display");
const res = []

function appendToDisplay(input) {
    res.push(input)
    if (operatorVal.includes(res[res.length - 1]) && operatorVal.includes(res[res.length - 2]))
     {
        clearLastDigit()
        display.value += res[res.length - 1]

    }
    else {
        display.value += input;
    }

}

function clearDisplay() {
    display.value = "";

}

function calculate() {
    const lastVal = display.value.charAt(display.value.length - 1);
    if (operatorVal.includes(lastVal)) {
        const result = display.value.slice(0, -1)
        display.value = eval(result);
    }
    else {
        console.log("else trigger");
        display.value = eval(display.value);
    }

}

function clearLastDigit() {
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}