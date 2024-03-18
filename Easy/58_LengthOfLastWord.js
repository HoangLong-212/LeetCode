//Solution 1
var lengthOfLastWord = function (s) {
    let n = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (n === 0) {
                continue;
            } else {
                break;
            }
        } else {
            n++;
        }
    }
    return n;
};


//Solution 2
var lengthOfLastWord = function (s) {
   return s.trim().split(" ").pop().length
};


//Solution 3 
var lengthOfLastWord = function(s) {
    s = s.trim();
    let words = s.split(' ');
    return words[words.length - 1].length;
};