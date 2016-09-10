//binarySearchTree.js

function binarySearchTree(){
    
    //定义节点node数据结构
    var node=function (key) {
    	 this.left=null;
    	 this.right=null;
    	 this.value=key; 
    }
    
    //初始化根
    var root=null;

   
    //实现插入一个新节点的方法insert
    this.insert=function (key) {
    	 var newnode=new node(key);
    	 if(root===null){
    	 	root=newnode;
    	 }
    	 else{
    	 	insertNode(root,newnode);
    	 }
    }
    var insertNode=function (node,newnode) {
    	 if(newnode.value<node.key){
    	 	if(node.left===null){
    	 		node.left=newnode;
    	 	}
    	 else{
    	 	insertNode(root.left,newnode);
    	   }
    	 }
    	 else {
    	 	if(node.right===null){
    	 		node.right=newnode;
    	 	}
    	 	else{
    	 	insertNode(root.right,newnode);
    	 	}
    	 }

    }
  
}