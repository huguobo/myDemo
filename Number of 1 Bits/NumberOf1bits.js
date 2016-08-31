//NumberOf1bits.js

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    var sum = 0;
    while(n !== 0){
        sum += n & 1;
        n=n >>> 1;   
    }
    return sum;

};