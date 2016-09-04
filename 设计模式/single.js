//single.js
//闭包
var single = (function(){

    var unique;



    function getInstance(){

        if( unique === undefined ){

            unique = new Construct();

        }

        return unique;

    }



    function Construct(){

        // ... 生成单例的构造函数的代码

    }



    return {

        getInstance : getInstance

    }

})();

//函数内部判断
function Construct(){

    // 确保只有单例

    if( Construct.unique !== undefined ){

        return Construct.unique; 

    }

    // 其他代码

    this.name = "NYF";

    this.age="24";

    Construct.unique = this;

}