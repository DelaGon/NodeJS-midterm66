module.exports = {

//ข้อที่1 X--
func1(req, res) {
    n = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + n);
//let x = 3;
//const y = x--;
//console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"
output = n--;
console.log('output: ' + output);
res.send(output.toString());
},

//ข้อ2 x!
func2(req, res) {
// program to find the factorial of a number
// take input from the user
//const number = parseInt(prompt('Enter a positive integer: '));
// checking if number is negative
number = parseInt(JSON.stringify(req.body["input"]));
console.log("Enter a positive integer: " + number);

if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
     fact *= i;
}
    console.log(`The factorial of ${number} is ${fact}.`);
}
}
};
    
