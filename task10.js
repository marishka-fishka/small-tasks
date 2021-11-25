//Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
    var sum=0;
    for(i=0; i<array.length; i++){
    sum += array[i];}
    if(sum%2==0){
        return "even";}
    else{
    return "odd";}
    }