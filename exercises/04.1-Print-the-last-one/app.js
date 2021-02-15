function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here

console.log(myStupidArray);

var totalItems = myStupidArray.length;

console.log(totalItems);

let theLastOne = myStupidArray[myStupidArray.lenght-1];
// let theLastOne = totalItems -1;

console.log(theLastOne);
