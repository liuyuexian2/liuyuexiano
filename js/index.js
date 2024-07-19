$(document).ready(function(){
    // 当按钮被点击时，执行滚动到底部的动画
    $(".join-button").click(function(){
        $("html, body").animate({ scrollTop:$(document).height() }, "slow");
    });
});