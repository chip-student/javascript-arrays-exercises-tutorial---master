var arr = [4, 5, 734, 43, 45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
for (let i = 0; i < 10; i++) {
    let ale = Math.floor(Math.random() * arr.length);
    arr.push(ale);
}
//*****************

console.log(arr);