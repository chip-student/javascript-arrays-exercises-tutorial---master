var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    myArray = [];
    people.forEach(function (item){
        if (item != personName){
            myArray.push(item);
        }
    });
    return myArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));