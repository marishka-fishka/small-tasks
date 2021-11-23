//return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{var index;
 var length;
  
  if (s.length%2==1){
    index = s.length/2;
    length = 1;  
}
  else{
    index = s.length/2 -1;
    length = 2;
  }
 return s.substring(index, index+length);
  
  //Code goes here!
}