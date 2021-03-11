$(document).ready(function(){
    //nav
    $('.btn').click(function(){
       $('.navi').stop().animate({
           left:0
       },500); 
    });
    //close
    $('.close').click(function(){
       $('.navi').stop().animate({
           left:'-100vw'
       },500);
    });
    //주메뉴클릭시 서브메뉴나타남
    //모든 서브메뉴 안보임
    $('.sub').hide();
    //첫번째 메뉴의 서브메뉴만 보임
    $('nav ul li:first-child .sub').show();
    //첫번째 메뉴에 active설정
    $('nav ul li:first > a').addClass('active');
    //주메뉴 클릭하면 서브메뉴 나타남
    $('nav ul li a').click(function(){
       $('nav ul li a').removeClass('active');
        $(this).addClass('active');
       $('.sub').hide();
        $(this).next().show();
    });
    
    
    //swiper1
    var swiper = new Swiper('.swiper1',{
        centeredSlides: true,
        effect:'fade',
        loop:true,
        autoplay:{
        delay:4000,
        disableOnInteraction: false,
        },
        
        pagination: {
        el: '.swiper-pagination',
        },
    });
    
    //tab
    var num=0;
       $('.tab-content > div').hide();
       $('.c1').show();
           
       $('.tab-title div').click(function(){
           num=$(this).index();
                
           $('.tab-title div').removeClass('active');
           $(this).addClass('active');
                
           $('.tab-content > div').each(function(){
               var idx=$(this).index();
               if(num == idx){
                   $('.tab-content > div').hide();
                   $(this).show();
               }
           });
       });
    
    //rolling
    var height= $(".notice-in").height(); //공지사항의 높이값 구함
    var num = $(".rolling li").length; //공지사항의 개수 찾음
    var max = height * num; //높이값*개수로 총 높이를 구함
    var move = 0; //초기값
    function noticeRolling(){
        move += height; //+= 는 move+height 값의 뜻을 줄인 것
        $(".rolling").animate({"top":-move},600,function(){
           if(move>=max){ //최대값보다 top값을 많이 올렸다면 다시
               $(this).css("top",0); //0으로 돌려주고
               move=0; //초기값도 0으로 
           }; 
        });
    };
    
    //자동으로 3초마다 함수실행
    noticeRollingOff = setInterval(noticeRolling,3000);
    //올라가다 마지막이 없으면 clone를 통해 첫번째 li복사
    $(".rolling").append($(".rolling li").first().clone());
});