//wanmei.js
//定义函数
var calcThrowNumber=function (n,k){
	 var MAX_FLOOR=10000;
     var  MAX_BALL=10000;
     if(k<1 || n<1) return -1;    
     if(k==1) return n-1;      
     if(n==1) return 0;

     var M=new Array();
     for(var i=0;i<MAX_FLOOR;i++){
      M[i]=new Array();
     for(var j=0;j<MAX_BALL;j++){
     	M[i][j]=null;
     }
     }

    for(i=0;i<=k;i++) M[i][0]=M[i][1]=0;    
    for(j=2;j<=n;j++) M[1][j]=j-1;         
    for(i=2;i<=k;i++)
       for(j=2;j<=n;j++)
        {
            min = 9999;
            for(r=1;r<=j;r++)
             {
                 temp = +(M[i-1][r]>M[i][j-r]? M[i-1][r]:M[i][j-r])+1;
                 if(temp<min)
                    min = temp;
           }
             M[i][j] = min;
         }

    return M[k][n];
}
//定义输入
var line;

var data=["100 3","100 2"];//接受输入的数组

// while(line = read_line()){
//   data.push(line);
// }
for(var i=0;i<data.length;i++){
var n=parseInt((data[i]+'').split(" ")[0]);
var m=parseInt((data[i]+'').split(" ")[1]);


 // print(calcThrowNumber(n,m));}
 console.log(calcThrowNumber(n,m));}
