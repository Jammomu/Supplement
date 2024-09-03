var sub = document.querySelectorAll('.sub');

function slideUp() {
  sub.forEach(function(item) { // 각각의 sub를 돌면서
    item.style.height = '0px'; // 각각의 아이템의 높이를 0px로 만든다
  });
}

var menuLiA = document.querySelectorAll('.m_menu > li > a');
menuLiA.forEach(function(item) {
  item.addEventListener('click', function() {
    var subHeight = getComputedStyle(this.nextElementSibling).height;
    // getComputedStyle는 DOM 요소의 현재 스타일을 가져오기 위한 메소드
    // alert(subHeight);
    if(subHeight == '0px') {
      slideUp();
      this.nextElementSibling.style.height = '108px';
    } else {
      this.nextElementSibling.style.height = '0px';
    }
  });
});