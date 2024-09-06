$(function(){
  //1. 리사이즈 
  var ht;

  $(window).resize(function(){
    ht = $(window).height(); //현재 브라우저의 높이를 구한다.
    $('section').height(ht);
  //구한 높이값을 가져와서 컨텐츠영역(section)의 높이에 대입
  //각각의 section의 높이와 브라우저 높이가 일치
  });
  $(window).trigger('resize');
  //리사이즈는 처음에 적용이 안되므로
  //강제로 사이즈를 한 번 조정




  //2.  #menu li 클릭했을때 화면이동(animate)
  $('#menu li').click(function(){
    var i = $(this).index();
    // var ii = $('section').eq(i).offset().top;
    // $('html,body').stop().animate({scrollTop:ii},1300);
    $('html,body').stop().animate({scrollTop:ht*i},1300);
    return false;
  });

  
  //3. 스크롤시 #menu li 클래스 삭제및 클래스 on 삽입 
  $(window).on('scroll',function(){
    var sct = $(window).scrollTop();//스크롤 위치값

  // if(sct >= ht * 0 && sct < ht * 1){
  //     $('#menu li').removeClass('on');
  //     $('#menu li').eq(0).addClass('on');
  // }
  // if(sct >= ht * 1 && sct < ht*2){
  //     $('#menu li').removeClass('on');
  //     $('#menu li').eq(1).addClass('on');
  //   }
  // if(sct >= ht * 2 && sct < ht * 3 ){
  //     $('#menu li').removeClass('on');
  //     $('#menu li').eq(2).addClass('on');
  // }
  // if(sct >= ht * 3 && sct < ht*4 ){
  //   $('#menu li').removeClass('on');
  //   $('#menu li').eq(3).addClass('on');
  // }

  // for(var i=0;i < 5;i++){ 
  //  if(sct >= ht * i && sct < ht * (i+1)){
  //         $('#menu li').removeClass('on');
  //         $('#menu li').eq(i).addClass('on');
  //     }
  // } 
  var i = 0;
  $('#menu li').each(function(i){
      if(sct >= ht * i && sct < ht * (i+1)){
          $('#menu li').removeClass('on');
          $('#menu li').eq(i).addClass('on');
      }
  });


});

//마우스 휠
$('section').mousewheel(function(event,d){
    console.log(d);
    //마우스휠을 위로 올렸을때
    if(d > 0){
        var prev = $(this).prev().offset().top;
        $('html,body').stop().animate({scrollTop:prev},1300,'easeOutBounce');
    }
    //easeOutBounce 검색하면 jquery공작소 사이트에 그림과 함께 설명

    //마우스휠을 밑으로 내렸을때
    if(d < 0){
        var next = $(this).next().offset().top;
        $('html,body').stop().animate({scrollTop:next},1300,'easeOutBounce');
    }


  });

  $('section').on('mousemove',function(e){
    var posX = e.pageX;//x좌표
    var posY = e.pageY;//y좌표
    console.log(posX,posY)
  $('.p11').css({'right':20 - (posX/30),'bottom':20 - (posY/30)});
  $('.p12').css({
    'right':130 - (posX/20),
    'bottom':-40 - (posY/20)
  });
  $('.p13').css({
    'right':60 + (posX/20),
    'top':180 + (posY/20)
  });


  //2페이지
  $('.p21').css({
      'right':-180 - (posX/30),
      'bottom':-480 - (posY/30)
    });
    $('.p22').css({
      'right':130 + (posX/50),
      'bottom':-40 + (posY/50)
    });
  //3페이지
  $('.p31').css({ 'right':280 - (posX/30), 'bottom':30 - (posY/30)});
  $('.p32').css({
    'right':110 + (posX/20),  'bottom':-270 +  (posY/20)});
    $('.p33').css({
    'right':-70 + (posX/20),
    'bottom':-130 + (posY/20)
  });
  
    //4페이지
    $('.p41').css({
    'right':20 - (posX/30),
    'bottom':-120 - (posY/30)
  });
  $('.p42').css({
    'right':0 - (posX/20),
    'bottom':-180 - (posY/20)
  });
});






});