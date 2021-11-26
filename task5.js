
function highAndLow(numbers){
    // you are given a string of space separated numbers, and have to return the highest and lowest number.
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers)+ " "+ Math.min.apply(null, numbers);
  }