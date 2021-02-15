let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i in par) {
    let valor = par[i].toLowerCase();
    if (valor == " ") {
        continue;
    } else if (counts[valor] == undefined) {
        counts[valor] = 1;
    } else {
        counts[valor] = counts[valor] + 1;
    }
}

console.log(counts);