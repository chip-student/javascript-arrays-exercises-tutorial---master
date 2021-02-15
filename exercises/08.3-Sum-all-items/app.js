function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for (let i=0;i<theArray.length;i++){
        total+=theArray[i];
    }

	return total;
}

console.log(sumTheElements([920000,5000,900,60]))
//this should print 54