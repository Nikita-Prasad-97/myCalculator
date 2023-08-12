let displayValue = "";

const input = document.getElementById('inputBox')
input.value = displayValue

const show = (receive) => {
    displayValue += receive;
    input.value = displayValue;

}

const calculate = () => {
    displayValue = eval(displayValue);
    input.value = displayValue;
}

const clearBox = () => {
    displayValue = "";
    input.value = displayValue;

}

const del = () => {
    displayValue = displayValue.slice(0, -1);
    input.value = displayValue;
}

const changeSign = () => {
    displayValue = -displayValue;
    input.value = displayValue;

}