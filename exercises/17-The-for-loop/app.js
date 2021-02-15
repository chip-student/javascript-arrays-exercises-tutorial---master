var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let val = 0;

for (var index in myArray){

    console.log(myArray[index]);
    
    val += myArray[index];
}
console.log('Calculate the average');
let pro = val / myArray.length;
console.log(pro);

