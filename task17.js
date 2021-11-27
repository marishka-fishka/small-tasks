//Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
    var newArr=s.split(' ');
    var sortArr = newArr.sort((a,b)=>{return a.length - b.length;})
    return sortArr[0].length;
}