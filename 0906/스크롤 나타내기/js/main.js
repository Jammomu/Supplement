$(function(){
  var gap = 103;

  var top1 = $('.area1').offset().top;
  //$('.area1') 브라우저 위부터 떨어진거리
  var top2 = $('.area2').offset().top;
  var top3 = $('.area3').offset().top;
  var top4= $('.area4').offset().top;
  var top5 = $('.area5').offset().top;
  console.log(top1, top2, top3, top4, top5);
  //103 803 1503 2203 2903

  $(window).scroll(function(){
    let h = $(window).scrollTop(); // 스크롤의 위치(스크롤의 양)
    console.log(h);
    if(h < top2 - gap){ // h가 700 보다 작을 때는
      $('.area1').addClass('on'); // area1에 클래스 추가
    } else if(h < top3 - gap){
      $('.area2').addClass('on');
    } else if(h < top4 - gap){
      $('.area3').addClass('on');
    } else if(h < top5 - gap){
      $('.area4').addClass('on');
    } else {
      $('.area5').addClass('on');
    }
  });
  $(window).trigger("scroll");

});