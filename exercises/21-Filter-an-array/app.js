let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

let resultingNames = allNames.filter(function(names){
    let letra = names.substring(0,1);
    if(letra === 'R'){
        return names;
    }
});

console.log(resultingNames);