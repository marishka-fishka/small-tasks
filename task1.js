//Find sum of positive numbers
function positiveSum(arr) {
    arrPosit =[];
    var sum=0;
    for (var i=0; i<arr.length; i++){ 
        if (arr[i]>0){
        arrPosit.push(arr[i]);
        sum += arr[i];}
      }
  return sum;  
    
    }