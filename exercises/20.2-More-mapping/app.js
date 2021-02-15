

var myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];


// your code here

let newArray = myNumbers.map(function myFunction (value) {

    //add your code here and return the new value
    let result = value * 3;
    return result;
});


console.log(newArray);