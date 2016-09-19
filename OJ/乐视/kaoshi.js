
var cb=function (n){
    var arr=(n+'').split('').sort();
    var d=0;
    for(var i=0;i<arr.length;i++){
    	if(arr[i]==0){
           d++;
    	}
    }
    if(arr[0]==0){
       var temp;
       temp=arr[0];
       arr[0]=arr[d]
       arr[d]=temp;
    }
    console.log(arr.join(''));
    return parseInt(arr.join(''));
   }

var line;
var data=[3310,1033,5,4,431500975,1020230];

// while(line = read_line()){
//   data.push(line);
// }
var curr=0;
while(curr<data.length){
  var n=data[curr];
  curr++;
  var res=cb(n);
  if(res==data[curr]){
  	console.log("YES");
  }
  else{
  	console.log("NO");
  }
 curr++;
 //print(fb(data[i]-1));
}