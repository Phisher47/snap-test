const { OPERATORS, ALLOW_ONLY_NUMBERS_AND_BASIC_OPERATORS } = require('../consts/index.js');

const inputValidations = (listLength, userInput) => {

    if (!ALLOW_ONLY_NUMBERS_AND_BASIC_OPERATORS.test(userInput))
        throw new Error("Invalid Input")

    if (listLength < 2 && OPERATORS.includes(userInput))
        throw new Error("At least two operands required")

}

module.exports = inputValidations