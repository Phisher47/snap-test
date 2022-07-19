const readline = require('readline');
const calculateRPN = require('./calculate.rpn.js')

const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const startUp = () => {
    readInput.question('Enter Number: ', function (first) {
        try{
            calculateRPN(first, startUp)
        }catch(err){
            console.log(err.message)
            startUp();
        }
    });
}

startUp();

readInput.on('close', function () {
  process.exit(0);
});