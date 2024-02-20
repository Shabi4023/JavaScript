// Write a JavaScript function that generates and returns another function. The inner function should calculate the square of a number when given the number as a parameter.


let num = prompt("Enter number to find sqaure : ");
let sq;

//main function.
function mainFunc(n, callingFunction) {
        callingFunction(n);
        console.log(sq);
}

//callback function.
function callingFunction(a) {
    return sq = a*a;

}

mainFunc(num, callingFunction);
