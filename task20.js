// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
function meeting(s) {
    const modifiedString = s.toUpperCase().replace(/(\w+):(\w+)/g, '($2, $1)');
    const sortedString = modifiedString.split(';').sort().join('');
    return sortedString;
    }