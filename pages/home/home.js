require(['jquery','avalon'],function($,avalon){
    avalon.ready(function(){
        var vm = avalon.define({
            $id:'test',
            htmlFiles:'',
            /*showCashOut:function(){
                vm.htmlFiles = '../cash/cashOut.html';
            },
            showControlPanel:function(){
                vm.htmlFiles = '../controlPanel/controlPanel.html';
            },
            showCashIn:function(){
                vm.htmlFiles = '../cash/cashIn.html';
            }*/
        });
        avalon.scan();
    });
  
        //左侧导航  
        $(".div2").click(function(){ 
        $(this).next("div").slideToggle();
        changeIcon($(this));
        });
        $(".div2-1").click(function(){ 
            $(this).next("div").slideToggle();

            changeIcon($(this));
        });

        function changeIcon(img) {
            if (img) {
                if (img.css("background-image").indexOf("collapsed.gif") >= 0) {
                    img.css("background-image","url('../../images/home/expanded.gif')");
                } else {
                    img.css("background-image","url('../../images/home/collapsed.gif')");
                }
            }
        }

        //点击增加 active类
        $(".div3").find("a").on("click",function(){
            console.log("ddfsd");
            $(".div3").find("a").removeClass("active");
            $(this).addClass("active");
            //$(this).hover(function(){
              //  $(this).css("background","red");
            //});
        });

        //顶部三个小图标的点击
        $(".icon-warning").on('click',function(e){
            $(".left-1").slideToggle();
            $(".middle-1").hide();
            $(".right-1").hide();
            e.stopPropagation();  //阻止事件冒泡
        });
        $(".icon-bitcoin").on('click',function(e){
            $(".middle-1").slideToggle();
            $(".left-1").hide();
            $(".right-1").hide();
            e.stopPropagation();  
        });
        $(".icon-cny").on('click',function(e){
            $(".right-1").slideToggle();
            $(".left-1").hide();
            $(".middle-1").hide();        
            e.stopPropagation();  
        });

        //点击其他位置，收起
        $('body').bind('click', function(event) {
        // IE支持 event.srcElement ， FF支持 event.target    
            var evt = event.srcElement ? event.srcElement : event.target;    
            if(evt.className == 'header-div-icon' ) return; //如果点击的类名匹配 返回
            else {
                $('.header-div-showHide').slideUp();
            }   
        });

        //创建iframe
        $("<Iframe class='frameHtml' src='../controllPanel/controllPanel.html' height='550' scrolling='no' frameborder='0' name='main'></iframe>").insertAfter(".nav");

        //点击框架 收起
        $(window.frames["main"].document.body).click(function () { 
            $('.header-div-showHide').slideUp(); 
        });
     
        //控制面板右侧 常用 的显示隐藏
        $(".aside-div-spanRight").hover(function(){
            $(".aside-div-spanRight-div").show();
        },function(){
            var timer = setTimeout(function(){
                $(".aside-div-spanRight-div").hide();
            },500);
            $(".aside-div-spanRight-div").hover(function(){
            $(".aside-div-spanRight-div").show();
            clearInterval(timer);
            });
        });

        //操作框架
        $(".liCashIn").click(function(){
            $(".frameHtml").attr("src","../cash/cashIn.html");
        });
        $(".liCashOut").click(function(){
            $(".frameHtml").attr("src","../cash/cashOut.html");
        });
        $(".liguoRenDeal").click(function(){
            $(".frameHtml").attr("src","../guoren/guoRenDeal.html");
        });        
        $(".liguoRenKaDan").click(function(){
            $(".frameHtml").attr("src","../guoren/guoRenKaDan.html");
        });
        $(".liguoRenInput").click(function(){
            $(".frameHtml").attr("src","../guoren/guoRenInput.html");
        });
        $(".liguoRenOutput").click(function(){
            $(".frameHtml").attr("src","../guoren/guoRenOutput.html");
        });
        $(".liguoRenGuaDan").click(function(){
            $(".frameHtml").attr("src","../guoren/guoRenGuaDan.html");
        });
        $(".liuser").click(function(){
            $(".frameHtml").attr("src","../user/user.html");
        });
        $(".liuser-info").click(function(){
            $(".frameHtml").attr("src","../user-info/user-info.html");
        });
        
        $(".ContrllPanel").click(function(){
            $(".frameHtml").attr("src","../controllPanel/controllPanel.html");
        });

            
});



