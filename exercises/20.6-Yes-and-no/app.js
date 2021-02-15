let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let Bools = theBools.map(function(item){
    let cadena=[];
    if(item ===1){
        cadena='wiki';
    }else{
       cadena ='woko'; 
    }
    return cadena;
});

console.log(Bools);