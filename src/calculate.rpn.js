const { OPERATORS } = require('./consts/index.js');
const inputValidations = require('./utils/input.validation.js');
const operations = require('./utils/operations.js');

let stack = [];

const calculateRPN = (userInput, callBack) => {

    inputValidations(stack.length, userInput)

    if (!OPERATORS.includes(userInput)) {
        stack.push(parseInt(userInput));
        callBack()
    }
    else {
        let firstValue = stack.pop();
        let secondValue = stack.pop();
        const operator = OPERATORS.find((item) => item === userInput)
        stack.push(operations[operator](secondValue, firstValue));
        callBack()
    }
    console.log("======", stack);
}
module.exports = calculateRPN