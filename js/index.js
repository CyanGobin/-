window.onload = function () {
    var btn = document.getElementById('btn');//获取回到顶部的元素
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;//页面课适化高度
    var timer = null;//定义定时器
    var isTop = true;//表示是否在回到顶部是，用户滚动滚轮
    window.onscroll = function () {
        var optI = document.documentElement.scrollTop || document.body.scrollTop;
        if (optI >= clientHeight) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
        if (!isTop && timer !== null) {//在自动回到顶底是，鼠标滑动滚轮时清除定时器
            clearInterval(timer);
        }
        isTop = false;
    }

    btn.onclick = function () {
        timer = setInterval(function () {
            var opts = document.documentElement.scrollTop || document.body.scrollTop;
            var isSpeed = Math.floor(-opts / 7);//获取回到顶部的步长
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = opts + isSpeed;
            if (opts == 0) {
                clearInterval(timer);
            }
        }, 30);
    }


}


