// Code goes here
function matrixBuilder(num) {
    let matriz = [];
    let arr1 = [];

    //crea la matriz
    for (let i = 0; i < num; i++) {
        matriz[i] = [];
         for (let j = 0; j < num; j++) {
            matriz[i][j] = Math.floor(Math.random() * 2);
        }
    }
    return matriz;
}

// do not change anything from this line down
console.log(matrixBuilder(5))