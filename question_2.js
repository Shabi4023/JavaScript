//  Write a JavaScript function that takes a string as a parameter and returns an object with the properties ‘originalString’, ‘upperCase’, and ‘lowerCase’, which represent the original string, the string in upper case, and the string in lower case respectively.

let str = prompt("Enter your naem: ");

function strOperations(st) {
    let strObject = {};
    let strUpperCase = str.toUpperCase();
    let strLowerCase = st.toLowerCase();
    strObject["Original Name :"] = st;
    strObject["Uppercase Name :"] = strUpperCase;
    strObject["LowerCase Name :"] = strLowerCase;

    return strObject;
}

console.log(strOperations(str));