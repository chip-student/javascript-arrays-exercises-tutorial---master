let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arr) {
    let odd = []; //numeros impares
    let even = []; //numeros pares

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
        }
        else {
            even.push(arr[i]);
        }
    }
    let unir = odd.concat(even);
    return unir;
}

console.log(mergeTwoList(list_of_numbers))
