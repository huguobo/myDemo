//qunaer.js
function walk (str) {
	 var arr=str.split('');
	 l=str.length;
	 var i=0,node=1;
	 var mprev;
	 mprev=node;
	 var nodelist=[];
	 while (i<l) {

	 	
	 	if (arr[i]=='L') {
	 		node=node+1<=5?node+1:1;
	 		nodelist.push(node);
	 	}
	 	if(arr[i]=='R'){
	 		node=node+2<=5?node+2:node+2-5;
	 		nodelist.push(node);
	 	}
	 	if(arr[i]=='B'){
	 		nodelist.splice(nodelist.length-1, 1);
	 		node=nodelist[nodelist.length-1];
	 	}
	 	++i;
	  
	 }
   console.log(node);
}

walk("LLRBL");