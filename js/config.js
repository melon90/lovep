seajs.config({
    base:"http://127.0.0.1/js/sea-modules/",
    alias:{
        "jquery":"jquery/jquery/1.10.1/jquery.js",
        "bootstrap":"bootstrap/3.3.7/bootstrap.min.js",
        "angular":"angularjs/angularjs/1.1.5/angular.js"
    }
});
//加载bootstrap样式
seajs.use("bootstrap/3.3.7/bootstrap.min.css");