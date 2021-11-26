// a function that returns the sum of the two lowest positive numbers given an array  
    function sumTwoSmallestNumbers(numbers) {  
        //Code here
        var result=numbers.sort((a,b)=>a-b).slice(0,2);
        var sum=result[0]+result[1];
        return sum;
}
        

