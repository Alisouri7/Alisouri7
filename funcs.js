let uglyNumbers = []
let currentNumber = 1
let counter = 0
function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number = number / divisor;
    }
    return number;
}
function isUgly(number) {
    number = maxDivide(number, 2)
    number = maxDivide(number, 3)
    number = maxDivide(number, 5)
    return number === 1;
}

function starter(number) {
    while (counter != number) {
        if (isUgly(currentNumber)) {
            counter++
            uglyNumbers.push(currentNumber)
        }
        currentNumber++;
    }
    return uglyNumbers;
}
console.log(starter(11));
