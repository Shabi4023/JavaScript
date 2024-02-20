// Write a JavaScript function that takes an array and a callback function as parameters.The function should apply the callback to each element of the array and return a new array.

const arr = [1, 2, 3, 4, 5];
let newArray = [];

//main function.
function mainFunc(data, callingFunction) {
    for (let i = 0; i < data.length; i++) {
        callingFunction(data[i]);
    }
    console.log(newArray);
}

//callback function.
function callingFunction(dt) {
    newArray.push(dt);

}

mainFunc(arr, callingFunction);
