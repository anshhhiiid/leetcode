/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str= x.toString();
    let reverse = str.split("").reverse().join("");
    return str === reverse; 
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));