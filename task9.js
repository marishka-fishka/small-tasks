//an equable triangle or not
function equableTriangle(a,b,c) {
    var perimetr = a+b+c;
    var s=perimetr/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        if (area==perimetr){
        return true;
        }
    else 
        {return false;}
 
}