var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
function aleatorio(){
    for (let i=0;i<2;i++)
    {
        let valor = Math.floor(Math.random() * arr.length)
        arr.push(valor);
    }
}

let res = aleatorio();
console.log(arr);
