//accept a string parameter and reverse each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
    return str.split("").reverse().join('').split(" ").reverse().join(" ");
}