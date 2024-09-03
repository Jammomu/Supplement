const targetLink = document.querySelectorAll('.tab_menu a');
const tabContent = document.querySelectorAll('#tabContent>div');

for(let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener('click', function(e) {
    e.preventDefault(); // return false; 와 유사 (링크금지)
    // #tabs1, #tabs2, #tabs3 가져오기
    const orgTarget = e.target.getAttribute('href'); // 클릭한 것(e.target)
    // alert(orgTarget);
    const tabTarget = orgTarget.replace('#', ""); // tabs1, tabs2 에서 '#'을 뺀다.
    // alert(tabTarget);

    for(let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = 'none'; // 모든 컨텐츠를 숨긴다.
    }
    document.getElementById(tabTarget).style.display = 'block'; // id 선택자가 tab~인 컨텐츠를 보여준다.
    // document.getElementById(tab3).style.display = 'block';

    for(let k = 0; k < targetLink.length; k++) {
      targetLink[k].classList.remove('active'); // for문을 돌면서 active를 삭제한다.
      // tab_menu a 에 active를 주어 색상 변경
      e.target.classList.add('active'); // 클릭 한 것에 active를 넣는다.
    }

  });
}