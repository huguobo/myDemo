//happynumber.js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	if (n == 1){
		return true;
	}
    function doLoop(num) {
		var num_str = num.toString();
		var sum = 0;
		for (var i = 0; i < num_str.length; i++){
			sum += num_str[i] * num_str[i]; 
		}
		return sum;
	}
	var results = new Array();
	while (true) {
		var res = doLoop(n);
		for (var i = 0; i < results.length; i++){
			if (results[i] == res){
				return false;
			}
		}
		results.push(res);
		for (var j = 0; j < results.length; j++){
			if (results[j] == 1){
				return true;
			}
		}
		var n = res;
	}
};