//子数组最大和，注意考虑全是负数的情况。
process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input = "";
var input_array = "";


process.stdin.on('data', function (data) {
    input += data;
});

function maxsub(arr){
        var maxSum=0;
	    var thisSum=0;
	    var flag=0;
	    for(var i=0;i<arr.length;i++){
	      if(parseInt(arr[i],10)>0){
	      flag=1;
	      break;
	      }
	    }
	    if(flag==0){
	    return arr.sort(function(a,b){return b-a;})[0];//全是负数的话返回一个最大的负数
	    }

	    else{
    	for(var i=0;i<arr.length;i++){
	 	thisSum=thisSum+parseInt(arr[i],10);//有一个以上的正数就按叠加过程判断。
	 	if (thisSum>maxSum) {
	 		maxSum=thisSum;
	 	}
	 	
	 	else if (thisSum<0) {
	 		thisSum=0;
	 	}
	   }
	   
	 return maxSum;}
}

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    

    while(nLine < input_array.length){
    	var line = parseInt(input_array[nLine++],10);
    	if(line === ''){
    		continue;
    	}
    	var marr=(input_array[nLine++]+'').split(' ');
        
        var res= maxsub(marr);
        console.log(res);

    }
});
