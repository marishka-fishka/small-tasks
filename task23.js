// return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

function stringTransformer(str) {

    var str2 = '';

   for (var i = 0; i < str.length; i++) {
       if (str.charAt(i) === str.charAt(i).toLowerCase()) {
           str2 += str.charAt(i).toUpperCase();
       } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
           str2 += str.charAt(i).toLowerCase()
       } else {
           str2 += str.charAt(i);
       }
   }

return str2.split(/\s/).reverse().join(" ")
}