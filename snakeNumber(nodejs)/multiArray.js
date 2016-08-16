function sanakenumber(n) {	
var mArr=new Array();
for(var i=0;i<n;i++){
     mArr[i]=new Array();
     for(var j=0;j<n;j++){
     	mArr[i][j]=null;
     }
}
var x=0,y=n-1;
var num=1
mArr[x][y]=1;
while(num<n*n){
     while(x+1<n&&!(mArr[x+1][y])){
     	mArr[++x][y]=++num;
     }
     while(y-1>=0&&!(mArr[x][y-1])){
     	mArr[x][--y]=++num;
     }
     while(x-1>=0&&!(mArr[x-1][y])){
     	mArr[--x][y]=++num;
     }
     while (y+1<n && !(mArr[x][y+1])){
     	mArr[x][++y]=++num;
     }
}

for(var k=0;k<n;k++){
	for(var z=0;z<n;z++){
		process.stdout.write(mArr[k][z]+' ');
	}
	console.log('')
}
}

sanakenumber(3);