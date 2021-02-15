
// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))

function lyricsGenerator(arr) {
    let result ="";
    cont = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result += ' Boom ';
        }
        else {
            cont++;
            result += ' Drop the base ';
            if (cont === 3) {
                result += ' ¡¡¡Break the base!!! ';
            }
        }
    }
    return result;
}