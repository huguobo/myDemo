
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input ="";
var line="";
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
   var line= input.split("\n");
   var linenum=0;
   while(linenum<line.length){
   var n=line[linenum];
   linenum+=1;
   var arr=(line[linenum]).split(" ");
   linenum+=1;
   foo(n,arr);
}
});
function foo(n,arr){
     var max=0;
  	 var min=0;
     var flag=1;
    if(n==1){
       console.log(0);
     }
    else if(n==2){
    var result=arr[1]-arr[0];
    console.log(result);
    }
    else{
  	 var maxArr=[]; 
     for (var i = 0; i< n-1; i++) {
     	 maxArr[i]=arr[i+1]-arr[i];
     	 }
     max=Math.max.apply(null,maxArr);
     var minArr=[];
     for(var j=0;j<n-2;j++){
     	minArr[j]=maxArr[j]+maxArr[j+1];
     	if (minArr[j]<=max) {
     		console.log(max);
           flag=0;
     	}
     }
    if(flag){
     min=Math.min.apply(null,minArr);
     console.log(min);
    }
     }
}