//create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. f .e [2,3,1]->0

var gimme = function (inputArray) {
    var smallest = Math.min.apply(null, inputArray);
    var max = Math.max.apply(null, inputArray);
    var index=0;
    for (var i=0; i<inputArray.length; i++)
    {
        if (inputArray[i]!=smallest && inputArray[i]!=max){
        return index=i;
        }
    
    }return index ;
    }