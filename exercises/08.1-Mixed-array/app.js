var mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//your code here

let mix_fix = [];
for (let i = 0; i < mix.length; i++) {
    let tipo = typeof mix[i];
    mix_fix.push(tipo);
}
console.log(mix_fix);
