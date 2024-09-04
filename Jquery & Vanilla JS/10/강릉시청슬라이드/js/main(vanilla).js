var playStatus = 0;
var banner = document.querySelector('#banner');
var bannerLi = document.querySelectorAll('#banner li');
// const wi = bannerLi[0].offsetWidth;
var wi = parseInt(getComputedStyle(bannerLi[0]).width);
// 정수만 추출   예)  parseInt(10.5px)- 10만 추출
var num = 0;
var total = bannerLi.length;
//전체사진의 갯수
var copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);
function nextMove() {
    if (num === total) {
        num = 0;
        banner.style.transition = 'none';
        banner.style.marginLeft = '0px';
    }
    setTimeout(function () {
        num++;
        banner.style.transition = 'margin-left, 1s';
        banner.style.marginLeft = -num * wi + "px";
    }, 50);
}
document.querySelector('.btn_next').addEventListener('click', function () {
    nextMove();
});
document.querySelector('.btn_prev').addEventListener('click', function () {
    if (num === 0) {
        num = total;
        banner.style.transition = 'none';
        banner.style.marginLeft = -num * wi + "px";
    }
    setTimeout(function () {
        num--;
        banner.style.transition = 'margin-left, 1s';
        banner.style.marginLeft = -num * wi + "px";
    }, 50);
});
var intervalState = setInterval(nextMove, 3000);
document.querySelector('.btn_stop').addEventListener('click', function () {
    if (this.classList.contains('on')) {
        this.classList.remove('on');
        playStatus = 0;
        intervalState = setInterval(nextMove, 3000);
    }
    else {
        this.classList.add('on');
        clearInterval(intervalState);
        playStatus = 1;
    }
});
var main2 = document.querySelector('.main2');
main2.addEventListener('mouseenter', function () {
    clearInterval(intervalState);
});
main2.addEventListener('mouseleave', function () {
    if (playStatus === 0) {
        intervalState = setInterval(nextMove, 3000);
    }
});
