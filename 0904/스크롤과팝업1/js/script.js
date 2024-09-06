$(function(){
  let h;
  $(window).resize(function(){
    h = $(window).height(); // 현재 브라우저 높이를 h에 저장(대입)
    $('section > div').height(h);
  });
  $(window).trigger('resize');
  // 브라우저 시작시 강제로 resize;

  let dTop = $('#floatdiv').offset().top; // 250

  $(window).scroll(function(){
    let sct = $(window).scrollTop();
    $('#sTop').text(sct);
    if(sct >= 100){
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }

    $('#floatdiv').stop().animate({top : dTop + sct}, 500); // 우측 네비가 스크롤하면 쫒아옴
    
    // if(sct > $('section > div').ea(0).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(0).addClass('on');
    // }
    // if(sct > $('section > div').ea(1).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(1).addClass('on');
    // }
    // if(sct > $('section > div').ea(2).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(2).addClass('on');
    // }
    // if(sct > $('section > div').ea(3).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(3).addClass('on');
    // }
    // if(sct > $('section > div').ea(4).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(4).addClass('on');
    // }
    // if(sct > $('section > div').ea(5).offset().top){
    //   $('nav ul li').removeClass('on');
    //   $('nav ul li').eq(5).addClass('on');
    // }
    
    // 위의 주석 코드를 반복문 돌려서 가능.
    for(var i =0; i < 6; i++){
      if(sct >= $('section>div').eq(i).offset().top){
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(i).addClass('on');
        $('#floatdiv ul li').removeClass('on');
        $('#floatdiv ul li').eq(i).addClass('on');
      }
    }
  });


  $('nav ul li').click(function(){
    let i = $(this).index();
    let offset_nav = $('section > div').eq(i).offset().top;

    // 아래의 주석 코드는 사용X. 스크롤 할 때 문제가 생김
    // $('nav ul li').removeClass('on');
    // $(this).addClass('on');
    // $('nav ul li').removeClass('on');
    // $('nav ul li').eq(i).addClass('on');

    $('html, body').stop().animate({scrollTop : offset_nav}, 1000);
  });
  
  $('#floatdiv ul li').click(function(){
    let i = $(this).index();
    let offset_div = $('section > div').eq(i).offset().top;

    // 아래의 주석 코드는 사용X. 스크롤 할 때 문제가 생김
    // $('nav ul li').removeClass('on');
    // $(this).addClass('on');
    // $('nav ul li').removeClass('on');
    // $('nav ul li').eq(i).addClass('on');

    $('html, body').stop().animate({scrollTop : offset_div}, 1000);
  });

  // $("section > div").mousewheel(function(event, d){
  //   console.log(d);
  //   if(d > 0){
  //     let prev = $(this).prev().offset().top;
  //     $('html, body').stop().animate({scrollTop : prev}, 1000);
  //   }
  //   if(d < 0){
  //     let next = $(this).next().offset().top;
  //     $('html, body').stop().animate({scrollTop : next}, 1000);
  //   }

  // });

  // jquery-ui.js 지원하는 플러그인
  $('#popup').draggable();
  // 기본적으로 처음에는 $.cookie('pop') 에 no가 없으므로
  // '#popup'을 보여준다.
  if($.cookie('pop') != "no"){
    $('#popup').show();
  }
  $('#popup area:eq(0)').click(function(){
    $("#popup").fadeOut('fast'); // 서서히 없어져라
  });
  $('#popup area:eq(1)').click(function(){
    $.cookie('pop', 'no', {expires : 1}); // 하루 동안 닫기
    $("#popup").fadeOut('fast');
  });

  if($.cookie('popup') == 'none'){
    $('#notice_wrap').hide();
  }
  let chk = $('#expiresChk'); // checkbox
  $('.closeBtn').on('click', closePop);
  function closePop(){
    if(chk.is(":checked")){ // input 창이 checked가 되어있으면
      $.cookie('popup', 'none', {expires : 3});
    }
    $('#notice_wrap').fadeOut("fast");
  }

});