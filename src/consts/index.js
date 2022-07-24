const OPERATORS = ["+", "-", "/", "*"];
const ALLOW_ONLY_NUMBERS_AND_BASIC_OPERATORS =  new RegExp(/^[0-9*/+-]+$/);

module.exports = { 
    OPERATORS,
    ALLOW_ONLY_NUMBERS_AND_BASIC_OPERATORS
}