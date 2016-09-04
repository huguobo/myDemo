
var fs=require("fs"),
color=require("./colors"),
fin=process.stdin,
fout=process.stdout;
//cwd 返回当前脚本的工作路径
fs.readdir(process.cwd(), function (err,files) {
	 console.log('');
	 if (!files.length) {
	 	// statement
	 	return  console.log('No files to show!');
	 }
    console.log('select which file or directory you want to see\n ');
    //stat 文件信息数组
    var status=[];
    function file (i) {
    	var filename=files[i];
        fs.stat(__dirname+'/'+ filename,function (err,stat) {
    		status[i]=stat;
    		if(stat.isDirectory()){
    			console.log('    '+i+'    \033[36m'+filename+'/\033[39m');
    		}
    		else {
    			console.log('    '+i+'    \033[90m'+filename+'\033[39m');
    		}
    		if (++i==files.length) {
    			read();
    		}else {
    			file(i);
    		}
    	});
    }
    function read() {
    	 console.log('');
    	 fout.write('    \033[33mEnter your choice: \033[39m');
    	 fin.resume();
    	 fin.on('data',option);  
    	 fin.setEncoding('utf8');
    }
    function option (data) {
    	var filename=files[Number(data)];
    	 if (!files[Number(data)]) {
    	 	fout.write('    \033[33mOh,Somehting wrong,Enter your choice again: \033[39m');
    	 }
    	 else {
    	 	if(status[Number(data)].isDirectory()){
    	 		fin.pause();
    	 		fs.readdir(__dirname+ '/' + filename,function (err,files) {
    	 			 console.log('');
    	 			 console.log('('+files.length+'files)');
    	 			 files.forEach( function(file) {
    	 			 	console.log('    -'+file);
    	 			 });
    	 			 console.log('')
    	 		});
    	 	}
    	 	else {
    	 		fin.pause();
    	 		fs.readFile(__dirname+ '/' + filename,'utf8', function (err,filedata) {
    	 		console.log('');
                console.log(filedata.replace(/(.*)/g,'    $1').rainbow);
    	 	});
    	 	}
    	 	
    	 }
    }
    file(0);
});



 