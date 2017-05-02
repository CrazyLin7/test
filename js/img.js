// @charset "utf-8";

    window.onload = function(){
     
        var images = document.getElementsByTagName('img');
        var pos = 0;
        var len = images.length; //len = 4，有3张图片
         
        setInterval(function(){
         
            images[pos].style.display = 'none';//1 2 3 0
            pos = ++pos === len ? 0 : pos;//1 2 3 0 
            images[pos].style.display = 'inline';
         
        },2000);
         
    };
