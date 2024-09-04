window.addEventListener('DOMContentLoaded', function () {
  var visual = document.querySelectorAll('#brandVisual > ul > li'); // 큰 사진
  var button = document.querySelectorAll('#buttonList > li'); // pager 버튼
  var current = 0; // 현재 인덱스
  var id;

  // 버튼 클릭 이벤트
  button.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
          button.forEach(function (b) {
              b.classList.remove('on');
          });
          btn.classList.add('on');
          move(index);
          return false;
      });
  });

  // 자동 슬라이드 타이머
  function timer() {
      id = setInterval(function () {
          var n = current + 1;
          if (n === 3) { n = 0; }
          button[n].click(); // 다음 버튼 클릭 트리거
      }, 3000);
  }
  timer();

  // 슬라이드 이동 함수
  function move(i) {
      if (current === i) return; 
      var cu = visual[current];
      var ne = visual[i];

      cu.style.left = '0';
      ne.style.left = '100%';

      cu.style.transition = 'left 0.5s';
      ne.style.transition = 'left 0.5s';

      cu.style.left = '-100%';
      ne.style.left = '0';

      current = i;
  }
});