$(document).ready(function () {
        //alert("hahsha");
    $(".more").hide();
    $(".header2").mouseover(function () {
        $(".header2").css("color","black");
        $(".more").show();
    });
    $(".header2").mouseout(function () {
        $(".header2").css("color","white");
        $(".more").hide();
    });

        $(".insearch").click(function () {
           $("#cam").css("border","1px solid #4791ff") ;
           // alert("addli");
            var form=$("#form");
            var addul = $("<ul id='addul'>"+
                "<a href='#'><li>张丹峰牵手女经纪人</li></a>"+
                "<a href='#'><li>巴黎铁塔被烧</li></a>"+
                "<a href='#'><li>许志安承认出轨</li></a>"+
                "<a href='#'><li>心疼桑洁一秒钟1</li></a>"+
                "</ul>");
            form.append(addul);
            $("#addul").css({"list-style":"none","border":"1px solid #b6b6b6","border-top":"none","color":"#4791ff"});
            $("#cam").css({"border-left":"none","border-right":"none"})
    $(".insearch").mouseout(function () {
        $("#cam").css("border-color","#b6b6b6")
        $(".header2").css("color","white");
        $("#addul").hide();
    });

        });
    });


