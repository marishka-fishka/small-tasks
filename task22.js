function letterCount(s){
    var obj = {};
    for (var i=0; i<s.length;i++) {
        var character = s.charAt(i);
        if (obj[character]) {
            obj[character]++;
            } else {
            obj[character] = 1;}
}
return freq;
}
