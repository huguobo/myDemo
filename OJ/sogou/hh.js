var myhw=function(s)
 {
   var max=0;
   s=s+'';
   for(var i=0;i<s.length;i++)
   {
     if(s.split('').slice(0,i+1).join("") == s.split('').slice(0,i+1).reverse().join(""))
     {
         console.log(s.split('').slice(0,i+1).join(""));
         console.log(s.split('').slice(0,i+1).reverse().join(""));
         max=i+1;
     }
   }

   return max;
}

var line;
 var data=["ssgou","hoooooohsdfa","dhdhdhada","dasdsadfasfasfwfwfewewfewfewfefewf","abcddcba"];
// while(line = read_line())
// {
//   data.push(line);
// }


for(var i=0;i<data.length;i++)
{

 console.log(myhw(data[i]));


}
