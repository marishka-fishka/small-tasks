/*Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.*/

function removeSmallest(numbers) {
  
    const smallest = Math.min(...numbers);
    const index = numbers.indexOf(smallest);
    
    return numbers.filter((_, i) => i !== index);
  }