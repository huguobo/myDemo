//baidu.js
var handle=function (arr){
	// var min=9999;
	// var max=0;
	//var minl=0;
	var l=arr.length;
	var str="";
	arr.sort(function(a,b){
		return a.length-b.length;
	});
    
	for(var i=0;i<l;i++){

          if(str.indexOf(arr[i])==-1)
          {
          str+=arr[i];
          }

	}
	
	return str.length;

   }

var line;

var data=[3,"123","34675","dasffggg"];

// while(line = read_line()){
//   data.push(line);
// }
var nline=0;
while(nline<data.length){
	var n=parseInt(data[nline++]);
    var keywords=[];
	for(var i=0;i<n;i++){
		keywords.push(data[nline++]+'');
	}
	// print(handle(keywords));
	console.log(handle(keywords));
}

