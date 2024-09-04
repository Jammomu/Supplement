$(function(){
  let visual = $('#brandVisual > ul > li'); // 큰 사진
  let button = $('#buttonList > li'); // pager 버튼
  let current = 0;
  let id;

  button.click(function(){
    let i = $(this).index(); // 클릭한 버튼의 인덱스 번호를 i에 반환(대입)
    button.removeClass('on'); // 모든 버튼에서 클래스 'on'이 있으면 제거
    $(this).addClass('on'); // 클릭한 버튼에 클래스 'on'을 삽입
    // button.eq(i).addClass('on'); // 위와 동일

    move(i);

    return false;
  });

  function timer(){
    id = setInterval(function(){
      let n = current + 1;
      if(n == 3){
        n = 0;
      }
      button.eq(n).trigger('click'); 
      // 인덱스 번호 n에 해당되는 버튼을 컴퓨터가 클릭한다.
    }, 3000);
  }
  timer();

  function move(i){
    if(current == i) return; 
    // 현재 활성화된 button(검정색 버튼)과 클릭한 버튼이 같으면 move함수를 빠져나감
    let cu = visual.eq(current);
    let ne = visual.eq(i);
    cu.css('left', '0').stop().animate({'left' : '-100%'}, 500);
    ne.css('left', '100%').stop().animate({'left' : '0'}, 500);
    current = i;
  }

});